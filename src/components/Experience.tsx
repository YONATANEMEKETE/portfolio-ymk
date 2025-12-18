import React from 'react';
import { BlurFade } from './ui/blur-fade';
import SectionBadge from './SectionBadge';
import { experiences } from '@/data/data';
import { ExperienceCard } from './ExperienceCard';

interface Props {
  delay: number;
}

const Experience = ({ delay }: Props) => {
  return (
    <section id="experience">
      <div className="space-y-12 w-full flex flex-col items-center">
        <BlurFade delay={delay * 3.25}>
          <SectionBadge text="Experience" />
        </BlurFade>
        <BlurFade delay={delay * 3.5}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {experiences.map((exp, index) => (
              <BlurFade key={index} delay={delay * (3.5 + index * 0.1)}>
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  description={exp.description}
                  dates={exp.dates}
                  location={exp.location}
                  image={exp.image}
                  links={exp.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
};

export default Experience;
