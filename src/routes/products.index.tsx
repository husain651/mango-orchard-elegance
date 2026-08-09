import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { useShop } from "@/lib/store";
import { useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Premium Mango Varieties | MangoPlus" },
      {
        name: "description",
        content:
          "Browse export-grade Pakistani mango varieties: Sindhri, Chaunsa, White and Black Chaunsa, Anwar Ratol, Langra and Dussehri — with season, sweetness and pricing.",
      },
      { property: "og:title", content: "Premium Mango Varieties | MangoPlus" },
      {
        property: "og:description",
        content: "Seven export-grade Pakistani mango cultivars, graded and shipped under cold chain.",
      },
    ],
  }),
  component: ProductsPage,
});

const sorts = ["Featured", "Price: low to high", "Price: high to low", "Sweetest"] as const;

function ProductsPage() {
  const search = useSearch({ from: "/products" });
  const [query, setQuery] = useState((search.q as string) || "");
  const [origin, setOrigin] = useState("All");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const { recent } = useShop();

  const origins = ["All", ...new Set(products.map((p) => p.origin.split(", ")[1] ?? p.origin))];

  const list = useMemo(() => {
    let out = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) &&
        (origin === "All" || p.origin.includes(origin)) &&
        (!inStockOnly || p.stock > 0),
    );
    if (sort === "Price: low to high") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "Price: high to low") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "Sweetest") out = [...out].sort((a, b) => b.sweetness - a.sweetness);
    return out;
  }, [query, origin, sort, inStockOnly]);

  const recentProducts = recent
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <>
      <PageHeader
        eyebrow="Our varieties"
        title={
          <>
            The mangoes that made <span className="text-gradient-gold italic">Pakistan famous.</span>
          </>
        }
        lead="Every cultivar below is graded for export, cold-chained from the orchard and available in retail cartons or container volumes."
      />

      <section className="section">
        <div className="container-luxe">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <SlidersHorizontal className="size-4" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide uppercase">Filter</span>
            </div>
            <label className="sr-only" htmlFor="q">
              Search varieties
            </label>
            <input
              id="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search varieties…"
              className="min-h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-hidden focus-visible:border-ring"
            />
            <label className="sr-only" htmlFor="origin">
              Filter by region
            </label>
            <select
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="min-h-11 rounded-full border border-input bg-background px-4 text-sm outline-hidden"
            >
              {origins.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <label className="sr-only" htmlFor="sort">
              Sort products
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
              className="min-h-11 rounded-full border border-input bg-background px-4 text-sm outline-hidden"
            >
              {sorts.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <label className="flex min-h-11 items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="size-4 accent-accent"
              />
              In stock only
            </label>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {list.length} {list.length === 1 ? "variety" : "varieties"}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">
              No varieties match those filters yet.
            </p>
          )}

          {recentProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="font-display text-2xl font-semibold">Recently viewed</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentProducts.slice(0, 3).map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
