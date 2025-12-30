import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import EngineeringSection from "@/components/EngineeringSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <ProductGrid />
        <EngineeringSection />
        <Footer />
      </div>
    </main>
  );
}
