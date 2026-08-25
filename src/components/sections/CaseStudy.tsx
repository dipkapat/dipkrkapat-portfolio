"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EventLink } from "@/components/ui/EventLink";
import { TechTag } from "@/components/ui/TechTag";
import { Divider } from "@/components/ui/Divider";
import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyProps {
  project: Project;
  nextProject: Project | null;
}

function Section({ title, items, index }: { title: string; items: string[]; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="py-10 first:pt-0 last:pb-0"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid gap-4 sm:grid-cols-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-accent-0 sm:col-span-3">
          {title}
        </h2>
        <div className="space-y-4 sm:col-span-9">
          {items.map((item, itemIndex) => (
            <motion.p
              key={itemIndex}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: itemIndex * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="text-base leading-relaxed text-fg-1"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <header className="border-b border-bg-3 pb-12 pt-32 sm:pt-40">
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-fg-1 transition-colors hover:text-accent-0"
          >
            <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
            All work
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
            {project.index} / {project.name}
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
            {project.label}
          </p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-display font-normal text-3xl leading-tight tracking-tight text-fg-0 sm:text-4xl lg:text-5xl lg:leading-[1.05]"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {project.stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </motion.div>
        </Container>
      </header>

      <Container className="py-12">
        {/* Hero Image with double-bezel */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <a
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-bg-3 transition-all duration-300 ease-out hover:border-accent-0 hover:shadow-glow"
          >
            <div className="rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-300 ease-out group-hover:border-accent-0">
              <div className="relative overflow-hidden rounded-[20px] bg-surface-muted">
                <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 1280px) 1280px, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Meta Grid */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-6 rounded-2xl border border-bg-3 bg-bg-2 p-1.5 sm:grid-cols-3"
        >
          <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
              Role
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-0">
              {project.role.join(" · ")}
            </p>
          </div>
          <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
              Category
            </h3>
            <p className="mt-2 text-sm text-fg-0">{project.category}</p>
          </div>
          <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
              Links
            </h3>
            <div className="mt-2 flex flex-wrap gap-4">
              {project.liveUrl && (
                <EventLink
                  href={project.liveUrl}
                  event="project_visit"
                  eventPayload={{ project: project.slug }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-0 underline-offset-2 hover:underline"
                >
                  Live Project
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                </EventLink>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-0 underline-offset-2 hover:underline"
                >
                  Repository
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <Divider className="my-10" />

        {/* Case Study Sections */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.06 }}
        >
          <Section title="Overview" items={[project.description]} index={0} />
          <Section title="Problem" items={[project.problem]} index={1} />
          <Section title="Users" items={[project.users]} index={2} />
          <Section title="Product Structure" items={project.productStructure} index={3} />
          <Section title="Key UX Decisions" items={project.uxDecisions} index={4} />
          <Section title="UI System" items={project.uiSystem} index={5} />
          <Section title="Interaction" items={project.interaction} index={6} />
          <Section title="Frontend" items={project.frontend} index={7} />
          <Section title="Result" items={[project.result]} index={8} />
          <Section title="Reflection" items={[project.reflection]} index={9} />
        </motion.div>

        <Divider className="my-14" />

        {/* Footer CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-6 py-6 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-lg leading-relaxed text-fg-1">
            {project.highlight}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact">Start a Conversation</Button>
            {nextProject && (
              <Button variant="secondary" href={`/work/${nextProject.slug}`}>
                Next: {nextProject.name}
                <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </>
  );
}