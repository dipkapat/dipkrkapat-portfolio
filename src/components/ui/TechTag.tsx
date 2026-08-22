interface TechTagProps {
  children: React.ReactNode;
}

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-bg-3 px-2.5 py-1 font-mono text-xs text-fg-1 bg-bg-2 transition-colors hover:border-accent-0 hover:text-accent-0 hover:bg-accent-3">
      {children}
    </span>
  );
}