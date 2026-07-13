const valueCards = [
  {
    title: "Honest Pricing",
    text: "Straightforward pricing with no hidden fees.",
  },
  {
    title: "Clear Communication",
    text: "We keep you informed every step of the way.",
  },
  {
    title: "Dependable Support",
    text: "A team you can count on to get the job done.",
  },
  {
    title: "Real People",
    text: "You’ll always work with real people who care.",
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
            <p className="eyebrow text-amber-700">Our mission</p>
            <h2>Behind every great service business is an office that keeps things moving.</h2>
            <div className="about-copy-stack">
              <p>Field Office was built on the values of honesty, respect, responsibility, and service. We believe business owners deserve dependable support, clear communication, and a team they can trust.</p>
              <p>Whether you’re a contractor, tradesman, or service provider, our goal is simple:</p>
              <p className="about-highlight">Help you stay organized, serve your customers, and focus on growing your business.</p>
            </div>
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
              <p className="eyebrow text-amber-700">Meet the founder</p>
              <h2>From construction sites to office management.</h2>
              <p className="about-subheading">The experience behind Field Office.</p>
              <div className="about-founder-card">
                <div className="about-copy-stack">
                  <p>I grew up seeing firsthand that running a service business involves far more than doing great work in the field. Working construction alongside my dad, I saw the calls, scheduling, paperwork, customer updates, and countless details that still needed attention after the physical work was done.</p>
                  <p>That experience eventually led me into staffing and office management, where I helped businesses solve operational challenges, support customers, and keep their teams moving.</p>
                  <p>I started Field Office to bring those experiences together—to give hardworking business owners dependable office support without the cost and complexity of building a full internal office staff.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-team-cta about-people-panel">
            <div className="about-team-copy">
              <p className="eyebrow text-amber-700">Our team</p>
              <h2>Dedicated Support Behind Your Business</h2>
              <p>Field Office provides dependable, hands-on support built around the needs of each client. With a commitment to service, clear communication, and reliable follow-through, the goal is to keep your office operations moving and your customers taken care of.</p>
              <p>By handling the work behind the scenes, Field Office gives business owners more time to focus on serving their customers and growing their business.</p>
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
        </div>
      </section>
    </div>
  );
}
