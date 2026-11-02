import type { Metadata } from 'next'
import { getIndustry, getNestedDoc, type SolutionCollection, type SolutionDoc } from './data'
import { buildMetadata } from './seo'
import { docPath } from './urls'

/** Loads a service / education doc by its path segments, or an industry by slug. */
export const loadSolution = async (collection: SolutionCollection, segments: string[]): Promise<SolutionDoc | null> => {
  if (collection === 'industries') return segments.length === 1 ? getIndustry(segments[0]) : null
  return (await getNestedDoc(collection, segments)) as SolutionDoc | null
}

export const solutionMetadata = async (collection: SolutionCollection, segments: string[]): Promise<Metadata> => {
  const doc = await loadSolution(collection, segments)
  if (!doc) return {}
  return buildMetadata({
    title: doc.title,
    description: doc.excerpt || doc.hero?.lead,
    path: docPath(collection, doc),
    meta: doc.meta,
    image: doc.hero?.image ?? doc.cardImage,
  })
}
