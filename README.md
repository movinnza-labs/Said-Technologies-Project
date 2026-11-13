# SAID Technologies website

Next.js 16 frontend with an embedded Payload CMS 3 backend, PostgreSQL, hosted on our own Windows server.
The design is a faithful implementation of **Design 4 ("Editorial")**.

```
Browser ─▶ Next.js (pages, /admin, /api) ─▶ Payload CMS ─▶ PostgreSQL
                         └── one Windows service ──┘        local PostgreSQL
```

## Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 16 App Router, React 19, server components |
| Styling | Plain CSS: design tokens + one CSS file per component (no Tailwind) |
| CMS | Payload 3 (admin at `/admin`, REST API at `/api`) |
| Database | PostgreSQL via `@payloadcms/db-postgres`, versioned migrations |
| Hosting | Windows Server: standalone Node build as a Windows service behind IIS (health check at `/healthz`) |

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
    healthz/                 Health check (used by the deploy script)
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

Requirements: Node.js 24 LTS (see `.nvmrc`) and PostgreSQL 18, the same versions as the server.

```bash
npm install
cp .env.example .env          # set DATABASE_URL and PAYLOAD_SECRET
npm run dev                   # http://localhost:3000, admin at /admin
```

While `npm run dev` runs, Payload syncs the schema automatically (other commands never do, so
start `npm run dev` once on a new local database first). To load the site content and images:

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
| `migrate`, `migrate:create` | Payload migrations (production applies them automatically on start) |
| `seed` | Load content into an empty local database |
| `generate:types`, `generate:importmap` | Payload codegen |
| `typecheck`, `lint` | Quality checks |

## Deploying

The site runs on the office Windows Server (IIS in front, Node as a Windows service, local
PostgreSQL). Setup, deploys, rollback and backups are in [deploy/windows/README.md](deploy/windows/README.md).

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
- `next/image` everywhere (WebP, responsive sizes, lazy loading), self-hosted fonts via `next/font/local`
- Pages render on first request and are cached (ISR), then refreshed on publish; the build doesn't need the database
- Enquiry form: server-side validation, honeypot and rate limiting, stored via the Payload Local API
