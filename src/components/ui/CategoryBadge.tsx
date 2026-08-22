"use client";

import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: ProjectCategory;
  className?: string;
}

const CATEGORY_STYLES: Record<ProjectCategory, string> = {
  SaaS: "bg-accent-3 text-accent-0",
  AI: "bg-[--accent-ai-soft] text-[--accent-ai]",
  FinTech: "bg-[--accent-fin-soft] text-[--accent-fin]",
  Brand: "bg-accent-3 text-accent-0",
  Enterprise: "bg-fg-1 text-fg-0",
};

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-[0.1em]",
        CATEGORY_STYLES[category],
        "transition-transform duration-150 ease-spring",
        className,
      )}
    >
      {category}
    </span>
  );
}