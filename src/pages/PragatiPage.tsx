import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, BarChart3, CheckCircle, XCircle, AlertTriangle, Rocket, Building2, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const strategicQuadrants = [
  {
    name: "Core",
    position: "bottom-left",
    color: "bg-muted",
    textColor: "text-foreground",
    icon: <BarChart3 size={24} />,
    desc: "Gradual, continuous improvements on existing products and services.",
  },
  {
    name: "Architectural",
    position: "top-left", 
    color: "bg-muted",
    textColor: "text-foreground",
    icon: <Building2 size={24} />,
    desc: "A significant improvement on a product that aims to sustain the position in an existing market.",
  },
  {
    name: "Emerging",
    position: "bottom-right",
    color: "bg-stello/20",
    textColor: "text-stello",
    icon: <Lightbulb size={24} />,
    desc: "Technology or new business model that disrupts the existing market.",
  },
  {
    name: "Transformational",
    position: "top-right",
    color: "bg-interllexia/20",
    textColor: "text-interllexia",
    icon: <Rocket size={24} />,
    desc: "Technological breakthrough that transforms industries, often creates a new market.",
  },
];

const clusterPresets = [
  { name: "Impact-First", active: false },
  { name: "Scale-Up", active: false },
  { name: "Disruptor", active: false },
  { name: "Balanced", active: true },
  { name: "Manual ✦", active: false },
];

const weightCategories = [
  { name: "Core Idea & Innovation", abbr: "CI & I", weight: 20, color: "bg-pragati" },
  { name: "Market & Commercial Opportunity", abbr: "M & CO", weight: 25, color: "bg-pragati" },
  { name: "Execution & Operations", abbr: "E & O", weight: 15, color: "bg-pragati" },
  { name: "Business Model & Strategy", abbr: "BM & S", weight: 15, color: "bg-pragati" },
  { name: "Team & Organizational Health", abbr: "T & OH", weight: 10, color: "bg-pragati" },
  { name: "External Environment & Compliance", abbr: "EE & C", weight: 10, color: "bg-pragati" },
  { name: "Risk & Future Outlook", abbr: "R & FO", weight: 5, color: "bg-pragati" },
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
  const [activeCluster, setActiveCluster] = useState("Balanced");
  const [weights, setWeights] = useState(weightCategories);

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

              <div className="flex flex-wrap gap-4">
                <a href="https://pragati.thevencorp.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-pragati hover:bg-pragati/90">
                    Try Pragati
                    <ArrowRight size={18} />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

        {/* Strategic Quadrants */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                We intelligently categorise innovations to provide strategic direction, not just a score.
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Axis Labels */}
              <div className="relative">
                {/* Y-axis label */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    <span className="text-foreground font-bold">Market Impact</span>
                  </span>
                </div>
                <div className="absolute -left-4 top-0 text-xs text-muted-foreground">High Impact<br/>on Market</div>
                <div className="absolute -left-4 bottom-0 text-xs text-muted-foreground">Existing<br/>Market</div>

                {/* X-axis label */}
                <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 text-center">
                  <span className="font-mono text-xs text-foreground font-bold tracking-wider">Technology Novelty</span>
                </div>
                <div className="absolute bottom-[-40px] left-0 text-xs text-muted-foreground">Existing Technology</div>
                <div className="absolute bottom-[-40px] right-0 text-xs text-muted-foreground">New Technology</div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4 ml-8">
                  {/* Architectural - top left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl bg-muted border border-border/60"
                  >
                    <h3 className="text-xl font-bold mb-2 text-foreground">Architectural</h3>
                    <p className="text-sm text-muted-foreground">{strategicQuadrants[1].desc}</p>
                    <div className="mt-4 flex justify-end">
                      <Building2 size={32} className="text-muted-foreground/50" />
                    </div>
                  </motion.div>

                  {/* Transformational - top right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-2xl bg-interllexia/10 border border-interllexia/30"
                  >
                    <h3 className="text-xl font-bold mb-2 text-interllexia">Transformational</h3>
                    <p className="text-sm text-muted-foreground">{strategicQuadrants[3].desc}</p>
                    <div className="mt-4 flex justify-end">
                      <Rocket size={32} className="text-interllexia/50" />
                    </div>
                  </motion.div>

                  {/* Core - bottom left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl bg-muted border border-border/60"
                  >
                    <h3 className="text-xl font-bold mb-2 text-foreground">Core</h3>
                    <p className="text-sm text-muted-foreground">{strategicQuadrants[0].desc}</p>
                    <div className="mt-4 flex justify-end">
                      <BarChart3 size={32} className="text-muted-foreground/50" />
                    </div>
                  </motion.div>

                  {/* Emerging - bottom right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-2xl bg-stello/10 border border-stello/30"
                  >
                    <h3 className="text-xl font-bold mb-2 text-stello">Emerging</h3>
                    <p className="text-sm text-muted-foreground">{strategicQuadrants[2].desc}</p>
                    <div className="mt-4 flex justify-end">
                      <Lightbulb size={32} className="text-stello/50" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cluster Toggle & Weights */}
        <section className="py-24 sm:py-32 bg-foreground text-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Customizable Scoring Weights
              </h2>
              <p className="text-background/70 max-w-lg mx-auto">
                Choose a preset cluster or manually adjust weights to match your evaluation priorities.
              </p>
            </motion.div>

            {/* Cluster Presets */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {clusterPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setActiveCluster(preset.name)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                    activeCluster === preset.name
                      ? "bg-pragati text-background"
                      : "bg-background/10 text-background/70 hover:bg-background/20"
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Restored Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-pragati/20 border border-pragati/30 flex items-center gap-3"
            >
              <CheckCircle size={20} className="text-pragati" />
              <div>
                <p className="font-medium">Weights Restored</p>
                <p className="text-sm text-background/70">Your previous cluster weights (<span className="text-pragati font-bold">{activeCluster}</span>) have been restored.</p>
              </div>
            </motion.div>

            {/* Weight Sliders */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                {weights.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 rounded-full bg-background/20 relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${category.weight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className={`absolute h-full rounded-full ${category.color}`}
                        />
                        <div 
                          className="absolute w-4 h-4 rounded-full bg-background border-2 border-pragati -top-1"
                          style={{ left: `calc(${category.weight}% - 8px)` }}
                        />
                      </div>
                      <div className="w-12 h-10 rounded-lg bg-background/10 flex items-center justify-center font-mono text-sm">
                        {category.weight}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Total */}
                <div className="mt-6 p-4 rounded-xl bg-pragati/20 border border-pragati/30 flex items-center justify-between">
                  <span className="font-bold">Total Weight:</span>
                  <span className="text-2xl font-bold text-edifai">100%</span>
                </div>
              </div>

              {/* Radar Chart Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl bg-background/5 border border-background/10 p-8 flex items-center justify-center"
              >
                {/* Simplified radar visualization */}
                <div className="relative w-full h-full">
                  {/* Concentric circles */}
                  {[100, 75, 50, 25].map((size) => (
                    <div
                      key={size}
                      className="absolute rounded-full border border-background/10"
                      style={{
                        width: `${size}%`,
                        height: `${size}%`,
                        top: `${(100 - size) / 2}%`,
                        left: `${(100 - size) / 2}%`,
                      }}
                    />
                  ))}
                  
                  {/* Weight labels around the radar */}
                  {weights.map((category, index) => {
                    const angle = (index * 360) / weights.length - 90;
                    const radian = (angle * Math.PI) / 180;
                    const radius = 45;
                    const x = 50 + radius * Math.cos(radian);
                    const y = 50 + radius * Math.sin(radian);
                    
                    return (
                      <div
                        key={category.abbr}
                        className="absolute text-xs font-mono"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <span className="text-pragati font-bold">{category.weight}%</span>
                        <br />
                        <span className="text-background/50">{category.abbr}</span>
                      </div>
                    );
                  })}

                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-pragati" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Score Interpretation */}
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

            <div className="max-w-2xl mx-auto space-y-4">
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
