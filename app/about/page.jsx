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
            <h2>Helping good businesses succeed.</h2>
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
                <div className="about-story-grid">
                  <article>
                    <h3>Growing Up Around Small Business</h3>
                    <p>I spent time working construction alongside my dad and saw how much happens behind the scenes: scheduling jobs, answering calls, managing paperwork, and keeping customers informed.</p>
                  </article>
                  <article>
                    <h3>Building Experience In Office Management</h3>
                    <p>That foundation led me into staffing and office management, where I helped businesses solve operational challenges, support customers, and keep teams moving.</p>
                  </article>
                  <article>
                    <h3>Why I Started Field Office</h3>
                    <p>I created Field Office to give growing businesses dependable support, clear communication, and a trusted partner without the expense of hiring a full office staff.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="about-team-cta about-people-panel">
            <div className="about-team-copy">
              <p className="eyebrow text-amber-700">Our team</p>
              <h2>A Team Behind Every Client</h2>
              <p>While Field Office was founded by Leahana, our clients are supported by a team of people who share the same commitment to service, communication, and helping businesses succeed.</p>
              <p>Together, we work behind the scenes so business owners can focus on serving their customers.</p>
            </div>
            <div className="about-strengths">
              <h3>What My Team Brings To Field Office</h3>
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
