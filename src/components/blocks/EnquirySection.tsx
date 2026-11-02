import { Suspense } from 'react'
import { childrenOf, getSolutionList, topLevel, type SolutionDoc } from '@/lib/data'
import { resolveLink } from '@/lib/links'
import { TextLink } from '../ui/Links'
import { SectionHead } from '../ui/SectionHead'
import { EnquiryForm, type AreaOption, type FormOptions } from './EnquiryForm'
import { toneClass, type BlockOf, type Tone } from './types'
import './Blocks.css'
import './Form.css'

const toAreas = (docs: SolutionDoc[]): AreaOption[] =>
  topLevel(docs).map((d) => ({
    label: d.title,
    value: d.slug ?? String(d.id),
    children: childrenOf(docs, d.id).map((c) => ({ label: c.title, value: c.slug ?? String(c.id) })),
  }))

export async function EnquirySection({ block, tone }: { block: BlockOf<'enquiryForm'>; tone?: Tone }) {
  const kind = block.formType === 'career' ? 'career' : 'enquiry'
  const [services, education, industries] = await Promise.all([
    getSolutionList('services'),
    getSolutionList('education'),
    getSolutionList('industries'),
  ])
  const options: FormOptions = {
    business: toAreas(services),
    education: toAreas(education),
    industries: industries.map((i) => ({ label: i.title, value: i.slug ?? String(i.id) })),
  }

  return (
    <section className={toneClass(tone)} id={block.anchor || 'enquiry-form'}>
      <div className="container">
        <SectionHead kicker={block.eyebrow} heading={block.heading} intro={[block.intro]} />
        <div className="e-form-layout">
          <div className="e-form-card">
            <Suspense fallback={null}>
              <EnquiryForm kind={kind} options={options} roles={(block.roles ?? []).map((r) => r.label)} />
            </Suspense>
          </div>
          {block.asideCards?.length ? (
            <aside className="e-form-aside">
              {block.asideCards.map((card, i) => {
                const link = resolveLink(card.link)
                return (
                  <div className="e-aside-card" key={card.id ?? i} id={i === 0 ? 'details' : undefined}>
                    <h3>{card.title}</h3>
                    {card.text && <p>{card.text}</p>}
                    {link && <TextLink href={link.href}>{link.label}</TextLink>}
                  </div>
                )
              })}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  )
}
