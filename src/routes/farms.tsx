import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import drone from "@/assets/gallery-drone.jpg";
import packing from "@/assets/gallery-packing.jpg";
import harvest from "@/assets/gallery-harvest.jpg";

export const Route = createFileRoute("/farms")({
  head: () => ({
    meta: [
      { title: "Our Partner Farms in Punjab & Sindh | MangoPlus" },
      {
        name: "description",
        content:
          "Meet the MangoPlus partner orchards in Multan, Mirpurkhas, Rahim Yar Khan and Muzaffargarh — 100+ farms under long-term, traceable contracts.",
      },
      { property: "og:title", content: "Our Partner Farms | MangoPlus" },
      {
        property: "og:description",
        content: "100+ traceable partner orchards across Punjab and Sindh.",
      },
    ],
  }),
  component: Farms,
});

const farms = [
  { name: "Rahim Orchards", place: "Multan, Punjab", acres: "420 acres", varieties: "Chaunsa, Langra", image: drone },
  { name: "Sindhri Estate", place: "Mirpurkhas, Sindh", acres: "610 acres", varieties: "Sindhri, Dussehri", image: harvest },
  { name: "Kot Sabzal Farms", place: "Rahim Yar Khan, Punjab", acres: "280 acres", varieties: "White Chaunsa", image: packing },
];

function Farms() {
  return (
    <>
      <PageHeader
        eyebrow="Our farms"
        title={
          <>
            The orchards behind <span className="text-gradient-gold italic">every carton.</span>
          </>
        }
        lead="More than a hundred partner farms across the mango belt of Punjab and Sindh, contracted season after season and audited before each harvest."
      />

      <section className="section">
        <div className="container-luxe">
          <Reveal>
            <Eyebrow>Featured estates</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {farms.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                  <img
                    src={f.image}
                    alt={`${f.name} in ${f.place}`}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold">{f.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{f.place}</p>
                    <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <dt className="text-muted-foreground">Area</dt>
                        <dd className="mt-0.5 font-medium">{f.acres}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Varieties</dt>
                        <dd className="mt-0.5 font-medium">{f.varieties}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-4xl border border-border bg-cream p-8">
              <p className="max-w-xl text-sm/relaxed text-muted-foreground">
                Buyers are welcome at the orchards during harvest season. We arrange farm visits,
                packhouse walkthroughs and cupping sessions in Multan every June and July.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-gold inline-flex min-h-12 items-center rounded-full px-8 text-sm font-semibold text-accent-foreground"
              >
                Arrange a visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
