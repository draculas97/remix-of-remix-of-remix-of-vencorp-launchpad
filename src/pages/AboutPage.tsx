import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Zap, Globe, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: <Zap size={24} />, title: "Speed", desc: "Move fast, validate faster. We help founders avoid years of building the wrong thing." },
  { icon: <Target size={24} />, title: "Precision", desc: "Data-driven decisions over gut feelings. Every feature is backed by 50,000+ startup data points." },
  { icon: <Users size={24} />, title: "Community", desc: "We succeed when founders succeed. Our ecosystem connects talent, ideas, and capital." },
  { icon: <Globe size={24} />, title: "Global", desc: "Innovation knows no borders. We serve founders across 40+ countries." },
];

const milestones = [
  { year: "2021", event: "Stacia Corp founded with a vision to democratize startup validation." },
  { year: "2022", event: "Pragati beta launched. 1,000 ideas validated in the first month." },
  { year: "2023", event: "Full ecosystem launch: Stello, Edifai, Interllexia, and GINE go live." },
  { year: "2024", event: "Job Portal and Tezzaract added. 50,000+ founders served globally." },
  { year: "2025", event: "Vencorp becomes the #1 startup operating system in Asia." },
];

const team = [
  { name: "Arjun Krishnan", role: "CEO & Founder", avatar: "AK" },
  { name: "Priya Sharma", role: "CTO", avatar: "PS" },
  { name: "Rahul Mehta", role: "VP, Product", avatar: "RM" },
  { name: "Ananya Gupta", role: "VP, Engineering", avatar: "AG" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stello/10 rounded-full blur-3xl" />
          
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
                About Vencorp
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Building the Future of <span className="text-stello">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Vencorp is the operating system for startups. We provide the tools, infrastructure, and intelligence founders need to go from idea to IPO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Award size={48} className="text-pragati mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To eliminate the guesswork from entrepreneurship. We believe every founder deserves access to the same quality of validation, tools, and networks that billion-dollar startups have. Through AI-powered insights and a connected ecosystem, we're making that a reality.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we build.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stello/10 text-stello mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 sm:py-32 bg-foreground text-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Journey</h2>
              <p className="text-background/70">From idea to industry leader.</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="font-mono text-sm text-stello font-bold w-16 flex-shrink-0">{milestone.year}</span>
                  <p className="text-background/80">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Leadership</h2>
              <p className="text-muted-foreground">The team building the future of startups.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-stello/10 text-stello flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {member.avatar}
                  </div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <Rocket size={48} className="text-pragati mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to Build?</h2>
              <p className="text-muted-foreground mb-8">Join thousands of founders building the future with Vencorp.</p>
              <Link to="/#enquiry">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-medium"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
