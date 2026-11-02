import type { Footer, Header } from '@/payload-types'
import { childrenOf, getGlobal, getSolutionList, topLevel, type SolutionCollection } from './data'
import { defaultFooter, defaultHeader } from './defaults'
import { resolveLink, type CmsLink } from './links'
import { toImage } from './media'
import { docPath } from './urls'

export type NavLink = { label: string; href: string; description?: string | null }
export type NavGroup = { label: string; href: string; note?: string | null; items: NavLink[] }

export type NavItem = {
  label: string
  href: string
  kind: 'none' | 'groups' | 'grid' | 'list'
  intro?: string | null
  allLabel?: string | null
  groups?: NavGroup[]
  links?: NavLink[]
  promo?: { src: string; text?: string | null; label: string; href: string } | null
}

export type Navigation = {
  items: NavItem[]
  cta: NavLink | null
  drawerCta: NavLink | null
  contactLinks: NavLink[]
}

const groupsFrom = async (collection: Exclude<SolutionCollection, 'industries'>): Promise<NavGroup[]> => {
  const all = (await getSolutionList(collection)).filter((d) => d.showInMenu !== false)
  return topLevel(all).map((parent) => ({
    label: parent.title,
    href: docPath(collection, parent),
    note: parent.excerpt,
    items: childrenOf(all, parent.id).map((child) => ({ label: child.title, href: docPath(collection, child) })),
  }))
}

const industryLinks = async (): Promise<NavLink[]> =>
  (await getSolutionList('industries'))
    .filter((d) => d.showInMenu !== false)
    .map((d) => ({ label: d.title, href: docPath('industries', d), description: d.tagline }))

const toNavLink = (link: CmsLink | null | undefined, label?: string | null): NavLink | null => {
  const resolved = resolveLink(link, label ?? '')
  return resolved ? { label: resolved.label, href: resolved.href } : null
}

export async function getNavigation(): Promise<Navigation> {
  const header = (await getGlobal<Header>('header', 1)) ?? null
  const source = header?.navItems?.length ? header : (defaultHeader as unknown as Header)

  const items = await Promise.all(
    (source.navItems ?? []).map(async (item): Promise<NavItem> => {
      const href = resolveLink(item.link)?.href ?? '#'
      const base = { label: item.label, href, intro: item.intro, allLabel: item.allLabel }
      const promoLink = resolveLink(item.promo?.link)
      const promoImage = toImage(item.promo?.image, '/assets/img/card-servers.jpg')
      const promo = promoLink && promoImage ? { src: promoImage.src, text: item.promo?.text, label: promoLink.label, href: promoLink.href } : null

      switch (item.menuType) {
        case 'services':
        case 'education':
          return { ...base, kind: 'groups', groups: await groupsFrom(item.menuType), promo }
        case 'industries':
          return { ...base, kind: 'grid', links: await industryLinks() }
        case 'list':
          return {
            ...base,
            kind: 'list',
            links: (item.links ?? [])
              .map((l) => {
                const r = resolveLink(l.link, l.label)
                return r ? { label: l.label, href: r.href, description: l.description } : null
              })
              .filter((l): l is NonNullable<typeof l> => Boolean(l)),
          }
        default:
          return { ...base, kind: 'none' }
      }
    }),
  )

  return {
    items,
    cta: toNavLink(source.cta) ?? { label: 'Contact Us', href: '/contact' },
    drawerCta: toNavLink(source.drawerCta) ?? { label: 'Discuss Your Requirement', href: '/contact#enquiry-form' },
    contactLinks: (source.contactLinks ?? []).map((c) => toNavLink(c.link)).filter((l): l is NavLink => Boolean(l)),
  }
}

export async function getFooter(): Promise<Footer> {
  const footer = await getGlobal<Footer>('footer', 1)
  return footer?.columns?.length ? footer : (defaultFooter as unknown as Footer)
}
