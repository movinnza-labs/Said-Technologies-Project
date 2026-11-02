import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import type { Tab } from 'payload'

/** SEO tab: title, description, sharing image, canonical override and indexing control. */
export const seoTab: Tab = {
  name: 'meta',
  label: 'SEO',
  fields: [
    OverviewField({ titlePath: 'meta.title', descriptionPath: 'meta.description', imagePath: 'meta.image' }),
    MetaTitleField({ hasGenerateFn: true }),
    MetaDescriptionField({ hasGenerateFn: true }),
    MetaImageField({ relationTo: 'media' }),
    PreviewField({ hasGenerateFn: true, titlePath: 'meta.title', descriptionPath: 'meta.description' }),
    {
      name: 'canonical',
      type: 'text',
      label: 'Canonical URL override',
      admin: { description: 'Leave empty to use this page’s own URL.' },
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      label: 'Hide this page from search engines',
    },
  ],
}
