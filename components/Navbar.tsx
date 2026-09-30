'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeControls } from "./ThemeControls";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 max-sm:px-4">
        {/* Oval logo — full name on wider screens, initials on small ones so
            the row never overflows a narrow phone. */}
        <Link
          href="/"
          aria-label="Home"
          className="flex h-9 shrink-0 items-center rounded-full border border-foreground px-4 font-mono text-sm lowercase tracking-tight transition-colors hover:bg-foreground hover:text-background"
        >
          <span className="max-sm:hidden">abhishek gurav</span>
          <span className="sm:hidden">ag</span>
        </Link>

        <div className="flex min-w-0 items-center gap-6 max-sm:gap-4">
          <ul className="flex items-center gap-6 overflow-x-auto text-sm max-sm:gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    className={`relative whitespace-nowrap transition-colors hover:text-foreground ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                    <span
                      aria-hidden
                      className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-foreground transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <span aria-hidden className="h-4 w-px bg-border max-sm:hidden" />
          <div className="max-sm:hidden">
            <ThemeControls />
          </div>
        </div>
      </nav>

      {/* Theme controls drop below the bar on small screens */}
      <div className="hidden border-t border-border px-4 py-2 max-sm:flex max-sm:justify-end">
        <ThemeControls />
      </div>
    </header>
  );
}
