import type { SiteSetting } from '@/payload-types'
import { absoluteUrl, getSiteUrl } from './urls'

/** schema.org JSON-LD builders. Rendered with <JsonLd />. */

const orgId = () => `${getSiteUrl()}/#organization`

export const organizationSchema = (settings: SiteSetting | null) => {
  const c = settings?.contact
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId(),
    name: settings?.legalName || 'SAID Technologies Pvt. Ltd.',
    alternateName: settings?.siteName || 'SAID Technologies',
    slogan: settings?.tagline || undefined,
    url: getSiteUrl(),
    logo: absoluteUrl('/assets/img/said-logo-transparent.png'),
    email: c?.email || undefined,
    telephone: c?.phone || undefined,
    address: c?.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: c.address,
          addressLocality: c.city || undefined,
          addressRegion: c.region || undefined,
          postalCode: c.postalCode || undefined,
          addressCountry: c.country || 'IN',
        }
      : undefined,
    sameAs: settings?.socials?.map((s) => s.url) ?? undefined,
  }
}

export const websiteSchema = (settings: SiteSetting | null) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${getSiteUrl()}/#website`,
  url: getSiteUrl(),
  name: settings?.siteName || 'SAID Technologies',
  publisher: { '@id': orgId() },
  inLanguage: 'en-IN',
})

export type Crumb = { label: string; href?: string | null }

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    ...(c.href ? { item: absoluteUrl(c.href) } : {}),
  })),
})

export const serviceSchema = (args: { name: string; description?: string | null; path: string; category?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: args.name,
  description: args.description || undefined,
  url: absoluteUrl(args.path),
  serviceType: args.category,
  provider: { '@id': orgId() },
  areaServed: { '@type': 'Country', name: 'India' },
})

export const articleSchema = (args: {
  headline: string
  description?: string | null
  path: string
  image?: string | null
  datePublished?: string | null
  dateModified?: string | null
  author?: string | null
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: args.headline,
  description: args.description || undefined,
  mainEntityOfPage: absoluteUrl(args.path),
  image: args.image ? [absoluteUrl(args.image)] : undefined,
  datePublished: args.datePublished || undefined,
  dateModified: args.dateModified || undefined,
  author: args.author ? { '@type': 'Person', name: args.author } : { '@id': orgId() },
  publisher: { '@id': orgId() },
})
