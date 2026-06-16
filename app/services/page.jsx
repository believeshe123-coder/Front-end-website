import { PageHero } from "@/components/PageHero";

const serviceSections = [
  { title: "Call management", intro: "We help every customer feel answered, heard, and followed up with.", services: ["Answering customer calls", "Taking messages", "Lead intake", "Customer follow-up", "Missed-call support", "Customer record updates"] },
  { title: "Scheduling and dispatching", intro: "We keep appointments organized and help your crews know where they need to be.", services: ["Appointment scheduling", "Crew dispatching", "Calendar updates", "Route coordination", "Customer reminders", "Job status updates"] },
  { title: "Financial support", intro: "We can connect to your current software or provide our own system to keep estimates, invoices, and accounts organized.", services: ["Estimates and quotes", "Invoice preparation", "Payment reminder follow-up", "Customer account organization", "QuickBooks or existing software support", "Our management system if needed"] },
  { title: "Marketing support", intro: "We help your business stay visible and keep leads moving through the follow-up process.", services: ["Social media posting", "Review requests", "Lead tracking", "Website content updates", "Customer follow-up campaigns", "Marketing coordination"] },
  { title: "Recruiting help or temp management", intro: "We help organize hiring and temporary workforce needs so staffing does not take over your day.", services: ["Job posting management", "Applicant tracking", "Interview scheduling", "Candidate communication", "Resume organization", "Temporary worker coordination"] },
  { title: "Business growth", intro: "We support the systems, reporting, and follow-through that help good businesses grow with confidence.", services: ["Process organization", "Customer retention support", "Reporting support", "Growth planning assistance", "Workflow cleanup", "Owner support"] },
  { title: "Custom support", intro: "Every business is different, so we can build a support plan around the exact tasks you need handled.", services: ["Custom admin tasks", "Special projects", "Customer communication", "System setup help", "Ongoing support plans", "Flexible service combinations"] },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <PageHero
        eyebrow="Services"
        title="Office support that gets to work quickly."
        description="Choose the help that fits your business: calls, scheduling, dispatching, financial support, marketing, recruiting, business growth, or a custom mix."
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=80"
        imageAlt="Contractor using tools at a job site"
        compact
        hideActions
      />

      <section className="site-section-tight bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-5">
          {serviceSections.map((section) => (
            <article key={section.title} className="content-card">
              <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">Services include</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950">{section.title}</h2>
                  <p className="mt-3 leading-7 text-slate-700">{section.intro}</p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {section.services.map((service) => (
                    <li key={service} className="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-semibold text-blue-950">{service}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
