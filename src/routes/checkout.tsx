import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Truck, CreditCard, Lock, Gift, Calendar } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useShop } from "@/lib/store";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";
import { products } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
});

function Checkout() {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useShop();
  const { isAuthenticated, user } = useAuth();
  const [shipping, setShipping] = useState(500);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Pakistan",
  });

  const [giftOptions, setGiftOptions] = useState({
    isGift: false,
    giftMessage: "",
    giftWrap: false,
  });

  const [deliveryDate, setDeliveryDate] = useState("");

  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("Please login to continue");
      navigate({ to: "/login" });
      return;
    }

    setIsLoading(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success("Order placed successfully!");
    clearCart();
    navigate({ to: "/account/orders" });
    setIsLoading(false);
  };

  if (cart.length === 0) {
    return (
      <>
        <PageHeader
          eyebrow="Checkout"
          title="Your cart is empty"
          lead="Add some delicious mangoes to get started."
        />
        <section className="section">
          <div className="container-luxe text-center">
            <Link to="/products">
              <Button className="rounded-full bg-gradient-gold text-accent-foreground">
                Browse Products
              </Button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Checkout"
        title="Complete Your Order"
        lead="Review your items and enter shipping details."
      />

      <section className="section">
        <div className="container-luxe">
          <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="size-4" />
            Back to Cart
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card className="rounded-3xl shadow-soft">
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <Truck className="size-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                          className="rounded-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="rounded-full"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="rounded-full"
                        placeholder="123 Palm Street"
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                          className="rounded-full"
                          placeholder="Lahore"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                          required
                          className="rounded-full"
                          placeholder="54000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          required
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-soft">
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <CreditCard className="size-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border-2 border-primary rounded-2xl bg-primary/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Cash on Delivery</p>
                        <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                      </div>
                      <div className="size-5 rounded-full border-2 border-primary bg-primary" />
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-2xl opacity-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                      </div>
                      <div className="size-5 rounded-full border-2 border-border" />
                    </div>
                  </div>
                  <div className="p-4 border border-border rounded-2xl opacity-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-muted-foreground">Direct bank transfer</p>
                      </div>
                      <div className="size-5 rounded-full border-2 border-border" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-soft">
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <Gift className="size-5" />
                    Gift Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">This is a gift</p>
                      <p className="text-sm text-muted-foreground">Add gift wrapping and message</p>
                    </div>
                    <Switch
                      checked={giftOptions.isGift}
                      onCheckedChange={(checked) => setGiftOptions({ ...giftOptions, isGift: checked })}
                    />
                  </div>
                  {giftOptions.isGift && (
                    <>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Gift Wrapping</p>
                          <p className="text-sm text-muted-foreground">Premium gift wrap (+PKR 500)</p>
                        </div>
                        <Switch
                          checked={giftOptions.giftWrap}
                          onCheckedChange={(checked) => setGiftOptions({ ...giftOptions, giftWrap: checked })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="giftMessage">Gift Message</Label>
                        <Input
                          id="giftMessage"
                          value={giftOptions.giftMessage}
                          onChange={(e) => setGiftOptions({ ...giftOptions, giftMessage: e.target.value })}
                          placeholder="Write a personal message..."
                          className="rounded-full"
                        />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-soft">
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center gap-2">
                    <Calendar className="size-5" />
                    Delivery Date
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
                    <Input
                      id="deliveryDate"
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="rounded-full"
                    />
                    <p className="text-xs text-muted-foreground">Select your preferred delivery date (2-7 days from now)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="rounded-3xl shadow-soft">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cart.map((item) => {
                    const product = products.find(p => p.slug === item.slug);
                    return (
                      <div key={`${item.slug}-${item.size}`} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {product?.name || item.slug} ({item.size}) x {item.qty}
                        </span>
                        <span className="font-medium">PKR {(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>PKR {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>PKR {shipping.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                      <span>Total</span>
                      <span>PKR {total.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90 h-14 text-lg"
              >
                {isLoading ? "Processing..." : "Place Order"}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="size-4" />
                <span>Secure checkout powered by SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
