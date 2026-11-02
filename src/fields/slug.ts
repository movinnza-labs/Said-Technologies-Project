import type { Field, FieldHook } from 'payload'

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const formatSlug =
  (fallbackField: string): FieldHook =>
  ({ value, data, originalDoc }) => {
    if (typeof value === 'string' && value.trim()) return slugify(value)
    const source = data?.[fallbackField] ?? originalDoc?.[fallbackField]
    return typeof source === 'string' ? slugify(source) : value
  }

/** URL segment generated from the title unless set by hand. */
export const slugField = (fallbackField = 'title', unique = true): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique,
  admin: {
    position: 'sidebar',
    description: 'URL segment. Generated from the title when left empty.',
  },
  hooks: { beforeValidate: [formatSlug(fallbackField)] },
})
