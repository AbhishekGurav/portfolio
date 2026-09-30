import { Inter_Tight, Space_Mono } from "next/font/google";

// Display + body typeface. Inter Tight is a calm, cozy grotesk and the closest
// freely-available (Google Fonts) stand-in for Neue Haas Grotesk Display Pro,
// which is a commercial typeface and cannot be loaded via next/font/google.
export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Mono for the small uppercase labels/tags used across the Arnau layout.
export const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});
