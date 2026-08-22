import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent-0">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-normal text-3xl font-medium leading-tight tracking-tight text-fg-0 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-fg-1 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}