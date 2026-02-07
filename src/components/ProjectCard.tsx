import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import MarkdownRenderer from './MarkdownRenderer';
import { Plus } from './ui/plus';

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex flex-col bg-zinc-900/40 border border-white/10 transition-all duration-500 hover:bg-zinc-900/60 hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] h-full overflow-hidden",
        className
      )}
    >
      <Plus className="-top-2 -left-2 opacity-40 group-hover:opacity-100 transition-opacity" />
      <Plus className="-top-2 -right-2 opacity-40 group-hover:opacity-100 transition-opacity" />
      <Plus className="-bottom-2 -left-2 opacity-40 group-hover:opacity-100 transition-opacity" />
      <Plus className="-bottom-2 -right-2 opacity-40 group-hover:opacity-100 transition-opacity" />

      <Link
        href={href || '#'}
        target="_blank"
        className="block cursor-pointer overflow-hidden border-b border-white/5"
      >
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
          </div>
        )}
      </Link>
      
      <div className="flex flex-col flex-1 p-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-wider text-white uppercase">{title}</h3>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
              {tags[0]}
            </div>
          </div>
          
          <MarkdownRenderer
            content={description}
            className="prose max-w-full text-pretty text-xs text-zinc-400 leading-relaxed text-justify line-clamp-3"
          />
        </div>

        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {tags?.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 border border-white/5 px-2 py-0.5 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-3 pt-2">
            {links?.map((link, idx) => (
              <Link 
                href={link?.href} 
                key={idx} 
                target="_blank" 
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span className="scale-75">{link.icon}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest">{link.type}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

