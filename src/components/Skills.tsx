import React from 'react';
import { BlurFade } from './ui/blur-fade';
import { TechnicalSection } from './ui/technical-section';
import { Plus } from './ui/plus';

interface SkillsContent {
  items: string[];
  categories: Record<string, string[]>;
}

interface Props {
  content: SkillsContent;
}

const SkillCell = ({ skill, delay, index }: { skill: string; delay: number; index: number }) => (
  <BlurFade delay={delay * (3 + index * 0.05)}>
    <div className="group relative flex items-center justify-center px-4 py-3 bg-zinc-900/40 border border-white/5 hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-300">
      <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
        {skill}
      </span>
    </div>
  </BlurFade>
);

const SkillCategory = ({ title, items, baseDelay, skillsItems }: { title: string; items: string[]; baseDelay: number; skillsItems: string[] }) => {
  const categorySkills = items.filter(item => skillsItems.includes(item));
  
  return (
      <BlurFade delay={baseDelay}>
      <div className="relative p-5 bg-zinc-900/20 border border-white/10 h-full">
        <Plus className="-top-2 -left-2 opacity-40" delay={baseDelay + 0.1} />
        <Plus className="-top-2 -right-2 opacity-40" delay={baseDelay + 0.2} />
        <Plus className="-bottom-2 -left-2 opacity-40" delay={baseDelay + 0.3} />
        <Plus className="-bottom-2 -right-2 opacity-40" delay={baseDelay + 0.4} />
        
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

const Skills = ({ content }: Props) => {
  const categories = Object.entries(content.categories);
  
  return (
    <TechnicalSection id="skills" className="py-20" delay={0.1}>
      <BlurFade delay={0.1}>
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
            baseDelay={0.11 + index * 0.01}
            skillsItems={content.items}
          />
        ))}
      </div>
    </TechnicalSection>
  );
};

export default Skills;
