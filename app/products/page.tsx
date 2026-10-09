import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string; search?: string };
}) {
  const category = searchParams?.category;
  const search = searchParams?.search?.toLowerCase() ?? "";

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = search ? product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search) : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Shop</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Premium wardrobe essentials</h1>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            { label: "All", value: "" },
            { label: "Women", value: "women" },
            { label: "Men", value: "men" },
            { label: "Accessories", value: "accessories" },
            { label: "Shoes", value: "shoes" },
          ].map((link) => (
            <Link
              key={link.value || "all"}
              href={link.value ? `/products?category=${link.value}` : "/products"}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === link.value || (!category && !link.value)
                  ? "bg-stone-900 text-white"
                  : "border border-stone-300 bg-white text-stone-700 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-stone-600">{filteredProducts.length} items available</p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:border-brand-400 md:w-72"
            />
            <button className="rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
