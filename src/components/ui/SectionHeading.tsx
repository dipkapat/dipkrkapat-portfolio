import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
  eyebrowPosition?: "top" | "bottom";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
  eyebrowPosition = "top",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && eyebrowPosition === "top" && (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="font-display font-normal text-3xl font-medium leading-snug tracking-tight text-fg-0 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {eyebrow && eyebrowPosition === "bottom" && (
        <p className="mt-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent">
          {eyebrow}
        </p>
      )}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-fg-1 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}