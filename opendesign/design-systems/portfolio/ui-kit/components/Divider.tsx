"use client";

import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "strong" | "accent";
}

const variantStyles = {
  default: "bg-border",
  strong: "bg-border-strong",
  accent: "bg-accent",
};

const orientationStyles = {
  horizontal: "w-full h-px",
  vertical: "h-full w-px",
};

export function Divider({
  className,
  orientation = "horizontal",
  variant = "default",
}: DividerProps) {
  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "border-0 transition-colors",
        orientationStyles[orientation],
        variantStyles[variant],
        className
      )}
    />
  );
}