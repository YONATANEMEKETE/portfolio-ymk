import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// AI Product Engineer Portfolio

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

export const aboutDescription = `AI-focused Product Engineer building intelligent web applications with modern frontend architecture.

I specialize in integrating LLM workflows into real-world products using **Next.js** and **React**. My work focuses on transforming AI capabilities into usable, reliable user experiences.

I design AI-powered interfaces that handle streaming responses, structured outputs, validation layers, and async workflows while balancing cost, latency, and usability.

My goal is to turn powerful AI models into production-ready product features that deliver measurable user value.`;

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer – Zulu Tech',
    bulletPoints: [
      'Integrated AI-powered workflows into frontend product features',
      'Designed structured UX for async and streaming AI responses',
      'Collaborated with backend teams to build scalable AI API pipelines',
      'Optimized dynamic rendering of model-generated data',
      'Led experimentation with modern AI SDK integrations',
      'Improved reliability of AI-driven features through structured validation',
    ],
    dates: 'Jan 2025 - Oct 2025',
    location: 'Remote',
    image: '/zulu.jpg',
  },
  {
    title: 'Frontend Developer – Ablaze Labs',
    bulletPoints: [
      'Built scalable frontend systems using **React** and **Next.js**',
      'Integrated API-driven dynamic content layers',
      'Ensured accessibility and performance in production deployments',
      'Collaborated across teams to ship user-focused digital platforms',
      'Maintained structured state management for dynamic interfaces',
      'Delivered production-ready releases under tight iteration cycles',
    ],
    dates: 'Oct 2024 – Jan 2025',
    location: 'Addis Ababa',
    image: '/ablaze.jpg',
  },
  {
    title: 'Frontend Developer (Freelance)',
    bulletPoints: [
      'Built AI-driven SaaS products integrating LLMs into production applications',
      'Implemented structured prompt workflows and output validation strategies',
      'Designed user interfaces optimized for AI-assisted productivity',
      'Balanced AI performance with UX responsiveness and cost-awareness',
      'Delivered AI features from prototype to production deployment',
      'Managed end-to-end delivery of intelligent web applications',
    ],
    dates: 'Feb 2023 – Present',
    location: 'Remote',
  },
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
  // PRIORITY: AI-first projects first
  {
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'AI-powered resume optimization system that analyzes job descriptions, identifies skill gaps, and generates tailored content using structured LLM workflows.',
    tags: ['Next.js', 'LLM Integration', 'Vercel AI SDK', 'TypeScript'],
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
    title: 'Query.Design',
    description:
      'Natural-language-to-database interface transforming user prompts into structured, queryable insights.',
    tags: ['Next.js', 'AI Querying', 'TypeScript'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
  {
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'Productivity-focused reading system with structured data workflows and scalable frontend patterns.',
    tags: ['Next.js', 'PWA', 'TypeScript'],
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
      'Structured planning system enabling efficient product execution and iterative feature development.',
    tags: ['Next.js', 'TypeScript', 'Shadcn'],
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
      'Conversion-optimization tool leveraging structured frontend analytics and product insights.',
    tags: ['Next.js', 'Recharts', 'TypeScript'],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'AI Product Engineer',
    tagline:
      'Building intelligent, AI-powered web applications with modern frontend systems.',
  },
  about: { description: aboutDescription },
  skills: {
    items: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vercel AI SDK',
      'Prompt Engineering',
      'LLM Integration',
      'Zod',
      'TanStack Query',
      'REST APIs',
      'Tailwind CSS',
      'Vercel',
      'Git',
      'Jest',
      'Vitest',
      'React Testing Library',
      'Cypress',
      'Playwright',
    ],
    categories: {
      Core: ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
      AI: ['Vercel AI SDK', 'Prompt Engineering', 'LLM Integration'],
      APIs: ['REST APIs', 'TanStack Query', 'Zod'],
      Tools: ['Vercel', 'Git', 'GitHub', 'Figma'],
      Testing: [
        'Jest',
        'Vitest',
        'React Testing Library',
        'Cypress',
        'Playwright',
      ],
    },
  },
  experience: { items: experiences },
  projects: {
    items: projects,
    description:
      'AI-powered applications transforming intelligent models into practical, production-ready product experiences.',
  },
  contact: {
    links: navs,
    description: 'Open to AI-focused frontend and product engineering roles.',
    copyright: 'Yonatane Mekete',
  },
};
