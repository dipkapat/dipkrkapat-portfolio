import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What teammates, stakeholders, and collaborators say."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.person}
              className="flex h-full flex-col rounded-md border border-border bg-surface p-6 sm:p-8"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-text-primary">
                  {testimonial.person}
                </p>
                <p className="mt-0.5 text-sm text-text-tertiary">
                  {testimonial.position} · {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}