import Link from 'next/link'
import type { Media } from '@/payload-types'
import { getSolutionList, parentId, type SolutionCollection, type SolutionDoc } from '@/lib/data'
import { toImage } from '@/lib/media'
import { breadcrumbSchema, serviceSchema, type Crumb } from '@/lib/schema'
import { docPath } from '@/lib/urls'
import { countLight, RenderBlocks, toneAt } from '../blocks/RenderBlocks'
import { toneClass, type LayoutBlock, type Tone } from '../blocks/types'
import { JsonLd } from '../ui/JsonLd'
import { PageHero } from './PageHero'
import '../blocks/Blocks.css'

export const sectionInfo: Record<SolutionCollection, { label: string; href: string; fallback: string; others: string }> = {
  services: { label: 'What We Do', href: '/what-we-do', fallback: '/assets/img/card-servers.jpg', others: 'Other Solutions' },
  industries: { label: 'Industries', href: '/industries', fallback: '/assets/img/card-campus.jpg', others: 'Other Industries' },
  education: { label: 'Education', href: '/education', fallback: '/assets/img/card-lab.jpg', others: 'Other Education Areas' },
}

export const solutionCrumbs = (collection: SolutionCollection, doc: SolutionDoc): Crumb[] => {
  const info = sectionInfo[collection]
  const trail =
    'breadcrumbs' in doc && doc.breadcrumbs?.length
      ? doc.breadcrumbs.map((b) => ({ label: b.label ?? '', href: `${info.href}${b.url}` }))
      : [{ label: doc.title, href: docPath(collection, doc) }]
  return [{ label: 'Home', href: '/' }, { label: info.label, href: info.href }, ...trail]
}

/** Siblings at the same level (other industries, other education areas, other sub-services). */
async function Siblings({ collection, doc, tone }: { collection: SolutionCollection; doc: SolutionDoc; tone: Tone }) {
  const all = await getSolutionList(collection)
  const pid = parentId(doc)
  const siblings = all.filter((d) => d.id !== doc.id && parentId(d) === pid && d.showInMenu !== false)
  if (!siblings.length) return null
  return (
    <section className={`${toneClass(tone)} e-related`} aria-label={sectionInfo[collection].others}>
      <div className="container">
        <div className="e-chips-wrap e-chips-wrap--plain">
          <h2 className="e-chips-title">{sectionInfo[collection].others}</h2>
          <ul className="e-chips">
            {siblings.map((s) => (
              <li key={s.id}>
                <Link href={docPath(collection, s)}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function SolutionPage({ collection, doc }: { collection: SolutionCollection; doc: SolutionDoc }) {
  const crumbs = solutionCrumbs(collection, doc)
  const blocks = (doc.layout ?? []) as LayoutBlock[]
  const last = blocks[blocks.length - 1]
  const endsWithCta = last?.blockType === 'cta'
  const body = endsWithCta ? blocks.slice(0, -1) : blocks
  const ctx = { collection, id: doc.id }
  const path = docPath(collection, doc)
  // Sub-pages inherit their parent's photo until they get their own
  const parent = 'parent' in doc && typeof doc.parent === 'object' ? (doc.parent as SolutionDoc | null) : null
  const parentImage = toImage((parent?.hero?.image as Media) ?? null)?.src

  return (
    <>
      <PageHero title={doc.title} hero={doc.hero} crumbs={crumbs} fallbackImage={parentImage ?? sectionInfo[collection].fallback} />
      <RenderBlocks blocks={body} ctx={ctx} />
      <Siblings collection={collection} doc={doc} tone={toneAt(countLight(body))} />
      {endsWithCta && <RenderBlocks blocks={[last]} ctx={ctx} />}
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: doc.title,
            description: doc.meta?.description || doc.excerpt || doc.hero?.lead,
            path,
            category: sectionInfo[collection].label,
          }),
        ]}
      />
    </>
  )
}
