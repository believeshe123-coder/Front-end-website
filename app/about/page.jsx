export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <section className="relative border-b border-blue-100 bg-[radial-gradient(circle_at_top_left,#eef6ff,transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">About us</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-blue-950 sm:text-6xl">We&apos;re real people helping real businesses.</h1>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
          <p>Our company was built on the values of honesty, respect, responsibility, and service. Those values come from the families that raised us. Many of our family members served their communities and our country, and their sacrifices helped create the opportunities we have today. We believe in honoring that legacy by serving others with the same dedication and integrity.</p>
          <p>We understand the challenges of running a small business because we&apos;ve worked alongside hardworking people who keep their communities running every day. Whether you&apos;re a contractor, tradesman, service provider, or small business owner, we know that your time is valuable and that every customer matters.</p>
          <p className="rounded-2xl bg-blue-50 p-6 text-2xl font-black leading-tight text-blue-950 shadow-inner ring-1 ring-blue-100">Our goal is simple: help good businesses succeed.</p>
          <p>We believe in honest pricing, clear communication, and delivering the work we promise. No hidden fees, no unnecessary complications, and no confusing systems. Just dependable support from people who genuinely care about helping your business grow.</p>
          <p>When you work with us, you&apos;re not hiring a call center or an automated service. You&apos;re gaining a team that takes pride in helping businesses stay organized, serve their customers, and build a stronger future.</p>
        </div>
      </section>
    </div>
  );
}
