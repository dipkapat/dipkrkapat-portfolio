"use client";

import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

interface EventLinkProps {
  href: string;
  event: AnalyticsEvent;
  eventPayload?: Record<string, unknown>;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function EventLink({
  href,
  event,
  eventPayload,
  className,
  ariaLabel,
  external = true,
  children,
}: EventLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event, eventPayload)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}