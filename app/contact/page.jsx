"use client";

import { useState } from "react";

const inputClass = "rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100";
const fieldLabelClass = "grid gap-2 text-sm font-black text-blue-950";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Contact us</p>
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-copy mx-auto">Have a question or need office support? Send us a quick note and we&apos;ll follow up soon.</p>
        </div>
      </section>

      <section className="site-section bg-stone-50">
        {submitted ? (
          <div className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-950/10 md:p-8">
            <p className="eyebrow text-amber-700">Message received</p>
            <h2 className="text-3xl font-black tracking-tight text-blue-950 md:text-4xl">Thank you for reaching out.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">We&apos;ll review your message and contact you soon to answer questions or talk through the support your business needs.</p>
          </div>
        ) : (
          <form action="mailto:believeshe123@gmail.com" method="post" encType="text/plain" onSubmit={() => setSubmitted(true)} className="mx-auto grid max-w-3xl gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
            <div className="grid gap-2">
              <p className="eyebrow text-amber-700">Contact Field Office</p>
              <h2 className="text-2xl font-black tracking-tight text-blue-950">Send Us A Message</h2>
              <p className="text-base leading-7 text-slate-700">Share your contact information and a short note. We&apos;ll take it from there.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className={fieldLabelClass}>Name<input name="Name" required className={inputClass} placeholder="Your name" /></label>
              <label className={fieldLabelClass}>Email<input name="Email" type="email" required className={inputClass} placeholder="you@example.com" /></label>
              <label className={fieldLabelClass}>Phone<input name="Phone" type="tel" className={inputClass} placeholder="(555) 555-5555" /></label>
              <label className={fieldLabelClass}>Business Name<input name="Business Name" className={inputClass} placeholder="Your business" /></label>
            </div>

            <label className={fieldLabelClass}>How can we help?<textarea name="Message" required className={`${inputClass} min-h-36`} placeholder="Tell us what you need help with." /></label>

            <button type="submit" className="btn-primary">Send Message</button>
            <p className="text-sm leading-6 text-slate-600">Submitting opens your email app and addresses the message to believeshe123@gmail.com.</p>
          </form>
        )}
      </section>
    </div>
  );
}
