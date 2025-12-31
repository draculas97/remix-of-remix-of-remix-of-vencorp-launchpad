import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const productLinks = [
  { name: "Pragati", href: "/pragati", desc: "AI-powered validation" },
  { name: "Stello", href: "/stello", desc: "Back-office automation" },
  { name: "Edifai", href: "/edifai", desc: "Adaptive learning" },
  { name: "Interllexia", href: "/interllexia", desc: "Co-founder matching" },
  { name: "GINE", href: "/gine", desc: "IP marketplace" },
  { name: "Job Portal", href: "/job-portal", desc: "Talent network" },
  { name: "Tezzaract", href: "/tezzaract", desc: "3D marketplace" },
  { name: "Built by Stacia", href: "/built-by-stacia", desc: "Premium websites" },
];

const resourceLinks = [
  { name: "Documentation", href: "/documentation" },
  { name: "API Reference", href: "/api-reference" },
  { name: "Status", href: "/status" },
  { name: "Support", href: "/support" },
  { name: "Press", href: "/press" },
  { name: "Blog", href: "/blog" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { user, logout } = useAuth();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && isHome) {
      e.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 64;
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const DropdownMenu = ({ 
    title, 
    items, 
    showDesc = false 
  }: { 
    title: string; 
    items: { name: string; href: string; desc?: string }[];
    showDesc?: boolean;
  }) => {
    const isActive = openDropdown === title;
    
    return (
      <div 
        className="relative"
        onMouseEnter={() => setOpenDropdown(title)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button 
          className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          {title}
          <ChevronDown size={12} className={`transition-transform ${isActive ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className={`absolute top-full left-0 mt-2 ${showDesc ? 'w-64' : 'w-48'} py-2 rounded-xl border border-border/60 bg-popover shadow-lg z-50`}
            >
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                >
                  <span className="font-mono text-xs text-foreground">{item.name}</span>
                  {showDesc && item.desc && (
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40"
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-xl font-bold tracking-[0.15em] group-hover:tracking-[0.2em] transition-all">VENCORP</span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground border-l border-border/60 pl-3">BY STACIA</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <DropdownMenu title="Products" items={productLinks} showDesc />
          </li>
          {companyLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <DropdownMenu title="Resources" items={resourceLinks} />
          </li>
          {isHome && (
            <>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollClick(e, "#pricing")}
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#enquiry"
                  onClick={(e) => handleScrollClick(e, "#enquiry")}
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <span className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                <User size={14} />
                {user.name}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full font-mono text-xs tracking-wider gap-2"
                onClick={logout}
              >
                <LogOut size={14} />
                Logout
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="rounded-full font-mono text-xs tracking-wider">
                Login / SSO
              </Button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/40 bg-background lg:hidden"
          >
            <div className="container py-6 max-h-[80vh] overflow-y-auto">
              {/* Products */}
              <div className="mb-6">
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-3">Products</p>
                <ul className="grid grid-cols-2 gap-2">
                  {productLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <span className="font-mono text-sm">{link.name}</span>
                        {link.desc && (
                          <p className="text-xs text-muted-foreground">{link.desc}</p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mb-6">
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-3">Company</p>
                <ul className="flex gap-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="font-mono text-sm hover:text-foreground text-muted-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="mb-6">
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-3">Resources</p>
                <ul className="grid grid-cols-2 gap-2">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border/40">
                {user ? (
                  <div className="space-y-3">
                    <span className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                      <User size={14} />
                      {user.name}
                    </span>
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full font-mono text-xs tracking-wider gap-2"
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut size={14} />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full rounded-full font-mono text-xs tracking-wider">
                      Login / SSO
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
