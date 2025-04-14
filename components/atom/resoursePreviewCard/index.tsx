import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ResourcePreviewCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ResourcePreviewCard({
  title,
  description,
  image,
  link,
}: ResourcePreviewCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full border-none shadow flex flex-row">
        <div className="w-1/3">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="w-2/3 p-4">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
