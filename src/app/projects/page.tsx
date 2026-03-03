import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllProjects } from "@/lib/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Engineering projects across robotics, AI, and systems software — with full case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeader
        label="Projects"
        title="Engineering Work"
        description="Each project includes a full case study: problem, approach, contributions, and results. Quality over quantity."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.frontmatter.slug}
            project={project.frontmatter}
          />
        ))}
      </div>
    </section>
  );
}
