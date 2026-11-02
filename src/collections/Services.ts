import { solutionPage } from './shared/solutionPage'

/** Enterprise solutions under /what-we-do. Sub-services set a parent (e.g. Cloud Solutions → Google Cloud). */
export const Services = solutionPage({
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  group: 'Solutions',
  nested: true,
})
