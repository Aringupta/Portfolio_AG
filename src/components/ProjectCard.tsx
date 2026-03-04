import Link from "next/link";
import { Badge } from "./Badge";
import type { ProjectFrontmatter } from "@/types/project";

interface ProjectCardProps {
  project: ProjectFrontmatter;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative">
      <Link
        href={`/projects/${project.slug}`}
        className="block rounded-lg border border-border bg-surface-0 p-5
          shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]
          hover:border-accent/30 hover:-translate-y-0.5
          dark:border-dark-border dark:bg-dark-surface-1
          dark:shadow-[var(--shadow-dark-sm)] dark:hover:shadow-[var(--shadow-dark-md)]
          dark:hover:border-dark-accent/30
          transition-all duration-200 h-full"
      >
        <div className="flex flex-col h-full">
          {project.date && (
            <span className="text-[11px] font-mono text-text-muted dark:text-dark-text-muted mb-2">
              {project.date}
            </span>
          )}

          <h3
            className="text-base font-semibold text-text-secondary dark:text-dark-text-secondary
            group-hover:text-accent dark:group-hover:text-dark-accent transition-colors"
          >
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed flex-1 line-clamp-2">
            {project.summary}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge>{`+${project.tags.length - 3}`}</Badge>
            )}
          </div>

          <div
            className="mt-4 text-sm font-mono font-medium text-text-muted dark:text-dark-text-muted
            group-hover:text-accent dark:group-hover:text-dark-accent
            flex items-center gap-1 transition-colors"
          >
            Read case study
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
