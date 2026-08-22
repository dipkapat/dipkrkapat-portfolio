"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[50]">
      <nav
        className={cn(
          "mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-16",
          scrolled
            ? "bg-bg-0/85 backdrop-blur-md border-b border-bg-3"
            : "bg-transparent border-b border-transparent",
        )}
        aria-label="Main navigation"
      >
        <Link
          href="#top"
          className="group flex flex-col leading-none"
          aria-label={`${siteConfig.name} - home`}
        >
          <span className="font-ui text-sm font-semibold tracking-tight text-fg-0">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-2 transition-colors group-hover:text-accent-0">
            {siteConfig.roleShort}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-fg-1 transition-colors duration-200 hover:text-fg-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-sm bg-fg-0 px-4 py-2 text-sm font-medium text-bg-0 transition-all duration-200 hover:bg-accent-0 hover:shadow-glow group"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <ArrowUpRight
                className="relative z-10 size-4 stroke-[1.5] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-[1px]"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
        </div>
      </nav>
    </header>
  );
}