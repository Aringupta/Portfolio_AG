import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { createMetadata } from "@/lib/metadata";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Prose } from "@/components/Prose";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getProjectBySlug(slug);
    return createMetadata({
      title: frontmatter.title,
      description: frontmatter.summary,
      path: `/projects/${slug}`,
    });
  } catch {
    return createMetadata({
      title: "Project Not Found",
      description: "This project does not exist.",
    });
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {/* Back link */}
      <Button href="/projects" variant="ghost" size="sm" className="mb-8">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
        All Projects
      </Button>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-dark-text-primary leading-tight">
          {frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-text-secondary dark:text-dark-text-secondary">
          {frontmatter.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Project links */}
        {(frontmatter.github || frontmatter.demo || frontmatter.writeup) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {frontmatter.github && (
              <Button href={frontmatter.github} external variant="secondary" size="sm">
                GitHub
              </Button>
            )}
            {frontmatter.demo && (
              <Button href={frontmatter.demo} external variant="secondary" size="sm">
                Live Demo
              </Button>
            )}
            {frontmatter.writeup && (
              <Button href={frontmatter.writeup} external variant="secondary" size="sm">
                Write-up
              </Button>
            )}
          </div>
        )}
      </header>

      {/* MDX content */}
      <Prose>
        <MDXRemote source={content} />
      </Prose>

      {/* Bottom nav */}
      <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
        <Button href="/projects" variant="ghost">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to all projects
        </Button>
      </div>
    </article>
  );
}
