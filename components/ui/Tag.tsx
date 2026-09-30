import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/*
  A rounded hairline pill used for skills, meta chips, and links. Renders as a
  <span> by default, or an <a> when `href` is provided (with an interactive
  hover border).
*/

type TagProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
};

const base = "inline-flex items-center rounded-full border border-border px-3 py-1 text-sm";

export function Tag({ children, href, external, className }: TagProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
          base,
          "transition-colors hover:border-foreground hover:text-foreground",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <span
      className={cn(base, "transition-colors hover:border-foreground", className)}
    >
      {children}
    </span>
  );
}
