<#
.SYNOPSIS
  Builds the site and deploys it to the Windows service, with about 10 seconds of downtime.

.DESCRIPTION
  1. npm ci + next build inside the repo (the running site is not touched yet)
  2. Stages the standalone server, static files, public/ and sharp's native files into "<SiteDir>.new"
  3. Stops the service, swaps the folders, starts the service and waits for /healthz

  The service runs from a separate folder because Windows locks the files a running
  process has loaded, so building into the live folder would fail.

  Run from an elevated PowerShell in the repo:
    powershell -ExecutionPolicy Bypass -File deploy\windows\deploy.ps1

.PARAMETER SiteDir
  Folder the service runs from. Default: a "site" folder next to the repo.
.PARAMETER SkipInstall
  Skip "npm ci" (faster when dependencies have not changed).
.PARAMETER SkipBuild
  Reuse the existing .next build (for example after a failed swap).
#>
param(
  [string]$SiteDir,
  [string]$ServiceName = 'SaidTechnologiesWeb',
  [int]$Port = 3000,
  [switch]$SkipInstall,
  [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$RepoDir = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
if (-not $SiteDir) { $SiteDir = Join-Path (Split-Path $RepoDir -Parent) 'site' }
$Staging = "$SiteDir.new"
$Previous = "$SiteDir.old"

function Step($msg) { Write-Host "`n==> $msg" -ForegroundColor Cyan }

function Copy-Tree($from, $to) {
  # robocopy: exit codes below 8 mean success
  robocopy $from $to /E /NFL /NDL /NJH /NJS /NP /R:2 /W:2 | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "Copy failed ($LASTEXITCODE): $from -> $to" }
  $global:LASTEXITCODE = 0
}

function Remove-Dir($dir) {
  # Remove-Item fails on paths over 260 characters (Next's image cache has very long file
  # names), so empty the folder by mirroring an empty one first. Retries because a stopped
  # node.exe can hold file locks for a moment.
  $empty = Join-Path $env:TEMP "said-empty-$PID"
  New-Item -ItemType Directory -Force $empty | Out-Null
  for ($i = 0; $i -lt 10 -and (Test-Path $dir); $i++) {
    robocopy $empty $dir /MIR /NFL /NDL /NJH /NJS /NP /R:1 /W:1 | Out-Null
    try { Remove-Item $dir -Recurse -Force -ErrorAction Stop } catch { Start-Sleep -Seconds 2 }
  }
  $global:LASTEXITCODE = 0
  Remove-Item $empty -Force -ErrorAction SilentlyContinue
  if (Test-Path $dir) { throw "Could not delete $dir (a file is still locked)" }
}

# ---- Checks ----
Step 'Checking prerequisites'
$nodeVersion = [version]((node -v).TrimStart('v'))
# The site is built and tested on Node.js 24 LTS (see SAID-Website-VM-Setup-Guide-2025.pdf)
if ($nodeVersion.Major -lt 24) { throw "Node.js 24 LTS is required (found $nodeVersion). Install the latest 24.x from nodejs.org." }
if ($nodeVersion.Major -gt 24) { Write-Warning "Node.js $nodeVersion is newer than the tested 24 LTS. Test the site on it before deploying to the live server." }

$envFile = Join-Path $RepoDir '.env'
if (-not (Test-Path $envFile)) { throw "Missing $envFile. Copy .env.example to .env and fill it in (see deploy\windows\README.md)." }
$envText = Get-Content $envFile -Raw
foreach ($key in 'DATABASE_URL', 'PAYLOAD_SECRET', 'NEXT_PUBLIC_SERVER_URL', 'MEDIA_DIR') {
  if ($envText -notmatch "(?m)^\s*$key\s*=\s*\S") { throw "$key is not set in .env" }
}
Write-Host "Node $nodeVersion, repo $RepoDir, site $SiteDir"

# ---- Build (site keeps running) ----
Push-Location $RepoDir
try {
  if (-not $SkipInstall) {
    Step 'Installing dependencies (npm ci)'
    npm ci --no-audit --no-fund
    if ($LASTEXITCODE) { throw 'npm ci failed' }
  }
  if (-not $SkipBuild) {
    Step 'Building (next build)'
    npm run build
    if ($LASTEXITCODE) { throw 'Build failed; the live site was not touched.' }
  }
} finally { Pop-Location }

$standalone = Join-Path $RepoDir '.next\standalone'
if (-not (Test-Path (Join-Path $standalone 'server.js'))) { throw "No standalone build found in $standalone" }

# ---- Stage ----
Step "Staging release in $Staging"
Remove-Dir $Staging
Copy-Tree $standalone $Staging
Copy-Tree (Join-Path $RepoDir '.next\static') (Join-Path $Staging '.next\static')
Copy-Tree (Join-Path $RepoDir 'public') (Join-Path $Staging 'public')
# sharp loads libvips DLLs that file tracing can miss; ship the whole native package
$img = Join-Path $RepoDir 'node_modules\@img'
if (Test-Path $img) { Copy-Tree $img (Join-Path $Staging 'node_modules\@img') }

# ---- Swap ----
$service = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
if ($service -and $service.Status -ne 'Stopped') {
  Step "Stopping service $ServiceName"
  Stop-Service -Name $ServiceName
  (Get-Service -Name $ServiceName).WaitForStatus('Stopped', [TimeSpan]::FromSeconds(60))
}

Step 'Switching to the new release'
Remove-Dir $Previous
if (Test-Path $SiteDir) {
  $moved = $false
  for ($i = 0; $i -lt 10 -and -not $moved; $i++) {
    try { Rename-Item $SiteDir (Split-Path $Previous -Leaf) -ErrorAction Stop; $moved = $true } catch { Start-Sleep -Seconds 2 }
  }
  if (-not $moved) { throw "Could not move $SiteDir aside (a file is still locked). Nothing was changed; start the service again." }
}
Rename-Item $Staging (Split-Path $SiteDir -Leaf)

if (-not $service) {
  Write-Host "`nRelease is in $SiteDir. Service $ServiceName does not exist yet:" -ForegroundColor Yellow
  Write-Host '  powershell -ExecutionPolicy Bypass -File deploy\windows\install-service.ps1'
  exit 0
}

Step "Starting service $ServiceName"
Start-Service -Name $ServiceName

# Pending database migrations run on startup, so allow a couple of minutes
$deadline = (Get-Date).AddMinutes(3)
$healthy = $false
while (-not $healthy -and (Get-Date) -lt $deadline) {
  Start-Sleep -Seconds 3
  try {
    $res = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/healthz" -UseBasicParsing -TimeoutSec 10
    $healthy = $res.StatusCode -eq 200
  } catch { }
}

if ($healthy) {
  Write-Host "`nDeployed. The site is healthy on http://127.0.0.1:$Port" -ForegroundColor Green
  Write-Host "Previous release kept in $Previous (to roll back: deploy\windows\rollback.ps1)."
} else {
  Write-Host "`nThe site did not pass /healthz within 3 minutes. Check the logs in the 'logs' folder next to the repo." -ForegroundColor Red
  Write-Host 'To go back to the previous release: deploy\windows\rollback.ps1'
  exit 1
}
