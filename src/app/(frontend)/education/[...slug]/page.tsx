import { notFound } from 'next/navigation'
import { SolutionPage } from '@/components/inner/SolutionPage'
import { loadSolution, solutionMetadata } from '@/lib/solutionRoute'

type Props = { params: Promise<{ slug: string[] }> }

export const revalidate = 3600
export const generateStaticParams = async () => []

export const generateMetadata = async ({ params }: Props) => solutionMetadata('education', (await params).slug)

export default async function EducationPage({ params }: Props) {
  const doc = await loadSolution('education', (await params).slug)
  if (!doc) notFound()
  return <SolutionPage collection="education" doc={doc} />
}
