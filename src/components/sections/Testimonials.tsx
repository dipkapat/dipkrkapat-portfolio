"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-bg-3 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What teammates, stakeholders, and collaborators say."
          />
        </Reveal>
        <Reveal delay={0.1} y={30}>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1} direction="up">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.person} direction="up">
                <figure className="flex h-full flex-col rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
                  <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
                    <blockquote className="flex-1 text-base leading-relaxed text-fg-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 border-t border-bg-3 pt-4">
                      <p className="text-sm font-medium text-fg-0">
                        {testimonial.person}
                      </p>
                      <p className="mt-0.5 text-sm text-fg-2">
                        {testimonial.position} · {testimonial.company}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}