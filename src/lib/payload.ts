import config from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

export const getPayloadClient = () => getPayload({ config })

/** True while an editor previews unpublished changes (see /next/preview). */
export const isDraft = async (): Promise<boolean> => {
  try {
    return (await draftMode()).isEnabled
  } catch {
    return false
  }
}

const isBuildPhase = () => process.env.NEXT_PHASE === 'phase-production-build'

/**
 * Railway builds run before the database is reachable. During `next build` a failed query
 * returns the fallback so static shells still compile; at runtime errors propagate normally.
 */
export async function safeQuery<T>(query: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await query()
  } catch (err) {
    if (isBuildPhase()) return fallback
    throw err
  }
}
