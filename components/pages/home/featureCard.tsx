import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
}: FeatureCardProps) {
  return (
    <Card className={`border-none shadow-md ${bgColor}`}>
      <CardContent className="pt-6">
        <div className="text-center">
          <div
            className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
          >
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
