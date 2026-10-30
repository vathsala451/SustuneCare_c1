"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  HeartHandshake,
  LayoutDashboard,
  Menu,
  X,
  Sparkles,
  PhoneCall,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  interface NavLinkItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    badge?: string;
    badgeColor?: string;
  }

  const navLinks: NavLinkItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Aegis Property",
      href: "/aegis",
      icon: <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />,
    },
    {
      label: "Sparsh Elder Care",
      href: "/sparsh",
      icon: <HeartHandshake className="w-4 h-4 text-[#176B63]" />,
    },
    {
      label: "Client Portal",
      href: "/portal/login",
      icon: <LayoutDashboard className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    },
    { label: "Why Sustune", href: "/why-sustune" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0B1F3A]/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-white/10 py-3"
          : "bg-white dark:bg-[#0B1F3A] border-b border-slate-100 dark:border-white/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Wordmark */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all focus-ring ${
                  isActive
                    ? "text-[#0B1F3A] dark:text-white bg-slate-100 dark:bg-white/10 font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#0B1F3A] dark:hover:text-[#F3DC87] hover:bg-slate-50 dark:hover:bg-white/10"
                }`}
              >
                {link.icon && <span className="shrink-0">{link.icon}</span>}
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider border ${link.badgeColor}`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle variant="header" />

          <Link
            href="/portal/login"
            className="text-xs font-semibold text-[#0B1F3A] dark:text-slate-200 hover:text-[#176B63] dark:hover:text-[#F3DC87] px-3.5 py-2 rounded-lg border border-slate-200 dark:border-white/20 hover:border-[#D8B56D]/60 transition-all flex items-center gap-1.5 focus-ring"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>Portal Login</span>
          </Link>

          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold shadow-sm"
            icon={<Sparkles className="w-3.5 h-3.5 text-[#0B1F3A]" />}
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Actions: Theme Toggle + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle variant="header" />

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg focus-ring"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0B1F3A] dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-[#0B1F3A] dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-full bg-white dark:bg-[#0B1F3A] border-b border-slate-200 dark:border-white/10 shadow-2xl px-4 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1 mb-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-slate-100 dark:bg-white/10 text-[#0B1F3A] dark:text-white font-bold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-[#0B1F3A] dark:hover:text-[#F3DC87]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon || <span className="w-1.5 h-1.5 rounded-full bg-[#D8B56D]" />}
                    <span>{link.label}</span>
                  </div>
                  {link.badge ? (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-col gap-2.5">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              fullWidth
              className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold"
              icon={<Sparkles className="w-4 h-4 text-[#0B1F3A]" />}
            >
              Book NRI Strategy Consultation
            </Button>
            <Button
              href="/portal/login"
              variant="outline"
              size="md"
              fullWidth
              className="border-slate-300 dark:border-white/20 text-[#0B1F3A] dark:text-white"
              icon={<LayoutDashboard className="w-4 h-4 text-[#D8B56D]" />}
            >
              Client Portal Login
            </Button>
            <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>24/7 NRI Careline: +91 800-SUSTUNE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
