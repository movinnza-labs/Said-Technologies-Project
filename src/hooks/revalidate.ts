import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

/**
 * Pages are cached (ISR) and rebuilt on demand. Any content change clears the whole site
 * cache because navigation, footer and cross-links appear on every page.
 * Seed and CLI scripts run outside Next.js, so they pass `context.disableRevalidate`.
 */
const purge = (context: Record<string, unknown> | undefined, logger?: { warn: (msg: string) => void }) => {
  if (context?.disableRevalidate) return
  try {
    revalidatePath('/', 'layout')
  } catch (err) {
    logger?.warn(`Revalidation skipped: ${(err as Error).message}`)
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc, req }) => {
  purge(req.context, req.payload.logger)
  return doc
}

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc, req }) => {
  purge(req.context, req.payload.logger)
  return doc
}

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc, req }) => {
  purge(req.context, req.payload.logger)
  return doc
}
