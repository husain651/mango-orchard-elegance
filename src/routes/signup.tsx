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

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up | MangoPlus" },
      {
        name: "description",
        content: "Create a MangoPlus account to enjoy a personalized shopping experience.",
      },
    ],
  }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try {
      await signup(email, password, name);
      toast.success("Account created successfully!");
      navigate({ to: "/" });
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title={
          <>
            Create <span className="text-gradient-gold italic">Account</span>
          </>
        }
        lead="Join MangoPlus for a personalized shopping experience."
      />

      <section className="section">
        <div className="container-luxe flex justify-center">
          <Reveal>
            <Card className="w-full max-w-md rounded-3xl shadow-soft">
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl">Sign Up</CardTitle>
                <CardDescription>
                  Create your account to start ordering premium mangoes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-full"
                    />
                  </div>
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
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    By signing up, you agree to our{" "}
                    <Link to="/terms" className="text-accent-foreground dark:text-accent hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-accent-foreground dark:text-accent hover:underline">
                      Privacy Policy
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90"
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link to="/login" className="font-semibold text-accent-foreground dark:text-accent hover:underline">
                    Sign in
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
