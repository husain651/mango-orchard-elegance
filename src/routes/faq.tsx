import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | MangoPlus" },
      {
        name: "description",
        content: "Find answers to common questions about ordering, shipping, mango varieties, and more.",
      },
    ],
  }),
  component: FAQ,
});

const faqCategories = [
  {
    title: "Ordering & Payment",
    questions: [
      {
        q: "How do I place an order?",
        a: "Simply browse our products, select your preferred mango varieties and sizes, add them to your cart, and proceed to checkout. You can create an account for faster checkout or checkout as a guest."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards (Visa, Mastercard), bank transfers, and cash on delivery in select areas. All payments are processed securely through PCI-compliant payment processors."
      },
      {
        q: "Can I modify or cancel my order?",
        a: "Orders can be modified or cancelled within 24 hours of placement, provided they haven't been shipped. Contact our customer service team at orders@mangoplus.pk for assistance."
      },
      {
        q: "Do you offer bulk or corporate discounts?",
        a: "Yes! We offer special pricing for bulk orders and corporate clients. Visit our Corporate Orders page or contact sales@mangoplus.pk for a custom quote."
      }
    ]
  },
  {
    title: "Shipping & Delivery",
    questions: [
      {
        q: "What are your shipping options?",
        a: "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and international shipping to select countries. Shipping times vary by location."
      },
      {
        q: "How are mangoes shipped to ensure freshness?",
        a: "We use temperature-controlled shipping and specialized packaging designed for fruit transport. Mangoes are pre-cooled and packed with ventilation to maintain optimal temperature during transit."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to the UK, USA, Canada, Australia, Saudi Arabia, UAE, Qatar, Italy, and Germany. International orders comply with all phytosanitary requirements."
      },
      {
        q: "What if my mangoes arrive damaged or spoiled?",
        a: "Please contact us within 24 hours of delivery with photos of the damaged items. We will arrange for replacement or refund, depending on the situation."
      },
      {
        q: "Can I track my order?",
        a: "Yes, you'll receive a tracking number via email once your order ships. You can also track your order through your account dashboard."
      }
    ]
  },
  {
    title: "Mango Varieties",
    questions: [
      {
        q: "Which mango variety is the sweetest?",
        a: "Chaunsa varieties (White Chaunsa and Black Chaunsa) are generally considered the sweetest, with high sugar content and minimal fiber. Anwar Ratol is also exceptionally sweet."
      },
      {
        q: "When is each variety in season?",
        a: "Sindhri (Late May - mid June), Chaunsa (mid June - August), White Chaunsa (July - early August), Black Chaunsa (late July - August), Anwar Ratol (late June - July), Langra (July - early August), Dussehri (late June - July)."
      },
      {
        q: "What's the difference between Chaunsa varieties?",
        a: "White Chaunsa has white-green skin and is exceptionally sweet. Black Chaunsa has dark green skin with reddish blush and has a complex, rich flavor. Regular Chaunsa is the classic variety with greenish-yellow skin."
      },
      {
        q: "How do I know which variety to choose?",
        a: "For fresh eating, Chaunsa varieties are ideal. For desserts, Sindhri works well. For traditional dishes, Langra is preferred. If you're unsure, our product descriptions include recommended uses for each variety."
      }
    ]
  },
  {
    title: "Storage & Handling",
    questions: [
      {
        q: "How should I store my mangoes?",
        a: "Keep unripe mangoes at room temperature until they ripen. Once ripe, refrigerate to extend shelf life by 3-5 days. Never refrigerate unripe mangoes as this halts ripening permanently."
      },
      {
        q: "How can I tell if a mango is ripe?",
        a: "Gently squeeze the mango. Ripe mangoes yield slightly to pressure, like a ripe avocado. Some varieties (like Chaunsa) stay greenish even when ripe, so rely on feel rather than color."
      },
      {
        q: "How long do mangoes last?",
        a: "At room temperature, ripe mangoes last 2-3 days. Refrigerated, they last 5-7 days. Frozen mango can last 6-8 months."
      },
      {
        q: "Can I freeze mangoes?",
        a: "Yes! Peel and cut mango into chunks, spread on a baking sheet to freeze individually, then transfer to freezer bags. Frozen mango is perfect for smoothies and desserts."
      }
    ]
  },
  {
    title: "Corporate & Bulk Orders",
    questions: [
      {
        q: "What is the minimum order quantity for bulk orders?",
        a: "Minimum order quantities vary by variety and season. Generally, bulk orders start at 50kg. Contact our sales team for specific requirements."
      },
      {
        q: "Do you offer custom branding for corporate gifts?",
        a: "Yes, we offer custom branding options including logo placement on gift boxes, personalized messages, and corporate gift packages."
      },
      {
        q: "Can you handle large export orders?",
        a: "Absolutely. We have experience with container-sized export orders and can handle all documentation, phytosanitary requirements, and logistics for international shipments."
      },
      {
        q: "Do you offer credit terms for corporate clients?",
        a: "Yes, established corporate clients may be eligible for credit terms. This is determined on a case-by-case basis. Contact our sales team for more information."
      }
    ]
  },
  {
    title: "Account & Privacy",
    questions: [
      {
        q: "Do I need to create an account to order?",
        a: "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, view order history, and access exclusive offers."
      },
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link via email."
      },
      {
        q: "Is my personal information secure?",
        a: "Yes, we use SSL encryption, secure payment processing, and comply with data protection regulations. See our Privacy Policy for details on how we protect your information."
      },
      {
        q: "Can I delete my account?",
        a: "Yes, you can request account deletion through your account settings or by contacting privacy@mangoplus.pk. This will permanently remove your account and associated data."
      }
    ]
  }
];

function FAQ() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title={
          <>
            Frequently Asked <span className="text-gradient-gold italic">Questions</span>
          </>
        }
        lead="Find answers to common questions about ordering, shipping, mango varieties, and more."
      />

      <section className="section">
        <div className="container-luxe max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.1}>
              <div className="mb-12">
                <h2 className="font-display text-2xl font-semibold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="rounded-2xl border border-border bg-card px-6">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}

          <Reveal delay={faqCategories.length * 0.1}>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-8 text-center">
              <h3 className="font-display text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:help@mangoplus.pk"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-background font-semibold transition-colors hover:bg-foreground/90"
                >
                  Email Us
                </a>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Call Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
