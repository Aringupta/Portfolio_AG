import type { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`prose prose-neutral max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-headings:text-text-primary dark:prose-headings:text-dark-text-primary
        prose-p:text-text-secondary dark:prose-p:text-dark-text-secondary
        prose-a:text-accent dark:prose-a:text-dark-accent prose-a:underline prose-a:decoration-accent/30 hover:prose-a:decoration-accent
        dark:prose-a:decoration-dark-accent/30 dark:hover:prose-a:decoration-dark-accent
        prose-strong:text-text-primary dark:prose-strong:text-dark-text-primary
        prose-code:text-sm prose-code:bg-surface-2 dark:prose-code:bg-dark-surface-2
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-surface-1 dark:prose-pre:bg-dark-surface-2
        prose-pre:border prose-pre:border-border dark:prose-pre:border-dark-border
        prose-li:text-text-secondary dark:prose-li:text-dark-text-secondary
        prose-table:text-sm
        ${className}`}
    >
      {children}
    </div>
  );
}
