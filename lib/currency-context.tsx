"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Currency, CURRENCIES, CurrencyInfo } from "./pricing";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  info: CurrencyInfo;
  formatPrice: (amountInINR: number, options?: { perMonth?: boolean }) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("USD");

  const setCurrency = (c: Currency) => {
    if (CURRENCIES[c]) {
      setCurrencyState(c);
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("sustune_currency", c);
        } catch {
          // ignore localStorage errors in private browsing
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("sustune_currency") as Currency;
        if (saved && CURRENCIES[saved]) {
          setCurrencyState(saved);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const info = CURRENCIES[currency] || CURRENCIES.USD;

  const formatPrice = (amountInINR: number, options?: { perMonth?: boolean }) => {
    let result = "";
    if (currency === "INR") {
      result =
        amountInINR >= 100000
          ? `₹${(amountInINR / 100000).toFixed(1)} Lakh`
          : `₹${amountInINR.toLocaleString("en-IN")}`;
    } else {
      const converted = Math.round(amountInINR * info.rateFromINR);
      result = `${info.symbol}${converted.toLocaleString("en-US")}`;
    }
    if (options?.perMonth) {
      result += "/mo";
    }
    return result;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, info, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    const info = CURRENCIES.USD;
    return {
      currency: "USD",
      setCurrency: () => {},
      info,
      formatPrice: (amountInINR: number, options?: { perMonth?: boolean }) => {
        const converted = Math.round(amountInINR * info.rateFromINR);
        let res = `${info.symbol}${converted.toLocaleString("en-US")}`;
        if (options?.perMonth) res += "/mo";
        return res;
      },
    };
  }
  return context;
}
