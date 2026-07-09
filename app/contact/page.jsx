import EmbeddedGoogleForm from "@/components/EmbeddedGoogleForm";

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
        <EmbeddedGoogleForm src="https://forms.gle/6mbKfqLCj6G32wxP8" title="Google contact form" />
      </section>
    </div>
  );
}
