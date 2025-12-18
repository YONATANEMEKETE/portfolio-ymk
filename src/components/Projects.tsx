import React from 'react';
import { BlurFade } from './ui/blur-fade';
import SectionBadge from './SectionBadge';
import { projects } from '@/data/data';
import { ProjectCard } from './ProjectCard';

interface Props {
  delay: number;
}

const Projects = ({ delay }: Props) => {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={delay * 4.5}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <SectionBadge text="Projects" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto">
          {projects.map((project, id) => (
            <BlurFade key={project.title} delay={delay * (4.75 + id * 0.1)}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
