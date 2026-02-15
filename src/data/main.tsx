import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { GithubIcon, Globe, LinkedinIcon } from 'lucide-react';

export type IconProps = React.HTMLAttributes<SVGElement>;

// Product-Focused Portfolio

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

export const aboutDescription = `I build web applications with a strong product focus: turning ideas into tangible, user-friendly experiences that drive real business value.

I specialize in **React** and **Next.js**, but my emphasis is on solving problems for users and teams, designing scalable interfaces, and making technical decisions that align with product goals.

My toolkit includes **TypeScript**, **Tailwind CSS**, modern state management, and product-oriented workflows. I thrive when collaborating with designers, product managers, and backend engineers to ship solutions that users love.

Outside of coding, I explore product trends, experiment with new tools, and optimize processes that help teams deliver faster and smarter.`;

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
      'Led frontend product decisions for a large-scale web application using **Next.js**, **Tailwind CSS**, **Shadcn UI**, and **Redux Toolkit**',
      'Designed and implemented scalable, reusable **React** components aligned with product goals',
      'Collaborated with product managers to translate feature ideas into actionable frontend solutions',
      'Implemented micro-interactions and animations to enhance user engagement and retention',
      'Optimized frontend performance to ensure smooth product experience across devices',
      'Mentored junior developers on product-focused frontend design and best practices',
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
      'Built a multilingual government portal with **React** and **Next.js**, focused on user-centric product design',
      'Ensured accessibility and responsiveness to improve usability for diverse audiences',
      'Integrated dynamic content features using **RESTful APIs** to enhance user experience',
      'Collaborated closely with designers and PMs to refine product features based on user feedback',
      'Implemented interactive UI elements to increase engagement and comprehension',
      'Maintained consistency and quality across multiple product releases',
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
      'Delivered product-focused web applications for SaaS clients using **React** and **Next.js**',
      'Transformed client requirements into user-friendly interfaces and scalable frontend architecture',
      'Integrated **REST APIs** and managed state with **React Hooks**, **React Hook Form**, and **Zod**',
      'Built clean, conversion-oriented interfaces with **Tailwind CSS** and product-focused animations',
      'Collaborated with clients on product strategy and technical decisions',
      'Managed end-to-end development cycles independently, from ideation to delivery',
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
    title: 'Noted',
    href: 'https://noteed-1.vercel.app',
    description:
      'A product-focused PDF reading companion built with **Next.js** and **React**. Designed to help students and researchers capture insights, highlights, and notes contextually for better productivity and decision-making.',
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
      'An AI-powered product that tailors resumes to job descriptions, highlighting key gaps and actionable improvements. Built with **React** and **Next.js** focusing on speed, UX, and practical value for job seekers.',
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
      'A product management tool for frontend developers, providing a roadmap to plan, track, and ship projects efficiently. Built with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**.',
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
      'A conversion-focused tool designed to help businesses boost sales through smart product popups and insights, built with **React** and **Next.js**.',
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
      'A developer product that lets users query their databases naturally and quickly, emphasizing usability, productivity, and actionable data insights.',
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
    title: 'Product-Focused React Developer',
    tagline:
      'Building web experiences that users love and products that scale.',
  },
  about: { description: aboutDescription },
  skills: {
    items: skills,
    categories: {
      Core: ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
      Styling: ['Tailwind.css', 'Sass', 'Shadcn UI', 'Framer Motion', 'GSAP'],
      State: ['Zustand', 'Redux Toolkit', 'Jotai', 'TanStack Query'],
      APIs: ['RESTful APIs', 'GraphQL', 'React Hook Form', 'Zod'],
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
      'A collection of production-ready, product-oriented applications built with React and Next.js',
  },
  contact: {
    links: navs,
    description:
      'Reach out via email, LinkedIn, or Telegram to discuss product-focused projects or collaborations.',
    copyright: 'Yonatane Mekete',
  },
};
