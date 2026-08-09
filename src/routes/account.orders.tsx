import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Package, Clock, CheckCircle, Truck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/account/orders")({
  component: Orders,
});

// Mock order data
const mockOrders = [
  {
    id: "MPO-12345",
    date: "August 5, 2024",
    status: "in-transit",
    total: 4500,
    items: ["Chaunsa Mangoes (Premium Box)", "Sindhri Mangoes (Family Pack)"],
  },
  {
    id: "MPO-12344",
    date: "July 28, 2024",
    status: "delivered",
    total: 2500,
    items: ["Anwar Ratol Mangoes (Gift Box)"],
  },
  {
    id: "MPO-12343",
    date: "July 15, 2024",
    status: "delivered",
    total: 7500,
    items: ["Mixed Mango Box (Corporate)"],
  },
];

function Orders() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-transit":
        return <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400">In Transit</Badge>;
      case "delivered":
        return <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">Delivered</Badge>;
      case "processing":
        return <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">Processing</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-transit":
        return <Truck className="size-5" />;
      case "delivered":
        return <CheckCircle className="size-5" />;
      case "processing":
        return <Clock className="size-5" />;
      default:
        return <Package className="size-5" />;
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Order History"
        lead="View and track your past orders."
      />

      <section className="section">
        <div className="container-luxe">
          <Link to="/account" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="size-4" />
            Back to Account
          </Link>

          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id} className="rounded-3xl shadow-soft">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-full bg-secondary flex items-center justify-center">
                        {getStatusIcon(order.status)}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display font-semibold">{order.id}</h3>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                        <div className="mt-2 space-y-1">
                          {order.items.map((item, index) => (
                            <p key={index} className="text-sm">{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-4">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="font-display text-xl font-semibold">PKR {order.total.toLocaleString()}</p>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {mockOrders.length === 0 && (
            <Card className="rounded-3xl shadow-soft">
              <CardContent className="p-12 text-center">
                <Package className="size-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="font-display text-xl font-semibold mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-6">You haven't placed any orders yet.</p>
                <Link to="/products">
                  <Button className="rounded-full bg-gradient-gold text-accent-foreground">
                    Start Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
