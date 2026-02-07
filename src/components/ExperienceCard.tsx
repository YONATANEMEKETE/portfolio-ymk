import { BlurFade } from './ui/blur-fade';
import { Plus } from './ui/plus';
import Link from 'next/link';
import MarkdownRenderer from './MarkdownRenderer';
import Image from 'next/image';

interface Props {
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

export function ExperienceCard({
  title,
  bulletPoints,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <div className="relative p-6 bg-zinc-900/40 border border-white/10 hover:bg-zinc-900/60 transition-all duration-500 group">
      <Plus className="-top-2 -left-2 opacity-40 group-hover:opacity-100 transition-opacity" />
      <Plus className="-top-2 -right-2 opacity-40 group-hover:opacity-100 transition-opacity" />
      <Plus className="-bottom-2 -left-2 opacity-40 group-hover:opacity-100 transition-opacity" />
      <Plus className="-bottom-2 -right-2 opacity-40 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col sm:flex-row gap-5">
        {image && (
          <div className="relative shrink-0 w-14 h-14 bg-zinc-800 border border-white/10 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}

        <div className="flex-1 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-base font-bold tracking-wider text-white uppercase">
                {title}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  {dates}
                </span>
                <span className="text-zinc-600">//</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  {location}
                </span>
              </div>
            </div>
          </div>

          <ul className="space-y-2">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                <span className="text-zinc-600 mt-1.5 text-[10px]">▸</span>
                <MarkdownRenderer content={point} className="flex-1" />
              </li>
            ))}
          </ul>

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 border border-white/10 px-2 py-1 bg-white/5 hover:bg-white/10"
                >
                  <span className="scale-75">{link.icon}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest">{link.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
