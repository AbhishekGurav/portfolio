'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "@/context/ThemeContext";

export const ThemeControls = () => {
  const { theme, isMonospaced, toggleTheme, toggleMonospaced } = useTheme();
  
  return (
    <div className={`theme-controls mt-1 flex w-fit flex-row gap-x-[15px] text-sm justify-start ${isMonospaced ? 'font-mono' : 'font-inter'}
          max-sm:flex-col max-sm:w-28 max-sm:text-xs
    `}>
      <div className="theme-button w-20 flex items-center gap-2">
        <Checkbox 
          checked={theme === 'light'} 
          onCheckedChange={() => toggleTheme( theme=== 'light' ? 'dark' : 'light')}
        />
        <span>LIGHT</span>
      </div>
      <div className="theme-button w-20 flex items-center gap-2">
        <Checkbox 
          checked={theme === 'dark'} 
          onCheckedChange={() => toggleTheme( theme=== 'dark' ? 'light' : 'dark')}
        />
        <span>DARK</span>
      </div>
      <div className="theme-button w-20 flex items-center gap-2">
        <Checkbox 
          checked={isMonospaced} 
          onCheckedChange={toggleMonospaced}
        />
        <span>MONOSPACED</span>
      </div>
    </div>
  )
}