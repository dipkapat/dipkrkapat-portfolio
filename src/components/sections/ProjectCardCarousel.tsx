"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface ProjectCardCarouselProps {
  project: Project;
}

export function ProjectCardCarousel({ project }: ProjectCardCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className="group relative flex-shrink-0 snap-start carousel-card"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer Shell */}
      <div
        className={cn(
          "rounded-2xl border border-bg-3 bg-bg-1 p-1.5 transition-all duration-400 ease-out",
          "group-hover:border-bg-4 group-hover:shadow-[0_12px_48px_rgba(13,13,13,0.06),0_4px_16px_rgba(13,13,13,0.04)]",
          "dark:group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.25),0_4px_16px_rgba(0,0,0,0.2)]"
        )}
      >
        {/* Inner Core */}
        <div className="rounded-[20px] bg-bg-0 overflow-hidden">
          {/* Image — fixed 4:3 aspect ratio */}
          <a
            href={`/work/${project.slug}`}
            className="block relative aspect-[4/3] overflow-hidden"
            aria-label={`${project.name} case study`}
          >
            <motion.div
              className="absolute inset-0"
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
                sizes="340px"
              />
            </motion.div>
          </a>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-fg-2">
              {project.index} / {project.name}
            </p>
            <CategoryBadge category={project.category} className="mt-2" />
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent-0">
              {project.label}
            </p>
            <h3 className="mt-4 font-ui font-semibold text-xl lg:text-2xl leading-snug tracking-tight text-fg-0">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-1 line-clamp-3">
              {project.description}
            </p>

            <dl className="mt-6 grid gap-3">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-fg-2">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-fg-0">{project.role.join(" · ")}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-fg-2">
                  Stack
                </dt>
                <dd className="mt-1 text-sm text-fg-0">{project.stack.join(" · ")}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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
    </motion.article>
  );
}