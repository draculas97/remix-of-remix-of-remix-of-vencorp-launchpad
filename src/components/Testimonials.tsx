import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

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
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="testimonials" className="py-24 sm:py-32">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-muted-foreground">
            Founders and investors building the future with the Vencorp ecosystem.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-card group"
            >
              {/* Quote icon */}
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${testimonial.accentColor}`}>
                <Quote size={18} />
              </div>

              {/* Quote text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold ${testimonial.accentColor}`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="font-mono text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
