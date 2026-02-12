import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { allProducts } from "@/data/products";
import heroImage from "@/assets/hero-flat-offer.jpg";

const FlatOffer = () => {
  const offerProducts = allProducts.filter((p) => p.isFlatOffer);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <img src={heroImage} alt="Flat Offers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="inline-block px-4 py-1.5 bg-destructive text-destructive-foreground text-sm font-bold uppercase rounded-full mb-4">
              Limited Time
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-4"
          >
            Flat <span className="text-gradient-gold italic">Offers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-primary-foreground/70 max-w-lg mx-auto"
          >
            Up to 40% off on selected items — grab them before they're gone!
          </motion.p>
        </div>
      </section>

      <ProductGrid
        products={offerProducts}
        title="Hot Deals"
        subtitle="Save Big Today"
      />
      <Footer />
    </div>
  );
};

export default FlatOffer;
