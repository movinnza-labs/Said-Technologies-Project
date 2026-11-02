'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import type { NavItem } from '@/lib/navigation'
import { Arrow } from '../ui/Links'

/** Content of one mega menu: tabbed groups (services, education), an industry grid, or a link list. */
export function MegaPanel({ item }: { item: NavItem }) {
  const [active, setActive] = useState(0)
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const intro = (
    <div className="mega-intro">
      <p className="eyebrow">{item.label}</p>
      {item.intro && <p className="mega-intro-text">{item.intro}</p>}
      <Link className="text-link" href={item.href}>
        {item.allLabel || `View ${item.label}`} <Arrow />
      </Link>
    </div>
  )

  if (item.kind === 'groups' && item.groups?.length) {
    // Short delay so moving diagonally toward the right column doesn't switch panes.
    const select = (i: number, delay = 0) => {
      clearTimeout(hoverTimer.current)
      if (delay) hoverTimer.current = setTimeout(() => setActive(i), delay)
      else setActive(i)
    }
    const group = item.groups[active] ?? item.groups[0]
    return (
      <div className="mega-inner mega-split">
        <div className="mega-col-a">
          {intro}
          <ul className="mega-tabs">
            {item.groups.map((g, i) => (
              <li key={g.href}>
                <Link
                  className="mega-tab"
                  href={g.href}
                  aria-current={i === active ? 'true' : undefined}
                  onMouseEnter={() => select(i, 90)}
                  onMouseLeave={() => clearTimeout(hoverTimer.current)}
                  onFocus={() => select(i)}
                >
                  {g.label}
                  <span className="chev" aria-hidden="true">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mega-col-b" onMouseEnter={() => clearTimeout(hoverTimer.current)}>
          <div className="mega-pane" role="region" aria-label={group.label}>
            <p className="mega-pane-title">{group.label}</p>
            {group.items.length ? (
              <ul className="mega-links">
                {group.items.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              group.note && <p className="mega-note">{group.note}</p>
            )}
            <Link className="text-link" href={group.href}>
              View {group.label} <Arrow />
            </Link>
          </div>
          {item.promo && (
            <Link className="mega-promo" href={item.promo.href}>
              <Image src={item.promo.src} alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
              {item.promo.text && <span>{item.promo.text}</span>}
              <strong>
                {item.promo.label} <Arrow />
              </strong>
            </Link>
          )}
        </div>
      </div>
    )
  }

  const links = item.links ?? []
  const listClass = item.kind === 'grid' ? 'mega-grid' : `mega-list${links.some((l) => l.description) ? ' has-desc' : ''}`
  return (
    <div className="mega-inner mega-simple">
      {intro}
      <ul className={listClass}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>
              <strong>{l.label}</strong>
              {l.description && <span>{l.description}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
