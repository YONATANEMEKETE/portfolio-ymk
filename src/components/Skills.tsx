import React from 'react';
import { BlurFade } from './ui/blur-fade';
import { skills } from '@/data/data';
import { Badge } from './ui/badge';

interface Props {
  delay: number;
}

const Skills = ({ delay }: Props) => {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-8">
        <BlurFade delay={delay * 3.75}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, id) => (
            <BlurFade key={skill} delay={delay * (3.75 + id * 0.05)}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
