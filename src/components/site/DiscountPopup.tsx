import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShop } from "@/lib/store";
import { toast } from "sonner";

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { addToCart } = useShop();

  useEffect(() => {
    const shown = localStorage.getItem("mp-discount-shown");
    if (!shown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("mp-discount-shown", "true");
      }, 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleApplyCode = () => {
    // In a real app, this would apply the coupon to the cart
    toast.success("Discount code SUMMER10 applied!");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 size-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
        >
          <X className="size-4" />
        </button>

        <div className="text-center">
          <div className="size-16 rounded-full bg-gradient-gold mx-auto flex items-center justify-center mb-4">
            <Gift className="size-8 text-accent-foreground" />
          </div>

          <h2 className="font-display text-2xl font-semibold mb-2">
            Welcome to MangoPlus!
          </h2>
          <p className="text-muted-foreground mb-6">
            Get 10% off your first order with our exclusive welcome code
          </p>

          <div className="bg-secondary rounded-2xl p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-1">Your discount code</p>
            <p className="font-display text-2xl font-bold tracking-wider">SUMMER10</p>
          </div>

          <Button
            onClick={handleApplyCode}
            className="w-full rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90"
          >
            Apply Code & Continue Shopping
          </Button>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
}
