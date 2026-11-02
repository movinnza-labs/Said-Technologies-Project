import type { Field, GlobalConfig } from 'payload'
import { anyone, authenticated } from '../access'
import { iconField } from '../fields/icon'
import { linkField } from '../fields/link'
import { seoTab } from '../fields/seo'
import { revalidateGlobal } from '../hooks/revalidate'

const sectionHead = (defaults: { kicker: string; heading: string }): Field[] => [
  { name: 'kicker', type: 'text', defaultValue: defaults.kicker },
  { name: 'heading', type: 'text', defaultValue: defaults.heading },
]

const pick = (name: string, relationTo: 'services' | 'industries' | 'education', description: string): Field => ({
  name,
  type: 'relationship',
  relationTo,
  hasMany: true,
  admin: { description },
})

/** Homepage content, one tab per section of Design 4. Lists fall back to the collections when left empty. */
export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: { group: 'Content' },
  access: { read: anyone, update: authenticated },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          name: 'hero',
          fields: [
            { name: 'kicker', type: 'text' },
            { name: 'headingLine', type: 'text', required: true, label: 'Heading (first line)' },
            { name: 'headingEmphasis', type: 'text', label: 'Heading (highlighted line)' },
            { name: 'lead', type: 'textarea' },
            { name: 'columnOne', type: 'textarea' },
            { name: 'columnTwo', type: 'textarea' },
            linkField({ name: 'primary', label: 'Primary button' }),
            linkField({ name: 'secondary', label: 'Secondary button' }),
            { name: 'asideText', type: 'text' },
            linkField({ name: 'asideLink', label: 'Aside link' }),
            {
              type: 'collapsible',
              label: 'Hub diagram',
              fields: [
                { name: 'hubImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'hubNodes',
                  type: 'array',
                  maxRows: 8,
                  admin: { description: 'Up to 8 labels orbiting the photo: enterprise first, then education.' },
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    iconField(),
                    {
                      name: 'group',
                      type: 'radio',
                      defaultValue: 'ent',
                      options: [
                        { label: 'Enterprise', value: 'ent' },
                        { label: 'Education', value: 'edu' },
                      ],
                    },
                  ],
                },
                { name: 'legendEnterprise', type: 'text', defaultValue: 'Enterprise technology' },
                { name: 'legendEducation', type: 'text', defaultValue: 'Education solutions' },
              ],
            },
          ],
        },
        {
          label: 'Ticker',
          name: 'ticker',
          fields: [
            {
              name: 'items',
              type: 'array',
              admin: { description: 'Leave empty to list all top-level services and education areas.' },
              fields: [{ name: 'text', type: 'text', required: true }],
            },
          ],
        },
        {
          label: 'About',
          name: 'about',
          fields: [
            ...sectionHead({ kicker: 'About SAID Technologies', heading: 'Connecting Business, Technology and Learning' }),
            { name: 'lead', type: 'textarea' },
            { name: 'body', type: 'textarea' },
            { name: 'quote', type: 'text' },
            { name: 'quoteCaption', type: 'text' },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'insetImage', type: 'upload', relationTo: 'media' },
            linkField({ name: 'link' }),
          ],
        },
        {
          label: 'Services',
          name: 'services',
          fields: [
            ...sectionHead({ kicker: 'What We Do', heading: 'Explore Our Technology Solutions' }),
            linkField({ name: 'link' }),
            pick('items', 'services', 'Leave empty to show all top-level services in order.'),
          ],
        },
        {
          label: 'Industries',
          name: 'industries',
          fields: [
            ...sectionHead({ kicker: 'Industries', heading: 'Technology Across Industries' }),
            { name: 'intro', type: 'textarea' },
            linkField({ name: 'link' }),
            pick('items', 'industries', 'Leave empty to show all industries. The grid is designed for 10.'),
          ],
        },
        {
          label: 'Education',
          name: 'education',
          fields: [
            ...sectionHead({ kicker: 'Education', heading: 'Education That Connects Knowledge With Practice' }),
            { name: 'lead', type: 'textarea' },
            { name: 'body', type: 'textarea' },
            linkField({ name: 'link' }),
            pick('items', 'education', 'Leave empty to show all top-level education areas.'),
          ],
        },
        {
          label: 'Approach',
          name: 'approach',
          fields: [
            ...sectionHead({ kicker: 'Our Approach', heading: 'From Requirement to Implementation' }),
            linkField({ name: 'link' }),
            {
              name: 'steps',
              type: 'array',
              maxRows: 4,
              fields: [{ name: 'title', type: 'text', required: true }, { name: 'text', type: 'textarea' }, iconField()],
            },
          ],
        },
        {
          label: 'Insights',
          name: 'insights',
          fields: [
            { name: 'enabled', type: 'checkbox', defaultValue: true, label: 'Show this section' },
            ...sectionHead({ kicker: 'Insights', heading: 'Perspectives for better technology decisions.' }),
            linkField({ name: 'link' }),
            { name: 'blogsHeading', type: 'text', defaultValue: 'Blogs' },
            { name: 'caseStudiesHeading', type: 'text', defaultValue: 'Case Studies' },
          ],
        },
        {
          label: 'Careers',
          name: 'careers',
          fields: [
            ...sectionHead({ kicker: 'Careers', heading: 'Careers at SAID' }),
            { name: 'lead', type: 'textarea' },
            linkField({ name: 'link' }),
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          label: 'Call to action',
          name: 'cta',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'text', type: 'textarea' },
            linkField({ name: 'link' }),
            { name: 'image', type: 'upload', relationTo: 'media' },
          ],
        },
        seoTab,
      ],
    },
  ],
}
