'use server'

import { headers } from 'next/headers'
import { getPayloadClient } from './payload'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
}

const MAX_RESUME_BYTES = 5 * 1024 * 1024
const RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Basic per-IP throttle (per server instance): 5 submissions per 10 minutes.
// Bounded so it can't grow into a memory leak: expired IPs are dropped and size is capped.
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 5
const MAX_TRACKED_IPS = 5000
const hits = new Map<string, number[]>()

const throttled = (ip: string) => {
  const now = Date.now()
  if (hits.size >= MAX_TRACKED_IPS) {
    for (const [key, times] of hits) if (now - times[times.length - 1] >= WINDOW_MS) hits.delete(key)
    // Still full (e.g. a flood of new IPs): drop the oldest entries
    for (const key of hits.keys()) {
      if (hits.size < MAX_TRACKED_IPS) break
      hits.delete(key)
    }
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > LIMIT
}

const text = (form: FormData, key: string, max = 200) => String(form.get(key) ?? '').trim().slice(0, max)

/** Validates a Contact or Careers form submission and stores it in the Enquiries collection. */
export async function submitEnquiry(_prev: EnquiryState, form: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (text(form, 'website')) return { status: 'success', message: 'Thank you. We will be in touch shortly.' }

  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown'
  if (throttled(ip)) {
    return { status: 'error', message: 'Too many submissions. Please try again in a few minutes.' }
  }

  const kind = text(form, 'formType') === 'career' ? 'career' : 'enquiry'
  const type: 'business' | 'education' | 'career' =
    kind === 'career' ? 'career' : text(form, 'enquiryType') === 'education' ? 'education' : 'business'

  const data = {
    type,
    name: text(form, 'name', 120),
    email: text(form, 'email', 160),
    phone: text(form, 'phone', 40),
    company: text(form, 'company', 160),
    designation: text(form, 'designation', 120),
    location: text(form, 'location', 120),
    area: text(form, 'area', 120),
    solution: text(form, 'solution', 120),
    industry: text(form, 'industry', 120),
    role: text(form, 'role', 120),
    experience: text(form, 'experience', 60),
    message: text(form, 'message', 4000),
    contactMethod: (['email', 'phone', 'either'].includes(text(form, 'contactMethod')) ? text(form, 'contactMethod') : undefined) as
      | 'email'
      | 'phone'
      | 'either'
      | undefined,
    consent: form.get('consent') === 'on',
    sourcePage: text(form, 'sourcePage', 300),
  }

  const errors: Record<string, string> = {}
  if (!data.name) errors.name = 'Please enter your full name.'
  if (!EMAIL.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (!data.consent) errors.consent = 'Please confirm you agree to be contacted.'
  if (kind === 'career') {
    if (!data.phone) errors.phone = 'Please enter your phone number.'
    if (!data.location) errors.location = 'Please enter your current location.'
    if (!data.role) errors.role = 'Please choose a role or area.'
    if (!data.experience) errors.experience = 'Please choose your experience.'
  } else {
    if (!data.message) errors.message = 'Please describe your requirement.'
    if (!data.company) errors.company = 'Please enter your company or institution.'
    if (!data.location) errors.location = 'Please enter the city or project location.'
    if (!data.area) errors.area = 'Please choose a solution area.'
    if (!data.contactMethod) errors.contactMethod = 'Please choose how we should contact you.'
  }

  const resume = form.get('resume')
  const hasResume = resume instanceof File && resume.size > 0
  if (kind === 'career') {
    if (!hasResume) errors.resume = 'Please attach your resume.'
    else if (!RESUME_TYPES.includes(resume.type)) errors.resume = 'Resumes must be PDF, DOC or DOCX files.'
    else if (resume.size > MAX_RESUME_BYTES) errors.resume = 'Resumes must be 5 MB or smaller.'
  }

  if (Object.keys(errors).length) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors }
  }

  try {
    const payload = await getPayloadClient()
    let resumeId: number | undefined
    if (kind === 'career' && hasResume) {
      const file = resume as File
      const upload = await payload.create({
        collection: 'resumes',
        data: {},
        file: {
          data: Buffer.from(await file.arrayBuffer()),
          mimetype: file.type,
          name: `${Date.now()}-${file.name.replace(/[^\w.-]+/g, '_')}`,
          size: file.size,
        },
      })
      resumeId = upload.id
    }
    await payload.create({ collection: 'enquiries', data: { ...data, resume: resumeId } })
    return {
      status: 'success',
      message:
        kind === 'career'
          ? 'Thank you for sharing your profile. We will contact you if a suitable opportunity arises.'
          : 'Thank you. Your enquiry has been received and our team will be in touch shortly.',
    }
  } catch (err) {
    console.error('Enquiry submission failed', err)
    return { status: 'error', message: 'Sorry, something went wrong. Please try again or email us directly.' }
  }
}
