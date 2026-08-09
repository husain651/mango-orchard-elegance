import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, TrendingUp, Users, ShoppingCart, Package, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

// Mock analytics data
const stats = [
  {
    title: "Total Revenue",
    value: "PKR 2.4M",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: "+8.2%",
    icon: ShoppingCart,
  },
  {
    title: "Total Customers",
    value: "892",
    change: "+15.3%",
    icon: Users,
  },
  {
    title: "Products",
    value: "7",
    change: "+2",
    icon: Package,
  },
];

const recentOrders = [
  { id: "MPO-12345", customer: "John Doe", amount: 4500, status: "pending" },
  { id: "MPO-12344", customer: "Jane Smith", amount: 2500, status: "completed" },
  { id: "MPO-12343", customer: "Bob Johnson", amount: 7500, status: "shipped" },
  { id: "MPO-12342", customer: "Alice Brown", amount: 3200, status: "pending" },
  { id: "MPO-12341", customer: "Charlie Wilson", amount: 5800, status: "completed" },
];

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="size-4" />
          Back to Admin
        </Link>

        <h1 className="font-display text-3xl font-semibold mb-8">Dashboard Overview</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">PKR {order.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground capitalize">{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-xl">Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Chaunsa</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[65%]" />
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Sindhri</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[20%]" />
                    </div>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Anwar Ratol</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[10%]" />
                    </div>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Others</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[5%]" />
                    </div>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
