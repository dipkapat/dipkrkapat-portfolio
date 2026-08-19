import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface p-6",
        hover &&
          "transition-all duration-200 hover:-translate-y-1 hover:border-border-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}