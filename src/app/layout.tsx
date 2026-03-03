import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arin Gupta | Computer Engineering",
    template: "%s | Arin Gupta",
  },
  description:
    "Computer Engineering senior at UMass Amherst. I build end-to-end systems across robotics, AI/perception, and software.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourname.vercel.app"
  ),
  openGraph: {
    title: "Arin Gupta | Computer Engineering",
    description:
      "Computer Engineering senior at UMass Amherst. I build end-to-end systems across robotics, AI/perception, and software.",
    siteName: "Arin Gupta",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
