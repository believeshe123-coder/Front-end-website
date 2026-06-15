import Link from "next/link";

const industries = [
  { label: "HVAC", icon: "✽" },
  { label: "Plumbing", icon: "♒" },
  { label: "Electrical", icon: "ϟ" },
  { label: "Landscaping", icon: "♧" },
  { label: "Cleaning", icon: "♜" },
  { label: "Painting", icon: "▰" },
  { label: "And More", icon: "•••" },
];

const supportOffers = [
  { title: "Call management", text: "Professional call support, messages, customer follow-up, and clear communication so every lead is handled well.", icon: "☎" },
  { title: "Scheduling and dispatching", text: "Appointment scheduling, route coordination, crew updates, and daily dispatch support that keeps jobs moving.", icon: "▦" },
  { title: "Financial support", text: "Connect us to your software, or use our system for estimates, invoices, reminders, and organized customer accounts.", icon: "$" },
  { title: "Marketing support", text: "Social posts, review requests, lead tracking, follow-up campaigns, and help keeping your business visible.", icon: "↗" },
  { title: "Recruiting help or temp management", text: "Job postings, applicant tracking, interview scheduling, candidate communication, and temporary workforce coordination.", icon: "♙" },
  { title: "Business growth", text: "Reporting, process improvement, customer retention, and support that helps you make the next smart move.", icon: "▥" },
  { title: "Custom support", text: "A flexible support plan built around the exact office tasks your business needs off your plate.", icon: "◆" },
];

const trustItems = [
  { title: "U.S. Based Support", icon: "👥" },
  { title: "Reliable & Dependable", icon: "◇" },
  { title: "Built for Busy Service Pros", icon: "▣" },
  { title: "We Treat Your Business Like Ours", icon: "♡" },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="relative border-b border-blue-100 bg-[radial-gradient(circle_at_top_left,#eef6ff,transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">Office support for service businesses</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
              You handle the work.
              <span className="relative mt-1 block text-blue-700">We&apos;ll handle the office.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-slate-700">
              We help contractors and small businesses stay organized, serve more customers, and grow with confidence without the overhead of hiring in-house.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-lg bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">See Our Services</Link>
              <Link href="/contact" className="rounded-lg border-2 border-blue-600 bg-white px-7 py-4 text-sm font-black text-blue-950 transition hover:-translate-y-0.5 hover:bg-blue-50">Request a Quote</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-center gap-3 text-sm font-black leading-tight text-blue-950">
                  <span className="text-3xl text-blue-700">{item.icon}</span><span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1300&q=85" alt="Smiling service professional standing by a work van" className="h-[30rem] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 left-10 right-10 rounded-xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-blue-950/15 backdrop-blur">
              <div className="flex items-center gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 text-2xl text-blue-700">♙</div><p className="text-base font-black leading-7 text-blue-950">Professional office support from people who understand the trades.<span className="block text-blue-700">So you can stay focused in the field.</span></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-8 lg:px-8" id="how-we-work">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-black tracking-tight text-blue-950">We support the businesses that keep things running.</h2>
          <div className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
            {industries.map((industry, index) => (
              <div key={industry.label} className={`flex flex-col items-center gap-2 ${index ? "lg:border-l lg:border-slate-300" : ""}`}><span className="text-4xl font-black text-blue-700">{industry.icon}</span><span className="text-sm font-black text-blue-950">{industry.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">Support we offer</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">Choose the office help your business needs most.</h2>
          </div>
          <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:thin]">
            {supportOffers.map((offer) => (
              <article key={offer.title} className="min-w-[18rem] snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/10 md:min-w-[24rem]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-2xl font-black text-white shadow-lg shadow-blue-700/20">{offer.icon}</div>
                <h3 className="text-xl font-black text-blue-950">{offer.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto rounded-2xl bg-blue-50 p-8 text-center shadow-inner ring-1 ring-blue-100">
          <h2 className="text-3xl font-black tracking-tight text-blue-950">Ready for reliable support?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Tell us what you need help with, and we will put together a practical quote for your business.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-blue-700 px-9 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}
