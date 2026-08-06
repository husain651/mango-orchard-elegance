import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import drone from "@/assets/gallery-drone.jpg";
import harvest from "@/assets/gallery-harvest.jpg";
import packing from "@/assets/gallery-packing.jpg";
import shipping from "@/assets/gallery-shipping.jpg";
import giftbox from "@/assets/gallery-giftbox.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Mango Journal — Guides, Recipes & Farm Stories | MangoPlus" },
      {
        name: "description",
        content:
          "Guides to Pakistani mango varieties, health benefits, the export process, recipes, farm stories and storage tips from the MangoPlus team.",
      },
      { property: "og:title", content: "Mango Journal | MangoPlus" },
      {
        property: "og:description",
        content: "Variety guides, recipes, export explainers and stories from the orchard.",
      },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "The complete guide to Pakistani mango varieties", cat: "Guide", read: "9 min", image: harvest, excerpt: "Sindhri to Black Chaunsa — how to tell them apart, when they peak and what each is best for." },
  { title: "Why mangoes are the most nutrient-dense summer fruit", cat: "Health", read: "6 min", image: giftbox, excerpt: "Vitamin C, carotenoids and fibre: what a single Chaunsa actually delivers." },
  { title: "Inside a mango export: 72 hours from branch to buyer", cat: "Export", read: "8 min", image: shipping, excerpt: "Pre-cooling, phytosanitary clearance, airway bills and the paperwork behind a pallet." },
  { title: "Five ways our packhouse team eats mango", cat: "Recipes", read: "5 min", image: packing, excerpt: "Lassi, salsa, sticky rice, sorbet and the unbeatable slice-over-the-sink." },
  { title: "The Rahim family have farmed the same block since 1962", cat: "Farm stories", read: "7 min", image: drone, excerpt: "Three generations, one orchard and a canopy pruned entirely by hand." },
  { title: "How to store mangoes so they ripen perfectly", cat: "Tips", read: "4 min", image: giftbox, excerpt: "Never the fridge before ripening — and the paper-bag trick that actually works." },
];

function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={
          <>
            Notes from the <span className="text-gradient-gold italic">mango belt.</span>
          </>
        }
        lead="Variety guides, export explainers, recipes and stories from the orchards we work with."
      />

      <section className="section">
        <div className="container-luxe grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                    <span className="text-accent-foreground dark:text-accent">{p.cat}</span> ·{" "}
                    {p.read} read
                  </p>
                  <h2 className="font-display mt-3 text-lg font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm/relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Read article
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
