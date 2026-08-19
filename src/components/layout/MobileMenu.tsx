"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const [panelRef, setPanelRef] = useState<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
        className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-text-primary transition-colors hover:border-accent hover:text-accent"
      >
        {open ? (
          <X className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <Menu className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
        )}
      </button>

      <div
        id="mobile-menu"
        ref={(node) => setPanelRef(node)}
        className={cn(
          "fixed inset-x-0 top-16 z-40 border-b border-border bg-background px-5 pb-8 pt-4 shadow-sm transition-all duration-200 md:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 text-base font-medium text-text-primary transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-text-primary px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </>
  );
}