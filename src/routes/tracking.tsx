import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Package, Truck, CheckCircle, MapPin, Clock, Calendar } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Order Tracking | MangoPlus" },
      {
        name: "description",
        content: "Track your mango order in real-time. Enter your order number to see delivery status and location.",
      },
    ],
  }),
  component: OrderTracking,
});

// Mock tracking data - in real app, this would come from an API
const mockTrackingData: Record<string, any> = {
  "MPO-12345": {
    orderNumber: "MPO-12345",
    status: "in-transit",
    estimatedDelivery: "August 10, 2024",
    currentLocation: "Dubai International Airport",
    milestones: [
      { status: "completed", title: "Order Placed", date: "August 5, 2024", description: "Your order has been confirmed" },
      { status: "completed", title: "Processing", date: "August 5, 2024", description: "Your order is being prepared" },
      { status: "completed", title: "Picked Up", date: "August 6, 2024", description: "Package picked up by courier" },
      { status: "completed", title: "In Transit", date: "August 7, 2024", description: "Package is on its way" },
      { status: "current", title: "Customs Clearance", date: "August 8, 2024", description: "Package is clearing customs" },
      { status: "pending", title: "Out for Delivery", date: "August 10, 2024", description: "Package will be delivered today" },
      { status: "pending", title: "Delivered", date: "Estimated: August 10, 2024", description: "Package will be delivered to your address" },
    ],
    items: [
      { name: "Chaunsa Mangoes (Premium Box)", quantity: 1, image: "🥭" },
      { name: "Sindhri Mangoes (Family Pack)", quantity: 2, image: "🥭" },
    ],
    shippingAddress: "123 Palm Street, Dubai Marina, Dubai, UAE",
  },
  "MPO-67890": {
    orderNumber: "MPO-67890",
    status: "delivered",
    estimatedDelivery: "August 5, 2024",
    currentLocation: "Delivered",
    milestones: [
      { status: "completed", title: "Order Placed", date: "August 1, 2024", description: "Your order has been confirmed" },
      { status: "completed", title: "Processing", date: "August 1, 2024", description: "Your order is being prepared" },
      { status: "completed", title: "Picked Up", date: "August 2, 2024", description: "Package picked up by courier" },
      { status: "completed", title: "In Transit", date: "August 3, 2024", description: "Package is on its way" },
      { status: "completed", title: "Out for Delivery", date: "August 5, 2024", description: "Package is out for delivery" },
      { status: "completed", title: "Delivered", date: "August 5, 2024", description: "Package delivered successfully" },
    ],
    items: [
      { name: "Anwar Ratol Mangoes (Gift Box)", quantity: 1, image: "🥭" },
    ],
    shippingAddress: "456 Orchard Road, London, UK",
  },
};

function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingData, setTrackingData] = useState<typeof mockTrackingData[keyof typeof mockTrackingData] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      toast.error("Please enter an order number");
      return;
    }

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[orderNumber.toUpperCase()];
      if (data) {
        setTrackingData(data);
        toast.success("Order found!");
      } else {
        setTrackingData(null);
        toast.error("Order not found. Please check your order number.");
      }
      setIsSearching(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "current":
        return "text-yellow-500";
      case "pending":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="size-5" />;
      case "current":
        return <Clock className="size-5 animate-pulse" />;
      case "pending":
        return <div className="size-5 rounded-full border-2 border-muted-foreground" />;
      default:
        return <div className="size-5 rounded-full border-2 border-muted-foreground" />;
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Track Order"
        title={
          <>
            Track Your <span className="text-gradient-gold italic">Order</span>
          </>
        }
        lead="Enter your order number to see real-time tracking information and delivery status."
      />

      <section className="section">
        <div className="container-luxe max-w-4xl">
          <Reveal>
            <form onSubmit={handleSearch} className="mb-12">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter order number (e.g., MPO-12345)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="pl-12 h-14 text-lg rounded-2xl"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSearching}
                  className="h-14 px-8 rounded-2xl font-semibold"
                >
                  {isSearching ? "Searching..." : "Track Order"}
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Try: MPO-12345 or MPO-67890
              </p>
            </form>
          </Reveal>

          {trackingData && (
            <Reveal delay={0.1}>
              <div className="space-y-8">
                {/* Order Summary */}
                <Card className="rounded-3xl shadow-soft overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Order Number</p>
                        <p className="font-display text-xl font-semibold">{trackingData.orderNumber}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="size-5 text-accent-foreground dark:text-accent" />
                        <span className="font-semibold capitalize">{trackingData.status.replace("-", " ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Est. Delivery: {trackingData.estimatedDelivery}</span>
                      </div>
                    </div>

                    {trackingData.status !== "delivered" && (
                      <div className="flex items-center gap-2 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl border border-yellow-200 dark:border-yellow-900">
                        <MapPin className="size-5 text-yellow-600 dark:text-yellow-500" />
                        <div>
                          <p className="font-semibold text-yellow-900 dark:text-yellow-100">Current Location</p>
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">{trackingData.currentLocation}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card className="rounded-3xl shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-4">Order Items</h3>
                    <div className="space-y-3">
                      {trackingData.items.map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-muted/50 rounded-2xl">
                          <span className="text-3xl">{item.image}</span>
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Shipping Address:</span> {trackingData.shippingAddress}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracking Timeline */}
                <Card className="rounded-3xl shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-6">Tracking Timeline</h3>
                    <div className="space-y-6">
                      {trackingData.milestones.map((milestone: any, index: number) => (
                        <div key={index} className="flex gap-4">
                          <div className={`flex flex-col items-center ${getStatusColor(milestone.status)}`}>
                            {getStatusIcon(milestone.status)}
                            {index < trackingData.milestones.length - 1 && (
                              <div className="w-0.5 h-full bg-border mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                              <h4 className="font-semibold">{milestone.title}</h4>
                              <p className="text-sm text-muted-foreground">{milestone.date}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Help Section */}
                <div className="rounded-3xl border border-border bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-6 text-center">
                  <h3 className="font-display text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have questions about your order, our team is here to assist you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="mailto:orders@mangoplus.pk"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-background font-semibold transition-colors hover:bg-foreground/90 text-sm"
                    >
                      <Package className="size-4" />
                      Email Support
                    </a>
                    <a
                      href="tel:+923001234567"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 font-semibold transition-colors hover:bg-accent hover:text-accent-foreground text-sm"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
