import { motion } from "framer-motion";
import { ArrowLeft, Globe, Shield, FileCheck, Folder, TrendingUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: <Shield size={24} />,
    title: "The \"Green-Lit\" Guarantee",
    description: "Investors don't have time for due diligence on raw ideas. GINE only lists startups that have scored 85+ on the Pragati Portal and completed the Stacia Corp prototyping phase. We sell certainty, not potential.",
  },
  {
    icon: <Globe size={24} />,
    title: "IP Licensing Exchange",
    description: "Not every startup needs to IPO. Some technologies are better licensed to giants. GINE allows corporations to \"rent\" or \"buy\" your innovation's IP rights directly, providing immediate liquidity to founders.",
  },
  {
    icon: <Folder size={24} />,
    title: "The Data Room",
    description: "Automated deal flow. Your Stello financial records, your Pragati validation scores, and your Stacia prototype specs are auto-packaged into a standardized \"Deal Memo\" for investors.",
  },
];

const listings = [
  {
    name: "CleanTech AI",
    sector: "Energy",
    score: 94,
    status: "Active",
  },
  {
    name: "MedFlow Systems",
    sector: "Healthcare",
    score: 91,
    status: "In DD",
  },
  {
    name: "AgriData Pro",
    sector: "Agriculture",
    score: 88,
    status: "Active",
  },
  {
    name: "FinSecure",
    sector: "FinTech",
    score: 96,
    status: "Acquired",
  },
];

export default function GinePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-foreground text-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero - Dark Mode */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, hsl(51 100% 50% / 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gine/10 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-8">
              <ArrowLeft size={16} />
              <span className="font-mono text-xs uppercase tracking-wider">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gine/30 bg-gine/10 mb-6">
                <Globe size={14} className="text-gine" />
                <span className="font-mono text-xs text-gine tracking-wider uppercase">
                  GINE // The Market
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Innovation is an<br />
                <span className="text-gine">Asset Class.</span>
              </h1>

              <p className="text-xl text-background/70 max-w-2xl mb-8">
                The world's exclusive marketplace for validated IP. We connect "Green-lit" Vencorp startups directly with Global Capability Centers (GCCs) and investors for licensing, acquisition, or strategic partnership.
              </p>

              <div className="flex items-center gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-gine hover:bg-gine/90 text-foreground">
                  View Deal Flow
                </Button>
                <div className="flex items-center gap-2 text-background/50">
                  <Lock size={14} />
                  <span className="font-mono text-xs">Restricted Access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={ref} className="py-24 sm:py-32 bg-background/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-background/10 bg-background/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gine/10 text-gine mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-background/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Listings - Terminal Style */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Live Listings
                  </h2>
                  <p className="text-background/60 text-sm">
                    Hall of Fame startups available for investment
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gine animate-pulse" />
                  <span className="font-mono text-xs text-gine">LIVE</span>
                </div>
              </div>

              {/* Terminal-style table */}
              <div className="rounded-xl border border-background/10 bg-background/5 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 p-4 border-b border-background/10 font-mono text-xs text-background/50 uppercase tracking-wider">
                  <span>Company</span>
                  <span>Sector</span>
                  <span>Score</span>
                  <span>Status</span>
                </div>
                {/* Rows */}
                {listings.map((listing, index) => (
                  <motion.div
                    key={listing.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-4 gap-4 p-4 border-b border-background/5 hover:bg-background/5 transition-colors cursor-pointer"
                  >
                    <span className="font-medium">{listing.name}</span>
                    <span className="text-background/70">{listing.sector}</span>
                    <span className="font-mono text-gine">{listing.score}/100</span>
                    <span className={`font-mono text-xs ${
                      listing.status === "Acquired" ? "text-pragati" :
                      listing.status === "In DD" ? "text-interllexia" :
                      "text-stello"
                    }`}>
                      {listing.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exit Strategy */}
        <section className="py-24 sm:py-32 bg-background text-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                The Exit Strategy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 rounded-xl border border-border/60 bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={18} className="text-pragati" />
                    <span className="font-mono text-xs uppercase tracking-wider">Powered by Pragati</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The moment a startup hits the "Hall of Fame" score, it becomes visible on the GINE ticker.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-border/60 bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <FileCheck size={18} className="text-gine" />
                    <span className="font-mono text-xs uppercase tracking-wider">Powered by Stacia</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Corporate buyers can view the 3D CAD models and "Digital Twin" data of your product directly within the GINE interface.
                  </p>
                </div>
              </div>
              <Link to="/">
                <Button variant="outline" className="mt-8 rounded-full">
                  View the Full Ecosystem
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
