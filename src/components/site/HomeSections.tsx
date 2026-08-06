import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  CreditCard,
  Headphones,
  Leaf,
  Package,
  Plane,
  Quote,
  Snowflake,
  Sprout,
  Star,
  Truck,
  Warehouse,
  ClipboardCheck,
  Scissors,
} from "lucide-react";
import { Counter, Eyebrow, Reveal } from "./Reveal";
import drone from "@/assets/gallery-drone.jpg";
import harvest from "@/assets/gallery-harvest.jpg";
import packing from "@/assets/gallery-packing.jpg";
import shipping from "@/assets/gallery-shipping.jpg";
import giftbox from "@/assets/gallery-giftbox.jpg";

/* ---------------- Why choose ---------------- */

const features = [
  { icon: Sprout, title: "Direct from Pakistani farms", text: "No middlemen. We buy the tree, not the crate." },
  { icon: BadgeCheck, title: "Export certified", text: "Global GAP, ISO and phytosanitary clearance on every shipment." },
  { icon: Award, title: "Premium grade only", text: "Top 12% of each harvest passes our grading table." },
  { icon: Leaf, title: "Fresh harvesting", text: "Picked, graded and packed inside a single 24-hour window." },
  { icon: Plane, title: "Global logistics", text: "Air freight in 48–72 hours, reefer sea freight for volume." },
  { icon: CreditCard, title: "Secure payments", text: "Escrow, L/C and card payments with full documentation." },
  { icon: Headphones, title: "Dedicated support", text: "A named export coordinator for every account." },
];

export function WhyChoose() {
  return (
    <section className="section bg-cream">
      <div className="container-luxe">
        <Reveal>
          <Eyebrow>Why MangoPlus</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Built like an export house. Cared for like a family orchard.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <span className="bg-gradient-gold grid size-12 place-items-center rounded-2xl text-accent-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm/relaxed text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Journey timeline ---------------- */

const steps = [
  { icon: Scissors, title: "Harvest", text: "Hand-picked at 78–82% maturity, at dawn, into padded crates." },
  { icon: Package, title: "Sorting", text: "Graded by weight, blush and blemish across seven size classes." },
  { icon: ClipboardCheck, title: "Quality inspection", text: "Brix testing, firmness probe and random cut-checks per lot." },
  { icon: Warehouse, title: "Packing", text: "Single-layer export trays, breathable liners, branded cartons." },
  { icon: Snowflake, title: "Cold storage", text: "Pre-cooled to 12°C within four hours of leaving the orchard." },
  { icon: Plane, title: "Export", text: "Phytosanitary clearance, airway bill and same-day uplift." },
  { icon: Truck, title: "Delivery", text: "Last-mile cold chain to your door, hotel or distribution centre." },
];

export function Journey() {
  return (
    <section className="section bg-gradient-forest text-primary-foreground">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow text-accent">Farm to table</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Seven steps between the branch and your table.
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-10 border-l border-white/15 pl-8 md:mt-20 md:space-y-0 md:border-l-0">
          <li className="pointer-events-none absolute top-6 left-0 hidden h-px w-full bg-white/15 md:block" />
          <div className="md:grid md:grid-cols-7 md:gap-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:pt-0"
              >
                <span className="bg-gradient-gold absolute -left-[2.65rem] grid size-9 place-items-center rounded-full text-accent-foreground md:static md:mb-5">
                  <s.icon className="size-4" aria-hidden="true" />
                </span>
                <p className="text-[11px] font-semibold tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm/relaxed opacity-70">{s.text}</p>
              </motion.li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */

const certs = [
  { name: "Global G.A.P.", note: "Good Agricultural Practice" },
  { name: "ISO 22000", note: "Food safety management" },
  { name: "Phytosanitary", note: "DPP Government of Pakistan" },
  { name: "Export License", note: "TDAP registered exporter" },
  { name: "QA Programme", note: "Lot-level traceability" },
];

export function Certifications() {
  return (
    <section className="section">
      <div className="container-luxe">
        <Reveal className="text-center">
          <Eyebrow>Certifications</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Documented, inspected, cleared.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
                <span className="grid size-14 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent-foreground dark:text-accent">
                  <BadgeCheck className="size-6" aria-hidden="true" />
                </span>
                <p className="font-display text-base font-semibold">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

const stats = [
  { to: 20, suffix: "+", label: "Years of experience" },
  { to: 10000, suffix: "+", label: "Happy customers" },
  { to: 50, suffix: "+", label: "Export partners" },
  { to: 25, suffix: "+", label: "Countries served" },
  { to: 100, suffix: "+", label: "Partner farms" },
];

export function Stats() {
  return (
    <section className="bg-cream py-20">
      <div className="container-luxe grid grid-cols-2 gap-8 md:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="text-center">
            <p className="font-display text-4xl font-semibold sm:text-5xl">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const reviews = [
  { name: "Amelia Hughes", role: "Head Buyer, Selfridges Food Hall", country: "United Kingdom", flag: "🇬🇧", stars: 5, text: "The Chaunsa allocation arrived at perfect ripeness three seasons running. Cold chain paperwork is immaculate." },
  { name: "Omar Al-Farsi", role: "Group F&B Director", country: "UAE", flag: "🇦🇪", stars: 5, text: "We serve MangoPlus Sindhri across four hotels. Consistency at this volume is genuinely rare." },
  { name: "Daniel Rossi", role: "Importer, Fruttitalia", country: "Italy", flag: "🇮🇹", stars: 5, text: "Sea freight reefer landed at 12.1°C exactly as promised. Zero rejections on the pallet." },
  { name: "Sara Khan", role: "Private client", country: "Canada", flag: "🇨🇦", stars: 5, text: "Anwar Ratol in Toronto that tastes like my grandmother's garden. The gift box is beautiful." },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="section overflow-hidden">
      <div className="container-luxe">
        <Reveal>
          <Eyebrow>Customer reviews</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Trusted by buyers, chefs and families.
          </h2>
        </Reveal>
      </div>
      <div className="group relative mt-14">
        <div className="marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <figure
              key={i}
              className="w-[21rem] shrink-0 rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 text-sm/relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="bg-gradient-gold grid size-11 shrink-0 place-items-center rounded-full font-display text-sm font-semibold text-accent-foreground">
                  {r.name.charAt(0)}
                </span>
                <figcaption className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {r.name} <span aria-hidden="true">{r.flag}</span>
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {r.role} · {r.country}
                  </p>
                </figcaption>
                <span className="ml-auto flex" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */

const shots = [
  { src: drone, alt: "Aerial view of mango orchards in Multan", span: "md:col-span-2 md:row-span-2" },
  { src: harvest, alt: "Hands picking a ripe mango at golden hour", span: "" },
  { src: packing, alt: "Workers hand-sorting mangoes in a packing facility", span: "md:row-span-2" },
  { src: shipping, alt: "Refrigerated export containers at the port at dusk", span: "md:col-span-2" },
  { src: giftbox, alt: "Premium MangoPlus gift box of golden mangoes", span: "" },
];

export function Gallery() {
  return (
    <section className="section bg-cream">
      <div className="container-luxe">
        <Reveal>
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Inside the season.
          </h2>
        </Reveal>
        <div className="mt-14 grid auto-rows-[13rem] grid-cols-2 gap-4 md:grid-cols-4">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {s.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fruit club ---------------- */

const plans = [
  { name: "Seasonal", price: 89, cadence: "per month", perks: ["5 kg premium selection", "Two varieties per box", "Pause anytime"] },
  { name: "Connoisseur", price: 149, cadence: "per month", perks: ["10 kg curated selection", "Rare late-harvest lots", "Priority allocation", "Free express shipping"], featured: true },
  { name: "Gifting", price: 199, cadence: "per box", perks: ["Signature gift box", "Handwritten card", "Ships to any address"] },
];

export function FruitClub() {
  return (
    <section className="section">
      <div className="container-luxe">
        <Reveal className="text-center">
          <Eyebrow>Monthly fruit club</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            A season's best, delivered monthly.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm/relaxed text-muted-foreground">
            Memberships open in April and close when allocation runs out. Every box is packed the
            morning it ships.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 shadow-soft ${
                  p.featured
                    ? "bg-gradient-forest border-transparent text-primary-foreground shadow-lift"
                    : "border-border bg-card"
                }`}
              >
                {p.featured && (
                  <span className="bg-gradient-gold mb-4 w-fit rounded-full px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-4 font-display text-4xl font-semibold">
                  ${p.price}
                  <span className="text-sm font-normal opacity-60"> {p.cadence}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {p.perks.map((k) => (
                    <li key={k} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className={p.featured ? "opacity-85" : "text-muted-foreground"}>{k}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gradient-gold text-accent-foreground"
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  Join {p.name}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function ClosingCTA() {
  return (
    <section className="section">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-forest px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24">
            <div
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full opacity-30 blur-3xl"
              style={{ backgroundImage: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold sm:text-5xl">
              Ready to bring Pakistan's finest to your market?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-sm/relaxed opacity-75">
              Tell us your destination port, volume and preferred varieties. We'll reply with
              pricing and the next available shipping window within one business day.
            </p>
            <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/corporate"
                className="bg-gradient-gold inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-accent-foreground"
              >
                Request bulk quote
              </Link>
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Browse varieties
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
