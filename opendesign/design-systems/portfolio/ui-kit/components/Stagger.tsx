"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  y = 24,
  duration = 0.45,
}: StaggerProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("grid gap-6", className)}>
      {childArray.map((child, index) =>
        React.cloneElement(child as React.ReactElement, {
          key: child.key || index,
          delay: delay + index * stagger,
          y,
          duration,
        })
      )}
    </div>
  );
}

import React from "react";