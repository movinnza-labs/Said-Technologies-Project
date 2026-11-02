import type { GlobalConfig } from 'payload'
import { anyone, authenticated } from '../access'
import { linkField } from '../fields/link'
import { revalidateGlobal } from '../hooks/revalidate'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: { group: 'Settings' },
  access: { read: anyone, update: authenticated },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    { name: 'kicker', type: 'text', defaultValue: 'SAID Technologies Pvt. Ltd.' },
    { name: 'tagline', type: 'text', defaultValue: 'Services, Automation & Integrations Delivered' },
    { name: 'about', type: 'textarea' },
    {
      name: 'columns',
      type: 'array',
      maxRows: 5,
      admin: { initCollapsed: true },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'links', type: 'array', fields: [linkField({ name: 'link' })] },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: '© {year} SAID Technologies Pvt. Ltd. All rights reserved.',
      admin: { description: '{year} is replaced with the current year.' },
    },
    {
      name: 'credit',
      type: 'group',
      fields: [
        { name: 'prefix', type: 'text', defaultValue: 'Design and Developed By' },
        { name: 'name', type: 'text', defaultValue: 'Movinnza' },
        { name: 'url', type: 'text' },
      ],
    },
    { name: 'legalLinks', type: 'array', fields: [linkField({ name: 'link' })] },
  ],
}
