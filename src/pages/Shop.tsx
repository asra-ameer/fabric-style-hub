import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { allProducts } from "@/data/products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ProductGrid
          products={allProducts}
          title="Our Shop"
          subtitle="Browse Everything"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
