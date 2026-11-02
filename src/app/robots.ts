import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/urls'

/**
 * Built once at build time (no per-request work).
 * Set NEXT_PUBLIC_ALLOW_INDEXING=false on staging to keep it out of search engines.
 */
export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'false') {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/', '/next/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  }
}
