import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <PageHero
      eyebrow="About"
      title="The dependable office manager your crew can count on."
      description="This site is built for the kind of support contractors actually need: someone who answers the phone, keeps the calendar straight, sends invoices, follows up with customers, and understands that field work comes first."
      primaryHref="/services"
      primaryLabel="See what we handle"
      image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1100&q=80"
      imageAlt="Small business owner reviewing work at a desk"
    />
  );
}
