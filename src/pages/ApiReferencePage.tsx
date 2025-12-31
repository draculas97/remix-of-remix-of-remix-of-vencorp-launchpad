import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, Code, Lock, Zap, ArrowRight, Terminal, Key, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const endpoints = [
  {
    method: "POST",
    path: "/v1/validate",
    desc: "Submit an idea for validation",
    params: ["idea_text", "industry", "target_market"],
    category: "Pragati",
  },
  {
    method: "GET",
    path: "/v1/validation/{id}",
    desc: "Retrieve validation results",
    params: ["id"],
    category: "Pragati",
  },
  {
    method: "POST",
    path: "/v1/stello/company",
    desc: "Create a new company entity",
    params: ["name", "type", "jurisdiction"],
    category: "Stello",
  },
  {
    method: "GET",
    path: "/v1/stello/compliance",
    desc: "Check compliance status",
    params: ["company_id"],
    category: "Stello",
  },
  {
    method: "POST",
    path: "/v1/interllexia/match",
    desc: "Find co-founder matches",
    params: ["user_id", "criteria"],
    category: "Interllexia",
  },
  {
    method: "GET",
    path: "/v1/gine/listings",
    desc: "Browse IP marketplace",
    params: ["category", "price_range"],
    category: "GINE",
  },
  {
    method: "POST",
    path: "/v1/edifai/enroll",
    desc: "Enroll user in learning path",
    params: ["user_id", "path_id"],
    category: "Edifai",
  },
  {
    method: "GET",
    path: "/v1/jobs/search",
    desc: "Search job listings",
    params: ["query", "category", "location"],
    category: "Job Portal",
  },
];

const codeExamples = {
  curl: `curl -X POST https://api.vencorp.io/v1/validate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "idea_text": "AI-powered legal document analysis",
    "industry": "legaltech",
    "target_market": "SMB"
  }'`,
  javascript: `const response = await fetch('https://api.vencorp.io/v1/validate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    idea_text: 'AI-powered legal document analysis',
    industry: 'legaltech',
    target_market: 'SMB'
  })
});

const data = await response.json();
console.log(data);`,
  python: `import requests

response = requests.post(
    'https://api.vencorp.io/v1/validate',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'idea_text': 'AI-powered legal document analysis',
        'industry': 'legaltech',
        'target_market': 'SMB'
    }
)

print(response.json())`,
};

const rateLimits = [
  { tier: "Free", limit: "100 requests/day", color: "muted-foreground" },
  { tier: "Starter", limit: "1,000 requests/day", color: "stello" },
  { tier: "Growth", limit: "10,000 requests/day", color: "edifai" },
  { tier: "Enterprise", limit: "Unlimited", color: "gine" },
];

const sdks = [
  { name: "JavaScript/TypeScript", status: "Stable", version: "v2.1.0" },
  { name: "Python", status: "Stable", version: "v2.0.5" },
  { name: "Go", status: "Beta", version: "v0.9.2" },
  { name: "Ruby", status: "Coming Soon", version: "-" },
];

export default function ApiReferencePage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("curl");

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
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
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                API Reference
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                Build with Vencorp
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                RESTful APIs to integrate the full power of Vencorp into your applications. Authentication, validation, and more.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full gap-2">
                  <Key size={16} />
                  Get API Key
                </Button>
                <Link to="/documentation">
                  <Button variant="outline" className="rounded-full gap-2">
                    View Docs
                    <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList className="bg-muted">
                    <TabsTrigger value="curl" className="gap-2">
                      <Terminal size={14} />
                      cURL
                    </TabsTrigger>
                    <TabsTrigger value="javascript" className="gap-2">
                      <Code size={14} />
                      JavaScript
                    </TabsTrigger>
                    <TabsTrigger value="python" className="gap-2">
                      <Code size={14} />
                      Python
                    </TabsTrigger>
                  </TabsList>
                  <button 
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    {copied ? <Check size={16} className="text-edifai" /> : <Copy size={16} />}
                  </button>
                </div>

                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="rounded-xl bg-foreground text-background p-6 font-mono text-sm overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{code}</pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bento-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stello/10 text-stello mb-4">
                    <Key size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">API Key Authentication</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pass your API key in the Authorization header as a Bearer token for all requests.
                  </p>
                  <code className="text-xs font-mono bg-muted px-3 py-2 rounded block">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bento-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-edifai/10 text-edifai mb-4">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">OAuth 2.0</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For user-scoped requests, use OAuth 2.0 with PKCE for secure authentication flows.
                  </p>
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    OAuth Setup Guide
                    <ArrowRight size={12} />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-12">Endpoints</h2>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <motion.div
                    key={endpoint.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bento-card group hover:border-stello/50"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                        endpoint.method === 'GET' ? 'bg-edifai/20 text-edifai' : 'bg-stello/20 text-stello'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm">{endpoint.path}</code>
                      <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {endpoint.category}
                      </span>
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
          </div>
        </section>

        {/* SDKs & Rate Limits */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* SDKs */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Official SDKs</h2>
                <div className="space-y-3">
                  {sdks.map((sdk, index) => (
                    <motion.div
                      key={sdk.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card"
                    >
                      <div>
                        <span className="font-medium">{sdk.name}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-2">{sdk.version}</span>
                      </div>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                        sdk.status === 'Stable' ? 'bg-edifai/20 text-edifai' :
                        sdk.status === 'Beta' ? 'bg-interllexia/20 text-interllexia' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {sdk.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Rate Limits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Rate Limits</h2>
                <div className="space-y-3">
                  {rateLimits.map((limit, index) => (
                    <motion.div
                      key={limit.tier}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card"
                    >
                      <span className={`font-bold text-${limit.color}`}>{limit.tier}</span>
                      <span className="font-mono text-sm text-muted-foreground">{limit.limit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-stello/5">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to integrate?</h2>
              <p className="text-muted-foreground mb-6">Get your API key and start building today.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-full gap-2">
                  <Key size={16} />
                  Get API Key
                </Button>
                <Link to="/support">
                  <Button variant="outline" className="rounded-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
