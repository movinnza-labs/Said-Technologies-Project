import type { Metadata } from 'next'
import { Kicker } from '@/components/ui/Kicker'
import { ArrowButton, TextLink } from '@/components/ui/Links'
import '@/components/inner/PageHero.css'

export const metadata: Metadata = { title: 'Page not found | SAID Technologies', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="e-phero" aria-labelledby="page-title">
      <div className="container">
        <div className="e-phero-grid">
          <div>
            <Kicker>Error 404</Kicker>
            <h1 id="page-title" className="e-phero-title">
              This page could not be found.
            </h1>
            <p className="e-lead">The link may be outdated, or the page may have moved. These are good places to continue:</p>
            <div className="e-actions">
              <ArrowButton href="/">Back to home</ArrowButton>
              <ArrowButton href="/what-we-do" variant="line" icon={false}>
                Explore Our Solutions
              </ArrowButton>
            </div>
            <p className="e-aside">
              Need help? <TextLink href="/contact#enquiry-form">Contact us</TextLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
