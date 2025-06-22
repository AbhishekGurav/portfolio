import "./globals.css";
import type { Metadata } from "next";
import { inter, sharetechmono } from "./fonts";
import { NavSection } from "@/components/NavSection";
import { NameSection } from "@/components/NameSection";
import { ThemeControls } from "@/components/ThemeControls";
import { ThemeProvider } from "@/context/ThemeContext";



export const metadata: Metadata = {
  title: "Abhishek Gurav",
  description: "Portfolio of Abhishek Gurav",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sharetechmono.variable} h-full w-full subpixel-antialiased`}>
        <body className="font-family h-full w-full antialiased p-12 max-sm:p-2">
          <ThemeProvider>
            <div className="h-full w-full p-8 border-1 border-foreground flex flex-row min-sm:justify-between 
            max-sm:flex-col max-sm:p-2 
            ">
              <div className=" flex flex-col max-sm:h-fit">
                <NameSection />
                <NavSection />
              </div>
              {children}
            </div>
            <div className="max-sm:hidden"><ThemeControls /></div>  
          </ThemeProvider>
        </body>
    </html>
  );
}

