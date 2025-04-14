import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { crisisHotlines } from "@/components/data/projectData";
import Image from "next/image";

export default function CrisisPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get Immediate Help</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          If you or someone you know is in crisis, reach out to these
          professional resources immediately.
        </p>
      </div>

      {/* Emergency Notice */}
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-12 max-w-3xl mx-auto">
        <Image
          src="/image/crisis.jpg"
          alt="Mental Health Support"
          width={620}
          height={300}
          objectFit="cover"
          className="w-full mb-3 rounded-lg"
        />
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-destructive mr-4 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">
              In case of immediate danger
            </h2>
            <p className="mb-4">
              If you or someone else is in immediate danger or needs urgent
              medical attention, please call emergency services:
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="destructive" size="lg" asChild>
                <Link href="tel:911">Call 911 (US)</Link>
              </Button>
              <Button variant="destructive" size="lg" asChild>
                <Link href="tel:999">Call 999 (UK)</Link>
              </Button>
              <Button variant="destructive" size="lg" asChild>
                <Link href="tel:112">Call 112 (EU)</Link>
              </Button>
            </div>
            <p className="text-sm">
              Do not delay seeking help in an emergency situation.
            </p>
          </div>
        </div>
      </div>

      {/* Crisis Hotlines */}
      <h2 className="text-2xl font-bold mb-6">Crisis Hotlines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {crisisHotlines.map((hotline, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{hotline.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                {hotline.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{hotline.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{hotline.hours}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ExternalLink className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={hotline.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* When to seek help */}
      <h2 className="text-2xl font-bold mb-6">
        When to Seek Professional Help
      </h2>
      <Card className="mb-12">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p>
              It's important to recognize when you should seek professional
              mental health support. Consider reaching out if you experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Persistent feelings of sadness or hopelessness that don't go
                away
              </li>
              <li>Thoughts of harming yourself or others</li>
              <li>Inability to perform daily tasks or care for yourself</li>
              <li>Significant changes in sleep, appetite, or energy levels</li>
              <li>Withdrawal from social activities or relationships</li>
              <li>Overwhelming anxiety, fear, or worry</li>
              <li>Extreme mood swings that disrupt daily life</li>
              <li>Increased use of substances to cope with emotions</li>
            </ul>
            <p className="text-muted-foreground">
              Remember, seeking help is a sign of strength, not weakness. Mental
              health professionals are trained to provide the support and
              treatment you need.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Steps to take */}
      <h2 className="text-2xl font-bold mb-6">Steps to Take in a Crisis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-primary font-bold">
                1
              </span>
              Find a Safe Space
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If possible, move to a quiet, safe environment where you can focus
              on calming down and seeking help.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-primary font-bold">
                2
              </span>
              Reach Out
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Call a crisis hotline, trusted friend, family member, or emergency
              services depending on the severity of the situation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-primary font-bold">
                3
              </span>
              Practice Grounding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              While waiting for help, try the 5-4-3-2-1 technique: identify 5
              things you can see, 4 you can touch, 3 you can hear, 2 you can
              smell, and 1 you can taste.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
