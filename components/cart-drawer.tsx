"use client";

import Link from "next/link";
import { ArrowUpRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useStore } from "@/components/store-provider";

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-stone-950/40">
      <div className="absolute right-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
          <h2 className="text-xl font-bold text-stone-900">Your Cart</h2>
          <button onClick={toggleCart} className="text-sm font-medium text-stone-500">Close</button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-stone-500">
              <ShoppingBag size={48} className="mb-4 text-stone-300" />
              <p className="text-lg font-medium text-stone-700">Your cart is empty.</p>
              <p className="mt-2 text-sm">Add some premium pieces to continue.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-2xl border border-stone-200 p-3">
                <img src={item.image} alt={item.name} className="h-24 w-20 rounded-xl object-cover" />
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-stone-900">{item.name}</p>
                      <p className="text-sm text-stone-500">${item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-stone-400 transition hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-stone-200 px-2 py-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
                        <Minus size={14} />
                      </button>
                      <span className="min-w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-semibold text-stone-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-stone-200 px-5 py-4">
          <div className="mb-4 flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
          </div>
          <Link href="/checkout" onClick={toggleCart} className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-brand-600">
            Checkout
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
