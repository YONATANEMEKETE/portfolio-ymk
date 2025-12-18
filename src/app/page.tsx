import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const blurFace_delay = 0.04;

export default function Home() {
  return (
    <main className="w-full min-h-dvh flex flex-col space-y-10 pb-20">
      <Hero delay={blurFace_delay} />
      <About delay={blurFace_delay} />
      <Skills delay={blurFace_delay} />
      <Experience delay={blurFace_delay} />
      <Projects delay={blurFace_delay} />
    </main>
  );
}
