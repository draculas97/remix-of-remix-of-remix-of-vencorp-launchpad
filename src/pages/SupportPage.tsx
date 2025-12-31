import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Mail, Book, Users, Clock, ArrowRight, Phone, Headphones, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const supportChannels = [
  {
    icon: <MessageCircle size={24} />,
    title: "Live Chat",
    desc: "Chat with our support team in real-time.",
    availability: "Available 24/7",
    action: "Start Chat",
    color: "pragati",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Support",
    desc: "Get help via email for detailed inquiries.",
    availability: "Response within 24h",
    action: "Send Email",
    color: "stello",
  },
  {
    icon: <Book size={24} />,
    title: "Documentation",
    desc: "Browse our comprehensive guides and tutorials.",
    availability: "Self-service",
    action: "View Docs",
    href: "/documentation",
    color: "edifai",
  },
  {
    icon: <Users size={24} />,
    title: "Community Forum",
    desc: "Connect with other founders and share knowledge.",
    availability: "Active community",
    action: "Join Forum",
    color: "interllexia",
  },
];

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How does Pragati's validation scoring work?",
        a: "Pragati uses a 110-point evaluation system analyzing market viability, technical feasibility, competitive landscape, and financial sustainability. Each dimension is weighted based on industry benchmarks and real-world success patterns.",
      },
      {
        q: "What's included in the free tier?",
        a: "The free tier includes 3 idea validations per month, basic Stello workspace access, and read-only access to community resources. Upgrade to unlock unlimited validations and full feature access.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Can I integrate Vencorp with my existing tools?",
        a: "Yes! We offer REST APIs and webhooks for all major platforms. Check our API documentation for integration guides, SDKs, and code examples.",
      },
      {
        q: "What happens to my data?",
        a: "Your data is encrypted at rest and in transit using AES-256 encryption. We never share your idea details with third parties. See our privacy policy for complete details on data handling.",
      },
    ],
  },
  {
    category: "Billing",
    questions: [
      {
        q: "How do I upgrade my plan?",
        a: "Visit Settings > Billing in your dashboard. You can upgrade instantly, and changes take effect immediately. We'll prorate any existing subscription.",
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a 14-day money-back guarantee for annual plans. Contact support within 14 days of purchase for a full refund, no questions asked.",
      },
    ],
  },
];

const supportStats = [
  { value: "<2min", label: "Avg. Response Time" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Availability" },
  { value: "50+", label: "Support Agents" },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
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
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                We're here to help you succeed. Search our knowledge base or reach out directly.
              </p>

              {/* Search */}
              <div className="relative max-w-xl">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search for help..." 
                  className="pl-12 h-14 text-base rounded-full border-border/60 bg-card"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-pragati mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Choose the support channel that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bento-card group hover:border-${channel.color}/50 hover:shadow-glow-${channel.color}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${channel.color}/10 text-${channel.color} mb-4 group-hover:scale-110 transition-transform`}>
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
                      <Button variant="outline" size="sm" className={`rounded-full gap-2 group-hover:border-${channel.color}/50`}>
                        {channel.action}
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" className={`rounded-full gap-2 group-hover:border-${channel.color}/50`}>
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
            <div className="max-w-3xl mx-auto space-y-8">
              {faqs.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-4">
                    {section.category}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {section.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faq.q}
                        value={`${sectionIndex}-${faqIndex}`}
                        className="bento-card border-border/60 px-6"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Support */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bento-card bg-gradient-to-br from-pragati/5 to-stello/5 border-pragati/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Headphones size={24} className="text-pragati" />
                      <span className="font-mono text-xs text-pragati tracking-wider uppercase">Enterprise</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Need dedicated support?</h3>
                    <p className="text-muted-foreground mb-6">
                      Get a dedicated account manager, priority support queue, custom SLAs, and direct access to our engineering team.
                    </p>
                    <Button className="rounded-full gap-2">
                      <Phone size={16} />
                      Contact Sales
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-pragati" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-stello" />
                      <span className="text-sm">Priority support queue</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-edifai" />
                      <span className="text-sm">Custom SLA agreements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-interllexia" />
                      <span className="text-sm">Direct engineering access</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-pragati/5">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6">Our team is standing by to assist you.</p>
              <Button className="rounded-full gap-2">
                <MessageCircle size={16} />
                Start Live Chat
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
