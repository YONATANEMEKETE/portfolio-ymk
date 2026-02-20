import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

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

export const aboutDescription = `I build interactive frontend systems that combine performance, structured logic, and engaging user experiences.

As a TypeScript-focused frontend engineer, I develop scalable applications using clean component architecture and modular design patterns. I emphasize maintainability, performance optimization, and dynamic UI logic.

I specialize in React and Next.js, applying OOP principles to complex frontend workflows. I have hands-on experience implementing animation-driven interfaces using GSAP to enhance feedback, transitions, and user engagement.

I enjoy solving logic-heavy UI challenges and continuously expanding into interactive and game-oriented frontend development environments.`;

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
      'Led frontend architecture and implementation using **Next.js** and **TypeScript**.',
      'Applied object-oriented design principles to build modular, scalable feature systems.',
      'Translated product requirements into dynamic, state-driven UI logic integrated with backend services.',
      'Optimized rendering performance through efficient state transitions and dynamic loading strategies.',
      'Enhanced engagement through structured micro-interactions and animation-driven UI feedback.',
      'Mentored developers on maintainable frontend architecture and clean code practices.',
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
      'Developed a complex multilingual government platform using **React** and **TypeScript**.',
      'Implemented advanced UI animations and structured interaction flows using **GSAP**.',
      'Built reusable, state-driven components supporting dynamic content and localization.',
      'Applied OOP principles to manage complex UI logic and maintain scalable architecture.',
      'Integrated API-driven services for structured data updates.',
      'Collaborated closely with cross-functional teams to refine interactive user experiences.',
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
      'Built production-ready applications using **React**, **Next.js**, and **TypeScript**.',
      'Architected scalable component systems and structured client-side logic.',
      'Integrated **REST APIs** with optimized state management for dynamic data workflows.',
      'Implemented animation-driven UI flows and interactive feedback mechanisms.',
      'Advised clients on frontend architecture decisions and performance strategies.',
      'Managed full lifecycle delivery from implementation to deployment.',
    ],
    dates: 'Feb 2023 – Present',
    location: 'Remote',
  },
];

export const skills = [
  'TypeScript',
  'JavaScript',
  'OOP Principles',
  'Design Patterns',
  'React.js',
  'Next.js',
  'GSAP',
  'Framer Motion',
  'Component-Driven Architecture',
  'Zustand',
  'Redux Toolkit',
  'Jotai',
  'TanStack Query',
  'REST APIs',
  'GraphQL',
  'React Hook Form',
  'Zod',
  'Performance Optimization',
  'Tailwind CSS',
  'Sass',
  'Shadcn UI',
  'Accessibility (A11y)',
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
      'A conversion-optimization tool that enables businesses to trigger real-time urgency signals and product insights, designed with structured UI logic and dynamic feedback systems.',
    tags: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Real-Time UI'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'SnapBuild',
    href: 'https://snap-build.vercel.app/',
    description:
      'A structured project planning tool helping teams define goals, features, and milestones using scalable frontend architecture.',
    tags: ['Next.js', 'React', 'TypeScript', 'Structured Systems'],
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
      'An AI-powered web application that analyzes job descriptions and generates tailored, editable content using structured frontend logic.',
    tags: ['Next.js', 'React', 'TypeScript', 'AI'],
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
      'A performance-focused PDF reading companion built with Next.js and TypeScript featuring offline support and dynamic state management.',
    tags: ['Next.js', 'React', 'TypeScript', 'PWA'],
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
    title: 'Query.Design',
    description:
      'A developer-focused application transforming natural language into structured database queries using dynamic UI logic.',
    tags: ['Next.js', 'React', 'TypeScript', 'AI Querying'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'TypeScript Frontend Engineer',
    tagline:
      'Building high-performance, interactive frontend systems with structured architecture and dynamic UI logic.',
  },
  about: { description: aboutDescription },
  skills: {
    items: skills,
    categories: {
      Core: ['TypeScript', 'JavaScript', 'React.js', 'Next.js'],
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
      'Interactive and performance-driven frontend applications emphasizing structured logic and dynamic UI behavior.',
  },
  contact: {
    links: navs,
    description:
      'Open to interactive frontend roles and performance-focused development environments.',
    copyright: 'Yonatane Mekete',
  },
};
