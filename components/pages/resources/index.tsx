import { ExternalResourceCard } from "@/components/atom/externalResourceCard";
import { ResourceCard } from "@/components/atom/resourceCard";
import { resourceCategories } from "@/components/data/projectData";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
        <div className="relative py-12 px-6 text-center">
          <h1 className="text-3xl font-bold mb-2">
            Self-Help & Well-being Resources
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore evidence-based resources to support your mental health and
            well-being
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for topics..."
              className="pl-10 rounded-full bg-background/80 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            {resourceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.flatMap((category) =>
              category.resources.map((resource, idx) => (
                <ResourceCard
                  key={`${category.id}-${idx}`}
                  title={resource.title}
                  description={resource.description}
                  link={resource.link}
                  image={resource.image}
                  category={category.title}
                  icon={category.icon}
                />
              ))
            )}
          </div>
        </TabsContent>

        {resourceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.resources.map((resource, idx) => (
                <ResourceCard
                  key={idx}
                  title={resource.title}
                  description={resource.description}
                  link={resource.link}
                  image={resource.image}
                  category={category.title}
                  icon={category.icon}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* External resources */}
      <div className="bg-muted p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">
          Additional Trusted Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExternalResourceCard
            title="World Health Organization"
            description="Evidence-based mental health resources and research"
            link="https://www.who.int/health-topics/mental-health"
            image="/image/resource1.jpg"
          />
          <ExternalResourceCard
            title="NHS Mental Health"
            description="Official NHS guidance and support for mental health issues"
            link="https://www.nhs.uk/mental-health/"
            image="/image/resource2.jpg"
          />
          <ExternalResourceCard
            title="Mind"
            description="UK's leading mental health charity with extensive resources"
            link="https://www.mind.org.uk/"
            image="/image/resource3.jpg"
          />
        </div>
      </div>
    </div>
  );
}
