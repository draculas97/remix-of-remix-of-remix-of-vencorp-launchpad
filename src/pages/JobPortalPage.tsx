import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Users, Search, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
  { name: "Engineering", count: 156 },
  { name: "Product", count: 43 },
  { name: "Design", count: 67 },
  { name: "Marketing", count: 38 },
  { name: "Operations", count: 29 },
  { name: "Finance", count: 21 },
];

export default function JobPortalPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jobportal/10 rounded-full blur-3xl" />
          
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

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-jobportal hover:bg-jobportal/90 text-primary-foreground">
                  <Search size={18} />
                  Find Talent
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                  Post a Job
                </Button>
              </div>
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jobportal/10 text-jobportal mb-4">
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
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Browse by Category
                </h2>
                <p className="text-muted-foreground">
                  Find the perfect role across our ecosystem companies.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {jobCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bento-card text-center group"
                  >
                    <h4 className="font-bold mb-2">{category.name}</h4>
                    <p className="font-mono text-2xl text-jobportal">{category.count}</p>
                    <p className="font-mono text-xs text-muted-foreground">open positions</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
