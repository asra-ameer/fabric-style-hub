import { motion } from "framer-motion";
import catWomen from "@/assets/cat-women.jpg";
import catMen from "@/assets/cat-men.jpg";
import catKids from "@/assets/cat-kids.jpg";

const categories = [
  { name: "Women", subtitle: "Sarees, Tops & More", image: catWomen },
  { name: "Men", subtitle: "Shalwar Kameez & Kurtas", image: catMen },
  { name: "Kids", subtitle: "Colorful & Comfortable", image: catKids },
];

const CategorySection = () => {
  return (
    <section id="categories" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-3">
          Shop For Everyone
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Browse by Category
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={cat.image}
                alt={`${cat.name} collection`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm text-gold-light tracking-wider uppercase">
                {cat.subtitle}
              </p>
              <h3 className="font-serif text-3xl font-bold text-primary-foreground mt-1">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
