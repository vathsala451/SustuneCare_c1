"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, ShieldCheck, Lock } from "lucide-react";
import { usePortalAuth } from "@/lib/portal-auth-context";
import { PortalDashboard } from "@/components/portal/PortalDashboard";

export default function PortalPage() {
  const { client, isAuthenticated, isLoading } = usePortalAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/portal/login");
    }
  }, [isLoading, isAuthenticated, router]);

  // Loading state while verifying signed session cookie
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#071329] flex flex-col items-center justify-center p-4">
        <div className="bg-white dark:bg-[#0B1F3A] p-8 rounded-3xl shadow-xl border border-[#DCE3EA] dark:border-white/10 max-w-sm w-full text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white p-2.5 shadow-md border border-[#D8B56D]/50 flex items-center justify-center">
            <Image
              src="/brand/logo.png"
              alt="Sustune Care Logo"
              width={56}
              height={56}
              priority
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="font-serif text-lg font-bold text-[#0B1F3A] dark:text-white">
              Authenticating Portal Access
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Verifying 256-bit encrypted institutional session...
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#D8B56D] pt-2">
            <Loader2 className="w-4 h-4 animate-spin text-[#D8B56D]" />
            <span>Connecting to Fiduciary Cloud...</span>
          </div>
        </div>
      </div>
    );
  }

  // If unauthenticated, return null while redirecting
  if (!isAuthenticated || !client) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#061224]">
      <PortalDashboard />
    </div>
  );
}
