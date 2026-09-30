'use client';

import { useTheme } from "@/context/ThemeContext";

/*
  Compact, tucked-away control set that replaces the old checkbox column.
  Renders as small mono labels with a hairline separator — light/dark toggle
  and a monospaced toggle — matching the restrained Arnau editorial style.
*/
export const ThemeControls = () => {
  const { theme, isMonospaced, toggleTheme, toggleMonospaced } = useTheme();

  return (
    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <button
        type="button"
        onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        className="group flex items-center gap-1.5 transition-colors hover:text-foreground"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full border border-current transition-colors group-hover:bg-foreground"
          style={{ background: theme === "dark" ? "currentColor" : "transparent" }}
        />
        {theme === "light" ? "Light" : "Dark"}
      </button>

      <span aria-hidden className="h-3 w-px bg-border" />

      <button
        type="button"
        onClick={toggleMonospaced}
        aria-pressed={isMonospaced}
        className={`transition-colors hover:text-foreground ${
          isMonospaced ? "text-foreground" : ""
        }`}
      >
        Mono
      </button>
    </div>
  );
};
