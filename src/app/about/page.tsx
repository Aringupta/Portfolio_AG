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
    title: "Reliability over cleverness",
    description:
      "A boring solution that works at 3 AM is better than an elegant one that breaks under edge cases. I bias toward explicit error handling, clear logging, and graceful degradation.",
  },
  {
    title: "Latency vs. accuracy",
    description:
      "In robotics, you often can't have both. I think carefully about where approximate-but-fast beats precise-but-slow, and I design systems that let you tune this knob.",
  },
  {
    title: "Debuggability as a feature",
    description:
      "If I can't reason about why a system did what it did, it's not done. I invest in structured logging, visualization tools, and replay-able pipelines — especially for perception and data-heavy systems.",
  },
  {
    title: "Simplicity at the interfaces",
    description:
      "Complex internals are fine. Complex interfaces are not. I design modules with simple, well-documented boundaries so teammates (and future me) can reason about them independently.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      {/* Story */}
      <SectionHeader label="About" title="Who I Am" />
      <div className="space-y-4 text-text-secondary dark:text-dark-text-secondary leading-relaxed mb-16">
        <p>
          I&apos;m a Computer Engineering senior at UMass Amherst, graduating in
          Spring 2026. I got into engineering because I wanted to build things
          that work in the physical world — not just on a screen. That pulled me
          toward robotics and perception systems, where software has to survive
          noisy sensors, real-time constraints, and the gap between simulation
          and reality.
        </p>
        <p>
          Along the way, I developed a strong interest in systems software too:
          distributed processing, data pipelines, and the infrastructure that
          makes complex applications reliable. My best projects live at this
          intersection — where you need both hardware intuition and software
          engineering discipline.
        </p>
        <p>
          I&apos;ve worked in university research labs building sensor fusion
          pipelines, taken on a senior capstone that involved flying drones
          with hyperspectral cameras, and built systems-level side projects in
          Go and Python. What ties it all together is a drive to understand
          the full stack of a problem, from the physics to the deploy script.
        </p>
      </div>

      {/* How I Think */}
      <SectionHeader
        label="Engineering Philosophy"
        title="How I Think About Tradeoffs"
        description="These are the principles I come back to when making design decisions."
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
        I play pickup basketball, tinker with mechanical keyboards, and
        occasionally disappear into long Wikipedia rabbit holes about
        space exploration history. I also enjoy cooking — it&apos;s the closest
        thing to debugging a physical system in my kitchen.
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
