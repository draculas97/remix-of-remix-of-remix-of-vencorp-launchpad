import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Lightbulb, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const journeySteps = [
  {
    id: "pragati",
    icon: <Lightbulb size={28} />,
    title: "Validate",
    product: "Pragati",
    description: "Submit your idea and receive a comprehensive 110-point validation score",
    color: "pragati",
    link: "https://pragati.thevencorp.com",
    external: true,
    features: ["AI-powered analysis", "Market viability scoring", "Competitive landscape"],
  },
  {
    id: "stello",
    icon: <Building2 size={28} />,
    title: "Onboard",
    product: "Stello",
    description: "Set up your business operations with automated legal, HR, and financial systems",
    color: "stello",
    link: "/stello",
    external: false,
    features: ["Entity formation", "Compliance automation", "CRM & invoicing"],
  },
  {
    id: "edifai",
    icon: <GraduationCap size={28} />,
    title: "Learn",
    product: "Edifai",
    description: "Access personalized learning paths to fill skill gaps and accelerate growth",
    color: "edifai",
    link: "https://www.edifai.in",
    external: true,
    features: ["Adaptive curriculum", "AI tutoring", "Skill assessments"],
  },
];

export default function UserJourneyFlow() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
            From Idea to <span className="text-pragati">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The Vencorp ecosystem guides you through every stage of your startup journey
          </p>
        </motion.div>

        {/* Journey Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-pragati via-stello to-edifai origin-left"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center lg:justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-${step.color}/10 text-${step.color} border-2 border-${step.color}/30 shadow-glow-${step.color}`}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`bento-card group hover:border-${step.color}/50 hover:shadow-glow-${step.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`font-mono text-xs tracking-wider uppercase text-${step.color}`}>
                      Step {index + 1}
                    </span>
                    <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground">
                      // {step.title}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{step.product}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={14} className={`text-${step.color}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {step.external ? (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium text-${step.color} hover:underline group-hover:gap-3 transition-all`}
                    >
                      Explore {step.product}
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      to={step.link}
                      className={`inline-flex items-center gap-2 text-sm font-medium text-${step.color} hover:underline group-hover:gap-3 transition-all`}
                    >
                      Explore {step.product}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>

                {/* Mobile Arrow */}
                {index < journeySteps.length - 1 && (
                  <div className="flex justify-center py-6 lg:hidden">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground"
                    >
                      <ArrowRight size={24} className="rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Ready to begin your journey?
          </p>
          <a
            href="https://pragati.thevencorp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pragati text-primary-foreground font-medium hover:bg-pragati/90 transition-colors"
          >
            Start with Pragati
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
