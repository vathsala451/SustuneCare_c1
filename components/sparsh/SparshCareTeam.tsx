import React from "react";
import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, Stethoscope, Heart, Activity } from "lucide-react";

interface CareTeamMember {
  name: string;
  role: string;
  qualifications: string;
  hub: string;
  photo: string;
  quote: string;
  divisionTag: string;
  accentColor: string;
  icon: React.ReactNode;
}

export function SparshCareTeam() {
  const team: CareTeamMember[] = [
    {
      name: "Sister Mercy Varghese",
      role: "Senior Clinical Care Companion",
      qualifications: "B.Sc Nursing, BLS Certified, 14 Years Geriatric ICU Experience",
      hub: "Bengaluru Hub",
      photo: "https://images.unsplash.com/photo-1594824813583-37651a2d659d?auto=format&fit=crop&w=500&q=80",
      quote:
        "When I escort Col. Sharma to his cardiologist, I don't just hold his file. I hold his arm, listen to his Army stories, and make sure he feels respected every second. His son in Seattle sleeps peacefully knowing I am there.",
      divisionTag: "Clinical Nursing & Hospital Escort",
      accentColor: "border-emerald-400/60 bg-emerald-50/40",
      icon: <Stethoscope className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      name: "Rahul Deshmukh, MSW",
      role: "Senior Wellness & Tech Companion",
      qualifications: "Master of Social Work (Gerontology), 7 Years Senior Advocacy",
      hub: "Hyderabad Hub",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      quote:
        "Loneliness is more damaging than high blood pressure. Setting up a trouble-free iPad FaceTime call or accompanying Aunty for her evening stroll in KBR Park restores that spark of joy they miss when kids live abroad.",
      divisionTag: "Senior Advocacy & Companionship",
      accentColor: "border-[#D4AF37]/60 bg-amber-50/40",
      icon: <Heart className="w-4 h-4 text-[#947416] dark:text-[#D8B56D]" />,
    },
    {
      name: "Dr. Priya Nair, MD",
      role: "Head of Geriatric Tele-Triage",
      qualifications: "MD Internal Medicine, Former Senior Consultant at Fortis",
      hub: "Central Clinical Desk",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
      quote:
        "Our telemetry algorithms flag subtle changes in systolic trends or blood sugar before they escalate into emergency admissions. We act early, decisively, and always with profound empathy.",
      divisionTag: "Central Medical Telemetry Governance",
      accentColor: "border-blue-400/60 bg-blue-50/40",
      icon: <Activity className="w-4 h-4 text-blue-700 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="care-team" className="py-20 sm:py-28 bg-white dark:bg-[#061224] border-t border-slate-100 dark:border-white/10 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F5132]/10 dark:bg-emerald-950/40 border border-[#0F5132]/20 dark:border-emerald-500/30 text-xs font-semibold text-[#0F5132] dark:text-emerald-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dedicated Professionals Back Home</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1B3D] dark:text-white tracking-tight">
            Meet Your Parents’ Care Team
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-body">
            Every Sustune Care Companion undergoes triple-tier background vetting, police verification,
            and hospital geriatric training.
          </p>
        </div>

        {/* Distinctive Editorial Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className={`rounded-3xl p-6 sm:p-7 border ${member.accentColor} dark:border-white/10 shadow-sm flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative bg-white dark:bg-[#0B1F3A]/70`}
            >
              <div>
                {/* Photo & Hub Badge */}
                <div className="relative mb-5 rounded-2xl overflow-hidden h-60 w-full shadow-inner bg-slate-100 dark:bg-white/5">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/20 font-display">
                    {member.hub}
                  </span>
                  <div className="absolute top-3 right-3 bg-white/95 dark:bg-[#0B1F3A] backdrop-blur-md p-1.5 rounded-lg shadow-sm border border-slate-200 dark:border-white/20">
                    {member.icon}
                  </div>
                </div>

                {/* Division Pill */}
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/15 font-display">
                    {member.divisionTag}
                  </span>
                </div>

                {/* Name & Role */}
                <h4 className="font-serif text-xl font-bold text-[#0B1B3D] dark:text-white">
                  {member.name}
                </h4>
                <div className="text-xs font-semibold text-[#0F5132] dark:text-emerald-400 mt-0.5 font-display">
                  {member.role}
                </div>

                {/* Credentials */}
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 mb-4 flex items-center gap-1.5 font-body">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{member.qualifications}</span>
                </div>

                {/* Editorial Quote Card */}
                <div className="text-xs text-slate-700 dark:text-slate-200 italic leading-relaxed bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/10 relative font-body">
                  <span className="text-2xl text-[#D4AF37] leading-none select-none font-serif absolute -top-1 left-2 opacity-50">
                    “
                  </span>
                  <p className="pt-1.5 pl-2">{member.quote}</p>
                </div>
              </div>

              {/* Badges footer */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-body">
                <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Background Verified
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-[11px] font-medium">
                  CPR/BLS Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 text-center text-[10px] text-slate-400 italic">
          *Illustrative profile cards depicting qualification standards and regional hub leadership. Active Care Companions and Geriatric Nurses are assigned individually post-assessment based on regional language, personality alignment, and clinical history.
        </div>
      </div>
    </section>
  );
}
