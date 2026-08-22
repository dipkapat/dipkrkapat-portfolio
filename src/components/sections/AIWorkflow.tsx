"use client";

import { aiCapabilities } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const pipeline = ["IDEA", "DESIGN", "CLAUDE CODE", "FRONTEND", "ITERATE"];

export function AIWorkflow() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-bg-3 bg-bg-1/40 py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="06 / AI + Product Development"
            title="AI accelerates the work. Design judgment drives it."
            description="I use AI-assisted development tools as part of my product workflow — not as a replacement for design thinking, but as a way to move faster from exploration to execution."
          />
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <div className="mt-12 rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
            <div className="rounded-[20px] bg-bg-0 p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-2">
                workflow / pipeline
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-y-3">
                {pipeline.map((stage, index) => (
                  <motion.div
                    key={stage}
                    className="flex items-center"
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="font-mono text-sm uppercase tracking-[0.1em] text-fg-0">
                      {stage}
                    </span>
                    {index < pipeline.length - 1 && (
                      <span aria-hidden="true" className="mx-3 text-fg-2 sm:mx-5">
                        →
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-accent-0">
                AI makes the workflow faster. Experience makes the
                decisions better.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-bg-3 bg-bg-3 sm:grid-cols-2 lg:grid-cols-4">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
                className="bg-bg-0 p-6 transition-colors hover:bg-accent-3"
              >
                <h3 className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-accent-0">
                  {capability.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-1">
                  {capability.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}