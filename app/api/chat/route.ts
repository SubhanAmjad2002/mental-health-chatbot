import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Add a system message if it doesn't exist
  const messagesWithSystem =
    messages[0]?.role === "system"
      ? messages
      : [
          {
            role: "system",
            content: `You are a compassionate mental health support chatbot. Your purpose is to provide a safe space for users to discuss their feelings, offer evidence-based coping strategies, and direct them to appropriate resources. 

          Guidelines:
          - Respond with empathy and without judgment
          - Provide practical, evidence-based suggestions when appropriate
          - NEVER diagnose medical conditions
          - If someone indicates they might harm themselves or others, immediately recommend professional help and crisis resources
          - Make it clear you are not a replacement for professional mental health services
          - Focus on being supportive, encouraging, and providing general well-being guidance
          - When in doubt, encourage the user to seek professional help
          
          Remember that you're here to provide emotional support and resources, not medical advice.`,
          },
          ...messages,
        ]

  const result = streamText({
    model: openai("gpt-4o"),
    messages: messagesWithSystem,
  })

  return result.toDataStreamResponse()
}

