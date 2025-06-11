'use client'

import { useTheme } from "@/context/ThemeContext";

type TypographyListProps = {
  items?: string[];
  children?: React.ReactNode;
};

export function TypographyList({ items, children }: TypographyListProps) {

  const {isMonospaced} = useTheme();

  return (
    <ul className={`${isMonospaced ? 'font-mono' : 'font-inter' }  my-3 ml-3 list-none [&>li]:mt-4`}>
      {items
        ? items.map((item, i) => <li key={i}>{item}</li>)
        : children}
    </ul>
  );
}
