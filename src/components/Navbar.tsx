import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User, ChevronDown, Brain, Server, Sparkles, Users, Lightbulb, Briefcase, Box, Palette, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const productLinks = [
  { 
    name: "Pragati", 
    href: "/pragati", 
    externalUrl: "https://pragati.thevencorp.com",
    desc: "AI-powered validation for your ideas", 
    icon: <Brain size={20} />,
    color: "text-pragati bg-pragati/10"
  },
  { 
    name: "Stello", 
    href: "/stello", 
    desc: "Back-office automation platform", 
    icon: <Server size={20} />,
    color: "text-stello bg-stello/10"
  },
  { 
    name: "Edifai", 
    href: "/edifai", 
    externalUrl: "https://www.edifai.in",
    desc: "Adaptive learning and upskilling", 
    icon: <Sparkles size={20} />,
    color: "text-edifai bg-edifai/10"
  },
  { 
    name: "Interllexia", 
    href: "/interllexia", 
    desc: "AI co-founder matching engine", 
    icon: <Users size={20} />,
    color: "text-interllexia bg-interllexia/10"
  },
  { 
    name: "GINE", 
    href: "/gine", 
    desc: "IP marketplace for innovation", 
    icon: <Lightbulb size={20} />,
    color: "text-gine bg-gine/10"
  },
  { 
    name: "Job Portal", 
    href: "/job-portal", 
    desc: "Startup talent network", 
    icon: <Briefcase size={20} />,
    color: "text-jobportal bg-jobportal/10"
  },
  { 
    name: "Tezzaract", 
    href: "/tezzaract", 
    externalUrl: "https://tezzaract.com",
    desc: "3D asset marketplace", 
    icon: <Box size={20} />,
    color: "text-tezzaract bg-tezzaract/10"
  },
  { 
    name: "Built by Stacia", 
    href: "/built-by-stacia", 
    externalUrl: "https://www.builtbystacia.com",
    desc: "Premium website development", 
    icon: <Palette size={20} />,
    color: "text-destructive bg-destructive/10"
  },
];

const resourceLinks = [
  { name: "Documentation", href: "/documentation", desc: "Guides & tutorials" },
  { name: "API Reference", href: "/api-reference", desc: "Developer docs" },
  { name: "Status", href: "/status", desc: "System health" },
  { name: "Support", href: "/support", desc: "Get help" },
  { name: "Press", href: "/press", desc: "News & media" },
  { name: "Blog", href: "/blog", desc: "Updates & insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { user, logout } = useAuth();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

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

  const ProductsDropdown = () => {
    const isActive = openDropdown === "Products";
    
    return (
      <div 
        className="relative"
        onMouseEnter={() => setOpenDropdown("Products")}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button 
          className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
          <ChevronDown size={12} className={`transition-transform ${isActive ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] py-4 px-4 rounded-2xl border border-border/60 bg-popover shadow-xl z-50"
            >
              <div className="grid grid-cols-2 gap-2">
                {productLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="font-medium text-sm text-foreground group-hover:text-foreground block">{item.name}</span>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const ResourcesDropdown = () => {
    const isActive = openDropdown === "Resources";
    
    return (
      <div 
        className="relative"
        onMouseEnter={() => setOpenDropdown("Resources")}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button 
          className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          Resources
          <ChevronDown size={12} className={`transition-transform ${isActive ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 w-[320px] py-3 rounded-2xl border border-border/60 bg-popover shadow-xl z-50"
            >
              <div className="grid grid-cols-2 gap-1 px-2">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex flex-col p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <span className="font-medium text-sm text-foreground">{item.name}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
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
            <ProductsDropdown />
          </li>
          <li>
            <Link
              to="/about"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="https://staciacorp.com/career"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Careers
            </a>
          </li>
          <li>
            <ResourcesDropdown />
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
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

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

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
                        className="flex items-start gap-2 py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${link.color} flex-shrink-0`}>
                          {link.icon}
                        </div>
                        <div>
                          <span className="font-mono text-sm block">{link.name}</span>
                          <p className="text-xs text-muted-foreground line-clamp-1">{link.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="mb-6">
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-3">Company</p>
                <ul className="flex gap-4">
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className="font-mono text-sm hover:text-foreground text-muted-foreground transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://staciacorp.com/career"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm hover:text-foreground text-muted-foreground transition-colors"
                    >
                      Careers
                    </a>
                  </li>
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
