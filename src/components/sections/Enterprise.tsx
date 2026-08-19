import { modules } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Enterprise() {
  return (
    <section className="border-t border-border bg-surface-muted/40 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="04 / Enterprise Product Experience"
                title={
                  <>
                    25+ modules.{" "}
                    <span className="font-serif font-normal italic text-text-secondary">
                      One complex product ecosystem.
                    </span>
                  </>
                }
              />
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                For an enterprise School Automation Software platform, I worked
                across the product ecosystem — from UI/UX design and prototyping
                through frontend implementation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                The challenge was not designing individual screens. It was
                creating a consistent, scalable interface system across a large
                and interconnected product.
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-accent">
                25+ production-ready modules · UI/UX → Frontend
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                {modules.map((module) => (
                  <li
                    key={module}
                    className="bg-surface px-4 py-4 transition-colors duration-200 hover:bg-accent-soft sm:px-5"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-text-primary">
                      {module}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}