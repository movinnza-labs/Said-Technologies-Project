<#
.SYNOPSIS
  Swaps the live site back to the release before the last deploy.
  Only the code is rolled back; the database and uploaded media are not.
#>
param(
  [string]$SiteDir,
  [string]$ServiceName = 'SaidTechnologiesWeb'
)

$ErrorActionPreference = 'Stop'
$RepoDir = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
if (-not $SiteDir) { $SiteDir = Join-Path (Split-Path $RepoDir -Parent) 'site' }
$Previous = "$SiteDir.old"
$Failed = "$SiteDir.failed"

if (-not (Test-Path (Join-Path $Previous 'server.js'))) { throw "No previous release in $Previous" }

Stop-Service -Name $ServiceName
(Get-Service -Name $ServiceName).WaitForStatus('Stopped', [TimeSpan]::FromSeconds(60))
Start-Sleep -Seconds 2

if (Test-Path $Failed) {
  # robocopy empties it first: Remove-Item fails on the image cache's long file names
  $empty = Join-Path $env:TEMP "said-empty-$PID"
  New-Item -ItemType Directory -Force $empty | Out-Null
  robocopy $empty $Failed /MIR /NFL /NDL /NJH /NJS /NP /R:1 /W:1 | Out-Null
  Remove-Item $Failed, $empty -Recurse -Force
}
Rename-Item $SiteDir (Split-Path $Failed -Leaf)
Rename-Item $Previous (Split-Path $SiteDir -Leaf)
Start-Service -Name $ServiceName

Write-Host "Rolled back. The release that was replaced is in $Failed." -ForegroundColor Green
