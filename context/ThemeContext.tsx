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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMonospaced, setIsMonospaced] = useState(false);

  useEffect(() => {
    // Check if theme was previously set
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedMonospaced = localStorage.getItem('monospaced') === 'true';
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
    
    if (savedMonospaced) {
      setIsMonospaced(savedMonospaced);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('monospaced', isMonospaced);
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
