import path from 'path'
import type { CollectionConfig } from 'payload'
import { anyone, authenticated } from '../access'
import { revalidateAfterChange } from '../hooks/revalidate'

/**
 * Images. Files are written to MEDIA_DIR; on Railway, mount a volume there so uploads
 * survive redeploys (see README).
 */
export const Media: CollectionConfig = {
  slug: 'media',
  admin: { group: 'Content' },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  hooks: { afterChange: [revalidateAfterChange] },
  fields: [
    { name: 'alt', type: 'text', required: true, admin: { description: 'Describe the image for screen readers and SEO.' } },
    { name: 'caption', type: 'text' },
  ],
  upload: {
    staticDir: path.resolve(process.env.MEDIA_DIR || 'media'),
    mimeTypes: ['image/*'],
    focalPoint: true,
    crop: true,
    adminThumbnail: 'thumbnail',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 900 },
      { name: 'feature', width: 1600 },
      { name: 'og', width: 1200, height: 630, position: 'centre' },
    ],
  },
}
