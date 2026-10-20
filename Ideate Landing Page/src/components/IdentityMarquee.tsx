import React from 'react';
import { FESTIVAL_METRICS } from '../data/techfestData';

export const IdentityMarquee: React.FC = () => {
  const editorialKeywords = [
    'SCIENCE',
    'TECHNOLOGY',
    'INNOVATION',
    'COMPETITION',
    'CREATIVITY',
    'AUTONOMY',
    'ROBOTICS',
    'CYBERNETICS',
  ];

  return (
    <section id="identity" className="relative border-y border-cyan-950/60 bg-[#040915] overflow-hidden py-8">
      {/* Dynamic Animated Marquee Row */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap select-none py-2">
        <div className="flex items-center gap-10 animate-[marquee_28s_linear_infinite] shrink-0 text-3xl sm:text-5xl font-black tracking-tighter text-slate-700/80 font-display">
          {editorialKeywords.concat(editorialKeywords).map((word, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-cyan-400 transition-colors duration-300">
                {word}
              </span>
              <span aria-hidden="true" className="text-cyan-500/40 text-2xl">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
        <div 
          aria-hidden="true" 
          className="flex items-center gap-10 animate-[marquee_28s_linear_infinite] shrink-0 text-3xl sm:text-5xl font-black tracking-tighter text-slate-700/80 font-display"
        >
          {editorialKeywords.concat(editorialKeywords).map((word, idx) => (
            <React.Fragment key={`repeat-${idx}`}>
              <span className="hover:text-cyan-400 transition-colors duration-300">
                {word}
              </span>
              <span aria-hidden="true" className="text-cyan-500/40 text-2xl">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Verified Benchmarks Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FESTIVAL_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tabular-nums tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5 leading-snug">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
