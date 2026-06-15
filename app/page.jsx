import Link from "next/link";

const cards = [
  {
    href: "/services",
    title: "Services",
    description: "Explore the services we offer and learn how we can help with your next project.",
  },
  {
    href: "/about",
    title: "About us",
    description: "Get to know our mission, values, and the people behind Website Name.",
  },
  {
    href: "/contact",
    title: "Contact us",
    description: "Reach out with questions, project ideas, or to start a conversation with our team.",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-slate-950 text-white">
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.45),_transparent_34%),linear-gradient(135deg,_#1d4ed8_0%,_#4338ca_42%,_#020617_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-100">
              Welcome
            </p>
            <h1 className="max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">
              A complete website experience for Website Name.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
              Move through Services, About us, and Contact us from one connected
              full-screen layout. The site now stretches edge to edge with
              sections that feel like one polished experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-white px-7 py-3 font-semibold text-blue-800 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Built to connect
              </p>
              <div className="mt-6 space-y-4">
                {cards.map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="block rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <h2 className="text-xl font-bold">{card.title}</h2>
                    <p className="mt-2 leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{card.description}</p>
              <span className="mt-8 inline-block font-semibold text-blue-700 transition group-hover:translate-x-1">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
