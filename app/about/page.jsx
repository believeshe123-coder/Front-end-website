import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const values = [
  {
    title: "Field-first support",
    text: "We keep the office moving so owners and crews can stay focused on customers, job sites, and quality work.",
    icon: "▣",
  },
  {
    title: "Clear communication",
    text: "Calls, schedules, estimates, invoices, and follow-ups are handled with the same dependable tone your customers expect.",
    icon: "☎",
  },
  {
    title: "Built around your process",
    text: "We can work inside your QuickBooks and existing systems, or help organize the workflow when you need a cleaner setup.",
    icon: "◆",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <PageHero
        eyebrow="About"
        title="The dependable office manager your crew can count on."
        description="We support contractors and home service businesses with the office work that keeps jobs moving: answering calls, scheduling, sending invoices, following up with customers, and keeping the details organized."
        primaryHref="/services"
        primaryLabel="See what we handle"
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Small business owner reviewing work at a desk"
        kicker="Office help from people who understand service businesses."
      />

      <section className="bg-stone-50 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">How we help</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-blue-950">
              Practical support for the work that piles up after the job is done.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Your business does not need more complexity. It needs a steady office partner who can help protect your time, improve follow-through, and make each customer interaction feel professional.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-2xl font-black text-white shadow-lg shadow-blue-700/20">{value.icon}</div>
                <h3 className="text-base font-black text-blue-950">{value.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl bg-blue-50 p-8 shadow-inner ring-1 ring-blue-100 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-blue-950">We become part of your daily rhythm.</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Whether your biggest need is phones, scheduling, bookkeeping support, recruiting coordination, or marketing follow-up, we shape the support around your priorities and keep the handoff simple.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg shadow-blue-950/10">
            <p className="text-4xl text-blue-700">☏</p>
            <h3 className="mt-2 text-lg font-black text-blue-950">Ready for a smoother office?</h3>
            <p className="mt-2 leading-7 text-slate-700">Tell us what is taking time away from the field, and we will map out a practical support plan.</p>
            <Link href="/contact" className="mt-5 inline-flex rounded-lg bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">Let&apos;s Talk</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
