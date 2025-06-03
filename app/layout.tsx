import "./globals.css";
import type { Metadata } from "next";
import { inter, interTight, sharetechmono } from "./fonts";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "Abhishek Gurav",
  description: "Portfolio of Abhishek Gurav",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${sharetechmono.variable} h-full w-full`}>
      <body className="h-full w-full antialiased p-12">
          <div className="h-full w-full border-2 border-foreground">
            {children}
            <div className="theme-controls flex flex-row gap-x-[15px] transform-[90deg]">
              <div className="theme-button w-fit "><Checkbox />LIGHT</div>
              <div className="theme-button w-fit"><Checkbox />DARK</div>
              <div className="theme-button w-fit"><Checkbox />MONOSPACED</div>
            </div>
          </div>        
      </body>
    </html>
  );
}
