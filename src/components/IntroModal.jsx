import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, Volume2, VolumeX, ArrowRight, ShieldCheck, Award, BookOpen, GraduationCap, X } from 'lucide-react';

const INTRO_SLIDES = [
  {
    image: '/assets/school_img_1.jpg',
    title: 'Eshwar Vidyalaya',
    subtitle: 'The School of Experience',
    shloka: 'ವಿದ್ಯಾ ದದಾತಿ ವಿನಯಂ',
    shlokaMeaning: 'Knowledge gives rise to humility, worthiness & true happiness',
    tag: 'CBSE Affiliation No. 830544'
  },
  {
    image: '/assets/school_img_4.png',
    title: 'Experiential Learning',
    subtitle: 'Think Lab • Skill Shed • Organic Farming',
    shloka: 'ಅನುಭವಪ್ರಧಾನಾ ಶಿಕ್ಷಣಾ',
    shlokaMeaning: 'Education rooted in experience with a life-oriented approach',
    tag: 'Hands-On Life Skills'
  },
  {
    image: '/assets/school_img_7.png',
    title: 'Arts, Culture & Heritage',
    subtitle: 'Theatre • Classical Dance • Geetha Chanting • Music',
    shloka: 'सा विद्या या विमुक्तये',
    shlokaMeaning: 'That is knowledge which liberates the mind and spirit',
    tag: 'Indian Institute of Educational Theatre'
  },
  {
    image: '/assets/school_img_6.png',
    title: 'Nurturing Future Leaders',
    subtitle: 'Choranahalli, Mysuru • Pre-Nursery to Grade 10',
    shloka: 'ಬಾಲಾನಾಂ ಸಾಮರ್ಥ್ಯವರ್ಧನಂ',
    shlokaMeaning: 'Empowering children with clarity, strength & confidence',
    tag: 'Est. 2004 • 20+ Years Legacy'
  }
];

export default function IntroModal({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const slideDuration = 4000;
    const intervalTime = 50;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((oldIdx) => (oldIdx + 1) % INTRO_SLIDES.length);
          return 0;
        }
        return prev + (intervalTime / slideDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const currentSlide = INTRO_SLIDES[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl overflow-hidden"
      >
        {/* Background Image Slide */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Sparks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Top Header Controls */}
        <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/official_logo.jpg" 
              alt="Eshwar Vidyalaya Official Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-amber-400/50 shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/school_img_16.png';
              }}
            />
            <div>
              <span className="text-sm font-bold tracking-wider text-amber-400 uppercase block">Eshwar Vidyalaya</span>
              <span className="text-xs text-slate-300">CBSE Affiliation No. 830544</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-amber-400 transition"
              title={isMuted ? "Unmute Sound" : "Mute Sound"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-amber-400 animate-pulse" />}
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-amber-400 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Intro Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                {currentSlide.tag}
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {currentSlide.title}
              </h1>

              <p className="text-lg md:text-2xl text-amber-200/90 font-medium max-w-2xl mx-auto">
                {currentSlide.subtitle}
              </p>

              <div className="max-w-xl mx-auto p-6 rounded-2xl bg-slate-900/70 border border-amber-500/20 backdrop-blur-md shadow-2xl">
                <p className="text-2xl md:text-3xl font-bold text-amber-300 font-kannada leading-relaxed mb-2">
                  "{currentSlide.shloka}"
                </p>
                <p className="text-xs md:text-sm text-slate-300 italic">
                  — {currentSlide.shlokaMeaning}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Actions & Progress Dots */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <button
              onClick={onClose}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Campus & Academics</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <div className="w-full max-w-xs space-y-2">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-center gap-2">
                {INTRO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setProgress(0);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
