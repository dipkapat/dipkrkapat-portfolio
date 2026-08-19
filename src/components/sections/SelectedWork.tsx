"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProjectFilter } from "@/types";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const filters: ProjectFilter[] = [
  "All",
  "UI/UX",
  "Frontend",
  "Web Applications",
  "Websites",
];

export function SelectedWork() {
  const [active, setActive] = useState<ProjectFilter>("All");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.filters.includes(active)),
    [active],
  );

  return (
    <section id="work" className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="03 / Selected Work"
            title="A selection of products, interfaces, and digital experiences."
            description="Each project explores a different product challenge — from SaaS analytics and AI interfaces to operational systems, financial tools, and conversion-focused websites."
          />
          <div
            role="group"
            aria-label="Filter projects"
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  "rounded-sm border px-3.5 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors",
                  active === filter
                    ? "border-text-primary bg-text-primary text-background"
                    : "border-border bg-surface text-text-secondary hover:border-accent hover:text-accent",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout={!reduceMotion}
          className="mt-14 flex flex-col gap-20 lg:gap-28"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} reversed={index % 2 === 1} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}