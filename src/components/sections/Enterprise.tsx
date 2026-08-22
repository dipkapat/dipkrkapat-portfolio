"use client";

import { modules } from "@/data/modules";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function Enterprise() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-bg-3 bg-bg-1/40 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="04 / Enterprise Product Experience"
                title={
                  <>
                    25+ modules.{" "}
                    <span className="font-serif font-normal italic text-fg-1">
                      One complex product ecosystem.
                    </span>
                  </>
                }
                description="For an enterprise School Automation Software platform, I worked across the product ecosystem — from UI/UX design and prototyping through frontend implementation. The challenge was not designing individual screens. It was creating a consistent, scalable interface system across a large and interconnected product."
              />
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-accent-0">
                25+ production-ready modules · UI/UX → Frontend
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1} y={30}>
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-bg-3 bg-bg-3 sm:grid-cols-3">
                {modules.map((module, index) => (
                  <motion.li
                    key={module}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-bg-0 px-4 py-4 transition-colors duration-200 hover:bg-accent-3"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-fg-0">
                      {module}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}