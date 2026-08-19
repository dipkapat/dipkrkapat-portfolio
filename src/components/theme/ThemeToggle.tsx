"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? (
        <Sun className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
      )}
    </button>
  );
}