export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Contact us</p>
          <h1 className="mt-3 text-4xl font-black text-stone-900">We’re here to help</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-stone-600">
            <p><strong className="text-stone-900">Email:</strong> hello@velora.com</p>
            <p><strong className="text-stone-900">Phone:</strong> +966 55 123 4567</p>
            <p><strong className="text-stone-900">Location:</strong> Riyadh, Saudi Arabia</p>
            <p className="leading-7">For order updates, styling support, or general questions, our team is happy to assist.</p>
          </div>

          <form className="space-y-4">
            <input className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Your name" />
            <input className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Email address" />
            <textarea rows={5} className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="How can we help?" />
            <button className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-brand-600">
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
