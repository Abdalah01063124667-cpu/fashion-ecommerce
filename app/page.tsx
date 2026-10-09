import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Truck, BadgeCheck } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <main>
      <section className="relative overflow-hidden bg-stone-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              <Sparkles size={14} />
              New Collection 2026
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-stone-900 sm:text-6xl">
              Premium style for every day.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
              Discover elevated essentials, statement pieces, and curated accessories designed to express your identity with ease.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
                Shop Collection
              </Link>
              <Link href="/products?category=sale" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-brand-300 hover:text-brand-600">
                View Sale
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <div className="text-2xl font-black text-stone-900">24h</div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500">dispatch</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <div className="text-2xl font-black text-stone-900">1.2k</div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Reviews</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-soft">
                <div className="text-2xl font-black text-stone-900">4.9/5</div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-brand-200/60 blur-3xl" />
            <div className="absolute -right-12 bottom-8 h-32 w-32 rounded-full bg-rose-200/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Fashion collection"
                className="h-[620px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-10 left-10 max-w-xs rounded-2xl bg-white/90 p-4 shadow-soft backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">This week</p>
                <p className="mt-2 text-2xl font-black text-stone-900">25% off</p>
                <p className="mt-1 text-sm text-stone-600">On statement outerwear & accessories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Truck, title: "Fast shipping", description: "Worldwide express delivery" },
            { icon: ShieldCheck, title: "Secure checkout", description: "Protected payments every time" },
            { icon: BadgeCheck, title: "Premium quality", description: "Curated with trusted brands" },
            { icon: ArrowRight, title: "Easy returns", description: "30-day convenient returns" },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-sm text-stone-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Featured styles</p>
            <h2 className="mt-2 text-3xl font-black text-stone-900">Best sellers this week</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-stone-700 transition hover:text-brand-600">
            Explore all products →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-stone-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr_1fr] lg:px-8">
          {[
            { label: "Women", value: "1,420+" },
            { label: "Men", value: "930+" },
            { label: "Accessories", value: "640+" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
              <div className="text-4xl font-black">{stat.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-brand-100 to-stone-100 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Newsletter</p>
              <h2 className="mt-3 text-3xl font-black text-stone-900">Get early access to drops and offers.</h2>
            </div>
            <form className="flex w-full max-w-xl gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-sm outline-none ring-0 transition focus:border-brand-400"
              />
              <button className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
