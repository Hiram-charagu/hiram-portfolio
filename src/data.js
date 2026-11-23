export const profile = {
  name: 'Hiram Ngatia Charagu',
  role: 'Software Developer · Web & Mobile · Product Development',
  email: 'hiramcharagu@gmail.com',
  phone: '0759 694 291',
  phoneLink: '+254759694291',
  github: 'https://github.com/Hiram-charagu',
  linkedin: 'https://www.linkedin.com/in/hiram-ngatia-45937636b',
}

export const education = [
  {
    name: 'Umma University', credential: 'Bachelor of Science in Computer Science',
    status: 'In progress · Expected graduation July 2028', location: 'Main Campus · Kajiado, Kenya',
    logo: '/assets/umma-university-logo.png', logoAlt: 'Umma University logo',
  },
  {
    name: 'Nduru Boys High School', credential: 'Secondary education',
    status: 'Completed · Four years', location: 'Kenya',
  },
]

export const projects = [
  {
    number: '01', name: 'MAPPHEX', kind: 'Enterprise SaaS', title: 'Structure for complex operations.',
    description: 'A multi-tenant administrative platform for customer operations, with tenant-aware data boundaries and a modular monitoring dashboard.',
    details: ['Tenant-aware schema and role design', 'PostgreSQL row-level security policies', 'Modular customer monitoring dashboard'],
    tags: ['PostgreSQL', 'RLS', 'SaaS', 'Admin UI'], theme: 'mapphex', visual: 'mapphex', status: 'MULTI-TENANT SAAS · SYSTEMS DESIGN',
  },
  {
    number: '02', name: 'BUMU PAYGO', kind: 'Fintech · Digital systems', title: 'Payment workflows, designed with care.',
    description: 'A contract software project building fintech workflows across administrator, agent, and customer-facing portals.',
    details: ['React and TypeScript portal interfaces', 'Supabase connectivity and API integrations', 'Africa’s Talking and device-locking services'],
    tags: ['React', 'TypeScript', 'Supabase', 'API integrations'], theme: 'bumu', visual: 'bumu', status: 'SOFTWARE DEVELOPER CONTRACT · 2026',
  },
  {
    number: '03', name: 'FUNDIHUB', kind: 'Marketplace · Service systems', title: 'Bringing local expertise online.',
    description: 'A service marketplace MVP connecting customers with skilled regional workers through dedicated customer, provider, and admin journeys.',
    details: ['Customer, provider, and admin portals', 'Unified Supabase data workflows', 'Local payment and eTIMS compliance flows'],
    tags: ['React', 'Supabase', 'Pesapal', 'M-Pesa Daraja'], theme: 'fundi', visual: 'fundi', status: 'MARKETPLACE MVP · SERVICE WORKFLOWS',
  },
]

export const stack = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Dart', 'SQL'] },
  { title: 'Frontend & UI', items: ['React', 'Flutter', 'HTML & CSS', 'Figma', 'Responsive UI'] },
  { title: 'Backend & Integrations', items: ['Supabase', 'PostgreSQL', 'REST APIs', 'M-Pesa Daraja', 'Africa’s Talking'] },
  { title: 'Tools, Systems & Security', items: ['Linux', 'Networking', 'Row-level security', 'Git & GitHub', 'VS Code', 'Android Studio', 'OWASP ZAP'] },
]

export const additionalProjects = [
  { name: 'TamuExpress', kind: 'Campus commerce', description: 'A digital ordering and delivery platform concept connecting customers, local vendors, and delivery workflows.', tags: ['React', 'TypeScript', 'Supabase'] },
  { name: 'Taxiling', kind: 'Mobility & delivery', description: 'A mobility platform concept bringing ride-hailing and delivery experiences into one ecosystem.', tags: ['Flutter', 'Dart', 'Supabase'] },
  { name: 'Rental Management', kind: 'Property technology', description: 'A property administration system concept for managing units, tenant records, rent tracking, and maintenance.', tags: ['SaaS', 'Operations', 'Product design'] },
  { name: 'AI Student Planner', kind: 'AI & productivity', description: 'An academic planning concept exploring task organization and AI-assisted student workflows.', tags: ['AI exploration', 'Planning', 'Backend'] },
]

export const milestones = [
  { date: 'MAR — NOV 2026', title: 'Software Developer · Contract', org: 'Bumu PayGo', text: 'Contributed to development workflow planning, React and TypeScript interfaces, Supabase connectivity, and integrations including Africa’s Talking and device-locking APIs.' },
  { date: 'WEBSITE PROJECT', title: 'Web Developer', org: 'Jixels Technologies', text: 'Developed the company website to present its services and strengthen its online presence.', url: 'https://jixels.com' },
  { date: 'WEBSITE PROJECT', title: 'Web Developer', org: 'Lami Marketing', text: 'Developed a business website supporting online presence and digital visibility.', url: 'https://lamimarketing.com' },
  { date: 'LEADERSHIP', title: 'Chairperson', org: 'Umma TechHub Community', text: 'Support a student technology community focused on collaboration, practical learning, open-source work, and technology events.' },
  { date: 'FELLOWSHIP', title: 'Member', org: 'Millennium Fellowship', text: 'Participating in a student fellowship community focused on leadership and community-driven initiatives.' },
  { date: '2025 — 2026', title: 'Hackathons & Innovation Events', org: 'AI MasterClass Hackathon · SwahiliPot Innovation Week', text: 'Participated in technology and innovation events, including activities in 2025 and 2026.' },
  { date: 'AUGUST 2022', title: 'Kisii County Rugby 7s Champions', org: 'Nduru Boys High School', text: 'Scored Nduru’s opening try in the 17–5 final win over Kisii School.', sourceUrl: 'https://scrummage.co.ke/2022/08/27/nduru-boys-lift-kisii-county-rugby-7s/', sourceLabel: 'Read the match report · Scrummage' },
]

export const certifications = [
  { issuer: 'Cisco Networking Academy', name: 'Introduction to Cybersecurity', date: 'June 2025' },
  { issuer: 'Cisco Networking Academy', name: 'Operating Systems Basics', date: 'June 2025' },
  { issuer: 'Cisco Networking Academy', name: 'Networking Basics', date: 'February 2026' },
  { issuer: 'OPSWAT Academy', name: 'Introduction to Critical Infrastructure Protection (ICIP)', date: 'February 2026' },
]
