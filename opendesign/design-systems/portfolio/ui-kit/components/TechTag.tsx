"use client";

import { cn } from "@/lib/utils";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  size?: "sm" | "default";
}

const variantStyles = {
  default: "bg-accent-soft text-accent",
  outline: "bg-transparent text-text-secondary border border-border hover:border-accent hover:text-accent",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  default: "px-2.5 py-1 text-xs",
};

export function TechTag({
  children,
  className,
  variant = "default",
  size = "default",
}: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono uppercase tracking-wider rounded-sm transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}