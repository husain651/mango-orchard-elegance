import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Package, MapPin, User, LogOut, Settings } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/account")({
  component: AccountLayout,
});

function AccountLayout() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const accountSections = [
    {
      title: "Orders",
      description: "View your order history and track shipments",
      icon: Package,
      to: "/account/orders",
    },
    {
      title: "Addresses",
      description: "Manage your saved shipping addresses",
      icon: MapPin,
      to: "/account/addresses",
    },
    {
      title: "Profile",
      description: "Update your personal information",
      icon: User,
      to: "/account/profile",
    },
    {
      title: "Settings",
      description: "Account preferences and notifications",
      icon: Settings,
      to: "/account/settings",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title={
          <>
            Welcome, <span className="text-gradient-gold italic">{user?.name || "User"}</span>
          </>
        }
        lead="Manage your orders, addresses, and account settings."
      />

      <section className="section">
        <div className="container-luxe">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {accountSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.1}>
                <Link to={section.to}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <CardContent className="p-6">
                      <div className="size-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <section.icon className="size-6" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="h-full rounded-3xl border-2 border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <LogOut className="size-6 mb-2" />
                Logout
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
