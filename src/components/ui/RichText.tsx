import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  type JSXConvertersFunction,
  LinkJSXConverter,
  RichText as LexicalRichText,
} from '@payloadcms/richtext-lexical/react'
import type { DefaultNodeTypes, SerializedLinkNode } from '@payloadcms/richtext-lexical'
import { docPath, type RoutableDoc } from '@/lib/urls'

/** Internal links in rich text resolve to the linked document's current URL. */
const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const doc = linkNode.fields.doc
  if (!doc || typeof doc.value !== 'object') return '#'
  return docPath(doc.relationTo, doc.value as RoutableDoc)
}

const converters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
})

export function RichText({ data, className = 'e-prose' }: { data?: SerializedEditorState | null; className?: string }) {
  if (!data) return null
  return <LexicalRichText data={data} converters={converters} className={className} disableContainer={false} />
}
