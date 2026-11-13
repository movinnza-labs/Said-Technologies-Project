<#
.SYNOPSIS
  Registers the site as a Windows service with NSSM (https://nssm.cc), so it starts with
  Windows and restarts if it crashes. Safe to run again: it updates the existing service.

  Run once, from an elevated PowerShell, after the first deploy.ps1:
    powershell -ExecutionPolicy Bypass -File deploy\windows\install-service.ps1
#>
param(
  [string]$SiteDir,
  [string]$LogDir,
  [string]$ServiceName = 'SaidTechnologiesWeb',
  [int]$Port = 3000,
  [string]$Nssm = 'nssm'
)

$ErrorActionPreference = 'Stop'

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
  throw 'Run this from PowerShell opened with "Run as administrator".'
}
if (-not (Get-Command $Nssm -ErrorAction SilentlyContinue)) {
  throw "nssm.exe not found. Download it from https://nssm.cc, put win64\nssm.exe in C:\Windows\System32 (or pass -Nssm <path>)."
}

$RepoDir = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
if (-not $SiteDir) { $SiteDir = Join-Path (Split-Path $RepoDir -Parent) 'site' }
if (-not $LogDir) { $LogDir = Join-Path (Split-Path $RepoDir -Parent) 'logs' }
$envFile = Join-Path $RepoDir '.env'
$node = (Get-Command node).Source

if (-not (Test-Path (Join-Path $SiteDir 'server.js'))) { throw "No release in $SiteDir yet. Run deploy\windows\deploy.ps1 first." }
if (-not (Test-Path $envFile)) { throw "Missing $envFile" }
New-Item -ItemType Directory -Force $LogDir | Out-Null

# MEDIA_DIR must exist and be writable by the service account (LocalSystem)
$mediaLine = Select-String -Path $envFile -Pattern '^\s*MEDIA_DIR\s*=\s*(.+)$' | Select-Object -First 1
if ($mediaLine) {
  $mediaDir = $mediaLine.Matches[0].Groups[1].Value.Trim().Trim('"').Trim("'")
  New-Item -ItemType Directory -Force (Join-Path $mediaDir 'resumes') | Out-Null
}

if (-not (Get-Service -Name $ServiceName -ErrorAction SilentlyContinue)) {
  & $Nssm install $ServiceName $node | Out-Null
  if ($LASTEXITCODE) { throw 'nssm install failed' }
}

function Set-Nssm { & $Nssm set $ServiceName @args | Out-Null; if ($LASTEXITCODE) { throw "nssm set $($args[0]) failed" } }

Set-Nssm Application $node
# Node loads the repo's .env itself; values set below take precedence over it
Set-Nssm AppParameters "--env-file=`"$envFile`" server.js"
Set-Nssm AppDirectory $SiteDir
# Listen on localhost only: the public reaches the site through IIS
Set-Nssm AppEnvironmentExtra 'NODE_ENV=production' "PORT=$Port" 'HOSTNAME=127.0.0.1' 'NEXT_TELEMETRY_DISABLED=1'
Set-Nssm DisplayName 'SAID Technologies website'
Set-Nssm Description 'Next.js + Payload CMS website (deploy\windows in the repo)'
Set-Nssm Start SERVICE_AUTO_START
Set-Nssm AppExit Default Restart
Set-Nssm AppRestartDelay 5000
Set-Nssm AppStopMethodConsole 10000
Set-Nssm AppStdout (Join-Path $LogDir 'site.log')
Set-Nssm AppStderr (Join-Path $LogDir 'site-error.log')
Set-Nssm AppRotateFiles 1
Set-Nssm AppRotateOnline 1
Set-Nssm AppRotateBytes 10485760

Restart-Service -Name $ServiceName
Write-Host "Service $ServiceName is running on http://127.0.0.1:$Port (logs in $LogDir)." -ForegroundColor Green
