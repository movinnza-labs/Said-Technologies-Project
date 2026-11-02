import { getCaseStudies, getPosts } from '@/lib/data'
import { resolveLink } from '@/lib/links'
import { toImage } from '@/lib/media'
import { CtaBand } from '../home/CtaBand'
import { CaseCard, PostCard } from '../home/PostCards'
import { Steps } from '../home/Steps'
import { ArrowButton, TextLink } from '../ui/Links'
import { SectionHead } from '../ui/SectionHead'
import { toneClass, type BlockOf, type Tone } from './types'
import './Blocks.css'

export function ProcessSection({ block }: { block: BlockOf<'process'> }) {
  const link = resolveLink(block.link)
  return (
    <section className="e-section e-process on-dark" id={block.anchor || undefined}>
      <div className="container">
        <SectionHead
          kicker={block.eyebrow}
          heading={block.heading}
          intro={[block.intro]}
          aside={
            link ? (
              <ArrowButton href={link.href} variant="line" icon={false}>
                {link.label}
              </ArrowButton>
            ) : null
          }
        />
        <Steps steps={block.steps ?? []} />
      </div>
    </section>
  )
}

export function CtaSection({ block }: { block: BlockOf<'cta'> }) {
  return (
    <CtaBand
      id={`cta-${block.id ?? 'block'}`}
      heading={block.heading}
      text={block.text}
      link={resolveLink(block.link)}
      image={toImage(block.image, '/assets/img/cta-network.jpg')}
    />
  )
}

export async function InsightsFeedSection({ block, tone }: { block: BlockOf<'insightsFeed'>; tone?: Tone }) {
  const limit = block.limit ?? 12
  const isCases = block.feed === 'case-study'
  const [posts, cases] = await Promise.all([
    isCases ? Promise.resolve([]) : getPosts((block.feed as 'blog' | 'news' | 'event' | null) ?? 'blog', limit),
    isCases ? getCaseStudies(limit) : Promise.resolve([]),
  ])
  const empty = isCases ? !cases.length : !posts.length

  return (
    <section className={toneClass(tone)} id={block.anchor || undefined}>
      <div className="container">
        <SectionHead kicker={block.eyebrow} heading={block.heading} intro={[block.intro]} />
        {empty ? (
          <div className="e-empty reveal">
            <p>{block.emptyText}</p>
            <TextLink href="/what-we-do">Explore our solutions</TextLink>
          </div>
        ) : isCases ? (
          <ul className="e-cases">
            {cases.map((c) => (
              <CaseCard key={c.id} item={c} />
            ))}
          </ul>
        ) : (
          <ul className="e-posts-grid">
            {posts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
