import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bell, Shield, Database, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="size-4" />
          Back to Admin
        </Link>

        <h1 className="font-display text-3xl font-semibold mb-8">System Settings</h1>

        <div className="space-y-6">
          <Card className="rounded-3xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl">General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Site Name</p>
                  <p className="text-sm text-muted-foreground">Display name of your website</p>
                </div>
                <Input defaultValue="MangoPlus" className="w-64 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Contact Email</p>
                  <p className="text-sm text-muted-foreground">Primary contact email</p>
                </div>
                <Input defaultValue="hello@mangoplus.pk" className="w-64 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Maintenance Mode</p>
                  <p className="text-sm text-muted-foreground">Temporarily disable the site</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">New Order Alerts</p>
                    <p className="text-sm text-muted-foreground">Email notifications for new orders</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Low Stock Alerts</p>
                    <p className="text-sm text-muted-foreground">Alert when products are low in stock</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Customer Reviews</p>
                    <p className="text-sm text-muted-foreground">Alert for new customer reviews</p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">IP Whitelist</p>
                    <p className="text-sm text-muted-foreground">Restrict admin access by IP</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl">Database & Backup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Automatic Backups</p>
                    <p className="text-sm text-muted-foreground">Daily database backups</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Manual Backup</p>
                    <p className="text-sm text-muted-foreground">Create a backup now</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  Backup Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-soft">
            <CardHeader>
              <CardTitle className="font-display text-xl">International Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Default Currency</p>
                    <p className="text-sm text-muted-foreground">Primary currency for prices</p>
                  </div>
                </div>
                <Input defaultValue="PKR" className="w-32 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="size-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Default Language</p>
                    <p className="text-sm text-muted-foreground">Primary language for the site</p>
                  </div>
                </div>
                <Input defaultValue="English" className="w-32 rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
