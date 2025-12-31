import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Clock, Bell, ArrowRight, Activity, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const services = [
  { name: "Pragati Validation Engine", status: "operational", uptime: "99.99%", latency: "45ms" },
  { name: "Stello Back-Office", status: "operational", uptime: "99.97%", latency: "52ms" },
  { name: "Edifai Learning Platform", status: "operational", uptime: "99.95%", latency: "38ms" },
  { name: "Interllexia Matching", status: "operational", uptime: "99.98%", latency: "61ms" },
  { name: "GINE Marketplace", status: "operational", uptime: "99.96%", latency: "44ms" },
  { name: "Job Portal", status: "operational", uptime: "99.94%", latency: "35ms" },
  { name: "Tezzaract 3D Engine", status: "operational", uptime: "99.92%", latency: "89ms" },
  { name: "Authentication (SSO)", status: "operational", uptime: "99.99%", latency: "28ms" },
  { name: "API Gateway", status: "operational", uptime: "99.99%", latency: "12ms" },
  { name: "CDN / Edge Network", status: "operational", uptime: "100.00%", latency: "8ms" },
];

const incidents = [
  {
    date: "Dec 28, 2024",
    title: "Resolved: Intermittent slowness on Pragati API",
    status: "resolved",
    desc: "Issue was identified and resolved within 15 minutes. No data loss occurred.",
    timeline: [
      { time: "14:23 UTC", event: "Issue detected by monitoring" },
      { time: "14:25 UTC", event: "Engineering team notified" },
      { time: "14:38 UTC", event: "Root cause identified" },
      { time: "14:41 UTC", event: "Fix deployed and verified" },
    ],
  },
  {
    date: "Dec 15, 2024",
    title: "Scheduled Maintenance: Database optimization",
    status: "completed",
    desc: "Routine maintenance completed successfully with zero downtime.",
    timeline: [
      { time: "02:00 UTC", event: "Maintenance window started" },
      { time: "02:45 UTC", event: "Database optimization complete" },
      { time: "02:50 UTC", event: "All systems verified operational" },
    ],
  },
];

const metrics = [
  { label: "Overall Uptime", value: "99.98%", period: "Last 30 days" },
  { label: "Avg Response Time", value: "42ms", period: "Last 24 hours" },
  { label: "Incidents", value: "2", period: "Last 90 days" },
  { label: "MTTR", value: "18 min", period: "Average" },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "operational":
      return <CheckCircle size={18} className="text-edifai" />;
    case "degraded":
      return <AlertTriangle size={18} className="text-interllexia" />;
    case "outage":
      return <XCircle size={18} className="text-destructive" />;
    default:
      return <Clock size={18} className="text-muted-foreground" />;
  }
};

export default function StatusPage() {
  const [email, setEmail] = useState("");
  const allOperational = services.every(s => s.status === "operational");

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
                System Status
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                {allOperational ? (
                  <span className="text-edifai">All Systems Operational</span>
                ) : (
                  <span className="text-interllexia">Partial Outage</span>
                )}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Real-time status for all Vencorp services. Updated every 60 seconds.
              </p>

              {/* Subscribe */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input 
                  placeholder="your@email.com" 
                  className="h-12 rounded-full bg-card"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="rounded-full gap-2 h-12 px-6">
                  <Bell size={16} />
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-12 border-y border-border/60">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-edifai mb-1">{metric.value}</div>
                  <div className="text-sm font-medium">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.period}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Services</h2>
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-edifai" />
                  <span className="font-mono text-xs text-edifai">LIVE</span>
                </div>
              </div>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card hover:border-edifai/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <StatusIcon status={service.status} />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-muted-foreground hidden sm:inline">{service.latency}</span>
                      <span className="text-muted-foreground">{service.uptime}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                        service.status === 'operational' ? 'bg-edifai/20 text-edifai' : 'bg-interllexia/20 text-interllexia'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Incidents */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Recent Incidents</h2>
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bento-card"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{incident.date}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                        incident.status === 'resolved' ? 'bg-edifai/20 text-edifai' : 'bg-stello/20 text-stello'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">{incident.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{incident.desc}</p>
                    
                    {/* Timeline */}
                    <div className="border-l-2 border-border pl-4 space-y-3">
                      {incident.timeline.map((item, i) => (
                        <div key={i} className="text-sm">
                          <span className="font-mono text-xs text-muted-foreground">{item.time}</span>
                          <p className="text-muted-foreground">{item.event}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SLA */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bento-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield size={24} className="text-edifai" />
                    <h3 className="font-bold">99.9% SLA Guarantee</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We guarantee 99.9% uptime for all production services, backed by our enterprise SLA.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bento-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={24} className="text-stello" />
                    <h3 className="font-bold">24/7 Incident Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our on-call engineering team monitors all services around the clock.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
