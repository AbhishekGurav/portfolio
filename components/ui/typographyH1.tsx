import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function TypographyH1({children}: Readonly<{children : ReactNode}>) {
  
  
  return (
    <h1 className={cn(
      "scroll-m-20 text-center text-4xl font-light font-family tracking-tight text-balance")}>
      {children}
    </h1>
  )
}
