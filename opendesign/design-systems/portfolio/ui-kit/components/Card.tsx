"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "default" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4 sm:p-5",
  default: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface transition-all duration-200",
        paddingStyles[padding],
        hover && "hover:border-accent hover:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}