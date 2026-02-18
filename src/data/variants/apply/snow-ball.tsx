import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Snowball.money – Web3 / FinTech Tailored Version

export const navs = [
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/yonatanemekete/',
    tooltip: 'LinkedIn',
  },
  {
    icon: Github,
    link: 'https://github.com/YONATANEMEKETE',
    tooltip: 'GitHub',
  },
  { icon: Gmail, link: 'mailto:yonatanemekete22@gmail.com', tooltip: 'Gmail' },
  { icon: Telegram, link: 'https://t.me/yonatanemekete', tooltip: 'Telegram' },
];

export const aboutDescription = `I build high-performance, data-driven web applications with a strong focus on scalability and user clarity.

As a frontend engineer specializing in **React** and **TypeScript**, I design modular systems that handle complex state, asynchronous data flows, and real-time interactions.

My work emphasizes clean architecture, structured state management, and optimized data fetching using tools like **Zustand** and **TanStack Query**. I focus on building responsive, dashboard-style interfaces that balance technical robustness with intuitive user experience.

I thrive in remote, Agile teams and enjoy working on financial-grade and performance-critical products where reliability and speed matter.`;

export interface Experience {
  title: string;
  bulletPoints: string[];
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer – Zulu Tech',
    bulletPoints: [
      'Led frontend architecture for a large-scale web application using **Next.js** and **TypeScript**, focusing on scalable, data-driven UI systems',
      'Integrated REST APIs with structured caching and revalidation strategies using **TanStack Query** to support dynamic workflows',
      'Designed modular component systems that improved performance, maintainability, and feature scalability',
      'Implemented rendering optimizations, code splitting, and state isolation for complex interactive interfaces',
      'Collaborated in Agile sprints, contributing to planning, reviews, and cross-team technical alignment',
    ],
    dates: 'Jan 2025 - Oct 2025',
    location: 'Remote',
    image: '/zulu.jpg',
    links: [
      {
        icon: <LinkedinIcon />,
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/zulu-software/posts/?feedView=all',
      },
    ],
  },
  {
    title: 'Frontend Developer – Ablaze Labs',
    bulletPoints: [
      'Developed a multilingual, production-grade platform using **React** and **Next.js** with structured, reusable UI architecture',
      'Integrated API-driven services and managed complex client-side state for dynamic content updates',
      'Focused on accessibility, responsiveness, and performance optimization across devices',
      'Worked closely with design teams in **Figma** to implement consistent, adaptive interfaces',
      'Maintained clean Git workflows and contributed within Agile development cycles',
    ],
    dates: 'Oct 2024 – Jan 2025',
    location: 'Addis Ababa',
    image: '/ablaze.jpg',
    links: [
      {
        icon: <LinkedinIcon />,
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/ablazelabs/posts/?feedView=all',
      },
    ],
  },
  {
    title: 'Frontend Developer (Freelance)',
    bulletPoints: [
      'Built SaaS and dashboard-style applications using **React**, **Next.js**, and **TypeScript** in fully remote environments',
      'Architected scalable frontend systems with centralized state management and optimized async data handling',
      'Integrated REST and GraphQL APIs to support analytics-driven and interactive user experiences',
      'Delivered performance-focused interfaces with strong emphasis on UX clarity and maintainable code',
      'Managed full lifecycle delivery from system design to deployment on **Vercel**',
    ],
    dates: 'Feb 2023 – Present',
    location: 'Remote',
  },
];

export const skills = [
  'TypeScript',
  'React.js',
  'Next.js',
  'Zustand',
  'TanStack Query',
  'REST APIs',
  'GraphQL',
  'Tailwind CSS',
  'Component Architecture',
  'Performance Optimization',
  'Responsive Design',
  'Accessibility (A11y)',
  'JavaScript',
  'Redux Toolkit',
  'Jotai',
  'React Hook Form',
  'Zod',
  'Jest',
  'Vitest',
  'React Testing Library',
  'Cypress',
  'Playwright',
  'Vercel',
  'Git',
  'GitHub',
  'Figma',
  'Vite',
  'Progressive Web Apps',
];

export interface Project {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    title: 'BuySignal',
    description:
      'A conversion-optimization and analytics tool that enables businesses to trigger real-time urgency signals and track engagement metrics through interactive dashboards.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Recharts',
      'Real-Time UI',
      'Analytics',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Query.Design',
    description:
      'A developer-focused application that transforms natural language into structured database queries, generating data visualizations and analytics-driven insights.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Chart.js',
      'Data Visualization',
      'AI Querying',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
  {
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'A performance-focused PDF reading companion built with **Next.js** and **TypeScript**, featuring structured state management and offline support for long-session usage.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'PWA',
      'Offline Support',
      'Prisma',
      'PostgreSQL',
    ],
    link: 'https://noteed-1.vercel.app',
    image: '/noted-image.png',
    links: [
      {
        icon: <Globe />,
        type: 'Live App',
        href: 'https://noteed-1.vercel.app',
      },
      {
        icon: <GithubIcon />,
        type: 'GitHub',
        href: 'https://github.com/YONATANEMEKETE/read-comp',
      },
    ],
  },
  {
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'An AI-powered application that analyzes job descriptions and generates tailored content through structured data flows and optimized frontend architecture.',
    tags: ['Next.js', 'React', 'TypeScript', 'AI', 'Vercel AI SDK', 'Tiptap'],
    link: 'https://resume-tailor-zeta.vercel.app',
    image: '/og-image.png',
    links: [
      {
        icon: <Globe />,
        type: 'Live App',
        href: 'https://resume-tailor-zeta.vercel.app',
      },
      {
        icon: <GithubIcon />,
        type: 'GitHub',
        href: 'https://github.com/YONATANEMEKETE/ResumeTailor',
      },
    ],
  },
  {
    title: 'SnapBuild',
    href: 'https://snap-build.vercel.app/',
    description:
      'A structured project planning tool that helps teams define goals, milestones, and tech stacks through modular, scalable frontend architecture.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Shadcn'],
    link: 'https://snap-build.vercel.app/',
    image: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/753shots_so.png',
    links: [
      {
        icon: <Globe />,
        type: 'Live App',
        href: 'https://snap-build.vercel.app/',
      },
      {
        icon: <GithubIcon />,
        type: 'GitHub',
        href: 'https://github.com/YONATANEMEKETE/SnapBuild',
      },
    ],
  },
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'Frontend Engineer – React & TypeScript',
    tagline:
      'Building scalable, data-driven web applications with performance and clarity at the core.',
  },
  about: { description: aboutDescription },
  skills: {
    items: skills,
    categories: {
      Core: ['TypeScript', 'React.js', 'Next.js'],
      State: ['Zustand', 'TanStack Query', 'Redux Toolkit', 'Jotai'],
      APIs: ['REST APIs', 'GraphQL', 'React Hook Form', 'Zod'],
      Styling: ['Tailwind CSS', 'Responsive Design', 'Accessibility (A11y)'],
      Testing: [
        'Jest',
        'Vitest',
        'React Testing Library',
        'Cypress',
        'Playwright',
      ],
      Tools: ['Vercel', 'Git', 'GitHub', 'Figma', 'Vite'],
    },
  },
  experience: { items: experiences },
  projects: {
    items: projects,
    description:
      'Production-ready, data-driven applications focused on performance, scalability, and structured frontend architecture.',
  },
  contact: {
    links: navs,
    description:
      'Open to Web3, FinTech, and performance-focused frontend roles in remote product teams.',
    copyright: 'Yonatane Mekete',
  },
};
