import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { name: "Pragati", href: "/pragati", external: "https://pragati.thevencorp.com" },
    { name: "Stello", href: "/stello" },
    { name: "Edifai", href: "/edifai", external: "https://www.edifai.in" },
    { name: "Interllexia", href: "/interllexia" },
    { name: "GINE", href: "/gine" },
    { name: "Job Portal", href: "/job-portal" },
    { name: "Tezzaract", href: "/tezzaract", external: "https://tezzaract.com" },
    { name: "Built by Stacia", href: "/built-by-stacia", external: "https://www.builtbystacia.com" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "https://staciacorp.com/career", isExternal: true },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  Resources: [
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api-reference" },
    { name: "Status", href: "/status" },
    { name: "Support", href: "/support" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-3">
              <span className="text-xl font-bold tracking-[0.15em]">VENCORP</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground border-l border-border/60 pl-3">
                BY STACIA
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              The operating system for innovation. From idea to global scale.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Stacia Corp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
