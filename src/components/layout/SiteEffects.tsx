'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Shows `.reveal` / `.wipe` elements as they scroll into view (once). */
function useReveal(pathname: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible), .wipe:not(.is-visible)'))
    if (!els.length) return
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    // Stagger siblings in the same row
    els.forEach((el) => {
      if (!el.classList.contains('reveal') || !el.parentElement) return
      const i = Array.prototype.indexOf.call(el.parentElement.children, el)
      el.style.transitionDelay = `${(i % 3) * 60}ms`
    })
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible')
            io.unobserve(en.target)
          }
        }),
      { rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => io.observe(el))

    // Safety net: fast scrolling can skip the observer; show anything already reached.
    let pending = els
    let queued = false
    const sweep = () => {
      queued = false
      const limit = window.innerHeight * 0.95
      pending = pending.filter((el) => {
        if (el.classList.contains('is-visible')) return false
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('is-visible')
          io.unobserve(el)
          return false
        }
        return true
      })
      if (!pending.length) window.removeEventListener('scroll', onScroll)
    }
    const onScroll = () => {
      if (!queued) {
        queued = true
        requestAnimationFrame(sweep)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    sweep()
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])
}

/** Pauses looping CSS animations while their block is off screen. */
function usePauseOffscreen(pathname: string) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const loopers = document.querySelectorAll('.e-hero, .e-ticker, .hub-wrap, .e-about-media')
    const io = new IntersectionObserver((entries) =>
      entries.forEach((en) => en.target.classList.toggle('anim-off', !en.isIntersecting)),
    )
    loopers.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

/** Scroll progress bar, back-to-top button and the scroll-driven effects above. */
export function SiteEffects() {
  const pathname = usePathname()
  const barRef = useRef<HTMLSpanElement>(null)
  const [showTop, setShowTop] = useState(false)

  useReveal(pathname)
  usePauseOffscreen(pathname)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      barRef.current?.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : '0')
      setShowTop(window.scrollY > 600)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={barRef} />
      </div>
      <a
        className={`to-top${showTop ? ' is-shown' : ''}`}
        href="#main"
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' })
          document.getElementById('main')?.focus({ preventScroll: true })
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </>
  )
}
