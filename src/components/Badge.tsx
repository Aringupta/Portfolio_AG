interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full
        bg-surface-2 text-text-secondary
        dark:bg-dark-surface-2 dark:text-dark-text-secondary"
    >
      {children}
    </span>
  );
}
