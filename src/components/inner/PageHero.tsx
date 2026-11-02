import Link from 'next/link'
import type { Media } from '@/payload-types'
import type { Crumb } from '@/lib/schema'
import { resolveLink, type CmsLink } from '@/lib/links'
import { paragraphs, toImage } from '@/lib/media'
import { CmsImage } from '../ui/CmsImage'
import { Kicker } from '../ui/Kicker'
import { CmsAction } from '../ui/Links'
import './PageHero.css'

export type HeroData = {
  eyebrow?: string | null
  heading?: string | null
  lead?: string | null
  body?: string | null
  image?: number | Media | null
  actions?: { link?: CmsLink | null; id?: string | null }[] | null
}

type Props = {
  title: string
  hero?: HeroData | null
  crumbs: Crumb[]
  /** Bundled photo used until an image is uploaded. */
  fallbackImage?: string
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="e-crumbs hero-in" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((c, i) => (
          <li key={`${c.label}-${i}`}>
            {c.href && i < crumbs.length - 1 ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHero({ title, hero, crumbs, fallbackImage }: Props) {
  const image = toImage(hero?.image, fallbackImage, title)
  const actions = (hero?.actions ?? []).map((a) => resolveLink(a.link)).filter(Boolean)
  const step = (d: number) => ({ ['--d' as string]: d })

  return (
    <section className="e-phero" aria-labelledby="page-title">
      <div className="container">
        <Breadcrumbs crumbs={crumbs} />
        <div className={`e-phero-grid${image ? ' e-phero-grid--media' : ''}`}>
          <div>
            <Kicker className="hero-in" style={step(1)}>
              {hero?.eyebrow || title}
            </Kicker>
            <h1 id="page-title" className="e-phero-title hero-in" style={step(2)}>
              {hero?.heading || title}
            </h1>
            {hero?.lead && (
              <p className="e-lead hero-in" style={step(3)}>
                {hero.lead}
              </p>
            )}
            {hero?.body && (
              <div className="e-phero-body hero-in" style={step(3)}>
                {paragraphs(hero.body).map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            )}
            {actions.length > 0 && (
              <div className="e-actions hero-in" style={step(4)}>
                {actions.map((link, i) => (
                  <CmsAction key={link!.href} link={link} fallbackVariant={i === 0 ? 'solid' : 'line'} />
                ))}
              </div>
            )}
          </div>
          {image && (
            <figure className="e-phero-media hero-in" style={step(3)}>
              <CmsImage image={image} priority sizes="(min-width: 64rem) 36vw, 100vw" />
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}
