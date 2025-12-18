import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { link } from 'fs';
import { GithubIcon, Globe, HomeIcon } from 'lucide-react';

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
  description: string;
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
    description:
      'Leading frontend development for a large-scale web application using Next.js, Tailwind CSS, Shadcn, Redux Toolkit, and more. Built complex user interfaces, implemented client-side logic, API integration, state management, and animations. Worked across the full product lifecycle, from design handoff to performance optimization.',
    dates: 'Mar 2025 - July 2025',
    location: 'Remote',
    image: '/zulu.jpg',
    links: [
      {
        icon: <LinkedIn />,
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/zulu-software/posts/?feedView=all',
      },
    ],
  },
  {
    title: 'Frontend Developer – Ablaze Labs',
    description:
      'Built a multilingual, interactive government web portal to communicate ministerial activities. Focused on UI development, backend integration, and delivering animated, accessible interfaces. Collaborated with designers and engineers to ensure visual consistency and usability.',
    dates: 'Nov 2024 – Feb 2025',
    location: 'Addis Ababa',
    image: '/ablaze.jpg',
    links: [
      {
        icon: <LinkedIn />,
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/ablazelabs/posts/?feedView=all',
      },
    ],
  },
  {
    title: 'Frontend Developer (Freelance)',
    description:
      'Worked on multiple SaaS applications, delivering end-to-end frontend solutions—from building UI to integrating backend APIs. Delivered conversion-focused user experiences with clean design and intuitive animations. Collaborated with clients to translate business requirements into high-impact features.',
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
        href: 'https://github.com/YOUR_USERNAME/resume-tailor-ai',
      },
    ],
  },
];
