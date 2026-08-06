import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, MapPin, Minus, Plus, ShieldCheck, Snowflake, Star, Truck } from "lucide-react";
import { toast } from "sonner";
import { ProductCard, SweetnessMeter } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { getProduct, products, type Product } from "@/lib/products";
import { useShop } from "@/lib/store";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Variety not found | MangoPlus" }, { name: "robots", content: "noindex" }],
      };
    const p = loaderData.product;
    const title = `${p.name} Mango — ${p.origin} | MangoPlus`;
    return {
      meta: [
        { title },
        { name: "description", content: `${p.description} Season ${p.season}. Export grade, cold-chain shipped worldwide.` },
        { property: "og:title", content: title },
        { property: "og:description", content: p.description },
      ],
    };
  },
  component: ProductDetail,
});

const reviews = [
  { name: "Amelia H.", flag: "🇬🇧", stars: 5, text: "Arrived at perfect ripeness, beautifully packed." },
  { name: "Omar A.", flag: "🇦🇪", stars: 5, text: "Consistent grade across the whole pallet." },
  { name: "Sara K.", flag: "🇨🇦", stars: 4, text: "Wonderful flavour; wish the season lasted longer." },
];

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { addToCart, toggleWishlist, wishlist, markViewed } = useShop();
  const [size, setSize] = useState(product.sizes[0] ?? "5 kg");
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const saved = wishlist.includes(product.slug);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  useEffect(() => {
    markViewed(product.slug);
    setSize(product.sizes[0] ?? "5 kg");
    setQty(1);
  }, [product.slug, product.sizes, markViewed]);

  return (
    <>
      <div className="container-luxe pt-28 pb-6 md:pt-36">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/products" className="hover:text-foreground">
            Products
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="container-luxe grid gap-12 pb-20 lg:grid-cols-2">
        <div>
          <div
            className="relative overflow-hidden rounded-4xl border border-border bg-secondary/60 p-10"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <img
              src={product.image}
              alt={`${product.name} mango`}
              width={1024}
              height={1024}
              className={`aspect-square w-full object-contain drop-shadow-2xl transition-transform duration-700 ${
                zoom ? "scale-125" : "scale-100"
              }`}
            />
            <span className="absolute top-5 left-5 rounded-full glass px-3 py-1 text-[11px] font-medium">
              {product.season}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="grid aspect-square place-items-center rounded-2xl border border-border bg-secondary/50 p-3"
              >
                <img
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  loading="lazy"
                  className="size-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold sm:text-5xl">{product.name}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" /> {product.origin}
          </p>
          <p className="mt-6 text-base/relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-6">
            <SweetnessMeter value={product.sweetness} />
          </div>

          <p className="font-display mt-6 text-4xl font-semibold">
            ${product.price}
            <span className="text-sm font-normal text-muted-foreground"> / 5 kg carton</span>
          </p>

          <fieldset className="mt-8">
            <legend className="text-xs font-semibold tracking-wide uppercase">Available sizes</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                    size === s
                      ? "bg-gradient-gold border-transparent text-accent-foreground"
                      : "border-border hover:bg-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-border p-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid size-11 place-items-center rounded-full hover:bg-secondary"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                aria-label="Increase quantity"
                className="grid size-11 place-items-center rounded-full hover:bg-secondary"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <button
              disabled={product.stock === 0}
              onClick={() => {
                addToCart({ slug: product.slug, size, qty, price: product.price });
                toast.success(`${qty} × ${product.name} (${size}) added to cart`);
              }}
              className="bg-gradient-gold min-h-12 flex-1 rounded-full px-8 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-40"
            >
              {product.stock === 0 ? "Sold out this season" : "Add to cart"}
            </button>
            <button
              onClick={() => toggleWishlist(product.slug)}
              aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
              className="grid size-12 place-items-center rounded-full border border-border hover:bg-secondary"
            >
              <Heart className={`size-5 ${saved ? "fill-accent text-accent" : ""}`} />
            </button>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-4 border-t border-border pt-8 sm:grid-cols-2">
            {[
              ["Weight per fruit", product.weight],
              ["Harvest", product.harvest],
              ["Farm", product.farm],
              ["Shelf life", product.shelfLife],
              ["Stock", product.stock > 0 ? `${product.stock} cartons available` : "Sold out"],
              ["Season", product.season],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs tracking-wide text-muted-foreground uppercase">{k}</dt>
                <dd className="mt-1 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Snowflake, t: "Cold chain 12°C" },
              { icon: Truck, t: "48–72h air freight" },
              { icon: ShieldCheck, t: "Phytosanitary cleared" },
            ].map((x) => (
              <li
                key={x.t}
                className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-xs font-medium"
              >
                <x.icon className="size-4 shrink-0 text-accent" aria-hidden="true" /> {x.t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">Nutrition per 100 g</h2>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {product.nutrition.map((n) => (
                <div key={n.label} className="rounded-2xl border border-border bg-card p-5">
                  <dt className="text-xs text-muted-foreground">{n.label}</dt>
                  <dd className="font-display mt-1 text-xl font-semibold">{n.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Customer reviews</h2>
            <ul className="mt-6 space-y-4">
              {reviews.map((r) => (
                <li key={r.name} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      {r.name} <span aria-hidden="true">{r.flag}</span>
                    </p>
                    <span className="flex" aria-label={`${r.stars} out of 5 stars`}>
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-accent text-accent" aria-hidden="true" />
                      ))}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">You may also like</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
