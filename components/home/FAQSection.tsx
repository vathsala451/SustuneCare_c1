"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F6F3ED] dark:bg-[#071329] border-b border-[#DCE3EA] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/15 dark:border-white/15 text-xs font-bold text-[#0B1F3A] dark:text-[#F3DC87]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>CLARITY &amp; TRANSPARENCY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3A] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#5A6E85] dark:text-slate-300 leading-relaxed font-body">
            Essential answers on service coverage, legal compliance, pricing transparency,
            and how we communicate across international time zones.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-[#DCE3EA] dark:border-white/10 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B56D] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#0B1F3A] dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D8B56D] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5A6E85] dark:text-slate-300 leading-relaxed border-t border-[#DCE3EA] dark:border-white/10 font-body"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#5A6E85] dark:text-slate-400 mb-4 font-body">
            Have a unique question regarding ancestral property, medical routines, or legal escrow?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-sustune-chat"));
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1F3A] dark:bg-[#D8B56D] text-white dark:text-[#0B1F3A] text-xs font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D8B56D] dark:text-[#0B1F3A]" />
              <span>Ask 24/7 AI Concierge</span>
            </button>
            <Button
              href="/contact"
              variant="outline"
              size="sm"
              className="border-[#0B1F3A] dark:border-white/20 text-[#0B1F3A] dark:text-white hover:border-[#D8B56D]"
              icon={<MessageSquare className="w-3.5 h-3.5 text-[#D8B56D]" />}
            >
              Speak with an NRI Concierge Specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
