"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface ProjectCardCarouselProps {
  project: Project;
}

export function ProjectCardCarousel({ project }: ProjectCardCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.article
      className={cn(
        "group relative flex-shrink-0 snap-start carousel-card h-full",
        "focus-visible:ring-2 focus-visible:ring-accent-0 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-0 dark:focus-visible:ring-offset-bg-0"
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/work/${project.slug}`);
        }
      }}
      style={{ outline: "none", minHeight: "762px" }}
    >
      {/* Double-bezel architecture - Outer shell */}
      <div
        className={cn(
          "rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-300 ease-out h-full",
          "group-hover:border-accent-0 group-hover:shadow-glow",
          reduceMotion && "transition-none"
        )}
        style={{ minHeight: "762px" }}
      >
        {/* Inner Core */}
        <div className="rounded-[20px] bg-bg-0 h-full flex flex-col">
          {/* Image — fixed 4:3 aspect ratio with double-bezel */}
          <a
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-bg-3 transition-all duration-300 ease-out hover:border-accent-0 hover:shadow-glow mb-6 flex-shrink-0"
            aria-label={`${project.name} case study`}
          >
            {/* Outer shell */}
            <div className="rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-300 ease-out group-hover:border-accent-0">
              {/* Inner core - Image container */}
              <div className="relative overflow-hidden rounded-[20px] bg-surface-muted">
                <motion.div
                  className="relative h-[220px] overflow-hidden"
                  initial={false}
                  animate={{ scale: isHovered && !reduceMotion ? 1.02 : 1 }}
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
              </div>
            </div>
          </a>

          {/* Content - grows to fill remaining space */}
          <div className="p-6 lg:p-8 flex flex-col flex-1">
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
                {project.index} / {project.name}
              </p>
              <CategoryBadge category={project.category} className="mt-2 group-hover:scale-[1.05] transition-transform duration-150 ease-spring" />
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
                {project.label}
              </p>
              <h3 className="mt-4 font-display font-normal text-xl leading-snug tracking-tight text-fg-0 lg:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-1 line-clamp-3">
                {project.description}
              </p>

              <dl className="mt-6 grid gap-3">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-fg-0">{project.role.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
                    Stack
                  </dt>
                  <dd className="mt-1 text-sm text-fg-0">{project.stack.join(" · ")}</dd>
                </div>
              </dl>
            </div>

            {/* Actions always at bottom */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-bg-3">
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