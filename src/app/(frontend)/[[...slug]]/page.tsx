import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { Homepage, Page } from '@/payload-types'
import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import type { LayoutBlock } from '@/components/blocks/types'
import { HomePage } from '@/components/home/HomePage'
import { PageHero } from '@/components/inner/PageHero'
import { JsonLd } from '@/components/ui/JsonLd'
import { getGlobal, getNestedDoc } from '@/lib/data'
import { breadcrumbSchema, type Crumb } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { docPath } from '@/lib/urls'

type Props = { params: Promise<{ slug?: string[] }> }

// Rendered on first request, then cached; content changes revalidate through Payload hooks.
export const revalidate = 3600
export const dynamicParams = true
export const generateStaticParams = async () => []

const getPage = async (slug: string[]) => (await getNestedDoc('pages', slug)) as Page | null

const pageCrumbs = (page: Page): Crumb[] => [
  { label: 'Home', href: '/' },
  ...(page.breadcrumbs ?? []).map((b) => ({ label: b.label ?? '', href: b.url ?? null })),
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slug?.length) {
    const home = await getGlobal<Homepage>('homepage')
    return buildMetadata({
      title: home?.meta?.title || 'SAID Technologies Pvt. Ltd. | Creating Possibilities. Delivering Solutions.',
      description: home?.meta?.description || home?.hero?.columnOne,
      path: '/',
      meta: home?.meta,
      absoluteTitle: true,
    })
  }
  const page = await getPage(slug)
  if (!page) return {}
  return buildMetadata({
    title: page.title,
    description: page.hero?.lead,
    path: docPath('pages', page),
    meta: page.meta,
    image: page.hero?.image,
  })
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params

  if (!slug?.length) {
    const home = await getGlobal<Homepage>('homepage', 2)
    if (!home?.hero?.headingLine) notFound()
    return <HomePage data={home} />
  }

  const page = await getPage(slug)
  if (!page) notFound()
  const crumbs = pageCrumbs(page)

  return (
    <>
      <PageHero title={page.title} hero={page.hero} crumbs={crumbs} />
      <RenderBlocks blocks={page.layout as LayoutBlock[]} ctx={{ collection: 'pages', id: page.id }} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  )
}
