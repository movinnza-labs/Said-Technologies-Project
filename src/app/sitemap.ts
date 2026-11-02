import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'
import { absoluteUrl, docPath } from '@/lib/urls'

// Always reflects the latest published content.
export const dynamic = 'force-dynamic'
export const revalidate = 0

const collections = ['pages', 'services', 'industries', 'education', 'posts', 'case-studies'] as const

const priority: Record<string, number> = {
  pages: 0.8,
  services: 0.9,
  industries: 0.8,
  education: 0.9,
  posts: 0.6,
  'case-studies': 0.7,
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient()
  const entries: MetadataRoute.Sitemap = [{ url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 }]

  for (const collection of collections) {
    const res = await payload.find({
      collection,
      depth: 0,
      limit: 1000,
      pagination: false,
      overrideAccess: false,
      where: { 'meta.noIndex': { not_equals: true } },
      select: { slug: true, updatedAt: true, ...(collection === 'posts' ? { type: true } : {}), ...(['pages', 'services', 'education'].includes(collection) ? { breadcrumbs: true } : {}) },
    })
    for (const doc of res.docs as { slug?: string; updatedAt: string }[]) {
      entries.push({
        url: absoluteUrl(docPath(collection, doc)),
        lastModified: doc.updatedAt,
        changeFrequency: collection === 'posts' ? 'monthly' : 'weekly',
        priority: priority[collection],
      })
    }
  }

  return entries
}
