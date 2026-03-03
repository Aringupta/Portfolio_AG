interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-sm font-medium text-accent dark:text-dark-accent mb-2 tracking-wide uppercase">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary dark:text-dark-text-secondary max-w-2xl text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
