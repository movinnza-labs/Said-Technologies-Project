import type { ImageSource } from '@/lib/media'
import type { ResolvedLink } from '@/lib/links'
import { CmsImage } from '../ui/CmsImage'
import { Kicker } from '../ui/Kicker'
import { ArrowButton } from '../ui/Links'
import './Careers.css'

type Props = {
  kicker?: string | null
  heading?: string | null
  lead?: string | null
  link: ResolvedLink | null
  image: ImageSource | null
}

/** Copy beside a rounded photograph, both inside the page container. */
export function Careers({ kicker, heading, lead, link, image }: Props) {
  return (
    <section className="e-section e-careers" aria-labelledby="careers-title">
      <div className="container e-careers-grid">
        <div className="e-careers-copy reveal">
          <Kicker>{kicker}</Kicker>
          <h2 id="careers-title" className="e-h2">
            {heading}
          </h2>
          {lead && <p className="e-lead">{lead}</p>}
          {link && <ArrowButton href={link.href}>{link.label}</ArrowButton>}
        </div>
        <figure className="e-careers-photo wipe">
          <CmsImage image={image} sizes="(min-width: 64rem) 45vw, 100vw" />
        </figure>
      </div>
    </section>
  )
}
