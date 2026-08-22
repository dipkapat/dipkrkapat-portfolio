"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "text" | "outline";
  target?: string;
  rel?: string;
}

interface DualCTAProps {
  primary: CTAButtonProps;
  secondary: CTAButtonProps;
}

function CTAButton({ label, href, variant = "primary", target, rel }: CTAButtonProps) {
  const isPrimary = variant === "primary";
  const isText = variant === "text";

  if (isPrimary) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className="inline-flex items-center gap-2 rounded-full bg-fg-0 px-6 py-3 text-sm font-medium text-bg-0 transition-all duration-200 hover:bg-accent-0 hover:shadow-glow"
        whileHover={{ x: 4 }}
      >
        <span className="relative z-10">{label}</span>
        <motion.span
          className="relative z-10"
          whileHover={{ x: 4 }}
        >
          <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </motion.span>
      </motion.a>
    );
  }

  if (isText) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className="inline-flex items-center gap-2 text-sm font-medium text-fg-1 underline-offset-4 transition-colors hover:text-accent-0"
        whileHover={{ x: 4 }}
      >
        <span className="relative z-10">{label}</span>
        <motion.span
          className="relative z-10"
          whileHover={{ x: 4 }}
        >
          <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </motion.span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center gap-2 rounded-full border border-bg-3 bg-transparent px-6 py-3 text-sm font-medium text-fg-0 transition-all duration-200 hover:border-accent-0 hover:bg-bg-2 hover:text-accent-0"
      whileHover={{ x: 4 }}
    >
      <span className="relative z-10">{label}</span>
      <motion.span
        className="relative z-10"
        whileHover={{ x: 4 }}
      >
        <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
      </motion.span>
    </motion.a>
  );
}

export function DualCTA({ primary, secondary }: DualCTAProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <CTAButton {...primary} />
      <CTAButton {...secondary} />
    </div>
  );
}