import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Contact us",
}) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/70 ring-1 ring-slate-200 md:p-12">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
        {eyebrow}
      </p>
      <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={primaryHref}
          className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
        >
          {primaryLabel}
        </Link>
        <Link
          href="/"
          className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
