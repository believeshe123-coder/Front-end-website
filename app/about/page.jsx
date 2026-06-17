export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="hero-section">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">About us</p>
          <h1 className="hero-title">About Field Office</h1>
        </div>
      </section>

      <section className="site-section">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-lg leading-8 text-slate-700">
            <p>Our company was built on the values of honesty, respect, responsibility, and service. Those values come from the families that raised us. Many of our family members served their communities and our country, and their sacrifices helped create the opportunities we have today. We believe in honoring that legacy by serving others with the same dedication and integrity.</p>
            <p>We understand the challenges of running a small business because we&apos;ve worked alongside hardworking people who keep their communities running every day. Whether you&apos;re a contractor, tradesman, service provider, or small business owner, we know that your time is valuable and that every customer matters.</p>
            <p className="feature-panel bg-blue-50 text-2xl font-black leading-tight text-blue-950 ring-blue-100">Our goal is simple: help good businesses succeed.</p>
            <p>We believe in honest pricing, clear communication, and delivering the work we promise. No hidden fees, no unnecessary complications, and no confusing systems. Just dependable support from people who genuinely care about helping your business grow.</p>
            <p>When you work with us, you&apos;re not hiring a call center or an automated service. You&apos;re gaining a team that takes pride in helping businesses stay organized, serve their customers, and build a stronger future.</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
            <img src="/images/d2f3a19b-8350-428d-8070-88f224a99d10.png" alt="Office support professional helping a service business customer by phone" className="h-full min-h-[28rem] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="site-section bg-blue-50/60">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
            <img src="/images/headshot.png" alt="Field Office founder" className="h-full min-h-[30rem] w-full object-cover object-center" />
          </div>
          <div className="feature-panel bg-white text-slate-700 ring-blue-100">
            <p className="eyebrow">Meet The Founder</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Helping businesses stay organized has always been part of my life.</h2>
            <div className="mt-6 space-y-4 text-lg leading-8">
              <p>Growing up, I spent time working construction alongside my dad. While he focused on the work in the field, I saw firsthand how much happened behind the scenes to keep a business running. Scheduling jobs, answering calls, managing paperwork, and keeping customers informed were just as important as the work itself.</p>
              <p>That experience eventually led me into staffing and office management, where I&apos;ve spent years helping businesses solve operational challenges, support their customers, and keep their teams moving. Every day, I worked with contractors, service providers, and business owners who were trying to balance the demands of running a company while still doing the work they loved.</p>
              <p className="text-2xl font-black leading-tight text-blue-950">Field Office was built from those experiences.</p>
              <p>I created Field Office to give growing businesses the office support they need without the expense and complexity of hiring a full office staff. My goal is simple: provide dependable support, clear communication, and the kind of partnership I would want for my own business.</p>
              <p>While I founded Field Office, I am not the only person behind it. Our team is made up of people who share the same commitment to service, communication, and helping businesses succeed. Together, we work behind the scenes to support our clients, solve problems, and make sure the day-to-day office work gets handled professionally.</p>
              <p>When you work with Field Office, you&apos;re not working with a call center or an automated service. You&apos;re working with a real team that understands both the work happening in the field and the office systems needed to support it.</p>
              <p className="text-2xl font-black leading-tight text-blue-950">Helping good businesses succeed is what we&apos;re here for.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
