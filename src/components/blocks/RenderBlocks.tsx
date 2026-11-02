import { CtaSection, InsightsFeedSection, ProcessSection } from './BandBlocks'
import { CardGridSection } from './CardGrid'
import { EnquirySection } from './EnquirySection'
import { ContentSection, MediaTextSection, NumberedListSection } from './TextBlocks'
import type { BlockContext, LayoutBlock, Tone } from './types'

/** Dark bands and CTAs carry their own background; every other block is a light section. */
const isLight = (block: LayoutBlock) => block.blockType !== 'process' && block.blockType !== 'cta'

/**
 * Light sections alternate white / paper so neighbours never blend into one block with a doubled
 * gap. The first light section after the hero is white. `offset` continues a sequence.
 */
export const toneAt = (lightIndex: number): Tone => (lightIndex % 2 === 0 ? 'white' : 'paper')

export const countLight = (blocks: LayoutBlock[]) => blocks.filter(isLight).length

/** Renders a page's content blocks in order. */
export function RenderBlocks({ blocks, ctx, offset = 0 }: { blocks?: LayoutBlock[] | null; ctx: BlockContext; offset?: number }) {
  if (!blocks?.length) return null
  let light = offset
  return (
    <>
      {blocks.map((block, i) => {
        const key = block.id ?? `${block.blockType}-${i}`
        const tone = isLight(block) ? toneAt(light++) : 'paper'
        switch (block.blockType) {
          case 'content':
            return <ContentSection key={key} block={block} tone={tone} />
          case 'mediaText':
            return <MediaTextSection key={key} block={block} tone={tone} />
          case 'numberedList':
            return <NumberedListSection key={key} block={block} tone={tone} />
          case 'cardGrid':
            return <CardGridSection key={key} block={block} ctx={ctx} tone={tone} />
          case 'process':
            return <ProcessSection key={key} block={block} />
          case 'cta':
            return <CtaSection key={key} block={block} />
          case 'enquiryForm':
            return <EnquirySection key={key} block={block} tone={tone} />
          case 'insightsFeed':
            return <InsightsFeedSection key={key} block={block} tone={tone} />
          default:
            return null
        }
      })}
    </>
  )
}
