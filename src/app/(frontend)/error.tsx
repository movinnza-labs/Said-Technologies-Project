'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Kicker } from '@/components/ui/Kicker'
import '@/components/inner/PageHero.css'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="e-phero" aria-labelledby="page-title">
      <div className="container">
        <div className="e-phero-grid">
          <div>
            <Kicker>Something went wrong</Kicker>
            <h1 id="page-title" className="e-phero-title">
              We couldn’t load this page.
            </h1>
            <p className="e-lead">Please try again in a moment.</p>
            <div className="e-actions">
              <button type="button" className="e-btn e-btn--solid" onClick={reset}>
                Try again
              </button>
              <Link className="e-btn e-btn--line" href="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
