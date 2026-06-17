import Link from "next/link";

const industryCards = [
  "Trades & Home Services",
  "Beauty & Wellness",
  "Personal Services",
  "Professional Services",
];

const supportOffers = [
  { title: "Never Miss A Customer Call", text: "Answering calls, capturing leads, taking messages, and following up before customers move on." },
  { title: "Keep Every Job On Schedule", text: "Coordinating appointments, calendars, routes, reminders, and crew updates throughout the day." },
  { title: "Get Quotes And Invoices Out Faster", text: "Preparing estimates, organizing invoices, sending reminders, and keeping accounts moving." },
  { title: "Stay Visible After The Job Is Done", text: "Managing reviews, social posts, lead tracking, website updates, and customer follow-up campaigns." },
  { title: "Hire Without Losing Your Day", text: "Organizing applicants, interviews, candidate communication, and temporary workforce coordination." },
  { title: "Build Systems That Support Growth", text: "Improving workflows, reporting, retention tasks, and the next steps your business needs." },
  { title: "Get Support Built Around Your Business", text: "Creating a flexible support plan for the office tasks taking the most time from your day." },
];

const trustItems = [
  "U.S. Based Support",
  "Reliable & Dependable",
  "Built for Busy Service Pros",
  "Your Business Treated With Care",
];

const withoutFieldOffice = ["Missed calls", "Late invoices", "After-hours paperwork", "Customer follow-up falls behind"];

const withFieldOffice = ["Calls answered", "Invoices organized", "Scheduling handled", "Customers followed up with"];

const integrations = ["QuickBooks", "Jobber", "Housecall Pro", "ServiceTitan", "Google Calendar", "Microsoft 365", "Gmail", "Custom Systems"];

const hireAlternatives = ["No payroll taxes", "No benefits", "No hiring process", "No training a new employee", "No office overhead"];

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
        <div className="hero-grid hero-home-grid">
          <div className="hero-home-content">
            <p className="eyebrow">Office support for service businesses</p>
            <h1 className="hero-title hero-title-large">Remote Office Support For Service Businesses</h1>
            <div className="hero-copy space-y-4">
              <p>Stop losing time to calls, scheduling, estimates, invoices, and customer follow-up. Field Office provides customizable office support for growing service businesses—without the cost of hiring a full office staff.</p>
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

      <section className="site-section-tight bg-stone-50" id="industries">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl text-center">
            <p className="eyebrow">Service businesses we help</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl xl:whitespace-nowrap">Office support for the businesses your customers count on.</h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industryCards.map((industry) => (
              <article key={industry} className="content-card industry-card">
                <h3 className="text-2xl font-black tracking-tight text-blue-950">{industry}</h3>
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
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <article className="content-card border-slate-300 bg-white">
              <h3 className="text-2xl font-black tracking-tight text-slate-700">Without Field Office</h3>
              <ul className="mt-5 grid gap-3">
                {withoutFieldOffice.map((item) => (
                  <li key={item} className="rounded-xl bg-slate-100 px-4 py-3 font-black text-slate-700">{item}</li>
                ))}
              </ul>
            </article>
            <article className="content-card bg-blue-50/70 ring-1 ring-blue-100">
              <h3 className="text-2xl font-black tracking-tight text-blue-950">With Field Office</h3>
              <ul className="mt-5 grid gap-3">
                {withFieldOffice.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-4 py-3 font-black text-blue-950 shadow-sm">{item}</li>
                ))}
              </ul>
            </article>
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
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{supportOffers.map((offer) => <article key={offer.title} className="content-card"><h3 className="text-xl font-black text-blue-950">{offer.title}</h3><p className="mt-2 leading-7 text-slate-700">{offer.text}</p></article>)}</div>
        </div>
      </section>



      <section className="site-section bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <article className="content-card bg-blue-50/70">
            <p className="eyebrow">Flexible pricing</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950">Plans built around the support you need.</h2>
            <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">Flexible plans based on the support you need.</p>
            <p className="mt-3 leading-7 text-slate-700">Whether you need help answering calls, managing schedules, handling invoices, or ongoing office support, we&apos;ll build a plan around your business.</p>
          </article>
          <article className="content-card">
            <p className="eyebrow">Why not hire?</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950">Why businesses choose Field Office</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {hireAlternatives.map((item) => <li key={item} className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 font-black text-blue-950">{item}</li>)}
            </ul>
            <p className="mt-5 text-lg font-black leading-8 text-blue-950">Get experienced office support when you need it.</p>
          </article>
        </div>
      </section>

      <section className="site-section bg-stone-50">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="eyebrow">Software integrations</p><h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-blue-950">Works With The Software You Already Use</h2></div>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {integrations.map((item) => <div key={item} className="rounded-xl border border-blue-100 bg-white px-4 py-4 text-center font-black text-blue-950 shadow-sm">{item}</div>)}
          </div>
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
