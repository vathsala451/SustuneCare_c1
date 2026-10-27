"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

interface ThemeToggleProps {
  variant?: "bar" | "header" | "mobile";
  className?: string;
}

export function ThemeToggle({ variant = "header", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "bar") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex items-center gap-1.5 bg-brand-navyDeep hover:bg-[#143d6b] border border-brand-gold/40 text-white rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-all focus-ring cursor-pointer hover:border-brand-gold ${className}`}
        aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
        title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      >
        {isDark ? (
          <>
            <Moon className="w-3 h-3 text-[#F3DC87] animate-in spin-in-180 duration-300" />
            <span className="font-semibold text-slate-200">Dark</span>
          </>
        ) : (
          <>
            <Sun className="w-3 h-3 text-amber-400 animate-in spin-in-180 duration-300" />
            <span className="font-semibold text-slate-200">Light</span>
          </>
        )}
      </button>
    );
  }

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-semibold transition-colors bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/15 cursor-pointer ${className}`}
      >
        <span className="flex items-center gap-3">
          {isDark ? (
            <Moon className="w-4 h-4 text-[#F3DC87]" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
          <span>Appearance Mode</span>
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-brand-navy dark:text-[#F3DC87] border border-slate-200 dark:border-white/20 font-bold">
          {isDark ? "Dark Theme" : "Light Theme"}
        </span>
      </button>
    );
  }

  // Default: variant === "header"
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-brand-navy dark:hover:text-[#F3DC87] hover:border-brand-gold/60 dark:hover:border-brand-gold/60 transition-all focus-ring cursor-pointer group ${className}`}
      aria-label={`Toggle theme (currently ${theme})`}
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#F3DC87] group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
      )}
      <span className="sr-only">Switch to {isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
}
