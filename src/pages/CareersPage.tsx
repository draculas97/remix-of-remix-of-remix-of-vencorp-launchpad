import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Zap, Heart, Laptop, Coffee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openings = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Bangalore", type: "Full-time" },
  { title: "ML Engineer - NLP", department: "AI/ML", location: "Remote", type: "Full-time" },
  { title: "Growth Marketing Manager", department: "Marketing", location: "Mumbai", type: "Full-time" },
  { title: "Developer Advocate", department: "DevRel", location: "Remote", type: "Full-time" },
  { title: "Customer Success Lead", department: "Operations", location: "Bangalore", type: "Full-time" },
];

const perks = [
  { icon: <Laptop size={24} />, title: "Remote-First", desc: "Work from anywhere. Our team spans 12 countries." },
  { icon: <Coffee size={24} />, title: "Unlimited PTO", desc: "Take the time you need. We trust you to deliver." },
  { icon: <Zap size={24} />, title: "Equity", desc: "Every team member gets skin in the game." },
  { icon: <Heart size={24} />, title: "Health & Wellness", desc: "Comprehensive health coverage + mental health support." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-edifai/10 rounded-full blur-3xl" />
          
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
                Careers at Vencorp
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Build What <span className="text-edifai">Matters</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join a team of builders, dreamers, and doers. We're on a mission to give every founder a fair shot at success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Why Vencorp?</h2>
              <p className="text-muted-foreground">We invest in our people because they're our greatest asset.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bento-card text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-edifai/10 text-edifai mx-auto mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Open Roles</h2>
              <p className="text-muted-foreground">Find your next adventure.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {openings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bento-card group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-edifai transition-colors">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.department}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                      <ArrowRight size={16} className="text-edifai opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-foreground text-background">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Don't see your role?</h2>
              <p className="text-background/70 mb-8">We're always looking for talented people. Send us your resume and tell us why you'd be a great fit.</p>
              <Button variant="outline" className="rounded-full text-foreground border-background/20 hover:bg-background/10">
                Send Open Application
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
