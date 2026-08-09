import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/products";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/products")({
  component: AdminProducts,
});

function AdminProducts() {
  const handleDelete = (slug: string) => {
    toast.success("Product deleted");
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" />
            Back to Admin
          </Link>
          <Button className="rounded-full">
            <Plus className="size-4 mr-2" />
            Add Product
          </Button>
        </div>

        <h1 className="font-display text-3xl font-semibold mb-8">Product Management</h1>

        <div className="grid gap-4">
          {products.map((product) => (
            <Card key={product.slug} className="rounded-3xl shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-20 rounded-2xl object-contain bg-secondary/60 p-2"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.origin}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>PKR {product.price.toLocaleString()}</Badge>
                      <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                        {product.stock > 0 ? `${product.stock} kg available` : "Out of stock"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-destructive hover:text-destructive"
                      onClick={() => handleDelete(product.slug)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
