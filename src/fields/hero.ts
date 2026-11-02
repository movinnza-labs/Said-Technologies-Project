import type { Field } from 'payload'
import { linkArray } from './link'

/** Page hero used by inner pages: kicker, headline, intro copy, image and up to two buttons. */
export const heroField: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the headline. Defaults to the title.' } },
    { name: 'heading', type: 'textarea', admin: { description: 'Main headline (H1). Defaults to the title.' } },
    { name: 'lead', type: 'textarea', admin: { description: 'Larger opening sentence.' } },
    { name: 'body', type: 'textarea', admin: { description: 'Supporting copy. Separate paragraphs with a blank line.' } },
    { name: 'image', type: 'upload', relationTo: 'media' },
    linkArray('actions', 2, true),
  ],
}
