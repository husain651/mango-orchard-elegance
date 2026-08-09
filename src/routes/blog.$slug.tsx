import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw redirect({ to: "/blog" });
    }
    return { post, relatedPosts: getRelatedPosts(params.slug, post.relatedPosts) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.post.title} | MangoPlus Journal` },
      {
        name: "description",
        content: loaderData.post.excerpt,
      },
      { property: "og:title", content: loaderData.post.title },
      {
        property: "og:description",
        content: loaderData.post.excerpt,
      },
      { property: "og:image", content: loaderData.post.image },
    ],
  }),
});

function BlogPost() {
  const { post, relatedPosts } = Route.useLoaderData();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          toast.error('Failed to share');
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
      />

      <article className="section">
        <div className="container-luxe">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Journal
          </Link>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-8">
              <Reveal>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-3xl shadow-soft"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
                  <div className="flex items-center gap-2">
                    <User className="size-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>{post.readTime} read</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="ml-auto"
                  >
                    <Share2 className="size-4 mr-2" />
                    Share
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="font-display text-2xl font-semibold mt-8 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="font-display text-xl font-semibold mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <li key={index} className="ml-4">
                          {paragraph.replace('- ', '')}
                        </li>
                      );
                    }
                    if (paragraph.startsWith('**Recipe:**')) {
                      return (
                        <div key={index} className="my-6 p-6 bg-muted/50 rounded-2xl border border-border">
                          <p className="font-semibold mb-2">Recipe:</p>
                          <p className="text-sm">{paragraph.replace('**Recipe:**', '')}</p>
                        </div>
                      );
                    }
                    if (paragraph.includes('**') && paragraph.includes(':')) {
                      const [label, ...rest] = paragraph.split(':');
                      return (
                        <div key={index} className="my-4">
                          <span className="font-semibold">{label.replace(/\*\*/g, '')}:</span>
                          <span className="ml-2">{rest.join(':')}</span>
                        </div>
                      );
                    }
                    return (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            <aside className="space-y-8">
              <Reveal delay={0.3}>
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <h3 className="font-display text-lg font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="size-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">MangoPlus Team</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Part of the MangoPlus family, sharing our passion for Pakistan's finest mangoes with the world.
                    </p>
                  </div>

                  {relatedPosts.length > 0 && (
                    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                      <h3 className="font-display text-lg font-semibold mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((related) => (
                          <Link
                            key={related.slug}
                            to="/blog/$slug"
                            params={{ slug: related.slug }}
                            className="block group"
                          >
                            <article className="space-y-2">
                              <p className="text-xs font-semibold uppercase text-muted-foreground">
                                {related.category}
                              </p>
                              <h4 className="font-medium group-hover:text-accent-foreground dark:group-hover:text-accent transition-colors">
                                {related.title}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {related.excerpt}
                              </p>
                            </article>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
