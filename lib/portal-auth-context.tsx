"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { ClientProfile } from "./portal-auth";

export interface SignupData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  nriLocation?: string;
  serviceTier?: "dual" | "aegis" | "sparsh";
  autoLogin?: boolean;
}

interface PortalAuthContextType {
  client: ClientProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; message: string }>;
  signup: (data: SignupData) => Promise<{ success: boolean; message: string; client?: ClientProfile }>;
  logout: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<{ success: boolean; message: string }>;
  refreshSession: () => Promise<void>;
}

const PortalAuthContext = createContext<PortalAuthContextType | undefined>(undefined);

export function PortalAuthProvider({ children }: { children: React.ReactNode }) {
  const [client, setClient] = useState<ClientProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  const refreshSession = useCallback(async () => {
    try {
      const res = await fetch("/api/portal/session", {
        method: "GET",
        headers: { "Cache-Control": "no-cache" },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.authenticated && data.client) {
          setClient(data.client);
        } else {
          setClient(null);
        }
      } else {
        setClient(null);
      }
    } catch {
      setClient(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  const login = async (email: string, password: string, rememberMe: boolean = true) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/portal/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setClient(data.client);
        setIsLoading(false);
        return { success: true, message: data.message };
      } else {
        setIsLoading(false);
        return { success: false, message: data.message || "Authentication failed." };
      }
    } catch {
      setIsLoading(false);
      return {
        success: false,
        message: "Network connection error. Please verify your internet connection.",
      };
    }
  };

  const signup = async (data: SignupData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/portal/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        if (result.client && data.autoLogin !== false) {
          setClient(result.client);
        }
        setIsLoading(false);
        return { success: true, message: result.message, client: result.client };
      } else {
        setIsLoading(false);
        return { success: false, message: result.message || "Signup failed. Please try again." };
      }
    } catch {
      setIsLoading(false);
      return {
        success: false,
        message: "Network connection error during sign up. Please try again.",
      };
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/portal/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout request error:", err);
    } finally {
      setClient(null);
      setIsLoading(false);
      router.push("/portal/login?signedOut=1");
    }
  };

  const requestPasswordReset = async (email: string) => {
    try {
      const res = await fetch("/api/portal/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      return { success: res.ok && data.success, message: data.message };
    } catch {
      return {
        success: false,
        message: "Failed to dispatch reset request. Please contact your dedicated concierge.",
      };
    }
  };

  return (
    <PortalAuthContext.Provider
      value={{
        client,
        isLoading,
        isAuthenticated: !!client,
        login,
        signup,
        logout,
        requestPasswordReset,
        refreshSession,
      }}
    >
      {children}
    </PortalAuthContext.Provider>
  );
}

export function usePortalAuth() {
  const context = useContext(PortalAuthContext);
  if (!context) {
    throw new Error("usePortalAuth must be used within a PortalAuthProvider");
  }
  return context;
}
