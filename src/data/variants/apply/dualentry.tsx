import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Tailored for DualEntry – Product-Focused Portfolio

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

export const aboutDescription = `I build web products that solve real problems, not just interfaces.

As a product-focused frontend engineer, I turn ideas into **scalable, production-ready applications**, emphasizing usability, performance, and maintainability.

I specialize in **React** and **Next.js**, architecting systems that balance technical excellence with business impact. My approach combines product thinking, clean component architecture, and thoughtful UX decisions.

I work across the product lifecycle, from shaping early feature ideas with stakeholders to shipping optimized, user-driven experiences in production.

Beyond coding, I explore AI-powered workflows, product strategy, and methods to help teams ship faster and more reliably.`;

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
      'Led frontend architecture and product implementation for a large-scale SaaS application using **Next.js**, **TypeScript**, and **Shadcn UI**.',
      'Translated roadmap features into scalable frontend systems in collaboration with product managers and stakeholders.',
      'Designed reusable component architecture that accelerated development and improved consistency across modules.',
      'Implemented performance optimizations including SSR, dynamic rendering, and code splitting for faster user experiences.',
      'Enhanced engagement through **micro-interactions, polished UX patterns, and accessible design**.',
      'Mentored junior developers on building maintainable, product-aligned frontend codebases.',
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
    title: 'Frontend Developer (Freelance)',
    bulletPoints: [
      'Developed production-ready SaaS and AI-driven interfaces using **React**, **Next.js**, and **TypeScript**.',
      'Architected **scalable component systems and client-side logic** aligned with business goals.',
      'Integrated **REST APIs** with optimized state management patterns for dynamic workflows.',
      'Built conversion-oriented, performance-conscious, and accessible user interfaces.',
      'Advised clients on product decisions, technical trade-offs, and frontend scalability strategies.',
      'Managed the **full delivery lifecycle** — from ideation to deployment — ensuring reliable production releases.',
    ],
    dates: 'Feb 2023 – Present',
    location: 'Remote',
  },
  {
    title: 'Frontend Developer – Ablaze Labs',
    bulletPoints: [
      'Built and maintained a **multilingual government platform** using **React** and **Next.js**.',
      'Focused on **accessibility, responsiveness, and UX clarity** for diverse audiences.',
      'Integrated scalable, API-driven content systems for dynamic updates and real-time data.',
      'Collaborated closely with designers and stakeholders to refine UX through iterative feedback loops.',
      'Improved interface consistency across releases using structured design systems.',
      'Delivered high-quality frontend solutions under fast iteration cycles.',
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
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Sass',
  'Shadcn UI',
  'Framer Motion',
  'GSAP',
  'Zustand',
  'Redux Toolkit',
  'Jotai',
  'TanStack Query',
  'REST APIs',
  'GraphQL',
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
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'An AI-powered web application that analyzes job descriptions, identifies resume gaps, and generates tailored, editable content. Designed for speed, clarity, and measurable job application improvement.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'AI',
      'Vercel AI SDK',
      'Tiptap',
      'React PDF',
    ],
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
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'A productivity-focused PDF reading companion built with **Next.js** and **TypeScript**. Enables contextual note-taking, highlighting, and offline support to improve deep reading workflows for students and researchers.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'PWA',
      'Offline Support',
      'Prisma',
      'PostgreSQL',
      'Productivity',
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
    title: 'SnapBuild',
    href: 'https://snap-build.vercel.app/',
    description:
      'A structured project planning tool for frontend developers, helping teams define goals, features, milestones, and tech stacks to ship products with clarity and speed.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'Project Planning',
    ],
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
    title: 'BuySignal',
    description:
      'A conversion-optimization tool that enables businesses to trigger real-time urgency signals and product insights, designed to increase engagement and sales performance.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Recharts',
      'Conversion Optimization',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Query.Design',
    description:
      'A developer-focused application that transforms natural language into structured database queries, simplifying data exploration and accelerating decision-making.',
    tags: ['Next.js', 'React', 'TypeScript', 'Chart.js', 'AI Querying'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'Product-Focused Frontend Engineer',
    tagline:
      'Turning ideas into scalable, high-impact web products with React & Next.js.',
  },
  about: { description: aboutDescription },
  skills: {
    items: skills,
    categories: {
      Core: ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
      Styling: ['Tailwind CSS', 'Sass', 'Shadcn UI', 'Framer Motion', 'GSAP'],
      State: ['Zustand', 'Redux Toolkit', 'Jotai', 'TanStack Query'],
      APIs: ['REST APIs', 'GraphQL', 'React Hook Form', 'Zod'],
      Testing: [
        'Jest',
        'Vitest',
        'React Testing Library',
        'Cypress',
        'Playwright',
      ],
      Tools: ['Vite', 'Vercel', 'Git', 'GitHub', 'Figma'],
    },
  },
  experience: { items: experiences },
  projects: {
    items: projects,
    description:
      'Production-ready web applications focused on usability, scalability, and measurable product impact.',
  },
  contact: {
    links: navs,
    description:
      'Open to product-driven frontend roles, SaaS collaborations, and AI-powered web projects.',
    copyright: 'Yonatane Mekete',
  },
};
