import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/project";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map(getProjectBySlug)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}
