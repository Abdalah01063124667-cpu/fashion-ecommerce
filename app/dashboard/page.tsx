"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useStore } from "@/components/store-provider";

export default function RegisterPage() {
  const router = useRouter();
  const { setUser } = useStore();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");

    setUser({ name: name || "New Customer", email, role: "customer" });
    router.push("/");
  };

  return (
    <main className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Create account</p>
          <h1 className="mt-2 text-3xl font-black text-stone-900">Join Velora</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block space-y-2 text-sm font-medium text-stone-700">
            <span>Full name</span>
            <input name="name" className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Your full name" />
          </label>

          <label className="block space-y-2 text-sm font-medium text-stone-700">
            <span>Email address</span>
            <input type="email" name="email" className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="name@example.com" />
          </label>

          <label className="block space-y-2 text-sm font-medium text-stone-700">
            <span>Password</span>
            <input type="password" className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="••••••••" />
          </label>

          <button type="submit" className="w-full rounded-full bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-brand-600">
            Create account
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-stone-600">
          Already have an account? <Link href="/login" className="font-semibold text-brand-600">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
