'use client'

import { ReactNode } from "react"
import { useTheme } from "@/context/ThemeContext"
import { cn } from "@/lib/utils";

export function TypographySmall({children}: Readonly<{children : ReactNode}>) {
    const { isMonospaced } = useTheme();

  return (
    <small className={cn(`2xl:text-lg xl:text-base text-sm leading-none font-medium ${isMonospaced ? "font-mono" : "font-inter"}`)}>{children}</small>
  )
}
