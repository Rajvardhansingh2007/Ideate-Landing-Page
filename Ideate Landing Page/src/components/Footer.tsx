import React, { useState } from 'react';
import { Mail, MapPin, ChevronDown, ChevronUp, Globe, ExternalLink } from 'lucide-react';
import { FAQS } from '../data/techfestData';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer className="bg-[#010308] border-t border-cyan-950/60 pt-20 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frequently Asked Questions Accordion */}
        <div id="faqs" className="mb-20 pb-16 border-b border-white/5">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold">
              Essential Visitor Information
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-sm font-display">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand & Mission (2-col) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-xs shadow-md shadow-cyan-500/20">
                TF
              </div>
              <span className="text-lg font-bold text-white font-display">
                TECHFEST <span className="text-cyan-400 font-light">IIT BOMBAY</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Asia's largest science and technology festival. Established in 1998 at the Indian Institute of Technology Bombay to stimulate technological awareness, competitive innovation, and research.
            </p>

            <div className="pt-2 text-xs font-mono space-y-1.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Student Activity Centre (SAC), IIT Bombay, Powai, Mumbai 400076, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@techfest.org" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  info@techfest.org
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display mb-3">
              Festival Tracks
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#competitions" className="hover:text-cyan-400 transition-colors">
                  International Robowars
                </a>
              </li>
              <li>
                <a href="#competitions" className="hover:text-cyan-400 transition-colors">
                  Meshmerize Maze Solver
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-cyan-400 transition-colors">
                  Modern AI Masterclass
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-cyan-400 transition-colors">
                  Ethical Hacking & CTF
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  TechConnect R&D Exhibits
                </a>
              </li>
            </ul>
          </div>

          {/* Program & Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display mb-3">
              Planning & Access
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#schedule" className="hover:text-cyan-400 transition-colors">
                  Festival Timetable
                </a>
              </li>
              <li>
                <button onClick={onOpenRegister} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Delegate Registration
                </button>
              </li>
              <li>
                <button onClick={onOpenRegister} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Campus Ambassador (CA)
                </button>
              </li>
              <li>
                <a href="#faqs" className="hover:text-cyan-400 transition-colors">
                  Accommodation & Hostels
                </a>
              </li>
              <li>
                <a
                  href="https://techfest.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Official Techfest.org</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social Channels */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display mb-3">
              Official Media
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/techfest_iitbombay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/techfestiitbombay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>YouTube Official</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/techfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Techfest_IITB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>X (Twitter)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Notice & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 1998–2026 Techfest, IIT Bombay. All rights reserved. Recognized under patronages of UNESCO & UNICEF.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>IIT Bombay Powai Campus</span>
            <span aria-hidden="true">·</span>
            <span>December 16–18, 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
