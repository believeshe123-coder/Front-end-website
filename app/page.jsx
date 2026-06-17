import Link from "next/link";

const industryCards = [
  { title: "Trades & Home Services", text: "Electricians, Plumbers, HVAC, Roofers, Contractors, and more" },
  { title: "Beauty & Wellness", text: "Hair Stylists, Barbers, Nail Techs, Estheticians, and more" },
  { title: "Personal Services", text: "Pet Groomers, Detailers, Trainers, and more" },
  { title: "Professional Services", text: "Insurance, Accounting, Real Estate, and more" },
];

const roleCards = [
  { title: "Receptionist", text: "Calls, messages, lead intake, and customer follow-up." },
  { title: "Scheduler", text: "Appointments, calendars, routes, and crew updates." },
  { title: "Book Keeper", text: "Manage invoices, payments, records, and financial follow-up." },
  { title: "Marketing Assistant", text: "Reviews, social posts, lead follow-up, and website updates." },
  { title: "Recruiting Support", text: "Job posts, applicant tracking, interviews, and worker coordination." },
  { title: "Custom Support", text: "A flexible plan built around your business." },
];

const trustItems = [
  "U.S. Based Support",
  "Reliable & Dependable",
  "Built for Busy Service Pros",
  "Your Business Treated With Care",
];

const aboutValues = ["Honest pricing", "Clear communication", "Dependable support"];

const hireAlternatives = ["No hiring process", "No office overhead", "No benefits costs", "Support when you need it", "No payroll taxes", "Scale up or down anytime"];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section hero-home">
        <div className="hero-grid hero-home-grid">
          <div className="hero-home-content">
            <p className="eyebrow">Office support for service businesses</p>
            <h1 className="hero-title hero-title-large">Remote Office Support For Service Businesses</h1>
            <div className="hero-copy space-y-4">
              <p>Stop losing time to calls, scheduling, estimates, invoices, and customer follow-up. Field Office provides customizable office support for growing service businesses without the cost of hiring a full office staff.</p>
              <p>Whether you need help with one part of your office operations or want us to manage everything behind the scenes, we build support around the way your business operates. From answering phones and scheduling jobs to handling paperwork, invoicing, customer communication, and more, our team can take on as much or as little as you need.</p>
              <p>Keep your focus on the work in the field. We'll keep the office running.</p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-black leading-tight text-blue-950">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-700">✓</span><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-home-visual">
            <div className="hero-home-image" aria-hidden="true" />
            <div className="hero-home-callout rounded-xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-blue-950/15 backdrop-blur">
              <div className="flex items-center gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 text-2xl font-black text-blue-700">✓</div><p className="text-base font-black leading-7 text-blue-950">Office support built around your calls, your schedule, and your customers.<span className="block text-blue-700">So your time stays focused in the field.</span></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="support-showcase" id="industries">
        <div className="support-industries mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl text-center">
            <p className="eyebrow">Service businesses we help</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl xl:whitespace-nowrap">Office support for the businesses your customers count on.</h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industryCards.map((industry) => (
              <article key={industry.title} className="content-card industry-card text-center">
                <h3 className="text-xl font-black tracking-tight text-blue-950">{industry.title}</h3>
                <p className="mx-auto mt-3 max-w-64 text-base font-semibold leading-7 text-slate-700">{industry.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="roles-panel mx-auto max-w-7xl" id="roles">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Flexible office support</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-4xl">One Team. Multiple Roles.</h2>
            <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">Field Office can step in where your business needs support most. We can help answer phones, schedule jobs, follow up with customers, manage invoices, support marketing, and keep office work moving behind the scenes.</p>
          </div>
          <div className="role-card-grid mx-auto mt-7 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {roleCards.map((role) => (
              <article key={role.title} className="content-card role-card">
                <h3 className="text-xl font-black text-blue-950">{role.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{role.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-values-panel mx-auto max-w-7xl" id="about-field-office">
          <div className="about-values-copy">
            <p className="eyebrow">About Field Office</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-4xl">Built on honesty, service, and real support.</h2>
            <div className="mt-5 space-y-4 text-base font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8">
              <p>Field Office was built on the values of honesty, respect, responsibility, and service. We understand the challenges of running a small business because we’ve worked alongside the hardworking people who keep their communities running every day.</p>
              <p>Our goal is simple: help good businesses stay organized, serve their customers, and grow with confidence.</p>
              <p>When you work with us, you’re not hiring a call center or an automated service. You’re gaining a dependable support team that cares about your business, communicates clearly, and does the work we promise.</p>
            </div>
            <Link href="/about" className="btn-secondary mt-6 inline-flex px-6 py-3">Learn More About Us</Link>
          </div>
          <div className="about-values-card content-card">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">Built on real values</p>
            <ul className="mt-5 grid gap-3">
              {aboutValues.map((value) => (
                <li key={value} className="flex items-center gap-4 rounded-xl bg-blue-50/70 p-4 text-lg font-black text-blue-950">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">✓</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hire-panel mx-auto max-w-7xl">
          <div className="hire-panel-intro text-center">
            <h2 className="text-3xl font-black tracking-tight text-blue-950">Flexible Support<br />Without Hiring<br />Another Employee</h2>
            <p className="mt-4 font-semibold leading-7 text-slate-700">Get experienced office support without the cost, time, or hassle of hiring. We scale with your business.</p>
          </div>
          <ul className="hire-benefits grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {hireAlternatives.map((item) => (
              <li key={item} className="flex items-center gap-4 font-black text-blue-950"><span aria-hidden="true">✓</span>{item}</li>
            ))}
          </ul>
          <div className="hire-panel-cta text-center">
            <Link href="/contact" className="btn-primary inline-flex w-full justify-center px-8 hover:bg-blue-800">Get a Quote</Link>
            <p className="mt-4 font-semibold leading-7 text-slate-700">Let&apos;s build a plan that works for your business.</p>
          </div>
        </div>
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
