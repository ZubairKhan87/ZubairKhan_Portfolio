/**
 * Single source of truth for every piece of content on the site.
 * Edit here — no component needs to change.
 */

export const profile = {
  name: 'Muhammad Zubair Khan',
  shortName: 'Zubair Khan',
  role: 'Software Engineer',
  location: 'Lahore, Pakistan',
  email: 'mzubairkhan1786@gmail.com',
  phone: '+92 307 5270814',
  github: 'https://github.com/ZubairKhan87',
  linkedin: 'https://linkedin.com/in/zubair-khan',
  /** Hero headline — split so the accent word can be styled. */
  headline: {
    lead: 'Software Engineer building',
    accent: 'intelligent products',
    trail: 'with AI.',
  },
  summary:
    'I build AI-powered applications with Python, Django, Flask and the MERN stack — with a strong focus on machine learning and NLP — and turn them into scalable, real-world software.',
  availability: 'Software Engineer at Evolve Edge Technologies',
} as const

export type Project = {
  name: string
  tagline: string
  problem: string
  outcomes?: string[]
  tech: string[]
  live?: string
  github?: string
  note?: string
  year?: string
}

export const personalProjects: Project[] = [
  {
    name: 'AI-Powered Interviewing System',
    tagline: 'Final Year Project',
    problem:
      'Hiring teams spend most of their time on first-round interviews that follow the same script every time. This system runs the interview end to end and scores candidates automatically, using evaluation aligned to recruiter standards rather than keyword matching.',
    outcomes: [
      '0.79 correlation with recruiter evaluation',
      '81% confidence prediction accuracy',
    ],
    tech: ['Django', 'React.js', 'REST API', 'PostgreSQL', 'BERT', 'CNN', 'Whisper', 'PlayAI', 'Groq'],
    github: 'https://github.com/ZubairKhan87/AI-Powered-Interviewing-System',
  },
  {
    name: 'AI-Copilot for Personalized Learning',
    tagline: 'Retrieval-augmented tutoring',
    problem:
      'Generic quiz generators drift away from what was actually taught. This copilot grounds every question in the material a teacher uploaded, using retrieval-augmented generation so practice stays aligned with the syllabus.',
    outcomes: [
      '100+ personalized quizzes across 20+ student profiles',
      '85% improvement in quiz relevance',
    ],
    tech: ['Django', 'React.js', 'PostgreSQL', 'RAG', 'Hugging Face Transformers'],
    github: 'https://github.com/ZubairKhan87/AI-Copilot-for-Personalized-Learning',
  },
  {
    name: 'Converso',
    tagline: 'Multi-tenant voice AI platform',
    problem:
      'A business signs up, builds a voice agent, gives it a knowledge base and tools, and attaches a phone number — the platform handles the calls. Multi-tenant by design, with per-tenant data isolation and a retrieval layer over uploaded documents.',
    tech: ['Next.js', 'React', 'FastAPI', 'PostgreSQL', 'pgvector', 'LangGraph', 'Tailwind CSS'],
    live: 'https://tryconverso.vercel.app/',
    github: 'https://github.com/ZubairKhan87/converso',
  },
  {
    name: 'Freshmart',
    tagline: 'Online grocery store',
    problem:
      'A full-stack storefront covering the complete customer flow — accounts, product browsing and search, wishlist, cart, multi-step checkout, order history and cancellation — with JWT authentication and an admin panel behind it.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://tryfreshmart.vercel.app/',
    github: 'https://github.com/ZubairKhan87/Online-Grocery-Store',
  },
]

export const professionalProjects: Project[] = [
  {
    name: 'Stammer.ai',
    tagline: 'White-label AI automation platform',
    problem:
      'A white-label platform where agencies ship chatbots and voice agents to their own clients under their own brand — with subaccounts and custom-domain deployments. I worked across backend and frontend features.',
    outcomes: [
      'Scaled AI operations with background workers, Redis-based messaging and vector-search knowledge retrieval',
      'Contributed to subscription billing, wallet and credits',
      'Integrations with Stripe, Twilio, Groq, ElevenLabs, Slack, Google and Meta',
    ],
    tech: ['Django', 'React.js', 'REST API', 'PostgreSQL', 'Stripe', 'Twilio', 'Retell AI', 'Pinecone', 'Redis'],
    live: 'https://stammer.ai/',
    note: 'Private codebase — company-owned',
  },
  {
    name: 'Recruitment Digitization Platform',
    tagline: 'End-to-end HR recruitment portal',
    problem:
      'An end-to-end hiring portal built around dual-approval workflows: AI resume parsing, semantic candidate matching, MS Teams interview scheduling, automated assessments and a candidate-facing chatbot.',
    outcomes: [
      'Talent pool with AI-driven passive candidate matching',
      'Reporting dashboard for funnel metrics, recruiter performance and payment/refund workflows',
    ],
    tech: ['Node.js', 'React.js', 'MERN', 'REST API', 'PostgreSQL', 'MS Teams API', 'AI/NLP'],
    live: 'https://ngtrecruit.ngtsol.com/',
    note: 'Private codebase — company-owned',
  },
]

export const experience = [
  {
    company: 'Evolve Edge Technologies',
    role: 'Software Engineer',
    period: 'July 2025 — Present',
    points: [
      'Build web applications with modern frameworks, improving scalability and reducing load times by up to 30%.',
      'Work on agentic AI solutions including Stammer.ai, integrating AI agents into real-world business workflows and optimizing AI-powered systems to enhance efficiency by 20%.',
    ],
  },
] as const

export const skills = [
  { title: 'Languages', items: ['Python', 'JavaScript'] },
  {
    title: 'Web Development',
    items: ['Django', 'Flask', 'React.js', 'Node.js (MERN)', 'Django REST Framework', 'Tailwind CSS'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'LLMs', 'Hugging Face Transformers', 'NLP'],
  },
  {
    title: 'Databases & Deployment',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Vercel', 'Render', 'Railway', 'Hugging Face'],
  },
  {
    title: 'Tools & Integrations',
    items: ['Git', 'GitHub', 'Stripe', 'Twilio', 'Retell AI', 'Postman', 'Power BI', 'Figma'],
  },
] as const

export const education = {
  school: 'Namal University, Mianwali',
  degree: 'BS in Computer Science',
  period: 'Nov 2021 — Jun 2025',
  gpa: '3.14 / 4.0',
  coursework: [
    'Artificial Intelligence',
    'Machine Learning',
    'Digital Image Processing',
    'NLP',
    'Cybersecurity',
    'Software Engineering',
  ],
} as const

export const achievements = [
  {
    title: 'Winner — Best Final Year Project',
    detail: 'AI InnoFest 2025, Bahria University, Islamabad',
  },
  {
    title: '1st Position — Best FYP of the Year',
    detail: 'Namal University, Mianwali',
  },
] as const

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const
