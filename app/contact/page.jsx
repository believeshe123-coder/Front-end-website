import { PageHero } from "@/components/PageHero";

const contactHighlights = [
  "Tell us what is taking the most time",
  "We will talk through your current systems",
  "You will get a practical support plan",
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <PageHero
        eyebrow="Contact"
        title="Tell us what is piling up at the office."
        description="Share what you need help with: calls, scheduling, invoicing, follow-up, QuickBooks, or general office organization. We will keep the conversation simple and practical."
        primaryHref="/services"
        primaryLabel="Review services"
        image="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Person answering a business phone at a desk"
        kicker="A simple first conversation with no complicated handoff."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {contactHighlights.map((highlight) => (
            <div key={highlight} className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-black leading-6 text-blue-950">
              <span className="mr-2 text-blue-700">●</span>{highlight}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-stone-50 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">Start here</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-blue-950">
              Send a few details and we&apos;ll help sort out the next step.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              You do not need a perfect plan before reaching out. Tell us where the office work is getting stuck, and we will help identify the support that would make the biggest difference first.
            </p>
            <div className="mt-8 rounded-xl bg-white p-6 shadow-lg shadow-blue-950/10 ring-1 ring-slate-200">
              <p className="text-4xl text-blue-700">☎</p>
              <h3 className="mt-2 text-lg font-black text-blue-950">Built for busy owners</h3>
              <p className="mt-2 leading-7 text-slate-700">We keep the conversation direct, useful, and focused on the work you need off your plate.</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-8">
            <label className="grid gap-2 text-sm font-black text-blue-950">
              Name
              <input className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-black text-blue-950">
              Email or phone
              <input className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="How should we reach you?" />
            </label>
            <label className="grid gap-2 text-sm font-black text-blue-950">
              What do you need help with?
              <textarea className="min-h-36 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Calls, scheduling, invoices, follow-up..." />
            </label>
            <button type="button" className="rounded-lg bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
