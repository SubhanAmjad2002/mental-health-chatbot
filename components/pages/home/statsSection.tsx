import { homeStats } from "@/components/data/projectData";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mental Health Facts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeStats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="text-center">
                  <div
                    className={`${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <p className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
