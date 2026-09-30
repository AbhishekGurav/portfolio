/*
  Single source of truth for site-wide identity and SEO metadata.

  The site URL is resolved from the environment so it "just works" across
  local, preview, and production without code changes:
    1. NEXT_PUBLIC_SITE_URL  — set this to your custom domain when you have one
    2. VERCEL_URL            — auto-provided on Vercel deploys (preview + prod)
    3. localhost fallback    — for local dev / builds with nothing set

  Every SEO feature (metadataBase, canonical URLs, sitemap, robots, Open Graph,
  JSON-LD) reads `site.url`, so this is the only place the domain lives.
*/
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel provides the deployment host without a protocol.
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const site = {
  url: resolveSiteUrl(),
  name: "Abhishek Gurav",
  jobTitle: "Senior Frontend Engineer",
  /** Short tagline used as the default meta description. */
  description:
    "Senior Frontend Engineer with 4+ years building scalable, performance-optimized web applications in React, Next.js, and TypeScript.",
  locale: "en_US",
  location: "Mumbai, India",
  twitter: "@_abhishekgurav",
  /** Profiles used for JSON-LD sameAs and social discovery. */
  socials: {
    github: "https://github.com/AbhishekGurav",
    linkedin: "https://www.linkedin.com/in/abhishek-gurav",
    twitter: "https://x.com/_abhishekgurav",
  },
} as const;

/** Absolute URL helper for canonical links, sitemap, and OG images. */
export function absoluteUrl(path = "") {
  return new URL(path, site.url).toString();
}
