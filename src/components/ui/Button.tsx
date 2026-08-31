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
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring-0 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-fg-0 px-6 py-3 text-sm text-bg-0 hover:bg-accent-0 hover:shadow-glow",
  secondary:
    "border border-bg-3 px-6 py-3 text-sm text-fg-0 hover:border-accent-0 hover:text-accent-0 hover:bg-accent-3",
  text: "px-1 py-1 text-sm text-fg-1 underline-offset-4 hover:text-accent-0 hover:underline",
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

  const isAnchorLink = href?.startsWith("#");

  if (href) {
    const isExternal = external || href.startsWith("http");

    if (isAnchorLink) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          onClick={handleClick}
        >
          {children}
        </a>
      );
    }

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