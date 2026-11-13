import { getPayloadClient } from '@/lib/payload'

export const dynamic = 'force-dynamic'

/** Health check (used by deploy\windows\deploy.ps1): confirms the app is up and the database answers. */
export async function GET() {
  try {
    const payload = await getPayloadClient()
    await payload.count({ collection: 'users', overrideAccess: true })
    return Response.json({ status: 'ok' })
  } catch (err) {
    return Response.json({ status: 'error', message: (err as Error).message }, { status: 503 })
  }
}
