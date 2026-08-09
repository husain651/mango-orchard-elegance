import React, { useCallback, createContext, useContext, useEffect, useState } from "react";

interface ComparisonValue {
  compareList: string[];
  addToCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  isInCompare: (slug: string) => boolean;
}

const ComparisonContext = createContext<ComparisonValue | null>(null);

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function useComparison() {
  const ctx = useContext(ComparisonContext);
  if (!ctx) throw new Error("useComparison must be used inside ComparisonProvider");
  return ctx;
}

export function ComparisonProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = useState<string[]>([]);

  useEffect(() => {
    setCompareList(read<string[]>("mp-compare", []));
  }, []);

  const addToCompare = useCallback((slug: string) => {
    setCompareList((prev) => {
      if (prev.length >= 4) {
        return prev; // Max 4 items for comparison
      }
      if (prev.includes(slug)) {
        return prev;
      }
      return [...prev, slug];
    });
  }, []);

  const removeFromCompare = useCallback((slug: string) => {
    setCompareList((prev) => prev.filter((s) => s !== slug));
  }, []);

  const clearCompare = useCallback(() => {
    setCompareList([]);
  }, []);

  const isInCompare = useCallback((slug: string) => {
    return compareList.includes(slug);
  }, [compareList]);

  useEffect(() => {
    localStorage.setItem("mp-compare", JSON.stringify(compareList));
  }, [compareList]);

  return (
    <ComparisonContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, clearCompare, isInCompare }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}
