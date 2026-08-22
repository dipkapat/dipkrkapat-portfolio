"use client";

import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  className?: string;
  size?: "default" | "lg";
}

const sizeStyles = {
  default: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

export function Stat({ value, label, className, size = "default" }: StatProps) {
  return (
    <div className={cn("grid gap-1", className)}>
      <div className={cn("font-display font-normal tracking-tight text-text-primary", sizeStyles[size])}>
        {value}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
        {label}
      </div>
    </div>
  );
}