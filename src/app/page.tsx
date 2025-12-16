import About from '@/components/About';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full min-h-dvh flex flex-col space-y-10">
      <Hero />
      <About />
    </main>
  );
}
