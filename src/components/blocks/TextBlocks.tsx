import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { resolveLink } from '@/lib/links'
import { paragraphs, toImage } from '@/lib/media'
import { About } from '../home/About'
import { Kicker } from '../ui/Kicker'
import { RichText } from '../ui/RichText'
import { SectionHead } from '../ui/SectionHead'
import { toneClass, type BlockOf, type Tone } from './types'
import './Blocks.css'

export function ContentSection({ block, tone }: { block: BlockOf<'content'>; tone?: Tone }) {
  const body = block.body as SerializedEditorState | null | undefined
  if (block.layout === 'stacked') {
    return (
      <section className={toneClass(tone)} id={block.anchor || undefined}>
        <div className="container">
          <div className="e-text-stacked reveal">
            <Kicker>{block.eyebrow}</Kicker>
            {block.heading && <h2 className="e-h2">{block.heading}</h2>}
            <RichText data={body} />
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className={toneClass(tone)} id={block.anchor || undefined}>
      <div className="container e-text-split reveal">
        <div>
          <Kicker>{block.eyebrow}</Kicker>
          {block.heading && <h2 className="e-h2">{block.heading}</h2>}
        </div>
        <RichText data={body} />
      </div>
    </section>
  )
}

export function MediaTextSection({ block, tone }: { block: BlockOf<'mediaText'>; tone?: Tone }) {
  return (
    <About
      anchor={block.anchor}
      tone={tone}
      id={`${block.anchor || block.id || 'media'}-title`}
      kicker={block.eyebrow}
      heading={block.heading}
      lead={block.lead}
      body={paragraphs(block.body)}
      quote={block.quote}
      quoteCaption={block.quoteCaption}
      image={toImage(block.image, '/assets/img/about-team.jpg')}
      inset={toImage(block.insetImage, undefined)}
      link={resolveLink(block.link)}
    />
  )
}

export function NumberedListSection({ block, tone }: { block: BlockOf<'numberedList'>; tone?: Tone }) {
  const items = block.items ?? []
  return (
    <section className={toneClass(tone)} id={block.anchor || undefined}>
      <div className="container">
        <SectionHead kicker={block.eyebrow} heading={block.heading} intro={[block.intro]} />
        <ol className={`e-numlist reveal${items.length > 6 ? ' e-numlist--3' : ''}`}>
          {items.map((item) => (
            <li key={item.id ?? item.text}>{item.text}</li>
          ))}
        </ol>
        {block.outro && <p className="e-block-outro">{block.outro}</p>}
      </div>
    </section>
  )
}
