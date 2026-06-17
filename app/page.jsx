import Link from "next/link";

const industryCards = [
  { title: "Trades & Home Services", services: ["Electricians", "Plumbers", "HVAC", "Roofers", "Contractors"] },
  { title: "Beauty & Wellness", services: ["Hair Stylists", "Barbers", "Nail Technicians", "Estheticians"] },
  { title: "Personal Services", services: ["Pet Groomers", "Detailers", "Trainers"] },
  { title: "Professional Services", services: ["Insurance", "Accounting", "Medical", "Real Estate"] },
];

const supportOffers = [
  { title: "Call management", text: "Keep customer calls answered, messages captured, and leads followed up before they move on." },
  { title: "Scheduling and dispatching", text: "Keep your schedule, appointments, routes, and crew updates organized throughout the day." },
  { title: "Financial support", text: "Keep estimates, invoices, reminders, and customer accounts moving without losing your evenings." },
  { title: "Marketing support", text: "Keep reviews, social posts, lead tracking, and follow-up campaigns from falling behind." },
  { title: "Recruiting help or temp management", text: "Keep hiring details, applicants, interviews, and temporary workforce coordination organized." },
  { title: "Business growth", text: "Keep your processes, reporting, retention, and next steps clearer as your business grows." },
  { title: "Custom support", text: "Build a flexible support plan around the office tasks taking the most time from your day." },
];

const trustItems = [
  "U.S. Based Support",
  "Reliable & Dependable",
  "Built for Busy Service Pros",
  "Your Business Treated With Care",
];

const comparisonRows = [
  ["Missed Calls", "Calls Answered"],
  ["Late Estimates", "Faster Quotes"],
  ["Forgotten Follow Ups", "Consistent Customer Contact"],
  ["Late Invoices", "Organized Billing"],
  ["Owner Doing Everything", "Office Support Team"],
];

const commonSupportAreas = [
  "Answering customer calls",
  "Scheduling appointments",
  "Sending estimates",
  "Following up with customers",
  "Managing invoices",
  "Keeping calendars organized",
];

const howItWorks = [
  { label: "Step 1", title: "Learn Your Business", text: "We learn your services, customers, pricing, software, and workflow." },
  { label: "Step 2", title: "Handle Office Tasks", text: "Calls, scheduling, estimates, invoices, customer communication, and follow-up." },
  { label: "Step 3", title: "Help You Grow", text: "You spend more time serving customers and less time buried in office work." },
];

const testimonials = [
  { quote: "Field Office helped us stay on top of scheduling and customer communication while we focused on the work.", name: "Service Business Owner" },
  { quote: "Our missed calls dropped, follow-up got easier, and our customers got faster answers.", name: "Home Services Owner" },
  { quote: "Having office support made growth feel organized instead of overwhelming.", name: "Appointment-Based Business Owner" },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section hero-home">
        <div className="hero-home-image" aria-hidden="true" />
        <div className="hero-home-overlay" aria-hidden="true" />
        <div className="hero-grid hero-home-grid">
          <div className="hero-home-content">
            <p className="eyebrow">Office support for service businesses</p>
            <h1 className="hero-title hero-title-large">Remote Office Support For Service Businesses</h1>
            <p className="hero-copy">
              Stop losing time to calls, scheduling, estimates, invoices, and follow-up. Field Office gives growing service businesses the office support they need without the cost of hiring a full office staff.
            </p>
            <div className="action-row">
              <Link href="/contact" className="btn-primary">Get a Quote</Link>
              <Link href="/services" className="btn-secondary">See Services</Link>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-black leading-tight text-blue-950">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-700">✓</span><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-home-callout rounded-xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-blue-950/15 backdrop-blur">
            <div className="flex items-center gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 text-2xl font-black text-blue-700">✓</div><p className="text-base font-black leading-7 text-blue-950">Office support built around your calls, your schedule, and your customers.<span className="block text-blue-700">So your time stays focused in the field.</span></p></div>
          </div>
        </div>
      </section>

      <section className="site-section-tight bg-stone-50" id="industries">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Service businesses we help</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Office support for the businesses your customers count on.</h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industryCards.map((industry) => (
              <article key={industry.title} className="content-card industry-card">
                <h3 className="text-2xl font-black tracking-tight text-blue-950">{industry.title}</h3>
                <ul className="mt-5 grid gap-2">
                  {industry.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 rounded-lg bg-blue-50/70 px-3 py-2 font-bold text-blue-950"><span className="text-blue-700">✓</span>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center"><Link href="/who-we-service" className="btn-primary inline-flex">Explore who we service</Link></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">For growing owners</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">You&apos;re Great At The Work. The Office Is What Slows Growth.</h2>
          </div>
          <div className="space-y-4 text-lg font-semibold leading-8 text-slate-700">
            <p>You can only answer so many calls while on a job.</p>
            <p>You can only send estimates after hours for so long.</p>
            <p>You can only handle scheduling, invoicing, customer follow-up, and paperwork by yourself until something gets missed.</p>
            <p className="font-black text-blue-950">Field Office helps growing service businesses stay organized, respond faster, and serve more customers without hiring a full office staff.</p>
            <Link href="/contact" className="btn-primary inline-flex">Get A Quote</Link>
          </div>
        </div>
      </section>

      <section className="site-section bg-stone-50" id="office-costs">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-[13px]">Business Growing?</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-4xl">Why Field Office Works</h2>
          </div>
          <div className="comparison-table mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10">
            <div className="grid grid-cols-2 bg-blue-700 text-sm font-black uppercase tracking-[0.18em] text-white"><div className="p-4">Before Field Office</div><div className="p-4">With Field Office</div></div>
            {comparisonRows.map(([before, after]) => (
              <div key={before} className="grid grid-cols-2 border-t border-slate-200 text-lg font-black"><div className="p-4 text-slate-600">{before}</div><div className="p-4 text-blue-950">{after}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-stretch">
          <div className="content-card flex flex-col bg-white">
            <p className="eyebrow text-[13px]">Office support</p>
            <h3 className="mt-3 text-[30px] font-black leading-tight tracking-tight text-blue-950 sm:text-[34px]">When You&apos;re Too Busy To Handle Everything Yourself</h3>
            <p className="mt-4 text-base font-semibold leading-7 text-slate-700">If your phone rings while you&apos;re on a job, paperwork piles up after hours, or customer follow-up keeps falling behind, we can help.</p>
            <p className="mt-5 text-base font-black leading-7 text-blue-950">Common areas your business can hand off:</p>
            <div className="mt-3 grid gap-3">{commonSupportAreas.map((area) => <div key={area} className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-[15px] font-black leading-6 text-blue-950 shadow-sm sm:text-base">{area}</div>)}</div>
            <Link href="/services" className="btn-primary mt-6 inline-flex w-fit">Explore Support Options</Link>
          </div>
          <div className="content-card flex flex-col bg-white" id="how-it-works">
            <p className="eyebrow text-[13px]">Process</p>
            <h3 className="mt-3 text-[30px] font-black leading-tight tracking-tight text-blue-950 sm:text-[34px]">A simple way to get office work off your plate.</h3>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {howItWorks.map((step, index) => (
                <article key={step.title} className="number-card relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">{step.label}</div>
                  <div className="mt-4 text-6xl font-black text-blue-100">{index + 1}</div>
                  <h4 className="mt-4 text-xl font-black leading-tight text-blue-950">{step.title}</h4>
                  <p className="mt-3 text-[15px] font-semibold leading-6 text-slate-700 sm:text-base">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-stone-50" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="eyebrow">Support we offer</p><h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">Choose the office help your business needs most.</h2></div>
          <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">{supportOffers.map((offer) => <article key={offer.title} className="content-card min-w-[18rem] snap-start md:min-w-[23rem]"><h3 className="text-xl font-black text-blue-950">{offer.title}</h3><p className="mt-2 leading-7 text-slate-700">{offer.text}</p></article>)}</div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Customer trust</p><h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Support that helps owners stay focused.</h2></div><div className="mt-7 grid gap-5 md:grid-cols-3">{testimonials.map((testimonial) => <article key={testimonial.quote} className="content-card"><div className="text-xl text-amber-500">★★★★★</div><p className="mt-4 text-lg font-semibold leading-8 text-slate-700">&quot;{testimonial.quote}&quot;</p><p className="mt-4 font-black text-blue-950">— {testimonial.name}</p></article>)}</div></div>
      </section>

      <section className="site-section-bottom">
        <div className="feature-panel mx-auto bg-blue-50 text-center ring-blue-100">
          <h2 className="text-3xl font-black tracking-tight text-blue-950">Ready for reliable support?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Tell us what your business needs help with, and get a practical quote for office support.</p>
          <Link href="/contact" className="btn-primary mt-5 inline-flex px-8 hover:bg-blue-800">Get A Quote</Link>
        </div>
      </section>
    </div>
  );
}
