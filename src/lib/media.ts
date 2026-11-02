import type { Media } from '@/payload-types'

export type ImageSource = { src: string; alt: string; width?: number; height?: number }

/**
 * Payload builds absolute media URLs from serverURL. Our own files are served by this app, so
 * use the path: next/image then optimises them as local images (no remote host config needed).
 */
const localPath = (url: string) => url.replace(/^https?:\/\/[^/]+(?=\/api\/media\/)/, '')

/**
 * Accepts a populated media doc, a bare id (unpopulated) or nothing, and falls back to a
 * bundled design image so layouts never collapse while content is being added.
 */
export const toImage = (
  media: Media | number | null | undefined,
  fallback?: string,
  fallbackAlt = '',
): ImageSource | null => {
  if (media && typeof media === 'object' && media.url) {
    return {
      src: localPath(media.url),
      alt: media.alt ?? fallbackAlt,
      width: media.width ?? undefined,
      height: media.height ?? undefined,
    }
  }
  return fallback ? { src: fallback, alt: fallbackAlt } : null
}

/** Absolute URL of the 1200×630 crop for social cards, when available. */
export const ogImageUrl = (media: Media | number | null | undefined): string | null => {
  if (!media || typeof media !== 'object') return null
  const url = media.sizes?.og?.url || media.url
  return url ? localPath(url) : null
}

/** Splits textarea content on blank lines. */
export const paragraphs = (text: string | null | undefined): string[] =>
  (text ?? '')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
