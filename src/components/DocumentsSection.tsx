import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    name: "Vencorp Brochure",
    description: "Complete overview of the Vencorp ecosystem and its modules.",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    name: "Pragati Pitch Deck",
    description: "Detailed presentation on the AI-powered validation system.",
    type: "PDF",
    size: "5.1 MB",
  },
  {
    name: "Developer Handover Brief",
    description: "Technical architecture and implementation guidelines.",
    type: "DOCX",
    size: "1.8 MB",
  },
];

export default function DocumentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="documents" className="py-24 sm:py-32">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
            Documentation
          </h2>
          <p className="text-muted-foreground">
            Download detailed resources about the Vencorp ecosystem.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-card group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4">
                <FileText size={24} className="text-muted-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-bold mb-2">{doc.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs bg-muted px-2 py-1 rounded">{doc.type}</span>
                  <span className="font-mono text-xs text-muted-foreground">{doc.size}</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download size={14} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
