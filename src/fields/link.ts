import type { Field, GroupField } from 'payload'

export const linkableCollections = ['pages', 'services', 'industries', 'education', 'posts', 'case-studies'] as const

type LinkOptions = {
  name?: string
  label?: string
  withLabel?: boolean
  withStyle?: boolean
  required?: boolean
}

/** A link to an internal document (kept in sync when its slug changes) or to a custom URL. */
export const linkField = ({
  name = 'link',
  label,
  withLabel = true,
  withStyle = false,
  required = false,
}: LinkOptions = {}): GroupField => {
  const fields: Field[] = [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'radio',
          defaultValue: 'custom',
          options: [
            { label: 'Internal page', value: 'reference' },
            { label: 'Custom URL', value: 'custom' },
          ],
          admin: { layout: 'horizontal', width: '50%' },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          admin: { width: '50%', style: { alignSelf: 'flex-end' } },
        },
      ],
    },
    {
      name: 'reference',
      type: 'relationship',
      relationTo: [...linkableCollections],
      admin: { condition: (_, siblingData) => siblingData?.type === 'reference' },
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      admin: {
        condition: (_, siblingData) => siblingData?.type !== 'reference',
        description: 'Relative (/contact#enquiry-form) or absolute (https://…).',
      },
    },
  ]

  if (withLabel) fields.unshift({ name: 'label', type: 'text', required })

  if (withStyle) {
    fields.push({
      name: 'style',
      type: 'select',
      defaultValue: 'solid',
      options: [
        { label: 'Solid (teal)', value: 'solid' },
        { label: 'Outline', value: 'line' },
        { label: 'Accent (coral)', value: 'gold' },
        { label: 'Text link', value: 'link' },
      ],
    })
  }

  return { name, label, type: 'group', fields, admin: { hideGutter: true } }
}

export const linkArray = (name: string, maxRows?: number, withStyle = false): Field => ({
  name,
  type: 'array',
  maxRows,
  fields: [linkField({ withStyle })],
  admin: { initCollapsed: true },
})
