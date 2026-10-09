"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, User2, Search } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/components/store-provider";

export function Header() {
  const { cart, toggleCart, user, logoutUser } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-lg font-bold text-white">
            V
          </div>
          <div>
            <div className="text-lg font-black tracking-[0.2em] text-stone-900">VELORA</div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-stone-500">Fashion House</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
          <Link href="/" className="transition hover:text-brand-600">Home</Link>
          <Link href="/products" className="transition hover:text-brand-600">Shop</Link>
          <Link href="/about" className="transition hover:text-brand-600">About</Link>
          <Link href="/contact" className="transition hover:text-brand-600">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-stone-200 p-2.5 text-stone-700 transition hover:border-brand-300 hover:text-brand-600">
            <Search size={18} />
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="flex items-center gap-2 rounded-full border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700">
                <User2 size={16} />
                {user.name}
              </Link>
              <button onClick={logoutUser} className="text-sm text-stone-500 transition hover:text-brand-600">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="flex items-center gap-2 rounded-full border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700">
              <User2 size={16} />
              Login
            </Link>
          )}

          <button
            onClick={toggleCart}
            className="relative flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            <ShoppingBag size={17} />
            Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1 text-xs font-bold text-white">
              {totalItems}
            </span>
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-stone-200 p-2 md:hidden">
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-stone-700">
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/products" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/login" onClick={() => setMobileOpen(false)}>Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}
