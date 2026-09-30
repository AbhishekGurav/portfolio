import type { Metadata } from "next";

// The Projects page is a client component (entrance animations), so its
// metadata is declared here in a server-side layout.
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Abhishek Gurav — frontend and full-stack work in React, Next.js, and Three.js.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Abhishek Gurav",
    description:
      "Selected frontend and full-stack projects built with React, Next.js, and more.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
