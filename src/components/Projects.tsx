import React from 'react';
import { BlurFade } from './ui/blur-fade';
import { ProjectCard } from './ProjectCard';
import { TechnicalSection } from './ui/technical-section';

interface ProjectContent {
  items: Array<{
    title: string;
    href?: string;
    description: string;
    tags: readonly string[];
    link?: string;
    image: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  }>;
  description: string;
}

interface Props {
  content: ProjectContent;
}

const Projects = ({ content }: Props) => {
  return (
    <TechnicalSection id="projects" className="py-20" delay={0.08}>
      <BlurFade delay={0.08}>
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 border border-white/10 px-4 py-1">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase">
            Projects
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto leading-relaxed text-sm uppercase tracking-wide">
            {content.description}
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {content.items.map((project, id) => (
          <BlurFade 
            key={project.title} 
            delay={0.09 + id * 0.01}
            className={id === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              links={project.links}
              className={id === 0 ? "min-h-[400px]" : "min-h-[350px]"}
            />
          </BlurFade>
        ))}
      </div>
    </TechnicalSection>
  );
};

export default Projects;
