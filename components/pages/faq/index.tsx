import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can this chatbot diagnose mental health conditions?",
    answer:
      "No, our chatbot cannot and does not diagnose any mental health conditions. It is designed to provide support, information, and resources only. For a proper diagnosis, please consult with a qualified healthcare professional such as a psychiatrist, psychologist, or your primary care physician.",
  },
  {
    question: "Will my data be stored?",
    answer:
      "We prioritize your privacy. While we do temporarily process your messages to generate appropriate responses, we do not permanently store the content of your conversations. No personal identifying information is collected unless explicitly provided by you, and we do not use your data for any purpose other than improving your immediate experience with the chatbot.",
  },
  {
    question: "Who developed this chatbot?",
    answer:
      "This mental health companion was developed by a multidisciplinary team including AI specialists, mental health professionals, UX designers, and developers. All content has been reviewed by qualified mental health practitioners to ensure its accuracy and appropriateness.",
  },
  {
    question: "What should I do if I need urgent help?",
    answer:
      "If you or someone you know is experiencing a mental health emergency or crisis, please immediately contact emergency services (911 in the US, 999 in the UK, or your local emergency number). You can also call a crisis hotline like the National Suicide Prevention Lifeline at 1-800-273-8255 (US) or the Samaritans at 116 123 (UK). Please visit our Crisis Support page for more resources.",
  },
  {
    question: "How accurate is the information provided by the chatbot?",
    answer:
      "All information provided by our chatbot is based on established psychological research and therapeutic approaches. Our content is regularly reviewed by qualified mental health practitioners. However, mental health is complex and highly individualized, so always consult with a healthcare professional for advice specific to your situation.",
  },
  {
    question: "Can I use this instead of therapy?",
    answer:
      "No, our chatbot is not a replacement for professional therapy or counseling. While it can provide support, information, and general coping strategies, it cannot provide the personalized care, diagnosis, or treatment that a qualified mental health professional can offer. We encourage using this tool as a supplement to professional care, not as a substitute.",
  },
  {
    question: "Is the chatbot available 24/7?",
    answer:
      "Yes, our AI chatbot is available 24 hours a day, 7 days a week. You can access support whenever you need it, regardless of the time or day.",
  },
  {
    question: "How should I use this service for the best results?",
    answer:
      "For the best experience, be specific about what you're feeling or what kind of support you're looking for. The chatbot can provide more relevant responses when given clear context. Remember that while the chatbot can offer support and resources, it's important to reach out to professional services for serious concerns or in crisis situations.",
  },
  {
    question: "Is this service free to use?",
    answer:
      "Yes, our mental health companion is completely free to use. We believe in making mental health support accessible to everyone who needs it.",
  },
  {
    question: "Can I suggest improvements or report issues?",
    answer:
      "We value your feedback and are constantly working to improve our service. Please use the contact form on our website to suggest improvements or report any issues you encounter.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Find answers to common questions about our mental health companion
        </p>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-primary" />
              Common Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your question here? Visit our{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact page
            </a>{" "}
            to get in touch with us.
          </p>
        </div>
      </div>
    </div>
  );
}
