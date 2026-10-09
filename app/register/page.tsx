"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useStore } from "@/components/store-provider";

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useStore();
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setUser({ name: "Sarah Ali", email, role: "customer" });
    router.push("/");
  };

  return (
    <main className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Welcome back</p>
          <h1 className="mt-2 text-3xl font-black text-stone-900">Login to Velora</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block space-y-2 text-sm font-medium text-stone-700">
            <span>Email address</span>
            <input name="email" type="email" className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="name@example.com" />
          </label>

          <label className="block space-y-2 text-sm font-medium text-stone-700">
            <span>Password</span>
            <input name="password" type="password" className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="••••••••" />
          </label>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button type="submit" className="w-full rounded-full bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-brand-600">
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-stone-600">
          Don’t have an account? <Link href="/register" className="font-semibold text-brand-600">Create one</Link>
        </p>
      </div>
    </main>
  );
}
