import { solutionPage } from './shared/solutionPage'

/** Education areas under /education. Programmes set a parent (e.g. School Education → Smart Classrooms). */
export const Education = solutionPage({
  slug: 'education',
  labels: { singular: 'Education area', plural: 'Education' },
  group: 'Solutions',
  nested: true,
})
