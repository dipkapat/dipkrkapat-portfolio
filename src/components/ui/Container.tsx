import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}