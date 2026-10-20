import React from 'react';
import { X, Calendar, MapPin, Users, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { EventItem } from '../data/techfestData';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose, onRegister }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-3xl bg-[#090d16] border border-cyan-900/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-slate-950">
          <img
            src={event.image}
            alt={event.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>{event.category}</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>{event.badgeText}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Row - Quiet unboxed text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-slate-500 text-[11px]">Date & Schedule</p>
                <p className="font-semibold text-slate-200">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-slate-500 text-[11px]">Venue</p>
                <p className="font-semibold text-slate-200">{event.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <p className="text-slate-500 text-[11px]">Team Format</p>
                <p className="font-semibold text-slate-200">{event.teamSize || 'Individual / Delegated'}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">Overview</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Key Specifications / Syllabus */}
          {event.details && event.details.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">Key Highlights & Specifications</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-900/30 p-2.5 rounded-lg border border-slate-800/50">
                    <span className="text-cyan-400 font-bold">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eligibility Note */}
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
            <Award className="w-4 h-4 text-cyan-400 shrink-0" />
            <span><strong className="text-slate-300">Eligibility:</strong> {event.eligibility}</span>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <a
              href={event.officialPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>View On Official Techfest.org</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRegister(event.id);
                }}
                className="px-5 py-2.5 text-xs uppercase font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2"
              >
                <span>Register For Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
