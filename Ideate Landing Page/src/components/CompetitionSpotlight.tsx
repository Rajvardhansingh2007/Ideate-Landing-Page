import React from 'react';
import { ArrowRight, Shield, Zap, Target, Cpu, CheckCircle } from 'lucide-react';
import { FEATURED_COMPETITIONS, EventItem } from '../data/techfestData';

interface CompetitionSpotlightProps {
  onSelectEvent: (event: EventItem) => void;
  onOpenRegister: (eventId?: string) => void;
}

export const CompetitionSpotlight: React.FC<CompetitionSpotlightProps> = ({
  onSelectEvent,
  onOpenRegister,
}) => {
  const robowars = FEATURED_COMPETITIONS.find((c) => c.id === 'robowars') || FEATURED_COMPETITIONS[0];
  const supporting = FEATURED_COMPETITIONS.filter((c) => c.id !== 'robowars');

  return (
    <section id="competitions" className="py-24 bg-[#02050e] relative border-t border-cyan-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-2">
            Combat Engineering & Autonomous Arenas
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                COMPETITION ARENA
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl text-balance">
                High-stakes combat robotics, autonomous maze navigation, and algorithm challenges where collegiate teams from across the globe test mechanical durability and real-time control.
              </p>
            </div>
            <button
              onClick={() => onOpenRegister('robowars')}
              className="px-5 py-2.5 text-xs uppercase font-bold tracking-wider text-cyan-400 hover:text-black bg-cyan-950/60 hover:bg-cyan-400 border border-cyan-800/80 hover:border-cyan-400 rounded-lg transition-all active:scale-95 whitespace-nowrap self-start md:self-auto cursor-pointer"
            >
              Register Team
            </button>
          </div>
        </div>

        {/* Featured Marquee: International Robowars */}
        <div className="rounded-3xl border border-cyan-800/50 bg-gradient-to-b from-slate-900/90 to-[#030712] overflow-hidden shadow-2xl mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Action Banner */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] overflow-hidden bg-slate-950">
              <img
                src={robowars.image}
                alt="Techfest International Robowars Heavyweight Arena Collision"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#02050e]/40 to-[#02050e]" />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-black/70 px-3 py-1.5 rounded-lg border border-cyan-500/40 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>FLAGSHIP ROBOT COMBAT ARENA</span>
              </div>
            </div>

            {/* Feature Content Breakdown */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <span>60KG HEAVYWEIGHT & 8KG FEATHERWEIGHT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                  {robowars.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {robowars.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 mb-8 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Bulletproof Polycarbonate & Steel-Reinforced Hazard Enclosure</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Dual-Elimination Bracket with International Competitor Teams</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Strict Failsafe Scrutineering & Radio Interference Verification</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-slate-400">
                  <span>Gymkhana Arena · Dec 16–18</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectEvent(robowars)}
                    className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    View Rulebook
                  </button>
                  <button
                    onClick={() => onOpenRegister(robowars.id)}
                    className="px-5 py-2.5 text-xs uppercase font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Register Bot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Supporting Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {supporting.map((comp) => (
            <div
              key={comp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="text-cyan-400 font-semibold">{comp.badgeText}</span>
                  <span>{comp.date}</span>
                </div>
                <h4 className="text-xl font-bold text-white font-display mb-2">
                  {comp.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {comp.description}
                </p>

                {comp.stats && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 mb-6 text-center">
                    {comp.stats.map((s, idx) => (
                      <div key={idx}>
                        <p className="text-[10px] text-slate-500 uppercase">{s.label}</p>
                        <p className="text-xs font-semibold text-slate-200 mt-0.5">{s.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {comp.venue.split(',')[0]}
                </span>
                <button
                  onClick={() => onSelectEvent(comp)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Explore Track Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
