"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  direction: _direction = "up",
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = (dir: string) => {
    const base = { opacity: 0 };
    switch (dir) {
      case "up":
        return { ...base, y: 30 };
      case "down":
        return { ...base, y: -30 };
      case "left":
        return { ...base, x: 30 };
      case "right":
        return { ...base, x: -30 };
      default:
        return { ...base, y: 30 };
    }
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: getVariants(direction),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}