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
  compact = false,
  hideActions = false,
}) {
  return (
    <section className={`hero-section ${compact ? "hero-section-compact" : ""}`}>
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 h-40 w-[34rem] -translate-x-1/2 rounded-full bg-orange-100/50 blur-3xl" aria-hidden="true" />

      <div className={image ? "hero-grid" : "relative mx-auto max-w-4xl"}>
        <div>
          <p className="eyebrow">
            {eyebrow}
          </p>
          <h1 className={`hero-title ${compact ? "" : "hero-title-large"}`}>
            {title}
          </h1>
          <p className="hero-copy">
            {description}
          </p>
          {!hideActions ? (
            <div className="action-row">
              <Link
                href={primaryHref}
                className="btn-primary"
              >
                {primaryLabel}
              </Link>
              <Link
                href="/"
                className="btn-secondary"
              >
                Back home
              </Link>
            </div>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>

        {image ? (
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-blue-950/15 ring-1 ring-blue-950/10">
              <img
                src={image}
                alt={imageAlt}
                className={`${compact ? "h-[17rem]" : "h-[22rem] lg:h-[26rem]"} w-full object-cover`}
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-blue-950/15 backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 text-xl text-blue-700">
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
