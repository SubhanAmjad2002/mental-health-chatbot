import { Heart, Brain, MessageCircle, Clock, BookOpen, Shield } from "lucide-react";
import CTASection from "./ctaSection";
import FeatureCard from "./featureCard";
import HeroCarousel from "./heroCarousel";
import PartnersSection from "./partnerSection";
import HowItWorks from "./howItWorks";
import StatsSection from "./statsSection";
import TestimonialsSection from "./testimonialSection";

export default function HomePage() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Partners Section */}
      <PartnersSection />

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers comprehensive support for your mental
              wellbeing journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageCircle}
              title="24/7 Conversation"
              description="Talk to our AI chatbot anytime you need someone to listen without judgment."
              color="text-primary"
              bgColor="bg-primary/10"
            />

            <FeatureCard
              icon={Brain}
              title="Self-Help Resources"
              description="Access evidence-based strategies and exercises to support your mental wellbeing."
              color="text-secondary"
              bgColor="bg-secondary/10"
            />

            <FeatureCard
              icon={Heart}
              title="Crisis Support"
              description="Get connected to professional help when you need it most through our crisis resources."
              color="text-accent"
              bgColor="bg-accent/10"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Additional Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to provide holistic mental health support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Privacy Focused"
              description="Your conversations are private and secure. We don't store personal data."
              color="text-blue-500"
              bgColor="bg-blue-50"
            />

            <FeatureCard
              icon={BookOpen}
              title="Educational Content"
              description="Learn about mental health topics with our library of evidence-based articles."
              color="text-emerald-500"
              bgColor="bg-emerald-50"
            />

            <FeatureCard
              icon={Clock}
              title="Immediate Access"
              description="No waiting lists or appointments needed. Get support exactly when you need it."
              color="text-amber-500"
              bgColor="bg-amber-50"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action */}
      <CTASection />
    </div>
  );
}
