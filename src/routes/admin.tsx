import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, Package, Users, ShoppingCart, FileText, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const adminSections = [
    {
      title: "Dashboard",
      description: "Overview and analytics",
      icon: LayoutDashboard,
      to: "/admin/dashboard",
    },
    {
      title: "Products",
      description: "Manage mango varieties",
      icon: Package,
      to: "/admin/products",
    },
    {
      title: "Orders",
      description: "Order management",
      icon: ShoppingCart,
      to: "/admin/orders",
    },
    {
      title: "Customers",
      description: "Customer management",
      icon: Users,
      to: "/admin/customers",
    },
    {
      title: "Blog",
      description: "Content management",
      icon: FileText,
      to: "/admin/blog",
    },
    {
      title: "Settings",
      description: "System configuration",
      icon: Settings,
      to: "/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-semibold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.name || "Admin"}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="rounded-full"
          >
            <LogOut className="size-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {adminSections.map((section) => (
            <Link key={section.title} to={section.to}>
              <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <CardContent className="p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <section.icon className="size-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
