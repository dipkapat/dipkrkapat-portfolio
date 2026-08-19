import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EventLink } from "@/components/ui/EventLink";
import { TechTag } from "@/components/ui/TechTag";
import { Divider } from "@/components/ui/Divider";

interface CaseStudyProps {
  project: Project;
  nextProject: Project | null;
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="py-10 first:pt-0 last:pb-0">
      <div className="grid gap-4 sm:grid-cols-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-accent sm:col-span-3">
          {title}
        </h2>
        <div className="space-y-4 sm:col-span-9">
          {items.map((item, index) => (
            <p key={index} className="text-base leading-relaxed text-text-secondary">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudy({ project, nextProject }: CaseStudyProps) {
  return (
    <>
      <header className="border-b border-border pb-12 pt-32 sm:pt-40">
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
            All work
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
            {project.index} / {project.name}
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-accent">
            {project.label}
          </p>
          <h1 className="mt-6 max-w-3xl font-sans text-3xl font-medium leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </Container>
      </header>

      <Container className="py-12">
        <div className="overflow-hidden rounded-md border border-border">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            className="size-full object-cover"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>

        <div className="mt-6 grid gap-6 rounded-md border border-border bg-surface p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
              Role
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-primary">
              {project.role.join(" · ")}
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
              Category
            </h3>
            <p className="mt-2 text-sm text-text-primary">{project.category}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
              Links
            </h3>
            <div className="mt-2 flex flex-wrap gap-4">
              {project.liveUrl && (
                <EventLink
                  href={project.liveUrl}
                  event="project_visit"
                  eventPayload={{ project: project.slug }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-2 hover:underline"
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
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-2 hover:underline"
                >
                  Repository
                  <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        <div>
          <Section title="Overview" items={[project.description]} />
          <Section title="Problem" items={[project.problem]} />
          <Section title="Users" items={[project.users]} />
          <Section title="Product Structure" items={project.productStructure} />
          <Section title="Key UX Decisions" items={project.uxDecisions} />
          <Section title="UI System" items={project.uiSystem} />
          <Section title="Interaction" items={project.interaction} />
          <Section title="Frontend" items={project.frontend} />
          <Section title="Result" items={[project.result]} />
          <Section title="Reflection" items={[project.reflection]} />
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col justify-between gap-6 py-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-lg leading-relaxed text-text-secondary">
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
        </div>
      </Container>
    </>
  );
}