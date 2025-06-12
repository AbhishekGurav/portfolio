'use client'

import { useTheme } from "@/context/ThemeContext";

export const NameSection = () =>{
    const {isMonospaced} = useTheme();

  return (
              <section className={`${isMonospaced ? 'font-mono' : 'font-inter'}`}>
                <p className="2xl:text-6xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-extralight subpixel-antialiased">Abhishek Gurav</p>
                <p className="2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-base text-sm font-light subpixel-antialiased">Frontend Engineer</p>
              </section>
  );
}