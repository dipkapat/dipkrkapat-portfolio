"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export function ProjectCard({ project, reversed }: ProjectCardProps) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={cn("lg:col-span-5", reversed && "lg:order-2")}>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
          {project.index} / {project.name}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent">
          {project.label}
        </p>
        <h3 className="mt-5 text-2xl font-medium leading-snug tracking-tight text-text-primary sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
              Role
            </dt>
            <dd className="mt-1.5 text-sm text-text-primary">{project.role.join(" · ")}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
              Stack
            </dt>
            <dd className="mt-1.5 text-sm text-text-primary">{project.stack.join(" · ")}</dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <a
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            View Case Study
            <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("project_visit", { project: project.slug })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Live Project
              <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className={cn("lg:col-span-7", reversed && "lg:order-1")}>
        <a
          href={`/work/${project.slug}`}
          className="group relative block overflow-hidden rounded-md border border-border transition-all duration-200 hover:border-border-strong"
          aria-label={`${project.name} case study`}
        >
          <div className="relative h-[320px] lg:h-[420px] overflow-hidden bg-surface-muted">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="w-full h-auto object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </a>
      </div>
    </article>
  );
}