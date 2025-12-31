import { motion } from "framer-motion";
import { ArrowLeft, Book, Code, Zap, Users, Settings, ArrowRight, Search, FileText, Video, Terminal, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const sections = [
  {
    icon: <Zap size={24} />,
    title: "Getting Started",
    desc: "Quick start guides to get up and running with Vencorp.",
    links: ["Introduction", "Quick Start", "Core Concepts", "First Validation"],
    color: "pragati",
  },
  {
    icon: <Code size={24} />,
    title: "API Reference",
    desc: "Complete API documentation for developers.",
    links: ["Authentication", "Pragati API", "Stello API", "Webhooks"],
    color: "stello",
  },
  {
    icon: <Book size={24} />,
    title: "Guides",
    desc: "In-depth tutorials and best practices.",
    links: ["Validation Best Practices", "Integrating with CI/CD", "Custom Scoring Models", "Team Management"],
    color: "edifai",
  },
  {
    icon: <Users size={24} />,
    title: "Ecosystem",
    desc: "Learn how Vencorp modules work together.",
    links: ["Pragati → Stello Flow", "Edifai Learning Paths", "Interllexia Matching", "GINE Marketplace"],
    color: "interllexia",
  },
  {
    icon: <Settings size={24} />,
    title: "Configuration",
    desc: "Customize Vencorp to your needs.",
    links: ["SSO Setup", "Custom Domains", "White-labeling", "Enterprise Settings"],
    color: "gine",
  },
  {
    icon: <Layers size={24} />,
    title: "Integrations",
    desc: "Connect Vencorp with your existing tools.",
    links: ["Slack Integration", "GitHub Sync", "Zapier Workflows", "Custom Webhooks"],
    color: "jobportal",
  },
];

const popularArticles = [
  { title: "How to interpret your Pragati score", reads: "12.5k", time: "5 min" },
  { title: "Setting up your first Stello workspace", reads: "8.2k", time: "10 min" },
  { title: "Connecting Vencorp to your existing tools", reads: "6.8k", time: "8 min" },
  { title: "Understanding the 110-point validation model", reads: "5.4k", time: "12 min" },
  { title: "Migrating from legacy startup tools", reads: "4.1k", time: "15 min" },
];

const resources = [
  { icon: <Video size={20} />, title: "Video Tutorials", desc: "Step-by-step video guides", count: "24 videos" },
  { icon: <Terminal size={20} />, title: "Code Examples", desc: "Ready-to-use code snippets", count: "150+ examples" },
  { icon: <FileText size={20} />, title: "Templates", desc: "Pre-built templates & configs", count: "30+ templates" },
];

export default function DocumentationPage() {
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
                Documentation
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Learn Vencorp
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Everything you need to build with the Vencorp ecosystem. Comprehensive guides, API references, and tutorials.
              </p>
              
              <div className="relative max-w-xl">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search documentation..." 
                  className="pl-12 h-14 text-base rounded-full border-border/60 bg-card"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Resources */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-stello/50 transition-colors cursor-pointer group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stello/10 text-stello group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{resource.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{resource.desc}</span>
                      <span>•</span>
                      <span className="text-stello">{resource.count}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold tracking-tight">Browse by Topic</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bento-card hover:border-${section.color}/50 group`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${section.color}/10 text-${section.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{section.desc}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className={`text-sm text-muted-foreground hover:text-${section.color} transition-colors inline-flex items-center gap-1 group/link`}>
                          <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
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
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Popular Articles</h2>
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight size={14} />
              </Button>
            </div>
            <div className="max-w-3xl space-y-4">
              {popularArticles.map((article, index) => (
                <motion.a
                  key={article.title}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-5 rounded-xl border border-border/60 bg-card hover:border-stello/50 transition-colors group"
                >
                  <div>
                    <span className="font-medium group-hover:text-stello transition-colors">{article.title}</span>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span>{article.reads} reads</span>
                      <span>•</span>
                      <span>{article.time} read</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-stello group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground mb-6">Our support team is here to help.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/support">
                  <Button className="rounded-full gap-2">
                    Contact Support
                    <ArrowRight size={14} />
                  </Button>
                </Link>
                <Link to="/api-reference">
                  <Button variant="outline" className="rounded-full gap-2">
                    API Reference
                    <Code size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
