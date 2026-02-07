import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const blurFace_delay = 0.04;

export default function Home() {
  return (
    <>
      <Hero delay={blurFace_delay} />
      <About delay={blurFace_delay} />
      <Skills delay={blurFace_delay} />
      <Experience delay={blurFace_delay} />
      <Projects delay={blurFace_delay} />
      <Contact delay={blurFace_delay} />
    </>
  );
}
