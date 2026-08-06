import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MangoPlus — Multan, Pakistan" },
      {
        name: "description",
        content:
          "Contact the MangoPlus export team in Multan, Pakistan by phone, email or WhatsApp. Business hours, office address and enquiry form.",
      },
      { property: "og:title", content: "Contact MangoPlus" },
      {
        property: "og:description",
        content: "Talk to our export team in Multan — phone, email, WhatsApp or the enquiry form.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject is required").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's talk <span className="text-gradient-gold italic">mangoes.</span>
          </>
        }
        lead="Our export desk answers every enquiry within one business day, in English or Urdu."
      />

      <section className="section">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow>Reach us</Eyebrow>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Phone, label: "Phone", value: "+92 300 000 0000" },
                { icon: Mail, label: "Email", value: "hello@mangoplus.pk" },
                { icon: MapPin, label: "Office", value: "Shujabad Road, Multan, Punjab, Pakistan" },
                { icon: Clock, label: "Business hours", value: "Mon–Sat, 9:00–18:00 PKT" },
              ].map((c) => (
                <li
                  key={c.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-foreground dark:text-accent">
                    <c.icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium">{c.value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/923000000000"
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-leaf text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              <MessageCircle className="size-[18px]" aria-hidden="true" /> Chat on WhatsApp
            </a>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="MangoPlus office location in Multan, Pakistan"
                src="https://www.google.com/maps?q=Multan,Pakistan&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                const result = schema.safeParse(data);
                if (!result.success) {
                  const next: Record<string, string> = {};
                  for (const issue of result.error.issues)
                    next[String(issue.path[0])] = issue.message;
                  setErrors(next);
                  toast.error("Please check the highlighted fields");
                  return;
                }
                setErrors({});
                toast.success("Message sent — we'll be in touch shortly.");
                e.currentTarget.reset();
              }}
              className="rounded-4xl border border-border bg-card p-8 shadow-lift"
            >
              <h2 className="font-display text-2xl font-semibold">Send a message</h2>
              <div className="mt-6 space-y-4">
                {[
                  { name: "name", label: "Your name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "subject", label: "Subject", type: "text" },
                ].map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="text-xs font-semibold tracking-wide uppercase">
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      aria-invalid={Boolean(errors[f.name])}
                      className={`mt-2 min-h-11 w-full rounded-full border bg-background px-4 text-sm outline-hidden focus-visible:border-ring ${
                        errors[f.name] ? "border-destructive" : "border-input"
                      }`}
                    />
                    {errors[f.name] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors[f.name]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={1000}
                    aria-invalid={Boolean(errors["message"])}
                    className={`mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-hidden focus-visible:border-ring ${
                      errors["message"] ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors["message"] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
                  )}
                </div>
              </div>
              <button className="bg-gradient-gold mt-6 min-h-12 w-full rounded-full text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]">
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
