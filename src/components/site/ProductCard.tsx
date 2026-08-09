import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, GitCompare, Eye } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/products";
import { useShop } from "@/lib/store";
import { useComparison } from "@/lib/comparison";
import { QuickView } from "./QuickView";

export function SweetnessMeter({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
        Sweetness
      </span>
      <div
        className="flex gap-[3px]"
        role="img"
        aria-label={`Sweetness ${value} out of 10`}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className={`h-3.5 w-1 rounded-full ${
              i < value ? "bg-gradient-gold" : "bg-border"
            }`}
          />
        ))}
      </div>
      <span className="text-[11px] font-semibold">{value}/10</span>
    </div>
  );
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useComparison();
  const saved = wishlist.includes(product.slug);
  const compared = isInCompare(product.slug);
  const soldOut = product.stock === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <button
        onClick={() => {
          toggleWishlist(product.slug);
          toast(saved ? "Removed from wishlist" : "Saved to wishlist");
        }}
        aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        className="absolute top-4 right-4 z-10 grid size-11 place-items-center rounded-full glass transition-colors hover:text-accent"
      >
        <Heart className={`size-[18px] ${saved ? "fill-accent text-accent" : ""}`} />
      </button>

      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden bg-secondary/60"
      >
        <div className="aspect-4/3 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={`${product.name} mango from ${product.origin}`}
            width={1024}
            height={1024}
            loading="lazy"
            className="size-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>
        <span className="absolute bottom-4 left-4 rounded-full glass px-3 py-1 text-[11px] font-medium">
          {product.season}
        </span>
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-semibold ${
            soldOut
              ? "bg-secondary text-muted-foreground"
              : "bg-gradient-gold text-accent-foreground"
          }`}
        >
          {soldOut ? "Sold out" : product.stock < 60 ? `Only ${product.stock} left` : "In stock"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-semibold">{product.name}</h3>
          <p className="text-sm font-semibold">
            ${product.price}
            <span className="text-xs font-normal text-muted-foreground"> / 5 kg</span>
          </p>
        </div>
        <SweetnessMeter value={product.sweetness} />
        <p className="text-sm/relaxed text-muted-foreground">{product.description}</p>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border pt-3 text-xs">
          <div className="flex justify-between gap-2">
            <dt className="text-muted-foreground">Weight</dt>
            <dd className="text-right font-medium">{product.weight}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="text-muted-foreground">Origin</dt>
            <dd className="text-right font-medium">{product.origin}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2 pt-3">
          <button
            disabled={soldOut}
            onClick={() => {
              addToCart({
                slug: product.slug,
                size: product.sizes[0] ?? "5 kg",
                qty: 1,
                price: product.price,
              });
              toast.success(`${product.name} added to cart`);
            }}
            className="bg-gradient-gold flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-40"
          >
            <ShoppingBag className="size-4" /> Add to cart
          </button>
          <QuickView product={product}>
            <button
              className="flex min-h-11 items-center rounded-full border border-border px-3 text-sm font-medium transition-colors hover:bg-secondary"
              title="Quick view"
            >
              <Eye className="size-4" />
            </button>
          </QuickView>
          <button
            onClick={() => {
              if (compared) {
                removeFromCompare(product.slug);
                toast("Removed from comparison");
              } else {
                if (compareList.length >= 4) {
                  toast.error("Maximum 4 items can be compared");
                  return;
                }
                addToCompare(product.slug);
                toast("Added to comparison");
              }
            }}
            className={`flex min-h-11 items-center rounded-full border px-3 text-sm font-medium transition-colors ${
              compared
                ? "border-accent bg-accent/10 text-accent-foreground dark:text-accent"
                : "border-border hover:bg-secondary"
            }`}
            title={compared ? "Remove from comparison" : "Add to comparison"}
          >
            <GitCompare className="size-4" />
          </button>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
