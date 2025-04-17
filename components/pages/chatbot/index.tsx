"use client";

import type React from "react";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SendHorizontal, Bot, User, Info, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
// import { ResourcePreviewCard } from "@/components/atom/resoursePreviewCard";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ChatbotPage() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("chat");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [chat, setChat] = useState<any[]>([]);
  const [responses, setResponses] = useState<any[]>([]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" , block:'end'});
        // Then scroll the container 50px further
        setTimeout(() => {
          chatContainerRef.current?.scrollBy({ top: 100, behavior: "smooth" });
        }, 100);
  };

  useEffect(() => {
    const fetchResponses = async () => {
      const snapshot = await getDocs(collection(db, "responses"));
      const data = snapshot.docs.map((doc) => doc.data());
      setResponses(data);
    };
    fetchResponses();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    setSuggestions(
      responses.filter((r) =>
        r.userInput.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  const handleSelectSuggestion = (s: any) => {
    setChat([...chat, { user: s.userInput, bot: s.response }]);
    setIsLoading(true);
    setInterval(() => setIsLoading(false), 2000);
    setInput("");
    setSuggestions([]);
  };
const GREETINGS = [
  "hi",
  "hello",
  "hey",
  "heya",
  "hiya",
  "howdy",
  "greetings",
  "yo",
  "sup",
  "what's up",
  "good morning",
  "good afternoon",
  "good evening",
  "morning",
  "afternoon",
  "evening",
  "hey there",
  "hello there",
  "hi there",
  "yo there",
  "wassup",
  "sup bro",
  "hola",
  "salutations",
  "namaste",
  "bonjour",
  "holla",
  "shalom",
  "peace",
  "👋",
  "✌️",
  "😊",
  "🙋",
  "🙋‍♂️",
  "🙋‍♀️"
];


const HOW_ARE_YOU_PHRASES = [
  "how are you", "how are you doing", "how's it going", "how do you do",
  "how are things", "how's everything", "how have you been", "how you doing",
  "you good", "you okay", "you alright", "what's going on", "what's new",
  "how's life", "how's your day", "how’s your day going", "how’s your morning",
  "how’s your evening", "how’s your week", "how’s it hanging", "everything good", "all good"
];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userWords = input.toLowerCase().split(/\s+/);

    // Check for greeting
    if (GREETINGS.some((greet) => userWords.includes(greet))) {
      setChat([
        ...chat,
        { user: input, bot: "Hello! I'm here to support you. How can I help?" },
      ]);
      setIsLoading(true);
      setInterval(() => setIsLoading(false), 2000);
      setInput("");
      setSuggestions([]);
      return "Hello! I'm here to support you. How can I help?";
    }
  // Check for "how are you" type questions
  if (HOW_ARE_YOU_PHRASES.some((phrase) => normalizedInput.includes(phrase))) {
    setChat([
      ...chat,
      { user: input, bot: "I'm fine, thank you! How can I help you today?" },
    ]);
    setIsLoading(true);
    setInterval(() => setIsLoading(false), 2000);
    setInput("");
    setSuggestions([]);
    return "I'm fine, thank you! How can I help you today?";
  }
    const scoredResponses = responses.map((response: any) => {
      console.log(response)
      const matchCount = response.keywords.reduce(
        (count: number, keyword: string) => {
          return userWords.includes(keyword.toLowerCase()) ? count + 1 : count;
        },
        0
      );
      return { ...response, matchCount };
    });
    const sortedResponses = scoredResponses
    .filter((res) => res.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);
    
    console.log(userWords, sortedResponses);
    if (sortedResponses.length > 0) {
      setChat([
        ...chat,
        { user: input, bot: sortedResponses[0].response, reference:sortedResponses[0].reference },
      ]);
      setIsLoading(true);
      setInterval(() => setIsLoading(false), 2000);
      setInput("");
      setSuggestions([]);
      return;
    }
    setChat([
      ...chat,
      {
        user: input,
        bot: "I'm here to help, but I couldn't find a response for that. Try asking about topics like anxiety, sleep, or depression.",
      },
    ]);
    setIsLoading(true);
    setInterval(() => setIsLoading(false), 2000);
    setInput("");
    setSuggestions([]);
    return;
  };
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Talk to Our Chatbot</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A safe space to discuss your feelings and get resources for better
            mental wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  How to Use
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Be Specific</h3>
                  <p className="text-muted-foreground">
                    The more details you provide about how you're feeling, the
                    better support you'll receive.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Ask Questions</h3>
                  <p className="text-muted-foreground">
                    Don't hesitate to ask for clarification or more information
                    on any topic.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Try Suggested Topics</h3>
                  <p className="text-muted-foreground">
                    Use the quick response buttons below for common concerns.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-xs text-muted-foreground">
                    Remember: This chatbot does not store personal data and is
                    not a substitute for professional help.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div ref={chatContainerRef} className="lg:col-span-3">
            <Card className="border shadow-md">
              <CardHeader className="border-b bg-muted/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    Mental Health Companion
                    <Badge
                      variant="outline"
                      className="ml-3 bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      Online
                    </Badge>
                  </CardTitle>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Information</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          This AI chatbot is designed to provide mental health
                          support and resources. It is not a replacement for
                          professional help.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardHeader>

              {/* <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <div className="px-4 pt-2">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                    <TabsTrigger
                      value="chat"
                      className="rounded-t-lg rounded-b-none data-[state=active]:bg-background data-[state=active]:border-b-transparent data-[state=active]:border data-[state=active]:border-b-0 border-muted px-4 py-2"
                    >
                      Chat
                    </TabsTrigger>
                    <TabsTrigger
                      value="resources"
                      className="rounded-t-lg rounded-b-none data-[state=active]:bg-background data-[state=active]:border-b-transparent data-[state=active]:border data-[state=active]:border-b-0 border-muted px-4 py-2"
                    >
                      Resources
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="chat" className="m-0"> */}
                  <CardContent className="h-[calc(100vh-400px)] overflow-y-auto relative p-4">
                    {chat?.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                        <div className="bg-primary/10 p-6 rounded-full mb-4">
                          <Bot className="h-16 w-16 text-primary" />
                        </div>
                        <p className="text-lg mb-2 font-medium">
                          How are you feeling today?
                        </p>
                        <p className="max-w-md">
                          I'm here to listen and help. Start a conversation or
                          select one of the suggested topics below.
                        </p>
                      </div>
                    ) : (
                      <>
                        {chat.map((m: any, index: number) => (
                          <div key={index}>
                            <div className={`mb-4 flex justify-end`}>
                              <div
                                className={`px-4 py-3 rounded-lg max-w-[80%] bg-primary text-primary-foreground`}
                              >
                                {m.user}
                              </div>
                              <Avatar className="h-8 w-8 ml-2 mt-1">
                                <AvatarFallback className="bg-secondary text-secondary-foreground">
                                  <User className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className={`mb-4 flex justify-start`}>
                              <Avatar className="h-8 w-8 mr-2 mt-1">
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  <Bot className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                              {isLoading && index === chat.length - 1 ? (
                                <div className="px-4 py-3 rounded-lg bg-muted">
                                  <div className="flex space-x-2">
                                    <div
                                      className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                                      style={{ animationDelay: "0ms" }}
                                    ></div>
                                    <div
                                      className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                                      style={{ animationDelay: "300ms" }}
                                    ></div>
                                    <div
                                      className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"
                                      style={{ animationDelay: "600ms" }}
                                    ></div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className={`px-4 py-3 rounded-lg max-w-[80%] bg-muted`}
                                >
                                  {m?.bot}
                                  {m?.reference&&<p className="italic text-sm text-gray-500">Ref: ({m?.reference})</p>}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                        <div ref={messagesEndRef} />
                      </>
                    )}
                  </CardContent>
                {/* </TabsContent> */}

                {/* <TabsContent value="resources" className="m-0">
                  <CardContent className="h-[60vh] overflow-y-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ResourcePreviewCard
                        title="Anxiety Management"
                        description="Techniques and exercises to help manage anxiety and panic"
                        image="/image/chat1.jpg"
                        link="/resources#anxiety"
                      />
                      <ResourcePreviewCard
                        title="Sleep Improvement"
                        description="Evidence-based strategies for better sleep quality"
                        image="/image/chat2.jpg"
                        link="/resources#sleep"
                      />
                      <ResourcePreviewCard
                        title="Mood Boosting Activities"
                        description="Simple activities to improve your mood and outlook"
                        image="/image/chat3.jpg"
                        link="/resources#depression"
                      />
                      <ResourcePreviewCard
                        title="Stress Reduction"
                        description="Effective methods to reduce and manage stress"
                        image="/image/chat4.jpg"
                        link="/resources#anxiety"
                      />
                    </div>
                  </CardContent>
                </TabsContent> */}
              {/* </Tabs> */}

              <CardFooter className="border-t bg-muted/30 p-4">
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Type your message..."
                      className="flex-grow"
                      disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading}>
                      <SendHorizontal className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((response, indx) => (
                      <Badge
                        key={indx}
                        variant="outline"
                        className="cursor-pointer hover:bg-muted transition-colors"
                        onClick={() => handleSelectSuggestion(response)}
                      >
                        {response?.userInput}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    This chatbot does not store personal data. For crisis
                    situations, please visit our{" "}
                    <Link
                      href="/crisis"
                      className="text-primary hover:underline"
                    >
                      Crisis Support
                    </Link>{" "}
                    page.
                  </div>
                </form>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
