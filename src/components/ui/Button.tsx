"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "text";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  external?: boolean;
  event?: AnalyticsEvent;
  eventPayload?: Record<string, unknown>;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-text-primary px-6 py-3 text-sm text-background hover:bg-accent",
  secondary:
    "border border-border px-6 py-3 text-sm text-text-primary hover:border-accent hover:text-accent",
  text: "px-1 py-1 text-sm text-text-primary underline-offset-4 hover:text-accent hover:underline",
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
  external,
  event,
  eventPayload,
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  const handleClick = () => {
    if (event) trackEvent(event, eventPayload);
    onClick?.();
  };

  if (href) {
    const isExternal = external || href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={handleClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}