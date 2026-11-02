import type { ReactNode } from 'react'
import { Kicker } from './Kicker'

type Props = {
  id?: string
  kicker?: string | null
  heading?: string | null
  /** Optional paragraphs; shown in the right column above the action. Empty entries are skipped. */
  intro?: (string | null | undefined)[]
  /** Action on the right: a text link or button. */
  aside?: ReactNode
  /** Show the intro under the heading (left) instead of beside the action (right). */
  introBelow?: boolean
  as?: 'h1' | 'h2'
}

/**
 * Section heading row with a bottom rule: kicker + headline on the left; intro and action on
 * the right, aligned to the bottom of the headline.
 */
export function SectionHead({ id, kicker, heading, intro, aside, introBelow = false, as: Tag = 'h2' }: Props) {
  const paras = (intro ?? []).filter((p): p is string => Boolean(p))
  if (!kicker && !heading && !aside && !paras.length) return null
  const split = paras.length > 0 && !introBelow
  return (
    <div className={`e-sec-head reveal${split ? ' e-sec-head--split' : ''}`}>
      <div>
        <Kicker>{kicker}</Kicker>
        {heading && (
          <Tag id={id} className="e-h2">
            {heading}
          </Tag>
        )}
        {introBelow &&
          paras.map((p) => (
            <p className="e-sec-intro e-sec-intro--below" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}
      </div>
      {split ? (
        <div className="e-sec-aside">
          {paras.map((p) => (
            <p className="e-sec-intro" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}
          {aside}
        </div>
      ) : (
        aside
      )}
    </div>
  )
}
