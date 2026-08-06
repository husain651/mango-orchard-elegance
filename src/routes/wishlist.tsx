import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { useShop } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your Wishlist | MangoPlus" },
      { name: "description", content: "Mango varieties you've saved for the coming season." },
      { property: "og:title", content: "Your Wishlist | MangoPlus" },
      { property: "og:description", content: "Mango varieties you've saved for the coming season." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Wishlist,
});

function Wishlist() {
  const { wishlist } = useShop();
  const saved = products.filter((p) => wishlist.includes(p.slug));

  return (
    <>
      <PageHeader eyebrow="Wishlist" title="Saved for later" />
      <section className="section">
        <div className="container-luxe">
          {saved.length === 0 ? (
            <div className="rounded-4xl border border-border bg-card p-14 text-center shadow-soft">
              <p className="font-display text-2xl font-semibold">Nothing saved yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tap the heart on any variety to keep it here.
              </p>
              <Link
                to="/products"
                className="bg-gradient-gold mt-8 inline-flex min-h-12 items-center rounded-full px-8 text-sm font-semibold text-accent-foreground"
              >
                Browse varieties
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
