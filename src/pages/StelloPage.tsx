import { motion } from "framer-motion";
import { ArrowLeft, Server, Users, FileText, Shield, Database, BarChart3, CheckCircle, ArrowRight, Zap, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: <Shield size={24} />,
    title: "The Legal Backbone",
    description: "Forget the red tape. Stello handles entity formation, compliance filings, and tax structures automatically. Your business stays legal while you stay focused.",
  },
  {
    icon: <Users size={24} />,
    title: "Centralized CRM",
    description: "A unified view of every customer interaction. Track leads from the Pragati portal directly into your sales pipeline. No data migration needed.",
  },
  {
    icon: <FileText size={24} />,
    title: "The HR Engine",
    description: "Payroll, benefits, and team management in one click. Whether hiring via the Vencorp Job Portal or bringing your own team, onboarding takes minutes.",
  },
];

const integrations = [
  {
    title: "Syncs with GINE",
    description: "Financial records generated here are automatically formatted for investor due diligence on the GINE platform.",
    icon: <Globe size={16} />,
  },
  {
    title: "Syncs with Pragati",
    description: "Validation metrics feed directly into your pitch decks stored here.",
    icon: <BarChart3 size={16} />,
  },
  {
    title: "Syncs with Edifai",
    description: "Team skill gaps identified here trigger personalized learning paths.",
    icon: <Zap size={16} />,
  },
];

const modules = [
  { name: "Entity Formation", status: "Active", description: "Automated company registration" },
  { name: "Tax Compliance", status: "Active", description: "Real-time tax tracking" },
  { name: "Invoicing", status: "Active", description: "Professional invoice generation" },
  { name: "Payroll", status: "Active", description: "Automated salary processing" },
  { name: "CRM", status: "Active", description: "Customer relationship management" },
  { name: "HR Management", status: "Active", description: "Team & benefits administration" },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Companies Onboarded" },
  { value: "24/7", label: "Support Available" },
  { value: "15min", label: "Average Setup Time" },
];

export default function StelloPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-stello/10 rounded-full blur-3xl" />
          
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stello/30 bg-stello/5 mb-6">
                <Server size={14} className="text-stello" />
                <span className="font-mono text-xs text-stello tracking-wider uppercase">
                  STELLO // The Operator
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Run the company.<br />
                <span className="text-stello">Not the paperwork.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                The operating system for your startup's backend. Stello automates the administrative friction—from incorporation to invoicing—so you can focus entirely on the product.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-stello hover:bg-stello/90 text-primary-foreground group">
                  Access Dashboard
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-stello mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Everything you need to operate
              </h2>
              <p className="text-muted-foreground">
                From legal compliance to team management, Stello has you covered
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card group hover:border-stello/50 hover:shadow-glow-stello"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stello/10 text-stello mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Status */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  One Dashboard.<br />Six Modules.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Everything you need to run operations, all in one place.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modules.map((module, index) => (
                    <motion.div
                      key={module.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card hover:border-stello/50 transition-colors group"
                    >
                      <div>
                        <span className="text-sm font-medium block">{module.name}</span>
                        <span className="text-xs text-muted-foreground">{module.description}</span>
                      </div>
                      <span className="font-mono text-xs text-stello bg-stello/10 px-2 py-0.5 rounded">
                        {module.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Integrations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-6">
                  Zero Data Silos
                </h3>
                <div className="space-y-4">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={integration.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-5 rounded-xl border border-border/60 bg-card hover:border-stello/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-stello">{integration.icon}</div>
                        <span className="font-bold text-sm">{integration.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Security Badge */}
                <div className="mt-6 p-4 rounded-xl border border-stello/30 bg-stello/5">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-stello" />
                    <div>
                      <div className="font-medium text-sm">Enterprise-grade Security</div>
                      <div className="text-xs text-muted-foreground">SOC 2 Type II Compliant • End-to-end encryption</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-stello/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Ready to streamline your operations?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join hundreds of startups running on Stello
                </p>
                <Button size="lg" className="rounded-full px-8 gap-2 bg-stello hover:bg-stello/90 text-primary-foreground">
                  Get Started Free
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
