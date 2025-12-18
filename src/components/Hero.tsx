import React from 'react';
import { BlurFade } from './ui/blur-fade';
import Image from 'next/image';
import profile from '../../public/profile-updated.jpg';

interface Props {
  delay: number;
}

const Hero = ({ delay }: Props) => {
  return (
    <section id="hero" className="mx-auto w-full max-w-2xl space-y-8 pt-20">
      <div className="flex flex-col items-center gap-y-6 w-full">
        <BlurFade delay={delay}>
          <div className="relative min-[500px]:size-28 size-24 rounded-full overflow-clip cursor-pointer ring-2 ring-text ring-offset-4 ring-offset-bg">
            <Image
              src={profile}
              alt="profile"
              className="rounded-full object-cover object-center"
              fill
            />
          </div>
        </BlurFade>

        <div className="space-y-2 text-center mx-auto">
          <BlurFade delay={delay * 1.5}>
            <h1 className="min-[500px]:text-3xl text-2xl text-text font-heading font-bold">
              YONATANE.M
            </h1>
          </BlurFade>
          <BlurFade delay={delay * 2}>
            <p className="min-[500px]:text-base text-sm text-textlighter font-medium min-[500px]:max-w-100 max-w-75 mx-auto">
              Senior Frontend Developer focused on performance, scalability, and
              clean frontend architecture.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
