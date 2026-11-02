import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '../access'
import { seoTab } from '../fields/seo'
import { slugField } from '../fields/slug'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { previewUrl } from '../lib/urls'

/** Blogs, news and events under /insights. */
export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Post', plural: 'Blogs, News & Events' },
  admin: {
    preview: (doc) => previewUrl('posts', doc),
    group: 'Insights',
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'publishedAt', '_status'],
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-publishedAt',
  versions: { drafts: { schedulePublish: true }, maxPerDoc: 25 },
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            { name: 'excerpt', type: 'textarea', required: true, admin: { description: 'Shown on cards and as the default meta description.' } },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            { name: 'content', type: 'richText', required: true },
          ],
        },
        {
          label: 'Event details',
          admin: { condition: (data) => data?.type === 'event' },
          fields: [
            { name: 'eventDate', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
            { name: 'eventLocation', type: 'text' },
            { name: 'registrationUrl', type: 'text' },
          ],
        },
        seoTab,
      ],
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'blog',
      index: true,
      options: [
        { label: 'Blog', value: 'blog' },
        { label: 'News', value: 'news' },
        { label: 'Event', value: 'event' },
      ],
      admin: { position: 'sidebar' },
    },
    { name: 'category', type: 'text', admin: { position: 'sidebar', description: 'e.g. Cloud, Education, Cybersecurity' } },
    { name: 'author', type: 'text', admin: { position: 'sidebar' } },
    {
      name: 'readingTime',
      type: 'number',
      min: 1,
      admin: { position: 'sidebar', description: 'Minutes. Calculated from the content when left empty.' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      index: true,
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => (siblingData._status === 'published' && !value ? new Date().toISOString() : value),
        ],
      },
    },
    slugField(),
  ],
}
