import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { name: "Pragati Validation Engine", status: "operational", uptime: "99.99%" },
  { name: "Stello Back-Office", status: "operational", uptime: "99.97%" },
  { name: "Edifai Learning Platform", status: "operational", uptime: "99.95%" },
  { name: "Interllexia Matching", status: "operational", uptime: "99.98%" },
  { name: "GINE Marketplace", status: "operational", uptime: "99.96%" },
  { name: "Job Portal", status: "operational", uptime: "99.94%" },
  { name: "Tezzaract 3D Engine", status: "operational", uptime: "99.92%" },
  { name: "Authentication (SSO)", status: "operational", uptime: "99.99%" },
  { name: "API Gateway", status: "operational", uptime: "99.99%" },
  { name: "CDN / Edge Network", status: "operational", uptime: "100.00%" },
];

const incidents = [
  {
    date: "Dec 28, 2024",
    title: "Resolved: Intermittent slowness on Pragati API",
    status: "resolved",
    desc: "Issue was identified and resolved within 15 minutes. No data loss occurred.",
  },
  {
    date: "Dec 15, 2024",
    title: "Scheduled Maintenance: Database optimization",
    status: "completed",
    desc: "Routine maintenance completed successfully with zero downtime.",
  },
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
  const allOperational = services.every(s => s.status === "operational");

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
                System Status
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-3 mb-6">
                {allOperational ? (
                  <span className="text-edifai">All Systems Operational</span>
                ) : (
                  <span className="text-interllexia">Partial Outage</span>
                )}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Real-time status for all Vencorp services. Updated every 60 seconds.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Services</h2>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-card"
                >
                  <div className="flex items-center gap-3">
                    <StatusIcon status={service.status} />
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{service.uptime} uptime</span>
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
        </section>

        {/* Incidents */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Recent Incidents</h2>
            <div className="max-w-2xl space-y-6">
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
                  <p className="text-sm text-muted-foreground">{incident.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
