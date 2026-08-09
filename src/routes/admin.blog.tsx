import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/blog-posts";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/blog")({
  component: AdminBlog,
});

function AdminBlog() {
  const handleDelete = (slug: string) => {
    toast.success("Blog post deleted");
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container-luxe py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" />
            Back to Admin
          </Link>
          <Button className="rounded-full">
            <Plus className="size-4 mr-2" />
            New Post
          </Button>
        </div>

        <h1 className="font-display text-3xl font-semibold mb-8">Blog Management</h1>

        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="rounded-3xl shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-20 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold">{post.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>{post.category}</Badge>
                      <Badge variant="outline">{post.readTime} read</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Eye className="size-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <Edit className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-destructive hover:text-destructive"
                      onClick={() => handleDelete(post.slug)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
