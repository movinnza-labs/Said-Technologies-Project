import type { GlobalConfig } from 'payload'
import { anyone, authenticated } from '../access'
import { linkField } from '../fields/link'
import { revalidateGlobal } from '../hooks/revalidate'

/**
 * Main navigation. Mega menus for services, education and industries build themselves from
 * those collections, so a new service appears in the menu as soon as it is published.
 */
export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header & Navigation',
  admin: { group: 'Settings' },
  access: { read: anyone, update: authenticated },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 8,
      admin: { initCollapsed: true },
      fields: [
        { name: 'label', type: 'text', required: true },
        linkField({ name: 'link', withLabel: false }),
        {
          name: 'menuType',
          type: 'select',
          defaultValue: 'list',
          options: [
            { label: 'Plain link (no menu)', value: 'none' },
            { label: 'Services (automatic)', value: 'services' },
            { label: 'Education (automatic)', value: 'education' },
            { label: 'Industries (automatic)', value: 'industries' },
            { label: 'Hand-picked links', value: 'list' },
          ],
        },
        {
          type: 'collapsible',
          label: 'Menu panel',
          admin: { condition: (_, siblingData) => siblingData?.menuType !== 'none' },
          fields: [
            { name: 'intro', type: 'text', admin: { description: 'Headline at the top of the panel.' } },
            { name: 'allLabel', type: 'text', admin: { description: 'Text for the "see all" link, e.g. "All Solutions".' } },
            {
              name: 'links',
              type: 'array',
              admin: { condition: (_, siblingData) => siblingData?.menuType === 'list' },
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'description', type: 'text' },
                linkField({ name: 'link', withLabel: false }),
              ],
            },
            {
              name: 'promo',
              type: 'group',
              admin: {
                condition: (_, siblingData) => siblingData?.menuType === 'services' || siblingData?.menuType === 'education',
              },
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'text', type: 'text' },
                linkField({ name: 'link' }),
              ],
            },
          ],
        },
      ],
    },
    linkField({ name: 'cta', label: 'Header button' }),
    linkField({ name: 'drawerCta', label: 'Mobile menu button' }),
    {
      name: 'contactLinks',
      type: 'array',
      admin: { description: 'Links under "Contact Us" in the mobile menu.' },
      fields: [linkField({ name: 'link' })],
    },
  ],
}
