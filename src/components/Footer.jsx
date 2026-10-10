import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp, GraduationCap } from 'lucide-react';

export default function Footer({ onOpenDisclosure, onOpenIntro, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/school_img_16.png" 
                alt="Eshwar Vidyalaya Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/school_img_2.png';
                }}
              />
              <div>
                <h3 className="text-xl font-extrabold text-white">ESHWAR VIDYALAYA</h3>
                <p className="text-xs text-amber-400 font-semibold uppercase">The School of Experience</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Established in 2004 under Eshwar Educational Trust. CBSE Affiliated (Affiliation No. 830544) offering Pre-Nursery to Grade 10 education with ThinkLab, Organic Farming, and Skill Sheds in Mysuru.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <p className="text-xs font-bold text-amber-300 font-kannada">
                "ವಿದ್ಯಾ ದದಾತಿ ವಿನಯಂ, ವಿನಯಾದ್ಯಾತಿ ಪಾತ್ರತಾಮ್"
              </p>
              <p className="text-[11px] text-slate-400 italic">
                Knowledge gives rise to humility, worthiness, righteousness & true happiness.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition">About EV & History</button>
              </li>
              <li>
                <button onClick={() => onNavigate('academics')} className="hover:text-amber-400 transition">Academics & Labs</button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-amber-400 transition">Admissions 2026-27</button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-400 transition">Campus Gallery</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Experiential Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Experiential Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-amber-400 cursor-pointer">Think Lab (Robotics & STEM)</li>
              <li className="hover:text-amber-400 cursor-pointer">Skill Shed (Life Skills & Craft)</li>
              <li className="hover:text-amber-400 cursor-pointer">Organic Farming Program</li>
              <li className="hover:text-amber-400 cursor-pointer">Aarohana Talent Showcase</li>
              <li className="hover:text-amber-400 cursor-pointer">Indian Institute of Educational Theatre</li>
              <li className="hover:text-amber-400 cursor-pointer">Cognitive Dev (Abacus/Vedic Math)</li>
            </ul>
          </div>

          {/* Compliance & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">CBSE Information</h4>
            <div className="space-y-2 text-xs">
              <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Affiliation No: 830544</span>
              </p>
              <button
                onClick={onOpenDisclosure}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-300 font-semibold hover:border-amber-400 transition"
              >
                CBSE Public Disclosures →
              </button>
              <button
                onClick={onOpenIntro}
                className="w-full text-left py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:border-amber-400 transition"
              >
                Watch School Intro Video
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Eshwar Vidyalaya. All Rights Reserved. www.eshwarvidyalaya.edu.in</p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Choranahalli, Mysuru, Karnataka</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
