import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Server, Sparkles, Users, Globe, ArrowUpRight, Briefcase, Box, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "@/components/CountUp";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;
  glowClass: string;
  score?: number;
  wide?: boolean;
  index: number;
  href: string;
  externalUrl?: string;
}

function ProductCard({ name, tagline, description, icon, accentClass, glowClass, score, wide, index, href, externalUrl }: ProductCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardContent = (
    <>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClass} bg-opacity-10`}>
          <div className={accentClass}>{icon}</div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowUpRight size={18} className="text-muted-foreground" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="text-lg font-bold tracking-tight">{name}</h3>
          <span className="font-mono text-xs text-muted-foreground tracking-wider">// {tagline}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* External URL */}
      {externalUrl && (
        <div className="mt-4 pt-4 border-t border-border/40">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-2 font-mono text-xs ${accentClass} hover:underline`}
          >
            <ExternalLink size={12} />
            Try {name.charAt(0) + name.slice(1).toLowerCase()}
          </a>
        </div>
      )}

      {/* Score display for Pragati */}
      {score !== undefined && (
        <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border/40">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">Validation Score</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-pragati">
                <CountUp end={score} isInView={isInView} />
              </span>
              <span className="text-sm text-muted-foreground">/100</span>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-border overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${score}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full rounded-full bg-pragati"
            />
          </div>
        </div>
      )}
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className={`bento-card group cursor-pointer ${wide ? "md:col-span-2" : ""} hover:${glowClass}`}
    >
      <Link to={href} className="block">
        {cardContent}
      </Link>
    </motion.div>
  );
}

const products = [
  {
    name: "PRAGATI",
    tagline: "The Validator",
    description: "AI-powered idea validation. 110 parameters. Instant Go/No-Go scoring with strategic categorization.",
    icon: <Brain size={20} />,
    accentClass: "text-pragati",
    glowClass: "shadow-glow-pragati",
    score: 87,
    wide: true,
    href: "/pragati",
    externalUrl: "https://pragati.thevencorp.com",
  },
  {
    name: "STELLO",
    tagline: "The Operator",
    description: "Automated back-office infrastructure. CRM, HR, Invoicing, and compliance in one dashboard.",
    icon: <Server size={20} />,
    accentClass: "text-stello",
    glowClass: "shadow-glow-stello",
    href: "/stello",
    externalUrl: "https://stello.thevencorp.com",
  },
  {
    name: "EDIFAI",
    tagline: "The Mentor",
    description: "Adaptive AI learning paths personalized based on your validation gaps and growth areas.",
    icon: <Sparkles size={20} />,
    accentClass: "text-edifai",
    glowClass: "shadow-glow-edifai",
    href: "/edifai",
    externalUrl: "https://edifai.thevencorp.com",
  },
  {
    name: "INTERLLEXIA",
    tagline: "The Matchmaker",
    description: "Co-founder and team matching via psychometric data and complementary skill profiling.",
    icon: <Users size={20} />,
    accentClass: "text-interllexia",
    glowClass: "shadow-glow-interllexia",
    href: "/interllexia",
    externalUrl: "https://interllexia.thevencorp.com",
  },
  {
    name: "JOB PORTAL",
    tagline: "The Talent Network",
    description: "An exclusive job platform connecting Vencorp-backed startups with vetted, top-tier talent sourced from our network of academic partners.",
    icon: <Briefcase size={20} />,
    accentClass: "text-jobportal",
    glowClass: "shadow-glow-jobportal",
    href: "/job-portal",
    externalUrl: "https://jobs.thevencorp.com",
  },
  {
    name: "GINE",
    tagline: "The Market",
    description: "Global Innovation Engine. Trade, license, and monetize validated intellectual property worldwide.",
    icon: <Globe size={20} />,
    accentClass: "text-gine",
    glowClass: "shadow-glow-gine",
    href: "/gine",
    externalUrl: "https://gine.thevencorp.com",
  },
  {
    name: "TEZZARACT",
    tagline: "The Dimension",
    description: "Where imagination meets dimension. 5000+ 3D products marketplace for custom designs and innovation in every dimension.",
    icon: <Box size={20} />,
    accentClass: "text-tezzaract",
    glowClass: "shadow-glow-tezzaract",
    wide: true,
    href: "/tezzaract",
    externalUrl: "https://tezzaract.com",
  },
];

export default function ProductGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 sm:py-32" id="products">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            The Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            Seven modules. One identity.
          </h2>
          <p className="text-muted-foreground">
            Each tool is built to solve a specific problem in the startup journey—but they work together 
            seamlessly through the Vencorp SSO.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
