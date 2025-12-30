import { motion } from "framer-motion";
import { ArrowLeft, Server, Users, FileText, Shield, Database, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  },
  {
    title: "Syncs with Pragati",
    description: "Validation metrics feed directly into your pitch decks stored here.",
  },
  {
    title: "Syncs with Edifai",
    description: "Team skill gaps identified here trigger personalized learning paths.",
  },
];

const modules = [
  { name: "Entity Formation", status: "Active" },
  { name: "Tax Compliance", status: "Active" },
  { name: "Invoicing", status: "Active" },
  { name: "Payroll", status: "Active" },
  { name: "CRM", status: "Active" },
  { name: "HR Management", status: "Active" },
];

export default function StelloPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-stello/10 rounded-full blur-3xl" />
          
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

              <Button size="lg" className="rounded-full px-8 gap-2 bg-stello hover:bg-stello/90 text-primary-foreground">
                Access Dashboard
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={ref} className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stello/10 text-stello mb-4">
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
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  One Dashboard.<br />Six Modules.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Everything you need to run operations, all in one place.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {modules.map((module, index) => (
                    <motion.div
                      key={module.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 rounded-lg border border-border/60 bg-card"
                    >
                      <span className="text-sm font-medium">{module.name}</span>
                      <span className="font-mono text-xs text-stello bg-stello/10 px-2 py-0.5 rounded">
                        {module.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
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
                      className="p-4 rounded-xl border border-border/60 bg-card"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Database size={16} className="text-stello" />
                        <span className="font-bold text-sm">{integration.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
