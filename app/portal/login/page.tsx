"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  HeartHandshake,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  X,
  PhoneCall,
  Sparkles,
  Building2,
  User,
  UserPlus,
  MapPin,
  Phone,
} from "lucide-react";
import { usePortalAuth } from "@/lib/portal-auth-context";

function PortalLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, signup, isAuthenticated, isLoading: authLoading, requestPasswordReset } = usePortalAuth();

  // Mode: Sign In or Sign Up
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  // Sign In form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Sign Up form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupLocation, setSignupLocation] = useState("");
  const [signupServiceTier, setSignupServiceTier] = useState<"dual" | "aegis" | "sparsh">("dual");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupShowPassword, setSignupShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Submission & Alert state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Forgot password modal
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetSubmitting, setIsResetSubmitting] = useState(false);
  const [resetStatus, setResetStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Sync mode from URL search param if present
  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "signup") {
      setAuthMode("signup");
    } else if (modeParam === "signin") {
      setAuthMode("signin");
    }
  }, [searchParams]);

  // Pre-fill / quick demo client presets for testing
  const demoAccounts = [
    {
      role: "Dual-Shield (Both)",
      email: "anand.sharma@sustunecare.com",
      tier: "dual",
      desc: "Full access to Aegis properties & Sparsh parent care",
      icon: <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />,
    },
    {
      role: "Aegis Property Only",
      email: "rajesh.patel@sustunecare.com",
      tier: "aegis",
      desc: "Access strictly limited to real estate stewardship",
      icon: <Building2 className="w-3.5 h-3.5 text-[#D8B56D]" />,
    },
    {
      role: "Sparsh Elder Care Only",
      email: "priya.deshmukh@sustunecare.com",
      tier: "sparsh",
      desc: "Access strictly limited to parental health telemetry",
      icon: <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" />,
    },
  ];

  // If already authenticated, redirect to portal dashboard
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      router.push("/portal");
    }
  }, [authLoading, isAuthenticated, router]);

  // Handle signed out notification
  useEffect(() => {
    if (searchParams.get("signedOut") === "1") {
      setSuccessMessage("You have been securely signed out.");
    }
  }, [searchParams]);

  const selectDemoAccount = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("Sustune@2026");
    setErrorMessage(null);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Client-side validations
    if (!email.trim()) {
      setErrorMessage("Please enter your registered email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setIsSubmitting(true);
    const result = await login(email, password, rememberMe);
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMessage(result.message);
      // Brief pause to display success state before redirecting
      setTimeout(() => {
        router.push("/portal");
      }, 700);
    } else {
      setErrorMessage(result.message);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Client-side validations
    if (!signupName.trim() || signupName.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!signupEmail.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!signupPassword) {
      setErrorMessage("Please choose a secure password.");
      return;
    }

    if (signupPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters in length.");
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setErrorMessage("Passwords do not match. Please re-enter.");
      return;
    }

    if (!agreeTerms) {
      setErrorMessage("Please agree to the Sustune Care terms to register.");
      return;
    }

    setIsSubmitting(true);
    const result = await signup({
      name: signupName.trim(),
      email: signupEmail.trim(),
      password: signupPassword,
      phone: signupPhone.trim(),
      nriLocation: signupLocation.trim(),
      serviceTier: signupServiceTier,
      autoLogin: false,
    });
    setIsSubmitting(false);

    if (result.success) {
      // Pre-fill login email, switch to Sign In tab so the user can easily log in
      setEmail(signupEmail.trim());
      setPassword("");
      setSuccessMessage(
        `Account created successfully for ${signupName.trim()}! Please enter your password to sign in.`
      );
      setAuthMode("signin");
    } else {
      setErrorMessage(result.message);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;

    setIsResetSubmitting(true);
    const res = await requestPasswordReset(resetEmail);
    setIsResetSubmitting(false);
    setResetStatus(res);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#071329] flex flex-col justify-between text-[#263548] dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Main Portal Login & Registration Layout */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center my-4 sm:my-8">
        <div className="w-full bg-white dark:bg-[#0B1F3A] rounded-3xl shadow-xl border border-[#DCE3EA] dark:border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Section — Brand and Visual Experience (5 Cols) */}
          <div className="lg:col-span-5 relative bg-[#071329] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
            {/* Background Marketing Image with Vignette */}
            <div className="absolute inset-0 select-none pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Sustune Care Luxury Property and Family Care"
                fill
                priority
                className="object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#071329]/90 via-[#071329]/65 to-[#071329]/95" />
              {/* Subtle Architectural Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            </div>

            {/* Top Brand Badging */}
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D8B56D]/40 backdrop-blur-md text-[11px] font-bold text-[#F3DC87] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B56D]" />
                <span>Unified NRI Client Gateway</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Welcome to Your <br />
                <span className="text-[#D8B56D] bg-gradient-to-r from-[#F3DC87] via-[#D8B56D] to-[#B79224] bg-clip-text text-transparent">
                  Sustune Care Portal
                </span>
              </h1>

              <p className="text-sm text-slate-200 leading-relaxed font-body">
                Access your care services, property information, and client updates in one place.
              </p>
            </div>

            {/* Middle Feature Highlights - Minimal & Balanced */}
            <div className="relative z-10 my-8 space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#D8B56D]/15 border border-[#D8B56D]/30 flex items-center justify-center shrink-0 text-[#F3DC87] mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#D8B56D]" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                    Aegis Property Stewardship
                  </h2>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Live escrow rental ledgers, 80-point inspection audits &amp; maintenance tickets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                    Sparsh Family &amp; Elder Care
                  </h2>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Parental vitals telemetry, OPD doctor accompaniment logs &amp; medication schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Security Assurance */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#D8B56D]" />
                <span>256-bit Encrypted Banking &amp; Telemetry</span>
              </div>
              <span className="text-slate-300 font-semibold">NABH &amp; RERA Aligned</span>
            </div>
          </div>

          {/* Right Section — Auth Forms (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white dark:bg-[#0B1F3A]">
            <div>
              {/* Form Header with Emblem */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-white/10">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3A] dark:text-white">
                    {authMode === "signin" ? "Client Portal Login" : "Create Portal Account"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {authMode === "signin"
                      ? "Sign in to manage your ancestral properties and parental healthcare."
                      : "Register as an NRI client to access fiduciary property and elder care services."}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/10 border border-[#D8B56D]/40 p-2 flex items-center justify-center shadow-sm shrink-0">
                  <Image
                    src="/brand/logo.png"
                    alt="Sustune Care Emblem"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Seamless Auth Mode Switcher */}
              <div className="flex rounded-xl bg-slate-100 dark:bg-white/10 p-1 mb-5 border border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  id="tab-signin"
                  onClick={() => {
                    setAuthMode("signin");
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    authMode === "signin"
                      ? "bg-white dark:bg-[#071329] text-[#0B1F3A] dark:text-[#F3DC87] shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white"
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>
                <button
                  type="button"
                  id="tab-signup"
                  onClick={() => {
                    setAuthMode("signup");
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    authMode === "signup"
                      ? "bg-white dark:bg-[#071329] text-[#0B1F3A] dark:text-[#F3DC87] shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white"
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Sign Up / Register</span>
                </button>
              </div>

              {/* Status Banners */}
              {errorMessage && (
                <div
                  role="alert"
                  className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-xs flex items-start gap-2.5 animate-in fade-in"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="mb-5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-200 text-xs flex items-start gap-2.5 animate-in fade-in"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span className="leading-relaxed font-semibold">{successMessage}</span>
                </div>
              )}

              {/* MODE 1: SIGN IN */}
              {authMode === "signin" && (
                <div>
                  {/* One-Click Quick Test Accounts Pills */}
                  <div className="mb-5 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#D8B56D]" />
                        Test Role Permissions:
                      </span>
                      <span className="text-[10px] text-slate-400">1-Click Auto-Fill</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {demoAccounts.map((acc) => (
                        <button
                          key={acc.email}
                          type="button"
                          onClick={() => selectDemoAccount(acc.email)}
                          className={`text-left p-2 rounded-xl text-xs border transition-all cursor-pointer flex flex-col justify-between ${
                            email === acc.email
                              ? "bg-white dark:bg-[#142d52] border-[#D8B56D] ring-1 ring-[#D8B56D] shadow-sm"
                              : "bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-[#D8B56D]/50"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold text-[#0B1F3A] dark:text-white text-[11px]">
                            {acc.icon}
                            <span>{acc.role}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-1">
                            {acc.email.split("@")[0]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sign In Form */}
                  <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="client-email"
                        className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1.5"
                      >
                        Client Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="client-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. anand.sharma@sustunecare.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="client-password"
                          className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider"
                        >
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setIsForgotModalOpen(true)}
                          className="text-xs font-semibold text-[#B79224] dark:text-[#F3DC87] hover:underline cursor-pointer"
                        >
                          Forgot Password?
                        </button>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          id="client-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] focus:border-transparent transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded border-slate-300 text-[#0B1F3A] focus:ring-[#D8B56D]"
                        />
                        <span>Remember this device for 7 days</span>
                      </label>
                    </div>

                    {/* Submit Sign In Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#0B1F3A]" />
                            <span>Verifying Credentials...</span>
                          </>
                        ) : (
                          <>
                            <span>Sign In to Client Portal</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Switch to Sign Up Notice */}
                  <div className="mt-5 text-center text-xs text-slate-500 dark:text-slate-400">
                    <span>Don&apos;t have an NRI client account yet? </span>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode("signup");
                        setErrorMessage(null);
                      }}
                      className="font-bold text-[#B79224] dark:text-[#F3DC87] hover:underline cursor-pointer ml-1"
                    >
                      Sign Up &amp; Create Account →
                    </button>
                  </div>
                </div>
              )}

              {/* MODE 2: SIGN UP */}
              {authMode === "signup" && (
                <div>
                  <form onSubmit={handleSignupSubmit} className="space-y-3.5" noValidate>
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="signup-name"
                        className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="signup-name"
                          type="text"
                          required
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          placeholder="e.g. Vikramaditya Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="signup-email"
                        className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="signup-email"
                          type="email"
                          required
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          placeholder="e.g. vikram.sharma@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Current Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="signup-phone"
                          className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1"
                        >
                          Phone / WhatsApp
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            id="signup-phone"
                            type="tel"
                            value={signupPhone}
                            onChange={(e) => setSignupPhone(e.target.value)}
                            placeholder="+1 (408) 555-0199"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="signup-location"
                          className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1"
                        >
                          Current Location / Country
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <input
                            id="signup-location"
                            type="text"
                            value={signupLocation}
                            onChange={(e) => setSignupLocation(e.target.value)}
                            placeholder="San Jose, CA (USA)"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Plan Selection */}
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                        Selected Service Membership
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setSignupServiceTier("dual")}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                            signupServiceTier === "dual"
                              ? "bg-[#FAF8F5] dark:bg-[#142d52] border-[#D8B56D] ring-2 ring-[#D8B56D]"
                              : "border-slate-200 dark:border-white/10 hover:border-[#D8B56D]/50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5 font-bold text-xs text-[#0B1F3A] dark:text-white">
                              <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />
                              <span>Dual-Shield</span>
                            </div>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#D8B56D]/20 text-[#B79224] dark:text-[#F3DC87]">
                              Full
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">
                            Property + Elder Care
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSignupServiceTier("aegis")}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            signupServiceTier === "aegis"
                              ? "bg-[#FAF8F5] dark:bg-[#142d52] border-[#D8B56D] ring-2 ring-[#D8B56D]"
                              : "border-slate-200 dark:border-white/10 hover:border-[#D8B56D]/50"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold text-xs text-[#0B1F3A] dark:text-white mb-1">
                            <Building2 className="w-3.5 h-3.5 text-[#D8B56D]" />
                            <span>Aegis Only</span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">
                            Real Estate Stewardship
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSignupServiceTier("sparsh")}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            signupServiceTier === "sparsh"
                              ? "bg-[#FAF8F5] dark:bg-[#142d52] border-emerald-500 ring-2 ring-emerald-500"
                              : "border-slate-200 dark:border-white/10 hover:border-emerald-500/50"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 font-bold text-xs text-[#0B1F3A] dark:text-white mb-1">
                            <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Sparsh Only</span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">
                            Parent Elder Care
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Password & Confirm Password */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="signup-password"
                          className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1"
                        >
                          Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Lock className="w-4 h-4" />
                          </div>
                          <input
                            id="signup-password"
                            type={signupShowPassword ? "text" : "password"}
                            required
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            placeholder="At least 6 chars"
                            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setSignupShowPassword(!signupShowPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                            aria-label="Toggle password visibility"
                          >
                            {signupShowPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="signup-confirm-password"
                          className="block text-xs font-bold text-[#0B1F3A] dark:text-slate-200 uppercase tracking-wider mb-1"
                        >
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Lock className="w-4 h-4" />
                          </div>
                          <input
                            id="signup-confirm-password"
                            type={signupShowPassword ? "text" : "password"}
                            required
                            value={signupConfirmPassword}
                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                            placeholder="Repeat password"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D8B56D] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Agree Terms Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0B1F3A] focus:ring-[#D8B56D]"
                        />
                        <span>
                          I agree to Sustune Care&apos;s Fiduciary Client Agreement and Privacy Policy.
                        </span>
                      </label>
                    </div>

                    {/* Submit Sign Up Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#0B1F3A]" />
                            <span>Creating Client Account...</span>
                          </>
                        ) : (
                          <>
                            <span>Create NRI Account &amp; Proceed to Login</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Switch to Sign In Notice */}
                  <div className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
                    <span>Already have a Sustune Care account? </span>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode("signin");
                        setErrorMessage(null);
                      }}
                      className="font-bold text-[#B79224] dark:text-[#F3DC87] hover:underline cursor-pointer ml-1"
                    >
                      Sign In here →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Support Desk Notice */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#D8B56D]" />
                <span>Need assistance with your account?</span>
              </div>
              <Link
                href="/contact?interest=portal_support"
                className="font-bold text-[#0B1F3A] dark:text-[#F3DC87] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D8B56D]" />
                <span>Contact 24/7 Concierge Support</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 Sustune Care Services Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/why-sustune" className="hover:underline">
              Governance &amp; Fiduciary Standards
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:underline">
              Emergency SOS Desk
            </Link>
          </div>
        </div>
      </footer>

      {/* Forgot Password Modal */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-[#DCE3EA] dark:border-white/15">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#D8B56D]/20 flex items-center justify-center text-[#D8B56D]">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold">Reset Portal Password</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsForgotModalOpen(false);
                  setResetStatus(null);
                }}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {resetStatus ? (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs leading-relaxed">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Password Reset Link Dispatched</span>
                  </div>
                  {resetStatus.message}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotModalOpen(false);
                    setResetStatus(null);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] font-bold text-xs cursor-pointer"
                >
                  Return to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed">
                  Enter your registered client email address. We will dispatch an encrypted, time-limited reset link to your email and verified WhatsApp careline.
                </p>

                <div>
                  <label htmlFor="reset-email" className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Registered Email
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="e.g. anand.sharma@sustunecare.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 text-sm focus:ring-2 focus:ring-[#D8B56D] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isResetSubmitting}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D8B56D] to-[#B79224] text-[#0B1F3A] font-bold text-xs shadow-sm hover:brightness-105 cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                  >
                    {isResetSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Dispatch Reset Link</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PortalLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#071329] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#D8B56D]" />
        </div>
      }
    >
      <PortalLoginForm />
    </Suspense>
  );
}
