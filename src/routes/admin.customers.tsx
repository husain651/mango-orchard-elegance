import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/customers")({
  component: AdminCustomers,
});

const mockCustomers = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "+92 300 1234567", orders: 5, spent: 22500, joined: "Jan 2024" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "+92 300 2345678", orders: 3, spent: 12000, joined: "Feb 2024" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "+92 300 3456789", orders: 8, spent: 35000, joined: "Mar 2024" },
];

function AdminCustomers() {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="size-4" />
          Back to Admin
        </Link>

        <h1 className="font-display text-3xl font-semibold mb-8">Customer Management</h1>

        <Card className="rounded-3xl shadow-soft">
          <CardHeader>
            <CardTitle className="font-display text-xl">All Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCustomers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-gradient-gold flex items-center justify-center text-white font-semibold">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="size-3" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="size-3" />
                        {customer.phone}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{customer.orders} orders</p>
                    <p className="text-sm text-muted-foreground">PKR {customer.spent.toLocaleString()} spent</p>
                    <p className="text-xs text-muted-foreground">Joined {customer.joined}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      View Details
                    </Button>
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
