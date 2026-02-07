"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface PlusProps {
  className?: string;
  delay?: number;
}

export function Plus({ className, delay = 0 }: PlusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute size-4 flex items-center justify-center", className)}
    >
      <div className="absolute h-px w-full bg-white/20" />
      <div className="absolute w-px h-full bg-white/20" />
    </motion.div>
  );
}
