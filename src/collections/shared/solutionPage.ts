import type { CollectionConfig, Field } from 'payload'
import { authenticated, authenticatedOrPublished } from '../../access'
import { layoutField } from '../../blocks'
import { heroField } from '../../fields/hero'
import { iconField } from '../../fields/icon'
import { seoTab } from '../../fields/seo'
import { slugField } from '../../fields/slug'
import { revalidateAfterChange, revalidateAfterDelete } from '../../hooks/revalidate'
import { previewUrl } from '../../lib/urls'

type Options = {
  slug: string
  labels: { singular: string; plural: string }
  group: string
  /** Nested collections (services, education) get parents via the nested-docs plugin. */
  nested?: boolean
  extraSidebar?: Field[]
}

/**
 * Services, industries and education areas share one shape: a hero, flexible content blocks,
 * and card details used in menus, grids and the homepage.
 */
export const solutionPage = ({ slug, labels, group, nested = false, extraSidebar = [] }: Options): CollectionConfig => ({
  slug,
  labels,
  admin: {
    preview: (doc) => previewUrl(slug, doc),
    group,
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order', '_status', 'updatedAt'],
    listSearchableFields: ['title', 'slug'],
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: 'order',
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
        {
          label: 'Card & menu',
          description: 'How this page appears in menus, card grids and the homepage.',
          fields: [
            { name: 'tagline', type: 'text', admin: { description: 'Short line shown under the title in menus and grids.' } },
            { name: 'excerpt', type: 'textarea', admin: { description: 'One or two sentences for cards.' } },
            iconField(),
            { name: 'cardImage', type: 'upload', relationTo: 'media' },
          ],
        },
        seoTab,
      ],
    },
    slugField('title', !nested),
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      index: true,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
    {
      name: 'showInMenu',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    ...extraSidebar,
  ],
})
