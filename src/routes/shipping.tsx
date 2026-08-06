import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Ship, Snowflake, ThermometerSnowflake } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "International Mango Delivery & Cold Chain | MangoPlus" },
      {
        name: "description",
        content:
          "Cold-chain mango delivery to the UK, USA, Canada, Australia, Saudi Arabia, UAE, Qatar, Italy and Germany with air and reefer sea freight transit times.",
      },
      { property: "og:title", content: "International Mango Delivery | MangoPlus" },
      {
        property: "og:description",
        content: "Transit times, varieties and cold-chain logistics for 9 core export markets.",
      },
    ],
  }),
  component: Shipping,
});

type Market = {
  code: string;
  name: string;
  flag: string;
  days: string;
  method: string;
  varieties: string;
  x: number;
  y: number;
};

const markets: Market[] = [
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", days: "48–60 hours", method: "Air freight", varieties: "Chaunsa, Sindhri, Anwar Ratol", x: 47, y: 30 },
  { code: "US", name: "United States", flag: "🇺🇸", days: "60–84 hours", method: "Air freight", varieties: "Chaunsa, White Chaunsa", x: 22, y: 38 },
  { code: "CA", name: "Canada", flag: "🇨🇦", days: "60–84 hours", method: "Air freight", varieties: "Chaunsa, Sindhri", x: 21, y: 29 },
  { code: "AU", name: "Australia", flag: "🇦🇺", days: "72–96 hours", method: "Air freight", varieties: "Sindhri, Langra", x: 84, y: 74 },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", days: "24–36 hours", method: "Air + road", varieties: "All varieties", x: 57, y: 46 },
  { code: "AE", name: "UAE", flag: "🇦🇪", days: "12–24 hours", method: "Air freight", varieties: "All varieties", x: 60, y: 47 },
  { code: "QA", name: "Qatar", flag: "🇶🇦", days: "18–30 hours", method: "Air freight", varieties: "All varieties", x: 59, y: 45 },
  { code: "IT", name: "Italy", flag: "🇮🇹", days: "48–72 hours", method: "Air / reefer sea", varieties: "Chaunsa, Black Chaunsa", x: 50, y: 33 },
  { code: "DE", name: "Germany", flag: "🇩🇪", days: "48–72 hours", method: "Air / reefer sea", varieties: "Chaunsa, Sindhri, Langra", x: 50, y: 29 },
];

function Shipping() {
  const [active, setActive] = useState<Market>(markets[0]!);

  return (
    <>
      <PageHeader
        eyebrow="International delivery"
        title={
          <>
            25 countries. <span className="text-gradient-gold italic">One unbroken cold chain.</span>
          </>
        }
        lead="Select a market to see transit times, available varieties and the freight method we use for that lane."
      />

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl border border-border bg-gradient-forest p-6 shadow-lift">
              <div className="relative aspect-16/9">
                <svg
                  viewBox="0 0 100 60"
                  className="size-full opacity-25"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="dots" width="1.6" height="1.6" patternUnits="userSpaceOnUse">
                      <circle cx="0.55" cy="0.55" r="0.32" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="60" fill="url(#dots)" />
                </svg>

                {markets.map((m, i) => (
                  <motion.button
                    key={m.code}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    onClick={() => setActive(m)}
                    style={{ left: `${m.x}%`, top: `${m.y}%` }}
                    aria-label={`${m.name} — ${m.days}`}
                    aria-pressed={active.code === m.code}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span
                      className={`grid size-8 place-items-center rounded-full text-[13px] transition-all duration-300 ${
                        active.code === m.code
                          ? "bg-gradient-gold scale-125 shadow-gold"
                          : "bg-white/15 hover:bg-white/30"
                      }`}
                    >
                      <span aria-hidden="true">{m.flag}</span>
                    </span>
                    {active.code === m.code && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 rounded-3xl glass-dark p-6 text-primary-foreground">
                <p className="eyebrow text-accent">Selected market</p>
                <h2 className="font-display mt-2 text-2xl font-semibold">
                  <span aria-hidden="true">{active.flag}</span> {active.name}
                </h2>
                <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Transit time", active.days],
                    ["Method", active.method],
                    ["Varieties", active.varieties],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[11px] tracking-wide uppercase opacity-60">{k}</dt>
                      <dd className="mt-1 text-sm font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>All lanes</Eyebrow>
            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
              {markets.map((m) => (
                <li key={m.code}>
                  <button
                    onClick={() => setActive(m)}
                    className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm transition-colors hover:bg-secondary ${
                      active.code === m.code ? "bg-secondary" : ""
                    }`}
                  >
                    <span className="font-medium">
                      <span aria-hidden="true">{m.flag}</span> {m.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{m.days}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-luxe grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Snowflake, t: "Pre-cooling", d: "Field heat removed within 4 hours of harvest." },
            { icon: ThermometerSnowflake, t: "12°C constant", d: "Data loggers in every pallet, shared on arrival." },
            { icon: Plane, t: "Air freight", d: "Daily uplift from Lahore, Karachi and Multan." },
            { icon: Ship, t: "Reefer sea", d: "20ft & 40ft containers for volume programmes." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                <x.icon className="size-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 text-base font-semibold">{x.t}</h2>
                <p className="mt-2 text-sm/relaxed text-muted-foreground">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
