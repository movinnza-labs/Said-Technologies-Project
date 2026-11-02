# SAID Technologies website

Next.js 16 frontend with an embedded Payload CMS 3 backend, PostgreSQL, deployed on Railway.
The design is a faithful implementation of **Design 4 ("Editorial")**.

```
Browser ─▶ Next.js (pages, /admin, /api) ─▶ Payload CMS ─▶ PostgreSQL
                         └── one Railway service ──┘        Railway Postgres
```

## Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 16 App Router, React 19, server components |
| Styling | Plain CSS: design tokens + one CSS file per component (no Tailwind) |
| CMS | Payload 3 (admin at `/admin`, REST API at `/api`) |
| Database | PostgreSQL via `@payloadcms/db-postgres`, versioned migrations |
| Hosting | Railway (slim standalone Docker image, health check at `/healthz`) |

## Project structure

```
src/
  app/
    (frontend)/              Public site
      [[...slug]]/           Homepage + every CMS page (Who We Are, Contact, legal…)
      what-we-do/[...slug]/  Services and sub-services
      education/[...slug]/   Education areas and programmes
      industries/[slug]/     Industry pages
      insights/[type]/[slug] Blogs, news, events, case studies
      next/preview           Draft preview for CMS editors
    (payload)/               Payload admin + API (generated, don't edit)
    sitemap.ts, robots.ts    SEO routes
    healthz/                 Railway health check
  collections/               CMS collections (Pages, Services, Industries, Education, Posts, …)
  globals/                   Homepage, Header, Footer, Site Settings
  blocks/                    Content block definitions editors compose pages from
  fields/                    Reusable field builders (hero, link, slug, SEO, icon)
  components/
    layout/                  Header + mega menu, mobile drawer, footer, scroll effects
    home/                    Homepage sections (hero hub, services index, industries grid…)
    blocks/                  Renderers for the content blocks + enquiry form
    inner/                   Inner-page hero, solution template, article styles
    ui/                      Buttons, links, icons, images, rich text, JSON-LD
  styles/                    tokens.css, base.css, ui.css, motion.css
  lib/                       Data fetching, URLs, SEO metadata, schema.org, navigation
  migrations/                Database migrations (run automatically on deploy)
  seed/                      Seed script + content captured from the existing site
public/assets/img/           Logos, favicons and Design 4 photography
```

Each component imports its own stylesheet (e.g. `components/home/Hero.tsx` → `Hero.css`).
Colours, type and spacing live in `src/styles/tokens.css`.

## Local development

Requirements: Node.js 22.12+ and PostgreSQL 14+.

```bash
npm install
cp .env.example .env          # set DATABASE_URL and PAYLOAD_SECRET
npm run dev                   # http://localhost:3000, admin at /admin
```

In development Payload syncs the schema automatically. To load the site content and images:

```bash
SEED_ADMIN_EMAIL=you@example.com SEED_ADMIN_PASSWORD='…' npm run seed
```

The seed only runs on an empty database. `SEED_FORCE=true npm run seed` replaces existing content.

### Changing the schema

After editing collections, globals or blocks:

```bash
npm run generate:types          # refresh src/payload-types.ts
npm run migrate:create -- name  # write a migration for production
npm run generate:importmap      # only if admin components changed
```

Commit the new file in `src/migrations`; it is applied on the next deploy.

### Scripts

| Script | Purpose |
|---|---|
| `dev` / `build` / `start` | Next.js |
| `start:standalone` | Run the standalone build the way the Docker image does |
| `migrate`, `migrate:create` | Payload migrations (production applies them automatically on start) |
| `seed` | Load content into an empty local database |
| `generate:types`, `generate:importmap` | Payload codegen |
| `typecheck`, `lint` | Quality checks |

## Deploying to Railway

1. **Create a project** and add **PostgreSQL** (New → Database → PostgreSQL).
2. **Add the web service** from this repository. Railway picks up `railway.json` and builds the `Dockerfile`.
3. **Add a volume** to the web service, mounted at `/app/media`, so uploaded images and resumes survive redeploys.
   Railway mounts volumes as root; if uploads fail with permission errors, set `RAILWAY_RUN_UID=0`.
4. **Set variables** on the web service:

   | Variable | Value |
   |---|---|
   | `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` (the private `*.railway.internal` URL; never the public one) |
   | `PAYLOAD_SECRET` | a long random string (`node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`) |
   | `NEXT_PUBLIC_SERVER_URL` | `https://your-domain` (or `https://${{RAILWAY_PUBLIC_DOMAIN}}`) |
   | `MEDIA_DIR` | `/app/media` (already the image default) |
   | `MALLOC_ARENA_MAX` | `2` (already set in the image; harmless to repeat) |
   | `ENQUIRY_NOTIFY_EMAIL`, `SMTP_*` | optional: email alerts for new enquiries |
   | `NEXT_PUBLIC_ALLOW_INDEXING` | `false` on staging only |

   `NEXT_PUBLIC_SERVER_URL` is read at build time, so redeploy after changing it.
5. **Generate a domain** (Settings → Networking) or attach your own.
6. **Deploy.** The image is Next's standalone build on `node:22-slim`. Pending migrations run once as the server starts, before `/healthz` reports ready, so a failed deploy never replaces the running version.
7. **Seed once.** The production image has no CLI, so seeding goes through a one-time endpoint that only fills an empty database:
   1. Add `SEED_SECRET` (16+ random characters) plus `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD`, and redeploy.
   2. Run `curl -X POST https://your-domain/next/seed -H "x-seed-secret: <SEED_SECRET>"`.
   3. Remove all three variables. The endpoint returns 404 without `SEED_SECRET`.

   Or skip the seed and create the first admin user at `/admin`.

No credentials are hard-coded; everything sensitive comes from environment variables.

## Keeping Railway costs down

Railway bills memory and CPU per minute, plus egress and storage; memory is most of a small site's bill.
The project already follows the code-side guidance:

- **Image:** `node:22-slim` (sharp doesn't hold memory there the way it does on Alpine), multi-stage, standalone output only, non-root user, `MALLOC_ARENA_MAX=2`.
- **Images:** WebP only (AVIF is far heavier to generate), each size generated once and cached for a year, no 2048/3840 widths.
- **Build:** `experimental.cpus: 4`, and the build never touches the database.
- **Rendering:** pages are ISR-cached and refreshed on publish. There's no middleware, and no unbounded in-memory caches (the form rate limiter is size-capped).
- **Database:** private URL, pool of 5, indexed filters, document versions capped at 25.
- **Migrations:** run once at start, not during the build. There are no background jobs or request logging.

Set these in the Railway dashboard:

1. Watch the service's **Metrics → Memory** chart after each deploy. Flat is healthy; a steady climb is a leak.
2. Keep **one replica**, with the app and Postgres in the **same region**. `railway.json` pins one replica and keeps sleep mode off: crawlers would only wake a sleeping public site.
3. Set **resource limits** per service where your plan allows, with headroom above normal use.
4. Turn off or auto-delete **PR environments**, and delete unused services and projects.
5. Set a **usage alert** just above a normal month. Avoid a low hard limit, which stops every service until the next cycle.

For bandwidth, put **Cloudflare** in front:

- Cache at the edge: `/_next/static/*`, `/_next/image*`, `/assets/*`, `/api/media/file/*` and fonts.
- Never cache `/admin*`, `/api/*` (other than media files), `/next/*` or the Contact and Careers form posts.
- Handle `www` and old-URL redirects at Cloudflare rather than in the app.
- Turn on bot protection if traffic is far above real visitors.

Make one change at a time and check the memory chart for a day or two after each deploy.

## Content management

Sign in at `/admin`.

- **Homepage** (global): every Design 4 section in its own tab: hero copy and hub labels, ticker, About, section headings, approach steps, careers, CTA. Service, industry and education lists fill automatically from their collections unless you hand-pick items.
- **Services / Industries / Education**: hero, flexible content blocks, and a "Card & menu" tab (tagline, excerpt, icon, image) that controls how the item appears in menus and grids. Set a **parent** to nest a sub-service; URLs and breadcrumbs follow automatically.
- **Pages**: Who We Are, Careers, Contact, Insights listings, legal pages. Nest under a parent for nested URLs (Insights → Blogs = `/insights/blogs`).
- **Content blocks**: Text section, Image and text, Numbered list, Card grid (hand-picked or automatic), Process steps, Call to action, Enquiry form, Insights feed.
- **Blogs, News & Events / Case Studies**: articles with rich text, scheduling and drafts. The homepage Insights section appears once something is published. Three draft articles are seeded for review.
- **Header & Navigation**: menu order and labels. Services, Education and Industries mega menus build themselves from the collections.
- **Footer**, **Site Settings** (company contact details, social links, default SEO image and description).
- **Enquiries**: submissions from the Contact and Careers forms, with uploaded resumes.
- **Media**: images with alt text, focal point and automatic sizes.

Every page and article has an **SEO** tab (title, description, sharing image, canonical override, noindex). The **Preview** button shows drafts on the live site.

Publishing a change clears the page cache, so updates appear immediately.

## SEO and performance

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter cards from the SEO tab, with site-wide fallbacks
- `/sitemap.xml` (all published, indexable documents) and `/robots.txt`
- JSON-LD: Organization, WebSite, BreadcrumbList, Service, Article
- Semantic landmarks, one H1 per page, skip link, keyboard-accessible menus, reduced-motion support
- `next/image` everywhere (AVIF/WebP, responsive sizes, lazy loading), self-hosted fonts via `next/font`
- Pages render on first request and are cached (ISR), then refreshed on publish; the build doesn't need the database
- Enquiry form: server-side validation, honeypot and rate limiting, stored via the Payload Local API
