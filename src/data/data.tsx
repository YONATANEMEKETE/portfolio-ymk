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
  {
    icon: Gmail,
    link: 'mailto:yonatanemekete22@gmail.com',
    tooltip: 'Gmail',
  },
  {
    icon: Telegram,
    link: 'https://t.me/yonatanemekete',
    tooltip: 'Telegram',
  },
];

export const aboutDescription = `I build web applications that feel fast, look clean, and scale smoothly.

As a frontend developer, I spend most of my time with **React** and **Next.js** — turning complex requirements into simple, intuitive interfaces. I care about the details: performance, accessibility, and code that won't haunt us six months later.

My toolkit includes **TypeScript**, **Tailwind CSS**, and modern state management. I enjoy the challenge of balancing design vision with technical constraints, and I work best when collaborating closely with designers and backend engineers.

When I'm not coding, I'm usually exploring new tools or refining workflows that help teams ship better products faster.`;

interface Experience {
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
      'Led frontend development of a large-scale production web application using **Next.js**, **Tailwind CSS**, **Shadcn UI**, and **Redux Toolkit**',
      'Built complex, data-driven user interfaces with robust **React** component architecture, API integrations, and **state management**',
      'Translated design handoffs into scalable, reusable **React** components following modern best practices',
      'Implemented animations and micro-interactions using **Motion** to enhance UX while maintaining accessibility and responsiveness',
      'Collaborated closely with backend engineers and designers across the entire product lifecycle',
      'Optimized **React** performance and code quality to ensure maintainability and production readiness',
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
      'Developed a multilingual government web portal using **React** and **Next.js** to communicate ministerial activities to the public',
      'Built responsive, accessible **React** components with a strong focus on usability and consistency',
      'Integrated frontend features with backend services using **RESTful APIs** to support dynamic, real-time content',
      'Implemented animated and interactive UI elements with **React** to improve user engagement',
      'Worked closely with designers and engineers to ensure accurate visual implementation and UX quality',
      'Ensured cross-device and cross-language compatibility using **React** best practices',
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
      'Delivered end-to-end frontend solutions for SaaS and web applications using **React** and **Next.js**',
      'Designed and implemented reusable **React** components and scalable frontend architectures',
      'Integrated **REST APIs** and handled client-side state using **React Hooks**, forms with **React Hook Form**, and validation with **Zod**',
      'Built conversion-focused interfaces with clean layouts, **Tailwind CSS**, and intuitive animations',
      'Collaborated directly with clients to translate business requirements into technical **React** solutions',
      'Managed projects independently, from planning and **React** development to delivery and iteration',
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
  'Tailwind.css',
  'Sass',
  'Shadcn UI',
  'Framer Motion',
  'GSAP',
  'Zustand',
  'Redux Toolkit',
  'RESTful APIs',
  'GraphQL',
  'Vercel',
  'Git',
  'GitHub',
  'Jest',
  'Vitest',
  'React Testing Library',
  'Cypress',
  'Playwright',
  'Figma',
  'React Hook Form',
  'Jotai',
  'TanStack Query',
  'Zod',
  'Vite',
  'Progressive Web Apps (PWA)',
];

interface Project {
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
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'A calm, context-first PDF reading companion built with **Next.js** and **React**. Noted keeps notes, quotes, and story insights directly attached to what you read, so ideas never lose their source. It supports contextual text highlighting, focus mode, offline reading via PWA, and seamless resume reading — designed for students, researchers, and deep readers.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'PWA',
      'Offline Support',
      'PDF Reader',
      'Productivity',
      'Reading Tools',
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
      "An AI-powered resume tailoring web app built with **React** and **Next.js** that analyzes job descriptions, identifies gaps in a user's resume, and generates a tailored, editable version to improve job application success. Built with a chat-based UX using **Vercel AI SDK** and **React** components focused on speed, clarity, and real-world job hunting workflows",
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Vercel AI SDK',
      'AI',
      'Resume Optimization',
      'ATS',
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
    title: 'SnapBuild',
    href: 'https://snap-build.vercel.app/',
    description:
      'A project management tool built with **React 19** and **Next.js 15** designed specifically for frontend developers. It provides a clear and organized roadmap to successfully build projects by streamlining planning, feature management, and execution using modern **React** patterns. Built with **TypeScript**, **Tailwind CSS**, and **Shadcn UI** to ensure every step of the process is structured and manageable.',
    tags: [
      'Next.js 15',
      'React 19',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'Pinata w3',
      'React Dropzone',
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
      'A conversion-boosting tool built with **React 19** and **Next.js 15** that helps business owners increase sales by displaying smart popups on their websites. Features a dashboard built with **React** components, **React Hook Form** for form handling, **Zod** validation, and **recharts** for analytics visualization.',
    tags: [
      'Next.js 15',
      'React 19',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'recharts',
      'React Hook Form',
      'zod',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Query.Design',
    description:
      'A developer tool built with **React 19** and **Next.js 15** that allows users to communicate with their database using natural language. Features **React** components that transform plain English into structured queries, with **React Hook Form**, **Zod** validation, and **chart.js** for data visualization—making data access faster and more intuitive.',
    tags: [
      'Next.js 15',
      'React 19',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'chart.js',
      'React Hook Form',
      'zod',
    ],
    image:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
];

export const content = {
  hero: {
    name: 'YONATANE.M',
    title: 'Senior React Frontend Developer',
    tagline: 'Building fast, scalable, and production-ready web applications.',
  },
  about: {
    description: aboutDescription,
  },
  skills: {
    items: skills,
    categories: {
      'Core': ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
      'Styling': ['Tailwind.css', 'Sass', 'Shadcn UI', 'Framer Motion', 'GSAP'],
      'State': ['Zustand', 'Redux Toolkit', 'Jotai', 'TanStack Query'],
      'APIs': ['RESTful APIs', 'GraphQL', 'React Hook Form', 'Zod'],
      'Testing': ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright'],
      'Tools': ['Vite', 'Vercel', 'Git', 'GitHub', 'Figma'],
    },
  },
  experience: {
    items: experiences,
  },
  projects: {
    items: projects,
    description: 'A collection of production-ready applications built with React and Next.js',
  },
  contact: {
    links: navs,
    description: 'Want to chat? Feel free to reach out via email, Linkedin, or any of the social media platforms below.',
    copyright: 'Yonatane Mekete',
  },
};
