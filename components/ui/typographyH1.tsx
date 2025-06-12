'use client'

import { ReactNode } from "react"
import { useTheme } from "@/context/ThemeContext"
import { cn } from "@/lib/utils"

export function TypographyH1({children}: Readonly<{children : ReactNode}>) {
  const { isMonospaced } = useTheme();
  
  return (
    <h1 className={cn(
      "scroll-m-20 text-center text-4xl font-medium tracking-tight text-balance", isMonospaced ? "font-mono" : "font-inter")}>
      {children}
    </h1>
  )
}
