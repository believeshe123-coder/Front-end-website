import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Tell us what is piling up at the office."
      description="Share what you need help with: calls, scheduling, invoicing, follow-up, QuickBooks, or general office organization. We will keep the conversation simple and practical."
      primaryHref="/services"
      primaryLabel="Review services"
      image="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1100&q=80"
      imageAlt="Person answering a business phone at a desk"
    >
      <form className="grid gap-4 rounded-2xl bg-slate-50 p-5">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input className="rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email or phone
          <input className="rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="How should we reach you?" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          What do you need help with?
          <textarea className="min-h-28 rounded-lg border border-slate-300 px-4 py-3 font-normal" placeholder="Calls, scheduling, invoices, follow-up..." />
        </label>
        <button type="button" className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
          Send message
        </button>
      </form>
    </PageHero>
  );
}
