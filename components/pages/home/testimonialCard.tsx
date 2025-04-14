import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  initials,
}: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md bg-background">
      <CardContent className="pt-6 px-6">
        <QuoteIcon className="h-8 w-8 text-primary/40 mb-4" />
        <p className="text-lg mb-6 italic text-muted-foreground">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarSrc} alt={author} />
            <AvatarFallback className="bg-primary/20 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
