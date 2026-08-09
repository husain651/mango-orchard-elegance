import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    // In a real app, this would send to a backend
    toast.success("Thanks for subscribing! You'll receive our next newsletter.");
    setEmail("");
  };

  return (
    <footer className="bg-gradient-forest text-primary-foreground">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-display text-2xl font-semibold">
            Mango<span className="text-gradient-gold">Plus</span>
          </p>
          <p className="mt-4 max-w-xs text-sm/relaxed opacity-70">
            Export-quality Pakistani mangoes, harvested by partner farms in Punjab and Sindh and
            delivered under cold chain to 25 countries.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="https://mangoplus.pk"
                aria-label={["Instagram", "Facebook", "LinkedIn"][i]}
                className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          items={[
            { label: "About us", to: "/about" },
            { label: "Our farms", to: "/farms" },
            { label: "Farm-to-table", to: "/about" },
            { label: "Blog", to: "/blog" },
            { label: "Contact", to: "/contact" },
            { label: "FAQ", to: "/faq" },
            { label: "Track Order", to: "/tracking" },
          ]}
        />
        <FooterCol
          title="Products"
          items={[
            { label: "All varieties", to: "/products" },
            { label: "Sindhri", to: "/products/sindhri" },
            { label: "Chaunsa", to: "/products/chaunsa" },
            { label: "Anwar Ratol", to: "/products/anwar-ratol" },
            { label: "Corporate orders", to: "/corporate" },
          ]}
        />

        <div>
          <h2 className="eyebrow opacity-60">Newsletter</h2>
          <p className="mt-4 text-sm opacity-80">
            Harvest alerts, allocation drops and shipping windows — once a month.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={handleNewsletterSubmit}>
            <label className="sr-only" htmlFor="newsletter">
              Email address
            </label>
            <input
              id="newsletter"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm outline-hidden placeholder:text-primary-foreground/50 focus-visible:border-accent"
            />
            <button className="bg-gradient-gold rounded-full px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]">
              Join
            </button>
          </form>
          <ul className="mt-6 space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" /> +92 300 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" /> hello@mangoplus.pk
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> Multan, Punjab, Pakistan
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs opacity-70 sm:flex-row">
          <p>© {new Date().getFullYear()} MangoPlus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <h2 className="eyebrow opacity-60">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="opacity-80 transition-opacity hover:opacity-100">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
