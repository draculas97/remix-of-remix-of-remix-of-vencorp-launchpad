import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, BarChart3, CheckCircle, XCircle, AlertTriangle, Rocket, Building2, Lightbulb, ArrowRight, GraduationCap, Building, Users, Star } from "lucide-react";
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
  { name: "Core", desc: "Gradual, continuous improvements on existing products and services." },
  { name: "Architectural", desc: "A significant improvement on a product that aims to sustain the position in an existing market." },
  { name: "Emerging", desc: "Technology or new business model that disrupts the existing market." },
  { name: "Transformational", desc: "Technological breakthrough that transforms industries, often creates a new market." },
];

const clusterPresets = [
  { name: "Impact-First" },
  { name: "Scale-Up" },
  { name: "Disruptor" },
  { name: "Balanced" },
  { name: "Manual ✦" },
];

const weightCategories = [
  { name: "Core Idea & Innovation", weight: 20, color: "bg-pragati" },
  { name: "Market & Commercial Opportunity", weight: 25, color: "bg-pragati" },
  { name: "Execution & Operations", weight: 15, color: "bg-pragati" },
  { name: "Business Model & Strategy", weight: 15, color: "bg-pragati" },
  { name: "Team & Organizational Health", weight: 10, color: "bg-pragati" },
  { name: "External Environment & Compliance", weight: 10, color: "bg-pragati" },
  { name: "Risk & Future Outlook", weight: 5, color: "bg-pragati" },
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
    icon: <GraduationCap size={18} />,
    title: "Institutions",
    description: "For colleges and universities, Pragati helps manage Technology Transfer Cells (TTCs) and nurture student and faculty ideas within your innovation ecosystem.",
    features: ["TTC Management", "Student Innovation Tracking", "Faculty Research Support", "Grant Application Assistance"],
  },
  {
    id: "organisations",
    label: "Organisations & GCCs",
    icon: <Building size={18} />,
    title: "Organisations & GCCs",
    description: "For corporations and Global Capability Centers, Pragati streamlines intrapreneurship programs and evaluates employee-driven innovation at scale.",
    features: ["Intrapreneurship Programs", "Employee Innovation Tracking", "R&D Portfolio Management", "Innovation KPI Dashboards"],
  },
  {
    id: "innovators",
    label: "Innovators",
    icon: <Users size={18} />,
    title: "Innovators",
    description: "For individual innovators and startups, Pragati provides affordable access to enterprise-grade validation tools previously reserved for funded ventures.",
    features: ["Idea Validation", "Market Fit Analysis", "Investor-Ready Reports", "Mentorship Connections"],
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

const trustedBy = ["Tech Innovators Inc.", "Future Labs", "EduVentures", "AgriGrowth Corp", "HealthForward", "FinSolutions", "CityZen", "GreenEnergy Co."];

export default function PragatiPage() {
  const [activeCluster, setActiveCluster] = useState("Balanced");
  const [weights] = useState(weightCategories);
  const [activeTab, setActiveTab] = useState("institutions");

  const activeServe = whoWeServe.find((s) => s.id === activeTab);

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

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pragati/30 bg-pragati/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-pragati animate-pulse" />
                <span className="font-mono text-xs text-pragati tracking-wider uppercase">PRAGATI // The Validator</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Pragati helps you
                <br />
                <span className="text-pragati">Check for novelty.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">From concept to market-ready. Just prompt, no code.</p>

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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">The Pragati Ecosystem</h2>
              <p className="text-muted-foreground">Comprehensive tools designed to transform your innovative ideas into market-ready solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ecosystemFeatures.map((feature, index) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bento-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pragati/10 text-pragati mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve - Enhanced */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Who We Serve</h2>
              <p className="text-muted-foreground">Pragati is tailored for every stage of the innovation journey.</p>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {whoWeServe.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-sm transition-all ${activeTab === item.id ? "bg-pragati text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Content Card */}
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl border border-border/60 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pragati/10 text-pragati">{activeServe?.icon}</div>
                  <h3 className="text-2xl font-bold">{activeServe?.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{activeServe?.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {activeServe?.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-pragati flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Quadrants */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Strategic Innovation Categories</h2>
              <p className="text-muted-foreground">We intelligently categorise innovations to provide strategic direction, not just a score.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-muted border border-border/60">
                <h3 className="text-xl font-bold mb-2">Architectural</h3>
                <p className="text-sm text-muted-foreground">{strategicQuadrants[1].desc}</p>
                <Building2 size={32} className="text-muted-foreground/30 mt-4" />
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-interllexia/10 border border-interllexia/30">
                <h3 className="text-xl font-bold mb-2 text-interllexia">Transformational</h3>
                <p className="text-sm text-muted-foreground">{strategicQuadrants[3].desc}</p>
                <Rocket size={32} className="text-interllexia/30 mt-4" />
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-6 rounded-2xl bg-muted border border-border/60">
                <h3 className="text-xl font-bold mb-2">Core</h3>
                <p className="text-sm text-muted-foreground">{strategicQuadrants[0].desc}</p>
                <BarChart3 size={32} className="text-muted-foreground/30 mt-4" />
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="p-6 rounded-2xl bg-stello/10 border border-stello/30">
                <h3 className="text-xl font-bold mb-2 text-stello">Emerging</h3>
                <p className="text-sm text-muted-foreground">{strategicQuadrants[2].desc}</p>
                <Lightbulb size={32} className="text-stello/30 mt-4" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cluster Toggle & Weights */}
        <section className="py-24 sm:py-32 bg-foreground text-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Customizable Scoring Weights</h2>
              <p className="text-background/70 max-w-lg mx-auto">Choose a preset cluster or manually adjust weights to match your evaluation priorities.</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {clusterPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setActiveCluster(preset.name)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${activeCluster === preset.name ? "bg-pragati text-background" : "bg-background/10 text-background/70 hover:bg-background/20"}`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                {weights.map((category, index) => (
                  <motion.div key={category.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{category.name}</span>
                      <span className="font-mono text-sm text-pragati">{category.weight}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-background/20 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${category.weight}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} className={`h-full rounded-full ${category.color}`} />
                    </div>
                  </motion.div>
                ))}

                <div className="mt-6 p-4 rounded-xl bg-pragati/20 border border-pragati/30 flex items-center justify-between">
                  <span className="font-bold">Total Weight:</span>
                  <span className="text-2xl font-bold text-edifai">100%</span>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square rounded-2xl bg-background/5 border border-background/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-pragati">78</div>
                  <div className="text-sm text-background/50 font-mono mt-2">INNOVATION SCORE</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <p className="text-center font-mono text-xs text-muted-foreground tracking-wider uppercase mb-8">Trusted By Leading Institutions</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Trusted by the Next Generation of Leaders</h2>
              <p className="text-muted-foreground">See how Pragati is transforming innovation across colleges and organizations worldwide</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bento-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pragati/10 text-pragati flex items-center justify-center font-bold">{testimonial.avatar}</div>
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Your Score Means</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {scoreRanges.map((range, index) => (
                <motion.div key={range.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`bento-card ${range.bg}`}>
                  <div className={`mb-4 ${range.color}`}>{range.icon}</div>
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to Build the Future?</h2>
              <p className="text-muted-foreground mb-8">Let's connect and launch the next big thing together.</p>
              <a href="https://pragati.thevencorp.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-pragati hover:bg-pragati/90">
                  Get Started Now
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
