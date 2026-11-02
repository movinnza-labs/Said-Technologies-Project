import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '../access'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { previewUrl } from '../lib/urls'

/** Approved customer stories: requirement, agreed solution and verified outcome. */
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: { singular: 'Case study', plural: 'Case studies' },
  admin: {
    preview: (doc) => previewUrl('case-studies', doc),
    group: 'Insights',
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'publishedAt', '_status'],
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-publishedAt',
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'outcome',
      type: 'text',
      required: true,
      admin: { description: 'One-line verified outcome, shown on cards.' },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Story',
          fields: [
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            { name: 'requirement', type: 'richText' },
            { name: 'solution', type: 'richText' },
            { name: 'results', type: 'richText' },
          ],
        },
        seoTab,
      ],
    },
    { name: 'industry', type: 'relationship', relationTo: 'industries', admin: { position: 'sidebar' } },
    { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true, admin: { position: 'sidebar' } },
    { name: 'client', type: 'text', admin: { position: 'sidebar', description: 'Only with the client’s written approval.' } },
    {
      name: 'publishedAt',
      type: 'date',
      index: true,
      admin: { position: 'sidebar' },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => (siblingData._status === 'published' && !value ? new Date().toISOString() : value),
        ],
      },
    },
    slugField(),
  ],
}
