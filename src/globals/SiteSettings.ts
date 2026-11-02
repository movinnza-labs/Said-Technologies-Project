import type { GlobalConfig } from 'payload'
import { anyone, authenticated } from '../access'
import { revalidateGlobal } from '../hooks/revalidate'

/** Company details and site-wide SEO defaults. */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: { group: 'Settings' },
  access: { read: anyone, update: authenticated },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Company',
          fields: [
            { name: 'siteName', type: 'text', required: true, defaultValue: 'SAID Technologies' },
            { name: 'legalName', type: 'text', defaultValue: 'SAID Technologies Pvt. Ltd.' },
            { name: 'tagline', type: 'text', defaultValue: 'Creating Possibilities. Delivering Solutions.' },
            {
              name: 'contact',
              type: 'group',
              fields: [
                { name: 'email', type: 'email' },
                { name: 'phone', type: 'text' },
                { name: 'address', type: 'textarea' },
                { name: 'city', type: 'text' },
                { name: 'region', type: 'text', admin: { description: 'State, e.g. Maharashtra' } },
                { name: 'postalCode', type: 'text' },
                { name: 'country', type: 'text', defaultValue: 'IN' },
                { name: 'mapUrl', type: 'text' },
              ],
            },
            {
              name: 'socials',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  options: ['linkedin', 'x', 'facebook', 'instagram', 'youtube'],
                },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'SEO defaults',
          fields: [
            {
              name: 'titleSuffix',
              type: 'text',
              defaultValue: 'SAID Technologies',
              admin: { description: 'Appended to page titles: "Page title | suffix".' },
            },
            { name: 'defaultDescription', type: 'textarea' },
            { name: 'ogImage', type: 'upload', relationTo: 'media', admin: { description: 'Default social sharing image (1200 × 630).' } },
            { name: 'twitterHandle', type: 'text', admin: { description: 'e.g. @saidtech' } },
            {
              name: 'noIndex',
              type: 'checkbox',
              label: 'Hide the whole site from search engines',
              admin: { description: 'Use on staging environments only.' },
            },
          ],
        },
      ],
    },
  ],
}
