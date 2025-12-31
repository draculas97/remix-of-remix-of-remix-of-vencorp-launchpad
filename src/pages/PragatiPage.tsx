import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, BarChart3, CheckCircle, XCircle, AlertTriangle, Rocket, Building2, Lightbulb, ArrowRight, GraduationCap, Building, Users, Star, TrendingUp } from "lucide-react";
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
    color: "text-edifai",
    bg: "bg-edifai/10",
  },
];

const strategicQuadrants = [
  {
    name: "Core",
    position: "bottom-left",
    desc: "Gradual, continuous improvements on existing products and services.",
  },
  {
    name: "Architectural",
    position: "top-left", 
    desc: "A significant improvement on a product that aims to sustain the position in an existing market.",
  },
  {
    name: "Emerging",
    position: "bottom-right",
    desc: "Technology or new business model that disrupts the existing market.",
  },
  {
    name: "Transformational",
    position: "top-right",
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

const ecosystemFeatures = [
  {
    icon: <Brain size={24} />,
    title: "AI-Powered Validation",
    description: "Receive in-depth, structured feedback on your ideas in minutes, not weeks. Our AI analyzes your concept against dozens of key viability parameters.",
  },
  {
    icon: <Target size={24} />,
    title: "Guided Innovation Roadmap",
    description: "Don't just get a score, get a plan. PragatiAI provides a clear, step-by-step roadmap to take your idea from TRL 1 to market-ready.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Role-Based Dashboards",
    description: "Track performance, identify trends, and make data-driven decisions with dashboards tailored to every role, from innovator to administrator.",
  },
];

const whoWeServe = [
  {
    id: "institutions",
    label: "Institutions",
    icon: <GraduationCap size={20} />,
    title: "Institutions",
    description: "For colleges and universities, Pragati helps manage Technology Transfer Cells (TTCs) and nurture student and faculty ideas within your innovation ecosystem.",
  },
  {
    id: "organisations",
    label: "Organisations & GCCs",
    icon: <Building size={20} />,
    title: "Organisations & GCCs",
    description: "For corporations and Global Capability Centers, Pragati streamlines intrapreneurship programs and evaluates employee-driven innovation at scale.",
  },
  {
    id: "innovators",
    label: "Innovators",
    icon: <Users size={20} />,
    title: "Innovators",
    description: "For individual innovators and startups, Pragati provides affordable access to enterprise-grade validation tools previously reserved for funded ventures.",
  },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student Innovator",
    content: "PragatiAI transformed my raw concept into a fundable project. The AI feedback was like having a team of expert consultants 24/7.",
    avatar: "A",
  },
  {
    name: "Dr. Priya Desai",
    role: "TTC Coordinator",
    content: "As a mentor, this platform is a game-changer. I can track my students' progress, provide targeted feedback, and see real results.",
    avatar: "P",
  },
  {
    name: "R. Madhavan",
    role: "College Principal",
    content: "We've seen a 300% increase in quality idea submissions since adopting Pragati. It has revolutionized our college's innovation ecosystem.",
    avatar: "R",
  },
];

const trustedBy = [
  "Tech Innovators Inc.", "Future Labs", "EduVentures", "AgriGrowth Corp",
  "HealthForward", "FinSolutions", "CityZen", "GreenEnergy Co."
];

export default function PragatiPage() {
  const [activeCluster, setActiveCluster] = useState("Balanced");
  const [weights] = useState(weightCategories);
  const [activeTab, setActiveTab] = useState("institutions");

  const activeServe = whoWeServe.find(s => s.id === activeTab);

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
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pragati/30 bg-pragati/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-pragati animate-pulse" />
                <span className="font-mono text-xs text-pragati tracking-wider uppercase">
                  PRAGATI // The Validator
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Pragati helps you<br />
                <span className="text-pragati">Check for novelty.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-4">
                From concept to market-ready. Just prompt, no code.
              </p>

              {/* Demo Input */}
              <div className="max-w-xl mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/60 mb-3">
                  <span className="px-3 py-1 rounded-full bg-edifai/10 text-edifai text-xs font-medium">Balanced</span>
                </div>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Generate a business plan for a fintech app..."
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-card text-sm focus:outline-none focus:ring-2 focus:ring-pragati/20"
                  />
                </div>
              </div>

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

        {/* The Pragati Ecosystem */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                The Pragati Ecosystem
              </h2>
              <p className="text-muted-foreground">
                Comprehensive tools designed to transform your innovative ideas into market-ready solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ecosystemFeatures.map((feature, index) => (
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

        {/* Who We Serve */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Who We Serve
              </h2>
              <p className="text-muted-foreground">
                Pragati is tailored for every stage of the innovation journey.
              </p>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-8">
              {whoWeServe.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm transition-all ${
                    activeTab === item.id
                      ? "bg-pragati text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto p-8 rounded-2xl border border-border/60 bg-card"
            >
              <h3 className="text-2xl font-bold mb-4">{activeServe?.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{activeServe?.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Strategic Quadrants */}
        <section className="py-24 sm:py-32 bg-muted/30">
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
                <div className="absolute -left-4 top-0 text-xs text-muted-foreground hidden md:block">High Impact<br/>on Market</div>
                <div className="absolute -left-4 bottom-0 text-xs text-muted-foreground hidden md:block">Existing<br/>Market</div>
                <div className="absolute bottom-[-40px] left-0 text-xs text-muted-foreground hidden md:block">Existing Technology</div>
                <div className="absolute bottom-[-40px] right-0 text-xs text-muted-foreground hidden md:block">New Technology</div>

                <div className="grid grid-cols-2 gap-4 md:ml-8 mb-12">
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
                
                <div className="mt-6 p-4 rounded-xl bg-pragati/20 border border-pragati/30 flex items-center justify-between">
                  <span className="font-bold">Total Weight:</span>
                  <span className="text-2xl font-bold text-edifai">100%</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl bg-background/5 border border-background/10 p-8 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
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
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pragati">78</div>
                      <div className="text-sm text-background/50 font-mono">SCORE</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Psychometric Analysis */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-xs text-pragati tracking-wider uppercase">Psychometric Analysis</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
                  Discover Your Innovator Profile
                </h2>
                <p className="text-muted-foreground mb-8">
                  Take our quick psychometric assessment to discover your unique strengths, work style, and potential.
                </p>
                <a href="https://pragati.thevencorp.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-pragati hover:bg-pragati/90">
                    Start The Assessment
                    <ArrowRight size={18} />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl bg-gradient-to-br from-pragati/10 to-stello/10 border border-border/60 flex items-center justify-center"
              >
                <div className="text-center">
                  <Brain size={64} className="text-pragati mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Interactive Assessment Preview</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <p className="text-center font-mono text-xs text-muted-foreground tracking-wider uppercase mb-8">
              Trusted By Leading Institutions
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {trustedBy.map((name) => (
                <span key={name} className="text-muted-foreground/60 font-medium hover:text-foreground transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Trusted by the Next Generation of Leaders
              </h2>
              <p className="text-muted-foreground">
                See how Pragati is transforming innovation across colleges and organizations worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pragati/10 text-pragati flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-gine fill-gine" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Score Ranges */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                What Your Score Means
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {scoreRanges.map((range, index) => (
                <motion.div
                  key={range.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bento-card ${range.bg}`}
                >
                  <div className={`mb-4 ${range.color}`}>
                    {range.icon}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mb-1">{range.range}</div>
                  <h3 className={`text-lg font-bold mb-2 ${range.color}`}>{range.label}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{range.diagnosis}</p>
                  <p className="text-xs text-muted-foreground">{range.action}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's connect and launch the next big thing together.
              </p>
              <a href="https://pragati.thevencorp.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-pragati hover:bg-pragati/90">
                  Get Started Now
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/60">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2 text-pragati">Pragati</h3>
                <p className="text-xs text-muted-foreground mb-2">A Vencorp Product</p>
                <p className="text-sm text-muted-foreground">
                  Transforming academic innovation into market reality through AI-powered validation and guidance.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Vencorp</a></li>
                  <li><a href="https://staciacorp.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Stacia Corp</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-border/60 text-center text-sm text-muted-foreground">
              © 2025 Pragati by Vencorp a Unit of Stacia Corp
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
