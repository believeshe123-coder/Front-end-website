import { PageHero } from "@/components/PageHero";

const services = [
  "Answering customer calls and returning messages",
  "Scheduling service visits and updating calendars",
  "Preparing invoices, estimates, and payment reminders",
  "Organizing job notes, customer details, and follow-up lists",
  "Helping with QuickBooks cleanup and routine admin tasks",
];

export default function ServicesPage() {
  return (
    <PageHero
      eyebrow="Services"
      title="Office work handled by someone who knows service businesses."
      description="Get practical help with the daily tasks that keep customers informed and jobs on track. No bloated software pitch, no corporate process, just steady office support."
      primaryHref="/contact"
      primaryLabel="Talk through my needs"
      image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=80"
      imageAlt="Contractor using tools at a job site"
    >
      <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service} className="rounded-lg bg-slate-50 p-4">
            {service}
          </li>
        ))}
      </ul>
    </PageHero>
  );
}
