"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectFilter } from "@/types";

interface FilterConfig {
  key: ProjectFilter;
  label: string;
  count: number;
}

interface ProjectFilterProps {
  filters: readonly FilterConfig[];
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

export function ProjectFilter({ filters, active, onChange }: ProjectFilterProps) {
  return (
    <motion.div
      role="group"
      aria-label="Filter projects by category"
      className="sticky top-24 z-10 flex flex-wrap gap-2 pb-8"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.04 }}
    >
      {filters.map((filter) => (
        <motion.button
          key={filter.key}
          type="button"
          onClick={() => onChange(filter.key)}
          aria-pressed={active === filter.key}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-all duration-200 ease-out",
            active === filter.key
              ? "bg-fg-0 text-bg-0 shadow-sm"
              : "bg-bg-2 text-fg-1 border border-bg-3 hover:border-accent-0 hover:text-fg-0",
          )}
        >
          {filter.label}
          {active !== filter.key && (
            <motion.span
              className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-accent-3 text-accent-0"
              initial={false}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {filter.count}
            </motion.span>
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}