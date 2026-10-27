"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";

interface BackToHomeButtonProps {
  currentPageTitle?: string;
  className?: string;
}

export function BackToHomeButton({
  currentPageTitle,
  className = "",
}: BackToHomeButtonProps) {
  return (
    <div
      className={`w-full bg-slate-50/90 dark:bg-[#061224]/90 border-b border-slate-200/80 dark:border-white/10 backdrop-blur-sm py-2.5 px-4 sm:px-6 lg:px-8 z-30 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        {/* Back to Home Action Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-white/10 text-[#0B1F3A] dark:text-[#F3DC87] hover:text-[#B79224] dark:hover:text-white font-bold border border-slate-200 dark:border-white/15 hover:border-[#D8B56D] dark:hover:border-[#D8B56D]/60 shadow-sm transition-all group"
          aria-label="Navigate back to Sustune Care Home Page"
        >
          <ArrowLeft className="w-4 h-4 text-[#B79224] dark:text-[#D8B56D] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Breadcrumb Trail */}
        {currentPageTitle && (
          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
            <Link
              href="/"
              className="hover:text-[#0B1F3A] dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1F3A] dark:text-slate-200 font-semibold truncate max-w-[220px] sm:max-w-xs">
              {currentPageTitle}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
