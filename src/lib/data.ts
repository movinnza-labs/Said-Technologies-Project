import { cache } from 'react'
import type { CaseStudy, Education, Industry, Page, Post, Service } from '@/payload-types'
import { getPayloadClient, isDraft, safeQuery } from './payload'

export type SolutionCollection = 'services' | 'industries' | 'education'
export type SolutionDoc = Service | Industry | Education
export type NestedCollection = 'pages' | 'services' | 'education'

type GlobalSlug = 'homepage' | 'header' | 'footer' | 'site-settings'

/** Published content for visitors; drafts too when an editor is previewing. */
const access = async () => {
  const draft = await isDraft()
  return { draft, overrideAccess: draft }
}

export const getGlobal = cache(async <T>(slug: GlobalSlug, depth = 1): Promise<T | null> => {
  const opts = await access()
  return safeQuery(async () => {
    const payload = await getPayloadClient()
    return (await payload.findGlobal({ slug, depth, ...opts })) as T
  }, null)
})

/** Every service / industry / education doc with the fields menus and cards need. */
export const getSolutionList = cache(async (collection: SolutionCollection): Promise<SolutionDoc[]> => {
  const opts = await access()
  return safeQuery(async () => {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection,
      depth: 1,
      limit: 500,
      pagination: false,
      sort: 'order',
      ...opts,
      select: {
        title: true,
        slug: true,
        tagline: true,
        excerpt: true,
        icon: true,
        cardImage: true,
        order: true,
        showInMenu: true,
        hero: { image: true },
        ...(collection === 'industries' ? {} : { parent: true, breadcrumbs: true }),
      },
    })
    return res.docs as SolutionDoc[]
  }, [])
})

export const parentId = (doc: SolutionDoc | Page): number | null => {
  const parent = 'parent' in doc ? doc.parent : null
  if (!parent) return null
  return typeof parent === 'object' ? parent.id : parent
}

export const topLevel = <T extends SolutionDoc>(docs: T[]): T[] => docs.filter((d) => parentId(d) === null)

export const childrenOf = <T extends SolutionDoc>(docs: T[], id: number): T[] => docs.filter((d) => parentId(d) === id)

/** Finds a nested document by its full path, e.g. ['cloud-solutions', 'google-cloud-solutions']. */
export const getNestedDoc = cache(async (collection: NestedCollection, segments: string[]) => {
  const opts = await access()
  const slug = segments[segments.length - 1]
  const url = `/${segments.join('/')}`
  const payload = await getPayloadClient()
  const res = await payload.find({
    collection,
    depth: 2,
    limit: 5,
    ...opts,
    where: { and: [{ slug: { equals: slug } }, { 'breadcrumbs.url': { equals: url } }] },
  })
  // A parent's URL also appears in its children's breadcrumb trails, so match on the last crumb.
  return (
    (res.docs as (Page | Service | Education)[]).find((d) => d.breadcrumbs?.[d.breadcrumbs.length - 1]?.url === url) ?? null
  )
})

export const getIndustry = cache(async (slug: string) => {
  const opts = await access()
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'industries', depth: 2, limit: 1, ...opts, where: { slug: { equals: slug } } })
  return (res.docs[0] as Industry) ?? null
})

export const getPosts = cache(async (type: Post['type'] | 'all', limit = 12): Promise<Post[]> => {
  const opts = await access()
  return safeQuery(async () => {
    const payload = await getPayloadClient()
    const res = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      sort: '-publishedAt',
      ...opts,
      where: type === 'all' ? {} : { type: { equals: type } },
    })
    return res.docs
  }, [])
})

export const getPost = cache(async (type: Post['type'], slug: string) => {
  const opts = await access()
  const payload = await getPayloadClient()
  const res = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 1,
    ...opts,
    where: { and: [{ slug: { equals: slug } }, { type: { equals: type } }] },
  })
  return res.docs[0] ?? null
})

export const getCaseStudies = cache(async (limit = 12): Promise<CaseStudy[]> => {
  const opts = await access()
  return safeQuery(async () => {
    const payload = await getPayloadClient()
    const res = await payload.find({ collection: 'case-studies', depth: 1, limit, sort: '-publishedAt', ...opts })
    return res.docs
  }, [])
})

export const getCaseStudy = cache(async (slug: string) => {
  const opts = await access()
  const payload = await getPayloadClient()
  const res = await payload.find({ collection: 'case-studies', depth: 2, limit: 1, ...opts, where: { slug: { equals: slug } } })
  return res.docs[0] ?? null
})
