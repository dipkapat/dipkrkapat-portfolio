"use client";

import { workflowSteps } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function DesignToCode() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="05 / My Workflow"
            title="From design file to working product."
            description="I work across the boundary between design and implementation, which means I think about usability, visual quality, component structure, responsiveness, and technical feasibility together."
          />
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <ol className="mt-12 grid gap-0 md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <motion.li
                key={step.label}
                className="relative flex-1"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex h-full flex-col border-t border-bg-3 pt-5">
                  <span className="font-mono text-xs tracking-[0.12em] text-accent-0">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-medium tracking-tight text-fg-0">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-1">
                    {step.detail}
                  </p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 hidden h-px w-full origin-left bg-accent-0 md:block"
                    style={{ opacity: 0.4 }}
                  />
                )}
              </motion.li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <p className="mt-14 border-l-2 border-accent-0 pl-5 font-serif text-xl italic leading-relaxed text-fg-0 sm:text-2xl">
            The goal is not simply to make a design look right. The goal is to
            make the product work right.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}