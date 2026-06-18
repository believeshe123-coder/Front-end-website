"use client";

import { useState } from "react";

const businessTypes = [
  "Contractor",
  "Electrician",
  "Plumber",
  "HVAC",
  "Landscaping",
  "Cleaning Service",
  "Mobile Service Business",
  "Salon / Barber",
  "Professional Services",
  "Other",
];

const employeeCounts = ["Just Me", "2–5", "6–10", "11–25", "26+"];

const supportOptions = [
  "Answering Customer Calls",
  "Scheduling & Dispatching",
  "Estimates & Quotes",
  "Invoicing & Billing",
  "Customer Follow-Up",
  "Marketing Support",
  "Recruiting Assistance",
  "Administrative Support",
  "Other",
];

const supportLevels = [
  "A Few Hours Per Week",
  "Ongoing Weekly Support",
  "Daily Office Support",
  "Full Office Coverage",
  "Not Sure Yet",
];

const monthlyBudgets = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
  "Not Sure Yet",
];

const inputClass = "rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100";
const fieldLabelClass = "grid gap-2 text-sm font-black text-blue-950";
const optionLabelClass = "flex items-center gap-3 rounded-lg bg-white p-3 font-semibold text-blue-950 shadow-sm";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Get a quote</p>
          <h1 className="hero-title">Request A Quote</h1>
          <p className="hero-copy mx-auto">Tell us about your business and the support you need so we can build a custom plan that makes sense for you.</p>
        </div>
      </section>

      <section className="site-section bg-stone-50">
        {submitted ? (
          <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-8">
            <p className="eyebrow text-amber-700">Request received</p>
            <h2 className="text-3xl font-black tracking-tight text-blue-950 md:text-4xl">Thank you for reaching out.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">We&apos;ll review your quote request and follow up to learn more about your business, answer any questions, and discuss the support options that make the most sense for your needs.</p>
          </div>
        ) : (
          <form action="mailto:believeshe123@gmail.com" method="post" encType="text/plain" onSubmit={() => setSubmitted(true)} className="mx-auto grid max-w-4xl gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
            <div className="grid gap-2">
              <p className="eyebrow text-amber-700">Business Information</p>
              <h2 className="text-2xl font-black tracking-tight text-blue-950">Request A Quote</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className={fieldLabelClass}>Full Name (Required)<input name="Full Name" required className={inputClass} placeholder="Your full name" /></label>
              <label className={fieldLabelClass}>Business Name (Required)<input name="Business Name" required className={inputClass} placeholder="Your business name" /></label>
              <label className={fieldLabelClass}>Email Address (Required)<input name="Email Address" type="email" required className={inputClass} placeholder="you@example.com" /></label>
              <label className={fieldLabelClass}>Phone Number (Required)<input name="Phone Number" type="tel" required className={inputClass} placeholder="(555) 555-5555" /></label>
              <label className={`${fieldLabelClass} md:col-span-2`}>Website (Optional)<input name="Website" type="url" className={inputClass} placeholder="https://yourbusiness.com" /></label>
            </div>

            <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">Tell Us About Your Business</legend>
              <p className="text-sm font-black text-blue-950">What type of business do you operate?</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {businessTypes.map((type) => (
                  <label key={type} className={optionLabelClass}><input name="Business Type" value={type} type="radio" className="h-5 w-5 accent-blue-700" />{type}</label>
                ))}
              </div>
            </fieldset>

            <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">Business Size</legend>
              <p className="text-sm font-black text-blue-950">How many employees does your business have?</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {employeeCounts.map((count) => (
                  <label key={count} className={optionLabelClass}><input name="Employee Count" value={count} type="radio" className="h-5 w-5 accent-blue-700" />{count}</label>
                ))}
              </div>
            </fieldset>

            <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">What Support Are You Looking For?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {supportOptions.map((support) => (
                  <label key={support} className={optionLabelClass}><input name="Support Needed" value={support} type="checkbox" className="h-5 w-5 accent-blue-700" />{support}</label>
                ))}
              </div>
            </fieldset>

            <label className={fieldLabelClass}>What&apos;s Taking Up The Most Of Your Time?<textarea name="Biggest Time Challenge" className={`${inputClass} min-h-40`} placeholder="I spend too much time answering calls while I'm on jobs and following up on invoices after hours." /></label>

            <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">How Much Support Do You Need?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {supportLevels.map((level) => (
                  <label key={level} className={optionLabelClass}><input name="Support Level" value={level} type="radio" className="h-5 w-5 accent-blue-700" />{level}</label>
                ))}
              </div>
            </fieldset>

            <fieldset className="grid gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <legend className="px-2 text-sm font-black uppercase tracking-[0.2em] text-blue-700">Expected Monthly Budget</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {monthlyBudgets.map((budget) => (
                  <label key={budget} className={optionLabelClass}><input name="Expected Monthly Budget" value={budget} type="radio" className="h-5 w-5 accent-blue-700" />{budget}</label>
                ))}
              </div>
            </fieldset>

            <label className={fieldLabelClass}>Anything Else We Should Know?<textarea name="Additional Details" className={`${inputClass} min-h-40`} placeholder="Tell us about your business, your goals, or any challenges you'd like help with." /></label>

            <button type="submit" className="btn-primary">Get My Custom Support Plan</button>
            <p className="text-sm leading-6 text-slate-600">Submitting opens your email app and addresses the request to believeshe123@gmail.com.</p>
          </form>
        )}

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
          <div className="grid gap-2">
            <p className="eyebrow text-amber-700">Online quote form</p>
            <h2 className="text-2xl font-black tracking-tight text-blue-950">Complete Our Google Form</h2>
            <p className="text-base leading-7 text-slate-700">Prefer to submit through Google Forms? Fill out the embedded form below and we&apos;ll follow up with you.</p>
          </div>

          <iframe
            src="https://forms.gle/fePzmKzUmRxgtbZ4A?embedded=true"
            title="Google quote request form"
            className="min-h-[720px] w-full rounded-xl border border-blue-100 bg-slate-50"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
}
