"use client";

import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export function Technology() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="09 / Technology"
            title="The tools behind the work."
            description="Capability demonstrated through work first — the stack that carries it second."
          />
        </Reveal>
        <Reveal delay={0.1} y={30}>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.1} direction="up">
            {skillGroups.map((group) => (
              <StaggerItem key={group.category} direction="up">
                <div className="rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
                  <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
                    <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
                      {group.category}
                    </h3>
                    <p className="mt-4 text-base leading-loose text-fg-0">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}