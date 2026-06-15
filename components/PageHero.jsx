import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Contact us",
  image,
  imageAlt,
  children,
  kicker = "Built for busy service pros",
}) {
  return (
    <section className="relative overflow-hidden border-b border-blue-100 bg-[radial-gradient(circle_at_top_left,#eef6ff,transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-14 text-blue-950 lg:px-8 lg:py-20">
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 h-40 w-[34rem] -translate-x-1/2 rounded-full bg-orange-100/50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-700">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-slate-700">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="rounded-lg bg-blue-700 px-7 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              {primaryLabel}
            </Link>
            <Link
              href="/"
              className="rounded-lg border-2 border-blue-600 bg-white px-7 py-4 text-sm font-black text-blue-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Back home
            </Link>
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {image ? (
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
              <img
                src={image}
                alt={imageAlt}
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-8 right-8 rounded-xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-blue-950/15 backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 text-2xl text-blue-700">
                  ♙
                </div>
                <p className="text-base font-black leading-7 text-blue-950">
                  {kicker}
                  <span className="block text-blue-700">Reliable support that feels like part of your team.</span>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
