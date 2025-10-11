import type { Metadata } from "next";

export const METADATA: Metadata = {
  title: {
    default: "Seniors 2026 — Computer Science Graduation Project",
    template: "%s | Seniors 2026",
  },
  description:
    "Explore the graduation projects of Computer Science Seniors 2026. Discover innovative ideas, teamwork, and cutting-edge technology built by future engineers.",
  keywords: [
    "graduation project",
    "CS seniors 2026",
    "computer science",
    "software engineering",
    "technology projects",
    "final year projects",
    "university showcase",
  ],
  authors: [
    { name: "CS Seniors 2026 Team", url: "https://our-graduation-project-team.vercel.app/" },
  ],
  metadataBase: new URL("https://our-graduation-project-team.vercel.app/"),
  openGraph: {
    title: "Seniors 2026 — Computer Science Graduation Project",
    description:
      "Showcasing the creativity and innovation of Computer Science Seniors 2026. Explore projects in AI, web development, cybersecurity, and more.",
    url: process.env.NEXT_PUBLIC_URL || "https://our-graduation-project-team.vercel.app/",
    siteName: "Seniors 2026",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seniors 2026 Computer Science Project Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seniors 2026 — Computer Science Graduation Project",
    description:
      "Discover innovative Computer Science graduation projects by Seniors 2026.",
    images: ["/og-image.png"],
    creator: "@Seniors2026-CS",
  },
};
