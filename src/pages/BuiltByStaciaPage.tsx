import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Zap, Palette, Code, Shield, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const usps = [
  {
    number: "1",
    title: "Ultra-Fast Deployment",
    subtitle: "WEBSITE DEPLOYMENT IN JUST 2 DAYS",
    desc: "From concept to live website in just 2 days, not months. Our streamlined process delivers results at lightning speed.",
    icon: <Zap size={24} />,
  },
  {
    number: "2",
    title: "Premium Visual Design",
    subtitle: "DESIGN LANGUAGE THAT SCALES WITH YOUR BRAND",
    desc: "From typography to motion, we craft a coherent design system so every page, campaign, and feature feels like one brand—yours.",
    icon: <Palette size={24} />,
  },
  {
    number: "3",
    title: "Performance Built-in",
    subtitle: "FAST, LEAN, AND RESPONSIVE-FIRST LAYOUTS",
    desc: "We obsess over responsive design, developing fast, minimal and optimal websites so your experience feels instant across regions and devices.",
    icon: <Code size={24} />,
  },
  {
    number: "4",
    title: "Robust Engineering",
    subtitle: "MAINTAINABLE FRONTENDS, CLEAN APIS",
    desc: "Component-driven architecture, typed interfaces, and clear boundaries make ongoing evolution predictable instead of painful.",
    icon: <Shield size={24} />,
  },
  {
    number: "5",
    title: "Quality Assurance",
    subtitle: "EVERY BREAKPOINT, EVERY INTERACTION CHECKED",
    desc: "We validate layouts, interactions, and content on real devices and resolutions so nothing feels like an afterthought.",
    icon: <Check size={24} />,
  },
  {
    number: "6",
    title: "Long-term Partner Mindset",
    subtitle: "MORE THAN A HANDOFF, WE STAY IN THE LOOP",
    desc: "We plan roadmaps, not one-offs—so your site can keep evolving as your business grows.",
    icon: <Users size={24} />,
  },
];

const marketingPlans = [
  {
    name: "The Starter Page",
    tagline: "Perfect for simple landing pages",
    price: "₹9,850",
    originalPrice: "₹11,999",
    discount: "-18%",
    features: [
      "Single responsive page",
      "Modern UI design",
      "Ultra Fast 2-day delivery",
      "Hand-crafted, 100% scratch coded",
      "Mobile optimized",
      "Basic SEO setup",
    ],
  },
  {
    name: "The Foundation Pack",
    tagline: "Ideal for small businesses",
    price: "₹18,499",
    originalPrice: "₹24,999",
    discount: "-26%",
    features: [
      "Up to 3 pages",
      "Premium UI design",
      "Ultra Fast 2-day delivery",
      "Hand-crafted, 100% scratch coded",
      "Contact forms",
      "Responsive design",
      "Advanced SEO",
    ],
  },
  {
    name: "The Professional Hub",
    tagline: "Complete business solution",
    price: "₹24,999",
    originalPrice: "₹31,999",
    discount: "-22%",
    popular: true,
    features: [
      "Up to 5 pages",
      "Premium UI design",
      "Ultra Fast 2-day delivery",
      "Hand-crafted, 100% scratch coded",
      "Performance optimization",
      "Regular technical support",
      "Responsive design",
      "Full SEO suite",
    ],
  },
  {
    name: "The Custom Solution",
    tagline: "Tailored to your needs",
    price: "Custom",
    features: [
      "Unlimited pages",
      "Static & Dynamic content",
      "Bespoke functionality",
      "CMS Integration",
      "Hand-crafted, 100% scratch coded",
      "E-commerce ready",
      "Cloud hosting & maintenance",
      "Priority technical support",
      "Multi-language support",
      "Custom timeline",
      "Dedicated project manager",
    ],
  },
];

const ecommercePlans = [
  {
    name: "E-Commerce Starter",
    tagline: "New sellers & test markets (quick launch)",
    price: "₹34,999",
    originalPrice: "₹39,999",
    discount: "-13%",
    features: [
      "Up to 50 SKU listings",
      "Fast 7 working day delivery",
      "Management dashboard",
      "Standard shared hosting",
      "Hand-crafted, 100% scratch coded",
      "Secure payments (gateway integration)",
      "Basic SEO setup",
      "Regular Customer support",
    ],
  },
  {
    name: "Growth Accelerator",
    tagline: "Rapidly growing brands & established catalogs",
    price: "₹49,999",
    originalPrice: "₹59,999",
    discount: "-17%",
    popular: true,
    features: [
      "Up to 150 SKU listings",
      "Fast 7 working day delivery",
      "Management dashboard",
      "Standard shared hosting",
      "Hand-crafted, 100% scratch coded",
      "Advanced product filters & search",
      "Order tracking & automated emails",
      "Performance optimization",
      "Priority Customer support",
    ],
  },
  {
    name: "Enterprise Powerhouse",
    tagline: "High-volume stores & complex product lines",
    price: "₹64,999",
    originalPrice: "₹79,999",
    discount: "-19%",
    features: [
      "Up to 250 SKU listings",
      "Fast 7 working day delivery",
      "Management dashboard",
      "Standard shared hosting",
      "Hand-crafted, 100% scratch coded",
      "Role-based admin",
      "Bulk import/export",
      "Scalable architecture",
      "Dedicated project manager",
    ],
  },
];

export default function BuiltByStaciaPage() {
  const [activeTab, setActiveTab] = useState<"marketing" | "ecommerce">("marketing");
  const plans = activeTab === "marketing" ? marketingPlans : ecommercePlans;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <span className="font-mono text-xs uppercase tracking-wider">← Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive flex items-center justify-center">
                  <div className="w-4 h-6 bg-background rounded-sm" />
                </div>
                <span className="font-bold text-xl">Built<sup className="text-xs">®</sup></span>
                <span className="text-muted-foreground text-sm">by Stacia</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                We Build <span className="text-destructive">Visually</span> Intelligent Websites
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-4">
                Ultra Fast 2-day Delivery. Premium UI/UX. Low-cost.
              </p>
              <p className="text-lg font-bold mb-8">
                Built. The Premium Experience
              </p>

              <a href="https://www.builtbystacia.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-destructive hover:bg-destructive/90">
                  Build Your Website
                  <ArrowRight size={18} />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground font-mono text-sm tracking-wider uppercase mb-16"
            >
              Scroll to explore our Unique Selling Propositions (USP)
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bento-card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive flex-shrink-0">
                      {usp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{usp.title}</h3>
                      <p className="text-destructive font-mono text-xs tracking-wider uppercase mb-3">{usp.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{usp.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Transparent <span className="text-destructive">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Choose the perfect plan for your project. No hidden fees, no surprises—just exceptional value.
              </p>

              {/* Tab Toggle */}
              <div className="inline-flex items-center gap-2 p-1 rounded-full bg-muted border border-border/60">
                <button
                  onClick={() => setActiveTab("marketing")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm transition-all ${
                    activeTab === "marketing" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Globe size={14} />
                  Marketing Websites
                </button>
                <button
                  onClick={() => setActiveTab("ecommerce")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm transition-all ${
                    activeTab === "ecommerce" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Star size={14} />
                  E-Commerce
                </button>
              </div>
            </motion.div>

            {/* Special Offer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto mb-12 p-4 rounded-2xl bg-destructive/10 border border-destructive/30 text-center"
            >
              <p className="text-lg">
                Special Offer: Annual Maintenance is <span className="text-2xl font-bold">Free</span>
                <span className="text-muted-foreground line-through ml-2">₹2,999</span>
                <span className="text-destructive ml-2">(*for the 1st Year!)</span>
              </p>
            </motion.div>

            {/* Pricing Grid */}
            <div className={`grid gap-6 ${plans.length === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`}>
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-6 rounded-2xl border ${
                    plan.popular ? "border-destructive/50 bg-destructive/5" : "border-border/60 bg-card"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-destructive text-primary-foreground text-sm font-medium">
                        <Star size={12} fill="currentColor" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold text-destructive">{plan.price}</span>
                    {plan.originalPrice && (
                      <>
                        <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-edifai/20 text-edifai">{plan.discount}</span>
                      </>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-edifai flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="https://www.builtbystacia.com" target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className={`w-full rounded-full ${plan.popular ? "bg-destructive hover:bg-destructive/90" : ""}`}
                    >
                      Let's Build Your Website
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 text-sm">
                  <span className="w-2 h-2 rounded-full bg-edifai animate-pulse" />
                  AVAILABLE NOW
                </span>
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                  PREMIUM LAUNCH-READY SYSTEMS
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Transform Your Presence
                </h2>
                <p className="text-muted-foreground">
                  Launch a high-performing, brand-true website in as little as{" "}
                  <span className="text-destructive underline">2-day Rapid Deployment</span>. 
                  Designed, engineered, and optimized to feel premium from day one.
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-destructive" />
                    Strategy, design & build aligned
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-destructive" />
                    High-touch launch support
                  </span>
                </div>
                <a href="https://www.builtbystacia.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full gap-2 bg-destructive hover:bg-destructive/90">
                    Build Your Digital Presence
                    <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 p-8 rounded-2xl border border-border/60 bg-card"
              >
                <h3 className="text-2xl font-bold">Get a Custom Quote</h3>
                <p className="text-muted-foreground">
                  Have a unique project in mind? Let's discuss your requirements.
                </p>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-destructive/20"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-destructive/20"
                  />
                  <textarea 
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-destructive/20 resize-none"
                  />
                  <a href="https://www.builtbystacia.com" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full rounded-full bg-destructive hover:bg-destructive/90">
                      Request Quote
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
