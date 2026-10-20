import React from 'react';
import { ArrowRight, Terminal, Shield, Brain, Database, Award, Check } from 'lucide-react';
import { EventItem } from '../data/techfestData';

interface WorkshopSectionProps {
  onSelectEvent: (event: EventItem) => void;
  onOpenRegister: (eventId?: string) => void;
}

export const WorkshopSection: React.FC<WorkshopSectionProps> = ({
  onSelectEvent,
  onOpenRegister,
}) => {
  const workshopTracks = [
    {
      id: 'modern-ai',
      title: 'Modern AI & Agentic Workflows',
      icon: Brain,
      level: 'Advanced',
      topics: ['Multimodal LLM Fine-Tuning', 'Hybrid Vector Retrieval & RAG', 'Autonomous Agentic Tool-Use'],
      duration: '16 Hours · 2 Days',
      faculty: 'IIT Bombay CSE AI Labs & Research Fellows',
    },
    {
      id: 'ethical-hacking',
      title: 'Offensive Cybersecurity & CTF',
      icon: Shield,
      level: 'Intermediate to Advanced',
      topics: ['Container & Kernel Breakout', 'Web API Reverse Engineering', 'Adversarial Prompt Injection'],
      duration: '14 Hours · 2 Days',
      faculty: 'Certified Ethical Security Professionals',
    },
    {
      id: 'fullstack-cloud',
      title: 'High-Scale Distributed Cloud Systems',
      icon: Database,
      level: 'All Engineering Batches',
      topics: ['Event-Driven Microservices', 'Real-Time Edge Architectures', 'Low-Latency Cache Invalidation'],
      duration: '12 Hours · 2 Days',
      faculty: 'Senior Distributed Systems Engineers',
    },
  ];

  return (
    <section id="workshops" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorative technical line grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold mb-2">
              Hands-On Engineering Masterclasses
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              LEARN FROM THE BEST
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl text-balance">
              Intensive, laboratory-based offline workshops led by seasoned technology pioneers and IIT Bombay faculty. Build production code, not toy simulations.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Includes Verified Certificate of Participation</span>
          </div>
        </div>

        {/* Featured Split Hero for Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Workshop Media Photo */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/techfest_ai_workshop_1792511717144.jpg"
                alt="IIT Bombay Techfest Advanced Machine Learning Workshop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            </div>

            <div className="p-6 relative z-10 -mt-8">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                COMPUTER CENTER LABS · IIT BOMBAY
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                Practical Deep-Tech Engineering
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Participants work directly on high-performance compute instances and microcontroller setups, completing end-to-end projects verified by technical mentors.
              </p>
            </div>
          </div>

          {/* Workshop Tracks List */}
          <div className="lg:col-span-6 space-y-4">
            {workshopTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.id}
                  className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {track.title}
                        </h4>
                        <span className="text-xs text-slate-500 font-mono">
                          {track.duration} · {track.level}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenRegister(track.id)}
                      className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-black bg-cyan-950/60 hover:bg-cyan-400 rounded border border-cyan-800/60 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Enroll
                    </button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/60 flex flex-wrap gap-2 text-xs text-slate-400">
                    {track.topics.map((t, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                        <Check className="w-3 h-3 text-cyan-400" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
