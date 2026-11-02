import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '../access'
import { layoutField } from '../blocks'
import { heroField } from '../fields/hero'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { previewUrl } from '../lib/urls'

/**
 * General pages built from content blocks: Who We Are, Careers, Contact, Insights, listing pages
 * and legal pages. Nest a page under a parent to build its URL (Insights → Blogs = /insights/blogs).
 * The homepage has its own global because its layout is bespoke.
 */
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    preview: (doc) => previewUrl('pages', doc),
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      type: 'tabs',
      tabs: [
        { label: 'Hero', fields: [heroField] },
        { label: 'Content', fields: [layoutField] },
        seoTab,
      ],
    },
    slugField('title', false),
  ],
}
