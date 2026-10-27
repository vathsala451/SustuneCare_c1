import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  icon,
  iconRight,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 rounded-[6px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  // Follow official Brand manual button hierarchy:
  // Primary: Cerulean Blue (#0073B7) -> Deep Marine (#0D3B66) on hover
  // Secondary: Emerald Green (#0A8754) -> Darker Green (#076740) on hover
  // Outline: Gold border (#C99738) with accessible contrast
  const variantClasses = {
    primary:
      "bg-brand-cerulean text-white hover:bg-brand-navy dark:hover:bg-brand-cerulean/80 shadow-sm hover:shadow active:translate-y-px",
    secondary:
      "bg-brand-emerald text-white hover:bg-brand-emeraldDark shadow-sm hover:shadow active:translate-y-px",
    outline:
      "bg-transparent border border-brand-gold text-brand-navy dark:text-[#F3DC87] hover:bg-brand-goldLight/70 dark:hover:bg-[#D8B56D]/15 active:translate-y-px",
    gold:
      "bg-brand-gold text-white hover:bg-brand-goldBronze shadow-sm hover:shadow active:translate-y-px",
    ghost:
      "bg-transparent text-brand-slate dark:text-slate-200 hover:text-brand-navy dark:hover:text-white hover:bg-brand-mist dark:hover:bg-white/10 active:translate-y-px",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {iconRight && <span className="shrink-0">{iconRight}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}
