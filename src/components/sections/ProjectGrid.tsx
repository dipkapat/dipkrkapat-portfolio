"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/lib/utils";

const GRID_LAYOUT = [
  { slug: "pulsemetrics", span: "lg:col-span-8 lg:row-span-2", featured: true },
  { slug: "ai-content-studio", span: "lg:col-span-4", featured: false },
  { slug: "vetbook", span: "lg:col-span-6", featured: false },
  { slug: "loanlens", span: "lg:col-span-6", featured: false },
  { slug: "saints-paradise", span: "lg:col-span-12", featured: false },
] as const;

interface ProjectGridProps {
  filteredProjects: typeof projects;
}

export function ProjectGrid({ filteredProjects }: ProjectGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      id="demo-projects"
      className="grid gap-6 lg:grid-cols-12 lg:gap-8"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
    >
      {filteredProjects.map((project, index) => {
        const layout = GRID_LAYOUT.find((l) => l.slug === project.slug);
        if (!layout) return null;

        return (
          <motion.div
            key={project.slug}
            className={cn(layout.span, layout.featured && "lg:row-span-2")}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} reversed={index % 2 === 1} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}