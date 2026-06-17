import { PageHero } from "@/components/PageHero";

const serviceSections = [
  { title: "Never Miss A Customer Call", problem: "Missed calls become missed opportunities.", work: "Answer calls, take messages, qualify leads, update customer records, and follow up.", result: "More customers reached and fewer opportunities lost.", services: ["Answering customer calls", "Taking messages", "Lead intake", "Customer follow-up", "Missed-call support", "Customer record updates"] },
  { title: "Keep Every Job On Schedule", problem: "A messy calendar creates delays, confused crews, and frustrated customers.", work: "Schedule appointments, update calendars, coordinate routes, send reminders, and share job status updates.", result: "Your schedule stays clearer and your day runs smoother.", services: ["Appointment scheduling", "Crew dispatching", "Calendar updates", "Route coordination", "Customer reminders", "Job status updates"] },
  { title: "Get Quotes And Invoices Out Faster", problem: "Late estimates and invoices slow cash flow and make after-hours work pile up.", work: "Prepare estimates, draft invoices, send payment reminders, and keep customer accounts organized in your software or ours.", result: "Your quotes, billing, and account follow-up stay organized.", services: ["Estimates and quotes", "Invoice preparation", "Payment reminder follow-up", "Customer account organization", "QuickBooks or existing software support", "Our management system if needed"] },
  { title: "Stay Visible After The Job Is Done", problem: "When follow-up and visibility fall behind, warm leads and repeat customers can go quiet.", work: "Coordinate social posts, review requests, lead tracking, website content updates, and follow-up campaigns.", result: "Your business stays visible and your leads keep moving.", services: ["Social media posting", "Review requests", "Lead tracking", "Website content updates", "Customer follow-up campaigns", "Marketing coordination"] },
  { title: "Hire Without Losing Your Day", problem: "Hiring details can take over your day when you already have customers waiting.", work: "Manage job postings, applicant tracking, interview scheduling, candidate messages, resumes, and temporary worker coordination.", result: "Your staffing process stays organized without pulling you away from the work.", services: ["Job posting management", "Applicant tracking", "Interview scheduling", "Candidate communication", "Resume organization", "Temporary worker coordination"] },
  { title: "Build Systems That Support Growth", problem: "Growth gets harder when processes, reports, and customer retention live only in your head.", work: "Organize workflows, support reporting, improve follow-through, and help keep customer retention tasks on track.", result: "Your business gets clearer systems for the next stage of growth.", services: ["Process organization", "Customer retention support", "Reporting support", "Growth planning assistance", "Workflow cleanup", "Owner support"] },
  { title: "Get Support Built Around Your Business", problem: "Every service business has office tasks that do not fit neatly into one box.", work: "Build a support plan around custom admin tasks, special projects, communication, system setup, and flexible service combinations.", result: "Your support matches the way your business actually runs.", services: ["Custom admin tasks", "Special projects", "Customer communication", "System setup help", "Ongoing support plans", "Flexible service combinations"] },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white text-blue-950">
      <PageHero
        eyebrow="Services"
        title="Office Support Services"
        description="Get help with the calls, schedules, estimates, invoices, follow-up, and back-office work that pull time away from your customers and your growth."
        compact
        hideActions
      />

      <section className="site-section-tight bg-stone-50">
        <div className="mx-auto grid max-w-7xl gap-5">
          {serviceSections.map((section) => (
            <article key={section.title} className="content-card">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">Service</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950">{section.title}</h2>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-xl bg-blue-50/70 p-4"><h3 className="font-black text-blue-950">Problem</h3><p className="mt-1 leading-7 text-slate-700">{section.problem}</p></div>
                    <div className="rounded-xl bg-white p-4 ring-1 ring-blue-100"><h3 className="font-black text-blue-950">What We Do</h3><p className="mt-1 leading-7 text-slate-700">{section.work}</p></div>
                    <div className="rounded-xl bg-blue-50/70 p-4"><h3 className="font-black text-blue-950">Result</h3><p className="mt-1 leading-7 text-slate-700">{section.result}</p></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">Services include</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {section.services.map((service) => (
                      <li key={service} className="rounded-lg border border-blue-100 bg-blue-50/60 p-3 font-semibold text-blue-950">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
