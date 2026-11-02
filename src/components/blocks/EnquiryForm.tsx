'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { startTransition, useActionState, useEffect, useRef, useState } from 'react'
import { submitEnquiry, type EnquiryState } from '@/lib/enquiry'
import { ButtonArrow } from '../ui/Links'

export type AreaOption = { label: string; value: string; children: { label: string; value: string }[] }
export type FormOptions = { business: AreaOption[]; education: AreaOption[]; industries: { label: string; value: string }[] }

const initial: EnquiryState = { status: 'idle' }

const EXPERIENCE = ['Student / fresher', 'Less than 1 year', '1–3 years', '3–5 years', '5–10 years', 'More than 10 years']

function Field({
  label,
  name,
  error,
  optional,
  children,
  wide,
}: {
  label: string
  name: string
  error?: string
  optional?: boolean
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <div className={`e-field${wide ? ' e-field--wide' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={`f-${name}`}>
        {label}
        {optional ? <span className="e-opt"> (optional)</span> : <span className="e-req"> *</span>}
      </label>
      {children}
      {error && (
        <p className="e-field-error" id={`f-${name}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

const inputProps = (name: string, error?: string) => ({
  id: `f-${name}`,
  name,
  'aria-invalid': error ? true : undefined,
  'aria-describedby': error ? `f-${name}-error` : undefined,
})

/** Business / education enquiry or career profile form. Prefills from ?type=&area=&solution=&industry=. */
export function EnquiryForm({ kind, options, roles = [] }: { kind: 'enquiry' | 'career'; options: FormOptions; roles?: string[] }) {
  const params = useSearchParams()
  const pathname = usePathname()
  const [state, action, pending] = useActionState(submitEnquiry, initial)
  const [type, setType] = useState<'business' | 'education'>(params.get('type') === 'education' ? 'education' : 'business')
  const [area, setArea] = useState(params.get('area') ?? '')
  const statusRef = useRef<HTMLDivElement>(null)
  const e = state.errors ?? {}

  const areas = options[type]
  const selectedArea = areas.find((a) => a.value === area)

  // Move focus to the result so screen-reader users hear it
  useEffect(() => {
    if (state.status !== 'idle') statusRef.current?.focus()
  }, [state])

  if (state.status === 'success') {
    return (
      <div className="e-form-status is-success" role="status" tabIndex={-1} ref={statusRef}>
        <strong>Thank you.</strong>
        <p>{state.message}</p>
      </div>
    )
  }

  return (
    <form
      className="e-form"
      noValidate
      // Submitting via a transition (not the `action` prop) stops React resetting the
      // fields, so visitors keep their input when validation fails.
      onSubmit={(ev) => {
        ev.preventDefault()
        const data = new FormData(ev.currentTarget)
        startTransition(() => action(data))
      }}
    >
      <input type="hidden" name="formType" value={kind} />
      <input type="hidden" name="sourcePage" value={pathname} />
      <div className="e-hp" aria-hidden="true">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && state.message && (
        <div className="e-form-status is-error" role="alert" tabIndex={-1} ref={statusRef}>
          {state.message}
        </div>
      )}

      {kind === 'enquiry' && (
        <fieldset className="e-field e-field--wide">
          <legend>
            Area of interest<span className="e-req"> *</span>
          </legend>
          <div className="e-pills">
            {(['business', 'education'] as const).map((t) => (
              <label key={t} className="e-pill">
                <input
                  type="radio"
                  name="enquiryType"
                  value={t}
                  checked={type === t}
                  onChange={() => {
                    setType(t)
                    setArea('')
                  }}
                />
                <span>{t === 'business' ? 'Business Solutions' : 'Education Solutions'}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="e-form-grid">
        <Field label="Full Name" name="name" error={e.name}>
          <input {...inputProps('name', e.name)} type="text" autoComplete="name" required />
        </Field>
        {kind === 'enquiry' && (
          <>
            <Field label="Company / Institution" name="company" error={e.company}>
              <input {...inputProps('company', e.company)} type="text" autoComplete="organization" required />
            </Field>
            <Field label="Designation" name="designation" optional>
              <input {...inputProps('designation')} type="text" autoComplete="organization-title" />
            </Field>
          </>
        )}
        <Field label="Email Address" name="email" error={e.email}>
          <input {...inputProps('email', e.email)} type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone Number" name="phone" error={e.phone} optional={kind === 'enquiry'}>
          <input {...inputProps('phone', e.phone)} type="tel" autoComplete="tel" />
        </Field>
        <Field label={kind === 'enquiry' ? 'City / Project Location' : 'Current Location'} name="location" error={e.location}>
          <input {...inputProps('location', e.location)} type="text" autoComplete="address-level2" required />
        </Field>

        {kind === 'career' && (
          <>
            <Field label="Role of Interest" name="role" error={e.role}>
              <select {...inputProps('role', e.role)} defaultValue="" required>
                <option value="">Select a role or area</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Experience" name="experience" error={e.experience}>
              <select {...inputProps('experience', e.experience)} defaultValue="" required>
                <option value="">Select your experience</option>
                {EXPERIENCE.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        {kind === 'enquiry' && (
          <>
            <Field label="Solution area" name="area" error={e.area}>
              <select {...inputProps('area', e.area)} value={area} onChange={(ev) => setArea(ev.target.value)} required>
                <option value="">Select an area</option>
                {areas.map((a) => (
                  <option key={a.value} value={a.value}>
                    {a.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Specific service or solution" name="solution" optional>
              <select {...inputProps('solution')} defaultValue={params.get('solution') ?? ''} disabled={!selectedArea?.children.length} key={area}>
                <option value="">{selectedArea?.children.length ? 'Select a solution' : 'Choose an area first'}</option>
                {selectedArea?.children.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Industry" name="industry" optional>
              <select {...inputProps('industry')} defaultValue={params.get('industry') ?? ''}>
                <option value="">Select your industry</option>
                {options.industries.map((i) => (
                  <option key={i.value} value={i.value}>
                    {i.label}
                  </option>
                ))}
              </select>
            </Field>
          </>
        )}

        {kind === 'career' && (
          <Field label="Resume (PDF, DOC or DOCX, up to 5 MB)" name="resume" error={e.resume} wide>
            <input {...inputProps('resume', e.resume)} type="file" accept=".pdf,.doc,.docx" required />
          </Field>
        )}

        <Field label={kind === 'enquiry' ? 'Brief Requirement' : 'Message'} name="message" error={e.message} optional={kind === 'career'} wide>
          <textarea
            {...inputProps('message', e.message)}
            rows={5}
            required={kind === 'enquiry'}
            placeholder={
              kind === 'enquiry'
                ? 'Project location, intended users, existing infrastructure, expected timeline…'
                : 'Tell us about relevant projects, work samples, preferred location and availability.'
            }
          />
        </Field>

        {kind === 'enquiry' && (
          <fieldset className={`e-field e-field--wide${e.contactMethod ? ' has-error' : ''}`}>
            <legend>
              Preferred Contact Method<span className="e-req"> *</span>
            </legend>
            <div className="e-pills">
              {(['email', 'phone', 'either'] as const).map((m) => (
                <label key={m} className="e-pill">
                  <input type="radio" name="contactMethod" value={m} defaultChecked={m === 'email'} />
                  <span>{m.charAt(0).toUpperCase() + m.slice(1)}</span>
                </label>
              ))}
            </div>
            {e.contactMethod && <p className="e-field-error">{e.contactMethod}</p>}
          </fieldset>
        )}
      </div>

      <div className={`e-consent${e.consent ? ' has-error' : ''}`}>
        <label>
          <input type="checkbox" name="consent" aria-invalid={e.consent ? true : undefined} />
          <span>
            I agree to be contacted by SAID Technologies regarding this {kind === 'career' ? 'application' : 'enquiry'} and acknowledge the
            applicable <Link href="/privacy-policy">Privacy Policy</Link>. <span className="e-req">*</span>
          </span>
        </label>
        {e.consent && <p className="e-field-error">{e.consent}</p>}
      </div>

      <button type="submit" className="e-btn e-btn--solid e-btn--icon" disabled={pending}>
        {pending ? 'Sending…' : kind === 'career' ? 'Share Your Profile' : 'Submit Enquiry'}
        <ButtonArrow />
      </button>
    </form>
  )
}
