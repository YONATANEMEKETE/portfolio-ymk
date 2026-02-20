import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Product-Focused Portfolio (Paddle-Optimized Version)

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

export const aboutDescription = `I build complex, high-performance web applications that power real business workflows.

As a frontend engineer focused on scalable product systems, I design and implement feature-rich client applications using **React** and **TypeScript**, with strong attention to usability, performance, and long-term maintainability.

My work often involves architecting structured state management, building reusable design systems, and delivering data-driven interfaces such as dashboards, analytics views, and conversion-focused flows.

I collaborate closely with product managers and designers to shape user experiences from early concepts to production-ready releases, ensuring that business requirements translate into intuitive and reliable frontend systems.

I continuously refine frontend architecture, developer experience, and UI consistency to help teams ship faster while maintaining technical quality.`;

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
      'Led frontend architecture for a scalable SaaS platform using **React**, **Next.js**, and **TypeScript**',
      'Built structured state management systems using **Redux Toolkit**, **Jotai**, and server-state patterns',
      'Developed complex, data-driven UI modules including analytics views and multi-step user flows',
      'Collaborated closely with product managers and designers to refine UX patterns and feature scope',
      'Contributed to shared component standards and design consistency across the application',
      'Optimized performance through code splitting, dynamic rendering strategies, and bundle improvements',
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
      'Built and maintained a multilingual, accessible government platform using **React** and **TypeScript**',
      'Implemented structured component systems to ensure UI consistency and scalability',
      'Integrated API-driven content services and real-time updates into complex interfaces',
      'Worked closely with designers to refine usability, accessibility, and visual clarity',
      'Improved frontend maintainability through modular architecture and reusable patterns',
      'Delivered iterative feature releases within fast-moving development cycles',
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
      'Developed feature-rich SaaS dashboards and client applications using **React**, **Next.js**, and **TypeScript**',
      'Architected scalable frontend structures aligned with business logic and performance constraints',
      'Implemented advanced state management with **Zustand**, **Redux Toolkit**, and **TanStack Query**',
      'Built data visualization interfaces using charting libraries for actionable insights',
      'Optimized UX flows for conversion-focused and workflow-heavy applications',
      'Managed full lifecycle delivery — from feature scoping to deployment and iteration',
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
    title: 'BuySignal',
    description:
      'A conversion-optimization and analytics tool that enables businesses to trigger real-time urgency signals and visualize product engagement metrics. Built with **React**, **TypeScript**, and **Recharts** to support actionable decision-making.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Recharts',
      'Analytics',
      'Conversion Optimization',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Query.Design',
    description:
      'A data exploration platform that transforms natural language into structured database queries and visual insights. Designed with **React**, **TypeScript**, and charting tools to simplify complex data workflows.',
    tags: ['Next.js', 'React', 'TypeScript', 'Chart.js', 'AI Querying'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
  {
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'An AI-powered web application that analyzes job descriptions, identifies resume gaps, and generates tailored, editable content through a structured, state-driven interface.',
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
      'A productivity-focused PDF reading companion built with **Next.js** and **TypeScript**, featuring offline support and structured state handling for deep reading workflows.',
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
      'A structured project planning tool helping frontend teams define features, milestones, and technical scope to ship products efficiently.',
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
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'Frontend Engineer — React & TypeScript',
    tagline:
      'Building scalable, data-driven web applications with strong UX, structured state, and production performance.',
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
      'Feature-rich, production-ready web applications focused on scalability, structured state management, and data-driven user experiences.',
  },
  contact: {
    links: navs,
    description:
      'Open to frontend engineering roles focused on complex SaaS products, dashboards, analytics systems, and high-performance user experiences.',
    copyright: 'Yonatane Mekete',
  },
};
