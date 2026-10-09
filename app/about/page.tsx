"use client";

import { useStore } from "@/components/store-provider";

export default function DashboardPage() {
  const { user } = useStore();

  const stats = [
    { label: "Orders", value: "18" },
    { label: "Wishlist", value: "7" },
    { label: "Saved money", value: "$420" },
  ];

  const recentOrders = [
    { id: "#1048", item: "Velvet Luxe Blazer", status: "Shipped" },
    { id: "#1042", item: "Aster Running Sneaker", status: "Delivered" },
    { id: "#1037", item: "Monarch Leather Tote", status: "Processing" },
  ];

  if (!user) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-stone-900">Please login first</h1>
        <p className="mt-4 text-stone-600">Your dashboard is available after authentication.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Dashboard</p>
        <h1 className="mt-2 text-4xl font-black text-stone-900">Welcome back, {user.name}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-stone-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
        <h2 className="text-2xl font-black text-stone-900">Recent orders</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
          <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
            <thead className="bg-stone-50 text-stone-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Order</th>
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-3 font-medium text-stone-800">{order.id}</td>
                  <td className="px-4 py-3 text-stone-600">{order.item}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
