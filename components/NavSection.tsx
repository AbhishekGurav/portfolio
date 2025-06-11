'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TypographyList } from "./ui/typographyList";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Open Source", href: "/open-source" },
  { name: "Projects", href: "/projects" },
];

export function NavSection() {
  const pathname = usePathname();

  return (
    <section className="w-fit mt-10">
      <TypographyList>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="flex items-center relative">
              <Link
                href={item.href}
                className={`text-sm transition ${
                  isActive
                    ? "text-foreground font-bold"
                    : "text-gray-600"
                }`}
              >
                
                <span className={isActive ? "opacity-0" : "opacity-100"}>
                  {item.name}
                </span>

               
                <motion.span
                  layout // enable layout animation for smooth position changes
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-foreground"
                  initial={false}
                  animate={{
                    y: isActive ? -1 : 0, // slide dot up by 2px when active
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ type: "spring", bounce: 0.25 }}
                />
              </Link>
            </li>
          );
        })}
      </TypographyList>
    </section>
  );
}
