import type { Education, Homepage, Industry, Service } from '@/payload-types'
import { getCaseStudies, getPosts, getSolutionList, topLevel, type SolutionCollection, type SolutionDoc } from '@/lib/data'
import { resolveLink, type CmsLink } from '@/lib/links'
import { paragraphs, toImage } from '@/lib/media'
import { docPath } from '@/lib/urls'
import { ArrowButton, TextLink } from '../ui/Links'
import { SectionHead } from '../ui/SectionHead'
import { About } from './About'
import { Careers } from './Careers'
import { CtaBand } from './CtaBand'
import { Hero } from './Hero'
import { CaseCard, CaseCardPreviews, PostCard } from './PostCards'
import { SolutionIndex, type SolutionRow } from './SolutionIndex'
import { Steps } from './Steps'
import { Ticker } from './Ticker'

/** Hand-picked items when the editor chose some, otherwise every top-level item in order. */
const choose = <T extends SolutionDoc>(picked: (number | T)[] | null | undefined, all: T[]): T[] => {
  const chosen = (picked ?? []).filter((p): p is T => typeof p === 'object' && p !== null)
  return chosen.length ? chosen : topLevel(all)
}

/** Ticker names that are programmes rather than pages get a more specific icon. */
const programmeIcons: Record<string, string> = {
  'smart classrooms': 'classroom',
  'robotics & ai labs': 'robotics',
  'centres of excellence': 'excellence',
  'smart e-libraries': 'library',
}

/** Cover image for a solution: its card image, else its hero image, else a bundled photo. */
const coverOf = (doc: SolutionDoc, fallback?: string) =>
  toImage(doc.cardImage, undefined, doc.title) ?? toImage(doc.hero?.image, fallback, doc.title)

const toRows = (collection: SolutionCollection, docs: SolutionDoc[]): SolutionRow[] =>
  docs.map((d) => ({
    title: d.title,
    text: d.excerpt || d.tagline,
    href: docPath(collection, d),
    icon: d.icon,
    image: coverOf(d)?.src ?? null,
  }))

type IndexSectionProps = {
  id: string
  className: string
  kicker?: string | null
  heading?: string | null
  intro?: (string | null | undefined)[]
  link?: CmsLink | null
  rows: SolutionRow[]
}

/**
 * Heading row (kicker, heading and any intro on the left; link on the right) above the numbered
 * list with sticky photo. Identical for What We Do, Industries and Education.
 */
function IndexSection({ id, className, kicker, heading, intro, link, rows }: IndexSectionProps) {
  const l = resolveLink(link)
  return (
    <section className={`e-section ${className}`} aria-labelledby={id}>
      <div className="container">
        <SectionHead
          id={id}
          kicker={kicker}
          heading={heading}
          intro={intro}
          introBelow
          aside={l ? <TextLink href={l.href}>{l.label}</TextLink> : null}
        />
        <SolutionIndex rows={rows} />
      </div>
    </section>
  )
}

export async function HomePage({ data }: { data: Homepage }) {
  const [services, industries, education, blogs, cases] = await Promise.all([
    getSolutionList('services'),
    getSolutionList('industries'),
    getSolutionList('education'),
    getPosts('blog', 3),
    getCaseStudies(3),
  ])

  const svcItems = choose(data.services?.items as (number | Service)[], services as Service[])
  const indItems = choose(data.industries?.items as (number | Industry)[], industries as Industry[]).slice(0, 10)
  const eduItems = choose(data.education?.items as (number | Education)[], education as Education[])

  const tickerNames = data.ticker?.items?.length
    ? data.ticker.items.map((i) => i.text)
    : [...topLevel(services), ...topLevel(education)].map((d) => d.title)
  // Each name gets the icon of the matching service / education page, or a programme default
  const iconByTitle = new Map([...services, ...education].map((d) => [d.title.toLowerCase(), d.icon]))
  const tickerItems = tickerNames.map((text) => {
    const key = text.toLowerCase()
    return { text, icon: programmeIcons[key] ?? iconByTitle.get(key) ?? 'check' }
  })

  const about = data.about
  const ins = data.insights
  // Shown like Design 4 unless switched off in the CMS
  const showInsights = ins?.enabled !== false
  const approachLink = resolveLink(data.approach?.link)
  const insLink = resolveLink(ins?.link)

  return (
    <>
      <Hero data={data.hero} />
      <Ticker items={tickerItems} />

      <About
        kicker={about?.kicker}
        heading={about?.heading}
        lead={about?.lead}
        body={paragraphs(about?.body)}
        quote={about?.quote}
        quoteCaption={about?.quoteCaption}
        image={toImage(about?.image, '/assets/img/about-team.jpg', 'Team collaborating on laptops around a shared table')}
        inset={toImage(about?.insetImage, '/assets/img/card-meeting.jpg', 'Colleagues celebrating progress at a meeting')}
        link={resolveLink(about?.link)}
      />

      {/* What We Do, Industries and Education share one layout; light backgrounds alternate white / tint / white */}
      <IndexSection
        id="services-title"
        className="e-section--alt"
        kicker={data.services?.kicker}
        heading={data.services?.heading}
        link={data.services?.link}
        rows={toRows('services', svcItems)}
      />

      <IndexSection
        id="industries-title"
        className="e-section--tint"
        kicker={data.industries?.kicker}
        heading={data.industries?.heading}
        intro={[data.industries?.intro]}
        link={data.industries?.link}
        rows={toRows('industries', indItems)}
      />

      <IndexSection
        id="education-title"
        className="e-section--alt"
        kicker={data.education?.kicker}
        heading={data.education?.heading}
        intro={[data.education?.lead, data.education?.body]}
        link={data.education?.link}
        rows={toRows('education', eduItems)}
      />

      {/* Approach: step cards */}
      <section className="e-section e-approach" aria-labelledby="approach-title">
        <div className="container">
          <SectionHead
            id="approach-title"
            kicker={data.approach?.kicker}
            heading={data.approach?.heading}
            aside={
              approachLink ? (
                <ArrowButton href={approachLink.href} variant="line" icon={false}>
                  {approachLink.label}
                </ArrowButton>
              ) : null
            }
          />
          <Steps steps={data.approach?.steps ?? []} variant="cards" />
        </div>
      </section>

      {showInsights && (
        <section className="e-section e-section--tint" aria-labelledby="insights-title">
          <div className="container">
            <SectionHead
              id="insights-title"
              kicker={ins?.kicker}
              heading={ins?.heading}
              aside={insLink ? <TextLink href={insLink.href}>{insLink.label}</TextLink> : null}
            />
            {blogs.length > 0 && (
              <>
                <div className="e-ins-sub">
                  <h3>{ins?.blogsHeading || 'Blogs'}</h3>
                  <TextLink href="/insights/blogs">All blogs</TextLink>
                </div>
                {/* Three equal cards with the full photo on top, matching the Case Studies row */}
                <ul className="e-posts-grid">
                  {blogs.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </ul>
              </>
            )}
            {/* As in Design 4: always present; preview cards until real case studies are published */}
            <div className="e-ins-sub">
              <h3>{ins?.caseStudiesHeading || 'Case Studies'}</h3>
              <TextLink href="/insights/case-studies">All case studies</TextLink>
            </div>
            <ul className="e-cases">
              {cases.length > 0 ? cases.map((c) => <CaseCard key={c.id} item={c} />) : <CaseCardPreviews />}
            </ul>
          </div>
        </section>
      )}

      <Careers
        kicker={data.careers?.kicker}
        heading={data.careers?.heading}
        lead={data.careers?.lead}
        link={resolveLink(data.careers?.link)}
        image={toImage(data.careers?.image, '/assets/img/careers-team.jpg', 'Colleagues reviewing code together on a laptop')}
      />

      {data.cta?.heading && (
        <CtaBand
          heading={data.cta.heading}
          text={data.cta.text}
          link={resolveLink(data.cta.link)}
          image={toImage(data.cta.image, '/assets/img/cta-network.jpg')}
        />
      )}
    </>
  )
}
