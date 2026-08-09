import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | MangoPlus" },
      {
        name: "description",
        content: "MangoPlus privacy policy - how we collect, use, and protect your personal information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <section className="section">
        <div className="container-luxe max-w-4xl">
          <Reveal>
            <div className="prose prose-lg max-w-none dark:prose-invert space-y-8">
              <p className="text-muted-foreground">
                Last updated: August 7, 2024
              </p>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect information you provide directly, including:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Shipping and billing addresses</li>
                    <li>Order history and preferences</li>
                  </ul>
                  <p>We also collect information automatically:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring websites</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use your information to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Send order confirmations and shipping updates</li>
                    <li>Provide customer support</li>
                    <li>Improve our products and services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Prevent fraud and ensure security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may share your information with:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Shipping carriers to deliver your orders</li>
                    <li>Payment processors to handle transactions</li>
                    <li>Service providers who assist our operations</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                  <p>We never sell your personal information to third parties.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">4. Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure payment processing through PCI-compliant providers</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication systems</li>
                  </ul>
                  <p>However, no method of transmission over the internet is 100% secure.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">5. Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Object to processing of your data</li>
                    <li>Data portability</li>
                  </ul>
                  <p>To exercise these rights, contact us at privacy@mangoplus.pk</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">6. Cookies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use cookies to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Keep you logged in to your account</li>
                    <li>Analyze site traffic and usage patterns</li>
                    <li>Personalize your experience</li>
                  </ul>
                  <p>You can control cookies through your browser settings.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">7. Third-Party Services</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our website integrates with third-party services, including:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Payment processors (Stripe, PayPal)</li>
                    <li>Analytics services (Google Analytics)</li>
                    <li>Email marketing services</li>
                    <li>Social media platforms</li>
                  </ul>
                  <p>These services have their own privacy policies which we encourage you to review.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete it.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">11. Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>If you have questions about this privacy policy or your personal information, please contact us:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Email: privacy@mangoplus.pk</li>
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
