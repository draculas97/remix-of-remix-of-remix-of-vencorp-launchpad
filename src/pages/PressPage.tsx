import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pressReleases = [
  {
    date: "Dec 15, 2024",
    title: "Vencorp Raises $50M Series B to Expand Global Startup Operating System",
    excerpt: "Investment led by Sequoia India will accelerate product development and international expansion.",
  },
  {
    date: "Oct 3, 2024",
    title: "Vencorp Launches Tezzaract: 3D Marketplace for Product Innovation",
    excerpt: "New platform brings 5,000+ 3D products to founders building physical products.",
  },
  {
    date: "Jul 22, 2024",
    title: "50,000 Ideas Validated: Vencorp's Pragati Hits Major Milestone",
    excerpt: "AI-powered validation engine has helped founders across 40 countries make data-driven decisions.",
  },
  {
    date: "Mar 10, 2024",
    title: "Vencorp Partners with 100 Universities for Campus Innovation Program",
    excerpt: "Initiative will bring startup tools to 500,000 students across India.",
  },
];

const inTheNews = [
  { publication: "TechCrunch", title: "How Vencorp is Using AI to Kill Bad Startup Ideas", date: "Nov 2024" },
  { publication: "Forbes India", title: "30 Under 30: Vencorp Founders on the Future of Work", date: "Oct 2024" },
  { publication: "YourStory", title: "Inside Vencorp's Plan to Build the AWS for Startups", date: "Sep 2024" },
  { publication: "Economic Times", title: "Vencorp Valued at $200M After Series B", date: "Dec 2024" },
];

export default function PressPage() {
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
                Press & Media
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Newsroom
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                The latest news, announcements, and coverage about Vencorp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-border/60 bg-card">
              <div>
                <h3 className="font-bold text-lg">Press Kit</h3>
                <p className="text-sm text-muted-foreground">Logos, brand guidelines, and high-res images.</p>
              </div>
              <Button variant="outline" className="rounded-full gap-2">
                <Download size={16} />
                Download Press Kit
              </Button>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card group cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={14} />
                    {release.date}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-stello transition-colors mb-2">{release.title}</h3>
                  <p className="text-muted-foreground">{release.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* In the News */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12">In the News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inTheNews.map((article, index) => (
                <motion.a
                  key={article.title}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card group flex items-center justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">{article.publication} • {article.date}</span>
                    <h3 className="font-bold mt-1 group-hover:text-stello transition-colors">{article.title}</h3>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-stello transition-colors flex-shrink-0 ml-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Media Inquiries</h2>
              <p className="text-muted-foreground mb-6">For press inquiries, interview requests, or media partnerships:</p>
              <a href="mailto:press@vencorp.io" className="text-stello font-medium hover:underline inline-flex items-center gap-2">
                press@vencorp.io
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
