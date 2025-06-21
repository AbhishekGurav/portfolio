import "./globals.css";
import type { Metadata } from "next";
import { inter, sharetechmono } from "./fonts";
import { NavSection } from "@/components/NavSection";
import { NameSection } from "@/components/NameSection";
import { ThemeControls } from "@/components/ThemeControls";
import { ThemeProvider } from "@/context/ThemeContext";

import { AnimatePresence } from "motion/react";



export const metadata: Metadata = {
  title: "Abhishek Gurav",
  description: "Portfolio of Abhishek Gurav",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sharetechmono.variable} h-full w-full subpixel-antialiased`}>
      <AnimatePresence mode="wait">
        <body className="font-family h-full w-full antialiased p-12 max-sm:p-2">
          <ThemeProvider>
            <div className="h-full w-full p-8 border-1 border-foreground flex flex-row justify-between max-sm:flex-col">
              <div className="h-full flex flex-col">
                <NameSection />
                <NavSection />
              </div>
              {children}
            </div>  
            <ThemeControls />      
          </ThemeProvider>
        </body>
      </AnimatePresence>
    </html>
  );
}

