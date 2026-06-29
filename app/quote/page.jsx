export default function QuotePage() {
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
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
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
