import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "cerulean" | "emerald" | "navy" | "slate";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "gold",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const variantClasses = {
    gold: "bg-brand-goldLight dark:bg-[#D8B56D]/15 text-brand-goldBronze dark:text-[#F3DC87] border border-brand-gold/40 dark:border-[#D8B56D]/30 font-semibold",
    cerulean: "bg-blue-50 dark:bg-teal-950/50 text-brand-cerulean dark:text-teal-300 border border-brand-cerulean/30 dark:border-teal-500/30 font-semibold",
    emerald: "bg-brand-emeraldLight dark:bg-emerald-950/50 text-brand-emeraldDark dark:text-emerald-300 border border-brand-emerald/30 dark:border-emerald-500/30 font-semibold",
    navy: "bg-brand-navy/10 dark:bg-white/10 text-brand-navy dark:text-white border border-brand-navy/20 dark:border-white/15 font-bold",
    slate: "bg-slate-100 dark:bg-white/10 text-brand-slate dark:text-slate-200 border border-slate-200 dark:border-white/10 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full uppercase tracking-wider ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
