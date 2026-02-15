import React from 'react';
import { BlurFade } from './ui/blur-fade';
import { ExperienceCard } from './ExperienceCard';
import { TechnicalSection } from './ui/technical-section';

interface ExperienceContent {
  items: Array<{
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
  }>;
}

interface Props {
  content: ExperienceContent;
}

const Experience = ({ content }: Props) => {
  return (
    <TechnicalSection id="experience" className="py-20" delay={0.08}>
      <BlurFade delay={0.08}>
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 border border-white/10 px-4 py-1">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase">
            Experience
          </h2>
        </div>
      </BlurFade>

      <div className="space-y-4">
        {content.items.map((exp, index) => (
          <BlurFade key={index} delay={0.09 + index * 0.01}>
            <ExperienceCard
              title={exp.title}
              bulletPoints={exp.bulletPoints}
              dates={exp.dates}
              location={exp.location}
              image={exp.image}
              links={exp.links}
            />
          </BlurFade>
        ))}
      </div>
    </TechnicalSection>
  );
};

export default Experience;
