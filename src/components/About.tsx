import React from 'react';
import { BlurFade } from './ui/blur-fade';
import MarkdownRenderer from './MarkdownRenderer';
import { content } from '@/data/data';
import { TechnicalSection } from './ui/technical-section';

interface Props {
  delay: number;
}

const About = ({ delay }: Props) => {
  return (
    <TechnicalSection id="about" className="py-20" delay={delay * 2}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <BlurFade delay={delay * 2.25}>
            <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 border border-white/10 px-4 py-1 inline-block">
              Introduction
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase mt-6">
              About
            </h2>
          </BlurFade>
        </div>
        
        <div className="lg:col-span-8">
          <BlurFade delay={delay * 2.5}>
            <div className="relative p-8 bg-zinc-900/40 border border-white/10">
              <div className="absolute -top-2 -left-2 text-zinc-500 text-[10px] font-mono">01</div>
<MarkdownRenderer
                content={content.about.description}
                className="text-zinc-400 leading-relaxed text-sm uppercase tracking-wide prose-zinc prose-invert"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </TechnicalSection>
  );
};

export default About;
