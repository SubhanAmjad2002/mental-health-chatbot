import { Card, CardContent } from "@/components/ui/card";

interface ExternalResourceCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function ExternalResourceCard({
  title,
  description,
  link,
  image,
}: ExternalResourceCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col md:flex-row items-center border-none shadow">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-contain w-full h-auto"
          />
        </div>
        <CardContent className="flex-1">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-primary text-sm hover:underline inline-flex items-center">
            Visit website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </p>
        </CardContent>
      </Card>
    </a>
  );
}
