/**
 * Seeds the CMS with the SAID Technologies content and Design 4 imagery.
 * Used by `npm run seed` (src/seed/index.ts) and the one-time POST /next/seed endpoint.
 *
 * SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD create the first admin user if none exists.
 */
import fs from 'fs'
import path from 'path'
import type { Payload } from 'payload'
import { defaultFooter, defaultHeader } from '../lib/defaults'
import contentJson from './content.json'
import { paragraphs } from './lexical'
import { blogPosts, homepage, manualPages } from './manual'

type Collection = 'pages' | 'services' | 'industries' | 'education'
type SeedBlock = Record<string, unknown> & { blockType: string }
type SeedDoc = {
  path: string
  segments?: string[]
  slug?: string
  parentPath?: string | null
  title: string
  hero: Record<string, unknown>
  tagline?: string
  excerpt?: string
  order?: number
  meta?: { title?: string; description?: string }
  layout: SeedBlock[]
  image?: string
  feed?: string
  empty?: string
}

// Resolved from the working directory so it works locally and in the standalone server (/app)
const IMG_DIR = path.resolve(process.cwd(), 'public/assets/img')
const content = contentJson as unknown as Record<string, SeedDoc[]>
const ctx = { disableRevalidate: true }

const alts: Record<string, string> = {
  'hub-core.jpg': 'Smiling team collaborating together at a shared table',
  'about-team.jpg': 'Team collaborating on laptops around a shared table',
  'card-meeting.jpg': 'Colleagues celebrating progress at a meeting',
  'careers-team.jpg': 'Colleagues reviewing code together on a laptop',
  'cta-network.jpg': 'Abstract network of connected lights',
  'card-servers.jpg': 'Server racks in a data centre',
  'card-campus.jpg': 'Modern campus buildings',
  'card-lab.jpg': 'Students working in a technology laboratory',
  'card-presentation.jpg': 'Presenter sharing ideas with a team',
  'card-auditorium.jpg': 'Audience in an auditorium',
  'education-classroom.jpg': 'Students learning in a classroom',
  'ind-real-estate.jpg': 'High-rise residential towers and a tower crane on a building site',
  'ind-gcc.jpg': 'Team in a meeting room connected to colleagues on a large screen',
  'ind-automobile.jpg': 'Robotic arms on an automotive assembly line',
  'ind-bfsi.jpg': 'Modern glass corporate headquarters lit at dusk',
  'industries-hub.jpg': 'Mumbai business district skyline',
}

const serviceImages: Record<string, string> = {
  'infrastructure-solutions': 'svc-01-infrastructure.jpg',
  'cloud-solutions': 'svc-02-cloud.jpg',
  'managed-services': 'svc-03-managed.jpg',
  'staffing-solutions': 'svc-04-staffing.jpg',
  'annual-maintenance-contract': 'svc-05-amc.jpg',
  'data-and-ai': 'svc-06-data-ai.jpg',
  cybersecurity: 'svc-07-cybersecurity.jpg',
  'google-workspace': 'svc-08-workspace.jpg',
  'managed-print-services': 'svc-09-print.jpg',
  'erp-and-business-applications': 'svc-10-erp.jpg',
}
const serviceIcons: Record<string, string> = {
  'infrastructure-solutions': 'infrastructure',
  'cloud-solutions': 'cloud',
  'managed-services': 'managed',
  'staffing-solutions': 'staffing',
  'annual-maintenance-contract': 'maintenance',
  'data-and-ai': 'data',
  cybersecurity: 'security',
  'google-workspace': 'workspace',
  'managed-print-services': 'print',
  'erp-and-business-applications': 'erp',
}
const educationImages: Record<string, string> = {
  'school-education': 'edu-school.jpg',
  'higher-education': 'edu-higher.jpg',
  'centre-of-excellence': 'card-lab.jpg',
  'digital-education-solutions': 'edu-digital.jpg',
  'csr-education-solutions': 'edu-csr.jpg',
}
const educationIcons: Record<string, string> = {
  'school-education': 'school',
  'higher-education': 'university',
  'centre-of-excellence': 'excellence',
  'digital-education-solutions': 'digital',
  'csr-education-solutions': 'csr',
}
const industryImages: Record<string, string> = {
  'global-capability-centres': 'ind-gcc.jpg',
  'pharma-and-healthcare': 'ind-pharma.jpg',
  'bfsi-nbfc': 'ind-bfsi.jpg',
  manufacturing: 'ind-manufacturing.jpg',
  automobile: 'ind-automobile.jpg',
  retail: 'ind-retail.jpg',
  'it-ites': 'ind-it.jpg',
  media: 'ind-media.jpg',
  startups: 'ind-startups.jpg',
  'real-estate-and-infrastructure': 'ind-real-estate.jpg',
}
const industryIcons: Record<string, string> = {
  'global-capability-centres': 'globe',
  'pharma-and-healthcare': 'health',
  'bfsi-nbfc': 'bank',
  manufacturing: 'factory',
  automobile: 'car',
  retail: 'store',
  'it-ites': 'digital',
  media: 'media',
  startups: 'rocket',
  'real-estate-and-infrastructure': 'building',
}
const pageImages: Record<string, string> = {
  '/what-we-do': 'card-servers.jpg',
  '/industries': 'industries-hub.jpg',
  '/education': 'education-classroom.jpg',
  '/insights': 'card-presentation.jpg',
}

async function uploadImages(payload: Payload) {
  const ids: Record<string, number> = {}
  const files = fs.readdirSync(IMG_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f) && !f.startsWith('favicon') && !f.startsWith('said-logo'))
  for (const file of files) {
    const alt =
      alts[file] ||
      file
        .replace(/\.(jpe?g|png)$/i, '')
        .replace(/^(svc-\d+|ind|edu|card|page)-/, '')
        .replace(/-/g, ' ')
    const doc = await payload.create({ collection: 'media', data: { alt }, filePath: path.join(IMG_DIR, file), context: ctx })
    ids[file] = doc.id as number
  }
  payload.logger.info(`Uploaded ${files.length} images`)
  return ids
}

async function wipe(payload: Payload) {
  for (const collection of ['posts', 'case-studies', 'pages', 'services', 'education', 'industries', 'media'] as const) {
    // Documents that reference others go first; media last
    await payload.delete({ collection, where: { id: { exists: true } }, context: ctx, overrideAccess: true })
  }
  payload.logger.info('Removed existing content')
}

export type SeedResult = { status: 'seeded' | 'skipped'; message: string }

/** Loads all content. Skips when content exists unless `force` is set (which wipes it first). */
export async function runSeed(payload: Payload, { force = false } = {}): Promise<SeedResult> {
  const existing = await payload.count({ collection: 'services' })
  if (existing.totalDocs > 0) {
    if (!force) return { status: 'skipped', message: 'Content already exists; nothing was changed.' }
    await wipe(payload)
  }

  const users = await payload.count({ collection: 'users' })
  if (users.totalDocs === 0 && process.env.SEED_ADMIN_EMAIL && process.env.SEED_ADMIN_PASSWORD) {
    await payload.create({
      collection: 'users',
      data: { email: process.env.SEED_ADMIN_EMAIL, password: process.env.SEED_ADMIN_PASSWORD, name: 'Administrator' },
    })
    payload.logger.info(`Created admin user ${process.env.SEED_ADMIN_EMAIL}`)
  }

  const media = await uploadImages(payload)
  const img = (file?: string) => (file && media[file] ? media[file] : undefined)
  const index = new Map<string, { collection: Collection; id: number }>()

  // ---------- Pass 1: create every document (no layouts yet, so references can resolve later) ----------
  const create = async (collection: Collection, d: SeedDoc, extra: Record<string, unknown>) => {
    const parent = d.parentPath ? index.get(d.parentPath)?.id : undefined
    const created = await payload.create({
      collection,
      draft: false,
      context: ctx,
      data: {
        title: d.title,
        slug: d.slug ?? d.path.split('/').pop(),
        hero: { ...d.hero, image: img(d.image) },
        meta: d.meta,
        _status: 'published',
        ...(parent ? { parent } : {}),
        ...extra,
      } as never,
    })
    index.set(d.path, { collection, id: created.id as number })
  }

  for (const d of content.industries) {
    d.image = industryImages[d.slug!]
    await create('industries', d, { tagline: d.tagline, excerpt: d.excerpt, order: d.order, icon: industryIcons[d.slug!] })
  }
  for (const [collection, images, icons] of [
    ['services', serviceImages, serviceIcons],
    ['education', educationImages, educationIcons],
  ] as const) {
    for (const d of content[collection]) {
      const top = !d.parentPath
      // Sub-pages use their own photo (page-<slug>.jpg) when one is bundled, otherwise the parent's
      d.image = top ? images[d.slug!] : fs.existsSync(path.join(IMG_DIR, `page-${d.slug}.jpg`)) ? `page-${d.slug}.jpg` : undefined
      const parentSlug = d.parentPath?.split('/').pop()
      await create(collection, d, {
        tagline: d.tagline,
        excerpt: d.excerpt,
        order: d.order,
        icon: icons[top ? d.slug! : parentSlug!] ?? undefined,
      })
    }
  }

  const pages: SeedDoc[] = [
    ...content.pages.map((d) => ({ ...d, image: pageImages[d.path] })),
    ...(manualPages as unknown as SeedDoc[]),
  ]
  for (const d of pages) await create('pages', { ...d, parentPath: null }, {})
  for (const d of content.listing) {
    await create('pages', { ...d, parentPath: '/insights' }, {})
    d.layout = [
      {
        blockType: 'insightsFeed',
        eyebrow: d.title,
        heading: d.feed === 'case-study' ? 'Latest case studies' : `Latest ${d.title.toLowerCase()}`,
        feed: d.feed,
        limit: 12,
        emptyText: d.empty || 'Nothing has been published here yet.',
        anchor: 'list',
      },
    ]
  }
  payload.logger.info(`Created ${index.size} documents`)

  // ---------- Pass 2: layouts with resolved references ----------
  const ref = (p?: string) => {
    const hit = p ? index.get(p) : undefined
    return hit ? { type: 'reference', reference: { relationTo: hit.collection, value: hit.id } } : undefined
  }
  const industryId = (slug: string) => index.get(`/industries/${slug}`)?.id

  const toBlock = (b: SeedBlock): SeedBlock => {
    const out: SeedBlock = { ...b }
    if (b.blockType === 'content') {
      out.body = paragraphs((b.paragraphs as string[]) ?? [])
      delete out.paragraphs
    }
    if (b.blockType === 'mediaText') {
      out.image = img(b.image as string)
      out.insetImage = img(b.insetImage as string)
    }
    if (b.blockType === 'cardGrid') {
      out.cards = ((b.cards as Record<string, unknown>[]) ?? []).map((c) => {
        const { linkPath, image, ...rest } = c as { linkPath?: string; image?: string }
        return { ...rest, image: img(image), link: linkPath ? ref(linkPath) : (c as { link?: unknown }).link }
      })
      out.chips = ((b.chips as string[]) ?? []).map(industryId).filter(Boolean)
    }
    return out
  }

  for (const d of [...content.industries, ...content.services, ...content.education, ...pages, ...content.listing]) {
    const hit = index.get(d.path)!
    await payload.update({
      collection: hit.collection,
      id: hit.id,
      draft: false,
      context: ctx,
      data: { layout: d.layout.map(toBlock) } as never,
    })
  }
  payload.logger.info('Added page layouts')

  // ---------- Globals ----------
  const withImages = (section: Record<string, unknown>, keys: string[]) =>
    Object.fromEntries(Object.entries(section).map(([k, v]) => [k, keys.includes(k) ? img(v as string) : v]))

  await payload.updateGlobal({
    slug: 'homepage',
    context: ctx,
    data: {
      ...homepage,
      hero: withImages(homepage.hero, ['hubImage']),
      about: withImages(homepage.about, ['image', 'insetImage']),
      careers: withImages(homepage.careers, ['image']),
      cta: withImages(homepage.cta, ['image']),
      meta: { ...homepage.meta, image: img('hub-core.jpg') },
    } as never,
  })

  const header = structuredClone(defaultHeader) as unknown as { navItems: { promo?: Record<string, unknown> }[] }
  header.navItems.forEach((item, i) => {
    if (item.promo) item.promo.image = img(i === 0 ? 'card-servers.jpg' : 'education-classroom.jpg')
  })
  await payload.updateGlobal({ slug: 'header', context: ctx, data: header as never })
  await payload.updateGlobal({ slug: 'footer', context: ctx, data: defaultFooter as never })
  await payload.updateGlobal({
    slug: 'site-settings',
    context: ctx,
    data: {
      siteName: 'SAID Technologies',
      legalName: 'SAID Technologies Pvt. Ltd.',
      tagline: 'Creating Possibilities. Delivering Solutions.',
      titleSuffix: 'SAID Technologies',
      defaultDescription:
        'Enterprise technology and educational solutions from SAID Technologies: infrastructure, cloud, managed services, data, AI, cybersecurity and digital learning.',
      ogImage: img('hub-core.jpg'),
      contact: { country: 'IN' },
    },
  })
  payload.logger.info('Updated globals')

  // ---------- Blog articles (published, so the homepage Insights section shows) ----------
  // Dated a day apart, newest first, so the first article is the homepage feature.
  const now = Date.now()
  for (const [i, post] of blogPosts.entries()) {
    const { image, ...data } = post
    await payload.create({
      collection: 'posts',
      context: ctx,
      draft: false,
      data: {
        ...data,
        heroImage: img(image),
        _status: 'published',
        publishedAt: new Date(now - i * 86_400_000).toISOString(),
      } as never,
    })
  }
  payload.logger.info(`Published ${blogPosts.length} blog articles`)

  payload.logger.info('Seed complete')
  return { status: 'seeded', message: `Seeded ${index.size} documents and ${Object.keys(media).length} images.` }
}
