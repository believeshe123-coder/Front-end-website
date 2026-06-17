import Link from "next/link";

const valueCards = [
  {
    title: "Honest Pricing",
    text: "Straightforward pricing with no hidden fees.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        <path d="M12 3.5 19 6v5.25c0 4.45-2.8 7.95-7 9.25-4.2-1.3-7-4.8-7-9.25V6l7-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    text: "We keep you informed every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        <path d="M5 18.25c-1.35-1.3-2-2.95-2-4.75C3 8.8 7.05 5 12 5s9 3.8 9 8.5S16.95 22 12 22a9.8 9.8 0 0 1-3.3-.55L4.5 22l.5-3.75Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Dependable Support",
    text: "A team you can count on to get the job done.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 20v-1.5A4.5 4.5 0 0 1 8 14h1.5M20.5 20v-1.5A4.5 4.5 0 0 0 16 14h-1.5M8.5 20v-1a4 4 0 0 1 8 0v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Real People",
    text: "You’ll always work with real people who care.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9v-1a7 7 0 0 1 14 0v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const founderStrengths = [
  "Construction industry experience",
  "Customer communication",
  "Office management expertise",
  "Small business operations support",
  "Staffing & workforce coordination",
];

export default function AboutPage() {
  return (
    <div className="about-page overflow-hidden bg-white text-blue-950">
      <section className="about-hero border-b border-slate-200">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">About us</p>
          <h1 className="hero-title">About Field Office</h1>
          <p className="hero-copy">We provide reliable office support for service businesses so you can focus on the work that matters most.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-mission mx-auto max-w-7xl">
          <div className="about-mission-copy">
            <p className="eyebrow text-amber-700">Our mission</p>
            <h2>Helping good businesses succeed.</h2>
            <div className="space-y-5">
              <p>Field Office was built on the values of honesty, respect, responsibility, and service. We believe small business owners deserve dependable support, clear communication, and a team they can trust.</p>
              <p>Whether you’re a contractor, tradesman, service provider, or growing business owner, our goal is simple:</p>
              <p className="font-black text-amber-700">Help you stay organized, serve your customers, and focus on the work that grows your business.</p>
            </div>
          </div>
          <div className="about-values-grid">
            {valueCards.map((value) => (
              <article key={value.title} className="about-value-card">
                <div className="about-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-founder-section pt-0">
        <div className="about-founder mx-auto max-w-7xl">
          <div className="about-founder-image">
            <img src="/images/headshot.png" alt="Field Office founder" />
          </div>
          <div className="about-founder-copy">
            <p className="eyebrow text-amber-700">Meet the founder</p>
            <h2>From construction sites to office management.</h2>
            <div className="space-y-4">
              <p>Growing up, I spent time working construction alongside my dad. While he focused on the work in the field, I saw firsthand how much happens behind the scenes to keep a business running—scheduling jobs, answering calls, managing paperwork, and keeping customers informed.</p>
              <p>That experience led me into staffing and office management, where I’ve spent years helping businesses solve operational challenges, support their customers, and keep their teams moving.</p>
              <p>I created Field Office to give growing businesses the office support they need without the expense and complexity of hiring a full office staff. My goal is simple: provide dependable support, clear communication, and the kind of partnership I would want for my own business.</p>
            </div>
            <div className="about-strengths">
              <p className="eyebrow text-amber-700">What I bring to Field Office</p>
              <ul>
                {founderStrengths.map((strength) => (
                  <li key={strength}><span aria-hidden="true">✓</span>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section pt-0">
        <div className="about-team-cta mx-auto max-w-7xl">
          <div className="about-icon about-team-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-9 w-9"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 20v-1.5A4.5 4.5 0 0 1 8 14h1.5M20.5 20v-1.5A4.5 4.5 0 0 0 16 14h-1.5M8.5 20v-1a4 4 0 0 1 8 0v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </div>
          <div>
            <h2>More Than One Person</h2>
            <p>While Field Office was founded by Leahana, our clients are supported by a team of people who share the same commitment to service, communication, and helping businesses succeed. Together, we work behind the scenes so business owners can focus on serving their customers.</p>
          </div>
          <div className="about-cta-copy">
            <h2>Real people. Real support. Real results.</h2>
            <Link href="/contact" className="btn-primary mt-6 inline-flex px-8 py-3">Get A Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
