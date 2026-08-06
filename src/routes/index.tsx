import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ProductCard } from "@/components/site/ProductCard";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import {
  Certifications,
  ClosingCTA,
  FruitClub,
  Gallery,
  Journey,
  Stats,
  Testimonials,
  WhyChoose,
} from "@/components/site/HomeSections";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MangoPlus — Pakistan's Finest Mangoes, Delivered Worldwide" },
      {
        name: "description",
        content:
          "Premium export-quality Pakistani mangoes — Sindhri, Chaunsa, Anwar Ratol and more — sourced from trusted farms and shipped fresh under cold chain to 25 countries.",
      },
      {
        property: "og:title",
        content: "MangoPlus — Pakistan's Finest Mangoes, Delivered Worldwide",
      },
      {
        property: "og:description",
        content:
          "Export-quality Pakistani mangoes from partner farms in Punjab and Sindh, delivered fresh worldwide.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <section className="section" id="varieties">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Featured varieties</Eyebrow>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold sm:text-5xl">
                  Seven cultivars. One standard.
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-secondary"
              >
                View all varieties
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <Journey />
      <Stats />
      <Certifications />
      <Testimonials />
      <Gallery />
      <FruitClub />
      <ClosingCTA />
    </>
  );
}
