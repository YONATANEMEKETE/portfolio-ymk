import React from 'react';
import { BlurFade } from './ui/blur-fade';
import { TechnicalSection } from './ui/technical-section';
import { Plus } from './ui/plus';
import { skills } from '@/data/data';

interface Props {
  delay: number;
}

const skillCategories = {
  'Core': ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
  'Styling': ['Tailwind.css', 'Sass', 'Shadcn UI', 'Framer Motion', 'GSAP'],
  'State': ['Zustand', 'Redux Toolkit', 'Jotai', 'TanStack Query'],
  'APIs': ['RESTful APIs', 'GraphQL', 'React Hook Form', 'Zod'],
  'Testing': ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'Playwright'],
  'Tools': ['Vite', 'Vercel', 'Git', 'GitHub', 'Figma'],
};

const SkillCell = ({ skill, delay, index }: { skill: string; delay: number; index: number }) => (
  <BlurFade delay={delay * (3 + index * 0.05)}>
    <div className="group relative flex items-center justify-center px-4 py-3 bg-zinc-900/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300">
      <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
        {skill}
      </span>
    </div>
  </BlurFade>
);

const SkillCategory = ({ title, items, baseDelay }: { title: string; items: string[]; baseDelay: number }) => {
  const categorySkills = items.filter(item => skills.includes(item));
  
  return (
    <BlurFade delay={baseDelay}>
      <div className="relative p-5 bg-zinc-900/20 border border-white/10 h-full">
        <Plus className="-top-2 -left-2 opacity-40" />
        <Plus className="-top-2 -right-2 opacity-40" />
        <Plus className="-bottom-2 -left-2 opacity-40" />
        <Plus className="-bottom-2 -right-2 opacity-40" />
        
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">{title}</h3>
          <span className="text-[9px] font-mono text-zinc-600">{categorySkills.length} items</span>
        </div>
        
        <div className="grid grid-cols-2 gap-1.5">
          {categorySkills.map((skill, id) => (
            <SkillCell key={skill} skill={skill} delay={baseDelay} index={id} />
          ))}
        </div>
      </div>
    </BlurFade>
  );
};

const Skills = ({ delay }: Props) => {
  const categories = Object.entries(skillCategories);
  
  return (
    <TechnicalSection id="skills" className="py-20">
      <BlurFade delay={delay * 2.5}>
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 border border-white/10 px-4 py-1">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase">
            Skills
          </h2>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(([title, items], index) => (
          <SkillCategory 
            key={title} 
            title={title} 
            items={items} 
            baseDelay={delay * (2.75 + index * 0.1)} 
          />
        ))}
      </div>
    </TechnicalSection>
  );
};

export default Skills;
