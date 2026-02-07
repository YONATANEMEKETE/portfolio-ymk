"use client";

import { cn } from "@/lib/utils";
import { Plus } from "./plus";
import { motion } from "motion/react";

interface TechnicalSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  showCorners?: boolean;
  delay?: number;
}

export function TechnicalSection({
  children,
  className,
  showCorners = true,
  delay = 0,
  ...props
}: TechnicalSectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 px-8 sm:px-12",
        className
      )}
      {...props}
    >
      {/* Animated border lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-white/10 origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-right"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 bottom-0 left-0 w-px bg-white/10 origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 bottom-0 right-0 w-px bg-white/10 origin-bottom"
      />

      {showCorners && (
        <>
          <Plus className="-top-2 -left-2" delay={delay + 0.4} />
          <Plus className="-top-2 -right-2" delay={delay + 0.5} />
          <Plus className="-bottom-2 -left-2" delay={delay + 0.6} />
          <Plus className="-bottom-2 -right-2" delay={delay + 0.7} />
        </>
      )}
      
      {children}
    </section>
  );
}
