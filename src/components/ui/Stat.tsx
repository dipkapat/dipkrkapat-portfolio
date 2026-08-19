interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={className}>
      <p className="font-mono text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm leading-snug text-text-secondary">{label}</p>
    </div>
  );
}