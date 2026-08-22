"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCardCarousel } from "@/components/sections/ProjectCardCarousel";
import { Container } from "@/components/ui/Container";
import { DualCTA } from "@/components/ui/DualCTA";

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
      <section id="work" className="py-24 lg:py-32" aria-labelledby="work-heading">
        <Container>
          {/* Section Header — no eyebrow per design-taste rule */}
          <header className="mb-12 lg:mb-16">
            <h2 id="work-heading" className="font-ui font-semibold text-5xl lg:text-6xl xl:text-7xl tracking-tight text-fg-0">
              Selected Work
            </h2>
            <p className="mt-4 text-lg lg:text-xl text-fg-1 max-w-[60ch]">
              Five projects spanning brand, fintech, SaaS, and AI — each designed around real problems and shipped to production.
            </p>
          </header>

          {/* Carousel Track */}
          <div className="carousel-track" role="region" aria-label="Project showcase">
            <div className="carousel-inner">
              {projects.map((project) => (
                <ProjectCardCarousel key={project.slug} project={project} />
              ))}
            </div>
          </div>

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