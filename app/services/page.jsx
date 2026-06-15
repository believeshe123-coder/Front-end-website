import { PageHero } from "@/components/PageHero";

const serviceSections = [
  {
    title: "Office Management",
    intro: "We help keep your business organized and your customers informed.",
    services: [
      "Answering customer calls",
      "Scheduling appointments",
      "Dispatching crews",
      "Customer follow-up",
      "Administrative support",
      "Customer record management",
      "Daily office coordination",
    ],
  },
  {
    title: "Estimates, Invoicing & Financial Support",
    intro:
      "We work within the systems you already use whenever possible. If your business already uses QuickBooks, we can work directly within your QuickBooks account to create estimates, send invoices, track customer accounts, and help manage day-to-day administrative tasks.",
    secondaryText:
      "If you do not currently use QuickBooks, we provide our own management system to organize customers, track jobs, manage communications, monitor estimates, and keep your business running efficiently.",
    services: [
      "Creating and sending estimates",
      "Quote follow-up",
      "Invoice preparation and delivery",
      "Payment reminder follow-up",
      "Customer account organization",
      "Job and customer tracking",
      "Administrative reporting",
    ],
    footer:
      "Our goal is to work with your existing processes, not force you into a completely new system.",
  },
  {
    title: "Recruiting Support",
    intro:
      "Finding reliable employees takes time. We help simplify the hiring process so you can focus on running your business.",
    services: [
      "Job posting management",
      "Applicant tracking",
      "Interview scheduling",
      "Candidate communication",
      "Resume organization",
      "Hiring workflow support",
    ],
    footer:
      "Whether you need one employee or are building an entire team, we help keep your hiring process organized.",
  },
  {
    title: "Marketing Support",
    intro:
      "Consistent marketing helps keep your schedule full and your business growing.",
    services: [
      "Social media posting",
      "Customer review requests",
      "Lead tracking",
      "Website content updates",
      "Customer follow-up campaigns",
      "Marketing activity coordination",
    ],
    footer:
      "We focus on helping service businesses maintain a professional presence and generate more opportunities without requiring the owner to spend hours each week on marketing tasks.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <PageHero
        eyebrow="What we do"
        title="One dedicated team for the office work behind your service business."
        description="Running a service business means wearing a lot of hats. Answering customer calls, scheduling jobs, sending estimates, following up on invoices, hiring workers, and keeping up with marketing can quickly become a full-time job on its own. That's where we come in."
        primaryHref="/contact"
        primaryLabel="Talk through my needs"
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Contractor using tools at a job site"
      >
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-slate-700 shadow-inner">
          <p className="leading-7">
            We become an extension of your business, handling the day-to-day
            office operations that keep everything moving while you focus on
            serving customers and growing your company.
          </p>
        </div>
      </PageHero>

      <section className="bg-stone-50 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6">
          {serviceSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                    Services include
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-700">{section.intro}</p>
                  {section.secondaryText ? (
                    <p className="mt-4 leading-7 text-slate-700">
                      {section.secondaryText}
                    </p>
                  ) : null}
                </div>

                <div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {section.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-lg border border-blue-100 bg-blue-50/60 p-4 font-semibold text-blue-950"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                  {section.footer ? (
                    <p className="mt-5 rounded-xl bg-blue-50 p-4 leading-7 text-slate-700">
                      {section.footer}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-inner">
            <h2 className="text-3xl font-black tracking-tight text-blue-950">
              One Team. One Point of Contact.
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Instead of hiring a receptionist, dispatcher, recruiter, marketing
              assistant, and office manager separately, we provide support across
              all of these areas through one dedicated service.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Whether you need help answering calls, scheduling work, hiring
              employees, managing customer relationships, sending invoices, or
              keeping up with marketing, we help keep your business running
              smoothly behind the scenes.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-800 bg-blue-950 p-8 text-white shadow-2xl shadow-blue-950/20">
            <h2 className="text-3xl font-black tracking-tight">
              Focus on the Work. We&apos;ll Handle the Office.
            </h2>
            <p className="mt-4 leading-7 text-slate-200">
              Our goal is simple: give business owners more time to focus on
              customers, employees, and growth while we handle the administrative
              work that keeps everything organized.
            </p>
            <p className="mt-4 leading-7 text-slate-200">
              Whether you&apos;re already using QuickBooks, another system, or no
              system at all, we can work with your existing processes or provide
              the tools needed to keep your business organized and moving
              forward.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
