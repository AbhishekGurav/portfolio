'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TypographyList } from "./ui/typographyList";
//  import {motion} from "motion/react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Open Source", href: "/open-source" },
  { name: "Personal Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function NavSection() {
  const pathname = usePathname();

  return (
    <section className="w-fit mt-10 max-sm:m-0">
      <TypographyList>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="flex items-center">
              <Link
                href={item.href}
                className={`text-sm flex flex-row items-center gap-2 transition ${
                  isActive
                    ? "text-foreground font-bold"
                    : "text-gray-600"
                }`}
              >
                <div
                  className={`${isActive ? "opacity-100" : "opacity-0"} h-2 w-2 rounded-full bg-foreground max-sm:opacity-0`}
                />
                
                <span className={` text-foreground`}>
                  {item.name}
                </span>

               
              </Link>
            </li>
          );
        })}
      </TypographyList>
    </section>
  );
}
