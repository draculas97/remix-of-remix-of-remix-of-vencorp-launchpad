import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Users, Search, Award, Building2, ArrowRight, CheckCircle, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: <GraduationCap size={24} />,
    title: "Academic Network",
    description: "Access talent from our network of premier academic partners. Fresh graduates with cutting-edge skills and validated potential.",
  },
  {
    icon: <Award size={24} />,
    title: "Vetted Candidates",
    description: "Every candidate goes through our rigorous vetting process. Only top-tier talent makes it to our platform.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Startup-Ready",
    description: "Candidates understand startup culture. They're ready to wear multiple hats and grow with your company.",
  },
];

const jobCategories = [
  { name: "Engineering", count: 156, icon: "💻" },
  { name: "Product", count: 43, icon: "📦" },
  { name: "Design", count: 67, icon: "🎨" },
  { name: "Marketing", count: 38, icon: "📣" },
  { name: "Operations", count: 29, icon: "⚙️" },
  { name: "Finance", count: 21, icon: "📊" },
];

const stats = [
  { value: "10,000+", label: "Active Candidates" },
  { value: "500+", label: "Partner Companies" },
  { value: "85%", label: "Hire Success Rate" },
  { value: "14 Days", label: "Avg. Time to Hire" },
];

const featuredJobs = [
  { title: "Senior Backend Engineer", company: "CleanTech AI", location: "Remote", type: "Full-time" },
  { title: "Product Designer", company: "MedFlow Systems", location: "Bangalore", type: "Full-time" },
  { title: "Growth Marketing Lead", company: "EduNext", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", company: "FinSecure", location: "Mumbai", type: "Contract" },
];

const benefits = [
  "Access to pre-vetted, startup-ready talent",
  "Integration with Vencorp ecosystem companies",
  "AI-powered candidate matching",
  "Streamlined hiring workflow",
  "Skill assessments via Edifai",
  "Background verification included",
];

export default function JobPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jobportal/10 rounded-full blur-3xl" />
          
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-jobportal/30 bg-jobportal/5 mb-6">
                <Briefcase size={14} className="text-jobportal" />
                <span className="font-mono text-xs text-jobportal tracking-wider uppercase">
                  JOB PORTAL // The Talent Network
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Vencorp Ecosystem<br />
                <span className="text-jobportal">Talent Network.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                An exclusive job platform connecting Vencorp-backed startups and members with vetted, top-tier talent sourced from our network of academic partners.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Search roles, companies..." 
                    className="pl-12 h-14 text-base rounded-full border-border/60 bg-card"
                  />
                </div>
                <Button size="lg" className="rounded-full px-8 gap-2 bg-jobportal hover:bg-jobportal/90 text-primary-foreground h-14">
                  Find Talent
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button variant="outline" className="rounded-full">
                  Post a Job
                </Button>
                <Button variant="ghost" className="rounded-full gap-2">
                  For Candidates
                  <ArrowRight size={14} />
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
                  <div className="text-3xl sm:text-4xl font-bold text-jobportal mb-1">{stat.value}</div>
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
                Why hire through us?
              </h2>
              <p className="text-muted-foreground">
                Access the Vencorp talent advantage
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
                  className="bento-card group hover:border-jobportal/50 hover:shadow-glow-jobportal"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jobportal/10 text-jobportal mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Browse by Category
                </h2>
                <p className="text-muted-foreground">
                  Find the perfect role across our ecosystem companies.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {jobCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bento-card text-center group hover:border-jobportal/50 cursor-pointer"
                  >
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <h4 className="font-bold mb-2">{category.name}</h4>
                    <p className="font-mono text-2xl text-jobportal">{category.count}</p>
                    <p className="font-mono text-xs text-muted-foreground">open positions</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Featured Opportunities</h2>
                <Button variant="ghost" className="gap-2">
                  View All
                  <ArrowRight size={14} />
                </Button>
              </div>

              <div className="space-y-4">
                {featuredJobs.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-5 rounded-xl border border-border/60 bg-card hover:border-jobportal/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-jobportal transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span>{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full shrink-0">
                        Apply Now
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  The Vencorp Hiring Advantage
                </h2>
                <p className="text-muted-foreground mb-8">
                  Everything you need to build your dream team, integrated with the Vencorp ecosystem.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={18} className="text-jobportal shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="p-5 rounded-xl border border-border/60 bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={20} className="text-jobportal" />
                    <span className="font-bold">Syncs with Stello</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Once you hire, onboarding flows directly into Stello's HR module for seamless team management.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border/60 bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe size={20} className="text-jobportal" />
                    <span className="font-bold">Syncs with Edifai</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Candidates can showcase Edifai certifications, and new hires get personalized learning paths.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-jobportal/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Ready to build your team?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join hundreds of startups hiring through the Vencorp network
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-jobportal hover:bg-jobportal/90 text-primary-foreground">
                    Post a Job
                    <ArrowRight size={16} />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Find Your Next Role
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
