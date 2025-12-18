import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { link } from 'fs';
import { GithubIcon, Globe, HomeIcon, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

export const navs = [
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/ymkhanh/',
    tooltip: 'LinkedIn',
  },
  {
    icon: Github,
    link: 'https://github.com/ymkhanh',
    tooltip: 'GitHub',
  },
  {
    icon: Gmail,
    link: 'mailto:ymkhanh@gmail.com',
    tooltip: 'Gmail',
  },
  {
    icon: Telegram,
    link: 'https://t.me/ymkhanh',
    tooltip: 'Telegram',
  },
];

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
      'Led frontend development of a large-scale production web application using Next.js, Tailwind CSS, Shadcn UI, and Redux Toolkit',
      'Built complex, data-driven user interfaces with robust client-side logic, API integrations, and state management',
      'Translated design handoffs into scalable, reusable component architecture',
      'Implemented animations and micro-interactions to enhance UX while maintaining accessibility and responsiveness',
      'Collaborated closely with backend engineers and designers across the entire product lifecycle',
      'Optimized performance and code quality to ensure maintainability and production readiness',
    ],
    dates: 'Mar 2025 - July 2025',
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
      'Developed a multilingual government web portal to communicate ministerial activities to the public',
      'Built responsive, accessible UI components with a strong focus on usability and consistency',
      'Integrated frontend features with backend services to support dynamic, real-time content',
      'Implemented animated and interactive UI elements to improve user engagement',
      'Worked closely with designers and engineers to ensure accurate visual implementation and UX quality',
      'Ensured cross-device and cross-language compatibility',
    ],
    dates: 'Nov 2024 – Feb 2025',
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
      'Delivered end-to-end frontend solutions for SaaS and web applications using React and Next.js',
      'Designed and implemented reusable UI components and scalable frontend architectures',
      'Integrated REST APIs and handled client-side state, forms, and user flows',
      'Built conversion-focused interfaces with clean layouts and intuitive animations',
      'Collaborated directly with clients to translate business requirements into technical solutions',
      'Managed projects independently, from planning and development to delivery and iteration',
    ],
    dates: 'Nov 2023 – Present',
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
  'Motion',
  'Zustand',
  'Redux Toolkit',
  'RESTful APIs',
  'GraphQL',
  'Vercel',
  'Git',
  'GitHub',
  'Jest',
  'Cypress',
  'Figma',
  'React Hook Form',
  'Jotai',
  'TanStack Query',
  'Zod',
  'Progressive Web Apps (PWA)',
];

export const projects = [
  {
    title: 'Resume Tailor AI',
    href: 'https://resume-tailor-zeta.vercel.app',
    description:
      'An AI-powered resume tailoring web app that analyzes job descriptions, identifies gaps in a user’s resume, and generates a tailored, editable version to improve job application success. Built with a chat-based UX focused on speed, clarity, and real-world job hunting workflows.',
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
    ] as const,
    link: 'https://resume-tailor-zeta.vercel.app',
    image: '/og-image.png',
    links: [
      {
        icon: <Globe />, // your icon component
        type: 'Live App',
        href: 'https://resume-tailor-zeta.vercel.app',
      },
      {
        icon: <GithubIcon />, // your icon component
        type: 'GitHub',
        href: 'https://github.com/YONATANEMEKETE/ResumeTailor',
      },
    ],
  },
];
