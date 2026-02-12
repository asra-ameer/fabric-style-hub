import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import productSaree from "@/assets/product-saree.jpg";
import productShalwar from "@/assets/product-shalwar.jpg";
import productTops from "@/assets/product-tops.jpg";
import productFabric from "@/assets/product-fabric.jpg";

const products = [
  {
    name: "Banarasi Silk Saree",
    price: "₹4,500",
    category: "Sarees",
    image: productSaree,
  },
  {
    name: "Embroidered Shalwar Kameez",
    price: "₹3,200",
    category: "Shalwar Kameez",
    image: productShalwar,
  },
  {
    name: "Cotton Blend Top",
    price: "₹1,200",
    category: "Tops",
    image: productTops,
  },
  {
    name: "Premium Silk Fabric",
    price: "₹800/m",
    category: "Fabric",
    image: productFabric,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="collections" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground">
            Featured Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background">
                  <Heart size={16} className="text-foreground" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 font-semibold">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
