import React from "react";
import { Sparkles, ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/contact-service";
import { siteConfig } from "@/lib/site-config";

export function CTASection() {
  const whatsappUrl = buildWhatsAppLink();

  return (
    <section className="py-20 lg:py-28 bg-[#0B1F3A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(216,181,109,0.18),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D8B56D]/40 text-xs font-bold text-[#F3DC87] font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />
          <span>START WITH A COMPLIMENTARY STRATEGY SESSION</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Your Property Preserved. <br />
          <span className="gold-gradient-text">Your Parents Cherished.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
          Connect with our senior diaspora concierge team today. We will listen to your
          situation, answer questions transparently, and build a tailored care plan designed
          around your family&apos;s peace of mind.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-[#D8B56D] to-[#B79224] hover:from-[#F3DC87] hover:to-[#D8B56D] text-[#0B1F3A] font-bold shadow-xl"
            icon={<Sparkles className="w-4 h-4 text-[#0B1F3A]" />}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Book an NRI Consultation
          </Button>

          <Button
            href={whatsappUrl}
            external
            variant="secondary"
            size="lg"
            className="bg-gradient-to-r from-[#176B63] to-[#0E4842] hover:from-[#1D8278] hover:to-[#176B63] text-white font-bold shadow-xl"
            icon={<MessageSquare className="w-4 h-4 text-white" />}
          >
            Chat on WhatsApp
          </Button>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-slate-300 flex items-center justify-center gap-6 font-body">
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-[#D8B56D]" />
            <span>24/7 Hotline: {siteConfig.phone}</span>
          </span>
          <span>•</span>
          <span>Zero Obligation Consultation</span>
        </div>
      </div>
    </section>
  );
}
