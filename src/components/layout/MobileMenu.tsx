"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const [panelRef, setPanelRef] = useState<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const onFocusOut = (e: FocusEvent) => {
      if (panelRef && !panelRef.contains(e.relatedTarget as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, [open, panelRef, setOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative inline-flex size-10 items-center justify-center rounded-full border border-bg-3 text-fg-0 transition-all duration-300 ease-out hover:border-accent-0 hover:bg-bg-2"
      >
        <motion.span
          initial={false}
          animate={{ rotate: open ? 45 : 0, y: open ? 2 : 0 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute w-[18px] h-0.5 bg-current rounded-full origin-center"
          aria-hidden="true"
        />
        <motion.span
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute w-[18px] h-0.5 bg-current rounded-full origin-center"
          style={{ transform: "translateY(-5px)" }}
          aria-hidden="true"
        />
        <motion.span
          initial={false}
          animate={{ rotate: open ? -45 : 0, y: open ? -2 : 0 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute w-[18px] h-0.5 bg-current rounded-full origin-center"
          style={{ transform: "translateY(5px)" }}
          aria-hidden="true"
        />
      </button>

      <motion.div
        id="mobile-menu"
        ref={(node) => setPanelRef(node)}
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : -20,
          scale: open ? 1 : 0.98,
        }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed inset-x-0 top-16 z-[40] border-b border-bg-3 bg-bg-0/95 backdrop-blur-xl px-5 pb-10 pt-6 shadow-xl md:hidden",
        )}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={false}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -20,
                }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.3,
                  delay: open ? index * 0.06 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-bg-3 py-4 text-base font-medium text-fg-0 transition-colors duration-200 hover:text-accent-0"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#contact"
            onClick={() => setOpen(false)}
            initial={false}
            animate={{
              opacity: open ? 1 : 0,
              y: open ? 0 : 20,
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.3,
              delay: open ? navLinks.length * 0.06 + 0.1 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-fg-0 px-4 py-3 text-sm font-medium text-bg-0 transition-all duration-200 hover:bg-accent-0 hover:shadow-glow"
          >
            Let&apos;s Talk
          </motion.a>
        </nav>
      </motion.div>
    </>
  );
}