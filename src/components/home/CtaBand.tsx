import type { ImageSource } from '@/lib/media'
import type { ResolvedLink } from '@/lib/links'
import { CmsImage } from '../ui/CmsImage'
import { ArrowButton } from '../ui/Links'
import './Cta.css'

type Props = {
  id?: string
  heading: string
  text?: string | null
  link: ResolvedLink | null
  image?: ImageSource | null
}

/** Full-width call-to-action band over a background photograph. */
export function CtaBand({ id = 'cta-title', heading, text, link, image }: Props) {
  return (
    <section className="e-cta on-dark" aria-labelledby={id}>
      <CmsImage image={image ?? { src: '/assets/img/cta-network.jpg', alt: '' }} decorative sizes="100vw" />
      <div className="container e-cta-inner reveal">
        <div className="e-cta-copy">
          <h2 id={id} className="e-h2">
            {heading}
          </h2>
          {text && <p>{text}</p>}
        </div>
        {link && (
          <ArrowButton href={link.href} variant="gold" newTab={link.newTab}>
            {link.label}
          </ArrowButton>
        )}
      </div>
    </section>
  )
}
