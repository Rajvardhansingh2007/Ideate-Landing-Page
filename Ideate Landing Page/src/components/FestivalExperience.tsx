import React from 'react';
import { Sparkles, Zap, Flame, Compass, Users } from 'lucide-react';
import { PAST_LEGENDS } from '../data/techfestData';

export const FestivalExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#02050d] relative border-t border-cyan-950/40 overflow-hidden">
      
      {/* Background ambient light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 right-10 w-[600px] h-[500px] bg-cyan-500/5 blur-[160px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-2">
            Campus Atmosphere & Night Spectacles
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
                THE FESTIVAL EXPERIENCE
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl text-balance">
                From high-energy night symphonies to live humanoid demonstrations and groundbreaking campus R&D, Techfest transforms the 550-acre IIT Bombay campus into an epicenter of human ingenuity.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-cyan-400">POWAI CAMPUS</span>
              <span aria-hidden="true">·</span>
              <span>550 ACRES OF INNOVATION</span>
            </div>
          </div>
        </div>

        {/* Cinematic Bento Layout for Atmosphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-16">
          
          {/* Card 1: Technoholix (Wide 7-col) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 group flex flex-col justify-between shadow-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/techfest_technoholix_stage_1792511717935.jpg"
                alt="Technoholix Stage at IIT Bombay Gymkhana Grounds"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050d] via-black/40 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-black/70 px-3 py-1.5 rounded-lg border border-cyan-500/40 backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                <span>NIGHT SHOWS · TECHNOHOLIX</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 -mt-6 relative z-10">
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Technoholix: Science & EDM Synthesis
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When night falls over Powai Lake, Techfest gathers over 25,000 attendees at the Main Gymkhana grounds for a monumental collision of architectural lasers, technological circus performances, and international electronic music headliners.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Free Entry with Delegate Pass</span>
                <span className="text-cyan-400">Gymkhana Grounds · 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Card 2: Humanoids & TechConnect (5-col) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 group flex flex-col justify-between shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/techfest_humanoid_exhibit_1792511717300.jpg"
                alt="Humanoid Robotics Exhibition at Techfest"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050d] via-black/40 to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-black/70 px-3 py-1.5 rounded-lg border border-cyan-500/40 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>EXHIBITIONS · TECHCONNECT</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 -mt-6 relative z-10">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                TechConnect & Frontier Humanoids
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Interact with state-of-the-art bipedal humanoid robots, bionic prosthetics, ISRO aerospace equipment, and student formula racing electric cars engineered right here at IIT Bombay.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>100+ Live R&D Exhibits</span>
                <span className="text-cyan-400">All 3 Days</span>
              </div>
            </div>
          </div>

        </div>

        {/* Historical Intellectual Legacy: Keynote Speakers */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-1">
                Intellectual Heritage
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Visionaries Who Stood On The Techfest Stage
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Over nearly three decades, Techfest has hosted pioneers who redefined human knowledge and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_LEGENDS.map((legend) => (
              <div key={legend.name} className="flex flex-col space-y-1">
                <span className="text-base font-bold text-white font-display">
                  {legend.name}
                </span>
                <span className="text-xs font-semibold text-cyan-400 font-mono">
                  {legend.role}
                </span>
                <p className="text-xs text-slate-400 pt-1 leading-snug">
                  {legend.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
