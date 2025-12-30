import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    tagline: "For Solo Founders",
    price: "Free",
    period: "forever",
    description: "Validate your first idea and get started with the ecosystem.",
    icon: <Zap size={20} />,
    features: [
      "1 Pragati validation per month",
      "Basic Edifai learning modules",
      "Community access",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
    accentClass: "text-muted-foreground",
  },
  {
    name: "Growth",
    tagline: "For Emerging Startups",
    price: "₹4,999",
    period: "/month",
    description: "Full access to validation, operations, and learning tools.",
    icon: <Rocket size={20} />,
    features: [
      "Unlimited Pragati validations",
      "Full Stello back-office suite",
      "Complete Edifai curriculum",
      "Interllexia co-founder matching",
      "Priority support",
      "Team collaboration (up to 5)",
    ],
    cta: "Start Free Trial",
    popular: true,
    accentClass: "text-pragati",
  },
  {
    name: "Enterprise",
    tagline: "For Scaling Companies",
    price: "Custom",
    period: "",
    description: "GINE access, dedicated support, and white-glove onboarding.",
    icon: <Building2 size={20} />,
    features: [
      "Everything in Growth",
      "GINE marketplace access",
      "Investor data rooms",
      "Stacia Corp prototyping credits",
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
    accentClass: "text-gine",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            Scale with Confidence
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that fits your stage. Upgrade as you grow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card relative flex flex-col ${
                plan.popular ? "border-pragati/50 shadow-glow-pragati" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-pragati text-primary-foreground font-mono text-xs px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted mb-4 ${plan.accentClass}`}>
                  {plan.icon}
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">// {plan.tagline}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className={`mt-0.5 ${plan.accentClass}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
