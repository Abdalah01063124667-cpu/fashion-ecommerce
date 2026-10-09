import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { ShoppingBag, Star } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/store-provider";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const product = products.find((entry) => entry.slug === params.slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((entry) => entry.category === product.category && entry.id !== product.id).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-sm text-stone-500">
        <Link href="/products" className="hover:text-brand-600">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-800">{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.name} className="h-[320px] w-full rounded-[1.75rem] object-cover shadow-soft" />
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{product.category}</p>
            <h1 className="mt-3 text-4xl font-black text-stone-900">{product.name}</h1>
          </div>

          <div className="flex items-center gap-3 text-sm text-stone-600">
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={15} fill="currentColor" />
              <span className="font-semibold text-stone-900">{product.rating}</span>
            </div>
            <span>({product.reviews} reviews)</span>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">In stock</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-stone-900">${product.price}</div>
            {product.originalPrice && <div className="text-xl text-stone-400 line-through">${product.originalPrice}</div>}
          </div>

          <p className="text-lg leading-8 text-stone-600">{product.description}</p>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Colors</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span key={color} className="rounded-full border border-stone-200 px-3 py-2 text-sm text-stone-700">
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span key={size} className="rounded-full border border-stone-200 px-3 py-2 text-sm text-stone-700">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <AddToCartButton product={product} />
            <button className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-800 transition hover:border-brand-300 hover:text-brand-600">
              Save for later
            </button>
          </div>

          <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
            <h3 className="text-lg font-bold text-stone-900">Why you’ll love it</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li>• Premium materials with a refined finish</li>
              <li>• Designed for versatile styling across seasons</li>
              <li>• Easy sizing and comfortable everyday wear</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-black text-stone-900">You may also like</h2>
          <Link href="/products" className="text-sm font-semibold text-stone-700 hover:text-brand-600">View all →</Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function AddToCartButton({ product }: { product: (typeof products)[number] }) {
  "use client";

  const { addToCart } = useStore();

  return (
    <button
      onClick={() => addToCart(product)}
      className="flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-brand-600"
    >
      <ShoppingBag size={17} />
      Add to Cart
    </button>
  );
}
