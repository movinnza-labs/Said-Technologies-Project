import type { Page } from '@/payload-types'

export type LayoutBlock = NonNullable<Page['layout']>[number]
export type BlockOf<T extends LayoutBlock['blockType']> = Extract<LayoutBlock, { blockType: T }>

/** Background of a light section: white (with hairlines) or the paper page colour. */
export type Tone = 'white' | 'paper'

/** Section class for a tone. */
export const toneClass = (tone: Tone = 'paper') => (tone === 'white' ? 'e-section e-section--alt' : 'e-section')

/** The document a block sits on, so blocks can list its sub-pages. */
export type BlockContext = {
  collection: 'pages' | 'services' | 'industries' | 'education'
  id: number
}
