import { timingSafeEqual } from 'crypto'
import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { runSeed } from '@/seed/run'

export const dynamic = 'force-dynamic'
export const maxDuration = 300

const matches = (given: string, expected: string) => {
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

/**
 * One-time content seed for the production image (which has no CLI). Disabled unless SEED_SECRET
 * is set, only fills an empty database, and never deletes anything. Remove SEED_SECRET afterwards.
 *
 *   curl -X POST https://your-domain/next/seed -H "x-seed-secret: $SEED_SECRET"
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SEED_SECRET
  const given = req.headers.get('x-seed-secret') ?? ''
  if (!secret || secret.length < 16 || !matches(given, secret)) {
    return new Response('Not found', { status: 404 })
  }
  try {
    const payload = await getPayloadClient()
    const result = await runSeed(payload, { force: false })
    // Pages requested before seeding were cached empty; clear them so the new content shows.
    if (result.status === 'seeded') revalidatePath('/', 'layout')
    return Response.json(result, { status: result.status === 'seeded' ? 201 : 200 })
  } catch (err) {
    console.error('Seed failed', err)
    return Response.json({ status: 'error', message: (err as Error).message }, { status: 500 })
  }
}
