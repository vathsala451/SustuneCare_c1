import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "mist" | "navy" | "bordered";
  hoverEffect?: boolean;
  className?: string;
  id?: string;
}

export function Card({
  children,
  variant = "default",
  hoverEffect = false,
  className = "",
  id,
}: CardProps) {
  const baseClasses = "rounded-[12px] transition-all duration-300";

  const variantClasses = {
    default: "bg-white dark:bg-[#0B1F3A]/90 border border-brand-border dark:border-white/10 shadow-card text-brand-slate dark:text-slate-100",
    mist: "bg-brand-mist/60 dark:bg-[#0D2342] border border-brand-border/80 dark:border-white/10 shadow-subtle text-brand-slate dark:text-slate-100",
    navy: "bg-brand-navy text-white border border-brand-gold/30 shadow-card",
    bordered: "bg-white dark:bg-[#0B1F3A] border-2 border-brand-gold/40 shadow-sm text-brand-slate dark:text-slate-100",
  };

  const hoverClasses = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-cardHover hover:border-brand-gold/50 cursor-pointer"
    : "";

  return (
    <div
      id={id}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
  icon,
  className = "",
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-start justify-between gap-4 mb-4 ${className}`}>
      <div className="flex items-center gap-3">
        {icon && <div className="shrink-0">{icon}</div>}
        <div>
          <h3 className="font-display font-bold text-lg text-brand-navy dark:text-white leading-snug">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-brand-slateLight dark:text-slate-300 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
