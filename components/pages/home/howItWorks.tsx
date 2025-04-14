import { stepsHowItWorks } from "@/components/data/projectData";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, BookOpen, Heart } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides a simple, effective way to access mental
            health support and resources.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-muted-foreground/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {stepsHowItWorks.map((step, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center relative">
                    <div
                      className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="bg-background rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-6 border-2 border-muted absolute top-0">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
