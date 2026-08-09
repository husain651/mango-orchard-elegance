import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { getProduct } from "@/lib/products";
import { useShop } from "@/lib/store";
import { useAuth } from "@/lib/auth";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | MangoPlus" },
      { name: "description", content: "Review your MangoPlus mango cartons, apply a coupon and check out." },
      { property: "og:title", content: "Your Cart | MangoPlus" },
      { property: "og:description", content: "Review your selected mango cartons and check out." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { cart, setQty, removeLine, subtotal, clearCart } = useShop();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shipping = subtotal > 0 ? 24 : 0;
  const total = Math.max(0, subtotal - subtotal * discount) + shipping;

  return (
    <>
      <PageHeader eyebrow="Cart" title="Your selection" />
      <section className="section">
        <div className="container-luxe">
          {cart.length === 0 ? (
            <div className="rounded-4xl border border-border bg-card p-14 text-center shadow-soft">
              <p className="font-display text-2xl font-semibold">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">
                The season is short — start with a Chaunsa carton.
              </p>
              <Link
                to="/products"
                className="bg-gradient-gold mt-8 inline-flex min-h-12 items-center rounded-full px-8 text-sm font-semibold text-accent-foreground"
              >
                Browse varieties
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <ul className="space-y-4">
                {cart.map((l) => {
                  const p = getProduct(l.slug);
                  return (
                    <li
                      key={`${l.slug}-${l.size}`}
                      className="flex items-center gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft"
                    >
                      {p && (
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="size-20 shrink-0 rounded-2xl bg-secondary/60 object-contain p-2"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-lg font-semibold">{p?.name ?? l.slug}</p>
                        <p className="text-xs text-muted-foreground">{l.size}</p>
                        <p className="mt-1 text-sm font-semibold">${l.price}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full border border-border p-1">
                        <button
                          onClick={() => setQty(l.slug, l.size, l.qty - 1)}
                          aria-label={`Decrease ${p?.name ?? l.slug} quantity`}
                          className="grid size-11 place-items-center rounded-full hover:bg-secondary"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.slug, l.size, l.qty + 1)}
                          aria-label={`Increase ${p?.name ?? l.slug} quantity`}
                          className="grid size-11 place-items-center rounded-full hover:bg-secondary"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeLine(l.slug, l.size)}
                        aria-label={`Remove ${p?.name ?? l.slug}`}
                        className="grid size-11 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-destructive"
                      >
                        <Trash2 className="size-[18px]" />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <aside className="h-fit rounded-4xl border border-border bg-card p-7 shadow-lift">
                <h2 className="font-display text-xl font-semibold">Order summary</h2>
                <form
                  className="mt-5 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (code.trim().toUpperCase() === "MANGO10") {
                      setDiscount(0.1);
                      toast.success("Coupon applied — 10% off");
                    } else {
                      setDiscount(0);
                      toast.error("That coupon isn't valid");
                    }
                  }}
                >
                  <label className="sr-only" htmlFor="coupon">
                    Coupon code
                  </label>
                  <input
                    id="coupon"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Coupon code (try MANGO10)"
                    className="min-h-11 min-w-0 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-hidden"
                  />
                  <button className="min-h-11 rounded-full border border-border px-5 text-sm font-medium hover:bg-secondary">
                    Apply
                  </button>
                </form>
                <dl className="mt-6 space-y-3 text-sm">
                  <Row k="Subtotal" v={`$${subtotal.toFixed(2)}`} />
                  {discount > 0 && <Row k="Discount" v={`−$${(subtotal * discount).toFixed(2)}`} />}
                  <Row k="Cold-chain shipping" v={`$${shipping.toFixed(2)}`} />
                  <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </dl>
                <Link
                  to="/checkout"
                  onClick={(e) => {
                    if (!isAuthenticated) {
                      e.preventDefault();
                      toast.error("Please login to continue");
                      navigate({ to: "/login" });
                    }
                  }}
                  className="bg-gradient-gold mt-6 min-h-12 w-full rounded-full text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01] flex items-center justify-center"
                >
                  Checkout
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <dt>{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
