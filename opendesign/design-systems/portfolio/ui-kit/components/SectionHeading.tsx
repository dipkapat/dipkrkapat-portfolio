"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={cn("grid gap-4", align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
          {eyebrow}
        </p>
      )}
      <div className="font-display font-normal text-h1 tracking-tight text-text-primary">
        {title}
      </div>
      {description && (
        <p className="text-body text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
}