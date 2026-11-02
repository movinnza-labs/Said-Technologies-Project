import Image from 'next/image'
import Link from 'next/link'
import type { SiteSetting } from '@/payload-types'
import { resolveLink } from '@/lib/links'
import { getFooter } from '@/lib/navigation'
import { SmartLink } from '../ui/Links'
import './Footer.css'

export async function SiteFooter({ settings }: { settings: SiteSetting | null }) {
  const footer = await getFooter()
  const year = new Date().getFullYear()
  const contact = settings?.contact

  return (
    <footer className="e-footer on-dark">
      <div className="container">
        <div className="e-foot-top">
          <div className="e-foot-brand">
            <Link className="logo" href="/">
              <Image className="logo-img" src="/assets/img/said-logo-white.png" width={482} height={183} alt="SAID Technologies Pvt. Ltd." />
            </Link>
            <p className="e-foot-tag">
              <span>{footer.kicker}</span>
              <em>{footer.tagline}</em>
            </p>
            {footer.about && <p className="e-foot-about">{footer.about}</p>}
            {(contact?.email || contact?.phone) && (
              <p className="e-foot-contact">
                {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
                {contact.phone && <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>}
              </p>
            )}
          </div>

          <div className="e-foot-cols">
            {footer.columns?.map((col) => (
              <div className="e-foot-col" key={col.id ?? col.title}>
                <h2>{col.title}</h2>
                <ul>
                  {col.links?.map((item, i) => {
                    const link = resolveLink(item.link)
                    if (!link) return null
                    return (
                      <li key={item.id ?? i}>
                        <SmartLink href={link.href} newTab={link.newTab}>
                          {link.label}
                        </SmartLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="e-foot-bottom">
          <p>{(footer.copyright || '').replace('{year}', String(year))}</p>
          <ul>
            {footer.legalLinks?.map((item, i) => {
              const link = resolveLink(item.link)
              return link ? (
                <li key={item.id ?? i}>
                  <SmartLink href={link.href}>{link.label}</SmartLink>
                </li>
              ) : null
            })}
          </ul>
        </div>
        {footer.credit?.name && (
          <p className="e-foot-credit">
            {footer.credit.prefix}{' '}
            {footer.credit.url ? (
              <a href={footer.credit.url} target="_blank" rel="noopener">
                <strong>{footer.credit.name}</strong>
              </a>
            ) : (
              <strong>{footer.credit.name}</strong>
            )}
          </p>
        )}
      </div>
    </footer>
  )
}
