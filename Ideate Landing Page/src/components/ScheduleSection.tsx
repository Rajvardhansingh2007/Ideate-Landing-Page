import React, { useState } from 'react';
import { Clock, MapPin, Calendar, Search } from 'lucide-react';
import { SCHEDULE_DAYS, ScheduleItem } from '../data/techfestData';

export const ScheduleSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentItems = SCHEDULE_DAYS[selectedDay] || [];
  const filteredSchedule = searchQuery.trim() === ''
    ? currentItems
    : currentItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section id="schedule" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div>
            <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-2">
              Festival Program Timetable
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              FESTIVAL SCHEDULE
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl text-balance">
              Three continuous days of robotic warfare, algorithmic challenges, keynotes, and evening celebrations at IIT Bombay.
            </p>
          </div>

          {/* Day Selection Tabs & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
              {[1, 2, 3].map((day) => {
                const isActive = selectedDay === day;
                const dateLabels: Record<number, string> = {
                  1: 'Day 1 · Dec 16',
                  2: 'Day 2 · Dec 17',
                  3: 'Day 3 · Dec 18',
                };
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-cyan-400 text-black font-bold shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {dateLabels[day]}
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search schedule..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-2 text-xs rounded-lg bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none w-full sm:w-44 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Timeline Row List */}
        <div className="space-y-3">
          {filteredSchedule.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              {/* Time Column */}
              <div className="flex items-center gap-3 md:w-44 shrink-0 font-mono text-cyan-400 text-sm font-semibold">
                <Clock className="w-4 h-4 text-cyan-400/80 shrink-0" />
                <span>{item.time}</span>
              </div>

              {/* Title and Description */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                  <span className="text-cyan-300 font-semibold">{item.category}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                  {item.description}
                </p>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 md:text-right shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 md:hidden" />
                <span>{item.venue}</span>
              </div>
            </div>
          ))}

          {filteredSchedule.length === 0 && (
            <div className="p-10 rounded-xl bg-slate-950 text-center border border-slate-800">
              <p className="text-xs text-slate-400">No events matched your search query on Day {selectedDay}.</p>
            </div>
          )}
        </div>

        {/* Venue Map & Transport Note */}
        <div className="mt-10 p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Campus Location: <strong>IIT Bombay, Powai, Mumbai 400076</strong>. Direction assistance and helpdesks active at Main Gate and Y-Point.</span>
          </div>
          <span className="text-slate-500 font-mono shrink-0">ENTRY BADGES REQUIRED</span>
        </div>

      </div>
    </section>
  );
};
