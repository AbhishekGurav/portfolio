import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-start justify-center gap-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Error 404
      </p>
      <h1 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight text-balance max-sm:text-4xl">
        This page wandered off somewhere.
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-90"
      >
        Back home
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </div>
  );
}
