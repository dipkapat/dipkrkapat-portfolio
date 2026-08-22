import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "lg" | "xl";
}

export function Container({ children, className, id, size = "default" }: ContainerProps) {
  const paddingClasses = {
    default: "px-5 sm:px-8 lg:px-16",
    lg: "px-6 sm:px-10 lg:px-20",
    xl: "px-8 sm:px-12 lg:px-24",
  };

  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1280px]",
        paddingClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}