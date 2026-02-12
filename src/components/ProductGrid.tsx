import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Filter, X } from "lucide-react";
import { Product, Gender, genderFilters, subCategories } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle: string;
}

const ProductGrid = ({ products, title, subtitle }: ProductGridProps) => {
  const [selectedGender, setSelectedGender] = useState<Gender | "all">("all");
  const [selectedSub, setSelectedSub] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = products.filter((p) => {
    if (selectedGender !== "all" && p.gender !== selectedGender) return false;
    if (selectedSub !== "all" && p.subCategory !== selectedSub) return false;
    return true;
  });

  const currentSubCategories = selectedGender !== "all" ? subCategories[selectedGender] : [];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-3">
            {subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
        </motion.div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground"
          >
            <Filter size={16} /> Filters
            {(selectedGender !== "all" || selectedSub !== "all") && (
              <span className="w-2 h-2 bg-accent rounded-full" />
            )}
          </button>
        </div>

        {/* Filters */}
        <motion.div
          initial={false}
          animate={{ height: showFilters || typeof window !== "undefined" ? "auto" : 0 }}
          className={`${showFilters ? "block" : "hidden"} md:block mb-8`}
        >
          {/* Gender tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => { setSelectedGender("all"); setSelectedSub("all"); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedGender === "all"
                  ? "bg-gradient-gold text-primary shadow-lg"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              All
            </button>
            {genderFilters.map((g) => (
              <button
                key={g.value}
                onClick={() => { setSelectedGender(g.value); setSelectedSub("all"); }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedGender === g.value
                    ? "bg-gradient-gold text-primary shadow-lg"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Sub-category tabs */}
          <AnimatePresence>
            {currentSubCategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2"
              >
                <button
                  onClick={() => setSelectedSub("all")}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedSub === "all"
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All
                </button>
                {currentSubCategories.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSelectedSub(s.value)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedSub === s.value
                        ? "bg-foreground text-background"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && (
                      <span className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold uppercase rounded">
                        New
                      </span>
                    )}
                    {product.discount && (
                      <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-[10px] font-bold rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <button className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-md">
                      <Heart size={14} className="text-foreground" />
                    </button>
                    <button className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-md">
                      <ShoppingBag size={14} className="text-primary" />
                    </button>
                  </div>

                  {/* Category label */}
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2 py-0.5 bg-background/80 backdrop-blur-sm text-[10px] font-medium text-foreground rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-medium text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm font-semibold text-foreground">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-xs text-muted-foreground line-through">{product.originalPrice}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
            <button
              onClick={() => { setSelectedGender("all"); setSelectedSub("all"); }}
              className="mt-4 text-accent hover:underline text-sm font-medium"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
