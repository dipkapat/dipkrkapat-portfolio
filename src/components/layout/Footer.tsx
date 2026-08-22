"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { motion, useReducedMotion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  return (
    <footer className="border-t border-bg-3">
      <Container className="py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-ui text-lg font-semibold tracking-tight text-fg-0">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-fg-1">{siteConfig.role}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-2">
              Designing products. Building interfaces. Exploring what&apos;s next.
            </p>
          </motion.div>

          <motion.nav
            aria-label="Footer navigation"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-fg-1 transition-colors duration-200 hover:text-accent-0"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-2">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <motion.li
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-fg-1 transition-colors duration-200 hover:text-accent-0"
                >
                  <Mail className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </motion.li>
              {socialLinks.map((social, index) => (
                <motion.li
                  key={social.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="inline-flex items-center gap-1.5 text-sm text-fg-1 transition-colors duration-200 hover:text-accent-0"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <Divider className="my-10" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"
        >
          <p className="text-xs text-fg-2">
            © {year} {siteConfig.name}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-2">
            {siteConfig.location}
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}