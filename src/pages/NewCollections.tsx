import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { allProducts } from "@/data/products";
import heroImage from "@/assets/hero-new-collection.jpg";

const NewCollections = () => {
  const newProducts = allProducts.filter((p) => p.isNew);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <img src={heroImage} alt="New Collections" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-4"
          >
            New <span className="text-gradient-gold italic">Collections</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-primary-foreground/70 max-w-lg mx-auto"
          >
            Discover the latest arrivals across all categories
          </motion.p>
        </div>
      </section>

      <ProductGrid
        products={newProducts}
        title="Just Arrived"
        subtitle="Fresh & Trending"
      />
      <Footer />
    </div>
  );
};

export default NewCollections;
