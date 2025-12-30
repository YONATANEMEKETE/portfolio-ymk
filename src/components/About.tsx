import React from 'react';
import { BlurFade } from './ui/blur-fade';
import MarkdownRenderer from './MarkdownRenderer';
import { aboutDescription } from '@/data/data';

interface Props {
  delay: number;
}

const About = ({ delay }: Props) => {
  return (
    <section id="about">
      <div className="flex flex-col gap-y-8">
        <BlurFade delay={delay * 2.5}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={delay * 2.75}>
          <MarkdownRenderer
            content={aboutDescription}
            className="text-justify"
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
