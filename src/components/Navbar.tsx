"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-surface-0/80 backdrop-blur-md
        dark:border-dark-border dark:bg-dark-surface-0/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-4xl px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-sm font-mono font-semibold text-text-primary dark:text-dark-text-primary
            hover:text-text-secondary dark:hover:text-dark-text-secondary transition-colors"
        >
          AG
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  isActive
                    ? "bg-surface-2 dark:bg-dark-surface-2 text-text-primary dark:text-dark-text-primary font-medium"
                    : "text-text-muted dark:text-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-md
              text-text-secondary hover:text-text-primary hover:bg-surface-2
              dark:text-dark-text-secondary dark:hover:text-dark-text-primary dark:hover:bg-dark-surface-2
              transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border dark:border-dark-border px-6 py-4 space-y-1
          bg-surface-0 dark:bg-dark-surface-0">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-surface-2 dark:bg-dark-surface-2 text-text-primary dark:text-dark-text-primary font-medium"
                    : "text-text-muted dark:text-dark-text-muted hover:text-text-primary dark:hover:text-dark-text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
