import "./globals.css";
import type { Metadata, Viewport } from "next";
import { interTight, spaceMono } from "./fonts";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { site, absoluteUrl } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.jobTitle}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Abhishek Gurav",
    "Senior Frontend Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Mumbai",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.jobTitle}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.jobTitle}`,
    description: site.description,
    creator: site.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Explicit viewport so mobile browsers render at device width instead of a
// zoomed-out desktop layout. maximumScale is left generous (5) and
// userScalable stays on for accessibility / OS pinch-zoom.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// JSON-LD structured data describing the site owner. Helps search engines
// build a knowledge-panel-style understanding of who this portfolio belongs to.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.jobTitle,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [site.socials.github, site.socials.linkedin, site.socials.twitter],
  image: absoluteUrl("/opengraph-image"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${spaceMono.variable} h-full w-full`}
    >
      <body className="min-h-screen w-full bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-6 max-sm:px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
