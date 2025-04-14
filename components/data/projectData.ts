import {
  Activity,
  BookOpen,
  Brain,
  Clock,
  Heart,
  MessageSquare,
  Moon,
  Users,
} from "lucide-react";

// Crisis hotlines
export const crisisHotlines = [
  {
    name: "Samaritans",
    description: "24/7 support for anyone in emotional distress",
    phone: "116 123",
    hours: "24 hours, 7 days a week",
    website: "https://www.samaritans.org/",
  },
  {
    name: "Crisis Text Line",
    description: "Text-based crisis support",
    phone: "Text HOME to 741741",
    hours: "24 hours, 7 days a week",
    website: "https://www.crisistextline.org/",
  },
  {
    name: "National Suicide Prevention Lifeline",
    description: "Support for people in suicidal crisis",
    phone: "1-800-273-8255",
    hours: "24 hours, 7 days a week",
    website: "https://suicidepreventionlifeline.org/",
  },
  {
    name: "CALM (Campaign Against Living Miserably)",
    description: "Support for men in crisis",
    phone: "0800 58 58 58",
    hours: "5pm-midnight, 365 days a year",
    website: "https://www.thecalmzone.net/",
  },
];

// Resource data
export const resourceCategories = [
  {
    id: "anxiety",
    title: "Anxiety & Stress",
    description: "Tools and techniques to manage anxiety and stress",
    icon: Activity,
    resources: [
      {
        title: "Deep Breathing Exercises",
        description: "Simple breathing techniques to calm anxiety",
        link: "/resources/anxiety/breathing",
        image: "/image/anxiety1.jpg",
        technique: "4-7-8 Breathing Technique (NHS, Dr. Andrew Weil)",
        techniqueDetails:
          "Inhale through your nose for 4 seconds, hold for 7 seconds, and exhale slowly through your mouth for 8 seconds. Helps calm the nervous system and reduce anxiety.",
      },
      {
        title: "Understanding Stress Triggers",
        description: "Learn to identify and manage your stress triggers",
        link: "/resources/anxiety/triggers",
        image: "/image/anxiety2.jpg",
        technique: "Stress Diary (NHS)",
        techniqueDetails:
          "Track times when you feel stressed, note situations, thoughts, and physical sensations. Helps in recognizing patterns and managing triggers.",
      },
      {
        title: "Grounding Techniques",
        description: "Stay present with these grounding methods",
        link: "/resources/anxiety/grounding",
        image: "/image/anxiety3.jpg",
        technique: "5-4-3-2-1 Grounding (Mind UK)",
        techniqueDetails:
          "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. Anchors you in the present moment.",
      },
    ],
  },
  {
    id: "depression",
    title: "Depression",
    description: "Support and strategies for dealing with depression",
    icon: Brain,
    resources: [
      {
        title: "Behavioral Activation",
        description: "Simple activities to help combat depression",
        link: "/resources/depression/activation",
        image: "/image/depression1.jpg",
        technique: "Behavioral Activation (CBT-Based)",
        techniqueDetails:
          "Schedule positive or goal-oriented activities even when motivation is low. Helps break the cycle of avoidance and low mood.",
      },
      {
        title: "Challenging Negative Thoughts",
        description: "Techniques to identify and reframe negative thinking patterns",
        link: "/resources/depression/thoughts",
        image: "/image/depression2.jpg",
        technique: "Cognitive Restructuring (CBT)",
        techniqueDetails:
          "Identify negative thoughts, evaluate their accuracy, and replace them with more balanced alternatives.",
      },
      {
        title: "Self-Compassion Practices",
        description: "Learning to be kind to yourself during difficult times",
        link: "/resources/depression/compassion",
        image: "/image/depression3.jpg",
        technique: "Self-Compassion Break (Dr. Kristin Neff)",
        techniqueDetails:
          "Acknowledge your suffering, remember you're not alone, and offer yourself kind words. Builds emotional resilience.",
      },
    ],
  },
  {
    id: "sleep",
    title: "Sleep Hygiene",
    description: "Improve your sleep quality and habits",
    icon: Moon,
    resources: [
      {
        title: "Creating a Sleep Routine",
        description: "Steps to establish a healthy bedtime routine",
        link: "/resources/sleep/routine",
        image: "/image/sleep1.jpg",
        technique: "Consistent Sleep Schedule (NHS)",
        techniqueDetails:
          "Go to bed and wake up at the same time daily, even on weekends. Regulates your body clock for better sleep.",
      },
      {
        title: "Managing Sleep Anxiety",
        description: "Techniques to calm your mind before sleep",
        link: "/resources/sleep/anxiety",
        image: "/image/sleep2.jpg",
        technique: "Progressive Muscle Relaxation (WHO, NHS)",
        techniqueDetails:
          "Tense and relax each muscle group starting from your toes to your head. Reduces physical tension and quiets the mind.",
      },
      {
        title: "Bedroom Environment Optimization",
        description: "How to create the ideal sleep environment",
        link: "/resources/sleep/environment",
        image: "/image/sleep3.jpg",
        technique: "Sleep Hygiene Optimization (CDC, NHS)",
        techniqueDetails:
          "Keep the room dark, cool, and quiet. Avoid screens before bed and use the bed only for sleep to train your brain.",
      },
    ],
  },
  {
    id: "emotional",
    title: "Emotional Regulation",
    description: "Learn to understand and manage your emotions effectively",
    icon: Heart,
    resources: [
      {
        title: "Emotional Awareness",
        description: "Techniques to identify and name your emotions",
        link: "/resources/emotional/awareness",
        image: "/image/emotional1.jpg",
        technique: "Emotion Labeling (DBT)",
        techniqueDetails:
          "Pause and name what you're feeling (e.g., 'I'm feeling anxious'). Increases emotional clarity and reduces overwhelm.",
      },
      {
        title: "Distress Tolerance Skills",
        description: "Managing overwhelming emotions in the moment",
        link: "/resources/emotional/distress",
        image: "/image/emotional2.jpg",
        technique: "TIPP Skills (DBT)",
        techniqueDetails:
          "Temperature (cold water), Intense exercise, Paced breathing, and Progressive muscle relaxation help regulate intense emotions.",
      },
      {
        title: "Healthy Emotional Expression",
        description: "Constructive ways to express difficult emotions",
        link: "/resources/emotional/expression",
        image: "/image/emotional3.jpg",
        technique: "I-Statements (CBT & Communication Therapy)",
        techniqueDetails:
          "Express emotions constructively: 'I feel [emotion] when [situation] because [reason]'. Promotes healthy communication.",
      },
    ],
  },
];
export const quickResponses = [
  "I'm feeling anxious",
  "I can't sleep",
  "I feel sad",
  "I need help with stress",
  "How to practice mindfulness",
  "Dealing with negative thoughts",
];

export const teamMembers = [
  {
    name: "Dr. Emily Chen",
    role: "Lead Psychologist",
    avatar: "/image/team1.jpg",
  },
  {
    name: "Alex Johnson",
    role: "AI Specialist",
    avatar: "/image/team2.jpg",
  },
  {
    name: "Sarah Williams",
    role: "UX Designer",
    avatar: "/image/team3.jpg",
  },
  {
    name: "Michael Brown",
    role: "Mental Health Advocate",
    avatar: "/image/team4.jpg",
  },
];

export const carouselSlides = [
  {
    image: "/image/hero1.jpg",
    title: "Your Mental Health Matters",
    description:
      "A compassionate AI companion ready to listen, provide resources, and guide you through difficult moments.",
    buttonText: "Start Chat",
    buttonLink: "/chatbot",
  },
  {
    image: "/image/hero2.jpg",
    title: "Evidence-Based Resources",
    description:
      "Access a library of self-help tools and strategies backed by research and mental health professionals.",
    buttonText: "Explore Resources",
    buttonLink: "/resources",
  },
  {
    image: "/image/hero3.jpg",
    title: "24/7 Support When You Need It",
    description:
      "Our AI chatbot is always available to provide support, no matter the time of day or night.",
    buttonText: "Get Support",
    buttonLink: "/chatbot",
  },
];

export const stepsHowItWorks = [
  {
    icon: MessageSquare,
    title: "Chat with AI",
    description:
      "Start a conversation with our AI companion about how you're feeling or what's on your mind.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Get Personalized Resources",
    description:
      "Receive evidence-based strategies and resources tailored to your specific needs and concerns.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Heart,
    title: "Practice Self-Care",
    description:
      "Implement the suggested techniques and track your progress over time for better mental wellbeing.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export const partners = [
  {
    name: "Mental Health Foundation",
    logo: "/image/partner1.jpg",
  },
  {
    name: "World Health Organization",
    logo: "/image/partner2.jpg",
  },
  {
    name: "Mind",
    logo: "/image/partner3.jpg",
  },
  {
    name: "National Institute of Mental Health",
    logo: "/image/partner4.jpg",
  },
  {
    name: "American Psychological Association",
    logo: "/image/partner5.jpg",
  },
];

export const homeStats = [
  {
    value: "1 in 4",
    label: "People experience mental health issues each year",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    value: "60%",
    label: "Of people with mental health issues don't receive treatment",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-100",
  },
  {
    value: "75%",
    label: "Of mental health conditions develop by age 24",
    icon: Brain,
    color: "text-violet-500",
    bgColor: "bg-violet-100",
  },
  {
    value: "800,000+",
    label: "People die by suicide globally each year",
    icon: Clock,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
];

export const testimonials = [
  {
    quote:
      "The chatbot helped me through a difficult night when I was feeling overwhelmed. It provided practical breathing exercises that actually helped calm my anxiety.",
    author: "Sarah J.",
    role: "User",
    initials: "SJ",
    avatarSrc: "/image/avatar1.jpg",
  },
  {
    quote:
      "As someone who struggles with accessing therapy due to cost, this platform has been a valuable resource. The self-help materials are evidence-based and actually useful.",
    author: "Michael T.",
    role: "Regular User",
    initials: "MT",
    avatarSrc: "/image/avatar2.jpg",
  },
  {
    quote:
      "I appreciate how the chatbot knows when to suggest professional help. It's supportive without overstepping boundaries, which is exactly what I needed.",
    author: "Priya K.",
    role: "User",
    initials: "PK",
    avatarSrc: "/image/avatar3.jpg",
  },
  {
    quote:
      "The resources on sleep hygiene completely changed my routine. I've been sleeping better for the first time in years after following the guidance provided.",
    author: "James L.",
    role: "User",
    initials: "JL",
    avatarSrc: "/image/avatar4.jpg",
  },
  {
    quote:
      "As a mental health advocate, I recommend this platform to people who need support between therapy sessions. It's a thoughtful complement to professional care.",
    author: "Dr. Rebecca M.",
    role: "Clinical Psychologist",
    initials: "RM",
    avatarSrc: "/image/avatar5.jpg",
  },
];

