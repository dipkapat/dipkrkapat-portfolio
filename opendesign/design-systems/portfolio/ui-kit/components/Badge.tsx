"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
  size?: "sm" | "default";
}

const variantStyles = {
  default: "bg-surface-muted text-text-primary border border-border",
  accent: "bg-accent-soft text-accent border border-accent/20",
  muted: "bg-surface-muted text-text-tertiary border border-border",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  default: "px-2.5 py-1 text-xs",
};

export function Badge({
  children,
  className,
  variant = "default",
  size = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono uppercase tracking-wider rounded-sm border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}