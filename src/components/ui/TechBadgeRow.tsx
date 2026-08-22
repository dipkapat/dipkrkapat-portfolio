"use client";

import { motion } from "framer-motion";

interface TechBadgeRowProps {
  badges: string[];
}

export function TechBadgeRow({ badges }: TechBadgeRowProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.04 }}
    >
      {badges.map((badge) => (
        <motion.span
          key={badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="px-3 py-1.5 rounded-md bg-bg-2 text-fg-1 font-mono text-[11px] uppercase tracking-[0.08em] border border-bg-3 hover:border-accent-0 hover:text-accent-0 transition-all duration-200"
        >
          {badge}
        </motion.span>
      ))}
    </motion.div>
  );
}