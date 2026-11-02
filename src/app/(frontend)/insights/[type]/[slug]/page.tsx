import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { CaseStudy, Industry, Post } from '@/payload-types'
import { CtaBand } from '@/components/home/CtaBand'
import { CaseCard, formatDate, PostCard } from '@/components/home/PostCards'
import { Breadcrumbs } from '@/components/inner/PageHero'
import { CmsImage } from '@/components/ui/CmsImage'
import { JsonLd } from '@/components/ui/JsonLd'
import { RichText } from '@/components/ui/RichText'
import { SectionHead } from '@/components/ui/SectionHead'
import { getCaseStudies, getCaseStudy, getPost, getPosts } from '@/lib/data'
import { ogImageUrl, toImage } from '@/lib/media'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { docPath } from '@/lib/urls'
import '@/components/blocks/Blocks.css'
import '@/components/inner/Article.css'

type Props = { params: Promise<{ type: string; slug: string }> }

export const revalidate = 3600
export const generateStaticParams = async () => []

const postTypes: Record<string, { type: Post['type']; label: string }> = {
  blogs: { type: 'blog', label: 'Blogs' },
  news: { type: 'news', label: 'News' },
  events: { type: 'event', label: 'Events' },
}

type Loaded = { kind: 'post'; doc: Post; label: string } | { kind: 'case'; doc: CaseStudy; label: string } | null

async function load(type: string, slug: string): Promise<Loaded> {
  if (type === 'case-studies') {
    const doc = await getCaseStudy(slug)
    return doc ? { kind: 'case', doc, label: 'Case Studies' } : null
  }
  const pt = postTypes[type]
  if (!pt) return null
  const doc = await getPost(pt.type, slug)
  return doc ? { kind: 'post', doc, label: pt.label } : null
}

/** Rough reading time from the rich text JSON when the editor left it empty. */
const readingTime = (content: unknown) => {
  const words = JSON.stringify(content ?? '').match(/"text":"([^"]*)"/g)?.join(' ').split(/\s+/).length ?? 0
  return Math.max(1, Math.round(words / 220))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params
  const item = await load(type, slug)
  if (!item) return {}
  const doc = item.doc
  return buildMetadata({
    title: doc.title,
    description: item.kind === 'post' ? item.doc.excerpt : item.doc.outcome,
    path: item.kind === 'post' ? docPath('posts', item.doc) : docPath('case-studies', item.doc),
    meta: doc.meta,
    image: doc.heroImage,
    type: 'article',
    publishedTime: doc.publishedAt,
  })
}

export default async function InsightPage({ params }: Props) {
  const { type, slug } = await params
  const item = await load(type, slug)
  if (!item) notFound()

  const { doc } = item
  const path = item.kind === 'post' ? docPath('posts', item.doc) : docPath('case-studies', item.doc)
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: item.label, href: `/insights/${type}` },
    { label: doc.title, href: path },
  ]
  const cover = toImage(doc.heroImage, undefined, doc.title)

  let tag: string
  let lead: string | null | undefined
  let meta: (string | null | undefined)[]
  if (item.kind === 'post') {
    const p = item.doc
    tag = p.category || item.label.replace(/s$/, '')
    lead = p.excerpt
    meta =
      p.type === 'event'
        ? [formatDate(p.eventDate), p.eventLocation]
        : [formatDate(p.publishedAt), `${p.readingTime || readingTime(p.content)} min read`, p.author]
  } else {
    const c = item.doc
    tag = (typeof c.industry === 'object' && (c.industry as Industry)?.title) || 'Case Study'
    lead = c.outcome
    meta = [formatDate(c.publishedAt), c.client]
  }

  const related =
    item.kind === 'post'
      ? (await getPosts(item.doc.type, 4)).filter((p) => p.id !== doc.id).slice(0, 3)
      : (await getCaseStudies(4)).filter((c) => c.id !== doc.id).slice(0, 3)

  return (
    <>
      <article>
        <header className="e-article-head">
          <div className="container">
            <Breadcrumbs crumbs={crumbs} />
            <span className="e-tag">{tag}</span>
            <h1 className="e-article-title">{doc.title}</h1>
            {lead && <p className="e-lead">{lead}</p>}
            <p className="e-article-meta">
              {meta.filter(Boolean).map((m) => (
                <span key={m}>{m}</span>
              ))}
            </p>
          </div>
        </header>

        {cover && (
          <div className="container">
            <figure className="e-article-cover">
              <CmsImage image={cover} priority sizes="(min-width: 80rem) 1280px, 100vw" />
            </figure>
          </div>
        )}

        <div className="e-article-body">
          <div className="container">
            {item.kind === 'post' ? (
              <RichText data={item.doc.content as SerializedEditorState} />
            ) : (
              <div className="e-story">
                {(
                  [
                    ['Requirement', item.doc.requirement],
                    ['Solution', item.doc.solution],
                    ['Outcome', item.doc.results],
                  ] as const
                ).map(([label, content]) =>
                  content ? (
                    <section className="e-story-part" key={label}>
                      <h2>{label}</h2>
                      <RichText data={content as SerializedEditorState} />
                    </section>
                  ) : null,
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="e-section e-insights">
          <div className="container">
            <SectionHead kicker="Insights" heading={item.kind === 'post' ? 'More to read' : 'More case studies'} />
            {item.kind === 'post' ? (
              <ul className="e-posts-grid">
                {(related as Post[]).map((p) => (
                  <PostCard key={p.id} post={p} />
                ))}
              </ul>
            ) : (
              <ul className="e-cases">
                {(related as CaseStudy[]).map((c) => (
                  <CaseCard key={c.id} item={c} />
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      <CtaBand
        heading="Let’s Discuss Your Next Technology Requirement"
        text="Share your goals with SAID Technologies and begin developing a practical solution roadmap."
        link={{ href: '/contact#enquiry-form', label: 'Discuss Your Project', newTab: false, style: 'gold' }}
      />

      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          articleSchema({
            headline: doc.title,
            description: lead,
            path,
            image: ogImageUrl(doc.heroImage),
            datePublished: doc.publishedAt,
            dateModified: doc.updatedAt,
            author: item.kind === 'post' ? item.doc.author : null,
          }),
        ]}
      />
    </>
  )
}
