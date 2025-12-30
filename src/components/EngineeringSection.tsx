import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Cog, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EngineeringSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-foreground text-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            hsl(var(--background)) 40px,
            hsl(var(--background)) 41px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            hsl(var(--background)) 40px,
            hsl(var(--background)) 41px
          )`
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-background/60 tracking-wider uppercase">
              Hardware Division
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-6">
              Powered by Hard Engineering.
            </h2>
            <p className="text-lg text-background/70 leading-relaxed mb-8">
              While Vencorp handles the software ecosystem, Stacia Corp builds the hardware. 
              From prototype to production-ready products—complete engineering support for 
              physical innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: <Cpu size={18} />, label: "Prototyping" },
                { icon: <Cog size={18} />, label: "Manufacturing" },
                { icon: <Zap size={18} />, label: "Scale Production" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-background/20 bg-background/5"
                >
                  {item.icon}
                  <span className="font-mono text-xs tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-background/30 text-background hover:bg-background hover:text-foreground gap-2 group"
            >
              Explore Stacia Corp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-background/10" />
              <div className="absolute inset-8 rounded-full border border-background/15" />
              <div className="absolute inset-16 rounded-full border border-background/20" />
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center">
                  <span className="font-mono text-2xl font-bold tracking-wider">SC</span>
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pragati" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-stello" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-edifai" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
