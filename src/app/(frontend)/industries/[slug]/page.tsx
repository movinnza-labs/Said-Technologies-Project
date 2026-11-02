import { notFound } from 'next/navigation'
import { SolutionPage } from '@/components/inner/SolutionPage'
import { loadSolution, solutionMetadata } from '@/lib/solutionRoute'

type Props = { params: Promise<{ slug: string }> }

export const revalidate = 3600
export const generateStaticParams = async () => []

export const generateMetadata = async ({ params }: Props) => solutionMetadata('industries', [(await params).slug])

export default async function IndustryPage({ params }: Props) {
  const doc = await loadSolution('industries', [(await params).slug])
  if (!doc) notFound()
  return <SolutionPage collection="industries" doc={doc} />
}
