import React from 'react';
import { ArrowRight, Ticket, Users, FileText, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenRegister: () => void;
  onExploreEvents: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRegister, onExploreEvents }) => {
  return (
    <section className="relative py-28 bg-[#02040b] overflow-hidden border-t border-cyan-950/40">
      
      {/* Background radial cyan glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-cyan-600/15 via-blue-600/5 to-transparent blur-[140px] -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>DECEMBER 16–18, 2026 · IIT BOMBAY</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display mb-6 text-balance">
          YOUR NEXT BIG IDEA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-white">
            STARTS HERE.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance font-normal">
          Explore the challenges. Meet the innovators. Test your engineering limits alongside thousands of peers from around the world.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Register For Techfest 2026</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm uppercase font-bold tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>Explore All Tracks</span>
          </button>
        </div>

        {/* College Ambassador Program Callout Strip */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">
                Become a Techfest College Ambassador
              </h4>
              <p className="text-xs text-slate-400">
                Lead the Techfest contingent from your campus, earn leadership certificates, and access VIP networking.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenRegister}
            className="px-4 py-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/40 rounded-lg border border-cyan-800/50 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
          >
            Apply as CA
          </button>
        </div>

      </div>
    </section>
  );
};
