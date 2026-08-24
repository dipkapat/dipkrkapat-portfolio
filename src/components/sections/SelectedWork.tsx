"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCardCarousel } from "@/components/sections/ProjectCardCarousel";
import { Container } from "@/components/ui/Container";
import { DualCTA } from "@/components/ui/DualCTA";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function SelectedWork() {
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const hintSeen = localStorage.getItem("carousel-hint-seen");
    if (!hintSeen) {
      const timer = setTimeout(() => setShowScrollHint(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissHint = () => {
    localStorage.setItem("carousel-hint-seen", "true");
    setShowScrollHint(false);
  };

  return (
    <>
      <section
        id="work"
        className="border-t border-bg-3 bg-bg-1/40 py-24 lg:py-32"
        aria-labelledby="work-heading"
      >
        <Container>
          {/* Section Header — consistent with other sections */}
          <SectionHeading
            id="work-heading"
            eyebrow="03 / Selected Work"
            title="Selected Work"
            description="Five projects spanning brand, fintech, SaaS, and AI — each designed around real problems and shipped to production."
          />

          {/* Carousel Track */}
          <Reveal delay={0.1} y={30} className="mt-12">
            <div className="carousel-track" role="region" aria-label="Project showcase">
              <Stagger stagger={0.08} delay={0.2} direction="up">
                <div className="carousel-inner">
                  {projects.map((project) => (
                    <StaggerItem key={project.slug} direction="up">
                      <ProjectCardCarousel project={project} />
                    </StaggerItem>
                  ))}
                </div>
              </Stagger>
            </div>
          </Reveal>

          {/* Mobile Scroll Hint */}
          {showScrollHint && (
            <motion.div
              className="scroll-hint lg:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={dismissHint}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && dismissHint()}
              aria-label="Dismiss scroll hint"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-fg-2">Scroll</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                whileHover={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <DualCTA
              primary={{ label: "View All Case Studies", href: "#contact" }}
              secondary={{ label: "View Demo Projects", href: "#work", variant: "text" }}
            />
          </motion.div>
        </Container>
      </section>
    </>
  );
}