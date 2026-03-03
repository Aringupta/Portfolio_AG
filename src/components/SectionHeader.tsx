interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-xs font-mono text-text-muted dark:text-dark-text-muted mb-2 tracking-wider uppercase">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary dark:text-dark-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary dark:text-dark-text-secondary max-w-xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
