import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Globe,
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useShop, useTheme } from "@/lib/store";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/corporate", label: "Corporate Orders" },
  { to: "/shipping", label: "International Delivery" },
  { to: "/farms", label: "Our Farms" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { count, wishlist } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-soft"
          : "border-b border-transparent bg-transparent text-primary-foreground"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-luxe flex h-16 items-center justify-between gap-4 md:h-20"
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="MangoPlus home">
          <span className="bg-gradient-gold grid size-9 place-items-center rounded-full text-accent-foreground shadow-gold">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
              <path d="M12 3c4 0 8 3 8 8s-4 10-8 10-8-5-8-10 4-8 8-8Zm0 2c-2.7 0-6 2-6 6s3.2 8 6 8 6-4.6 6-8-3.3-6-6-6Z" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
            Mango<span className="text-gradient-gold">Plus</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "after:scale-x-100" }}
                inactiveProps={{ className: "opacity-70" }}
                className="relative rounded-full px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setSearchOpen((s) => !s)}
            aria-label="Search products"
            aria-expanded={searchOpen}
            className="grid size-11 place-items-center rounded-full opacity-80 transition-colors hover:bg-secondary hover:opacity-100"
          >
            <Search className="size-[18px]" />
          </button>
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-11 place-items-center rounded-full opacity-80 transition-colors hover:bg-secondary hover:opacity-100"
          >
            {theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </button>
          <button
            aria-label="Language: English"
            className="hidden size-11 place-items-center rounded-full opacity-80 transition-colors hover:bg-secondary hover:opacity-100 sm:grid"
          >
            <Globe className="size-[18px]" />
          </button>
          <Link
            to="/wishlist"
            aria-label={`Wishlist, ${wishlist.length} items`}
            className="relative grid size-11 place-items-center rounded-full opacity-80 transition-colors hover:bg-secondary hover:opacity-100"
          >
            <Heart className="size-[18px]" />
            {wishlist.length > 0 && <Badge>{wishlist.length}</Badge>}
          </Link>
          <Link
            to="/cart"
            aria-label={`Cart, ${count} items`}
            className="relative grid size-11 place-items-center rounded-full opacity-80 transition-colors hover:bg-secondary hover:opacity-100"
          >
            <ShoppingBag className="size-[18px]" />
            {count > 0 && <Badge>{count}</Badge>}
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-full transition-colors hover:bg-secondary xl:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-card/80 backdrop-blur-xl"
          >
            <form
              className="container-luxe flex items-center gap-3 py-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <label className="sr-only" htmlFor="site-search">
                Search varieties
              </label>
              <input
                id="site-search"
                placeholder="Search Sindhri, Chaunsa, Anwar Ratol…"
                className="w-full bg-transparent py-2 text-sm outline-hidden placeholder:text-muted-foreground"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background xl:hidden"
          >
            <div className="container-luxe flex h-16 items-center justify-between md:h-20">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="container-luxe mt-6 space-y-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b border-border py-4 text-2xl"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-gold absolute -top-0.5 right-0.5 grid min-w-4 place-items-center rounded-full px-1 text-[10px] font-bold text-accent-foreground">
      {children}
    </span>
  );
}
