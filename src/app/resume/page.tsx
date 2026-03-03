import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resume",
  description: "Resume and key highlights — Arin Gupta, Computer Engineering @ UMass Amherst.",
  path: "/resume",
});

const HIGHLIGHTS = [
  "B.S. Computer Engineering, UMass Amherst (Spring 2026) — Dean's List",
  "Built production sensor fusion pipelines used in active university research",
  "Experience across Python, C++, Go, TypeScript, ROS 2, and embedded Linux",
  "Led integration on a 4-person senior design team delivering an end-to-end UAV imaging system",
  "Strong foundation in systems programming, reinforcement learning, and real-time data processing",
];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SectionHeader
        label="Resume"
        title="Resume & Highlights"
        description="Download the full PDF or skim the highlights below."
      />

      {/* Download button */}
      <div className="mb-10">
        <Button href="/resume.pdf" external variant="primary" size="lg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume (PDF)
        </Button>
      </div>

      {/* Quick highlights */}
      <Card className="mb-10">
        <h3 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">
          Key Highlights
        </h3>
        <ul className="space-y-3">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent dark:bg-dark-accent shrink-0" />
              <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Embedded PDF viewer */}
      <div className="mb-6">
        <h3 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">
          Full Resume
        </h3>
        <div
          className="rounded-xl border border-border dark:border-dark-border overflow-hidden
            bg-surface-1 dark:bg-dark-surface-1"
        >
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="w-full h-[600px] sm:h-[800px]"
          />
        </div>
        <p className="mt-3 text-sm text-text-muted dark:text-dark-text-muted">
          PDF not loading?{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent dark:text-dark-accent hover:underline"
          >
            Open in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  );
}
