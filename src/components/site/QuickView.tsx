import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";
import React, { useState } from "react";
import type { Product } from "@/lib/products";
import { useShop } from "@/lib/store";
import { useComparison } from "@/lib/comparison";
import { SweetnessMeter } from "./ProductCard";
import { Link } from "@tanstack/react-router";

interface QuickViewProps {
  product: Product;
  trigger?: React.ReactNode;
}

export function QuickView({ product, trigger }: QuickViewProps) {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useComparison();
  const saved = wishlist.includes(product.slug);
  const compared = isInCompare(product.slug);
  const soldOut = product.stock === 0;
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "5 kg");

  const handleAddToCart = () => {
    addToCart({
      slug: product.slug,
      size: selectedSize,
      qty: 1,
      price: product.price,
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleCompare = () => {
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
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" className="rounded-full">
            Quick View
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-3xl">
        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="bg-secondary/60 p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[300px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-semibold uppercase text-muted-foreground">
                  {product.season}
                </span>
                <h2 className="font-display text-2xl font-semibold mt-1">{product.name}</h2>
              </div>
              <button
                onClick={() => {
                  toggleWishlist(product.slug);
                  toast(saved ? "Removed from wishlist" : "Saved to wishlist");
                }}
                className="grid size-10 place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
              >
                <Heart className={`size-4 ${saved ? "fill-accent text-accent" : ""}`} />
              </button>
            </div>

            <p className="text-muted-foreground mb-4">{product.description}</p>

            <SweetnessMeter value={product.sweetness} />

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Origin</span>
                <span className="font-medium">{product.origin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weight</span>
                <span className="font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Availability</span>
                <span className={`font-medium ${soldOut ? "text-destructive" : "text-green-600"}`}>
                  {soldOut ? "Out of Stock" : `${product.stock} kg available`}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium mb-2 block">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-gradient-gold text-accent-foreground"
                        : "border border-border hover:bg-secondary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-semibold mb-4">
                PKR {product.price.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground"> / {selectedSize}</span>
              </p>

              <div className="flex gap-2">
                <Button
                  disabled={soldOut}
                  onClick={handleAddToCart}
                  className="flex-1 rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90"
                >
                  <ShoppingBag className="size-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleCompare}
                  variant={compared ? "default" : "outline"}
                  className={`rounded-full ${compared ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <X className="size-4 mr-2" />
                  {compared ? "Remove" : "Compare"}
                </Button>
              </div>
            </div>

            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="mt-4 block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View full details →
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}