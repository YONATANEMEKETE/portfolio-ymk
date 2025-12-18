import React from 'react';
import { BlurFade } from './ui/blur-fade';

interface Props {
  delay: number;
}

const Contact = ({ delay }: Props) => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={delay * 5.5}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-150 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Feel free to reach out via email, Linkedin, or any
              of the social media platforms below. I&apos;m always open to
              discussing new projects, creative ideas, or opportunities to be
              part of your visions.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Contact;
