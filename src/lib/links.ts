import { docPath, type RoutableDoc } from './urls'

export type CmsLink = {
  type?: ('reference' | 'custom') | null
  newTab?: boolean | null
  reference?: { relationTo: string; value: number | string | RoutableDoc } | null
  url?: string | null
  label?: string | null
  style?: string | null
}

export type ResolvedLink = { href: string; label: string; newTab: boolean; style: string }

/** Turns a CMS link field into an href. Unpopulated references (ids only) cannot be resolved. */
export const resolveLink = (link: CmsLink | null | undefined, fallbackLabel = ''): ResolvedLink | null => {
  if (!link) return null
  let href: string | null = null
  if (link.type === 'reference') {
    const value = link.reference?.value
    if (value && typeof value === 'object') href = docPath(link.reference!.relationTo, value)
  } else if (link.url) {
    href = link.url
  }
  if (!href) return null
  return { href, label: link.label || fallbackLabel, newTab: Boolean(link.newTab), style: link.style || 'solid' }
}

export const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
