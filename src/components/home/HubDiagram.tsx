'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ImageSource } from '@/lib/media'
import { Icon } from '../ui/Icon'

export type HubNode = { label: string; icon?: string | null; group: 'ent' | 'edu' }

// Orbit slots in SVG units (0–100): enterprise across the top arc, education along the bottom.
const SLOTS = {
  ent: [
    [10.1, 37],
    [25.3, 16],
    [50, 8],
    [74.7, 16],
    [89.9, 37],
  ],
  edu: [
    [74.7, 84],
    [50, 92],
    [25.3, 84],
  ],
} as const

type Props = {
  nodes: HubNode[]
  image: ImageSource
  legend: { ent: string; edu: string }
}

/** Team photo at the centre with solution labels in orbit; one label and spoke light up at a time. */
export function HubDiagram({ nodes, image, legend }: Props) {
  const placed = (['ent', 'edu'] as const).flatMap((group) =>
    nodes
      .filter((n) => n.group === group)
      .slice(0, SLOTS[group].length)
      .map((n, i) => ({ ...n, x: SLOTS[group][i][0], y: SLOTS[group][i][1] })),
  )
  const [active, setActive] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !placed.length) return
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      // Skip work while off screen or in a background tab
      if (!document.hidden && !ref.current?.closest('.anim-off')) setActive((n) => (n + 1) % placed.length)
      timer = setTimeout(tick, 1400)
    }
    timer = setTimeout(tick, 1800)
    return () => clearTimeout(timer)
  }, [placed.length])

  return (
    <div className="hub-wrap hero-in" style={{ ['--d' as string]: 2 }} ref={ref}>
      <div className="hub" role="img" aria-label="Enterprise technology and education solutions connected through SAID Technologies">
        <svg className="hub-lines" viewBox="0 0 100 100" aria-hidden="true">
          <circle className="orbit o1" cx="50" cy="50" r="42" />
          <circle className="orbit o2" cx="50" cy="50" r="30" />
          <g className="spokes">
            {placed.map((n, i) => (
              <line key={n.label} className={`hub-spoke ${n.group}${active === i ? ' is-on' : ''}`} x1="50" y1="50" x2={n.x} y2={n.y} />
            ))}
          </g>
        </svg>

        <div className="hub-core">
          <span className="core-glow" aria-hidden="true" />
          <div className="core-photo">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 64rem) 260px, 64vw" priority style={{ objectFit: 'cover' }} />
          </div>
          <span className="core-logo">
            <Image src="/assets/img/said-logo-transparent.png" width={482} height={183} alt="SAID Technologies Pvt. Ltd." />
          </span>
        </div>

        <ul className="hub-pulses" aria-hidden="true">
          {placed.map((n, i) => (
            <li
              key={n.label}
              className={n.group}
              style={{ ['--x' as string]: `${n.x}%`, ['--y' as string]: `${n.y}%`, ['--d' as string]: `${i * 0.35}s` }}
            />
          ))}
        </ul>

        <ul className="hub-nodes" aria-hidden="true">
          {placed.map((n, i) => (
            <li
              key={n.label}
              className={`hub-node ${n.group}${active === i ? ' is-on' : ''}`}
              style={{ ['--x' as string]: `${n.x}%`, ['--y' as string]: `${n.y}%`, ['--i' as string]: i }}
            >
              <span className="hn-ic">
                <Icon name={n.icon} />
              </span>
              {n.label}
            </li>
          ))}
        </ul>
      </div>
      <ul className="hub-legend" aria-hidden="true">
        <li className="ent">{legend.ent}</li>
        <li className="edu">{legend.edu}</li>
      </ul>
    </div>
  )
}
