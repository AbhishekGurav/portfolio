import "./globals.css";
import type { Metadata, Viewport } from "next";
import { interTight, spaceMono } from "./fonts";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Abhishek Gurav",
  description: "Portfolio of Abhishek Gurav — Senior Frontend Engineer",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${spaceMono.variable} h-full w-full`}
    >
      <body className="min-h-screen w-full bg-background text-foreground antialiased">
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
