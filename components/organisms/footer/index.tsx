import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <div className="space-y-2 mb-6">
            <p className="font-semibold">
              Not a substitute for professional medical advice
            </p>
            <p className="text-sm max-w-lg mx-auto">
              This website and chatbot are intended for informational purposes
              only. If you are experiencing a mental health crisis, please
              contact emergency services or your healthcare provider
              immediately.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <Link href="#" className="text-primary hover:text-primary/80">
              Twitter
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              Instagram
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              Facebook
            </Link>
          </div>

          <div className="text-sm">
            <p>
              © {new Date().getFullYear()} Mental Health Companion. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
