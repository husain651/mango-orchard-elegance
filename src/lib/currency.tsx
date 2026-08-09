import React, { useCallback, createContext, useContext, useEffect, useState } from "react";

type Currency = "PKR" | "USD" | "EUR" | "GBP" | "AED";

interface CurrencyValue {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
}

const CurrencyContext = createContext<CurrencyValue | null>(null);

const exchangeRates: Record<Currency, number> = {
  PKR: 1,
  USD: 0.0036,
  EUR: 0.0033,
  GBP: 0.0028,
  AED: 0.013,
};

const currencySymbols: Record<Currency, string> = {
  PKR: "PKR",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AED: "AED",
};

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("PKR");

  useEffect(() => {
    const stored = read<Currency | null>("mp-currency", null);
    if (stored) {
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = useCallback((newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("mp-currency", JSON.stringify(newCurrency));
  }, []);

  const convertPrice = useCallback((price: number) => {
    return price * exchangeRates[currency];
  }, [currency]);

  const formatPrice = useCallback((price: number) => {
    const converted = convertPrice(price);
    return `${currencySymbols[currency]}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }, [currency, convertPrice]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}
