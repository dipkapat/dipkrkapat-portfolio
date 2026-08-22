"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface HeroImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  parallax?: number;
}

export function HeroImageFrame({ src, alt, className, parallax = 0 }: HeroImageFrameProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, parallax * 1000]);

  return (
    <motion.div
      className={className}
      style={{ y }}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-bg-3 bg-bg-2 p-1.5">
        <div className="relative overflow-hidden rounded-[20px] bg-surface-muted">
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 700, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}