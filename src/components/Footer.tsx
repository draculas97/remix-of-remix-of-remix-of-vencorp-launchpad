import { motion } from "framer-motion";

const footerLinks = {
  Products: ["Pragati", "Stello", "Edifai", "Interllexia", "GINE"],
  Company: ["About", "Careers", "Press", "Blog"],
  Resources: ["Documentation", "API Reference", "Status", "Support"],
  Legal: ["Privacy", "Terms", "Security"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground block mb-1">
                BY STACIA
              </span>
              <span className="text-lg font-bold tracking-[0.2em]">VENCORP</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © 2024 Stacia Corp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
