import { createFileRoute, Link } from "@tanstack/react-router";
import { X, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/lib/products";
import { useComparison } from "@/lib/comparison";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Mango Varieties | MangoPlus" },
      {
        name: "description",
        content: "Compare Pakistani mango varieties side by side - sweetness, season, origin, and pricing.",
      },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useComparison();
  const compareProducts = compareList
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is typeof products[0] => Boolean(p));

  if (compareList.length === 0) {
    return (
      <>
        <PageHeader
          eyebrow="Compare"
          title={
            <>
              Compare <span className="text-gradient-gold italic">Mango Varieties</span>
            </>
          }
          lead="Select up to 4 mango varieties to compare their characteristics side by side."
        />

        <section className="section">
          <div className="container-luxe text-center">
            <Card className="max-w-2xl mx-auto p-12">
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  No mangoes selected for comparison. Browse our products and add them to compare.
                </p>
                <Link to="/products">
                  <Button className="rounded-full">
                    Browse Products
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Compare"
        title={
          <>
            Compare <span className="text-gradient-gold italic">Mango Varieties</span>
          </>
        }
        lead="Side-by-side comparison of selected mango varieties."
      />

      <section className="section">
        <div className="container-luxe">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {compareList.length} {compareList.length === 1 ? "variety" : "varieties"} selected
            </p>
            <Button variant="outline" size="sm" onClick={clearCompare}>
              Clear All
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Comparison Grid */}
              <div className="grid gap-6" style={{ gridTemplateColumns: `200px repeat(${compareProducts.length}, 1fr)` }}>
                {/* Header Row */}
                <div className="font-semibold text-muted-foreground">Variety</div>
                {compareProducts.map((product) => (
                  <Reveal key={product.slug} delay={0.1}>
                    <div className="relative">
                      <button
                        onClick={() => removeFromCompare(product.slug)}
                        className="absolute -top-2 -right-2 size-6 rounded-full bg-secondary flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      >
                        <X className="size-3" />
                      </button>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover rounded-2xl mb-3"
                      />
                      <h3 className="font-display font-semibold">{product.name}</h3>
                    </div>
                  </Reveal>
                ))}

                {/* Sweetness */}
                <div className="font-semibold text-muted-foreground py-4">Sweetness</div>
                {compareProducts.map((product) => (
                  <div key={`sweetness-${product.slug}`} className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-gold"
                          style={{ width: `${(product.sweetness / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{product.sweetness}/10</span>
                    </div>
                  </div>
                ))}

                {/* Season */}
                <div className="font-semibold text-muted-foreground py-4">Season</div>
                {compareProducts.map((product) => (
                  <div key={`season-${product.slug}`} className="py-4">
                    <Badge variant="secondary">{product.season}</Badge>
                  </div>
                ))}

                {/* Origin */}
                <div className="font-semibold text-muted-foreground py-4">Origin</div>
                {compareProducts.map((product) => (
                  <div key={`origin-${product.slug}`} className="py-4 text-sm">
                    {product.origin}
                  </div>
                ))}

                {/* Price */}
                <div className="font-semibold text-muted-foreground py-4">Price (per kg)</div>
                {compareProducts.map((product) => (
                  <div key={`price-${product.slug}`} className="py-4 font-semibold">
                    PKR {product.price.toLocaleString()}
                  </div>
                ))}

                {/* Stock */}
                <div className="font-semibold text-muted-foreground py-4">Availability</div>
                {compareProducts.map((product) => (
                  <div key={`stock-${product.slug}`} className="py-4">
                    {product.stock > 0 ? (
                      <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                        In Stock ({product.stock} kg)
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                ))}

                {/* Description */}
                <div className="font-semibold text-muted-foreground py-4">Description</div>
                {compareProducts.map((product) => (
                  <div key={`desc-${product.slug}`} className="py-4 text-sm text-muted-foreground">
                    {product.description}
                  </div>
                ))}

                {/* Available Sizes */}
                <div className="font-semibold text-muted-foreground py-4">Available Sizes</div>
                {compareProducts.map((product) => (
                  <div key={`sizes-${product.slug}`} className="py-4">
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Action */}
                <div className="font-semibold text-muted-foreground py-4" />
                {compareProducts.map((product) => (
                  <div key={`action-${product.slug}`} className="py-4">
                    <Link to={`/products/${product.slug}`}>
                      <Button className="w-full rounded-full" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add More */}
          {compareList.length < 4 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                You can compare up to 4 varieties ({4 - compareList.length} slots remaining)
              </p>
              <Link to="/products">
                <Button variant="outline" className="rounded-full">
                  Add More Varieties
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
