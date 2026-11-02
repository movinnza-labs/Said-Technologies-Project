import Image from 'next/image'
import type { ImageSource } from '@/lib/media'
import type { ResolvedLink } from '@/lib/links'
import { CmsImage } from '../ui/CmsImage'
import { Kicker } from '../ui/Kicker'
import { TextLink } from '../ui/Links'
import './About.css'

export type AboutProps = {
  id?: string
  /** Optional section id for in-page links. */
  anchor?: string | null
  tone?: 'white' | 'paper'
  kicker?: string | null
  heading?: string | null
  lead?: string | null
  body: string[]
  /** Shown as a badge overlapping the main photograph. */
  quote?: string | null
  quoteCaption?: string | null
  image: ImageSource | null
  inset?: ImageSource | null
  link?: ResolvedLink | null
}

/** Photo collage with an overlapping badge beside the copy (homepage About and the "Image and text" block). */
export function About({ id = 'about-title', anchor, tone, kicker, heading, lead, body, quote, quoteCaption, image, inset, link }: AboutProps) {
  return (
    <section
      className={`e-section e-about${tone === 'white' ? ' e-section--alt' : ''}`}
      id={anchor || undefined}
      aria-labelledby={heading ? id : undefined}
    >
      <div className="container e-about-grid">
        <div className="e-about-media">
          <figure className="e-about-main wipe">
            <CmsImage image={image} sizes="(min-width: 64rem) 45vw, 90vw" />
          </figure>
          {inset && (
            <figure className="e-about-inset wipe">
              <CmsImage image={inset} sizes="(min-width: 64rem) 25vw, 50vw" />
            </figure>
          )}
          {quote && (
            <div className="e-about-badge reveal">
              {/* The badge spells out the SAID name, so the logo leads it */}
              <span className="e-about-badge-logo">
                <Image src="/assets/img/said-logo-transparent.png" width={482} height={183} alt="SAID" />
              </span>
              <span className="e-about-badge-text">
                <strong>{quote}</strong>
                {quoteCaption && <small>{quoteCaption}</small>}
              </span>
            </div>
          )}
        </div>
        <div className="e-about-copy reveal">
          <Kicker>{kicker}</Kicker>
          {heading && (
            <h2 id={id} className="e-h2">
              {heading}
            </h2>
          )}
          {lead && <p className="e-lead">{lead}</p>}
          {body.map((p) => (
            <p className="e-body" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}
          {link && <TextLink href={link.href}>{link.label}</TextLink>}
        </div>
      </div>
    </section>
  )
}
