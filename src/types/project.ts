export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  date: string;
  featured: boolean;
  order: number;
  github?: string;
  demo?: string;
  writeup?: string;
  thumbnail?: string;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
}
