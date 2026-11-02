import path from 'path'
import type { CollectionAfterChangeHook, CollectionConfig } from 'payload'
import { authenticated } from '../access'
import { absoluteUrl } from '../lib/urls'

const escape = (s: unknown) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)

/** Emails ENQUIRY_NOTIFY_EMAIL when a new enquiry arrives (needs SMTP settings, see README). */
const notifyTeam: CollectionAfterChangeHook = async ({ doc, operation, req }) => {
  const to = process.env.ENQUIRY_NOTIFY_EMAIL
  if (operation !== 'create' || !to) return doc
  const rows = (
    [
      ['Type', doc.type],
      ['Name', doc.name],
      ['Email', doc.email],
      ['Phone', doc.phone],
      ['Company', doc.company],
      ['Location', doc.location],
      ['Area', [doc.area, doc.solution].filter(Boolean).join(' › ')],
      ['Industry', doc.industry],
      ['Role', doc.role],
      ['Experience', doc.experience],
      ['Contact by', doc.contactMethod],
    ] as const
  )
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5f7a81">${k}</td><td>${escape(v)}</td></tr>`)
    .join('')
  try {
    await req.payload.sendEmail({
      to,
      replyTo: doc.email,
      subject: `New ${doc.type} enquiry from ${doc.name}`,
      html: `<table>${rows}</table><p style="white-space:pre-line">${escape(doc.message)}</p>
        <p><a href="${absoluteUrl(`/admin/collections/enquiries/${doc.id}`)}">Open in the CMS</a></p>`,
    })
  } catch (err) {
    req.payload.logger.error(`Enquiry notification failed: ${(err as Error).message}`)
  }
  return doc
}

/**
 * Form submissions. The public never writes here directly: the site's server action validates
 * input and creates entries through the Local API.
 */
export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    group: 'Leads',
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'company', 'email', 'status', 'createdAt'],
    description: 'Submissions from the Contact and Careers forms.',
  },
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-createdAt',
  hooks: { afterChange: [notifyTeam] },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Business', value: 'business' },
            { label: 'Education', value: 'education' },
            { label: 'Career', value: 'career' },
          ],
        },
        {
          name: 'status',
          type: 'select',
          defaultValue: 'new',
          options: [
            { label: 'New', value: 'new' },
            { label: 'In progress', value: 'in-progress' },
            { label: 'Closed', value: 'closed' },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'company', type: 'text', label: 'Company / institution' },
        { name: 'designation', type: 'text' },
        { name: 'location', type: 'text', label: 'City / location' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'area', type: 'text', label: 'Solution area' },
        { name: 'solution', type: 'text', label: 'Specific solution' },
        { name: 'industry', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'role', type: 'text', label: 'Role of interest (careers)' },
        { name: 'experience', type: 'text', label: 'Experience (careers)' },
      ],
    },
    { name: 'message', type: 'textarea' },
    { name: 'contactMethod', type: 'select', options: ['email', 'phone', 'either'] },
    { name: 'resume', type: 'upload', relationTo: 'resumes' },
    { name: 'consent', type: 'checkbox', required: true },
    { name: 'sourcePage', type: 'text', admin: { readOnly: true } },
  ],
}

/** Resumes uploaded through the careers form. Private: only signed-in users can read them. */
export const Resumes: CollectionConfig = {
  slug: 'resumes',
  admin: { group: 'Leads', hidden: ({ user }) => !user },
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [],
  upload: {
    staticDir: path.resolve(process.env.MEDIA_DIR || 'media', 'resumes'),
    mimeTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
  },
}
