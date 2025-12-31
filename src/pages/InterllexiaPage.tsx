import { motion } from "framer-motion";
import { ArrowLeft, Users, Link2, PuzzleIcon, Handshake, UserCheck, Brain, ArrowRight, Sparkles, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: <Link2 size={24} />,
    title: "The Anti-Social Network",
    description: "This isn't LinkedIn. There are no feeds, no influencers, and no noise. It is a closed loop of vetted Vencorp innovators looking for their missing half—whether that's a CTO, a CFO, or a sales lead.",
  },
  {
    icon: <PuzzleIcon size={24} />,
    title: "Psychometric Pairing",
    description: "We analyze 40+ personality traits. If you're a high-risk visionary, we match you with a grounded operator. If you're a chaotic creative, we match you with a disciplined structured thinker.",
  },
  {
    icon: <Handshake size={24} />,
    title: "The Vesting Protocol",
    description: "Found your match? Interllexia provides standardized \"Founder Agreements\" and dynamic equity split calculators (based on the Slicing Pie model) so you can start working without the awkward equity conversation.",
  },
];

const matchProfiles = [
  {
    name: "Technical Co-founder",
    traits: ["Engineering", "Product Development", "Systems Thinking"],
    compatibility: 92,
    avatar: "🧑‍💻",
  },
  {
    name: "Operations Lead",
    traits: ["Process Design", "Team Management", "Execution"],
    compatibility: 87,
    avatar: "👔",
  },
  {
    name: "Growth Partner",
    traits: ["Marketing", "Sales", "Business Development"],
    compatibility: 78,
    avatar: "📈",
  },
];

const integrations = [
  {
    title: "Syncs with Edifai",
    description: "If your team has a combined skill gap (e.g., neither of you knows marketing), Interllexia flags it and Edifai auto-assigns a crash course.",
    icon: <Brain size={16} />,
  },
  {
    title: "Syncs with Job Portal",
    description: "Once your co-founding team is set, use the Job Portal to hire your first employees from our academic partners.",
    icon: <Users size={16} />,
  },
];

const stats = [
  { value: "40+", label: "Personality Traits Analyzed" },
  { value: "2,000+", label: "Successful Matches" },
  { value: "85%", label: "Match Satisfaction Rate" },
  { value: "72hrs", label: "Average Time to First Match" },
];

const howItWorks = [
  { step: 1, title: "Complete Profile", description: "Take our comprehensive assessment covering skills, personality, and goals" },
  { step: 2, title: "AI Matching", description: "Our algorithm finds compatible co-founders based on 40+ data points" },
  { step: 3, title: "Meet & Connect", description: "Review profiles and schedule introductory calls with your matches" },
  { step: 4, title: "Formalize Partnership", description: "Use our legal templates to establish fair equity splits" },
];

export default function InterllexiaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-interllexia/10 rounded-full blur-3xl" />
          
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-interllexia/30 bg-interllexia/5 mb-6">
                <Users size={14} className="text-interllexia" />
                <span className="font-mono text-xs text-interllexia tracking-wider uppercase">
                  INTERLLEXIA // The Matchmaker
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Solo founders<br />
                <span className="text-interllexia">rarely scale.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                The #1 cause of startup failure isn't the idea—it's the team. Interllexia uses psychometric data and skill-matrixing to find the co-founder you need, not just the one you know.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-interllexia hover:bg-interllexia/90 text-primary-foreground group">
                  Find My Match
                  <Heart size={16} className="group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  How It Works
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-interllexia mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Science-backed matching
              </h2>
              <p className="text-muted-foreground">
                We don't leave your co-founder search to chance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card group hover:border-interllexia/50 hover:shadow-glow-interllexia"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-interllexia/10 text-interllexia mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Four simple steps to finding your perfect co-founder
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bento-card text-center">
                    <div className="w-12 h-12 rounded-full bg-interllexia/10 text-interllexia font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-muted-foreground">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Match Profiles Preview */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Compatibility Scoring
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our algorithm analyzes personality, skills, and work style to find your ideal match.
                </p>
                <div className="space-y-4">
                  {matchProfiles.map((profile, index) => (
                    <motion.div
                      key={profile.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl border border-border/60 bg-card hover:border-interllexia/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{profile.avatar}</div>
                          <span className="font-medium">{profile.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles size={14} className="text-interllexia" />
                          <span className="font-mono text-lg font-bold text-interllexia">
                            {profile.compatibility}%
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.traits.map((trait) => (
                          <span
                            key={trait}
                            className="font-mono text-xs bg-muted px-2 py-1 rounded"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Integrations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-6">
                  Data-Driven Teams
                </h3>
                <div className="space-y-4">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={integration.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-5 rounded-xl border border-border/60 bg-card hover:border-interllexia/50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-interllexia">{integration.icon}</div>
                        <span className="font-bold text-sm">{integration.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-6 p-4 rounded-xl border border-interllexia/30 bg-interllexia/5">
                  <div className="flex items-center gap-3">
                    <Shield size={20} className="text-interllexia" />
                    <div>
                      <div className="font-medium text-sm">Privacy First</div>
                      <div className="text-xs text-muted-foreground">Your profile is only visible to verified matches</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-interllexia/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Find your missing half
                </h2>
                <p className="text-muted-foreground mb-8">
                  The right co-founder can make all the difference
                </p>
                <Button size="lg" className="rounded-full px-8 gap-2 bg-interllexia hover:bg-interllexia/90 text-primary-foreground">
                  Start Matching
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
