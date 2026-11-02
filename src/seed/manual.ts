/**
 * Hand-built seed content: the homepage (Design 4 copy), pages with bespoke layouts, and
 * draft articles for editors to review. Images are referenced by file name in public/assets/img.
 */
import { doc, h, p, ul } from './lexical'

const url = (href: string, label?: string, style?: string) => ({ type: 'custom', url: href, ...(label ? { label } : {}), ...(style ? { style } : {}) })

export const homepage = {
  hero: {
    kicker: 'SAID Technologies Pvt. Ltd.',
    headingLine: 'Creating Possibilities.',
    headingEmphasis: 'Delivering Solutions.',
    lead: 'Bring your people, systems and ideas together through technology designed around your needs.',
    columnOne:
      'SAID Technologies Pvt. Ltd. connects enterprise technology requirements with practical solution planning across IT infrastructure, cloud, managed services, data, artificial intelligence and digital learning environments.',
    columnTwo:
      'Whether you are strengthening business operations or developing the next generation of learning facilities, the starting point is the same: a clear understanding of what you want to achieve.',
    primary: url('/what-we-do', 'Explore Our Solutions'),
    secondary: url('/education', 'Explore Education Solutions'),
    asideText: 'Have a requirement in mind?',
    asideLink: url('/contact#enquiry-form', 'Discuss Your Requirement'),
    hubImage: 'hub-core.jpg',
    hubNodes: [
      { label: 'Infrastructure', icon: 'infrastructure', group: 'ent' },
      { label: 'Cloud', icon: 'cloud', group: 'ent' },
      { label: 'Managed Services', icon: 'managed', group: 'ent' },
      { label: 'Data & AI', icon: 'data', group: 'ent' },
      { label: 'Cybersecurity', icon: 'security', group: 'ent' },
      { label: 'Smart Classrooms', icon: 'classroom', group: 'edu' },
      { label: 'Robotics & AI Labs', icon: 'robotics', group: 'edu' },
      { label: 'Centres of Excellence', icon: 'excellence', group: 'edu' },
    ],
    legendEnterprise: 'Enterprise technology',
    legendEducation: 'Education solutions',
  },
  ticker: {
    items: [
      'Infrastructure Solutions',
      'Cloud Solutions',
      'Managed Services',
      'Staffing Solutions',
      'Annual Maintenance Contract',
      'Data & AI',
      'Cybersecurity',
      'Google Workspace',
      'Managed Print Services',
      'ERP & Business Applications',
      'Smart Classrooms',
      'Robotics & AI Labs',
      'Centres of Excellence',
      'Smart E-Libraries',
    ].map((text) => ({ text })),
  },
  about: {
    kicker: 'About SAID Technologies',
    heading: 'Connecting Business, Technology and Learning',
    lead: 'Technology creates value when it helps people work better, make informed decisions and develop new capabilities.',
    body: 'SAID Technologies brings enterprise IT and educational technology into a connected portfolio. Our approach begins with understanding your environment, identifying priorities and defining a practical scope for implementation, integration, training and ongoing support.',
    quote: 'Services, Automation & Integrations Delivered',
    quoteCaption: 'SAID Technologies Pvt. Ltd.',
    image: 'about-team.jpg',
    insetImage: 'card-meeting.jpg',
    link: url('/who-we-are', 'Know More About SAID'),
  },
  services: { kicker: 'What We Do', heading: 'Explore Our Technology Solutions', link: url('/what-we-do', 'View All Solutions') },
  industries: {
    kicker: 'Industries',
    heading: 'Technology Across Industries',
    intro: 'Different industries depend on technology in different ways. Explore solution priorities for:',
    link: url('/industries', 'Explore Industries'),
  },
  education: {
    kicker: 'Education',
    heading: 'Education That Connects Knowledge With Practice',
    lead: 'Create learning environments where students can explore, experiment and apply their knowledge.',
    body: 'Discover Smart Classrooms, Robotics & AI Labs, Centres of Excellence, Smart E-Libraries, and online learning and examination platforms for schools, colleges and universities.',
    link: url('/education', 'Discover Education Solutions'),
  },
  approach: {
    kicker: 'Our Approach',
    heading: 'From Requirement to Implementation',
    link: url('/contact#enquiry-form', 'Discuss Your Project'),
    steps: [
      { title: 'Understand', text: 'Identify users, existing infrastructure, operational challenges and intended outcomes.', icon: 'search' },
      { title: 'Plan', text: 'Define the technical scope, equipment, integrations, responsibilities and commercial requirements.', icon: 'plan' },
      { title: 'Enable', text: 'Prepare for deployment, user orientation, documentation and agreed support arrangements.', icon: 'rocket' },
    ],
  },
  insights: {
    enabled: true,
    kicker: 'Insights',
    heading: 'Perspectives for better technology decisions.',
    link: url('/insights', 'Go to Insights'),
    blogsHeading: 'Blogs',
    caseStudiesHeading: 'Case Studies',
  },
  careers: {
    kicker: 'Careers',
    heading: 'Careers at SAID',
    lead: 'Explore opportunities to contribute to enterprise technology and educational innovation through roles aligned with your experience and interests.',
    link: url('/careers', 'Explore Careers'),
    image: 'careers-team.jpg',
  },
  cta: {
    heading: 'Let’s Discuss Your Next Technology Requirement',
    text: 'Share your goals with SAID Technologies and begin developing a practical solution roadmap.',
    link: url('/contact#enquiry-form', 'Discuss Your Project'),
    image: 'cta-network.jpg',
  },
  meta: {
    title: 'SAID Technologies Pvt. Ltd. | Creating Possibilities. Delivering Solutions.',
    description:
      'SAID Technologies connects enterprise technology requirements with practical solution planning across IT infrastructure, cloud, managed services, data, AI and digital learning.',
  },
}

/** Pages whose layouts are composed by hand rather than from the scraped structure. */
export const manualPages = [
  {
    path: '/who-we-are',
    title: 'Who We Are',
    image: 'about-team.jpg',
    hero: {
      eyebrow: 'Who We Are',
      heading: 'Connecting Business, Technology and Learning',
      lead: 'Technology should make work more effective and learning more practical.',
    },
    meta: {
      description:
        'SAID Technologies connects enterprise IT requirements with educational technology environments across infrastructure, cloud, support, data, AI and learning facilities.',
    },
    layout: [
      {
        blockType: 'mediaText',
        eyebrow: 'About SAID Technologies',
        heading: 'SAID Technologies Pvt. Ltd.',
        body: [
          'SAID Technologies’ business positioning connects enterprise IT requirements with educational technology environments. The proposed portfolio covers infrastructure, cloud, operational support, data, AI and technology-enabled learning facilities.',
          'Our approach starts with understanding the requirement, defining the scope and establishing the responsibilities needed to implement and operate the solution.',
        ].join('\n\n'),
        quote: 'Services, Automation & Integrations Delivered',
        quoteCaption: 'SAID Technologies Pvt. Ltd.',
        image: 'card-presentation.jpg',
        insetImage: 'card-meeting.jpg',
        anchor: 'about',
      },
      {
        blockType: 'cardGrid',
        eyebrow: 'Vision & Mission',
        heading: 'What We Work Towards',
        source: 'manual',
        style: 'cards',
        anchor: 'vision',
        cards: [
          {
            label: 'Our Vision',
            title: 'Meaningful progress through technology',
            icon: 'star',
            text: 'To empower organisations and educational institutions to transform technology into meaningful progress, enriching lives, nurturing future-ready talent, and advancing India’s journey towards Viksit Bharat.',
          },
          {
            label: 'Our Mission',
            title: 'Reliable solutions, lasting partnerships',
            icon: 'rocket',
            text: 'To deliver reliable, innovative technology solutions that ensure customer satisfaction, empower organisations and educational institutions, and build lasting partnerships through quality, trust, responsive support, and contributing to a digitally empowered India.',
          },
        ],
      },
      {
        blockType: 'cardGrid',
        eyebrow: 'What Guides Us',
        heading: 'Our Core Values',
        source: 'manual',
        style: 'cards',
        anchor: 'values',
        cards: [
          { title: 'Clarity', icon: 'search', text: 'Make requirements, commitments, costs and responsibilities understandable.' },
          { title: 'Integrity', icon: 'security', text: 'Represent capabilities accurately and communicate openly throughout an engagement.' },
          { title: 'Collaboration', icon: 'staffing', text: 'Work with customers, educators, users and technical stakeholders to define useful solutions.' },
          { title: 'Practical Innovation', icon: 'robotics', text: 'Explore technology through its relevance to real requirements and measurable project objectives.' },
          { title: 'Learning', icon: 'school', text: 'Support the knowledge and confidence people need to work with technology.' },
          { title: 'Accountability', icon: 'check', text: 'Define ownership, document agreed responsibilities and maintain visibility of progress.' },
        ],
      },
      {
        blockType: 'process',
        eyebrow: 'How We Work',
        heading: 'Our Approach',
        anchor: 'approach',
        steps: [
          { title: 'Understand the Need', text: 'Review the environment, intended users and expected outcomes.', icon: 'search' },
          { title: 'Define the Solution', text: 'Agree the technical scope, dependencies, implementation boundaries and commercial basis.', icon: 'plan' },
          { title: 'Prepare for Use', text: 'Include training, documentation and operational responsibilities in the project plan.', icon: 'school' },
          { title: 'Plan Ongoing Support', text: 'Clarify maintenance, renewals, escalation and future requirements.', icon: 'managed' },
        ],
      },
      {
        blockType: 'cardGrid',
        eyebrow: 'Explore Our Capabilities',
        heading: 'Enterprise Technology and Education Solutions',
        source: 'manual',
        style: 'cards',
        anchor: 'capabilities',
        cards: [
          {
            label: 'What We Do',
            title: 'Technology Solutions Built Around Your Priorities',
            text: 'Infrastructure, cloud, managed services, staffing, maintenance, data and AI, cybersecurity and business applications.',
            image: 'svc-01-infrastructure.jpg',
            link: url('/what-we-do', 'Explore Our Solutions'),
          },
          {
            label: 'Education',
            title: 'Technology That Creates Space for Discovery',
            text: 'Classroom technology, practical laboratories, Centres of Excellence, digital learning platforms and online examinations.',
            image: 'edu-school.jpg',
            link: url('/education', 'Explore Education Solutions'),
          },
        ],
      },
      {
        blockType: 'cta',
        heading: 'Let’s Build the Next Step Together',
        text: 'Discuss your business, institutional or educational technology requirements with SAID Technologies.',
        link: url('/contact#enquiry-form', 'Connect With SAID'),
      },
    ],
  },
  {
    path: '/careers',
    title: 'Careers',
    image: 'careers-team.jpg',
    hero: {
      eyebrow: 'Careers at SAID',
      heading: 'Build Your Next Chapter With SAID Technologies',
      lead: 'Technology projects bring together people with different strengths: technical understanding, problem-solving, communication, coordination and a willingness to keep learning.',
      body: 'Explore opportunities to contribute to enterprise technology and educational innovation through roles aligned with your experience and interests.',
      actions: [
        { link: url('#openings', 'Explore Current Opportunities', 'solid') },
        { link: url('#share-profile', 'Share Your Profile', 'line') },
      ],
    },
    meta: {
      description:
        'Explore opportunities to contribute to enterprise technology and educational innovation at SAID Technologies, and share your profile for future roles.',
    },
    layout: [
      {
        blockType: 'numberedList',
        heading: 'Areas of Interest',
        intro: 'Subject to confirmed vacancies, career areas may include:',
        anchor: 'areas',
        items: [
          'Enterprise IT and infrastructure',
          'Cloud and technical operations',
          'Technical support and maintenance',
          'Education technology implementation',
          'Technical training and faculty enablement',
          'Business development and customer coordination',
          'Project delivery and operations',
        ].map((text) => ({ text })),
      },
      {
        blockType: 'content',
        eyebrow: 'Opportunities',
        heading: 'Current Openings',
        layout: 'split',
        anchor: 'openings',
        paragraphs: [
          'No current openings are published at the moment.',
          'You are welcome to share your profile for future opportunities aligned with your experience and interests.',
        ],
      },
      {
        blockType: 'enquiryForm',
        eyebrow: 'Share Your Profile',
        heading: 'Career Enquiries',
        formType: 'career',
        anchor: 'share-profile',
        roles: [
          'Enterprise IT and infrastructure',
          'Cloud and technical operations',
          'Technical support and maintenance',
          'Education technology implementation',
          'Technical training and faculty enablement',
          'Business development and customer coordination',
          'Project delivery and operations',
        ].map((label) => ({ label })),
        asideCards: [
          { title: 'Before you apply', text: 'Resumes are accepted as PDF, DOC or DOCX files up to 5 MB.' },
          {
            title: 'What to share with us',
            text: 'Your current role or qualification.\nRelevant technical or business experience.\nProjects or work samples.\nPreferred role and location.\nAvailability.',
          },
        ],
      },
    ],
  },
  {
    path: '/contact',
    title: 'Contact Us',
    hero: {
      eyebrow: 'Contact Us',
      heading: 'Let’s Discuss What You Want to Achieve',
      lead: 'Whether you are planning enterprise infrastructure, evaluating cloud requirements or developing an educational technology facility, begin with a clear conversation.',
      body: 'Share your current environment, intended users and project priorities so the requirement can be assessed.',
    },
    meta: {
      description:
        'Contact SAID Technologies about enterprise infrastructure, cloud, managed services, cybersecurity or educational technology requirements.',
    },
    layout: [
      {
        blockType: 'cardGrid',
        eyebrow: 'How Can We Help',
        heading: 'Business and Education Enquiries',
        source: 'manual',
        style: 'cards',
        cards: [
          {
            label: 'Business Enquiries',
            title: 'Enterprise technology requirements',
            icon: 'infrastructure',
            text: 'Discuss requirements across IT infrastructure and devices, cloud and collaboration, managed services, technical resources, annual maintenance, data and AI, cybersecurity and business applications.',
            link: url('/contact?type=business#enquiry-form', 'Start a business enquiry'),
          },
          {
            label: 'Education Enquiries',
            title: 'Learning environment requirements',
            icon: 'school',
            text: 'Discuss Smart Classrooms, Robotics & AI Labs, Centres of Excellence, university infrastructure, Smart E-Libraries, learning management systems, online learning and examinations, and CSR education initiatives.',
            link: url('/contact?type=education#enquiry-form', 'Start an education enquiry'),
          },
        ],
      },
      {
        blockType: 'enquiryForm',
        heading: 'Tell Us About Your Requirement',
        intro:
          'For a productive first discussion, share the project location, intended users, existing infrastructure, expected timeline and any available requirement document.',
        formType: 'enquiry',
        anchor: 'enquiry-form',
        asideCards: [
          {
            title: 'Corporate Contact Details',
            text: 'SAID Technologies Pvt. Ltd.\nOffice address, email and telephone details will be published here once confirmed.',
          },
          { title: 'Careers', text: 'For employment-related enquiries, visit our Careers page.', link: url('/careers', 'Go to Careers') },
        ],
      },
    ],
  },
]

/**
 * Starter blog articles, published by the seed so the homepage Insights section shows.
 * Editors can revise or replace them in the CMS.
 */
export const blogPosts = [
  {
    title: 'Planning a Smart Classroom: Questions to Answer Before You Buy',
    slug: 'planning-a-smart-classroom',
    type: 'blog',
    category: 'Education',
    image: 'card-meeting.jpg', // same photos as the Design 4 Insights cards
    readingTime: 5,
    excerpt:
      'Interactive displays are only one part of a smart classroom. Start with learning objectives, teacher readiness and the support model, then choose the equipment.',
    content: doc(
      p('A smart classroom succeeds when teachers use it every day. That depends less on the display itself and more on the decisions made before anything is purchased.'),
      h('Start with how lessons will change'),
      p('Write down what teachers want to do differently: show simulations, collect student responses, share work from tablets or record lessons. These goals decide which features matter.'),
      h('Check the room before the equipment'),
      ul([
        'Power points, cabling routes and network coverage at the teaching wall',
        'Light from windows that may wash out the screen',
        'Sight lines from the back row and seating layout',
        'Secure mounting and safe cable management',
      ]),
      h('Plan for teachers, not just installation'),
      p('Budget time for hands-on orientation, simple lesson templates and a named contact for questions in the first term. Adoption usually rises when teachers see colleagues using the room well.'),
      h('Agree the support model'),
      p('Decide who handles faults, software updates, content licences and replacement parts, and how quickly. A clear support arrangement protects the investment long after handover.'),
    ),
  },
  {
    title: 'Cloud Migration Without Surprises: Building a Realistic Plan',
    slug: 'cloud-migration-without-surprises',
    type: 'blog',
    category: 'Cloud',
    image: 'card-presentation.jpg',
    readingTime: 6,
    excerpt:
      'Most migration problems come from unknown dependencies and unclear ownership. A short discovery phase prevents both.',
    content: doc(
      p('Moving applications to the cloud is rarely a single step. A realistic plan treats migration as a sequence of small, reversible moves.'),
      h('Discover before you design'),
      p('List every application, who uses it, what it connects to and where its data lives. Dependencies such as shared databases, licence servers or file shares are the most common cause of delays.'),
      h('Group workloads into waves'),
      ul([
        'Start with low-risk systems to prove the process',
        'Move tightly connected applications together',
        'Schedule business-critical systems around quiet periods',
      ]),
      h('Define operating responsibilities early'),
      p('Agree who will monitor the environment, manage backups, apply patches and review costs after go-live. Cloud platforms change how operations work, so these roles should be settled before the first workload moves.'),
      h('Keep a rollback path'),
      p('For each wave, document how to return to the previous state if acceptance tests fail. Knowing you can step back makes it easier to move forward with confidence.'),
    ),
  },
  {
    title: 'What a Good Annual Maintenance Contract Should Cover',
    slug: 'what-a-good-amc-should-cover',
    type: 'blog',
    category: 'Managed Services',
    image: 'card-auditorium.jpg',
    readingTime: 4,
    excerpt: 'An AMC is only as useful as its scope. Use this checklist to compare contracts on what actually happens when something fails.',
    content: doc(
      p('Annual maintenance contracts are often compared on price alone. The more useful comparison is what each contract commits to when equipment fails.'),
      h('Asset coverage'),
      p('Insist on a clear asset register: make, model, serial number and location for every covered item. Anything not listed is usually not covered.'),
      h('Response and resolution'),
      ul([
        'Response time by priority and location',
        'Whether spare parts are included or charged separately',
        'Standby equipment for critical devices',
        'Escalation contacts and hours of support',
      ]),
      h('Preventive maintenance'),
      p('Ask how often preventive visits happen, what is checked and how findings are reported. Regular inspection reduces unplanned downtime.'),
      h('Reporting and review'),
      p('A quarterly review of tickets, recurring faults and ageing assets turns the AMC into a planning tool for future refresh decisions.'),
    ),
  },
]
