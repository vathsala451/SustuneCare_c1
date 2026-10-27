"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SustuneEmblem } from "@/components/ui/Logo";
import {
  PAGE_SUGGESTED_QUESTIONS,
  PageSuggestedQuestion,
  ChatAction,
} from "@/lib/chat-knowledge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  actions?: ChatAction[];
  suggestedQuestions?: string[];
  timestamp: string;
}

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const pathname = usePathname() || "/";
  const router = useRouter();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Dynamic suggested questions based on current page
  const pageSuggestions: PageSuggestedQuestion[] =
    PAGE_SUGGESTED_QUESTIONS[pathname] || PAGE_SUGGESTED_QUESTIONS["/"] || [];

  // Context name
  const pageContextTitle =
    pathname.includes("/sparsh")
      ? "Sparsh Elder Care"
      : pathname.includes("/aegis")
      ? "Aegis Property Stewardship"
      : pathname.includes("/contact")
      ? "NRI Consultation Desk"
      : pathname.includes("/why-sustune")
      ? "Institutional Governance"
      : pathname.includes("/portal-preview")
      ? "Client Portal Dashboard"
      : "Sustune Care Services";

  // Initialize welcome message on mount
  useEffect(() => {
    const initialWelcome: Message = {
      id: "welcome-1",
      role: "assistant",
      content:
        `Welcome to **Sustune Care**. I am your 24/7 AI Concierge.\n\n` +
        `I can provide verified details on our **Sparsh Elder Care** (24/7 SOS, doctor escorts, medicine delivery) and **Aegis Property Management** (corporate tenants, escrow collections, 80-point inspections) for families in **Bengaluru, Hyderabad, and Delhi NCR**.\n\n` +
        `How may I assist you today?`,
      actions: [
        { label: "Explore Sparsh Elder Care", href: "/sparsh" },
        { label: "Explore Aegis Property", href: "/aegis" },
        { label: "Book a Consultation", href: "/contact?type=consultation", variant: "primary" },
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([initialWelcome]);
  }, []);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Custom event listener so other components can trigger the chatbot
  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent<{ question?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.question) {
        setTimeout(() => {
          handleSendMessage(customEvent.detail.question);
        }, 150);
      }
    };
    window.addEventListener("open-sustune-chat", handleOpenChat);
    return () => window.removeEventListener("open-sustune-chat", handleOpenChat);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input on open
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Restart / Reset conversation
  const handleRestart = () => {
    setMessages([
      {
        id: "restart-" + Date.now(),
        role: "assistant",
        content: `Conversation restarted. How can I help you regarding **Sparsh Elder Care**, **Aegis Property Management**, or booking an **NRI Consultation**?`,
        actions: [
          { label: "Explore Sparsh Care", href: "/sparsh" },
          { label: "Explore Aegis Property", href: "/aegis" },
          { label: "Book Consultation", href: "/contact?type=consultation", variant: "primary" },
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Send message
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsgId = "user-" + Date.now();
    const newMsg: Message = {
      id: userMsgId,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
          pathname,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();

      const botMsg: Message = {
        id: "bot-" + Date.now(),
        role: "assistant",
        content: data.reply || "I am available to assist you with Sustune Care services.",
        actions: data.actions || [],
        suggestedQuestions: data.suggestedQuestions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const fallbackMsg: Message = {
        id: "bot-err-" + Date.now(),
        role: "assistant",
        content:
          "I apologize for the interruption. You can connect directly with our 24/7 NRI concierge desk or book a complimentary strategy consultation.",
        actions: [
          { label: "Book NRI Consultation", href: "/contact?type=consultation", variant: "primary" },
          { label: "WhatsApp Concierge", href: "https://wa.me/918007878863", variant: "whatsapp", external: true },
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Render markdown text safely with bold & list formatting
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");
    return (
      <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) {
            return <div key={idx} className="h-1.5" />;
          }

          let cleanLine = line;
          let prefix: React.ReactNode = null;

          if (line.trim().startsWith("• ") || line.trim().startsWith("- ")) {
            prefix = <span className="text-[#D8B56D] font-bold shrink-0">•</span>;
            cleanLine = line.replace(/^\s*(?:•|-)\s+/, "");
          } else {
            const numMatch = line.trim().match(/^(\d+\.)\s+(.*)/);
            if (numMatch) {
              prefix = <span className="text-[#D8B56D] font-bold shrink-0">{numMatch[1]}</span>;
              cleanLine = numMatch[2];
            }
          }

          const parts = cleanLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

          const formattedLine = parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="font-semibold text-[#0B1F3A] dark:text-[#F3DC87]">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
              const match = part.match(/\[(.*?)\]\((.*?)\)/);
              if (match) {
                const [, text, url] = match;
                return (
                  <Link
                    key={pIdx}
                    href={url}
                    onClick={() => {
                      if (url.startsWith("/")) {
                        router.push(url);
                      }
                    }}
                    className="font-medium text-[#B79224] dark:text-[#D8B56D] hover:underline"
                  >
                    {text}
                  </Link>
                );
              }
            }
            return part;
          });

          if (prefix) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-1">
                {prefix}
                <span className="flex-1">{formattedLine}</span>
              </div>
            );
          }

          return <p key={idx}>{formattedLine}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* 1. Floating Chat Trigger Button (Bottom-Right) */}
      <aside aria-label="Customer Support Assistant" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="sustune-ai-chat-panel"
          aria-label={isOpen ? "Close AI Concierge Chat" : "Open 24/7 Sustune AI Concierge Chat"}
          className={`relative group flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 ${
            isOpen
              ? "bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] ring-2 ring-[#D8B56D]"
              : "bg-gradient-to-r from-[#0B1F3A] via-[#122B4E] to-[#0B1F3A] text-white hover:shadow-[#D8B56D]/20 ring-1 ring-[#D8B56D]/50 hover:ring-[#D8B56D]"
          }`}
        >
          {/* Active status pulse indicator */}
          {!isOpen && (
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
          )}

          {isOpen ? (
            <X className="w-5 h-5 text-[#D8B56D] transition-transform duration-200" />
          ) : (
            <MessageSquare className="w-5 h-5 text-[#D8B56D] transition-transform duration-200 group-hover:scale-110" />
          )}

          <div className="flex flex-col text-left">
            <span className="text-xs font-serif font-bold tracking-wide">
              {isOpen ? "Close Chat" : "AI Concierge"}
            </span>
            {!isOpen && (
              <span className="text-[10px] text-[#D8B56D] font-medium tracking-tight">
                24/7 Verified Support
              </span>
            )}
          </div>
        </button>
      </aside>

      {/* 2. Compact Floating Chat Window */}
      {isOpen && (
        <div
          id="sustune-ai-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Sustune AI Concierge Chat Dialog"
          className="fixed bottom-20 sm:bottom-22 right-3 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[410px] h-[580px] max-h-[82vh] flex flex-col rounded-3xl bg-white dark:bg-[#071329] border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="relative px-4 py-3.5 bg-[#0B1F3A] dark:bg-[#061224] border-b border-[#D8B56D]/30 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm">
                <SustuneEmblem size={28} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-bold text-sm tracking-tight text-white">
                    Sustune AI Concierge
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#D8B56D]/20 text-[#F3DC87] border border-[#D8B56D]/40">
                    24/7
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Online &bull; Grounded Knowledge</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleRestart}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Context Badge */}
          <div className="px-4 py-1.5 bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
            <div className="flex items-center gap-1.5 truncate">
              <Sparkles className="w-3 h-3 text-[#D8B56D]" />
              <span className="truncate">Context: {pageContextTitle}</span>
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              Verified
            </span>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-white/10">
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                      isUser
                        ? "bg-[#B79224] text-white"
                        : "bg-[#0B1F3A] dark:bg-white/10 text-[#D8B56D]"
                    }`}
                  >
                    {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 shadow-xs transition-colors ${
                      isUser
                        ? "bg-[#0B1F3A] text-white rounded-tr-xs"
                        : "bg-slate-50 dark:bg-[#0B1F3A]/70 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 rounded-tl-xs"
                    }`}
                  >
                    {renderFormattedContent(msg.content)}

                    {/* Action Buttons */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap gap-1.5">
                        {msg.actions.map((act, aIdx) => {
                          const isPrimary = act.variant === "primary";
                          const isWhatsApp = act.variant === "whatsapp";

                          if (act.external) {
                            return (
                              <a
                                key={aIdx}
                                href={act.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                                  isWhatsApp
                                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                                    : "bg-white dark:bg-white/10 text-[#0B1F3A] dark:text-[#F3DC87] border border-slate-200 dark:border-white/20"
                                }`}
                              >
                                <span>{act.label}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={aIdx}
                              href={act.href}
                              onClick={() => {
                                setIsOpen(false);
                              }}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                                isPrimary
                                  ? "bg-[#D8B56D] hover:bg-[#B79224] text-[#0B1F3A] shadow-xs"
                                  : "bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-[#0B1F3A] dark:text-slate-100 border border-slate-200 dark:border-white/15"
                              }`}
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-3 h-3 text-[#0B1F3A] dark:text-[#D8B56D]" />
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    <div className="mt-1 text-[9px] text-right opacity-60">
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#0B1F3A] dark:bg-white/10 text-[#D8B56D] flex items-center justify-center shrink-0 text-xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-50 dark:bg-[#0B1F3A]/70 border border-slate-200/80 dark:border-white/10 rounded-2xl rounded-tl-xs p-3 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-[#D8B56D] animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-[#D8B56D] animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-[#D8B56D] animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                    <span className="ml-2 text-[11px]">Consulting Sustune Knowledge...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions Section */}
          <div className="px-3.5 py-2 bg-slate-50/80 dark:bg-white/5 border-t border-slate-100 dark:border-white/5 shrink-0">
            <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-400 mb-1.5 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#D8B56D]" />
              <span>Suggested for this page:</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {pageSuggestions.map((item, qIdx) => (
                <button
                  key={qIdx}
                  onClick={() => handleSendMessage(item.question)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-white/10 text-[#0B1F3A] dark:text-slate-200 border border-slate-200 dark:border-white/15 hover:border-[#D8B56D] dark:hover:border-[#D8B56D] hover:text-[#B79224] dark:hover:text-[#F3DC87] transition-all cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-[#061224] border-t border-slate-200 dark:border-white/10 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about Sparsh, Aegis, pricing..."
              disabled={isLoading}
              className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#0B1F3A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D8B56D] transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A] hover:bg-[#B79224] dark:hover:bg-[#F3DC87] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Grounding Disclaimer */}
          <div className="px-3 py-1 bg-slate-100 dark:bg-black/30 text-[9px] text-center text-slate-400 dark:text-slate-400 border-t border-slate-200/50 dark:border-white/5 shrink-0">
            Answers grounded in official Sustune Care documentation.
          </div>
        </div>
      )}
    </>
  );
}
