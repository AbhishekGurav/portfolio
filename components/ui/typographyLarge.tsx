
import { ReactNode } from "react"

import { cn } from "@/lib/utils";

export function TypographyLarge({children}: Readonly<{children : ReactNode}>) {
    

  return (
    <div className={cn(`2xl:text-3xl xl:text-2xl lg:text-2xl text-xl leading-none font-light`)}>{children}</div>
  )
}
