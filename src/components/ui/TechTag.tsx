interface TechTagProps {
  children: React.ReactNode;
}

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-text-secondary">
      {children}
    </span>
  );
}