import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/*
  The primary call-to-action pill used on Home, Contact, and the 404 page.
  `filled` is the solid dark button; `outline` is the hairline variant. Set
  `arrow` to append the nudging ArrowUpRight used throughout the site.
*/

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

const variants = {
  filled: "bg-foreground text-background hover:opacity-90",
  outline: "border border-border hover:border-foreground",
} as const;

export function PillLink({
  href,
  children,
  variant = "filled",
  arrow = false,
  external,
  className,
}: PillLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm transition-opacity transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
