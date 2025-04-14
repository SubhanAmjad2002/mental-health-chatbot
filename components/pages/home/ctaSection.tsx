import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary/10 rounded-3xl my-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your journey?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Our AI companion is here to support you through your mental health
          journey, one conversation at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/chatbot">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Start Chat Now
            </Button>
          </Link>
          <Link href="/resources">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg"
            >
              Explore Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
