import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Dna, Zap, Network, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: <Dna size={24} />,
    title: "Diagnostic Learning",
    description: "We don't guess what you need to learn. We know. Based on your startup's \"Orange\" or \"Red\" scores in Pragati, Edifai constructs a syllabus to turn those weaknesses into strengths.",
  },
  {
    icon: <Zap size={24} />,
    title: "Just-In-Time Modules",
    description: "Don't learn \"Finance\" broadly. Learn \"Unit Economics for SaaS\" the night before you pitch. Content is micro-sized, actionable, and deployed at the moment of need.",
  },
  {
    icon: <Network size={24} />,
    title: "The Knowledge Graph",
    description: "Track your team's intellectual growth. See who is mastering which domain and identify where you need to hire external help (via Interllexia).",
  },
];

const categories = [
  { name: "Financial Modeling", modules: 12, progress: 75 },
  { name: "Market Analysis", modules: 8, progress: 60 },
  { name: "Product Strategy", modules: 15, progress: 40 },
  { name: "Legal & Compliance", modules: 6, progress: 90 },
  { name: "Sales & Marketing", modules: 10, progress: 25 },
  { name: "Technical Leadership", modules: 9, progress: 55 },
];

export default function EdifaiPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-edifai/10 rounded-full blur-3xl" />
          
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-edifai/30 bg-edifai/5 mb-6">
                <Sparkles size={14} className="text-edifai" />
                <span className="font-mono text-xs text-edifai tracking-wider uppercase">
                  EDIFAI // The Mentor
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Knowledge, exactly<br />
                <span className="text-edifai">when you need it.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Static courses are obsolete. Edifai uses AI to analyze your Pragati validation scores and generates a custom, adaptive curriculum to bridge your specific skill gaps.
              </p>

              <Button size="lg" className="rounded-full px-8 gap-2 bg-edifai hover:bg-edifai/90 text-primary-foreground">
                Generate Learning Path
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-edifai/10 text-edifai mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Categories */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Adaptive Curriculum
                </h2>
                <p className="text-muted-foreground">
                  Your learning path evolves as you do. Complete modules to update your Pragati score.
                </p>
              </div>

              <div className="space-y-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl border border-border/60 bg-card"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <BookOpen size={18} className="text-edifai" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {category.modules} modules
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-edifai"
                      />
                    </div>
                    <div className="flex justify-end mt-2">
                      <span className="font-mono text-xs text-edifai">{category.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Loop */}
        <section className="py-24 sm:py-32 bg-foreground text-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                The Feedback Loop
              </h2>
              <p className="text-background/70 mb-8">
                Learning translates to scoring.
              </p>
              <div className="p-8 rounded-xl border border-background/10 bg-background/5 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-edifai/20">
                    <TrendingUp size={20} className="text-edifai" />
                  </div>
                  <div>
                    <p className="font-bold">Input → Output</p>
                    <p className="text-sm text-background/70">Real-time score updates</p>
                  </div>
                </div>
                <p className="text-background/80">
                  You complete a module on "Market Sizing." Your Pragati project score updates automatically, 
                  moving you closer to the "Hall of Fame" (Green) status and funding opportunities.
                </p>
              </div>
              <Link to="/">
                <Button variant="outline" className="mt-8 rounded-full text-foreground border-background/20 hover:bg-background/10">
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
