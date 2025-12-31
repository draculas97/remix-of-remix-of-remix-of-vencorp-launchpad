import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Pragati's validation system saved us 6 months of building the wrong product. The 110-point analysis is incredibly thorough.",
    author: "Priya Sharma",
    role: "Founder, TechVentures",
    avatar: "PS",
    accentColor: "bg-pragati/10 text-pragati",
  },
  {
    quote: "Stello automated our entire back-office from day one. Incorporation, compliance, payroll - all handled seamlessly.",
    author: "Rahul Mehta",
    role: "CEO, InnoScale",
    avatar: "RM",
    accentColor: "bg-stello/10 text-stello",
  },
  {
    quote: "Edifai identified gaps in our financial modeling and generated a custom learning path. We were investor-ready in weeks.",
    author: "Ananya Gupta",
    role: "Co-founder, DataPulse",
    avatar: "AG",
    accentColor: "bg-edifai/10 text-edifai",
  },
  {
    quote: "Found my technical co-founder through Interllexia. The psychometric matching is surprisingly accurate.",
    author: "Vikram Patel",
    role: "Founder, AgriTech Solutions",
    avatar: "VP",
    accentColor: "bg-interllexia/10 text-interllexia",
  },
  {
    quote: "GINE connected us with three GCCs within a month. Our IP is now licensed in 4 countries.",
    author: "Neha Krishnan",
    role: "CTO, BioInnovate",
    avatar: "NK",
    accentColor: "bg-gine/10 text-gine",
  },
  {
    quote: "The entire Vencorp ecosystem works like one unified system. Data flows between modules automatically.",
    author: "Arjun Reddy",
    role: "Managing Partner, Seed Fund",
    avatar: "AR",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    quote: "Tezzaract's 3D marketplace transformed how we prototype. From CAD to product in record time.",
    author: "Meera Singh",
    role: "Product Lead, DesignLab",
    avatar: "MS",
    accentColor: "bg-tezzaract/10 text-tezzaract",
  },
  {
    quote: "The Job Portal connected us with talent that understood startup culture. Our hiring time dropped 60%.",
    author: "Karan Desai",
    role: "HR Director, ScaleUp Inc",
    avatar: "KD",
    accentColor: "bg-jobportal/10 text-jobportal",
  },
];

// Split into two rows
const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4);

// Duplicate for seamless loop
const row1Duplicated = [...row1, ...row1, ...row1];
const row2Duplicated = [...row2, ...row2, ...row2];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    className="bento-card group w-[320px] sm:w-[350px] flex-shrink-0"
  >
    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${testimonial.accentColor} transition-transform group-hover:scale-110`}>
      <Quote size={18} />
    </div>
    <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
      "{testimonial.quote}"
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-border/40">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold ${testimonial.accentColor} transition-transform group-hover:scale-110`}>
        {testimonial.avatar}
      </div>
      <div>
        <div className="font-medium text-sm">{testimonial.author}</div>
        <div className="font-mono text-xs text-muted-foreground">{testimonial.role}</div>
      </div>
    </div>
  </motion.div>
);

interface MarqueeRowProps {
  items: typeof testimonials;
  direction: "left" | "right";
  isPaused: boolean;
  speed?: number;
}

const MarqueeRow = ({ items, direction, isPaused, speed = 40 }: MarqueeRowProps) => {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const totalWidth = items.length * 370; // Approximate card width + gap
    const duration = totalWidth / speed;
    
    if (!isPaused) {
      controls.start({
        x: direction === "left" ? [0, -totalWidth / 3] : [-totalWidth / 3, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls, items.length, direction, speed]);

  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      className="flex gap-6"
      style={{ width: "fit-content" }}
    >
      {items.map((testimonial, index) => (
        <TestimonialCard key={`${testimonial.author}-${index}`} testimonial={testimonial} index={index} />
      ))}
    </motion.div>
  );
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section ref={ref} id="testimonials" className="py-24 sm:py-32 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-2">
              Trusted by Innovators
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Founders and investors building the future with the Vencorp ecosystem.
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={() => scroll("left")}
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              onClick={() => scroll("right")}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Row 1 - Marquee */}
      <div 
        className="relative mb-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="px-6 overflow-hidden">
          <MarqueeRow items={row1Duplicated} direction="left" isPaused={isPaused} speed={35} />
        </div>
      </div>

      {/* Row 2 - Marquee (opposite direction) */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div ref={scrollContainerRef} className="px-6 overflow-hidden">
          <MarqueeRow items={row2Duplicated} direction="right" isPaused={isPaused} speed={30} />
        </div>
      </div>
    </section>
  );
}
