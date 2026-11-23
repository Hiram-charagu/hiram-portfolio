export type SkillLevel = 'Project use' | 'Learning';
export type ProjectStatus = 'Contract' | 'MVP' | 'In progress' | 'Concept' | 'Project';

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface CaseStudy {
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  disclosure?: string;
}

export interface FeaturedProject {
  number: string;
  name: string;
  kind: string;
  title: string;
  description: string;
  details: string[];
  tags: Skill[];
  theme: 'mapphex' | 'bumu' | 'fundi';
  status: ProjectStatus;
  statusLabel: string;
  caseStudy: CaseStudy;
  demoUrl?: string;
  repoUrl?: string;
  screenshot?: string;
}

export const content = {
  profile: {
    name: 'Hiram Ngatia Charagu',
    role: 'Full-Stack Systems & UI Engineer',
    email: 'hiramcharagu@gmail.com',
    whatsappUrl: 'https://wa.me/254759694291',
    github: 'https://github.com/Hiram-charagu',
    linkedin: 'https://www.linkedin.com/in/hiram-ngatia-45937636b',
    resume: '/assets/Hiram_Charagu_Software_Developer_Resume.pdf',
    siteUrl: 'https://hiram-portfolio-ten.vercel.app',
  },
  navigation: [
    ['Work', '#work'], ['About', '#about'], ['Education', '#education'],
    ['Skills', '#skills'], ['Journey', '#journey'], ['Credentials', '#credentials'], ['Contact', '#contact'],
  ] as [string, string][],
  hero: {
    eyebrow: 'WEB & MOBILE · FINTECH · WEB3',
    lines: ['Interfaces for', 'the work behind', 'everyday life'],
    intro: 'I’m Hiram, a Computer Science student building web and mobile products, fintech integrations, and tools for the way African businesses work.',
    proof: 'BSc Computer Science · Fintech contract · TechHub chair & Blockchain/Web3 instructor',
    cta: 'Explore my work',
    resumeLabel: 'View résumé (PDF)',
    visual: {
      figure: 'FIG. 01', caption: 'IDEAS, CONNECTED',
      orbitLabel: 'THINK IN SYSTEMS', buildLabel: 'BUILD WITH INTENTION',
      footer: 'SOFTWARE / PEOPLE / PLACE',
    },
  },
  sections: {
    work: {
      eyebrow: 'SELECTED WORK', title: 'Products with', accent: 'a job to do.',
      note: 'Payment operations, tenant-aware tools, and local services. Each project starts with a user need and the steps required to meet it.',
      otherEyebrow: 'MORE PROJECTS', otherTitle: 'Across a few', otherAccent: 'different fields.',
      otherNote: 'Early products and explorations in commerce, mobility, health, property, security, and learning.',
    },
    about: {
      eyebrow: 'A BIT ABOUT ME', title: 'Curious by nature.', accent: 'A builder by habit.',
      paragraphs: [
        'I study Computer Science at Umma University and like figuring out how everyday services could work better.',
        'So far, I’ve built company websites, worked on fintech portals, and designed marketplace products. I start by understanding what each person needs to do, then shape the interface, data flow, and integrations around that task.',
        'I also teach Blockchain and Web3 development with Umma TechHub. Rugby taught me to communicate, adapt, and play for the people around me.',
      ],
      link: 'See what I’ve been part of',
      principles: ['START WITH PEOPLE', 'MAKE THE FLOW CLEAR', 'BUILD WITH CARE'],
      portraitAlt: 'Portrait of Hiram Ngatia Charagu',
    },
    education: {
      eyebrow: 'EDUCATION', title: 'Where I learned', accent: 'to keep asking.',
      note: 'Four years at Nduru Boys, followed by Computer Science studies at Umma University.',
    },
    skills: {
      eyebrow: 'THE TOOLKIT', title: 'Tools for the', accent: 'work at hand.',
      note: 'Technologies used in projects, alongside areas I’m actively learning.',
      footnote: 'Learning marks active study; project-use labels reflect work shown here.',
    },
    journey: {
      eyebrow: 'THE JOURNEY', title: 'Work, teaching,', accent: 'and teamwork.',
      note: 'Software contracts and client work alongside student leadership, teaching, innovation, and rugby.',
      footerStart: 'STILL BUILDING', footerEnd: 'NEXT CHAPTER',
    },
    credentials: {
      eyebrow: 'CERTIFICATIONS', title: 'Learning,', accent: 'put into practice.',
      note: 'Courses across cybersecurity, operating systems, networking, and infrastructure protection.',
    },
    contact: {
      eyebrow: 'CONTACT', title: 'Let’s make', accent: 'something useful.',
      note: 'Have a product idea, an opportunity, or a question about my work? Send me a note.',
      emailCta: 'Email me',
      form: {
        name: 'Your name', email: 'Email address', message: 'What would you like to discuss?', submit: 'Send message',
        submitting: 'Sending…', success: 'Thanks — your message has been sent.',
        error: 'Your message could not be sent. Please email me directly.',
        setup: 'The contact form is being set up. Please email me directly for now.',
      },
    },
  },
  education: [
    {
      name: 'Umma University', credential: 'Bachelor of Science in Computer Science',
      status: 'In progress · Expected graduation July 2028', location: 'Main Campus · Kajiado, Kenya',
      logo: '/assets/umma-university-logo.png', logoAlt: 'Umma University logo',
    },
    {
      name: 'Nduru Boys High School', credential: 'Secondary education',
      status: 'Completed · Four years', location: 'Kenya',
    },
  ],
  projects: [
    {
      number: '01', name: 'MAPPHEX', kind: 'Enterprise SaaS', title: 'Structure for complex operations.',
      description: 'A multi-tenant administrative platform for customer operations, with tenant-aware data boundaries and a modular monitoring dashboard.',
      details: ['Tenant-aware schema and role design', 'PostgreSQL row-level security policies', 'Modular customer monitoring dashboard'],
      tags: [{ name: 'PostgreSQL' }, { name: 'Row-level security' }, { name: 'SaaS' }, { name: 'Admin UI' }],
      theme: 'mapphex', status: 'In progress', statusLabel: 'SYSTEMS DESIGN',
      caseStudy: {
        role: 'Systems architecture & product development',
        problem: 'Administrative data in a multi-tenant service must remain separated while still supporting useful customer monitoring.',
        solution: 'Designed tenant-aware schemas, role boundaries, PostgreSQL RLS policies, and a modular monitoring dashboard.',
        outcome: 'A clearer foundation for tenant-scoped records and operations; no public deployment or outcome metrics supplied.',
      },
    },
    {
      number: '02', name: 'BUMU PAYGO', kind: 'Fintech · Digital systems', title: 'Payments, portals, and the work between.',
      description: 'A contract software project building fintech workflows across administrator, agent, and customer-facing portals.',
      details: ['React and TypeScript portal interfaces', 'Supabase connectivity and API integrations', 'Africa’s Talking and device-locking services'],
      tags: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'Supabase' }, { name: 'API integrations' }],
      theme: 'bumu', status: 'Contract', statusLabel: 'SOFTWARE DEVELOPER · 2026',
      caseStudy: {
        role: 'Software Developer · Contract',
        problem: 'Administrators, agents, and customers need distinct tools while depending on connected services.',
        solution: 'Built React/TypeScript portal interfaces and worked on Supabase, messaging, and device-locking integrations.',
        outcome: 'Contributed to the software project from workflow planning through implementation and refinement.',
        disclosure: 'Contract project; details are limited to publicly shared résumé information.',
      },
    },
    {
      number: '03', name: 'FUNDIHUB', kind: 'Marketplace · Service systems', title: 'Local expertise, easier to find.',
      description: 'A service marketplace MVP connecting customers with skilled regional workers through customer, provider, and admin journeys.',
      details: ['Customer, provider, and admin portals', 'Unified Supabase data workflows', 'Local payment and eTIMS compliance flows'],
      tags: [{ name: 'React' }, { name: 'Supabase' }, { name: 'Pesapal' }, { name: 'M-Pesa Daraja' }],
      theme: 'fundi', status: 'MVP', statusLabel: 'SERVICE MARKETPLACE',
      caseStudy: {
        role: 'MVP architecture & implementation',
        problem: 'Customers and skilled workers need a practical way to find one another and coordinate services.',
        solution: 'Designed customer, provider, and admin portals around shared data flows and local payment/compliance integrations.',
        outcome: 'A connected MVP structure for marketplace workflows; public launch details and usage metrics were not supplied.',
      },
    },
  ] satisfies FeaturedProject[],
  skills: [
    { title: 'WEB', items: [{ name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'React' }, { name: 'HTML & CSS' }, { name: 'Figma' }] },
    { title: 'MOBILE', items: [{ name: 'Flutter' }, { name: 'Dart' }, { name: 'Android Studio' }] },
    { title: 'WEB3', items: [{ name: 'Solidity', level: 'Learning' }, { name: 'Jac', level: 'Learning' }, { name: 'Smart contracts', level: 'Learning' }] },
    { title: 'BACKEND', items: [{ name: 'Supabase' }, { name: 'PostgreSQL' }, { name: 'SQL' }, { name: 'REST APIs' }, { name: 'M-Pesa Daraja' }, { name: 'Africa’s Talking' }] },
    { title: 'SECURITY & SYSTEMS', items: [{ name: 'Linux' }, { name: 'Networking' }, { name: 'OWASP ZAP' }, { name: 'Row-level security' }, { name: 'Git & GitHub' }] },
  ] satisfies { title: string; items: Skill[] }[],
  additionalProjects: [
    { name: 'TamuExpress', kind: 'Campus commerce', status: 'Concept' as ProjectStatus, description: 'An online marketplace linking students with local vendors for food ordering and delivery.', tags: ['React', 'TypeScript', 'Supabase'] },
    { name: 'Taxiling', kind: 'Mobility & delivery', status: 'Concept' as ProjectStatus, description: 'A mobile product concept combining ride-hailing with last-mile delivery.', tags: ['Flutter', 'Dart', 'Supabase'] },
    { name: 'UMMA Telemedicine', kind: 'Health · Android app', status: 'Project' as ProjectStatus, description: 'An Android telemedicine application for the UMMA community.', tags: ['Android', 'Healthcare'] },
    { name: 'SecGuard', kind: 'Security · Device intelligence', status: 'In progress' as ProjectStatus, description: 'A security project exploring device intelligence and fraud detection.', tags: ['Security', 'Device signals', 'Fraud detection'] },
    { name: 'Rental Management', kind: 'Property technology', status: 'Concept' as ProjectStatus, description: 'A property administration tool for units, tenant records, rent tracking, and maintenance.', tags: ['Property', 'Operations'] },
    { name: 'AI Student Planner', kind: 'AI · Productivity', status: 'Concept' as ProjectStatus, description: 'A student planning assistant idea for tasks, deadlines, and academic routines.', tags: ['AI exploration', 'Planning'] },
  ],
  journey: [
    { date: 'MAR — NOV 2026', title: 'Software Developer · Contract', org: 'Bumu PayGo', text: 'React and TypeScript interfaces, Supabase connectivity, and service integrations across fintech portals.', linkLabel: '', url: '' },
    { date: 'INSTRUCTOR', title: 'Blockchain & Web3 Development Programme', org: 'Umma TechHub', text: 'Teaching blockchain and Web3 development as part of the student technology community.', linkLabel: '', url: '' },
    { date: 'WEBSITE PROJECT', title: 'Web Developer', org: 'Jixels Technologies', text: 'Developed the company website to present its services and strengthen its online presence.', linkLabel: 'Visit jixels.com', url: 'https://jixels.com' },
    { date: 'WEBSITE PROJECT', title: 'Web Developer', org: 'Lami Marketing', text: 'Developed a business website supporting online presence and digital visibility.', linkLabel: 'Visit lamimarketing.com', url: 'https://lamimarketing.com' },
    { date: 'LEADERSHIP', title: 'Chairperson', org: 'Umma TechHub Community', text: 'Supporting a student tech ecosystem through collaboration, open-source work, and technology events.', linkLabel: '', url: '' },
    { date: 'FELLOWSHIP', title: 'Member', org: 'Millennium Fellowship', text: 'Participating in a student fellowship focused on leadership and community initiatives.', linkLabel: '', url: '' },
    { date: '2025 — 2026', title: 'Hackathons & Innovation Events', org: 'AI MasterClass Hackathon · SwahiliPot Innovation Week', text: 'Participated in technology and innovation events in 2025 and 2026.', linkLabel: '', url: '' },
    { date: 'AUGUST 2022', title: 'Kisii County Rugby 7s Champions', org: 'Nduru Boys High School', text: 'Scored Nduru’s opening try in the 17–5 final win over Kisii School.', linkLabel: 'Read match report · Scrummage', url: 'https://scrummage.co.ke/2022/08/27/nduru-boys-lift-kisii-county-rugby-7s/' },
  ],
  certifications: [
    { issuer: 'Cisco Networking Academy', issuerMark: 'CISCO', name: 'Introduction to Cybersecurity', date: 'June 2025', verificationUrl: '' },
    { issuer: 'Cisco Networking Academy', issuerMark: 'CISCO', name: 'Operating Systems Basics', date: 'June 2025', verificationUrl: '' },
    { issuer: 'Cisco Networking Academy', issuerMark: 'CISCO', name: 'Networking Basics', date: 'February 2026', verificationUrl: '' },
    { issuer: 'OPSWAT Academy', issuerMark: 'OPSWAT', name: 'Introduction to Critical Infrastructure Protection (ICIP)', date: 'February 2026', verificationUrl: '' },
  ],
  footer: {
    brand: 'FULL-STACK SYSTEMS & UI ENGINEER',
    resumeLabel: 'Résumé (PDF)',
    copyright: 'MADE WITH INTENTION.',
  },
} as const;
