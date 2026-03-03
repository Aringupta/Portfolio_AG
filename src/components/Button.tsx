import Link from "next/link";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover dark:bg-dark-accent dark:text-dark-surface-0 dark:hover:bg-dark-accent-hover",
  secondary:
    "bg-surface-2 text-text-primary hover:bg-border dark:bg-dark-surface-2 dark:text-dark-text-primary dark:hover:bg-dark-border",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-surface-2 dark:text-dark-text-secondary dark:hover:text-dark-text-primary dark:hover:bg-dark-surface-2",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium
    transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
