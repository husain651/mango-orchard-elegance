import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* ---------- theme ---------- */

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

/* ---------- shop ---------- */

export type CartLine = { slug: string; size: string; qty: number; price: number };

type ShopValue = {
  cart: CartLine[];
  wishlist: string[];
  recent: string[];
  addToCart: (line: CartLine) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  removeLine: (slug: string, size: string) => void;
  toggleWishlist: (slug: string) => void;
  markViewed: (slug: string) => void;
  clearCart: () => void;
  count: number;
  subtotal: number;
};

const ShopContext = createContext<ShopValue | null>(null);

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside StoreProvider");
  return ctx;
}

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);

  // hydrate after mount to avoid SSR mismatch
  useEffect(() => {
    const stored = read<Theme | null>("mp-theme", null);
    const initial =
      stored ??
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    setCart(read<CartLine[]>("mp-cart", []));
    setWishlist(read<string[]>("mp-wishlist", []));
    setRecent(read<string[]>("mp-recent", []));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("mp-theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => localStorage.setItem("mp-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("mp-wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("mp-recent", JSON.stringify(recent)), [recent]);

  const addToCart = useCallback((line: CartLine) => {
    setCart((prev) => {
      const found = prev.find((l) => l.slug === line.slug && l.size === line.size);
      if (found)
        return prev.map((l) =>
          l === found ? { ...l, qty: Math.min(99, l.qty + line.qty) } : l,
        );
      return [...prev, line];
    });
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setCart((prev) =>
      prev
        .map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const removeLine = useCallback((slug: string, size: string) => {
    setCart((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }, []);

  const markViewed = useCallback((slug: string) => {
    setRecent((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, 6));
  }, []);

  const value = useMemo<ShopValue>(
    () => ({
      cart,
      wishlist,
      recent,
      addToCart,
      setQty,
      removeLine,
      toggleWishlist,
      markViewed,
      clearCart: () => setCart([]),
      count: cart.reduce((n, l) => n + l.qty, 0),
      subtotal: cart.reduce((n, l) => n + l.qty * l.price, 0),
    }),
    [cart, wishlist, recent, addToCart, setQty, removeLine, toggleWishlist, markViewed],
  );

  return (
    <ThemeContext.Provider
      value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }}
    >
      <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    </ThemeContext.Provider>
  );
}
