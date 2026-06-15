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
      <section className="relative border-b border-blue-100 bg-[radial-gradient(circle_at_top_left,#eef6ff,transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">Contact us</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-blue-950 sm:text-6xl">Request a quote</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">Fill out the form below with your business details and the support you are interested in.</p>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-16 lg:px-8">
        <form action="mailto:believeshe123@gmail.com" method="post" encType="text/plain" className="mx-auto grid max-w-4xl gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-blue-950">Name<input name="Name" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Your name" /></label>
            <label className="grid gap-2 text-sm font-black text-blue-950">Business name<input name="Business name" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Your business name" /></label>
            <label className="grid gap-2 text-sm font-black text-blue-950">Phone number<input name="Phone" type="tel" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="(555) 555-5555" /></label>
            <label className="grid gap-2 text-sm font-black text-blue-950">Email<input name="Email" type="email" required className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="you@example.com" /></label>
          </div>

          <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-5">
            <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">Services you are looking into</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {quoteServices.map((service) => (
                <label key={service} className="flex items-center gap-3 rounded-lg bg-white p-3 font-semibold text-blue-950 shadow-sm"><input name="Services" value={service} type="checkbox" className="h-5 w-5 accent-blue-700" />{service}</label>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2 text-sm font-black text-blue-950">Expected price range<select name="Expected price range" className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"><option value="">Select a range</option><option>Under $500/month</option><option>$500 - $1,000/month</option><option>$1,000 - $2,500/month</option><option>$2,500+/month</option><option>Not sure yet</option></select></label>
          <label className="grid gap-2 text-sm font-black text-blue-950">Anything else we should know?<textarea name="Additional details" className="min-h-36 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Tell us about your business, current software, biggest needs, timeline, etc." /></label>
          <button type="submit" className="rounded-lg bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800">Send quote request</button>
          <p className="text-sm leading-6 text-slate-600">Submitting opens your email app and addresses the request to believeshe123@gmail.com.</p>
        </form>
      </section>
    </div>
  );
}
