"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { contactInquiryTypes } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  [key: string]: string | undefined;
}

const inputClasses =
  "w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none";

const labelClasses =
  "mb-2 block font-mono text-xs uppercase tracking-[0.08em] text-text-secondary";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: contactInquiryTypes[0],
    message: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFieldValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerMessage("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fieldValues),
    });

    const result = (await res.json().catch(() => null)) as {
      ok: boolean;
      message?: string;
      fieldErrors?: FormErrors;
    } | null;

    if (res.ok && result?.ok) {
      setStatus("success");
      setServerMessage(result.message ?? "Message sent.");
      trackEvent("contact_submit");
      setFieldValues({
        name: "",
        email: "",
        company: "",
        inquiryType: contactInquiryTypes[0],
        message: "",
        website: "",
      });
    } else {
      setStatus("error");
      setServerMessage(
        result?.message ?? "Something went wrong. Please try again.",
      );
      if (result?.fieldErrors) setErrors(result.fieldErrors);
    }
  };

  return (
    <div className="rounded-md border border-border bg-surface p-6 sm:p-10">
      {status === "success" ? (
        <div
          role="status"
          className="flex flex-col items-start gap-3 py-8"
          aria-live="polite"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Send className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <h3 className="text-xl font-medium text-text-primary">
            Message sent.
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {serverMessage} I&apos;ll get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot — hidden from humans, filled by bots */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={fieldValues.website}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={fieldValues.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={cn(inputClasses, errors.name && "border-error")}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={fieldValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={cn(inputClasses, errors.email && "border-error")}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className={labelClasses}>
                Company <span className="text-text-tertiary">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={fieldValues.company}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Company or organization"
              />
            </div>
            <div>
              <label htmlFor="inquiryType" className={labelClasses}>
                Inquiry type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={fieldValues.inquiryType}
                onChange={handleChange}
                className={inputClasses}
              >
                {contactInquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={fieldValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(inputClasses, "resize-y", errors.message && "border-error")}
              placeholder="Tell me about your project, timeline, and goals."
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-error" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          {status === "error" && serverMessage && (
            <p
              className="rounded-sm border border-error/30 bg-error/5 px-4 py-3 text-sm text-error"
              role="alert"
              aria-live="polite"
            >
              {serverMessage}
            </p>
          )}

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-sm bg-text-primary px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" strokeWidth={1.5} aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </>
              )}
            </button>
            <p className="text-xs text-text-tertiary">
              Prefer email?{" "}
              <a
                href="mailto:dipkrkapat@protonmail.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                dipkrkapat@protonmail.com
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}