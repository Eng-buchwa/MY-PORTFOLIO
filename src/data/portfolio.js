export const profile = {
  name: 'Nicolaus Buchwa Gilbert',
  shortName: 'NBG',
  role: 'Full-Stack Software Engineer',
  statement:
    'I design and build modern full-stack web applications with clean user experiences, reliable backend systems, and well-structured databases.',
  location: 'Tanzania',
  github: 'https://github.com/Eng-buchwa',
  githubHandle: 'Eng-buchwa',
  avatar: 'https://avatars.githubusercontent.com/u/283944964?v=4',
  email: 'gilbertnicolaus12@gmail.com',
  phone: '+255 679 384 169',
  phoneHref: '+255679384169',
  whatsapp: 'https://wa.me/255679384169',
  socialHandle: 'nickderleizer',
  cv: '',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  {
    id: 'frontend',
    title: 'Frontend',
    eyebrow: 'Interfaces',
    description: 'Responsive, component-driven experiences built for clarity and usability.',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'Responsive Design'],
  },
  {
    id: 'backend',
    title: 'Backend',
    eyebrow: 'Systems',
    description: 'Structured services and APIs that keep application logic dependable.',
    items: ['Python', 'FastAPI', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'databases',
    title: 'Databases',
    eyebrow: 'Data',
    description: 'Relational data models designed around real application workflows.',
    items: ['PostgreSQL', 'SQLite3', 'SQL', 'Database Design'],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    eyebrow: 'Workflow',
    description: 'Practical tools for version control, development, and collaboration.',
    items: ['Git', 'GitHub', 'VS Code', 'OpenCode'],
  },
  {
    id: 'support',
    title: 'Supporting Technical Skills',
    eyebrow: 'Operations',
    description: 'A systems background that supports practical, maintainable software delivery.',
    items: ['Networking', 'LAN Troubleshooting', 'Computer Maintenance', 'Windows Setup', 'Technical Support'],
  },
]

export const projects = [
  {
    number: '01',
    slug: 'msongori-business-platform',
    title: 'Msongori Business Platform',
    category: 'Business Web Platform',
    status: 'Active development',
    statusTone: 'active',
    description:
      'A real business-facing web platform for Msongori Limited, bringing company information and digital touchpoints into a focused, responsive experience.',
    detail:
      'The project combines a Vue and Vite frontend with a Node.js backend, with emphasis on clear presentation, maintainable structure, and practical business use.',
    technologies: ['Vue.js', 'JavaScript', 'Vite', 'Node.js'],
    github: 'https://github.com/Eng-buchwa/msongori-website',
    live: '',
    visual: 'business',
  },
  {
    number: '02',
    slug: 'fastapi-rest-backend',
    title: 'FastAPI REST Backend',
    category: 'Backend Engineering',
    status: 'Repository available',
    statusTone: 'complete',
    description:
      'A Python REST backend focused on clean API boundaries, relational persistence, and secure authentication flows.',
    detail:
      'Built around FastAPI, PostgreSQL, SQLAlchemy, JWT-related authentication, and Docker to demonstrate a dependable backend foundation.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Docker'],
    github: 'https://github.com/Eng-buchwa/fastapi-backend',
    live: '',
    visual: 'api',
  },
  {
    number: '03',
    slug: 'stock-management-system',
    title: 'Stock Management System',
    category: 'Full-Stack Business Application',
    status: 'In development',
    statusTone: 'progress',
    description:
      'An inventory-focused business application being developed to make stock movement and operational visibility easier to manage.',
    detail:
      'The planned architecture pairs a React interface with a FastAPI service and PostgreSQL database. Features shown in the preview represent the product direction.',
    technologies: ['React', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/Eng-buchwa/stock-system',
    live: '',
    visual: 'stock',
  },
]

export const earlierProject = {
  title: 'School Management System',
  category: 'Earlier Project',
  description: 'An early-stage system repository created around the needs of managing student information.',
  github: 'https://github.com/Eng-buchwa/school-management-system',
}

export const experience = [
  {
    company: 'Msongori Limited',
    focus: 'Software & Web',
    description:
      'Business web platform development with a focus on usable interfaces, responsive delivery, and digital presence.',
  },
  {
    company: 'Picovolt Company Limited',
    focus: 'Technical Operations',
    description:
      'Applied software, systems, and technical support skills in a practical company environment.',
  },
  {
    company: 'Tanzania Telecommunications Corporation — TTCL',
    focus: 'Networks & Systems',
    description:
      'Experience supporting technology in a telecommunications environment, strengthening systems and network fundamentals.',
  },
  {
    company: 'Bukoba District Council',
    focus: 'ICT Support',
    description:
      'Public-sector ICT support experience covering everyday systems, computer maintenance, and user assistance.',
  },
]

export const services = [
  {
    number: '01',
    title: 'Full-Stack Applications',
    description: 'End-to-end business applications connecting polished React interfaces to reliable Python services.',
  },
  {
    number: '02',
    title: 'Frontend Development',
    description: 'Responsive React and JavaScript interfaces shaped around clear user journeys and maintainable components.',
  },
  {
    number: '03',
    title: 'Backend & REST APIs',
    description: 'FastAPI services, authentication flows, data validation, and clear RESTful application boundaries.',
  },
  {
    number: '04',
    title: 'Database Design',
    description: 'Practical PostgreSQL and SQLite schemas designed for the application rather than around abstractions.',
  },
  {
    number: '05',
    title: 'Web Maintenance',
    description: 'Focused improvements, troubleshooting, and ongoing support for business websites and applications.',
  },
  {
    number: '06',
    title: 'Technical Support',
    description: 'Supporting ICT service for systems, networks, software, and workplace technology.',
    secondary: true,
  },
]

export const repositories = [
  { name: 'msongori-website', language: 'Vue', href: 'https://github.com/Eng-buchwa/msongori-website' },
  { name: 'fastapi-backend', language: 'Python', href: 'https://github.com/Eng-buchwa/fastapi-backend' },
  { name: 'stock-system', language: 'In development', href: 'https://github.com/Eng-buchwa/stock-system' },
  { name: 'school-management-system', language: 'Early stage', href: 'https://github.com/Eng-buchwa/school-management-system' },
]
