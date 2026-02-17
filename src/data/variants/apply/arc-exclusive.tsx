import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Marketplace-Focused Portfolio Version

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

export const aboutDescription = `I build scalable, SEO-driven web platforms designed for real-world growth.

As a senior frontend engineer, I specialize in architecting high-performance marketplace applications using **Next.js** and **React**. My focus is on dynamic routing, server-side rendering (SSR/SSG), and building search-friendly page structures that scale across categories and locations.

I work closely with backend teams integrating REST APIs to deliver reliable, data-driven experiences. My approach emphasizes Core Web Vitals optimization, clean component systems, and long-term maintainability.

From service listings to location-based pages, I design frontend systems that balance business visibility, performance, and user experience.

I thrive in remote, cross-timezone environments where ownership, communication, and iteration speed matter.`;

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
      'Architected scalable **Next.js** applications with SSR and dynamic routing strategies',
      'Built SEO-optimized page structures for high discoverability and search performance',
      'Integrated REST APIs from backend services to power data-driven interfaces',
      'Improved Core Web Vitals through code-splitting, lazy loading, and caching strategies',
      'Designed reusable component systems for long-term maintainability',
      'Enhanced UX through thoughtful micro-interactions and responsive layouts',
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
      'Developed responsive, multilingual web interfaces using **React** and **Next.js**',
      'Built structured component systems supporting dynamic content updates',
      'Collaborated with backend teams to integrate RESTful APIs',
      'Optimized accessibility and performance across browsers and devices',
      'Refined UI flows based on stakeholder and user feedback',
      'Maintained consistent design patterns across releases',
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
      'Built production-ready SaaS platforms using **Next.js** and **TypeScript**',
      'Implemented SEO best practices including metadata and structured data',
      'Designed scalable frontend architecture aligned with backend APIs',
      'Delivered high-performance user interfaces for business-driven applications',
      'Advised clients on frontend scalability and performance optimization',
      'Managed full lifecycle delivery from concept to deployment',
    ],
    dates: 'Feb 2023 – Present',
    location: 'Remote',
  },
];

export const skills = [
  'Next.js',
  'React.js',
  'TypeScript',
  'SSR',
  'SSG',
  'ISR',
  'REST APIs',
  'Dynamic Routing',
  'SEO Optimization',
  'Core Web Vitals',
  'Code Splitting',
  'Lazy Loading',
  'Redux Toolkit',
  'Jotai',
  'TanStack Query',
  'Tailwind CSS',
  'Responsive Design',
  'Accessibility (A11y)',
  'Micro-Interactions',
  'Performance Optimization',
  'Vercel',
  'Git',
  'GitHub',
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
    title: 'Query.Design',
    description:
      'A developer-focused application that transforms natural language into structured database queries, enabling dynamic data exploration through a scalable Next.js frontend architecture integrated with backend APIs.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Chart.js',
      'AI Querying',
      'REST APIs',
      'Dynamic Data',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
  {
    title: 'BuySignal',
    description:
      'A conversion-optimization platform that integrates into client websites to trigger real-time urgency signals and behavioral insights, built with performance-conscious frontend architecture.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Recharts',
      'Performance',
      'Conversion Optimization',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'A productivity-focused PDF reading companion built with **Next.js** and **TypeScript**, optimized for performance with offline support and scalable state management.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'PWA',
      'Offline Support',
      'Prisma',
      'PostgreSQL',
      'Performance',
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
      'A structured project planning tool that helps frontend teams define features, milestones, and tech stacks to ship scalable products with clarity and speed.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'Product Systems',
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
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'An AI-powered web application that analyzes job descriptions and generates tailored, editable resume content with a fast, scalable Next.js frontend architecture.',
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
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'Senior Next.js Frontend Engineer',
    tagline:
      'Building scalable, SEO-optimized marketplace platforms with performance at the core.',
  },
  about: { description: aboutDescription },
  skills: {
    items: skills,
    categories: {
      Core: ['Next.js', 'React.js', 'TypeScript'],
      Rendering: ['SSR', 'SSG', 'ISR', 'Dynamic Routing'],
      SEO: ['SEO Optimization', 'Structured Data', 'Core Web Vitals'],
      State: ['Redux Toolkit', 'Jotai', 'TanStack Query'],
      Performance: [
        'Code Splitting',
        'Lazy Loading',
        'Performance Optimization',
      ],
      Integration: ['REST APIs'],
      Styling: ['Tailwind CSS', 'Responsive Design', 'Accessibility (A11y)'],
      Tools: ['Vercel', 'Git', 'GitHub'],
    },
  },
  experience: { items: experiences },
  projects: {
    items: projects,
    description:
      'Scalable, SEO-driven web applications focused on marketplace architecture, performance, and long-term maintainability.',
  },
  contact: {
    links: navs,
    description:
      'Open to building scalable, SEO-first marketplace platforms and high-performance product systems.',
    copyright: 'Yonatane Mekete',
  },
};
