export type AnalyticsEvent =
  | "resume_download"
  | "contact_submit"
  | "project_visit"
  | "cta_click"
  | "primary_cta_click";

// Privacy-conscious analytics hook. No-op by default — wire this to a
// privacy-respecting analytics provider (e.g. Plausible, Vercel Analytics,
// Umami) by setting NEXT_PUBLIC_ANALYTICS_PROVIDER and posting the event.
export function trackEvent(
  event: AnalyticsEvent,
  payload?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  if (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER === "none") return;
  // Example wiring point (keep the args referenced so tree-shaking/ESLint
  // stays happy while no provider is configured):
  void event;
  void payload;
  // if (provider === 'plausible') window.plausible?.(event, { props: payload })
}