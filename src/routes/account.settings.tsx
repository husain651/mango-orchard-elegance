import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bell, Shield, Moon, Sun } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/lib/store";
import { toast } from "sonner";

export const Route = createFileRoute("/account/settings")({
  component: Settings,
});

function Settings() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Account Settings"
        lead="Manage your preferences and notifications."
      />

      <section className="section">
        <div className="container-luxe max-w-2xl">
          <Link to="/account" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="size-4" />
            Back to Account
          </Link>

          <div className="space-y-6">
            <Card className="rounded-3xl shadow-soft">
              <CardHeader>
                <CardTitle className="font-display text-xl">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === "dark" ? <Moon className="size-5" /> : <Sun className="size-5" />}
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">Switch between light and dark theme</p>
                    </div>
                  </div>
                  <Switch checked={theme === "dark"} onCheckedChange={toggle} />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-soft">
              <CardHeader>
                <CardTitle className="font-display text-xl">Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Order Updates</p>
                      <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Promotional Emails</p>
                      <p className="text-sm text-muted-foreground">Receive offers and updates</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Stock Alerts</p>
                      <p className="text-sm text-muted-foreground">Get notified when items are back in stock</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-soft">
              <CardHeader>
                <CardTitle className="font-display text-xl">Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Change Password</p>
                      <p className="text-sm text-muted-foreground">Update your password regularly</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Change
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Enable
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-soft border-destructive/20">
              <CardHeader>
                <CardTitle className="font-display text-xl text-destructive">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="rounded-full"
                    onClick={() => toast.error("This action cannot be undone")}
                  >
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
