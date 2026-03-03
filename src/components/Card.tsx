import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-border bg-surface-0 p-6
        dark:border-dark-border dark:bg-dark-surface-1
        transition-colors ${className}`}
    >
      {children}
    </Tag>
  );
}
