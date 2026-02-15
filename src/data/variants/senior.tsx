import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Senior Frontend Architecture Portfolio

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

export const aboutDescription = `Senior Frontend Engineer specializing in scalable architecture and performance-driven systems.

I design and maintain production-grade applications using **React** and **Next.js**, focusing on component architecture, rendering strategies, state management decisions, and long-term maintainability.

My approach emphasizes clean abstractions, performance optimization, testing strategy, and frontend scalability across growing teams and complex products.

I collaborate closely with backend and product teams to define API contracts, rendering patterns (SSR, SSG, RSC), and scalable UI systems that reduce technical debt while improving development velocity.`;

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
      'Led frontend architecture using **Next.js**, **TypeScript**, and scalable component systems',
      'Defined rendering strategies and optimized performance through code splitting and caching',
      'Improved maintainability by introducing modular design patterns and reusable UI systems',
      'Collaborated with backend teams to align API contracts and frontend data layers',
      'Implemented testing strategies and enforced code quality standards',
      'Mentored engineers and conducted architectural code reviews',
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
      'Built scalable multilingual platform using **React** and **Next.js**',
      'Improved performance and accessibility across complex content-heavy pages',
      'Integrated structured REST API layers with optimized state handling',
      'Maintained consistency across releases using structured UI patterns',
      'Collaborated in cross-functional teams to deliver iterative improvements',
      'Ensured responsive, production-ready deployments',
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
      'Architected modular SaaS frontend systems using **React**, **Next.js**, and **TypeScript**',
      'Designed reusable design systems and scalable state management strategies',
      'Implemented testing workflows with **Jest**, **React Testing Library**, and **Cypress**',
      'Optimized SEO and performance for production deployments',
      'Advised clients on technical trade-offs and long-term frontend scalability',
      'Managed CI/CD pipelines and deployment via **Vercel**',
    ],
    dates: 'Feb 2023 – Present',
    location: 'Remote',
  },
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Shadcn UI',
  'Framer Motion',
  'Zustand',
  'Redux Toolkit',
  'Jotai',
  'TanStack Query',
  'REST APIs',
  'GraphQL',
  'Jest',
  'Vitest',
  'React Testing Library',
  'Cypress',
  'Playwright',
  'Vercel',
  'Git',
  'GitHub',
  'Figma',
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
  // PRIORITY: architecture-heavy projects first
  {
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'Built an offline-first PWA with structured rendering, scalable data handling, and optimized performance.',
    tags: ['Next.js', 'PWA', 'Prisma', 'PostgreSQL'],
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
    title: 'SnapBuild',
    href: 'https://snap-build.vercel.app/',
    description:
      'Architected a structured project planning system using modular component patterns and scalable state management.',
    tags: ['Next.js', 'TypeScript', 'Shadcn', 'Architecture'],
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

  {
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'Integrated modular AI workflows into a scalable frontend architecture with structured state management.',
    tags: ['Next.js', 'TypeScript', 'AI Integration'],
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
    title: 'BuySignal',
    description:
      'Conversion-focused dashboard system built with scalable data visualization components.',
    tags: ['Next.js', 'Recharts', 'TypeScript'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Query.Design',
    description:
      'Frontend architecture enabling structured natural-language-to-query workflows.',
    tags: ['Next.js', 'Chart.js', 'TypeScript'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'Senior Frontend Engineer',
    tagline: 'Architecting scalable, high-performance React & Next.js systems.',
  },
  about: { description: aboutDescription },
  skills: {
    items: skills,
    categories: {
      Core: ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
      Architecture: ['Zustand', 'Redux Toolkit', 'Jotai', 'TanStack Query'],
      Testing: [
        'Jest',
        'Vitest',
        'React Testing Library',
        'Cypress',
        'Playwright',
      ],
      Tools: ['Vercel', 'Git', 'GitHub', 'Figma'],
    },
  },
  experience: { items: experiences },
  projects: {
    items: projects,
    description:
      'Frontend systems designed for scalability, performance, and maintainable growth.',
  },
  contact: {
    links: navs,
    description:
      'Open to senior frontend roles focused on scalable architecture and performance optimization.',
    copyright: 'Yonatane Mekete',
  },
};
