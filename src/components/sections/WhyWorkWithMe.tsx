import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const proofPoints = [
  {
    title: "Design expertise",
    value: "18+",
    detail: "Years of web and UI design experience.",
  },
  {
    title: "Product execution",
    value: "5+",
    detail: "Years of React-focused development and 25+ enterprise product modules.",
  },
  {
    title: "Modern workflow",
    value: "AI",
    detail: "AI-assisted tools combined with established design and development practices.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="11 / Why Work With Me"
          title={
            <>
              One person.{" "}
              <span className="font-serif font-normal italic text-text-secondary">
                Two disciplines. Less friction.
              </span>
            </>
          }
          description="When design and frontend development are understood together, fewer things get lost between the design file and the final product."
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {proofPoints.map((point) => (
            <StaggerItem key={point.title}>
              <div className="flex h-full flex-col rounded-md border border-border bg-surface p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {point.title}
                </p>
                <Stat value={point.value} label="" className="mt-6" />
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {point.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}