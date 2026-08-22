"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { TechTag } from "./TechTag";
import { Reveal } from "./Reveal";

interface ProjectCardProps {
  project: {
    index: string;
    name: string;
    label: string;
    title: string;
    description: string;
    role: string[];
    stack: string[];
    image: { src: string; alt: string; width: number; height: number };
    slug: string;
    liveUrl?: string;
  };
  reversed?: boolean;
  index?: number;
}

export function ProjectCard({ project, reversed, index = 0 }: ProjectCardProps) {
  const delay = index * 0.08;

  return (
    <Reveal delay={delay} y={24}>
      <Card
        hover
        padding="none"
        className={cn(
          "grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
          reversed && "lg:grid-flow-dense"
        )}
      >
        <div className={cn("lg:col-span-5", reversed && "lg:col-start-8")}>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
              {project.index} / {project.name}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">
              {project.label}
            </p>
            <h3 className="mt-5 font-ui font-medium text-h3 tracking-tight text-text-primary">
              {project.title}
            </h3>
            <p className="mt-4 text-body text-text-secondary">
              {project.description}
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary">
                  Role
                </dt>
                <dd className="mt-1.5 text-sm text-text-primary">{project.role.join(" · ")}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary">
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Live Project
                  <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={cn("lg:col-span-7 relative", reversed && "lg:col-start-1")}>
          <a
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden rounded-md border border-border transition-colors duration-200 hover:border-border-strong"
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
      </Card>
    </Reveal>
  );
}