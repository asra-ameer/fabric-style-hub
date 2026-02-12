import productSaree from "@/assets/product-saree.jpg";
import productShalwar from "@/assets/product-shalwar.jpg";
import productTops from "@/assets/product-tops.jpg";
import productFabric from "@/assets/product-fabric.jpg";
import productKurta from "@/assets/product-kurta-men.jpg";
import productSarong from "@/assets/product-sarong-men.jpg";
import productModernDress from "@/assets/product-modern-dress.jpg";
import productKidsTraditional from "@/assets/product-kids-traditional.jpg";

export type Gender = "women" | "men" | "kids";
export type SubCategory = string;

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  category: string;
  subCategory: SubCategory;
  gender: Gender;
  image: string;
  isNew?: boolean;
  isFlatOffer?: boolean;
}

export const genderFilters: { value: Gender; label: string }[] = [
  { value: "women", label: "Women" },
  { value: "men", label: "Men" },
  { value: "kids", label: "Kids" },
];

export const subCategories: Record<Gender, { value: string; label: string }[]> = {
  women: [
    { value: "saree", label: "Sarees" },
    { value: "shalwar", label: "Shalwar Kameez" },
    { value: "tops", label: "Tops" },
    { value: "modern-dress", label: "Modern Dress" },
    { value: "fabric", label: "Fabric" },
  ],
  men: [
    { value: "kurta", label: "Kurta" },
    { value: "sarong", label: "Sarong" },
    { value: "shirt", label: "Shirts" },
    { value: "fabric", label: "Fabric" },
  ],
  kids: [
    { value: "boy-traditional", label: "Boys Traditional" },
    { value: "boy-casual", label: "Boys Casual" },
    { value: "girl-traditional", label: "Girls Traditional" },
    { value: "girl-casual", label: "Girls Casual" },
    { value: "girl-frock", label: "Girls Frock" },
  ],
};

export const allProducts: Product[] = [
  // Women
  { id: 1, name: "Banarasi Silk Saree", price: "LKR 4,500", category: "Sarees", subCategory: "saree", gender: "women", image: productSaree, isNew: true },
  { id: 2, name: "Kanjivaram Saree", price: "LKR 6,800", category: "Sarees", subCategory: "saree", gender: "women", image: productSaree },
  { id: 3, name: "Cotton Saree", price: "LKR 2,200", originalPrice: "LKR 3,500", discount: 37, category: "Sarees", subCategory: "saree", gender: "women", image: productSaree, isFlatOffer: true },
  { id: 4, name: "Embroidered Shalwar Kameez", price: "LKR 3,200", category: "Shalwar Kameez", subCategory: "shalwar", gender: "women", image: productShalwar, isNew: true },
  { id: 5, name: "Printed Shalwar Set", price: "LKR 2,800", originalPrice: "LKR 4,000", discount: 30, category: "Shalwar Kameez", subCategory: "shalwar", gender: "women", image: productShalwar, isFlatOffer: true },
  { id: 6, name: "Cotton Blend Top", price: "LKR 1,200", category: "Tops", subCategory: "tops", gender: "women", image: productTops },
  { id: 7, name: "Embroidered Top", price: "LKR 1,800", category: "Tops", subCategory: "tops", gender: "women", image: productTops, isNew: true },
  { id: 8, name: "Floral Modern Dress", price: "LKR 2,500", category: "Modern Dress", subCategory: "modern-dress", gender: "women", image: productModernDress, isNew: true },
  { id: 9, name: "Evening Gown", price: "LKR 4,200", originalPrice: "LKR 6,000", discount: 30, category: "Modern Dress", subCategory: "modern-dress", gender: "women", image: productModernDress, isFlatOffer: true },
  { id: 10, name: "Premium Silk Fabric", price: "LKR 800/m", category: "Fabric", subCategory: "fabric", gender: "women", image: productFabric },
  { id: 11, name: "Chiffon Fabric", price: "LKR 600/m", originalPrice: "LKR 900/m", discount: 33, category: "Fabric", subCategory: "fabric", gender: "women", image: productFabric, isFlatOffer: true },

  // Men
  { id: 12, name: "Royal Blue Kurta", price: "LKR 2,800", category: "Kurta", subCategory: "kurta", gender: "men", image: productKurta, isNew: true },
  { id: 13, name: "Embroidered Sherwani", price: "LKR 5,500", category: "Kurta", subCategory: "kurta", gender: "men", image: productKurta },
  { id: 14, name: "Cotton Kurta", price: "LKR 1,500", originalPrice: "LKR 2,500", discount: 40, category: "Kurta", subCategory: "kurta", gender: "men", image: productKurta, isFlatOffer: true },
  { id: 15, name: "Traditional Sarong", price: "LKR 1,200", category: "Sarong", subCategory: "sarong", gender: "men", image: productSarong, isNew: true },
  { id: 16, name: "Silk Sarong", price: "LKR 2,000", originalPrice: "LKR 3,000", discount: 33, category: "Sarong", subCategory: "sarong", gender: "men", image: productSarong, isFlatOffer: true },
  { id: 17, name: "Formal Shirt", price: "LKR 1,800", category: "Shirts", subCategory: "shirt", gender: "men", image: productKurta },
  { id: 18, name: "Linen Fabric", price: "LKR 700/m", category: "Fabric", subCategory: "fabric", gender: "men", image: productFabric, isNew: true },

  // Kids
  { id: 19, name: "Boys Kurta Set", price: "LKR 1,200", category: "Boys Traditional", subCategory: "boy-traditional", gender: "kids", image: productKidsTraditional, isNew: true },
  { id: 20, name: "Boys Casual Shirt", price: "LKR 800", originalPrice: "LKR 1,200", discount: 33, category: "Boys Casual", subCategory: "boy-casual", gender: "kids", image: productKidsTraditional, isFlatOffer: true },
  { id: 21, name: "Girls Lehenga Set", price: "LKR 1,800", category: "Girls Traditional", subCategory: "girl-traditional", gender: "kids", image: productKidsTraditional, isNew: true },
  { id: 22, name: "Girls Casual Top", price: "LKR 600", category: "Girls Casual", subCategory: "girl-casual", gender: "kids", image: productKidsTraditional },
  { id: 23, name: "Party Frock", price: "LKR 1,500", originalPrice: "LKR 2,200", discount: 32, category: "Girls Frock", subCategory: "girl-frock", gender: "kids", image: productKidsTraditional, isFlatOffer: true },
  { id: 24, name: "Floral Frock", price: "LKR 1,000", category: "Girls Frock", subCategory: "girl-frock", gender: "kids", image: productKidsTraditional, isNew: true },
];
