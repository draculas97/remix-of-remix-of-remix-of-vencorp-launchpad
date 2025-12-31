import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const endpoints = [
  {
    method: "POST",
    path: "/v1/validate",
    desc: "Submit an idea for validation",
    params: ["idea_text", "industry", "target_market"],
  },
  {
    method: "GET",
    path: "/v1/validation/{id}",
    desc: "Retrieve validation results",
    params: ["id"],
  },
  {
    method: "POST",
    path: "/v1/stello/company",
    desc: "Create a new company entity",
    params: ["name", "type", "jurisdiction"],
  },
  {
    method: "GET",
    path: "/v1/stello/compliance",
    desc: "Check compliance status",
    params: ["company_id"],
  },
  {
    method: "POST",
    path: "/v1/interllexia/match",
    desc: "Find co-founder matches",
    params: ["user_id", "criteria"],
  },
  {
    method: "GET",
    path: "/v1/gine/listings",
    desc: "Browse IP marketplace",
    params: ["category", "price_range"],
  },
];

const codeExample = `curl -X POST https://api.vencorp.io/v1/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "idea_text": "AI-powered legal document analysis",
    "industry": "legaltech",
    "target_market": "SMB"
  }'`;

export default function ApiReferencePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-50" />
          
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
                API Reference
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Build with Vencorp
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                RESTful APIs to integrate the full power of Vencorp into your applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
            <div className="relative rounded-xl bg-foreground text-background p-6 font-mono text-sm overflow-x-auto">
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              <pre className="whitespace-pre-wrap">{codeExample}</pre>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bento-card"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                      endpoint.method === 'GET' ? 'bg-edifai/20 text-edifai' : 'bg-stello/20 text-stello'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm">{endpoint.path}</code>
                  </div>
                  <p className="text-muted-foreground mb-3">{endpoint.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.params.map((param) => (
                      <span key={param} className="px-2 py-1 rounded-lg bg-muted font-mono text-xs">
                        {param}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Rate Limits</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">Free tier:</strong> 100 requests/day</p>
                <p><strong className="text-foreground">Starter:</strong> 1,000 requests/day</p>
                <p><strong className="text-foreground">Growth:</strong> 10,000 requests/day</p>
                <p><strong className="text-foreground">Enterprise:</strong> Unlimited</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
