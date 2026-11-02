import Link from 'next/link'
import type { ImageSource } from '@/lib/media'
import { CmsImage } from '../ui/CmsImage'
import './Industries.css'

export type MagItem = { title: string; text?: string | null; href: string; image: ImageSource | null }

/** Photo cards in an editorial rhythm (wide / narrow); designed around ten items. */
export function MagazineGrid({ items }: { items: MagItem[] }) {
  return (
    <ul className="e-mag">
      {items.map((item, i) => {
        const wide = [0, 1, 5, 6].includes(i % 10)
        return (
          <li key={item.href} className={`e-mag-item e-mag-${(i % 10) + 1} reveal`}>
            <figure className="e-mag-photo">
              <CmsImage
                image={item.image}
                decorative
                sizes={wide ? '(min-width: 64rem) 55vw, (min-width: 48rem) 90vw, 80vw' : '(min-width: 64rem) 32vw, (min-width: 48rem) 45vw, 80vw'}
              />
            </figure>
            <div className="e-mag-body">
              <h3 className="e-mag-title">
                <Link className="e-stretch" href={item.href}>
                  {item.title}
                </Link>
              </h3>
              {item.text && <p>{item.text}</p>}
            </div>
            <span className="e-mag-go" aria-hidden="true">
              →
            </span>
          </li>
        )
      })}
    </ul>
  )
}
