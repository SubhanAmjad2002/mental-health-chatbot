import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  icon: React.ElementType;
}

export function ResourceCard({
  title,
  description,
  link,
  image,
  category,
  icon: Icon,
}: ResourceCardProps) {
  return (
      <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full border-none shadow">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <Icon className="h-3 w-3 mr-1" />
            {category}
          </div>
        </div>
        <CardContent className="pt-5">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
  );
}
