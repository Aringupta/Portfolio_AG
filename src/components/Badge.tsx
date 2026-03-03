interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className="inline-block px-2 py-0.5 text-[11px] font-mono font-medium rounded-md
        bg-surface-2 text-text-secondary border border-border/60
        dark:bg-dark-surface-2 dark:text-dark-text-secondary dark:border-dark-border/60"
    >
      {children}
    </span>
  );
}
