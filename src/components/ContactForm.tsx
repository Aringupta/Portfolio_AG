"use client";

import { useState, type FormEvent } from "react";

interface FormState {
  status: "idle" | "sending" | "sent" | "error";
}

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("_honey")) return;

    setState({ status: "sending" });

    // Build mailto fallback (no server needed)
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Message from ${name} via Portfolio`);
    const body = encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    );

    window.location.href = `mailto:arinvgupta@gmail.com?subject=${subject}&body=${body}`;
    setState({ status: "sent" });
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      {/* Honeypot — hidden from real users, catches bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="_honey">Do not fill this out</label>
        <input type="text" id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-border bg-surface-0 px-4 py-2.5 text-sm
            text-text-primary placeholder:text-text-muted
            dark:border-dark-border dark:bg-dark-surface-1 dark:text-dark-text-primary
            dark:placeholder:text-dark-text-muted
            focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/40
            dark:focus:ring-dark-accent/40 dark:focus:border-dark-accent/40
            transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-border bg-surface-0 px-4 py-2.5 text-sm
            text-text-primary placeholder:text-text-muted
            dark:border-dark-border dark:bg-dark-surface-1 dark:text-dark-text-primary
            dark:placeholder:text-dark-text-muted
            focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/40
            dark:focus:ring-dark-accent/40 dark:focus:border-dark-accent/40
            transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary dark:text-dark-text-primary mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-border bg-surface-0 px-4 py-2.5 text-sm
            text-text-primary placeholder:text-text-muted
            dark:border-dark-border dark:bg-dark-surface-1 dark:text-dark-text-primary
            dark:placeholder:text-dark-text-muted
            focus:outline-none focus:ring-1 focus:ring-accent/40 focus:border-accent/40
            dark:focus:ring-dark-accent/40 dark:focus:border-dark-accent/40
            transition-colors resize-y"
          placeholder="What's on your mind?"
        />
      </div>

      <button
        type="submit"
        disabled={state.status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5
          text-sm font-medium bg-accent text-white hover:bg-accent-hover
          shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]
          dark:bg-dark-accent dark:text-dark-surface-0 dark:hover:bg-dark-accent-hover
          dark:shadow-[var(--shadow-dark-sm)] dark:hover:shadow-[var(--shadow-dark-md)]
          transition-all disabled:opacity-60"
      >
        {state.status === "sending" ? "Opening mail client..." : "Send Message"}
      </button>

      {state.status === "sent" && (
        <p className="text-sm text-green-600 dark:text-green-400">
          Your default mail client should have opened. If not, email me directly at arinvgupta@gmail.com.
        </p>
      )}
    </form>
  );
}
