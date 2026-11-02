/** Minimal builders for Lexical rich-text JSON used by the seed. */

const text = (value: string, format = 0) => ({ type: 'text', text: value, format, detail: 0, mode: 'normal', style: '', version: 1 })

const block = (type: string, children: object[], extra: object = {}) => ({
  type,
  children,
  direction: 'ltr',
  format: '',
  indent: 0,
  version: 1,
  ...extra,
})

export const p = (value: string) => block('paragraph', [text(value)], { textFormat: 0 })
export const h = (value: string, tag: 'h2' | 'h3' = 'h2') => block('heading', [text(value)], { tag })
export const ul = (items: string[]) =>
  block(
    'list',
    items.map((item, i) => block('listitem', [text(item)], { value: i + 1 })),
    { listType: 'bullet', tag: 'ul', start: 1 },
  )

export const doc = (...nodes: object[]) => ({ root: block('root', nodes) })

/** Paragraph strings → rich text. */
export const paragraphs = (items: string[]) => doc(...items.map(p))
