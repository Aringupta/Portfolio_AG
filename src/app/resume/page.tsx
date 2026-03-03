import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resume",
  description: "Resume — Arin Gupta, Computer Engineering @ UMass Amherst.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <SectionHeader
        label="Resume"
        title="Resume"
        description="Download the PDF below."
      />

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
  );
}
