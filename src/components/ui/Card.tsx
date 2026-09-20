import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  doubleBezel?: boolean;
}

export function Card({
  children,
  className,
  hover,
  doubleBezel = false,
}: CardProps) {
  if (doubleBezel) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-bg-3 bg-bg-2 p-1.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          hover && "group-hover:border-accent/40 group-hover:shadow-card-hover",
          className,
        )}
      >
        <div className="rounded-[20px] bg-bg-0 p-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-bg-3 bg-bg-0 p-6",
        hover &&
          "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}