import Link from "next/link";

const valueCards = [
  {
    title: "Honest Pricing",
    text: "Straightforward pricing without hidden fees.",
  },
  {
    title: "Clear Communication",
    text: "Know what’s happening every step of the way.",
  },
  {
    title: "Dependable Support",
    text: "Reliable help that keeps your office moving.",
  },
  {
    title: "Personal Service",
    text: "Work directly with someone who cares about your business.",
  },
];

const founderStrengths = [
  "Construction industry experience",
  "Office management leadership",
  "Staffing and workforce coordination",
  "Customer communication",
  "Small business operations support",
  "Project management experience",
];

export default function AboutPage() {
  return (
    <div className="about-page overflow-hidden bg-white text-blue-950">
      <section className="about-section">
        <div className="about-mission mx-auto max-w-7xl">
          <div className="about-mission-copy">
            <h2>Behind every great service business is an office that keeps things moving.</h2>
            <p>Field Office provides dependable office support for busy service businesses, helping you stay organized, serve your customers, and focus on growing your business.</p>
          </div>
          <div className="about-values-grid">
            {valueCards.map((value) => (
              <article key={value.title} className="about-value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-people-section pt-0">
        <div className="about-people-grid mx-auto max-w-7xl">
          <div className="about-founder about-people-panel">
            <div className="about-founder-copy">
              <h2>Experience Built Around Service Businesses</h2>
              <div className="about-founder-card">
                <div className="about-copy-stack">
                  <p>Field Office was built from firsthand experience in construction, staffing, and office management. After seeing how much time business owners spend handling calls, schedules, paperwork, and customers, I saw the need for dependable support behind the scenes.</p>
                  <p>Field Office brings that experience together to help service businesses stay organized and keep work moving.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-team-cta about-people-panel">
            <div className="about-team-copy">
              <h2>Support That Fits Your Business</h2>
              <p>Every business operates differently. Field Office provides flexible, hands-on support based on the work you need help with most.</p>
              <p>Get dependable help behind the scenes so you can spend more time serving customers and growing your business.</p>
              <Link href="/quote" className="btn-primary about-quote-button inline-flex justify-center px-8 hover:bg-blue-800">Request a Quote</Link>
            </div>
          </div>

          <div className="about-strengths">
            <h3>Experience Behind Field Office</h3>
            <ul>
              {founderStrengths.map((strength) => (
                <li key={strength}><span aria-hidden="true">✓</span>{strength}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
