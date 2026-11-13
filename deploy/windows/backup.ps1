<#
.SYNOPSIS
  Backs up the database (pg_dump) and the uploaded media. Copy the backups folder off this machine regularly too.

  Back up now:              powershell -ExecutionPolicy Bypass -File deploy\windows\backup.ps1
  Schedule daily at 02:00:  powershell -ExecutionPolicy Bypass -File deploy\windows\backup.ps1 -Register

  Restore a dump:  pg_restore --clean --if-exists --no-owner --dbname=<DATABASE_URL> <file.dump>
#>
param(
  [string]$BackupDir,
  [int]$KeepDays = 14,
  [string]$PgDump,
  [switch]$Register
)

$ErrorActionPreference = 'Stop'
$RepoDir = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
if (-not $BackupDir) { $BackupDir = Join-Path (Split-Path $RepoDir -Parent) 'backups' }

if ($Register) {
  $action = New-ScheduledTaskAction -Execute 'powershell.exe' `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" -BackupDir `"$BackupDir`" -KeepDays $KeepDays"
  $trigger = New-ScheduledTaskTrigger -Daily -At 2am
  Register-ScheduledTask -TaskName 'SaidTechnologiesBackup' -Action $action -Trigger $trigger `
    -User 'SYSTEM' -RunLevel Highest -Force | Out-Null
  Write-Host "Scheduled task SaidTechnologiesBackup runs daily at 02:00 into $BackupDir" -ForegroundColor Green
  exit 0
}

function Get-EnvValue($name) {
  $line = Select-String -Path (Join-Path $RepoDir '.env') -Pattern "^\s*$name\s*=\s*(.+)$" | Select-Object -First 1
  if ($line) { return $line.Matches[0].Groups[1].Value.Trim().Trim('"').Trim("'") }
}

if (-not $PgDump) {
  $cmd = Get-Command pg_dump -ErrorAction SilentlyContinue
  if ($cmd) { $PgDump = $cmd.Source }
  else {
    $PgDump = Get-ChildItem 'C:\Program Files\PostgreSQL\*\bin\pg_dump.exe' -ErrorAction SilentlyContinue |
      Sort-Object { [int]$_.Directory.Parent.Name } -Descending | Select-Object -First 1 -ExpandProperty FullName
  }
}
if (-not $PgDump) { throw 'pg_dump.exe not found; pass -PgDump <path>' }

$dbUrl = Get-EnvValue 'DATABASE_URL'
$mediaDir = Get-EnvValue 'MEDIA_DIR'
if (-not $dbUrl) { throw 'DATABASE_URL is not set in .env' }

$dbDir = Join-Path $BackupDir 'database'
New-Item -ItemType Directory -Force $dbDir | Out-Null
$stamp = Get-Date -Format 'yyyy-MM-dd_HHmm'
$dumpFile = Join-Path $dbDir "said-$stamp.dump"

& $PgDump --format=custom --no-owner "--dbname=$dbUrl" "--file=$dumpFile"
if ($LASTEXITCODE) { throw 'pg_dump failed' }
Write-Host "Database -> $dumpFile"

# Uploads are only ever added, so a copy that never deletes keeps everything
if ($mediaDir -and (Test-Path $mediaDir)) {
  $mediaBackup = Join-Path $BackupDir 'media'
  robocopy $mediaDir $mediaBackup /E /NFL /NDL /NJH /NJS /NP /R:2 /W:2 | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "Media copy failed ($LASTEXITCODE)" }
  Write-Host "Media    -> $mediaBackup"
}

Get-ChildItem $dbDir -Filter '*.dump' | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-$KeepDays) } | Remove-Item -Force
exit 0
