const quoteServices = [
  "Call management",
  "Scheduling and dispatching",
  "Financial support",
  "Marketing support",
  "Recruiting help or temp management",
  "Business growth",
  "Custom support",
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Contact us</p>
          <h1 className="hero-title">Request A Quote</h1>
          <p className="hero-copy mx-auto">Fill out the form below with your business details and the support you are interested in.</p>
        </div>
      </section>

      <section className="site-section bg-stone-50">
        <form action="mailto:believeshe123@gmail.com" method="post" encType="text/plain" className="mx-auto grid max-w-4xl gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-blue-950">Name<input name="Name" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Your name" /></label>
            <label className="grid gap-2 text-sm font-black text-blue-950">Business name<input name="Business name" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Your business name" /></label>
            <label className="grid gap-2 text-sm font-black text-blue-950">Phone number<input name="Phone" type="tel" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="(555) 555-5555" /></label>
            <label className="grid gap-2 text-sm font-black text-blue-950">Email<input name="Email" type="email" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="you@example.com" /></label>
          </div>

          <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
            <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">Services you are looking into</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {quoteServices.map((service) => (
                <label key={service} className="flex items-center gap-3 rounded-lg bg-white p-3 font-semibold text-blue-950 shadow-sm"><input name="Services" value={service} type="checkbox" className="h-5 w-5 accent-blue-700" />{service}</label>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2 text-sm font-black text-blue-950">Expected price range<select name="Expected price range" className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"><option value="">Select a range</option><option>Under $500/month</option><option>$500 - $1,000/month</option><option>$1,000 - $2,500/month</option><option>$2,500+/month</option><option>Not sure yet</option></select></label>
          <label className="grid gap-2 text-sm font-black text-blue-950">Anything else we should know?<textarea name="Additional details" className="min-h-36 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Tell us about your business, current software, biggest needs, timeline, etc." /></label>
          <button type="submit" className="btn-primary">Send quote request</button>
          <p className="text-sm leading-6 text-slate-600">Submitting opens your email app and addresses the request to believeshe123@gmail.com.</p>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 shadow-lg shadow-blue-950/5 md:p-6">
            <h2 className="text-2xl font-black tracking-tight text-blue-950">What Happens Next?</h2>
            <ol className="mt-4 grid gap-3 text-slate-700">
              <li className="flex gap-3"><span className="font-black text-blue-700">1.</span><span>Submit your request.</span></li>
              <li className="flex gap-3"><span className="font-black text-blue-700">2.</span><span>We schedule a quick conversation.</span></li>
              <li className="flex gap-3"><span className="font-black text-blue-700">3.</span><span>We build a support plan.</span></li>
              <li className="flex gap-3"><span className="font-black text-blue-700">4.</span><span>You decide if we&apos;re a good fit.</span></li>
            </ol>
          </div>
        </form>
      </section>
    </div>
  );
}
