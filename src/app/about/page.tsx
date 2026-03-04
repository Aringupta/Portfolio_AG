import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Computer Engineering senior at UMass Amherst — how I think about building systems.",
  path: "/about",
});

const TRADEOFFS = [
  {
    title: "Reliability > cleverness",
    description:
      "I'll take the boring solution that still works at 3 AM. I tend to favor explicit failure modes, clear logs, and systems that degrade gracefully instead of collapsing when something unexpected happens.",
  },
  {
    title: "Latency vs. accuracy",
    description:
      "In robotics you usually can't have both. I like designing systems where you can tune the tradeoff — fast approximations by default, with more precise modes when accuracy actually matters.",
  },
  {
    title: "Debuggability is a feature",
    description:
      "If I can't explain why a system behaved the way it did, it isn't done yet. I try to build in traces, replayable pipelines, and tooling that makes failures easier to understand.",
  },
  {
    title: "Simple interfaces, complex internals",
    description:
      "I'm fine with complexity inside a system. What matters is that the boundaries stay simple. Small, well-documented interfaces make systems easier to reason about and easier for other people to work with.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      {/* Story */}
      <SectionHeader label="About" title="Who I Am" />
      <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-16">
        <p>
          I&apos;m a Computer Engineering senior at UMass Amherst, graduating
          Spring 2026. I got into engineering because I wanted to build things
          that work in the physical world — not just on a screen. That pulled
          me toward robotics and perception systems, where software has to
          survive noisy sensors, real-time constraints, and the gap between
          simulation and reality.
        </p>
        <p>
          Along the way I developed a strong interest in systems software too:
          data pipelines, distributed processing, and the infrastructure that
          makes complex applications reliable. My favorite projects tend to
          live at that intersection — where hardware intuition and software
          engineering discipline meet.
        </p>
        <p>
          I&apos;ve worked in university research labs building sensor-fusion
          pipelines, taken on a senior capstone involving UAV hyperspectral
          imaging, and built systems-level side projects in Go and Python.
          What ties it all together is a curiosity about the whole stack of a
          problem — from the physics to the deploy script.
        </p>
      </div>

      {/* How I Think */}
      <SectionHeader
        label="Engineering Philosophy"
        title="How I Think About Tradeoffs"
        description="These are the tradeoffs I tend to think about when building systems."
      />
      <div className="grid gap-4 sm:grid-cols-2 mb-16">
        {TRADEOFFS.map(({ title, description }) => (
          <Card key={title}>
            <h3 className="font-semibold text-sm text-text-primary dark:text-dark-text-primary mb-2">
              {title}
            </h3>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              {description}
            </p>
          </Card>
        ))}
      </div>

      {/* Outside Engineering */}
      <SectionHeader label="Beyond Code" title="When I'm Not Engineering" />
      <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-8">
        When I&apos;m not working on engineering stuff, I&apos;m usually playing pickup
        basketball, lifting, or cooking something new. I also tend to fall down
        random internet rabbit holes whenever something technical catches my
        interest.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <Button href="/projects" variant="primary">
          See my projects
        </Button>
        <Button href="/contact" variant="secondary">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
