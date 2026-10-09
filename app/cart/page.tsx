"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/components/store-provider";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useStore();
  const [submitted, setSubmitted] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => router.push("/dashboard"), 1200);
  };

  if (!cart.length && !submitted) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-stone-900">Your cart is empty</h1>
        <p className="mt-4 text-stone-600">Choose a few pieces and come back to complete your checkout.</p>
        <Link href="/products" className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 font-semibold text-white hover:bg-brand-600">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Checkout</p>
        <h1 className="mt-2 text-4xl font-black text-stone-900">Complete your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-stone-700">
              <span>First name</span>
              <input required className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Your first name" />
            </label>
            <label className="space-y-2 text-sm font-medium text-stone-700">
              <span>Last name</span>
              <input required className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Your last name" />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-stone-700">
            <span>Email address</span>
            <input required type="email" className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="name@example.com" />
          </label>

          <label className="space-y-2 text-sm font-medium text-stone-700">
            <span>Shipping address</span>
            <textarea required rows={4} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Street, city, postal code" />
          </label>

          <label className="space-y-2 text-sm font-medium text-stone-700">
            <span>Card number</span>
            <input required className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="4242 4242 4242 4242" />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-stone-700">
              <span>Expiry</span>
              <input required className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="12/29" />
            </label>
            <label className="space-y-2 text-sm font-medium text-stone-700">
              <span>CVC</span>
              <input required className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="123" />
            </label>
          </div>

          <button type="submit" className="w-full rounded-full bg-stone-900 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-600">
            {submitted ? "Order placed" : "Pay now"}
          </button>
        </form>

        <aside className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-soft">
          <h2 className="text-2xl font-black text-stone-900">Order summary</h2>
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-white p-3">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-stone-900">{item.name}</p>
                  <p className="text-sm text-stone-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold text-stone-900">${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-stone-200 pt-4 text-sm text-stone-700">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex items-center justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            <div className="flex items-center justify-between text-lg font-black text-stone-900"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
