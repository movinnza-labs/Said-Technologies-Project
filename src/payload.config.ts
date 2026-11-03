import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { CaseStudies } from './collections/CaseStudies'
import { Education } from './collections/Education'
import { Enquiries, Resumes } from './collections/Enquiries'
import { Industries } from './collections/Industries'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Services } from './collections/Services'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { Homepage } from './globals/Homepage'
import { SiteSettings } from './globals/SiteSettings'
import { absoluteUrl, docPath, getSiteUrl } from './lib/urls'
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

if (!process.env.PAYLOAD_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('PAYLOAD_SECRET is not set. Add it to the Railway service variables.')
}

type SeoDoc = { title?: string; excerpt?: string; hero?: { lead?: string } } & Parameters<typeof docPath>[1]

export default buildConfig({
  serverURL: getSiteUrl(),
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: ' · SAID Technologies CMS',
      icons: [{ rel: 'icon', type: 'image/jpeg', url: '/assets/img/favicon-32x32.jpg' }],
    },
    // SAID branding; styles live in app/(payload)/custom.scss
    components: {
      graphics: { Logo: '/components/admin/Logo#Logo', Icon: '/components/admin/Icon#Icon' },
      beforeDashboard: ['/components/admin/Welcome#Welcome'],
      actions: ['/components/admin/LogoutButton#LogoutButton'],
      beforeNavLinks: ['/components/admin/NavBrand#NavBrand'],
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 390, height: 844 },
        { label: 'Tablet', name: 'tablet', width: 820, height: 1180 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  collections: [Pages, Services, Industries, Education, Posts, CaseStudies, Media, Enquiries, Resumes, Users],
  globals: [Homepage, Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-only-secret-change-me',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: {
      // Use Railway's private URL at runtime; the public one is billed as egress.
      connectionString: process.env.DATABASE_URL || '',
      // A small site needs few connections; each one costs memory on both ends.
      max: Number(process.env.DATABASE_POOL_MAX || 5),
      idleTimeoutMillis: 30_000,
    },
    push: process.env.NODE_ENV !== 'production' && process.env.PAYLOAD_DB_PUSH !== 'false',
    migrationDir: path.resolve(dirname, 'migrations'),
    // In production, pending migrations run once when the server starts (never during the build).
    prodMigrations: migrations,
  }),
  sharp,
  // Without SMTP settings Payload logs emails to the console instead of sending them.
  email: process.env.SMTP_HOST
    ? nodemailerAdapter({
        defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'no-reply@saidtechnologies.com',
        defaultFromName: process.env.SMTP_FROM_NAME || 'SAID Technologies Website',
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        },
      })
    : undefined,
  cors: [getSiteUrl()],
  csrf: [getSiteUrl()],
  graphQL: { disable: true },
  plugins: [
    nestedDocsPlugin({
      collections: ['pages', 'services', 'education'],
      generateLabel: (_, doc) => String(doc.title ?? ''),
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    seoPlugin({
      generateTitle: ({ doc }) => String((doc as SeoDoc)?.title ?? ''),
      generateDescription: ({ doc }) => {
        const d = doc as SeoDoc
        return (d?.excerpt || d?.hero?.lead || '').slice(0, 160)
      },
      generateURL: ({ doc, collectionSlug, globalSlug }) =>
        globalSlug === 'homepage' ? absoluteUrl('/') : absoluteUrl(docPath(collectionSlug ?? 'pages', doc as SeoDoc)),
    }),
  ],
})
