import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 mb-2">
          <div>
            <p className="text-sm font-medium text-accent dark:text-dark-accent tracking-wide uppercase mb-4">
              Computer Engineering @ UMass Amherst &middot; Graduating Spring 2026
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-dark-text-primary leading-tight">
              Sid Shah
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl">
              I build end-to-end systems across robotics, AI/perception, and software.
            </p>
          </div>
          <Image
            src="/profilephoto.jpg"
            alt="Sid Shah"
            width={160}
            height={160}
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-2 border-border dark:border-dark-border shrink-0"
            priority
          />
        </div>

        <ul className="mt-6 space-y-2 text-text-secondary dark:text-dark-text-secondary">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent dark:bg-dark-accent shrink-0" />
            Systems thinker: I design at the architecture level, then build each piece
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent dark:bg-dark-accent shrink-0" />
            Pipeline builder: sensor fusion, data processing, deployment automation
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent dark:bg-dark-accent shrink-0" />
            Shipper: I work through ambiguity and deliver working systems
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/resume.pdf" external variant="primary" size="lg">
            Resume
          </Button>
          <Button href="/projects" variant="secondary" size="lg">
            Projects
          </Button>
          <Button href="https://github.com/Aringupta" external variant="ghost" size="lg">
            GitHub
          </Button>
          <Button href="https://www.linkedin.com/in/aringupta/" external variant="ghost" size="lg">
            LinkedIn
          </Button>
          <Button href="mailto:arinvgupta@gmail.com" external variant="ghost" size="lg">
            Email
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeader
          label="Featured Work"
          title="Selected Projects"
          description="Engineering projects with real depth — click any card to read the full case study."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.frontmatter.slug}
              project={project.frontmatter}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </section>

      {/* Quick About */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeader label="About" title="A Bit About Me" />
        <div className="max-w-2xl space-y-4 text-text-secondary dark:text-dark-text-secondary">
          <p>
            I&apos;m a Computer Engineering senior at UMass Amherst with a focus on
            robotics perception and systems software. I care most about building
            things that work reliably under real-world constraints — not just in
            demos.
          </p>
          <p>
            My best work happens at the intersection of hardware and software:
            sensor fusion pipelines, embedded data processing, and the tooling
            that makes complex systems debuggable.
          </p>
        </div>
        <div className="mt-6">
          <Button href="/about" variant="ghost">
            More about me
          </Button>
        </div>
      </section>
    </>
  );
}
