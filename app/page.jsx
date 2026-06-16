import Link from "next/link";

const industries = [
  { label: "Trades & Home Services", icon: "⌂" },
  { label: "Beauty & Wellness", icon: "✦" },
  { label: "Personal Services", icon: "◈" },
  { label: "Healthcare & Professional Services", icon: "+" },
];

const supportOffers = [
  { title: "Call management", text: "Professional call support, messages, customer follow-up, and clear communication so every lead is handled well." },
  { title: "Scheduling and dispatching", text: "Appointment scheduling, route coordination, crew updates, and daily dispatch support that keeps jobs moving." },
  { title: "Financial support", text: "Connect us to your software, or use our system for estimates, invoices, reminders, and organized customer accounts." },
  { title: "Marketing support", text: "Social posts, review requests, lead tracking, follow-up campaigns, and help keeping your business visible." },
  { title: "Recruiting help or temp management", text: "Job postings, applicant tracking, interview scheduling, candidate communication, and temporary workforce coordination." },
  { title: "Business growth", text: "Reporting, process improvement, customer retention, and support that helps you make the next smart move." },
  { title: "Custom support", text: "A flexible support plan built around the exact office tasks your business needs off your plate." },
];

const trustItems = [
  { title: "U.S. Based Support", icon: "👥" },
  { title: "Reliable & Dependable", icon: "◇" },
  { title: "Built for Busy Service Pros", icon: "▣" },
  { title: "We Treat Your Business Like Ours", icon: "♡" },
];

const officeCosts = [
  "Missed calls = lost jobs",
  "Late invoices = delayed cash flow",
  "Poor scheduling = wasted drive time",
  "Administrative work = evenings and weekends lost",
];

const howItWorks = [
  {
    title: "We Learn Your Business",
    items: ["Your services", "Your pricing", "Your customers", "Your scheduling process"],
  },
  {
    title: "We Become Your Office Team",
    items: ["Answer calls", "Schedule jobs", "Send estimates", "Follow up with customers"],
  },
  {
    title: "You Focus on the Work",
    items: ["More jobs", "Better customer service", "Less administrative stress"],
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section">
        <div className="hero-grid lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="eyebrow">Office support for service businesses</p>
            <h1 className="hero-title hero-title-large">
              You handle the work.
              <span className="relative mt-1 block text-blue-700">We&apos;ll handle the office.</span>
            </h1>
            <p className="hero-copy">
              Your office manager, dispatcher, scheduler, and customer service team—all for less than hiring one employee.
            </p>
            <div className="action-row">
              <Link href="/services" className="btn-primary">See Our Services</Link>
              <Link href="/who-we-service" className="btn-secondary">Who We Service</Link>
              <Link href="/contact" className="btn-secondary">Request a Quote</Link>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-center gap-3 text-sm font-black leading-tight text-blue-950">
                  <span className="text-3xl text-blue-700">{item.icon}</span><span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
              <img src="/images/d2f3a19b-8350-428d-8070-88f224a99d10.png" alt="Office support specialist taking notes while answering a customer call" className="h-[22rem] w-full object-cover lg:h-[26rem]" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-blue-950/15 backdrop-blur lg:left-8 lg:right-8">
              <div className="flex items-center gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 text-2xl text-blue-700">♙</div><p className="text-base font-black leading-7 text-blue-950">Professional office support from people who understand the trades.<span className="block text-blue-700">So you can stay focused in the field.</span></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section-tight bg-stone-50" id="how-we-work">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-black tracking-tight text-blue-950">We support the businesses that keep things running.</h2>
          <div className="mt-5 grid grid-cols-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={industry.label} className={`flex flex-col items-center gap-2 ${index ? "lg:border-l lg:border-slate-300" : ""}`}><span className="text-4xl font-black text-blue-700">{industry.icon}</span><span className="text-sm font-black text-blue-950">{industry.label}</span></div>
            ))}
          </div>
          <Link href="/who-we-service" className="btn-primary mt-6 inline-flex">Explore who we service</Link>
        </div>
      </section>

      <section className="site-section bg-white" id="office-costs">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">The cost of doing it all yourself</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">What does office work cost you?</h2>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-slate-700">
              Field Office gives you a complete office team without payroll, benefits, training, or management headaches.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {officeCosts.map((cost) => (
              <div key={cost} className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-lg font-black leading-7 text-blue-950 shadow-sm">
                {cost}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-tight bg-stone-50" id="how-it-works">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="content-card bg-white">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">How do these people actually work with my business?</h2>
            <p className="mt-4 leading-7 text-slate-700">
              We plug into the way you already operate, learn your systems, and become the steady office support behind the hands that built our industries.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="content-card relative overflow-hidden">
                <div className="absolute -right-4 -top-6 text-8xl font-black text-blue-50">{index + 1}</div>
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-black text-white">{index + 1}</div>
                  <h3 className="mt-4 text-xl font-black leading-tight text-blue-950">{step.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm font-semibold leading-6 text-slate-700">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-2"><span className="text-blue-700">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Support we offer</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">Choose the office help your business needs most.</h2>
          </div>
          <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {supportOffers.map((offer) => (
              <article key={offer.title} className="content-card min-w-[18rem] snap-start md:min-w-[23rem]">
                <h3 className="text-xl font-black text-blue-950">{offer.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-bottom">
        <div className="feature-panel mx-auto bg-blue-50 text-center ring-blue-100">
          <h2 className="text-3xl font-black tracking-tight text-blue-950">Ready for reliable support?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Tell us what you need help with, and we will put together a practical quote for your business.</p>
          <Link href="/contact" className="btn-primary mt-5 inline-flex px-8 hover:bg-blue-800">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}
