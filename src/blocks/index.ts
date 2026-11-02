import type { Block, Field } from 'payload'
import { iconField } from '../fields/icon'
import { linkField } from '../fields/link'

const heading: Field[] = [
  { name: 'eyebrow', type: 'text' },
  { name: 'heading', type: 'text' },
]

const anchor: Field = {
  name: 'anchor',
  type: 'text',
  admin: { description: 'Optional section id for in-page links, e.g. "solution-areas".' },
}

/** Heading with rich text; "split" puts the heading beside the copy, "stacked" suits long legal text. */
export const ContentBlock: Block = {
  slug: 'content',
  labels: { singular: 'Text section', plural: 'Text sections' },
  fields: [
    ...heading,
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'split',
      options: [
        { label: 'Heading beside text', value: 'split' },
        { label: 'Stacked (long-form)', value: 'stacked' },
      ],
    },
    { name: 'body', type: 'richText' },
    anchor,
  ],
}

/** Image beside copy with an optional pull quote, as in the homepage About section. */
export const MediaTextBlock: Block = {
  slug: 'mediaText',
  labels: { singular: 'Image and text', plural: 'Image and text' },
  fields: [
    ...heading,
    { name: 'lead', type: 'textarea' },
    { name: 'body', type: 'textarea', admin: { description: 'Separate paragraphs with a blank line.' } },
    { name: 'quote', type: 'text' },
    { name: 'quoteCaption', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'insetImage', type: 'upload', relationTo: 'media' },
    linkField({ name: 'link' }),
    anchor,
  ],
}

/** Numbered list of short items (scope areas, focus areas, engagement checklists). */
export const NumberedListBlock: Block = {
  slug: 'numberedList',
  labels: { singular: 'Numbered list', plural: 'Numbered lists' },
  fields: [
    ...heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'outro', type: 'textarea', admin: { description: 'Optional note shown after the list.' } },
    anchor,
  ],
}

/** Card grid: hand-picked cards, or an automatic list from a collection. */
export const CardGridBlock: Block = {
  slug: 'cardGrid',
  labels: { singular: 'Card grid', plural: 'Card grids' },
  fields: [
    ...heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'manual',
      options: [
        { label: 'Hand-picked cards', value: 'manual' },
        { label: 'Sub-pages of this page', value: 'children' },
        { label: 'All top-level services', value: 'services' },
        { label: 'All industries', value: 'industries' },
        { label: 'All top-level education areas', value: 'education' },
      ],
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'cards',
      options: [
        { label: 'Cards', value: 'cards' },
        { label: 'Photo cards', value: 'photo' },
        { label: 'Numbered index', value: 'index' },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      admin: { condition: (_, siblingData) => siblingData?.source === 'manual', initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', admin: { description: 'Small tag above the title.' } },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
        iconField(),
        { name: 'image', type: 'upload', relationTo: 'media' },
        linkField({ name: 'link' }),
      ],
    },
    { name: 'chipsHeading', type: 'text', admin: { description: 'Optional heading for related industry chips.' } },
    { name: 'chips', type: 'relationship', relationTo: 'industries', hasMany: true },
    { name: 'footnote', type: 'textarea' },
    linkField({ name: 'link' }),
    anchor,
  ],
}

/** Step-by-step approach (Understand → Plan → Enable). */
export const ProcessBlock: Block = {
  slug: 'process',
  labels: { singular: 'Process steps', plural: 'Process steps' },
  fields: [
    ...heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'title', type: 'text', required: true }, { name: 'text', type: 'textarea' }, iconField()],
    },
    linkField({ name: 'link' }),
    anchor,
  ],
}

/** Closing call-to-action band. */
export const CallToActionBlock: Block = {
  slug: 'cta',
  labels: { singular: 'Call to action', plural: 'Calls to action' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'text', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    linkField({ name: 'link' }),
  ],
}

/** Enquiry form (business / education) or career profile form with optional side cards. */
export const EnquiryFormBlock: Block = {
  slug: 'enquiryForm',
  labels: { singular: 'Enquiry form', plural: 'Enquiry forms' },
  fields: [
    ...heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'formType',
      type: 'select',
      defaultValue: 'enquiry',
      options: [
        { label: 'Business / education enquiry', value: 'enquiry' },
        { label: 'Career profile', value: 'career' },
      ],
    },
    {
      name: 'roles',
      type: 'array',
      label: 'Roles of interest',
      admin: { condition: (_, siblingData) => siblingData?.formType === 'career' },
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    {
      name: 'asideCards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
        linkField({ name: 'link' }),
      ],
    },
    { name: 'anchor', type: 'text', defaultValue: 'enquiry-form' },
  ],
}

/** Latest posts or case studies. */
export const InsightsFeedBlock: Block = {
  slug: 'insightsFeed',
  labels: { singular: 'Insights feed', plural: 'Insights feeds' },
  fields: [
    ...heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'feed',
      type: 'select',
      defaultValue: 'blog',
      options: [
        { label: 'Blogs', value: 'blog' },
        { label: 'News', value: 'news' },
        { label: 'Events', value: 'event' },
        { label: 'Case studies', value: 'case-study' },
      ],
    },
    { name: 'limit', type: 'number', defaultValue: 12, min: 1, max: 48 },
    {
      name: 'emptyText',
      type: 'textarea',
      defaultValue: 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
    },
    anchor,
  ],
}

export const layoutBlocks: Block[] = [
  ContentBlock,
  MediaTextBlock,
  NumberedListBlock,
  CardGridBlock,
  ProcessBlock,
  CallToActionBlock,
  EnquiryFormBlock,
  InsightsFeedBlock,
]

export const layoutField: Field = {
  name: 'layout',
  type: 'blocks',
  blocks: layoutBlocks,
  admin: { initCollapsed: true },
}
