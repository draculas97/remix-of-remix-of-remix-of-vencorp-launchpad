import { motion } from "framer-motion";
import { ArrowLeft, Box, Palette, ShoppingBag, Sparkles, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: <Box size={24} />,
    title: "5000+ 3D Products",
    description: "Browse our extensive catalog of high-quality 3D models and custom designs. From home decor to industrial prototypes.",
  },
  {
    icon: <Palette size={24} />,
    title: "Custom Designs",
    description: "Commission unique 3D designs tailored to your specifications. Our network of artists brings your vision to life.",
  },
  {
    icon: <Users size={24} />,
    title: "Artist Community",
    description: "200+ verified artists earning lifetime revenue from their designs. Join us and monetize your 3D skills.",
  },
];

const categories = [
  { name: "Home Decor", products: 1200 },
  { name: "Lighting", products: 450 },
  { name: "Planters", products: 320 },
  { name: "Accessories", products: 890 },
  { name: "Furniture", products: 560 },
  { name: "Industrial", products: 780 },
];

const stats = [
  { value: "5000+", label: "Products" },
  { value: "200+", label: "Artists" },
  { value: "50K+", label: "Downloads" },
];

export default function TezzaractPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-foreground text-background">
      <Navbar />
      <div className="pt-16">
        {/* Hero - Dark Theme */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, hsl(280 100% 60% / 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-tezzaract/20 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-8">
              <ArrowLeft size={16} />
              <span className="font-mono text-xs uppercase tracking-wider">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-tezzaract/30 bg-tezzaract/10 mb-6">
                <Box size={14} className="text-tezzaract" />
                <span className="font-mono text-xs text-tezzaract tracking-wider uppercase">
                  TEZZARACT // The Dimension
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Where Imagination<br />
                <span className="text-tezzaract">Meets Dimension.</span>
              </h1>

              <p className="text-xl text-background/70 max-w-2xl mb-8">
                Bringing your ideas to life with high-quality 3D models and custom designs. 
                Explore innovation in every dimension!
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://tezzaract.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-8 gap-2 bg-tezzaract hover:bg-tezzaract/90 text-foreground">
                    <ShoppingBag size={18} />
                    Explore Now
                  </Button>
                </a>
                <a href="https://tezzaract.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-background/20 text-background hover:bg-background/10">
                    Join as Artist
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-background/10">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-tezzaract">{stat.value}</div>
                    <div className="font-mono text-xs text-background/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={ref} className="py-24 sm:py-32 bg-background/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-background/10 bg-background/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tezzaract/10 text-tezzaract mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-background/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Browse Categories
              </h2>
              <p className="text-background/60">
                Discover 3D products across multiple categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {categories.map((category, index) => (
                <motion.a
                  key={category.name}
                  href="https://tezzaract.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl border border-background/10 bg-background/5 text-center group cursor-pointer hover:border-tezzaract/30 transition-colors"
                >
                  <h4 className="font-bold mb-1">{category.name}</h4>
                  <p className="font-mono text-sm text-tezzaract">{category.products} products</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Artist CTA */}
        <section className="py-24 sm:py-32 bg-background text-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles size={32} className="text-tezzaract mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Got 3D skills? We've got the perfect space for your creations!
              </h2>
              <p className="text-muted-foreground mb-8">
                Join us and earn lifetime revenue from your designs! Simply upload your 3D creations, 
                and every time they sell, you get paid—again and again.
              </p>
              <a href="https://tezzaract.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 gap-2 bg-tezzaract hover:bg-tezzaract/90 text-foreground">
                  Join as Artist
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
