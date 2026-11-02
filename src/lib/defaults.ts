/**
 * Default navigation and footer. The seed script writes these into the CMS, and the site falls
 * back to them if the globals are empty (or the database is unreachable during a build).
 */
const url = (href: string, label?: string) => ({ type: 'custom' as const, url: href, ...(label ? { label } : {}) })

export const defaultHeader = {
  navItems: [
    {
      label: 'What We Do',
      link: url('/what-we-do'),
      menuType: 'services',
      intro: 'Technology solutions built around your priorities.',
      allLabel: 'All Solutions',
      promo: { text: 'Have a requirement in mind?', link: url('/contact?type=business#enquiry-form', 'Discuss Your Requirement') },
    },
    {
      label: 'Industries',
      link: url('/industries'),
      menuType: 'industries',
      intro: 'Technology priorities shaped by your industry.',
      allLabel: 'All Industries',
    },
    {
      label: 'Education',
      link: url('/education'),
      menuType: 'education',
      intro: 'Technology that creates space for discovery.',
      allLabel: 'Education Overview',
      promo: { text: 'Have a requirement in mind?', link: url('/contact?type=education#enquiry-form', 'Discuss Your Requirement') },
    },
    {
      label: 'Who We Are',
      link: url('/who-we-are'),
      menuType: 'list',
      intro: 'Connecting business, technology and learning.',
      allLabel: 'Go to Who We Are',
      links: [
        { label: 'About SAID Technologies', link: url('/who-we-are#about') },
        { label: 'Our Vision', link: url('/who-we-are#vision') },
        { label: 'Our Core Values', link: url('/who-we-are#values') },
        { label: 'Our Approach', link: url('/who-we-are#approach') },
        { label: 'Explore Our Capabilities', link: url('/who-we-are#capabilities') },
        { label: 'Connect With SAID', link: url('/contact#enquiry-form') },
      ],
    },
    {
      label: 'Careers',
      link: url('/careers'),
      menuType: 'list',
      intro: 'Build your next chapter with SAID Technologies.',
      allLabel: 'Go to Careers',
      links: [
        { label: 'Careers at SAID', link: url('/careers') },
        { label: 'Areas of Interest', link: url('/careers#areas') },
        { label: 'Current Openings', link: url('/careers#openings') },
        { label: 'Share Your Profile', link: url('/careers#share-profile') },
      ],
    },
    {
      label: 'Insights',
      link: url('/insights'),
      menuType: 'list',
      intro: 'Perspectives for better technology decisions.',
      allLabel: 'Go to Insights',
      links: [
        {
          label: 'Blogs',
          description: 'Original articles that explain technology concepts, planning considerations and practical applications.',
          link: url('/insights/blogs'),
        },
        {
          label: 'Case Studies',
          description: 'Approved customer stories describing the requirement, agreed solution and verified outcomes.',
          link: url('/insights/case-studies'),
        },
        {
          label: 'Events',
          description: 'Confirmed workshops, demonstrations, webinars and institutional engagements.',
          link: url('/insights/events'),
        },
        { label: 'News', description: 'Verified company announcements and developments.', link: url('/insights/news') },
      ],
    },
  ],
  cta: url('/contact', 'Contact Us'),
  drawerCta: url('/contact#enquiry-form', 'Discuss Your Requirement'),
  contactLinks: [
    { link: url('/contact?type=business#enquiry-form', 'Business Enquiries') },
    { link: url('/contact?type=education#enquiry-form', 'Education Enquiries') },
    { link: url('/contact#details', 'Corporate Contact Details') },
    { link: url('/contact#enquiry-form', 'Discuss Your Requirement') },
  ],
}

const services: [string, string][] = [
  ['Infrastructure Solutions', 'infrastructure-solutions'],
  ['Cloud Solutions', 'cloud-solutions'],
  ['Managed Services', 'managed-services'],
  ['Staffing Solutions', 'staffing-solutions'],
  ['Annual Maintenance Contract', 'annual-maintenance-contract'],
  ['Data & AI', 'data-and-ai'],
  ['Cybersecurity', 'cybersecurity'],
  ['Google Workspace', 'google-workspace'],
  ['Managed Print Services', 'managed-print-services'],
  ['ERP & Business Applications', 'erp-and-business-applications'],
]

const education: [string, string][] = [
  ['School Education', 'school-education'],
  ['Higher Education', 'higher-education'],
  ['Centre of Excellence', 'centre-of-excellence'],
  ['Digital Education Solutions', 'digital-education-solutions'],
  ['CSR Education Solutions', 'csr-education-solutions'],
]

export const defaultFooter = {
  kicker: 'SAID Technologies Pvt. Ltd.',
  tagline: 'Services, Automation & Integrations Delivered',
  about: 'Enterprise technology and educational solutions, planned around people, systems and practical requirements.',
  columns: [
    {
      title: 'Company',
      links: [
        { link: url('/who-we-are', 'Who We Are') },
        { link: url('/industries', 'Industries') },
        { link: url('/careers', 'Careers') },
        { link: url('/contact', 'Contact Us') },
      ],
    },
    {
      title: 'Enterprise Solutions',
      links: [
        { link: url('/what-we-do', 'What We Do') },
        ...services.map(([label, slug]) => ({ link: url(`/what-we-do/${slug}`, label) })),
      ],
    },
    {
      title: 'Education',
      links: [
        { link: url('/education', 'Education Overview') },
        ...education.map(([label, slug]) => ({ link: url(`/education/${slug}`, label) })),
      ],
    },
    {
      title: 'Insights',
      links: [
        { link: url('/insights', 'All Insights') },
        { link: url('/insights/blogs', 'Blogs') },
        { link: url('/insights/case-studies', 'Case Studies') },
        { link: url('/insights/events', 'Events') },
        { link: url('/insights/news', 'News') },
      ],
    },
  ],
  copyright: '© {year} SAID Technologies Pvt. Ltd. All rights reserved.',
  credit: { prefix: 'Design and Developed By', name: 'Movinnza', url: '' },
  legalLinks: [{ link: url('/privacy-policy', 'Privacy Policy') }, { link: url('/terms-of-use', 'Terms of Use') }],
}
