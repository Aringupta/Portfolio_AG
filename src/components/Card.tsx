import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-lg border border-border bg-surface-0 p-5
        shadow-[var(--shadow-sm)]
        dark:border-dark-border dark:bg-dark-surface-1
        dark:shadow-[var(--shadow-dark-sm)]
        transition-colors ${className}`}
    >
      {children}
    </Tag>
  );
}
