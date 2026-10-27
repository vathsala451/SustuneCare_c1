import React from "react";
import { Clock, Coffee, Stethoscope, Trees, FileText, CheckCircle2 } from "lucide-react";

interface TimelineStep {
  time: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
}

export function SparshTypicalDay() {
  const steps: TimelineStep[] = [
    {
      time: "08:30 AM",
      title: "Gentle Morning Vitals & Tea Check-In",
      desc: "Companion arrives, checks BP and SpO2 with clinical monitors, confirms breakfast, and organizes today's medication tray.",
      icon: <Coffee className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      tag: "Home Telemetry",
    },
    {
      time: "11:00 AM",
      title: "Private Sanitized Hospital Escort",
      desc: "Escorting parents to Manipal Hospital in an air-conditioned cab, navigating registration, and sitting through the doctor consultation.",
      icon: <Stethoscope className="w-5 h-5 text-blue-700 dark:text-blue-400" />,
      tag: "Clinical Escort",
    },
    {
      time: "04:30 PM",
      title: "Park Stroll & Intellectual Conversation",
      desc: "A relaxed 45-minute stroll in the community garden, sharing memories, doing light stretching, and discussing books or news.",
      icon: <Trees className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      tag: "Companionship",
    },
    {
      time: "08:00 PM",
      title: "Digital Diary & NRI Sponsor Debrief",
      desc: "Clinical summary, prescription photos, and a cheerful video memo uploaded to your private client portal.",
      icon: <FileText className="w-5 h-5 text-[#947416] dark:text-[#D8B56D]" />,
      tag: "Overseas Portal Log",
    },
  ];

  return (
    <section id="typical-day" className="py-20 sm:py-28 bg-[#FBFBFB] dark:bg-[#071329] border-t border-slate-100 dark:border-white/10 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-[#0F5132] dark:text-emerald-300 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30 font-display">
            Care Continuity
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B3D] dark:text-white mt-3 tracking-tight">
            A Typical Day With Sparsh Care
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            A predictable, respectful routine balancing physical safety, timely medication,
            and uplifting human connection for your parents back home.
          </p>
        </div>

        {/* 4-Step Responsive Journey Grid */}
        <div className="relative">
          {/* Decorative connector line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-emerald-300 via-blue-300 to-amber-300 -translate-y-12 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.time}
                className="relative p-6 rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-[#0F5132] dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-500/30">
                      {step.time}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/15 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1 font-display">
                    Step 0{idx + 1} • {step.tag}
                  </span>

                  <h4 className="font-bold text-base text-[#0B1B3D] dark:text-white mb-2 leading-snug font-display">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium font-body">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Execution Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Care Continuity Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0B1B3D] text-white border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3DC87] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">Consistent Named Care Companions</h5>
              <p className="text-xs text-slate-300">
                Parents build trust and comfort with the same dedicated companion rather than random rotating caregivers.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-[#F3DC87] border border-[#D4AF37]/40 whitespace-nowrap">
            100% Continuity Model
          </span>
        </div>
      </div>
    </section>
  );
}
