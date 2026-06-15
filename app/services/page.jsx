import { PageHero } from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <PageHero
      eyebrow="Services"
      title="Helpful services for building your online presence."
      description="This page introduces the services section of the website. Add details here for design, development, support, consulting, or any other offerings you want visitors to discover."
      primaryHref="/contact"
      primaryLabel="Ask about services"
    />
  );
}
