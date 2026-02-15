import React from 'react';
import { BlurFade } from './ui/blur-fade';
import Image from 'next/image';
import profile from '../../public/profile-updated.jpg';
import { TechnicalSection } from './ui/technical-section';
import { content } from '@/data/data';

interface Props {
  delay: number;
}

const Hero = ({ delay }: Props) => {
  return (
    <TechnicalSection className="mt-12" delay={delay * 0.5}>
      <div className="flex flex-col items-center gap-y-10 w-full">
        <BlurFade delay={delay}>
          <div className="relative min-[500px]:size-32 size-28 rounded-none overflow-clip cursor-pointer border border-white/10 p-2 bg-zinc-900/50 backdrop-blur-sm">
             <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={profile}
                  alt="profile"
                  className="object-cover object-center"
                  fill
                />
             </div>
          </div>
        </BlurFade>

        <div className="space-y-6 text-center mx-auto">
          <BlurFade delay={delay * 1.5}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-widest text-white uppercase">
              {content.hero.name}
            </h1>
          </BlurFade>
          <BlurFade delay={delay * 2}>
            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto leading-relaxed uppercase tracking-wider">
              {content.hero.title} <span className="text-zinc-600 px-2">//</span> 
              {content.hero.tagline}
            </p>
          </BlurFade>
        </div>
      </div>
    </TechnicalSection>
  );
};

export default Hero;

