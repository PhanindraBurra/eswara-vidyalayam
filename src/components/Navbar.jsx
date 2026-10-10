import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Play, FileText, Sparkles, GraduationCap, ChevronRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenIntro, onOpenDisclosure }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About EV' },
    { id: 'academics', label: 'Academics & Labs' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Campus Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="bg-slate-950/95 border-b border-slate-800/80 text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:8762788533" className="flex items-center gap-1.5 hover:text-amber-400 transition font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>8762788533</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a href="mailto:principaleshwar@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>principaleshwar@gmail.com</span>
            </a>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Choranahalli, Mysuru</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Admissions Open 2026-27
            </span>

            <button
              onClick={onOpenDisclosure}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>CBSE Mandatory Disclosure</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-3' 
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Official Circle Badge Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-amber-500/20 blur-md group-hover:bg-amber-500/40 transition duration-300" />
              <img 
                src="/assets/official_logo.svg" 
                alt="Eshwar Vidyalaya Logo" 
                className="relative h-12 w-12 md:h-14 md:w-14 rounded-full object-contain bg-white border-2 border-amber-500/40 shadow-xl group-hover:scale-105 transition-transform p-0.5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/official_logo.png';
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-2xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition">
                  ESHWAR VIDYALAYA
                </span>
              </div>
              <p className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                The School of Experience
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenIntro}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 hover:border-amber-400 hover:bg-slate-800 text-xs font-semibold transition"
              title="Watch Intro Showcase"
            >
              <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Intro Reel</span>
            </button>

            <button
              onClick={() => scrollToSection('admissions')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenIntro}
              className="p-2 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400"
            >
              <Play className="w-4 h-4 fill-amber-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[105px] bottom-0 bg-slate-950/98 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between overflow-y-auto border-t border-slate-800">
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Navigation Menu</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left font-semibold text-base transition ${
                  activeSection === item.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900/60 border border-slate-800/80 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-5 h-5 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDisclosure();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-700 text-amber-300 font-semibold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>CBSE Mandatory Disclosure</span>
            </button>

            <button
              onClick={() => scrollToSection('admissions')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Enroll Your Child for 2026-27</span>
            </button>

            <div className="text-center pt-2">
              <p className="text-xs text-slate-400">CBSE Affiliation No. 830544</p>
              <p className="text-xs text-amber-400/90 font-medium">Sy no. 32/2, Choranahalli, Mysuru</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
