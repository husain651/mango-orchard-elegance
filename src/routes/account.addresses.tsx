import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Plus, Edit, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/account/addresses")({
  component: Addresses,
});

// Mock addresses
const mockAddresses = [
  {
    id: "1",
    label: "Home",
    name: "John Doe",
    phone: "+92 300 1234567",
    address: "123 Palm Street, Lahore, Punjab, Pakistan",
    isDefault: true,
  },
  {
    id: "2",
    label: "Office",
    name: "John Doe",
    phone: "+92 300 1234567",
    address: "456 Orchard Road, Gulberg, Lahore, Pakistan",
    isDefault: false,
  },
];

function Addresses() {
  const handleDelete = (id: string) => {
    toast.success("Address deleted");
  };

  const handleSetDefault = (id: string) => {
    toast.success("Default address updated");
  };

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Saved Addresses"
        lead="Manage your shipping addresses for faster checkout."
      />

      <section className="section">
        <div className="container-luxe">
          <Link to="/account" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="size-4" />
            Back to Account
          </Link>

          <div className="grid gap-4 md:grid-cols-2">
            {mockAddresses.map((address) => (
              <Card key={address.id} className="rounded-3xl shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-5 text-muted-foreground" />
                      <h3 className="font-display font-semibold">{address.label}</h3>
                      {address.isDefault && (
                        <Badge className="bg-accent text-accent-foreground">Default</Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(address.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">{address.name}</p>
                    <p className="text-muted-foreground">{address.phone}</p>
                    <p className="text-muted-foreground">{address.address}</p>
                  </div>
                  {!address.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 rounded-full"
                      onClick={() => handleSetDefault(address.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}

            <Card className="rounded-3xl border-2 border-dashed border-border shadow-none hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="size-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Plus className="size-6" />
                </div>
                <h3 className="font-display font-semibold mb-1">Add New Address</h3>
                <p className="text-sm text-muted-foreground">Save a new shipping address</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
