import { createFileRoute } from "@tanstack/react-router";
import { Building2, Container, Gift, Package, Store, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate & Bulk Mango Orders | MangoPlus" },
      {
        name: "description",
        content:
          "Bulk mango exports for hotels, restaurants, retail chains and supermarkets. Container shipping, custom branding, export packaging and MOQ from 1,000 kg.",
      },
      { property: "og:title", content: "Corporate & Bulk Mango Orders | MangoPlus" },
      {
        property: "og:description",
        content: "Container-load Pakistani mango exports with custom branding and export packaging.",
      },
    ],
  }),
  component: Corporate,
});

const segments = [
  { icon: Container, title: "Bulk exports", text: "Full container loads by air or reefer sea freight, FOB or CIF." },
  { icon: Building2, title: "Hotels", text: "Weekly standing orders with fixed grade and calibre." },
  { icon: UtensilsCrossed, title: "Restaurants", text: "Chef-grade fruit and purée-ready seconds at volume pricing." },
  { icon: Store, title: "Retail chains", text: "Retail-ready trays, barcodes and shelf-life guarantees." },
  { icon: Package, title: "Supermarkets", text: "Private-label cartons and promotional display packs." },
  { icon: Gift, title: "Corporate gifts", text: "Signature gift boxes with your logo, shipped to client lists." },
];

const specs = [
  ["Minimum order quantity", "1,000 kg (air) · 12,000 kg (reefer)"],
  ["Export packaging", "4 kg / 5 kg / 10 kg single-layer cartons"],
  ["Container shipping", "20ft & 40ft reefer, pre-cooled to 12°C"],
  ["Custom branding", "Printed cartons, stickers, inserts, gift sleeves"],
  ["Documentation", "Phytosanitary, COO, invoice, packing list, AWB/BL"],
  ["Payment terms", "30% advance, balance against documents or L/C"],
];

const schema = z.object({
  company: z.string().trim().min(2, "Company name is required").max(120),
  name: z.string().trim().min(2, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  country: z.string().trim().min(2, "Destination country is required").max(80),
  volume: z.string().trim().min(1, "Estimated volume is required").max(60),
  variety: z.string().max(80),
  message: z.string().trim().max(1000),
});

function Corporate() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <>
      <PageHeader
        eyebrow="Corporate orders"
        title={
          <>
            Container volumes, <span className="text-gradient-gold italic">boutique standards.</span>
          </>
        }
        lead="We supply hotel groups, importers, retail chains and gifting programmes across 25 countries — with the same grading table used for our single-carton customers."
      />

      <section className="section">
        <div className="container-luxe">
          <Reveal>
            <Eyebrow>Who we supply</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent-foreground dark:text-accent">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm/relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Export specifications</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Everything agreed before the first pallet moves.
            </h2>
            <dl className="mt-8 divide-y divide-border">
              {specs.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-4 sm:grid-cols-2">
                  <dt className="text-sm font-semibold">{k}</dt>
                  <dd className="text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                const result = schema.safeParse(data);
                if (!result.success) {
                  const next: Record<string, string> = {};
                  for (const issue of result.error.issues)
                    next[String(issue.path[0])] = issue.message;
                  setErrors(next);
                  toast.error("Please check the highlighted fields");
                  return;
                }
                setErrors({});
                toast.success("Quote request received — we'll reply within one business day.");
                e.currentTarget.reset();
              }}
              className="rounded-4xl border border-border bg-card p-8 shadow-lift"
            >
              <h2 className="font-display text-2xl font-semibold">Request a quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us the destination and volume. Pricing follows within one business day.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field name="company" label="Company" error={errors.company} />
                <Field name="name" label="Your name" error={errors.name} />
                <Field name="email" label="Work email" type="email" error={errors.email} />
                <Field name="country" label="Destination country" error={errors.country} />
                <Field name="volume" label="Estimated volume" placeholder="e.g. 12 tonnes" error={errors.volume} />
                <Field name="variety" label="Preferred variety" placeholder="Chaunsa" error={errors.variety} />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase">
                  Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-hidden focus-visible:border-ring"
                  placeholder="Packaging, branding, delivery window, incoterms…"
                />
              </div>
              <button className="bg-gradient-gold mt-6 min-h-12 w-full rounded-full text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]">
                Send request
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold tracking-wide uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 min-h-11 w-full rounded-full border bg-background px-4 text-sm outline-hidden focus-visible:border-ring ${
          error ? "border-destructive" : "border-input"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
