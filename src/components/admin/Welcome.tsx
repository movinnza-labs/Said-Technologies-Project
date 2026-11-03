import Link from 'next/link'
import type { Payload, TypedUser } from 'payload'

type Props = { payload: Payload; user?: TypedUser | null }

const greeting = () => {
  // India time, where the editors work
  const hour = Number(new Intl.DateTimeFormat('en-IN', { hour: 'numeric', hour12: false, timeZone: 'Asia/Kolkata' }).format(new Date()))
  return hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
}

const statusLabel: Record<string, string> = { new: 'New', 'in-progress': 'In progress', closed: 'Closed' }
const typeLabel: Record<string, string> = { business: 'Business enquiry', education: 'Education enquiry', career: 'Career profile' }
const collectionLabel: Record<string, string> = {
  pages: 'Page',
  services: 'Service',
  industries: 'Industry',
  education: 'Education',
  posts: 'Article',
}

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(
    new Date(iso),
  )

const actions = [
  { label: 'Edit homepage', href: '/admin/globals/homepage', icon: 'homepage' },
  { label: 'Write a blog post', href: '/admin/collections/posts/create', icon: 'posts' },
  { label: 'Upload images', href: '/admin/collections/media', icon: 'media' },
  { label: 'Site settings', href: '/admin/globals/site-settings', icon: 'site-settings' },
]

/** Welcome panel above the dashboard: greeting, live counts and the most common tasks. */
export async function Welcome({ payload, user }: Props) {
  const count = async (collection: Parameters<Payload['count']>[0]['collection'], where?: Parameters<Payload['count']>[0]['where']) =>
    (await payload.count({ collection, where, overrideAccess: true })).totalDocs

  const [newEnquiries, pages, services, industries, education, posts] = await Promise.all([
    count('enquiries', { status: { equals: 'new' } }),
    count('pages'),
    count('services'),
    count('industries'),
    count('education'),
    count('posts', { _status: { equals: 'published' } }),
  ])

  const name = (user as { name?: string | null } | null | undefined)?.name?.split(' ')[0]

  const enquiries = (
    await payload.find({
      collection: 'enquiries',
      sort: '-createdAt',
      limit: 5,
      depth: 0,
      overrideAccess: true,
      select: { name: true, company: true, type: true, status: true, createdAt: true },
    })
  ).docs

  // Latest edits across the page collections, newest first
  const edited = (
    await Promise.all(
      (['pages', 'services', 'industries', 'education', 'posts'] as const).map(async (collection) =>
        (
          await payload.find({ collection, sort: '-updatedAt', limit: 5, depth: 0, draft: true, overrideAccess: true, select: { title: true, updatedAt: true } })
        ).docs.map((d) => ({ collection, id: d.id, title: d.title, updatedAt: d.updatedAt })),
      ),
    )
  )
    .flat()
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5)

  const stats = [
    { value: newEnquiries, label: 'New enquiries', href: '/admin/collections/enquiries?where[status][equals]=new', highlight: newEnquiries > 0 },
    { value: services + industries + education, label: 'Solution pages', href: '/admin/collections/services' },
    { value: pages, label: 'Site pages', href: '/admin/collections/pages' },
    { value: posts, label: 'Published articles', href: '/admin/collections/posts' },
  ]

  return (
    <>
    <section className="said-welcome" aria-label="Overview">
      <div className="said-welcome__intro">
        <p className="said-welcome__kicker">SAID Technologies CMS</p>
        <h1 className="said-welcome__title">
          {greeting()}
          {name ? `, ${name}` : ''}
        </h1>
        <p className="said-welcome__text">Update pages, publish insights and follow up on enquiries from one place.</p>
        <div className="said-welcome__actions">
          <a className="said-btn said-btn--solid" href="/" target="_blank" rel="noopener noreferrer">
            View website ↗
          </a>
          {actions.map((a) => (
            <Link key={a.href} className={`said-btn said-ic said-ic--${a.icon}`} href={a.href}>
              {a.label}
            </Link>
          ))}
        </div>
      </div>
      <ul className="said-stats">
        {stats.map((s) => (
          <li key={s.label}>
            <Link className={`said-stat${s.highlight ? ' said-stat--alert' : ''}`} href={s.href}>
              <span className="said-stat__value">{s.value}</span>
              <span className="said-stat__label">{s.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <div className="said-activity">
      <section className="said-panel" aria-labelledby="said-enquiries">
        <header className="said-panel__head">
          <h2 id="said-enquiries">Latest enquiries</h2>
          <Link href="/admin/collections/enquiries">View all →</Link>
        </header>
        {enquiries.length ? (
          <ul className="said-list">
            {enquiries.map((e) => (
              <li key={e.id}>
                <Link href={`/admin/collections/enquiries/${e.id}`}>
                  <span className="said-list__main">
                    <strong>{e.name}</strong>
                    <span>
                      {[typeLabel[e.type] ?? e.type, e.company].filter(Boolean).join(' · ')}
                    </span>
                  </span>
                  <span className="said-list__meta">
                    <span className={`said-badge said-badge--${e.status ?? 'new'}`}>{statusLabel[e.status ?? 'new']}</span>
                    <time dateTime={e.createdAt}>{formatDate(e.createdAt)}</time>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="said-panel__empty">No enquiries yet. New Contact and Careers form submissions appear here.</p>
        )}
      </section>

      <section className="said-panel" aria-labelledby="said-edited">
        <header className="said-panel__head">
          <h2 id="said-edited">Recently updated</h2>
          <Link href="/admin/collections/pages">All pages →</Link>
        </header>
        <ul className="said-list">
          {edited.map((d) => (
            <li key={`${d.collection}-${d.id}`}>
              <Link href={`/admin/collections/${d.collection}/${d.id}`}>
                <span className="said-list__main">
                  <strong>{d.title}</strong>
                  <span>{collectionLabel[d.collection]}</span>
                </span>
                <span className="said-list__meta">
                  <time dateTime={d.updatedAt}>{formatDate(d.updatedAt)}</time>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  )
}
