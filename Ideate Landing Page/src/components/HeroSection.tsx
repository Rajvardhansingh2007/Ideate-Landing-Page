import React from 'react';
import { ArrowRight, ChevronDown, Compass, Award } from 'lucide-react';
import { PATRONAGES } from '../data/techfestData';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onExploreEvents: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onExploreEvents }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden tech-grid-pattern">
      {/* Background Lighting Gradients (Selective Cyan Glow & Deep Navy) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent blur-[120px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-0 w-[500px] h-[450px] bg-cyan-600/8 blur-[140px] -z-10" 
      />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Top Editorial Kicker & Technical Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4 border-b border-white/5 pb-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase">30th Edition</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Indian Institute of Technology Bombay</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className="text-slate-300">Dec 16–18, 2026</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-slate-500">
            <Compass className="w-3.5 h-3.5 text-cyan-500" />
            <span>19.1334° N, 72.9133° E</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Powai, Mumbai</span>
          </div>
        </div>

        {/* Main Grid: Headline & Campaign Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Dramatic Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400/80"></span>
              Asia's Largest Science & Technology Festival
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 text-balance font-display">
              THE FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-white">
                ISN'T WAITING.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8 text-balance font-normal">
              Where imagination meets engineering. Where breakthrough robotics, autonomous algorithms, and global innovators converge for three transformative days at IIT Bombay.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreEvents}
                className="px-6 py-3.5 text-xs sm:text-sm uppercase font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenRegister}
                className="px-6 py-3.5 text-xs sm:text-sm uppercase font-bold tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Register Now</span>
              </button>
            </div>

            {/* Patronage Endorsements - Clean Unboxed Text with Separators */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase tracking-wider text-[11px] text-slate-400">Institutional Patronages</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                {PATRONAGES.map((item, index) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {index < PATRONAGES.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-900/40 bg-slate-950/60 shadow-2xl shadow-cyan-950/30 group">
              
              {/* Subtle Overlay Technical Lines */}
              <div className="absolute inset-0 pointer-events-none z-10 border border-cyan-500/10 rounded-2xl">
                {/* Crosshairs */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400/60" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyan-400/60" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyan-400/60" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400/60" />
              </div>

              {/* Main Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/techfest_hero_visual_1792511714438.jpg"
                  alt="Frontier Robotics & Engineering Arena at Techfest IIT Bombay"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                {/* Contrast gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
              </div>

              {/* Bottom Caption & Live Tag */}
              <div className="p-4 sm:p-5 relative z-20 -mt-6">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                  <span className="text-cyan-400 font-medium">TECHCONNECT PAVILION</span>
                  <span>ARENA 01</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  Autonomous Rovers & Humanoid Systems
                </h3>
                <p className="text-xs text-slate-400">
                  Global engineering teams and IIT Bombay R&D laboratories demonstrating physical artificial intelligence live at the festival arena.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>EST. 1998 · ASIA'S LARGEST SCI-TECH FESTIVAL</span>
        </div>
        <a
          href="#identity"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
