import { NextRequest, NextResponse } from "next/server";
import {
  SUSTUNE_SYSTEM_KNOWLEDGE,
  getGroundedChatReply,
  ChatAction,
} from "@/lib/chat-knowledge";

interface IncomingMessage {
  role: "user" | "assistant" | "model";
  content: string;
}

interface ChatRequestBody {
  message?: string;
  history?: IncomingMessage[];
  pathname?: string;
}

export async function POST(req: NextRequest) {
  try {
    let body: ChatRequestBody;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const { message, history = [], pathname = "/" } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please provide a valid, non-empty message." },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();

    // Check for configured Gemini API key in server-side environment
    const geminiApiKey =
      process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (geminiApiKey) {
      try {
        // Attempt Gemini API call with 8-second abort timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        // Format conversation history for Gemini API
        const contents = [
          // System prompt as first turn or system_instruction
          {
            role: "user",
            parts: [
              {
                text: `${SUSTUNE_SYSTEM_KNOWLEDGE}\n\nThe user is currently browsing the page: "${pathname}".\n\nPlease answer the user's question concisely, helpfully, and professionally. Ground your answer strictly in the official facts above. Never invent services, prices, or policies. If you mention actions or pages, use markdown links like [Sparsh Care](/sparsh), [Aegis Property](/aegis), or [Book Consultation](/contact).`,
              },
            ],
          },
          {
            role: "model",
            parts: [
              {
                text: "Understood. I am the Sustune Care AI Concierge. I will provide concise, warm, professional, and strictly grounded answers about Sparsh Elder Care, Aegis Property Stewardship, and NRI support, with direct links to relevant pages.",
              },
            ],
          },
        ];

        // Append recent user & model turns (last 6 turns max for speed & context)
        const recentHistory = history.slice(-6);
        for (const item of recentHistory) {
          if (item.content && item.content.trim()) {
            contents.push({
              role: item.role === "assistant" || item.role === "model" ? "model" : "user",
              parts: [{ text: item.content.trim() }],
            });
          }
        }

        // Add current user message
        contents.push({
          role: "user",
          parts: [{ text: trimmedMessage }],
        });

        // Use gemini-1.5-flash for speed, low latency, and deterministic low temperature
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2, // Low temperature for high factuality and zero hallucinations
              topK: 20,
              topP: 0.8,
              maxOutputTokens: 600,
            },
          }),
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const generatedText =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (generatedText && generatedText.trim()) {
            // Attach smart context-driven actions based on generated content
            const actions: ChatAction[] = [];
            const lower = (generatedText + " " + trimmedMessage).toLowerCase();

            if (lower.includes("sparsh") || lower.includes("elder") || lower.includes("parent")) {
              actions.push({ label: "Explore Sparsh Care", href: "/sparsh#care-services" });
            }
            if (lower.includes("aegis") || lower.includes("property") || lower.includes("tenant")) {
              actions.push({ label: "Explore Aegis Services", href: "/aegis#property-services" });
            }
            if (lower.includes("consult") || lower.includes("book") || lower.includes("enquir")) {
              actions.push({ label: "Book Consultation", href: "/contact?type=consultation", variant: "primary" });
            }
            if (lower.includes("portal") || lower.includes("dashboard")) {
              actions.push({ label: "Open Client Portal", href: "/portal/login" });
            }
            if (actions.length === 0) {
              actions.push({ label: "Book Free Consultation", href: "/contact?type=consultation", variant: "primary" });
              actions.push({ label: "Explore Services", href: "/" });
            }

            return NextResponse.json({
              reply: generatedText.trim(),
              actions,
              suggestedQuestions: [
                "What are the Sparsh care plans and pricing?",
                "How does Aegis property management work?",
                "How can I book a free NRI consultation?",
              ],
              source: "gemini",
            });
          }
        }
      } catch (geminiError) {
        // Log on server only, never leak error to client
        console.warn("Gemini API call skipped or timed out, using grounded knowledge engine:", geminiError);
      }
    }

    // 100% Reliable Grounded Fallback: Instant response from verified Sustune Care Knowledge Engine
    const groundedResult = getGroundedChatReply(trimmedMessage, pathname);

    return NextResponse.json({
      reply: groundedResult.reply,
      actions: groundedResult.actions || [],
      suggestedQuestions: groundedResult.suggestedQuestions || [],
      source: "knowledge_base",
    });
  } catch (error) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json(
      {
        reply:
          "I apologize, but I encountered a momentary glitch. Please connect directly with our 24/7 NRI concierge desk or book a strategy consultation.",
        actions: [
          { label: "Book Consultation", href: "/contact", variant: "primary" },
          { label: "WhatsApp Concierge", href: "https://wa.me/918007878863", variant: "whatsapp", external: true },
        ],
        suggestedQuestions: [
          "What services does Sparsh offer?",
          "What property services does Aegis provide?",
          "How can I book a consultation?",
        ],
        source: "knowledge_base",
      },
      { status: 200 }
    );
  }
}
