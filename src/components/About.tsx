import React from 'react';
import { BlurFade } from './ui/blur-fade';

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
          <p className="text-justify">
            <span className="font-semibold"> Senior Frontend Developer</span>{' '}
            specializing in building scalable, high-performance web applications
            with React, Next.js, and modern UI systems. Strong focus on clean
            architecture, accessibility, and pixel-perfect execution.
            Experienced in collaborating closely with designers and backend
            teams to deliver seamless, production-ready experiences. Adept at
            translating complex requirements into intuitive interfaces,
            optimizing performance, and applying thoughtful animations to
            enhance usability. Committed to continuous improvement, technical
            excellence, and building products that drive real business value.
          </p>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
