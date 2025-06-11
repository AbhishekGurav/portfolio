'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "@/context/ThemeContext";

export const ThemeControls = () => {
  const { theme, isMonospaced, toggleTheme, toggleMonospaced } = useTheme();
  
  return (
    <div className={`theme-controls flex w-fit flex-row gap-x-[15px] justify-start ${isMonospaced ? 'font-mono' : 'font-inter'}`}>
      <div className="theme-button w-20 flex items-center gap-2">
        <Checkbox 
          checked={theme === 'light'} 
          onCheckedChange={() => toggleTheme('light')}
        />
        LIGHT
      </div>
      <div className="theme-button w-20 flex items-center gap-2">
        <Checkbox 
          checked={theme === 'dark'} 
          onCheckedChange={() => toggleTheme('dark')}
        />
        DARK
      </div>
      <div className="theme-button w-20 flex items-center gap-2">
        <Checkbox 
          checked={isMonospaced} 
          onCheckedChange={toggleMonospaced}
        />
        MONOSPACED
      </div>
    </div>
  )
}