import type { CSSProperties, ReactNode } from 'react'

/** Small uppercase label with the coral rule, used above section headings. */
export function Kicker({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  if (!children) return null
  return (
    <p className={`e-kicker ${className}`.trim()} style={style}>
      <span className="e-kicker-rule" aria-hidden="true" />
      {children}
    </p>
  )
}
