"use client";

import { Heart, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useStore } from "@/components/store-provider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  return (
    <div className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img src={product.images[0]} alt={product.name} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-stone-800">
            {product.badge}
          </span>
        )}
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-stone-700 shadow-sm transition hover:text-brand-600">
          <Heart size={17} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">{product.category}</p>
            <Link href={`/products/${product.slug}`} className="mt-2 block text-xl font-bold text-stone-900 hover:text-brand-600">
              {product.name}
            </Link>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-stone-900">${product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-stone-400 line-through">${product.originalPrice}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-stone-600">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="font-semibold text-stone-800">{product.rating}</span>
          </div>
          <span>({product.reviews}) reviews</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.colors.slice(0, 3).map((color) => (
            <span key={color} className="rounded-full border border-stone-200 px-2 py-1 text-xs text-stone-600">
              {color}
            </span>
          ))}
        </div>

        <button
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-4 py-3 font-semibold text-white transition hover:bg-brand-600"
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
