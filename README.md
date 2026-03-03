# Personal Portfolio Website

Next.js 15 + TypeScript + Tailwind CSS v4 personal website optimized for recruiting.

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build && npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. No configuration needed — Vercel auto-detects Next.js
4. Set `NEXT_PUBLIC_SITE_URL` environment variable to your domain (for SEO/OpenGraph)

## Where to Edit Content

### Personal info
- **Name, tagline, bullets**: `src/app/page.tsx` (hero section)
- **About page**: `src/app/about/page.tsx`
- **Resume highlights**: `src/app/resume/page.tsx`
- **Social links**: Update URLs in `src/components/Footer.tsx`, `src/app/page.tsx`, and `src/app/contact/page.tsx`
- **Email address**: Search for `your.email@umass.edu` and replace globally

### Resume PDF
- Replace `public/resume.pdf` with your actual resume file

### OpenGraph image
- Replace `public/og-image.png` with a 1200x630 image

### Site URL
- Update `https://yourname.vercel.app` in:
  - `src/lib/metadata.ts`
  - `public/robots.txt`
  - `public/sitemap.xml`

## How to Add a New Project

1. Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Title"
slug: "project-slug"
summary: "One-line summary for the card view."
tags: ["Python", "React", "Docker"]
date: "2026-01-01"
featured: true
order: 5
github: "https://github.com/you/repo"
demo: "https://demo-url.com"
---

## Problem
...

## Constraints
...

## Approach & Architecture
...

## My Contributions
...

## Results
...

## Tech Stack
...

## What I'd Do Next
...
```

2. The project will automatically appear on the projects page
3. Set `featured: true` to show it on the homepage
4. Set `order` to control sort order (lower = first)

## Project Structure

```
├── content/projects/     ← MDX project case studies (edit these!)
├── public/               ← Static assets (resume.pdf, images)
├── src/
│   ├── app/              ← Next.js pages (App Router)
│   ├── components/       ← Reusable UI components
│   ├── lib/              ← Content loading & metadata utilities
│   └── types/            ← TypeScript type definitions
```

## Design System Components

| Component | Purpose |
|-----------|---------|
| `Button` | Links styled as buttons (primary/secondary/ghost) |
| `Card` | Bordered container for content blocks |
| `Badge` | Small pill for tags/labels |
| `SectionHeader` | Page section titles with optional label + description |
| `Prose` | Typography wrapper for MDX/long-form content |
| `ProjectCard` | Project preview card with hover state |
| `Navbar` | Sticky top nav with mobile menu |
| `Footer` | Site footer with social links |
| `ThemeToggle` | Dark/light mode switch |
| `ContactForm` | Contact form with honeypot spam protection |

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX with gray-matter frontmatter
- **Rendering**: next-mdx-remote (RSC)
- **Theme**: next-themes
- **Hosting**: Vercel
