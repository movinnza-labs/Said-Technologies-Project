# Running the site on a Windows server

This guide sets up the SAID Technologies website on our own Windows Server 2025 VM, created as
described in `SAID-Website-VM-Setup-Guide-2025.pdf` (4 vCPU, 8 GB RAM, 120 GB disk).

How it fits together:

```
Browser ──HTTPS──> IIS (ports 80/443) ──> Node service on 127.0.0.1:3000 ──> PostgreSQL (5432)
                                                        │
                                                        └── MEDIA_DIR (uploaded images and resumes)
```

Suggested folder layout (any drive works, the scripts use folders next to the repo):

```
D:\SaidTechnologies\
  app\        the git repo (you build here, .env lives here)
  site\       the running release, created by deploy.ps1 (don't edit)
  media\      uploads (MEDIA_DIR)
  logs\       service logs
  backups\    database dumps and media copies
```

## 1. Install the software (once)

Use an administrator account.

1. **Node.js 24 LTS** (64-bit MSI, latest 24.x) from https://nodejs.org. Check: `node -v` shows v24. Not 22: its support ends April 2027.
2. **Git for Windows** from https://git-scm.com.
3. **PostgreSQL 18** (latest 18.x) from https://www.postgresql.org/download/windows/ (EDB installer). Keep port
   5432 and let it install as a Windows service. Remember the `postgres` password.
4. **NSSM** from https://nssm.cc/download. Copy `win64\nssm.exe` to `C:\Windows\System32`.

## 2. Create the database

Open **SQL Shell (psql)** from the Start menu, log in as `postgres` and run (pick a strong password):

```sql
CREATE USER said WITH PASSWORD 'change-this-password';
CREATE DATABASE said_technologies OWNER said;
```

## 3. Get the code and configure it

```powershell
mkdir D:\SaidTechnologies
cd D:\SaidTechnologies
git clone <repo-url> app
cd app
copy .env.example .env
notepad .env
```

Set at least these values in `.env`:

```ini
DATABASE_URL=postgres://said:change-this-password@127.0.0.1:5432/said_technologies
PAYLOAD_SECRET=<run: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))">
NEXT_PUBLIC_SERVER_URL=https://www.saidtechnologies.com
MEDIA_DIR=D:\SaidTechnologies\media
```

Add the `SMTP_*` and `ENQUIRY_NOTIFY_EMAIL` lines too if enquiry emails should be sent.

`NEXT_PUBLIC_SERVER_URL` is built into the pages. Run `deploy.ps1` again whenever you change it.

## 4. Build and deploy

In PowerShell **as administrator**, inside `D:\SaidTechnologies\app`:

```powershell
powershell -ExecutionPolicy Bypass -File deploy\windows\deploy.ps1
powershell -ExecutionPolicy Bypass -File deploy\windows\install-service.ps1
```

The first command builds the site into `D:\SaidTechnologies\site`. The second registers it as
the Windows service **SaidTechnologiesWeb**, which starts with Windows and restarts after a crash.
Database tables are created automatically the first time the service starts.

Check it on the server: http://127.0.0.1:3000/healthz should show `{"status":"ok"}`.

## 5. Add the content

Do this after section 4, when the service has started once: the seed needs the tables the
service creates on its first start.

Load the starting content with the seed: add `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` to
`.env`, then run `npm run seed` in the `app` folder. Log in to `/admin` with that email and
password.

Pages are cached for up to an hour, and anything opened while the database was still empty keeps
showing "Page not found". Clear the cache after loading content:
`powershell -ExecutionPolicy Bypass -File deploy\windows\deploy.ps1 -SkipInstall -SkipBuild`
(this redeploys the same build with an empty cache).

Never run `npm run dev` against the server's database: it changes the schema directly, and the
service then stops at a "data loss" prompt on its next start.

## 6. Make it public over HTTPS

First point the domain's DNS **A record** at this server's public IP. Then open ports 80 and 443
in Windows Firewall and on the office router or firewall. Do **not** open port 3000.

The site is served through IIS:

1. Server Manager → Add Roles and Features → Web Server (IIS).
2. Install **URL Rewrite 2.1** (https://www.iis.net/downloads/microsoft/url-rewrite) and
   **Application Request Routing 3.0** (https://www.iis.net/downloads/microsoft/application-request-routing).
3. One-time server settings, in an administrator command prompt:
   ```bat
   %windir%\system32\inetsrv\appcmd set config -section:system.webServer/proxy /enabled:true /preserveHostHeader:true /responseBufferLimit:0 /commit:apphost
   %windir%\system32\inetsrv\appcmd set config -section:system.webServer/rewrite/allowedServerVariables /+"[name='HTTP_X_FORWARDED_PROTO']" /commit:apphost
   %windir%\system32\inetsrv\appcmd set config -section:system.webServer/rewrite/allowedServerVariables /+"[name='HTTP_X_FORWARDED_HOST']" /commit:apphost
   ```
4. Create an empty folder `D:\SaidTechnologies\iis` and copy `deploy\windows\iis\web.config` into it.
5. In IIS Manager, add a website: physical path `D:\SaidTechnologies\iis`, http binding for the
   domain. If another IIS site is already bound to port 80 without a host name, set this site's
   host name to the domain so they don't clash.
6. For the HTTPS certificate, use **win-acme** (https://www.win-acme.com). It gets a free
   Let's Encrypt certificate, adds the https binding and renews it automatically.

## 7. Backups

Nothing backs up the server for you, so schedule the backup script:

```powershell
powershell -ExecutionPolicy Bypass -File deploy\windows\backup.ps1 -Register
```

This runs every night at 02:00. It saves a database dump (the last 14 days are kept) and copies
new uploads into `D:\SaidTechnologies\backups`. Copy that folder to another machine or to cloud
storage **every week**. A backup on the same server won't survive a disk failure.

## Everyday tasks

| Task | Command (PowerShell as administrator, in the `app` folder) |
|---|---|
| Deploy new code | Take a VM checkpoint first, then `git pull` and `powershell -ExecutionPolicy Bypass -File deploy\windows\deploy.ps1` |
| Undo the last deploy | `powershell -ExecutionPolicy Bypass -File deploy\windows\rollback.ps1` |
| Restart the site | `Restart-Service SaidTechnologiesWeb` |
| See errors | `D:\SaidTechnologies\logs\site-error.log` |
| Back up now | `powershell -ExecutionPolicy Bypass -File deploy\windows\backup.ps1` |

The site keeps running while `deploy.ps1` builds. It's only down for the few seconds the service
takes to restart. If the build fails, the live site isn't touched.

## Troubleshooting

- **Every page shows a 500 error / `unhandledRejection: undefined`**: the database isn't
  reachable. Check that the `postgresql-x64-18` service is running and `DATABASE_URL` is correct.
- **Forms fail with "Invalid Server Actions request"**: `NEXT_PUBLIC_SERVER_URL` doesn't match
  the domain people use. Fix it in `.env` and run `deploy.ps1` again.
- **IIS shows 502.3**: the Node service isn't running. Run `Get-Service SaidTechnologiesWeb` and
  check `site-error.log`.
- **Uploads fail**: the `MEDIA_DIR` folder doesn't exist or can't be written to.
