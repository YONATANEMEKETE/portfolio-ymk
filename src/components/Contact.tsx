import React from 'react';
import { BlurFade } from './ui/blur-fade';
import { TechnicalSection } from './ui/technical-section';
import Link from 'next/link';
import { Plus } from './ui/plus';

interface ContactContent {
  links: Array<{
    icon: React.ComponentType<{ className?: string }>;
    link: string;
    tooltip: string;
  }>;
  description: string;
  copyright: string;
}

interface Props {
  content: ContactContent;
}

const Contact = ({ content }: Props) => {
  return (
    <TechnicalSection id="contact" className="py-20 mb-0" delay={0.08}>
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <BlurFade delay={0.08}>
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 border border-white/10 px-4 py-1">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase mt-6">
            Contact
          </h2>
        </BlurFade>

        <BlurFade delay={0.09}>
          <p className="max-w-md mx-auto text-zinc-400 text-sm leading-relaxed uppercase tracking-wide">
            {content.description}
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="relative p-8 bg-zinc-900/40 border border-white/10 mt-4">
            <Plus className="-top-2 -left-2 opacity-40" delay={0.104} />
            <Plus className="-top-2 -right-2 opacity-40" delay={0.108} />
            <Plus className="-bottom-2 -left-2 opacity-40" delay={0.112} />
            <Plus className="-bottom-2 -right-2 opacity-40" delay={0.116} />
            
            <div className="flex flex-wrap justify-center gap-4">
              {content.links.map((nav, idx) => {
                const Icon = nav.icon;
                return (
                  <Link
                    key={idx}
                    href={nav.link}
                    target="_blank"
                    className="group flex flex-col items-center gap-2 p-4 min-w-[100px] hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                  >
                    <span className="text-zinc-400 group-hover:text-white transition-colors w-6 h-6">
                      <Icon className="w-full h-full" />
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
                      {nav.tooltip}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.11}>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mt-12">
            © {new Date().getFullYear()} {content.copyright} — Built with React & Next.js
          </p>
        </BlurFade>
      </div>
    </TechnicalSection>
  );
};

export default Contact;
