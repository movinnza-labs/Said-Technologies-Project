'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '../ui/Icon'
import './Services.css'

export type SolutionRow = { title: string; text?: string | null; href: string; icon?: string | null; image?: string | null }

/**
 * Numbered list of solutions (services, industries, education). On desktop the hovered or
 * focused row swaps the photo in the sticky panel beside it; on smaller screens it is hidden.
 */
export function SolutionIndex({ rows }: { rows: SolutionRow[] }) {
  const [active, setActive] = useState(0)
  const withImages = rows.some((r) => r.image)

  return (
    <div className="e-svc">
      <ol className="e-svc-list">
        {rows.map((row, i) => (
          <li
            key={row.href}
            className={`e-svc-row${i === active ? ' is-on' : ''}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <span className="e-svc-ic">
              <Icon name={row.icon} />
            </span>
            <div className="e-svc-text">
              <h3 className="e-svc-title">{row.title}</h3>
              {row.text && <p className="e-svc-desc">{row.text}</p>}
            </div>
            <Link className="e-svc-more e-stretch" href={row.href}>
              Learn more<span className="sr-only"> about {row.title}</span>{' '}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
      {withImages && (
        <div className="e-svc-stage" aria-hidden="true">
          <div className="e-svc-photos">
            {rows.map((row, i) =>
              row.image ? (
                <Image
                  key={row.href}
                  className={i === active ? 'is-on' : undefined}
                  src={row.image}
                  alt=""
                  fill
                  sizes="(min-width: 64rem) 34vw, 1px"
                  style={{ objectFit: 'cover' }}
                />
              ) : null,
            )}
          </div>
          <div className="e-svc-caption">
            {rows.map((row, i) => (
              <span key={row.href} className={i === active ? 'is-on' : undefined}>
                {row.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
