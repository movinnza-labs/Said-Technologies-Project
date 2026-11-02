import Link from 'next/link'
import type { ReactNode } from 'react'
import { isExternal, type ResolvedLink } from '@/lib/links'

type BaseProps = { href: string; className?: string; newTab?: boolean; children: ReactNode; ariaLabel?: string }

/** next/link for internal routes, a plain anchor for external ones. */
export function SmartLink({ href, className, newTab, children, ariaLabel }: BaseProps) {
  const target = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  if (isExternal(href)) {
    return (
      <a href={href} className={className} aria-label={ariaLabel} {...target}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} aria-label={ariaLabel} {...target}>
      {children}
    </Link>
  )
}

/** Arrow drawn as SVG so it sits exactly centred inside the button's circle. */
export const ButtonArrow = () => (
  <span className="e-btn-ic" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
)

export const Arrow = () => (
  <span className="arrow" aria-hidden="true">
    →
  </span>
)

type Variant = 'solid' | 'line' | 'gold'

/** Pill button with the circular arrow badge. */
export function ArrowButton({
  href,
  children,
  variant = 'solid',
  icon = true,
  newTab,
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: Variant | string
  icon?: boolean
  newTab?: boolean
  className?: string
}) {
  return (
    <SmartLink href={href} newTab={newTab} className={`e-btn e-btn--${variant}${icon ? ' e-btn--icon' : ''} ${className}`.trim()}>
      {children}
      {icon && <ButtonArrow />}
    </SmartLink>
  )
}

/** Underlined text link with arrow. */
export function TextLink({ href, children, newTab, className = '' }: Omit<BaseProps, 'ariaLabel'>) {
  return (
    <SmartLink href={href} newTab={newTab} className={`e-link ${className}`.trim()}>
      {children} <Arrow />
    </SmartLink>
  )
}

/** Renders a resolved CMS link in its chosen style. */
export function CmsAction({ link, fallbackVariant = 'solid' }: { link: ResolvedLink | null; fallbackVariant?: Variant }) {
  if (!link) return null
  if (link.style === 'link') {
    return (
      <TextLink href={link.href} newTab={link.newTab}>
        {link.label}
      </TextLink>
    )
  }
  const variant = (['solid', 'line', 'gold'].includes(link.style) ? link.style : fallbackVariant) as Variant
  return (
    <ArrowButton href={link.href} variant={variant} newTab={link.newTab} icon={variant !== 'line'}>
      {link.label}
    </ArrowButton>
  )
}
