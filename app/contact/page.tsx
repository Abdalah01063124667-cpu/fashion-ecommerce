export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Our story</p>
        <h1 className="mt-3 text-4xl font-black text-stone-900">Crafting modern essentials with purpose</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] overflow-hidden shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Velora studio"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-5 text-lg leading-8 text-stone-600">
          <p>At Velora, we believe clothing should do more than fill a wardrobe — it should elevate how you move through the world.</p>
          <p>Our collections combine premium fabrics, thoughtful silhouettes, and elegant details to make everyday dressing feel elevated and intentional.</p>
          <p>From curated outerwear to statement accessories, every piece is selected to help you feel confident, comfortable, and uniquely yourself.</p>
        </div>
      </div>
    </main>
  );
}
