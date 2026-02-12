import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-foreground to-foreground/90 p-12 md:p-20 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-gold opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <p className="text-sm font-medium tracking-[0.4em] uppercase text-gold-light mb-4 relative z-10">
            Limited Time Offer
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4 relative z-10">
            Flat 30% Off
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-8 max-w-md mx-auto relative z-10">
            On all new arrivals. Use code <span className="font-bold text-gold-light">RANG30</span> at checkout.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-10 py-4 bg-gradient-gold text-primary font-semibold text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity relative z-10"
          >
            Shop Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
