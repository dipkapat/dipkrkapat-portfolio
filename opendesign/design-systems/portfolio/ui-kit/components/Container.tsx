"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1280px]",
    narrow: "max-w-[960px]",
    wide: "max-w-[1440px]",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-16",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}