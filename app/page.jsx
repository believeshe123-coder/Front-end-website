import Link from "next/link";

const services = [
  "Scheduling and calendar updates",
  "Customer calls and follow-up",
  "Invoices, estimates, and QuickBooks help",
  "Job notes, reminders, and office organization",
];

const steps = [
  {
    title: "Tell us how your jobs run",
    text: "We learn your service area, schedule, billing process, and the way you like customers handled.",
  },
  {
    title: "We handle the daily office work",
    text: "Calls get answered, jobs get scheduled, invoices go out, and follow-ups do not fall through the cracks.",
  },
  {
    title: "You stay focused on the work",
    text: "You get clear updates and practical support without adding another full-time person to payroll.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Office support for service businesses
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              You handle the work. We&apos;ll handle the office.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Scheduling, customer calls, invoicing, and follow-up for growing
              contractors and home service businesses that need dependable help,
              not another complicated system.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Get office help
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                See services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/80">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1100&q=80"
              alt="Contractor working in a service room"
              className="h-80 w-full object-cover sm:h-[28rem]"
            />
            <div className="bg-white p-6">
              <p className="font-semibold text-slate-950">Built for busy workdays</p>
              <p className="mt-2 text-slate-600">
                Phone calls, calendar updates, invoices, and customer details
                handled by someone who understands field service work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Practical office support that keeps jobs moving.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-blue-600" />
                <h3 className="text-lg font-bold text-slate-950">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8" id="how-it-works">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Simple setup. Clear communication. Steady follow-through.
            </h2>
          </div>
          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-bold text-blue-700">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8" id="pricing">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-blue-100 bg-blue-50 p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Start with the office help you actually need.
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Most businesses begin with weekly support for calls, scheduling,
              invoicing, and follow-up. We can talk through your workload and
              recommend a straightforward plan.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-black text-slate-950">Custom</p>
            <p className="mt-3 text-slate-600">
              Based on call volume, scheduling needs, bookkeeping support, and
              weekly office tasks.
            </p>
            <Link href="/contact" className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
              Ask for pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
