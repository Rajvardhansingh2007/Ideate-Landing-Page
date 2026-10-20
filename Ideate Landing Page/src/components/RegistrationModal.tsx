import React, { useState } from 'react';
import { X, CheckCircle, Ticket, Download, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ALL_EVENTS } from '../data/techfestData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEventId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedEventId,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    role: 'Student / Competitor',
    selectedTrack: preselectedEventId || 'robowars',
    teamSize: '1',
  });

  const [submitted, setSubmitted] = useState(false);
  const [delegateId, setDelegateId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.college.trim()) {
      setErrorMsg('Please fill in all mandatory fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    // Generate authentic delegate identification code
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `TF26-${randomNum}`;
    setDelegateId(newId);
    setSubmitted(true);
    setErrorMsg('');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Surface */}
      <div className="relative w-full max-w-xl bg-[#090d16] border border-cyan-900/60 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 font-semibold">
              Techfest 2026 Official Delegate Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                Register For Techfest 2026
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Gain access to competitions, keynotes, masterclass workshops, and exhibitions at IIT Bombay.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-300">
                {errorMsg}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    College / Organization <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="IIT, BITS, NIT, or University name"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Bengaluru, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  Select Primary Track or Event Focus
                </label>
                <select
                  value={formData.selectedTrack}
                  onChange={(e) => setFormData({ ...formData, selectedTrack: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white outline-none cursor-pointer"
                >
                  <option value="general-delegate">General Festival Delegate Pass (All Access)</option>
                  {ALL_EVENTS.map((ev) => (
                    <option key={ev.id} value={ev.id}>
                      [{ev.category}] {ev.title}
                    </option>
                  ))}
                  <option value="campus-ambassador">Techfest College Ambassador (CA)</option>
                </select>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs uppercase font-bold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Generate Official Delegate Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official registration for IIT Bombay Techfest 2026. Free entry to exhibits & talks.</span>
            </p>
          </form>
        ) : (
          /* Confirmation / Digital Delegate Pass View */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Registration Confirmed
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Welcome to Techfest 2026
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your delegate pass has been issued for the IIT Bombay campus.
              </p>
            </div>

            {/* Virtual Digital Pass Card */}
            <div className="p-5 rounded-xl bg-slate-900 border border-cyan-500/30 text-left space-y-4 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-0" />
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400">OFFICIAL DELEGATE</span>
                  <h4 className="text-base font-bold text-white">{formData.fullName}</h4>
                  <p className="text-xs text-slate-400">{formData.college}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-500">DELEGATE ID</span>
                  <p className="text-sm font-mono font-bold text-cyan-300">{delegateId}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs relative z-10">
                <div>
                  <span className="text-slate-500 text-[10px]">Campus Venue</span>
                  <p className="text-slate-200 font-medium">IIT Bombay, Powai</p>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px]">Dates</span>
                  <p className="text-slate-200 font-medium">Dec 16–18, 2026</p>
                </div>
              </div>

              {/* Barcode/QR visual representation */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <div className="h-6 flex items-center gap-1">
                  {[4, 2, 6, 1, 3, 5, 2, 4, 1, 3, 6, 2, 5, 3, 1, 4, 2].map((height, i) => (
                    <div
                      key={i}
                      className="w-1 bg-slate-400"
                      style={{ height: `${height * 3}px` }}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-slate-400">ADMIT ONE · GENERAL ACCESS</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-1/2 py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print Pass</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-1/2 py-2.5 px-4 text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
