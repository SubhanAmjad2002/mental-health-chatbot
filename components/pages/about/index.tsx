import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Lock, BookOpen, Siren } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teamMembers } from "@/components/data/projectData";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            About Mental Health Companion
          </h1>
          <p className="text-xl text-muted-foreground">
            Our mission, approach, and the technology behind our mental health
            support platform
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="/image/aboutHero.jpg"
            alt="Mental Health Support"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">
              Empowering Mental Wellbeing
            </h2>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/2">
              <p>
                Mental Health Companion was created with a simple goal: to make
                mental health support more accessible, immediate, and
                personalized. We believe that everyone should have access to
                tools that can help them navigate difficult emotions, understand
                their mental health, and find appropriate resources when needed.
              </p>
              <p>
                While our AI chatbot is not a replacement for professional
                mental health services, it serves as a bridge—offering support
                during moments when you might feel alone, providing
                evidence-based information, and guiding you toward professional
                resources when appropriate.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/image/about1.jpg"
                alt="Our Mission Illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <h2>The Technology</h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
            <div className="md:w-1/2">
              <p>
                Our platform is built using advanced AI technology, specifically
                designed to engage in supportive, empathetic conversations about
                mental health. The chatbot has been trained to:
              </p>
              <ul>
                <li>Recognize signs of distress and respond appropriately</li>
                <li>Provide evidence-based coping strategies and resources</li>
                <li>Avoid giving medical advice or diagnoses</li>
                <li>Recognize when to suggest professional help</li>
              </ul>
              <p>
                We continuously improve our system based on the latest research
                in mental health support and AI ethics, ensuring our platform
                remains helpful, accurate, and safe.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/image/about2.jpg"
                alt="AI Technology Illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <h2>Partnerships</h2>
          <p>
            We work closely with mental health professionals, organizations, and
            researchers to ensure that the information and support we provide
            aligns with best practices in mental health care. Our content is
            regularly reviewed by qualified mental health practitioners to
            ensure its accuracy and appropriateness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Evidence-Based Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                All resources, suggestions, and information provided through our
                platform are based on established psychological research and
                therapeutic approaches.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Privacy & Ethics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We prioritize your privacy. Conversations with our chatbot are
                not stored long-term, and we do not use your data for any
                purpose other than improving your immediate experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Educational Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our platform aims to improve mental health literacy, helping
                users understand their emotions better and learn effective
                strategies for managing their mental wellbeing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Siren className="h-5 w-5 mr-2 text-primary" />
                Crisis Awareness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We've designed our platform to recognize potential crisis
                situations and provide immediate guidance toward appropriate
                emergency resources.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-6">
            Mental Health Companion was developed by a multidisciplinary team of
            AI specialists, mental health professionals, UX designers, and
            developers passionate about making mental health support more
            accessible.
          </p>
          <p className="text-muted-foreground">
            If you have questions, suggestions, or would like to collaborate
            with us, please visit our{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
