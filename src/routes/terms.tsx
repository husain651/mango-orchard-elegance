import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | MangoPlus" },
      {
        name: "description",
        content: "MangoPlus terms and conditions - rules and regulations for using our website and services.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="Please read these terms carefully before using our website and placing orders."
      />

      <section className="section">
        <div className="container-luxe max-w-4xl">
          <Reveal>
            <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
              <p className="text-muted-foreground">
                Last updated: August 7, 2024
              </p>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>By accessing or using MangoPlus (mangoplus.pk), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">2. Products and Orders</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Product Availability:</strong> All products are subject to availability. We reserve the right to limit quantities and discontinue products without notice.</p>
                  <p><strong>Pricing:</strong> Prices are listed in PKR and may change without notice. We are not responsible for typographical errors.</p>
                  <p><strong>Order Acceptance:</strong> We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing, or suspected fraud.</p>
                  <p><strong>Product Descriptions:</strong> We strive for accuracy but do not warrant that descriptions are error-free. Products may vary slightly from images shown.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">3. Payment Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Payment Methods:</strong> We accept credit/debit cards, bank transfers, and cash on delivery (where available).</p>
                  <p><strong>Security:</strong> All payments are processed through secure, PCI-compliant payment processors. We do not store your complete payment information.</p>
                  <p><strong>Pricing:</strong> You agree to pay all charges incurred under your account at the prices in effect when incurred.</p>
                  <p><strong>Fraud:</strong> We reserve the right to investigate suspected fraudulent activity and report it to authorities.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Shipping Times:</strong> Estimated delivery times are provided as guidelines only. We are not liable for delays caused by shipping carriers, customs, or other factors beyond our control.</p>
                  <p><strong>International Orders:</strong> International customers are responsible for customs duties, taxes, and import regulations. We cannot guarantee delivery to all international locations.</p>
                  <p><strong>Delivery Address:</strong> You are responsible for providing accurate delivery information. We are not liable for failed deliveries due to incorrect addresses.</p>
                  <p><strong>Perishable Goods:</strong> Mangoes are perishable. We recommend immediate consumption upon delivery. We are not responsible for spoilage due to delayed pickup or improper storage after delivery.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Perishable Products:</strong> Due to the perishable nature of mangoes, we generally do not accept returns. However, if you receive damaged or spoiled products, please contact us within 24 hours of delivery.</p>
                  <p><strong>Quality Issues:</strong> If you are unsatisfied with product quality, please contact us with photos. We may offer replacement or refund at our discretion.</p>
                  <p><strong>Non-Perishable Items:</strong> For non-perishable items, returns may be accepted within 7 days of delivery in original condition.</p>
                  <p><strong>Refunds:</strong> Refunds will be processed to the original payment method within 5-10 business days.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">6. User Accounts</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized use.</p>
                  <p><strong>Account Information:</strong> You agree to provide accurate, current, and complete information. You agree to update this information as necessary.</p>
                  <p><strong>Account Termination:</strong> We reserve the right to suspend or terminate your account for violation of these terms or fraudulent activity.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Content:</strong> All content on this website, including text, images, logos, and designs, is owned by MangoPlus or its licensors and protected by copyright laws.</p>
                  <p><strong>Usage:</strong> You may not reproduce, distribute, or create derivative works without our express written permission.</p>
                  <p><strong>Trademarks:</strong> MangoPlus and related logos are trademarks of MangoPlus. You may not use these without permission.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>To the maximum extent permitted by law, MangoPlus shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our website or products.</p>
                  <p>Our total liability shall not exceed the amount you paid for the products in question.</p>
                  <p>We are not liable for delays, failures, or interruptions in service due to causes beyond our control.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">9. Indemnification</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You agree to indemnify and hold MangoPlus harmless from any claims, damages, or expenses arising from your use of our website or violation of these terms.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">10. Privacy Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">11. Governing Law</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>These terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved in the courts of Lahore, Pakistan.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">12. Modifications</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We reserve the right to modify these terms at any time. Continued use of our website after changes constitutes acceptance of the modified terms.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">13. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For questions about these terms, please contact us:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Email: legal@mangoplus.pk</li>
                    <li>Phone: +92 300 1234567</li>
                    <li>Address: MangoPlus Office, Lahore, Pakistan</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
