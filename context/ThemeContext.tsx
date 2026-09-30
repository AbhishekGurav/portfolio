'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isMonospaced: boolean;
  toggleTheme: (theme: Theme) => void;
  toggleMonospaced: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Resolve the initial theme once, at state-init time. Guarded for SSR where
// window/localStorage are unavailable — the server renders the 'light' default
// and the effects below reconcile the DOM on the client.
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialMonospaced(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('monospaced') === 'true';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isMonospaced, setIsMonospaced] = useState(getInitialMonospaced);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', isMonospaced ? 'font-mono' : 'font-display');
    localStorage.setItem('monospaced', String(isMonospaced));
  }, [isMonospaced]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const toggleMonospaced = () => {
    setIsMonospaced(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, isMonospaced, toggleTheme, toggleMonospaced }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
