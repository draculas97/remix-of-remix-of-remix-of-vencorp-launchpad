import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pragati/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stello/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/50 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pragati animate-pulse-dot" />
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              A Stacia Corp Product
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            The Operating System
            <br />
            <span className="text-muted-foreground">for Innovation.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          >
            From raw idea to global scale. One ecosystem. All the tools.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 gap-2 group">
              Launch Pragati Portal
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full px-8 text-muted-foreground">
              View Documentation
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-8 sm:gap-12 mt-16 pt-8 border-t border-border/40"
          >
            {[
              { value: "75+", label: "Validation Parameters" },
              { value: "5", label: "Integrated Modules" },
              { value: "100%", label: "Data-Driven" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
