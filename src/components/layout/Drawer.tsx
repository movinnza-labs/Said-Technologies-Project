'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Navigation, NavItem, NavLink } from '@/lib/navigation'
import './Drawer.css'

type Props = { nav: Navigation; open: boolean; onClose: () => void }

function Toggle({ label, expanded, controls, onClick }: { label: string; expanded: boolean; controls: string; onClick: () => void }) {
  return (
    <button type="button" className="drawer-toggle" aria-expanded={expanded} aria-controls={controls} onClick={onClick}>
      <span className="sr-only">Expand {label}</span>
      <span className="caret" aria-hidden="true" />
    </button>
  )
}

/** Second level: a service/education group with its own expandable sub-list. */
function DrawerGroup({ id, label, href, items }: { id: string; label: string; href: string; items: NavLink[] }) {
  const [open, setOpen] = useState(false)
  if (!items.length) {
    return (
      <li>
        <Link className="drawer-link" href={href}>
          {label}
        </Link>
      </li>
    )
  }
  return (
    <li>
      <div className="drawer-row">
        <Link className="drawer-link" href={href}>
          {label}
        </Link>
        <Toggle label={label} expanded={open} controls={id} onClick={() => setOpen(!open)} />
      </div>
      <ul className="drawer-sub" id={id} hidden={!open}>
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export function Drawer({ nav, open, onClose }: Props) {
  const [section, setSection] = useState<number | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const sections: NavItem[] = [
    ...nav.items,
    ...(nav.contactLinks.length
      ? [{ label: nav.cta?.label || 'Contact Us', href: nav.cta?.href || '/contact', kind: 'list' as const, links: nav.contactLinks }]
      : []),
  ]

  // Lock page scroll, focus the close button, close on Escape and when reaching desktop width
  useEffect(() => {
    if (!open) return
    document.body.classList.add('no-scroll')
    closeRef.current?.focus()
    const mq = window.matchMedia('(min-width: 64rem)')
    const onChange = (m: MediaQueryListEvent) => m.matches && onClose()
    mq.addEventListener('change', onChange)
    return () => {
      document.body.classList.remove('no-scroll')
      mq.removeEventListener('change', onChange)
    }
  }, [open, onClose])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key !== 'Tab' || !panelRef.current) return
    // Keep focus inside the drawer
    const focusables = Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
      (el) => el.offsetParent !== null,
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }

  return (
    <div className="drawer" id="site-drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open} onKeyDown={onKeyDown}>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel" ref={panelRef}>
        <div className="drawer-head">
          <Link className="logo" href="/">
            <Image className="logo-img" src="/assets/img/said-logo-transparent.png" width={482} height={183} alt="SAID Technologies Pvt. Ltd." />
          </Link>
          <button className="drawer-close" type="button" ref={closeRef} onClick={onClose}>
            <span className="sr-only">Close menu</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="drawer-body">
          <ul className="drawer-list">
            {sections.map((item, idx) => {
              const id = `ds-${idx}`
              const expanded = section === idx
              const hasChildren = item.kind !== 'none'
              return (
                <li className="drawer-section" key={item.label}>
                  <div className="drawer-row drawer-top">
                    <Link className="drawer-link" href={item.href}>
                      {item.label}
                    </Link>
                    {hasChildren && (
                      // Only one top-level section open at a time
                      <Toggle label={item.label} expanded={expanded} controls={id} onClick={() => setSection(expanded ? null : idx)} />
                    )}
                  </div>
                  {hasChildren && (
                    <ul className="drawer-group" id={id} hidden={!expanded}>
                      {item.kind === 'groups'
                        ? item.groups?.map((g, gi) => <DrawerGroup key={g.href} id={`dg-${idx}-${gi}`} {...g} />)
                        : item.links?.map((l) => (
                            <li key={l.href}>
                              <Link className="drawer-link" href={l.href}>
                                {l.label}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {nav.drawerCta && (
          <div className="drawer-foot">
            <Link className="e-btn e-btn--solid" href={nav.drawerCta.href}>
              {nav.drawerCta.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
