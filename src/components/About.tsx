import React from 'react';
import { BlurFade } from './ui/blur-fade';

interface Props {
  delay: number;
}

const About = ({ delay }: Props) => {
  return (
    <section id="about">
      <BlurFade delay={delay * 2.5}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={delay * 2.75}>
        <p className="text-justify">
          A passionate {''}
          <span className="font-bold underline text-primary">
            Frontend Developer
          </span>{' '}
          {''}
          with a strong focus on building modern, responsive, and user-friendly
          web applications using technologies like React.js, Next.js, Tailwind
          CSS, and Shadcn UI. Experienced in delivering pixel-perfect UIs,
          integrating with backend systems, and adding motion through
          animations. Continuously learning and iterating to deliver products
          that delight users and meet business goals.
        </p>
      </BlurFade>
    </section>
  );
};

export default About;
