import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fabric.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious fabric collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold-light font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Premium Fabric & Clothing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] mb-6"
          >
            Where
            <br />
            Tradition
            <br />
            Meets <span className="text-gradient-gold italic">Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-md mb-10 font-light"
          >
            Discover exquisite fabrics, sarees, shalwar kameez & tops for the whole family.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-gold text-primary font-semibold text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Explore Collection
            </Link>
            <Link
              to="/new-collections"
              className="inline-flex items-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium text-sm tracking-wide uppercase rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Shop by Category
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
