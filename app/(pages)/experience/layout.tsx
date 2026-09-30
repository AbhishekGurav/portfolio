import type { Metadata } from "next";

// The Experience page is a client component (interactive accordion), so its
// metadata is declared here in a server-side layout.
export const metadata: Metadata = {
  title: "Experience",
  description:
    "The professional experience of Abhishek Gurav — Senior Frontend Engineer, across roles at Oneture Technologies, Datamatics, and CCTech.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Abhishek Gurav",
    description:
      "Roles and impact across 4+ years of frontend and full-stack engineering.",
    url: "/experience",
  },
};

export default function ExperienceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
