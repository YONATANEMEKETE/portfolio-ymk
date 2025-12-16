'use client';

import React from 'react';
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Dock, DockIcon } from '@/components/ui/dock';
import { Github, Gmail, LinkedIn, Telegram } from './icons/icons';
export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [{ href: '#', icon: HomeIcon, label: 'Home' }],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: '#',
        icon: Github,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: '#',
        icon: LinkedIn,
      },
      Telegram: {
        name: 'Telegram',
        url: '#',
        icon: Telegram,
      },
      Email: {
        name: 'Email',
        url: '#',
        icon: Gmail,
      },
    },
  },
};

export function Navigation() {
  return (
    <div className="fixed  bottom-0 inset-x-0 py-1">
      <TooltipProvider>
        <Dock direction="middle" className="mb-2">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full'
                    )}
                  >
                    <item.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full'
                    )}
                  >
                    <social.icon className="size-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
