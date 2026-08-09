import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | MangoPlus" },
      {
        name: "description",
        content: "Sign in to your MangoPlus account to track orders, manage wishlist, and more.",
      },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await login(email, password);
      toast.success("Welcome back!");
      navigate({ to: "/" });
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    // Simulate Google OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Mock Google user data
    const googleUser = {
      id: "google_" + Date.now().toString(),
      email: "user@gmail.com",
      name: "Google User",
    };
    
    // Manually set the user in localStorage to simulate successful Google login
    localStorage.setItem("mp-user", JSON.stringify(googleUser));
    
    // Update auth state
    window.location.reload(); // Reload to refresh auth state
    setIsGoogleLoading(false);
  };

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title={
          <>
            Welcome <span className="text-gradient-gold italic">Back</span>
          </>
        }
        lead="Sign in to your account to track orders and manage your wishlist."
      />

      <section className="section">
        <div className="container-luxe flex justify-center">
          <Reveal>
            <Card className="w-full max-w-md rounded-3xl shadow-soft">
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl">Sign In</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      Remember me
                    </label>
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <Link to="/signup" className="font-semibold text-accent-foreground dark:text-accent hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
