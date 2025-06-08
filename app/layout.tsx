import "./globals.css";
import type { Metadata } from "next";
import { inter, interTight, sharetechmono } from "./fonts";
import { Checkbox } from "@/components/ui/checkbox";
import { NavSection } from "@/components/NavSection";

import { TypographyList } from "@/components/ui/typographyList";


export const metadata: Metadata = {
  title: "Abhishek Gurav",
  description: "Portfolio of Abhishek Gurav",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${sharetechmono.variable} h-full w-full subpixel-antialiased`}>
      <body className="h-full w-full antialiased p-12">
          <div className="h-full w-full p-8 border-1 border-foreground flex flex-row justify-between">
            <div className="h-full font-inter flex flex-col">
              <NameSection />
              <NavSection />
            </div>
            {children}
          </div>  
          <ThemeControls />      
      </body>
    </html>
  );
}

const NameSection = () =>{
  return (
              <section>
                <p className="2xl:text-6xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-inter font-extralight subpixel-antialiased">Abhishek Gurav</p>
                <p className="2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md xs:text-sm font-inter font-light subpixel-antialiased">Frontend Engineer</p>
              </section>
  );
}

const ThemeControls = () => {
  
  return (
          <div className="theme-controls flex flex-row gap-x-[15px]">
              <div className="theme-button w-fit "><Checkbox />LIGHT</div>
              <div className="theme-button w-fit"><Checkbox />DARK</div>
              <div className="theme-button w-fit"><Checkbox />MONOSPACED</div>
          </div>
  )
}

