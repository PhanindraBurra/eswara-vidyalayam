import React from 'react';
import { Phone, GraduationCap, MapPin, MessageSquare } from 'lucide-react';

export default function MobileBottomBar({ onNavigate }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center">
        <a
          href="tel:8762788533"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 transition"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Call Us</span>
        </a>

        <a
          href="https://wa.me/918762788533"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 hover:bg-emerald-900 transition"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        <a
          href="https://maps.google.com/?q=Eshwar+Vidyalaya+Choranahalli+Mysuru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[10px] font-bold">Location</span>
        </a>

        <button
          onClick={() => onNavigate('admissions')}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-md shadow-amber-500/20 active:scale-95 transition"
        >
          <GraduationCap className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold">Apply</span>
        </button>
      </div>
    </div>
  );
}
