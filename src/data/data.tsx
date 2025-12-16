import { Github, Gmail, LinkedIn, Telegram } from '@/components/icons/icons';
import { link } from 'fs';
import { HomeIcon } from 'lucide-react';

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
