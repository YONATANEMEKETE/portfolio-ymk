import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type NavProps = {
  text: string;
  link: string;
  Icon: any;
};

const Nav = ({ text, Icon, link }: NavProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          className="group relative flex items-center justify-center p-3 rounded-full bg-transparent text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
        >
          <Icon
            size={20}
            className="text-muted-foreground group-hover:text-secondary-foreground size-6"
          />
        </Link>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default Nav;
