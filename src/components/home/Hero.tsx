import type { Homepage } from '@/payload-types'
import { resolveLink } from '@/lib/links'
import { toImage } from '@/lib/media'
import { Kicker } from '../ui/Kicker'
import { ArrowButton, TextLink } from '../ui/Links'
import { SplitHeading } from '../ui/SplitHeading'
import { HubDiagram, type HubNode } from './HubDiagram'
import './Hero.css'

const step = (d: number) => ({ ['--d' as string]: d })

export function Hero({ data }: { data: Homepage['hero'] }) {
  const primary = resolveLink(data.primary)
  const secondary = resolveLink(data.secondary)
  const aside = resolveLink(data.asideLink)
  const image = toImage(data.hubImage, '/assets/img/hub-core.jpg', 'Smiling team collaborating together at a shared table')!
  const nodes: HubNode[] = (data.hubNodes ?? []).map((n) => ({ label: n.label, icon: n.icon, group: n.group === 'edu' ? 'edu' : 'ent' }))

  return (
    <section className="e-hero" aria-labelledby="hero-title">
      <div className="e-hero-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container e-hero-grid">
        <div className="e-hero-copy">
          <Kicker className="hero-in" style={step(0)}>
            {data.kicker}
          </Kicker>
          <SplitHeading id="hero-title" className="e-display" line={data.headingLine} emphasis={data.headingEmphasis} />
          {data.lead && (
            <p className="e-lead hero-in" style={step(2)}>
              {data.lead}
            </p>
          )}
          {(data.columnOne || data.columnTwo) && (
            <div className="e-hero-cols hero-in" style={step(3)}>
              {data.columnOne && <p>{data.columnOne}</p>}
              {data.columnTwo && <p>{data.columnTwo}</p>}
            </div>
          )}
          {(primary || secondary) && (
            <div className="e-actions hero-in" style={step(4)}>
              {primary && <ArrowButton href={primary.href}>{primary.label}</ArrowButton>}
              {secondary && (
                <ArrowButton href={secondary.href} variant="line" icon={false}>
                  {secondary.label}
                </ArrowButton>
              )}
            </div>
          )}
          {aside && (
            <p className="e-aside hero-in" style={step(5)}>
              {data.asideText} <TextLink href={aside.href}>{aside.label}</TextLink>
            </p>
          )}
        </div>

        <HubDiagram
          nodes={nodes}
          image={image}
          legend={{ ent: data.legendEnterprise || 'Enterprise technology', edu: data.legendEducation || 'Education solutions' }}
        />
      </div>
    </section>
  )
}
