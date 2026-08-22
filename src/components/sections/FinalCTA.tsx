"use client";

import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
            <div className="rounded-[20px] bg-bg-0 p-8 sm:p-14 lg:p-20">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-0">
                Have a product to build?
              </p>
              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-3xl font-display font-normal text-3xl leading-tight tracking-tight text-fg-0 sm:text-4xl lg:text-5xl lg:leading-[1.05]"
              >
                Let&apos;s turn the complexity into something people understand.
              </motion.h2>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-xl text-base leading-relaxed text-fg-1"
              >
                Let&apos;s design it, structure it, and ship it.
              </motion.p>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Button
                  href="#contact"
                  event="cta_click"
                  eventPayload={{ cta: "start_conversation" }}
                  className="group"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <ArrowDown
                    className="relative z-10 size-4 -rotate-90 stroke-[1.5] transition-transform duration-300 ease-out group-hover:translate-y-1"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  variant="secondary"
                  href={siteConfig.resumeUrl}
                  event="resume_download"
                  className="group"
                >
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}