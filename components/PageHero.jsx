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
}) {
  return (
    <section className="bg-slate-50 px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              {primaryLabel}
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700"
            >
              Back home
            </Link>
          </div>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="h-80 w-full rounded-2xl border border-slate-200 object-cover shadow-sm lg:h-[30rem]"
          />
        ) : null}
      </div>
    </section>
  );
}
