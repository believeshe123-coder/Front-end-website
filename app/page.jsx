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
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-950 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-14">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-100">
          Welcome
        </p>
        <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
          A clean front page for Website Name.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
          Use the shared navigation bar to move between the home page, Services,
          About us, and Contact us pages. Clicking Website Name always returns
          you to this home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-full bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            View services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-950">{card.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{card.description}</p>
            <span className="mt-6 inline-block font-semibold text-blue-700">
              Learn more →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
