import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <PageHero
      eyebrow="About us"
      title="Learn more about Website Name and what we do."
      description="Use this page to share your story, values, experience, and goals. The same navigation appears here so visitors can easily move to Services, Contact us, or back home."
      primaryHref="/services"
      primaryLabel="See our services"
    />
  );
}
