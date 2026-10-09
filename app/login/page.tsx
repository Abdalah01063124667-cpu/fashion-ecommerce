"use client";

import Link from "next/link";
import { useStore } from "@/components/store-provider";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <ShoppingBag className="mx-auto mb-6 text-stone-300" size={56} />
        <h1 className="text-4xl font-black text-stone-900">Your bag is empty</h1>
        <p className="mt-4 text-stone-600">Start with one of our signature essentials.</p>
        <Link href="/products" className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 font-semibold text-white hover:bg-brand-600">
          Shop now
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Cart</p>
        <h1 className="mt-2 text-4xl font-black text-stone-900">Your selected pieces</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft">
              <img src={item.image} alt={item.name} className="h-28 w-24 rounded-2xl object-cover" />
              <div className="flex flex-1 items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-stone-900">{item.name}</p>
                  <p className="mt-1 text-sm text-stone-500">${item.price} each</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-stone-200 px-2 py-1.5">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1"><Minus size={14} /></button>
                    <span className="min-w-5 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="rounded-full bg-red-50 p-2 text-red-500 hover:bg-red-100">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-soft">
          <h2 className="text-2xl font-black text-stone-900">Order summary</h2>
          <div className="mt-6 space-y-4 text-sm text-stone-700">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex items-center justify-between"><span>Shipping</span><span>Calculated at checkout</span></div>
            <div className="flex items-center justify-between pt-4 text-lg font-black text-stone-900 border-t border-stone-200"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
          </div>

          <Link href="/checkout" className="mt-6 block rounded-full bg-stone-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-brand-600">
            Proceed to checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}
