import type { Metadata } from 'next'
import type { Media, SiteSetting } from '@/payload-types'
import { getGlobal } from './data'
import { ogImageUrl } from './media'
import { absoluteUrl } from './urls'

type MetaFields = {
  title?: string | null
  description?: string | null
  image?: Media | number | null
  canonical?: string | null
  noIndex?: boolean | null
}

type BuildArgs = {
  /** Page title before the site suffix is added. */
  title: string
  description?: string | null
  path: string
  meta?: MetaFields | null
  image?: Media | number | null
  type?: 'website' | 'article'
  publishedTime?: string | null
  /** Use the title as-is (the homepage already contains the brand). */
  absoluteTitle?: boolean
}

const clip = (text: string, max = 160) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text)

/** Metadata from the document's SEO tab, falling back to its content and the site defaults. */
export async function buildMetadata(args: BuildArgs): Promise<Metadata> {
  const settings = await getGlobal<SiteSetting>('site-settings')
  const suffix = settings?.titleSuffix || 'SAID Technologies'
  const meta = args.meta ?? {}

  const baseTitle = meta.title || args.title
  const title = args.absoluteTitle || baseTitle.includes(suffix) ? baseTitle : `${baseTitle} | ${suffix}`
  const description = clip(meta.description || args.description || settings?.defaultDescription || '')
  const canonical = meta.canonical || absoluteUrl(args.path)
  const image =
    ogImageUrl(meta.image) || ogImageUrl(args.image) || ogImageUrl(settings?.ogImage) || '/assets/img/og-default.jpg'
  const images = [{ url: absoluteUrl(image), width: 1200, height: 630, alt: baseTitle }]
  const noIndex = Boolean(meta.noIndex || settings?.noIndex)

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: args.type ?? 'website',
      url: canonical,
      siteName: settings?.legalName || 'SAID Technologies Pvt. Ltd.',
      title,
      description,
      images,
      locale: 'en_IN',
      ...(args.publishedTime ? { publishedTime: args.publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((i) => i.url),
      ...(settings?.twitterHandle ? { site: settings.twitterHandle } : {}),
    },
  }
}
