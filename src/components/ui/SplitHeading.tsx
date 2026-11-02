import type { ReactNode } from 'react'

/**
 * Headline whose words rise in one by one. Words are split on the server, so there is no
 * layout shift; screen readers get the full sentence via aria-label.
 */
export function SplitHeading({
  id,
  line,
  emphasis,
  className,
}: {
  id?: string
  line: string
  emphasis?: string | null
  className?: string
}) {
  let i = 0
  const words = (text: string): ReactNode[] =>
    text
      .split(/\s+/)
      .filter(Boolean)
      .flatMap((word, idx, all) => {
        const node = (
          <span className="w" aria-hidden="true" key={`${word}-${i}`}>
            <span style={{ ['--i' as string]: i++ }}>{word}</span>
          </span>
        )
        return idx < all.length - 1 ? [node, ' '] : [node]
      })

  const label = emphasis ? `${line} ${emphasis}` : line
  return (
    <h1 id={id} className={className} data-split="" aria-label={label}>
      {words(line)} {emphasis && <em>{words(emphasis)}</em>}
    </h1>
  )
}
