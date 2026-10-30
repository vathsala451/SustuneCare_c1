import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  clickable?: boolean;
  className?: string;
}

export function SustuneEmblem({ size = 52 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
    >
      <Image
        src="/brand/logo.png"
        alt="Sustune Care Official Emblem"
        width={146}
        height={150}
        priority
        className="w-full h-full object-contain drop-shadow-sm select-none"
      />
    </div>
  );
}

export function Logo({
  variant = "light",
  size = "md",
  showTagline = true,
  clickable = true,
  className = "",
}: LogoProps) {
  const emblemSizes = {
    sm: 46,
    md: 58,
    lg: 74,
  };

  const titleSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  const taglineSizes = {
    sm: "text-[8px] tracking-wider",
    md: "text-[9px] sm:text-[10px] tracking-widest",
    lg: "text-xs tracking-widest",
  };

  const isDark = variant === "dark";

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Light background container to ensure full-colour logo is always crisp and visible */}
      <div className="relative shadow-md rounded-2xl overflow-hidden bg-white px-2 py-1.5 border-2 border-[#D8B56D]/50 flex items-center justify-center">
        <SustuneEmblem size={emblemSizes[size]} />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold leading-none ${titleSizes[size]} ${
            isDark ? "text-white" : "text-[#0B1F3A] dark:text-white"
          }`}
        >
          SUSTUNE CARE
        </span>
        {showTagline && (
          <span
            className={`font-semibold uppercase mt-1 ${taglineSizes[size]} ${
              isDark ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Protected Care · Sustained Dignity
          </span>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" className="focus-ring rounded-lg p-0.5" aria-label="Sustune Care Home">
        {content}
      </Link>
    );
  }

  return content;
}
