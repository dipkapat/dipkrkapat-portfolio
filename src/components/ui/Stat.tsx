interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={className}>
      <p className="font-display font-normal text-2xl tracking-tight text-fg-0 sm:text-3xl lg:text-4xl">
        {value}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-fg-1">{label}</p>
    </div>
  );
}