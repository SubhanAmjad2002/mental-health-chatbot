import { partners } from "@/components/data/projectData";

export default function PartnersSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-medium text-center mb-8 text-muted-foreground">
          Trusted by Leading Mental Health Organizations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 md:h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
