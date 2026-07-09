export default function ContactPage() {
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
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-6">
          <iframe
            src="https://forms.gle/6mbKfqLCj6G32wxP8?embedded=true"
            title="Google contact form"
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
