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

const services = [
  {
    title: "Office Management",
    text: "Calls, scheduling, follow-ups, estimates, invoices, and daily admin handled for you.",
    icon: "☎",
    color: "from-blue-700 to-blue-500",
  },
  {
    title: "Financial Support",
    text: "We work in your QuickBooks (or ours) to keep your books accurate and up to date.",
    icon: "qb",
    color: "from-green-600 to-green-400",
  },
  {
    title: "Marketing Support",
    text: "From social media to local ads, we help you get noticed and attract more customers.",
    icon: "↗",
    color: "from-amber-400 to-orange-300",
  },
  {
    title: "Recruiting Help",
    text: "We help you find, screen, and hire great team members who fit your business.",
    icon: "♚",
    color: "from-purple-600 to-fuchsia-400",
  },
  {
    title: "Business Growth",
    text: "Systems, reporting, and support that help you stay organized and grow with confidence.",
    icon: "▥",
    color: "from-sky-600 to-indigo-400",
  },
  {
    title: "Custom Support",
    text: "Every business is different. We build a support plan that fits your needs.",
    icon: "◆",
    color: "from-orange-600 to-orange-400",
  },
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
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">
              Office support for service businesses
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
              You handle the work.
              <span className="relative mt-1 block text-blue-700">
                We&apos;ll handle the office.
                <svg className="absolute -bottom-3 right-2 hidden h-5 w-56 text-blue-600 sm:block" viewBox="0 0 230 18" fill="none" aria-hidden="true">
                  <path d="M3 13C58 4 128 3 226 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-slate-700">
              We help contractors and home service businesses stay organized,
              serve more customers, and grow with confidence—<em>without</em> the
              overhead of hiring in-house.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-lg bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">
                See Our Services
              </Link>
              <Link href="/contact" className="rounded-lg border-2 border-blue-600 bg-white px-7 py-4 text-sm font-black text-blue-950 transition hover:-translate-y-0.5 hover:bg-blue-50">
                ☎ Talk to Our Team
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-center gap-3 text-sm font-black leading-tight text-blue-950">
                  <span className="text-3xl text-blue-700">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1300&q=85"
                alt="Smiling service professional standing by a work van"
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-10 right-10 rounded-xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-blue-950/15 backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 text-2xl text-blue-700">♙</div>
                <p className="text-base font-black leading-7 text-blue-950">
                  Professional office support from people who understand the trades.
                  <span className="block text-blue-700">So you can stay focused in the field.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-8 lg:px-8" id="how-we-work">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-black tracking-tight text-blue-950">We support the businesses that keep things running.</h2>
          <div className="mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
            {industries.map((industry, index) => (
              <div key={industry.label} className={`flex flex-col items-center gap-2 ${index ? "lg:border-l lg:border-slate-300" : ""}`}>
                <span className="text-4xl font-black text-blue-700">{industry.icon}</span>
                <span className="text-sm font-black text-blue-950">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8" id="services">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-blue-950">
              More than just office help.
              <span className="block text-blue-700">A better way to run your business.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              We take care of the behind-the-scenes work that takes up your time
              so you can focus on your customers and your crew.
            </p>
            <ul className="mt-7 space-y-4 text-base font-semibold text-blue-950">
              {[
                "We can use your QuickBooks (or ours)—your choice.",
                "We become part of your team.",
                "You get more done, with less stress.",
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-blue-700">●</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-xl font-black text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-base font-black text-blue-950">{service.title}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8" id="resources">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl bg-blue-50 p-8 shadow-inner ring-1 ring-blue-100 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex gap-6">
            <div className="relative hidden sm:block"><span className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-3xl font-black text-white shadow-lg">qb</span></div>
            <div>
              <h2 className="text-xl font-black text-blue-950">We work in your QuickBooks or ours—your choice.</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
                Already using QuickBooks? Great—we&apos;ll use it. Not using a system yet?
                We&apos;ve got you covered. Either way, we keep your business running smoothly.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-blue-200 lg:border-l lg:pl-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-4xl text-blue-700">☏</p>
              <h3 className="mt-2 text-lg font-black text-blue-950">Ready for reliable office support?</h3>
              <p className="mt-2 leading-7 text-slate-700">Let&apos;s talk about how we can help your business run smoother and grow.</p>
            </div>
            <Link href="/contact" className="shrink-0 rounded-lg bg-blue-700 px-9 py-4 text-center text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">Let&apos;s Talk</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
