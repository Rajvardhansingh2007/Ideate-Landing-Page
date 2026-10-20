import React, { useState } from 'react';
import { ArrowUpRight, Calendar, MapPin, Sparkles, Filter } from 'lucide-react';
import { ALL_EVENTS, EventItem } from '../data/techfestData';

interface EventDiscoveryProps {
  onSelectEvent: (event: EventItem) => void;
  onOpenRegister: (eventId?: string) => void;
}

export const EventDiscovery: React.FC<EventDiscoveryProps> = ({
  onSelectEvent,
  onOpenRegister,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Tracks');

  const categories = [
    'All Tracks',
    'Competitions',
    'Workshops',
    'Exhibitions',
    'Lectures & Shows',
  ];

  const filteredEvents = activeCategory === 'All Tracks'
    ? ALL_EVENTS
    : ALL_EVENTS.filter((e) => e.category === activeCategory);

  return (
    <section id="events" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/5 blur-[140px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div>
            <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-2">
              Festival Programming
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              DISCOVER TECHFEST
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl text-balance">
              Explore Asia's largest convergence of robotics arenas, hands-on engineering masterclasses, international research pavilions, and night spectacles.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional button elements with active/inactive states) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800/80 overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-400 text-black shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento-Grid Layout (Distinct Compositions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {filteredEvents.map((event, index) => {
            // Composition 1: First item is a prominent 2-column Marquee Bento Card
            const isMarquee = index === 0;

            if (isMarquee) {
              return (
                <div
                  key={event.id}
                  onClick={() => onSelectEvent(event)}
                  className="md:col-span-2 relative rounded-2xl overflow-hidden border border-cyan-900/40 bg-slate-950/70 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl"
                >
                  {/* Visual Background with Scrim */}
                  <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={event.image}
                      alt={event.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
                    
                    {/* Top Technical Metadata */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">{event.category}</span>
                        <span aria-hidden="true" className="text-slate-500">·</span>
                        <span>{event.badgeText}</span>
                      </div>
                      <span className="hidden sm:inline-block text-slate-400">DEC 16-18</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 -mt-10 relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors font-display mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-300 line-clamp-2 max-w-2xl mb-4">
                        {event.description}
                      </p>
                    </div>

                    {/* Metadata strip & CTA */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{event.venue}</span>
                        </div>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span>{event.eligibility}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-bold tracking-wider text-cyan-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          Inspect Track Details
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Composition 2: Vertical Editorial Cards
            return (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="relative rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 bg-slate-950/60 hover:bg-slate-900/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-lg"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  {/* Unboxed Metadata Header */}
                  <div className="absolute top-3 left-3 text-xs font-mono text-cyan-400 font-medium">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display mb-1.5">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Footnote */}
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 truncate max-w-[180px]">
                      {event.venue.split(',')[0]}
                    </span>
                    <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
                      Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Empty state safeguard */}
        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-slate-400 text-sm">No events found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};
