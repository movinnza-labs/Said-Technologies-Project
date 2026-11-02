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
  as?: 'h1' | 'h2'
}

/**
 * Section heading row with a bottom rule: kicker + headline on the left; intro and action on
 * the right, aligned to the bottom of the headline.
 */
export function SectionHead({ id, kicker, heading, intro, aside, as: Tag = 'h2' }: Props) {
  const paras = (intro ?? []).filter((p): p is string => Boolean(p))
  if (!kicker && !heading && !aside && !paras.length) return null
  return (
    <div className={`e-sec-head reveal${paras.length ? ' e-sec-head--split' : ''}`}>
      <div>
        <Kicker>{kicker}</Kicker>
        {heading && (
          <Tag id={id} className="e-h2">
            {heading}
          </Tag>
        )}
      </div>
      {paras.length ? (
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
