import React from 'react';
import { BlurFade } from './ui/blur-fade';

const About = () => {
  return (
    <section id="about">
      <BlurFade delay={0.25}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={0.27}>
        <p className="text-justify">
          a dedicated and growth-driven{' '}
          <span className="text-primary font-semibold">Frontend Developer</span>{' '}
          with a sharp eye for detail and a passion for building elegant,
          high-performing web interfaces. I specialize in React.js and Next.js,
          crafting responsive, scalable, and accessible web applications that
          prioritize both user experience and performance.
        </p>
      </BlurFade>
    </section>
  );
};

export default About;
