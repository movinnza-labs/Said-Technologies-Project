'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Navigation } from '@/lib/navigation'
import { Drawer } from './Drawer'
import { MegaPanel } from './MegaPanel'
import './Header.css'

const DESKTOP = '(min-width: 64rem)'

export function SiteHeader({ nav }: { nav: Navigation }) {
  const pathname = usePathname()
  const [open, setOpen] = useState<number | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const timers = useRef<{ open?: ReturnType<typeof setTimeout>; close?: ReturnType<typeof setTimeout> }>({})
  const listRef = useRef<HTMLUListElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(null), [])
  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    menuBtnRef.current?.focus()
  }, [])

  // Close menus after navigation (state adjusted during render when the path changes)
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(null)
    setDrawerOpen(false)
  }

  // Header border and shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Click outside or crossing the breakpoint closes the mega menu
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node)) close()
    }
    const mq = window.matchMedia(DESKTOP)
    document.addEventListener('click', onClick)
    mq.addEventListener('change', close)
    return () => {
      document.removeEventListener('click', onClick)
      mq.removeEventListener('change', close)
    }
  }, [close])

  const isDesktop = () => window.matchMedia(DESKTOP).matches

  const onEnter = (i: number) => {
    if (!isDesktop()) return
    clearTimeout(timers.current.close)
    clearTimeout(timers.current.open)
    timers.current.open = setTimeout(() => setOpen(i), open === null ? 150 : 0)
  }

  const onLeave = () => {
    clearTimeout(timers.current.open)
    timers.current.close = setTimeout(close, 200)
  }

  const focusFirst = (i: number) =>
    requestAnimationFrame(() => listRef.current?.querySelector<HTMLAnchorElement>(`#mega-${i} a`)?.focus())

  const isCurrent = (href: string) => href !== '/' && (pathname === href || pathname.startsWith(`${href}/`))

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-bar">
          <Link className="logo" href="/" aria-label="SAID Technologies Pvt. Ltd., Home">
            <Image
              className="logo-img"
              src="/assets/img/said-logo-transparent.png"
              width={482}
              height={183}
              alt="SAID Technologies Pvt. Ltd."
              priority
            />
          </Link>

          <nav className="site-nav" aria-label="Main">
            <ul className="nav-list" ref={listRef}>
              {nav.items.map((item, i) => {
                const hasMenu = item.kind !== 'none'
                const current = isCurrent(item.href)
                return (
                  <li
                    key={item.label}
                    className={`nav-item${open === i ? ' is-open' : ''}`}
                    onMouseEnter={hasMenu ? () => onEnter(i) : undefined}
                    onMouseLeave={hasMenu ? onLeave : undefined}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape' && open === i) {
                        close()
                        e.currentTarget.querySelector<HTMLButtonElement>('.nav-toggle')?.focus()
                      }
                    }}
                  >
                    <Link
                      className={`nav-link${current ? ' is-current' : ''}`}
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    {hasMenu && (
                      <>
                        <button
                          className="nav-toggle"
                          type="button"
                          aria-expanded={open === i}
                          aria-controls={`mega-${i}`}
                          onClick={() => {
                            if (open === i) close()
                            else {
                              setOpen(i)
                              focusFirst(i)
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowDown') {
                              e.preventDefault()
                              setOpen(i)
                              focusFirst(i)
                            }
                          }}
                        >
                          <span className="sr-only">Open {item.label} menu</span>
                          <span aria-hidden="true" className="caret" />
                        </button>
                        <div className="mega" id={`mega-${i}`} hidden={open !== i}>
                          {open === i && <MegaPanel item={item} />}
                        </div>
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {nav.cta && (
            <Link className="header-cta" href={nav.cta.href}>
              {nav.cta.label}
            </Link>
          )}

          <button
            ref={menuBtnRef}
            className="menu-btn"
            type="button"
            aria-expanded={drawerOpen}
            aria-controls="site-drawer"
            onClick={() => setDrawerOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <Drawer nav={nav} open={drawerOpen} onClose={closeDrawer} />
    </>
  )
}
