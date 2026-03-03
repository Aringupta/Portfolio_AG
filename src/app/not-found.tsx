import { Button } from "@/components/Button";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-32 text-center">
      <p className="text-sm font-medium text-accent dark:text-dark-accent mb-2">
        404
      </p>
      <h1 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
        Page not found
      </h1>
      <p className="text-text-secondary dark:text-dark-text-secondary mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" variant="primary">
        Back to home
      </Button>
    </div>
  );
}
