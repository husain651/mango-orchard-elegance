import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Eye, CheckCircle, XCircle, Truck, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

const mockOrders = [
  { id: "MPO-12345", customer: "John Doe", email: "john@example.com", amount: 4500, status: "pending", date: "Aug 5, 2024" },
  { id: "MPO-12344", customer: "Jane Smith", email: "jane@example.com", amount: 2500, status: "completed", date: "Aug 4, 2024" },
  { id: "MPO-12343", customer: "Bob Johnson", email: "bob@example.com", amount: 7500, status: "shipped", date: "Aug 3, 2024" },
  { id: "MPO-12342", customer: "Alice Brown", email: "alice@example.com", amount: 3200, status: "pending", date: "Aug 2, 2024" },
  { id: "MPO-12341", customer: "Charlie Wilson", email: "charlie@example.com", amount: 5800, status: "completed", date: "Aug 1, 2024" },
];

function AdminOrders() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">Pending</Badge>;
      case "shipped":
        return <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-400">Shipped</Badge>;
      case "completed":
        return <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">Completed</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500/20 text-red-700 dark:text-red-400">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="size-4" />
          Back to Admin
        </Link>

        <h1 className="font-display text-3xl font-semibold mb-8">Order Management</h1>

        <Card className="rounded-3xl shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-xl">All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-secondary flex items-center justify-center">
                      <ShoppingCart className="size-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">PKR {order.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(order.status)}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Eye className="size-4" />
                    </Button>
                    {order.status === "pending" && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full text-green-600 hover:text-green-700"
                          onClick={() => handleStatusChange(order.id, "shipped")}
                        >
                          <CheckCircle className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full text-red-600 hover:text-red-700"
                          onClick={() => handleStatusChange(order.id, "cancelled")}
                        >
                          <XCircle className="size-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
