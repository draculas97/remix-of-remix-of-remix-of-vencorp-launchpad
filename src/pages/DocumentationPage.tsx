import { motion } from "framer-motion";
import { ArrowLeft, Book, Code, Zap, Users, Settings, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: <Zap size={24} />,
    title: "Getting Started",
    desc: "Quick start guides to get up and running with Vencorp.",
    links: ["Introduction", "Quick Start", "Core Concepts", "First Validation"],
  },
  {
    icon: <Code size={24} />,
    title: "API Reference",
    desc: "Complete API documentation for developers.",
    links: ["Authentication", "Pragati API", "Stello API", "Webhooks"],
  },
  {
    icon: <Book size={24} />,
    title: "Guides",
    desc: "In-depth tutorials and best practices.",
    links: ["Validation Best Practices", "Integrating with CI/CD", "Custom Scoring Models", "Team Management"],
  },
  {
    icon: <Users size={24} />,
    title: "Ecosystem",
    desc: "Learn how Vencorp modules work together.",
    links: ["Pragati → Stello Flow", "Edifai Learning Paths", "Interllexia Matching", "GINE Marketplace"],
  },
  {
    icon: <Settings size={24} />,
    title: "Configuration",
    desc: "Customize Vencorp to your needs.",
    links: ["SSO Setup", "Custom Domains", "White-labeling", "Enterprise Settings"],
  },
];

const popularArticles = [
  "How to interpret your Pragati score",
  "Setting up your first Stello workspace",
  "Connecting Vencorp to your existing tools",
  "Understanding the 110-point validation model",
  "Migrating from legacy startup tools",
];

export default function DocumentationPage() {
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
                Documentation
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Learn Vencorp
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Everything you need to build with the Vencorp ecosystem.
              </p>
              
              <div className="relative max-w-xl">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search documentation..." 
                  className="pl-12 h-14 text-base rounded-full border-border/60 bg-card"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stello/10 text-stello mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{section.desc}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Popular Articles</h2>
            <div className="max-w-2xl space-y-4">
              {popularArticles.map((article, index) => (
                <motion.a
                  key={article}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card hover:border-stello/50 transition-colors group"
                >
                  <span className="font-medium group-hover:text-stello transition-colors">{article}</span>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-stello group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
