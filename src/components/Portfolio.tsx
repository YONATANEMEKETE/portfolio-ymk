import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

interface Content {
  hero: {
    name: string;
    title: string;
    tagline: string;
  };
  about: {
    description: string;
  };
  skills: {
    items: string[];
    categories: Record<string, string[]>;
  };
  experience: {
    items: Array<{
      title: string;
      bulletPoints: string[];
      dates: string;
      location: string;
      image?: string;
      links?: readonly {
        icon: React.ReactNode;
        title: string;
        href: string;
      }[];
    }>;
  };
  projects: {
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
  };
  contact: {
    links: Array<{
      icon: React.ComponentType<{ className?: string }>;
      link: string;
      tooltip: string;
    }>;
    description: string;
    copyright: string;
  };
}

interface Props {
  content: Content;
}

const Portfolio = ({ content }: Props) => {
  return (
    <>
      <Hero content={content.hero} />
      <About content={content.about} />
      <Skills content={content.skills} />
      <Experience content={content.experience} />
      <Projects content={content.projects} />
      <Contact content={content.contact} />
    </>
  );
};

export default Portfolio;
