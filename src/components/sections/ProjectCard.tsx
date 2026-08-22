"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { motion, useReducedMotion } from "framer-motion";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export function ProjectCard({ project, reversed }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={cardRef}
      className="group relative"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Double-bezel architecture - Outer shell */}
      <div
        className={cn(
          "grid items-start gap-8 lg:grid-cols-12 lg:gap-12",
          reversed && "lg:grid-flow-dense",
        )}
        style={{
          // Subtle perspective for depth
          perspective: "1000px",
        }}
      >
        {/* Content column - Inner core */}
        <div
          className={cn(
            "relative z-10 lg:col-span-6",
            reversed && "lg:col-start-7",
          )}
        >
          {/* Outer shell wrapper */}
          <div className="rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-200 ease-out group-hover:border-accent-0 group-hover:shadow-glow">
            {/* Inner core */}
            <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
                {project.index} / {project.name}
              </p>
              <CategoryBadge category={project.category} className="mt-2 group-hover:scale-[1.05] transition-transform duration-150 ease-spring" />
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
                {project.label}
              </p>
              <h3 className="mt-5 font-display font-normal text-2xl leading-snug tracking-tight text-fg-0 sm:text-3xl lg:text-[2.25rem]">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-fg-1">
                {project.description}
              </p>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
                    Role
                  </dt>
                  <dd className="mt-1.5 text-sm text-fg-0">{project.role.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
                    Stack
                  </dt>
                  <dd className="mt-1.5 text-sm text-fg-0">{project.stack.join(" · ")}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.a
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-0 underline-offset-4 transition-colors hover:text-accent-0"
                  whileHover={{ x: 4 }}
                  onClick={() => trackEvent("project_visit", { project: project.slug })}
                >
                  View Case Study
                  <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </motion.a>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-1 underline-offset-4 transition-colors hover:text-accent-0"
                    whileHover={{ x: 4 }}
                  >
                    Live Project
                    <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image column - Inner core with outer shell */}
        <div
          className={cn(
            "relative z-10 lg:col-span-6",
            reversed && "lg:col-start-1",
          )}
        >
          <a
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-bg-3 transition-all duration-200 ease-out hover:border-accent-0 hover:shadow-glow"
            aria-label={`${project.name} case study`}
          >
            {/* Outer shell */}
            <div className="rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-200 ease-out group-hover:border-accent-0">
              {/* Inner core - Image container */}
              <div className="relative overflow-hidden rounded-[20px] bg-surface-muted">
                <motion.div
                  className="relative h-[320px] lg:h-[420px] overflow-hidden"
                  initial={false}
                  animate={{ scale: hovered && !reduceMotion ? 1.02 : 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={false}
                  />
                </motion.div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.article>
  );
}