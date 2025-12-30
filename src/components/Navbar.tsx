import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Pragati", href: "#pragati" },
  { name: "Stello", href: "#stello" },
  { name: "Edifai", href: "#edifai" },
  { name: "Interllexia", href: "#interllexia" },
  { name: "GINE", href: "#gine" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40"
    >
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">BY STACIA</span>
          <span className="text-lg font-bold tracking-[0.2em]">VENCORP</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="outline" className="rounded-full font-mono text-xs tracking-wider">
            Login / SSO
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/40 bg-background md:hidden"
          >
            <div className="container py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border/40">
                <Button variant="outline" className="w-full rounded-full font-mono text-xs tracking-wider">
                  Login / SSO
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
