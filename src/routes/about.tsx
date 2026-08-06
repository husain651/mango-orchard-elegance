import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import { Certifications, Journey, Stats } from "@/components/site/HomeSections";
import drone from "@/assets/gallery-drone.jpg";
import harvest from "@/assets/gallery-harvest.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MangoPlus — Mango Exporters Since 2000" },
      {
        name: "description",
        content:
          "MangoPlus has exported premium Pakistani mangoes since 2000, working with 100+ partner farms across Punjab and Sindh under full traceability.",
      },
      { property: "og:title", content: "About MangoPlus — Mango Exporters Since 2000" },
      {
        property: "og:description",
        content: "Two decades of premium Pakistani mango exports, from 100+ partner farms to 25 countries.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Two decades in the orchard.{" "}
            <span className="text-gradient-gold italic">One obsession.</span>
          </>
        }
        lead="MangoPlus began in 2000 with a single truck out of Multan. Today we grade, pack and export from more than a hundred partner farms — and we still walk every orchard before the first pick."
      />

      <section className="section">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={drone}
              alt="Aerial view of MangoPlus partner orchards near Multan"
              width={1280}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full rounded-4xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Grown by families. Graded like jewellery.
            </h2>
            <div className="mt-6 space-y-4 text-sm/relaxed text-muted-foreground">
              <p>
                Pakistan grows some of the most aromatic mangoes on earth, yet very little of that
                fruit ever reaches an international shelf in the condition it deserves. We built
                MangoPlus to close that gap: fixed-price contracts with growers, our own grading
                team on site, and a cold chain that never breaks between the branch and the buyer.
              </p>
              <p>
                Every carton carries a lot number that traces back to an orchard block and a picking
                date. If something ever falls short, we can tell you exactly which tree it came from
                — and so can you.
              </p>
              <p>
                We ship to importers, hotel groups, retail chains and families who simply miss the
                taste of home. The standard is the same for all of them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />
      <Journey />

      <section className="section">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <Eyebrow>Our promise</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Picked for flavour, not for freight.
            </h2>
            <ul className="mt-6 space-y-4 text-sm/relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">Maturity over mileage.</strong> We pick at 78–82%
                maturity so fruit ripens in transit and arrives ready, never green and never bruised.
              </li>
              <li>
                <strong className="text-foreground">Fair grower pricing.</strong> Long-term contracts
                mean our farms invest in canopy management, not in cutting corners.
              </li>
              <li>
                <strong className="text-foreground">Full traceability.</strong> Lot-level records
                from orchard block to airway bill on every shipment.
              </li>
            </ul>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <img
              src={harvest}
              alt="Hands picking a ripe mango at golden hour"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/3 w-full rounded-4xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <Certifications />
    </>
  );
}
