"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "default" | "sm" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
}

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-text-primary text-background hover:bg-accent",
  secondary: "border border-border text-text-primary hover:border-accent hover:text-accent",
  text: "px-1 py-1 text-text-primary underline-offset-4 hover:text-accent hover:underline",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  external,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
  };

  if (href) {
    const isExternal = external || href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        onClick={handleClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}