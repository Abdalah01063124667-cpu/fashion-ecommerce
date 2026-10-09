export const categories = [
  { name: "Women", slug: "women" },
  { name: "Men", slug: "men" },
  { name: "Accessories", slug: "accessories" },
  { name: "Shoes", slug: "shoes" },
  { name: "New Arrivals", slug: "new-arrivals" },
  { name: "Sale", slug: "sale" },
];

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  stock: number;
  badge?: string;
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Velvet Luxe Blazer",
    slug: "velvet-luxe-blazer",
    category: "women",
    price: 179,
    originalPrice: 240,
    rating: 4.9,
    reviews: 182,
    colors: ["Sand", "Black", "Moss"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 14,
    badge: "Bestseller",
    description: "A sharp, structured blazer crafted from premium velvet-touch fabric for work-to-dinner polish.",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 2,
    name: "Coastal Knit Set",
    slug: "coastal-knit-set",
    category: "women",
    price: 148,
    rating: 4.8,
    reviews: 125,
    colors: ["Mist", "Cream", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
    badge: "New",
    description: "An elevated knit duo designed for comfort and effortless layering during every season.",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 3,
    name: "Modern Street Jacket",
    slug: "modern-street-jacket",
    category: "men",
    price: 195,
    originalPrice: 260,
    rating: 4.7,
    reviews: 210,
    colors: ["Charcoal", "Olive", "Stone"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 17,
    badge: "Trending",
    description: "A lightweight jacket made for city movement, featuring a clean silhouette and utility detailing.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 4,
    name: "Classic Premium Tee",
    slug: "classic-premium-tee",
    category: "men",
    price: 58,
    rating: 4.8,
    reviews: 96,
    colors: ["White", "Black", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    stock: 48,
    description: "A timeless everyday tee with a relaxed fit and premium cotton for soft, breathable comfort.",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 5,
    name: "Aurora Sunglasses",
    slug: "aurora-sunglasses",
    category: "accessories",
    price: 92,
    rating: 4.6,
    reviews: 88,
    colors: ["Gold", "Black", "Rose"],
    sizes: ["One Size"],
    stock: 22,
    badge: "Limited",
    description: "Statement sunglasses with a refined frame and UV400 protection for sunny days in style.",
    images: [
      "https://images.unsplash.com/photo-1577803947579-9f7e3be63d0d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 6,
    name: "Monarch Leather Tote",
    slug: "monarch-leather-tote",
    category: "accessories",
    price: 136,
    originalPrice: 180,
    rating: 4.9,
    reviews: 131,
    colors: ["Walnut", "Black", "Camel"],
    sizes: ["One Size"],
    stock: 13,
    description: "A structured tote with premium vegan leather finishes and generous everyday storage.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 7,
    name: "Aster Running Sneaker",
    slug: "aster-running-sneaker",
    category: "shoes",
    price: 168,
    rating: 4.8,
    reviews: 204,
    colors: ["White", "Coral", "Jet"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    stock: 31,
    badge: "Hot",
    description: "A lightweight performance sneaker built with breathable mesh and soft cushioning for all-day comfort.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 8,
    name: "Harbor Slip Dress",
    slug: "harbor-slip-dress",
    category: "women",
    price: 134,
    rating: 4.7,
    reviews: 112,
    colors: ["Black", "Wine", "Emerald"],
    sizes: ["XS", "S", "M", "L"],
    stock: 26,
    description: "A sleek evening essential with fluid drape, subtle shine, and a flattering satin finish.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 9,
    name: "Noir Utility Shirt",
    slug: "noir-utility-shirt",
    category: "men",
    price: 88,
    rating: 4.6,
    reviews: 73,
    colors: ["Black", "Stone", "Camo"],
    sizes: ["S", "M", "L", "XL"],
    stock: 40,
    description: "A utility-inspired shirt with a premium cotton blend and precision functional pockets.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 10,
    name: "Crescent Crossbody",
    slug: "crescent-crossbody",
    category: "accessories",
    price: 74,
    rating: 4.7,
    reviews: 143,
    colors: ["Ivory", "Toffee", "Black"],
    sizes: ["One Size"],
    stock: 36,
    description: "A compact, versatile crossbody with a polished silhouette and effortless everyday utility.",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 11,
    name: "Dune Leather Boots",
    slug: "dune-leather-boots",
    category: "shoes",
    price: 214,
    originalPrice: 285,
    rating: 4.9,
    reviews: 170,
    colors: ["Tan", "Chestnut", "Black"],
    sizes: ["37", "38", "39", "40", "41", "42", "43"],
    stock: 15,
    badge: "Featured",
    description: "Premium ankle boots crafted with a soft leather finish and a refined everyday heel.",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 12,
    name: "Eclipse Cashmere Shawl",
    slug: "eclipse-cashmere-shawl",
    category: "women",
    price: 118,
    rating: 4.8,
    reviews: 94,
    colors: ["Plum", "Taupe", "Cream"],
    sizes: ["S", "M", "L"],
    stock: 27,
    description: "A luxurious wrap designed for layering, warmth, and polished finishing touches.",
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const featuredProducts = products.filter((product) => product.badge || product.id <= 6);
