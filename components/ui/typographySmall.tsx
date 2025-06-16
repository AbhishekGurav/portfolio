

import { ReactNode } from "react"

import { cn } from "@/lib/utils";

export function TypographySmall({children}: Readonly<{children : ReactNode}>) {
    

  return (
    <small className={cn(`2xl:text-lg xl:text-xl lg:text-lg text-sm leading-none font-medium`)}>{children}</small>
  )
}
