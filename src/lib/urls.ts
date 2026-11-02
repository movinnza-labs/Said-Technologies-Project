/** Public base URL, without a trailing slash. Railway exposes RAILWAY_PUBLIC_DOMAIN automatically. */
export const getSiteUrl = (): string => {
  const explicit = process.env.NEXT_PUBLIC_SERVER_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.RAILWAY_PUBLIC_DOMAIN) return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  return 'http://localhost:3000'
}

export const absoluteUrl = (path = '/'): string => {
  if (/^https?:\/\//.test(path)) return path
  return `${getSiteUrl()}${path.startsWith('/') ? path : `/${path}`}`
}

type Breadcrumb = { url?: string | null } | null | undefined

export type RoutableDoc = {
  slug?: string | null
  type?: string | null
  breadcrumbs?: Breadcrumb[] | null
}

/** Where each collection lives on the site. Nested collections build on their breadcrumb trail. */
export const collectionBase: Record<string, string> = {
  pages: '',
  services: '/what-we-do',
  education: '/education',
  industries: '/industries',
  'case-studies': '/insights/case-studies',
}

export const postTypePath: Record<string, string> = {
  blog: 'blogs',
  news: 'news',
  event: 'events',
}

const nestedPath = (doc: RoutableDoc): string => {
  const trail = doc.breadcrumbs?.filter(Boolean) ?? []
  const last = trail[trail.length - 1]?.url
  return last || `/${doc.slug ?? ''}`
}

/** Admin "Preview" button target: enables draft mode, then opens the document's page. */
export const previewUrl = (collection: string, doc: Record<string, unknown>): string =>
  absoluteUrl(`/next/preview?path=${encodeURIComponent(docPath(collection, doc as RoutableDoc))}`)

export const docPath = (collection: string, doc: RoutableDoc | null | undefined): string => {
  if (!doc) return '/'
  switch (collection) {
    case 'pages':
      return doc.slug === 'home' ? '/' : nestedPath(doc)
    case 'services':
    case 'education':
      return `${collectionBase[collection]}${nestedPath(doc)}`
    case 'posts':
      return `/insights/${postTypePath[doc.type ?? 'blog'] ?? 'blogs'}/${doc.slug}`
    default:
      return `${collectionBase[collection] ?? ''}/${doc.slug}`
  }
}
