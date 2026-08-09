import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/lib/blog-posts";

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
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.07}>
              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
                      <span className="text-accent-foreground dark:text-accent">{post.category}</span> ·{" "}
                      {post.readTime} read
                    </p>
                    <h2 className="font-display mt-3 text-lg font-semibold">{post.title}</h2>
                    <p className="mt-2 text-sm/relaxed text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                      Read article
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
