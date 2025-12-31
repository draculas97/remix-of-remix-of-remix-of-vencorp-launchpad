import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Mail, Book, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportChannels = [
  {
    icon: <MessageCircle size={24} />,
    title: "Live Chat",
    desc: "Chat with our support team in real-time.",
    availability: "Available 24/7",
    action: "Start Chat",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Support",
    desc: "Get help via email for detailed inquiries.",
    availability: "Response within 24h",
    action: "Send Email",
  },
  {
    icon: <Book size={24} />,
    title: "Documentation",
    desc: "Browse our comprehensive guides and tutorials.",
    availability: "Self-service",
    action: "View Docs",
    href: "/documentation",
  },
  {
    icon: <Users size={24} />,
    title: "Community Forum",
    desc: "Connect with other founders and share knowledge.",
    availability: "Active community",
    action: "Join Forum",
  },
];

const faqs = [
  {
    q: "How does Pragati's validation scoring work?",
    a: "Pragati uses a 110-point evaluation system analyzing market viability, technical feasibility, competitive landscape, and financial sustainability.",
  },
  {
    q: "Can I integrate Vencorp with my existing tools?",
    a: "Yes! We offer REST APIs and webhooks for all major platforms. Check our API documentation for integration guides.",
  },
  {
    q: "What happens to my data?",
    a: "Your data is encrypted at rest and in transit. We never share your idea details with third parties. See our privacy policy for details.",
  },
  {
    q: "How do I upgrade my plan?",
    a: "Visit Settings > Billing in your dashboard. You can upgrade instantly, and changes take effect immediately.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day money-back guarantee for annual plans. Contact support within 14 days of purchase for a full refund.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} />
              <span className="font-mono text-xs uppercase tracking-wider">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                Support
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                How Can We Help?
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We're here to help you succeed. Choose the support channel that works best for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pragati/10 text-pragati mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{channel.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock size={12} />
                    {channel.availability}
                  </div>
                  {channel.href ? (
                    <Link to={channel.href}>
                      <Button variant="outline" size="sm" className="rounded-full gap-2 group-hover:border-pragati/50">
                        {channel.action}
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" className="rounded-full gap-2 group-hover:border-pragati/50">
                      {channel.action}
                      <ArrowRight size={14} />
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Quick answers to common questions.</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card"
                >
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6">Our team is standing by to assist you.</p>
              <Button className="rounded-full gap-2">
                <MessageCircle size={16} />
                Contact Support
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
