import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, BarChart3, Layers, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import { useRef } from "react";
import { useInView } from "framer-motion";

const scoreRanges = [
  {
    range: "0 – 50",
    label: "Graveyard",
    icon: <XCircle size={20} />,
    diagnosis: "Critical flaws detected.",
    action: "Fundamental rethink required.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    range: "50 – 85",
    label: "Workspace",
    icon: <AlertTriangle size={20} />,
    diagnosis: "Potential exists, but gaps remain.",
    action: "Refine using Edifai learning modules.",
    color: "text-interllexia",
    bg: "bg-interllexia/10",
  },
  {
    range: "85 – 100",
    label: "Hall of Fame",
    icon: <CheckCircle size={20} />,
    diagnosis: "Market Ready.",
    action: "Greenlit for Stacia Corp Prototyping.",
    color: "text-pragati",
    bg: "bg-pragati/10",
  },
];

const quadrants = [
  { name: "Core", desc: "Optimizing existing markets." },
  { name: "Architectural", desc: "New tech in existing markets." },
  { name: "Transformational", desc: "New tech creating new markets." },
  { name: "Emerging", desc: "High risk, high reward." },
];

const features = [
  {
    icon: <Brain size={24} />,
    title: "The Deep Scan",
    description: "Your pitch is analyzed by our proprietary AI engine. It scans for technical feasibility, market saturation, and financial sustainability using a dataset of over 50,000 successful (and failed) startups.",
  },
  {
    icon: <Target size={24} />,
    title: "The 110-Point Protocol",
    description: "We don't just check for \"good ideas.\" We test for structural integrity. Is the TAM real? Is the moat defensible? Is the unit economics positive?",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "The Verdict",
    description: "No bias. No \"gut feelings.\" Just raw, data-backed scoring. You get a definitive \"Go\" or \"No-Go\" based purely on probability of success.",
  },
];

export default function PragatiPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pragati/10 rounded-full blur-3xl" />
          
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pragati/30 bg-pragati/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-pragati animate-pulse-dot" />
                <span className="font-mono text-xs text-pragati tracking-wider uppercase">
                  PRAGATI // The Validator
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Eliminate the<br />
                <span className="text-pragati">Guesswork.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                The world's first AI-powered innovation gateway. We analyze your raw idea against 110 critical parameters to predict market viability before you write a single line of code.
              </p>

              <Button size="lg" className="rounded-full px-8 gap-2 bg-pragati hover:bg-pragati/90">
                Initiate Validation
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pragati/10 text-pragati mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Score Display */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                The Pragati Standard
              </h2>
              <p className="text-muted-foreground">
                Your score determines your path through the ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Score Ranges */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-6">
                  Score Interpretation
                </h3>
                {scoreRanges.map((range, index) => (
                  <motion.div
                    key={range.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-xl border border-border/60 ${range.bg}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={range.color}>{range.icon}</div>
                      <span className="font-bold">{range.range}</span>
                      <span className={`font-mono text-xs ${range.color}`}>({range.label})</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Diagnosis:</strong> {range.diagnosis}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Action:</strong> {range.action}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quadrants */}
              <div>
                <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-6">
                  Strategic Quadrants
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {quadrants.map((quadrant, index) => (
                    <motion.div
                      key={quadrant.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bento-card text-center"
                    >
                      <Layers size={20} className="text-pragati mx-auto mb-3" />
                      <h4 className="font-bold mb-1">{quadrant.name}</h4>
                      <p className="text-xs text-muted-foreground">{quadrant.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Bridge */}
        <section className="py-24 sm:py-32 bg-foreground text-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                What happens next?
              </h2>
              <p className="text-background/70 mb-8">
                Validation is just the beginning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 rounded-xl border border-background/10 bg-background/5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle size={18} className="text-pragati" />
                    <span className="font-mono text-xs uppercase tracking-wider">If you score Green</span>
                  </div>
                  <p className="text-sm text-background/70">
                    Your data automatically syncs to Stello to set up your company entity.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-background/10 bg-background/5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={18} className="text-interllexia" />
                    <span className="font-mono text-xs uppercase tracking-wider">If you score Orange</span>
                  </div>
                  <p className="text-sm text-background/70">
                    Your weak points are sent to Edifai to generate a custom learning path for you.
                  </p>
                </div>
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
