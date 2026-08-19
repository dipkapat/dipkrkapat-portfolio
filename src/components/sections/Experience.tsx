import { experiencePhases } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface-muted/40 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="08 / Career"
          title="18+ years of evolving with the web."
          description="My career started with web design and gradually evolved into UI/UX, responsive interface development, and product-focused frontend engineering."
        />

        <Stagger className="mt-12" stagger={0.12}>
          {experiencePhases.map((phase) => (
            <StaggerItem key={phase.period}>
              <div className="grid gap-3 border-t border-border py-8 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-3">
                  <span className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-accent">
                    {phase.period}
                  </span>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="text-xl font-medium tracking-tight text-text-primary">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">
                    {phase.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-md border border-border bg-surface p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
              Current role
            </p>
            <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <h3 className="text-lg font-medium tracking-tight text-text-primary">
                Senior Frontend Developer / UI/UX
              </h3>
              <span className="text-text-secondary">·</span>
              <p className="font-mono text-sm uppercase tracking-[0.08em] text-text-secondary">
                Adhyan Digital Pvt. Ltd.
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Aug 2020 – Present · 25+ modules for an enterprise School Automation platform — Figma-to-React pipeline, design systems, and Framer Motion micro-interactions.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}