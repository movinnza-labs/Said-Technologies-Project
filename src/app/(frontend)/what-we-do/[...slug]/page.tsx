import { notFound } from 'next/navigation'
import { SolutionPage } from '@/components/inner/SolutionPage'
import { loadSolution, solutionMetadata } from '@/lib/solutionRoute'

type Props = { params: Promise<{ slug: string[] }> }

export const revalidate = 3600
export const generateStaticParams = async () => []

export const generateMetadata = async ({ params }: Props) => solutionMetadata('services', (await params).slug)

export default async function ServicePage({ params }: Props) {
  const doc = await loadSolution('services', (await params).slug)
  if (!doc) notFound()
  return <SolutionPage collection="services" doc={doc} />
}
