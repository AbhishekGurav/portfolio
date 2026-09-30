import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
  The shared editorial section layout used across the site: a fixed mono label
  column on the left and free content on the right, collapsing to a single
  column below the `lg` breakpoint. Extracted so the label width, gap, and
  breakpoint live in exactly one place.
*/

type SectionProps = {
  /** The small mono uppercase label shown in the left column. */
  label: string;
  children: ReactNode;
  /** Render the label as <h1> (page title) instead of the default <h2>. */
  as?: "h1" | "h2";
  /** Draw a hairline divider below the section. */
  bordered?: boolean;
  className?: string;
};

export function Section({
  label,
  children,
  as: Heading = "h2",
  bordered = false,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-[220px_1fr] gap-12 max-lg:grid-cols-1 max-lg:gap-6",
        bordered && "border-b border-border",
        className,
      )}
    >
      <Heading className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </Heading>
      <div>{children}</div>
    </section>
  );
}
