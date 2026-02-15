import React from 'react';
import { BlurFade } from './ui/blur-fade';
import Image from 'next/image';
import profile from '../../public/profile-updated.jpg';
import { TechnicalSection } from './ui/technical-section';

interface HeroContent {
  name: string;
  title: string;
  tagline: string;
}

interface Props {
  content: HeroContent;
}

const Hero = ({ content }: Props) => {
  return (
    <TechnicalSection className="mt-12" delay={0.02}>
      <div className="flex flex-col items-center gap-y-10 w-full">
        <BlurFade delay={0}>
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
          <BlurFade delay={0.06}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-widest text-white uppercase">
              {content.name}
            </h1>
          </BlurFade>
          <BlurFade delay={0.08}>
            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto leading-relaxed uppercase tracking-wider">
              {content.title} <span className="text-zinc-600 px-2">//</span> 
              {content.tagline}
            </p>
          </BlurFade>
        </div>
      </div>
    </TechnicalSection>
  );
};

export default Hero;

