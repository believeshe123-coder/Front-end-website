import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const serviceGroups = [
  {
    title: "Trades & Home Services",
    description: "Field teams and owner-operators who need calls, schedules, dispatching, estimates, and follow-up handled while they are on jobs.",
    services: ["Electricians", "Plumbers", "HVAC", "Landscapers", "Handymen", "Roofers", "Painters", "Mobile Mechanics", "General Contractors"],
  },
  {
    title: "Beauty & Wellness",
    description: "Appointment-based businesses that need polished client communication, calendar support, reminders, and follow-up without hiring a full front desk.",
    services: ["Hair Salons", "Independent Hair Stylists", "Nail Salons", "Nail Technicians", "Estheticians", "Lash Artists", "Massage Therapists", "Barbers", "Makeup Artists"],
  },
  {
    title: "Personal Services",
    description: "Local service providers balancing hands-on work, customer requests, recurring appointments, and the daily admin that keeps everything organized.",
    services: ["Pet Groomers", "Dog Trainers", "House Cleaners", "Organizers", "Mobile Detailers", "Personal Trainers"],
  },
  {
    title: "Healthcare & Professional Services",
    description: "Small professional offices that need dependable administrative support, client follow-up, appointment coordination, and organized records.",
    services: ["Chiropractors", "Therapists", "Small Medical Offices", "Accountants", "Tax Preparers", "Insurance Agents", "Real Estate Teams"],
  },
];

export default function WhoWeServicePage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <PageHero
        eyebrow="Who we service"
        title="Support for small service businesses that are growing fast."
        description="We work with service businesses that are too small for a full office staff but too busy to do everything themselves. If customers, appointments, paperwork, and follow-up are pulling you away from the work, we can help."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Small business team reviewing office tasks together"
        primaryHref="/contact"
        primaryLabel="Request a quote"
        kicker="Built for busy service businesses"
      />

      <section className="bg-stone-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">Businesses we help</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950">From field crews to appointment-based professionals.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">These are common examples, but our support can be customized for almost any service business that needs reliable office help.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/10 md:p-8">
                <h3 className="text-3xl font-black tracking-tight text-blue-950">{group.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{group.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.services.map((service) => (
                    <li key={service} className="rounded-lg border border-blue-100 bg-blue-50/70 px-4 py-3 font-bold text-blue-950">{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-blue-700 p-8 text-center text-white shadow-2xl shadow-blue-950/15 md:p-10">
          <h2 className="text-3xl font-black tracking-tight">Not seeing your exact business?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-blue-50">If you serve customers and need help with calls, scheduling, follow-up, paperwork, or growth tasks, we can build a practical support plan around your day-to-day needs.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-white px-9 py-4 text-sm font-black text-blue-950 shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50">Talk with us</Link>
        </div>
      </section>
    </div>
  );
}
