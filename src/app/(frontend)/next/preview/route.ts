import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

/**
 * Turns on draft mode for signed-in CMS users, then opens the requested page.
 * Used by the admin "Preview" button: /next/preview?path=/what-we-do/cloud-solutions
 */
export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get('path') || '/'
  // Only allow same-site paths
  if (!path.startsWith('/') || path.startsWith('//')) return new Response('Invalid path', { status: 400 })

  const payload = await getPayloadClient()
  const { user } = await payload.auth({ headers: req.headers })
  if (!user) return new Response('You must be signed in to the CMS to preview.', { status: 403 })

  ;(await draftMode()).enable()
  redirect(path)
}
