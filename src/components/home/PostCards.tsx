import Link from 'next/link'
import type { CaseStudy, Industry, Post } from '@/payload-types'
import { toImage } from '@/lib/media'
import { docPath } from '@/lib/urls'
import { CmsImage } from '../ui/CmsImage'
import './Insights.css'

const dateFormat = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

export const formatDate = (iso?: string | null) => (iso ? dateFormat.format(new Date(iso)) : null)

const postTypeLabel: Record<string, string> = { blog: 'Blog', news: 'News', event: 'Event' }

export function PostCard({ post }: { post: Post }) {
  const href = docPath('posts', post)
  const meta = [
    formatDate(post.type === 'event' ? post.eventDate : post.publishedAt),
    post.type === 'event' ? post.eventLocation : post.readingTime ? `${post.readingTime} min read` : null,
  ].filter(Boolean)

  return (
    <li className="e-post reveal">
      <figure className="e-post-photo">
        <CmsImage
          image={toImage(post.heroImage, '/assets/img/card-meeting.jpg')}
          decorative
          sizes="(min-width: 80rem) 420px, (min-width: 48rem) 32vw, 100vw"
        />
      </figure>
      <div className="e-post-body">
        <span className="e-tag">{post.category || postTypeLabel[post.type] || 'Insight'}</span>
        <h3 className="e-post-title">
          <Link className="e-stretch" href={href}>
            {post.title}
          </Link>
        </h3>
        <p className="e-post-excerpt">{post.excerpt}</p>
        {meta.length > 0 && <p className="e-post-meta">{meta.join(' · ')}</p>}
      </div>
    </li>
  )
}

/**
 * Design 4's layout-preview cards, shown until the first real case study is published.
 * Not linked, so they can't be mistaken for actual client stories.
 */
const previewCases = ['/assets/img/card-lab.jpg', '/assets/img/card-servers.jpg', '/assets/img/card-campus.jpg']

export function CaseCardPreviews() {
  return (
    <>
      {previewCases.map((src) => (
        <li className="e-case reveal" key={src}>
          <figure className="e-case-photo wipe">
            <CmsImage image={{ src, alt: '' }} decorative sizes="(min-width: 48rem) 30vw, 100vw" />
          </figure>
          <div className="e-post-body">
            <span className="e-tag">Industry</span>
            <h3 className="e-post-title">Case study title</h3>
            <p>One-line verified outcome.</p>
            <p className="e-post-meta">Requirement · Solution · Outcome</p>
          </div>
        </li>
      ))}
    </>
  )
}

export function CaseCard({ item }: { item: CaseStudy }) {
  const industry = item.industry && typeof item.industry === 'object' ? (item.industry as Industry) : null
  return (
    <li className="e-case reveal">
      <figure className="e-case-photo wipe">
        <CmsImage image={toImage(item.heroImage, '/assets/img/card-lab.jpg')} decorative sizes="(min-width: 48rem) 30vw, 100vw" />
      </figure>
      <div className="e-post-body">
        <span className="e-tag">{industry?.title || 'Case study'}</span>
        <h3 className="e-post-title">
          <Link className="e-stretch" href={docPath('case-studies', item)}>
            {item.title}
          </Link>
        </h3>
        <p>{item.outcome}</p>
        <p className="e-post-meta">Requirement · Solution · Outcome</p>
      </div>
    </li>
  )
}
