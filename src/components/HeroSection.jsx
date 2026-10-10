import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Award, ShieldCheck, BookOpen, Users, Compass, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/assets/school_img_1.jpg',
    title: 'Where Learning is Explored, Experienced & Lived',
    subtitle: 'Combining CBSE academic rigor with experiential learning, life skills, robotics & organic farming.',
    badge: 'CBSE Aff. No. 830544'
  },
  {
    image: '/assets/school_img_4.png',
    title: 'Future-Ready Think Lab & STEM Innovation',
    subtitle: 'Students transform raw materials into working mechanical, robotic and scientific projects.',
    badge: 'Think Lab & STEM'
  },
  {
    image: '/assets/school_img_7.png',
    title: 'Rich Culture, Arts & Theatre',
    subtitle: 'Guided by Indian Institute of Educational Theatre, dance, music & Geetha chanting.',
    badge: 'Arts & Cultural Heritage'
  },
  {
    image: '/assets/school_img_14.png',
    title: 'Organic Farming & Practical Life Skills',
    subtitle: 'From seed to harvest — nurturing environmental responsibility and hands-on skill sheds.',
    badge: 'Organic Farming'
  }
];

export default function HeroSection({ onOpenIntro, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section id="home" className="relative min-h-screen pt-36 sm:pt-40 md:pt-44 pb-20 sm:pb-24 flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Background Image Carousel with Fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          >
            {/* Dark Gradient Overlay for optimal contrast & legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            
            {/* Top Clean Badges - Spaced Out without Overlap */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {HERO_SLIDES[currentSlide].badge}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-emerald-400 text-[11px] sm:text-xs font-semibold">
                <ShieldCheck className="w-3 h-3" />
                Pre-Nursery to Grade 10
              </span>
            </div>

            {/* Main Title */}
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              <span className="block">ESHWAR VIDYALAYA</span>
              <span className="gold-gradient-text block mt-1">
                {HERO_SLIDES[currentSlide].title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              {HERO_SLIDES[currentSlide].subtitle}
            </motion.p>

            {/* Sanskrit Motto Card */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-xl flex items-center gap-3.5 shadow-xl">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-lg sm:text-xl">
                ॐ
              </div>
              <div>
                <p className="text-sm sm:text-lg font-bold text-amber-300 font-kannada leading-snug">
                  "ವಿದ್ಯಾ ದದಾತಿ ವಿನಯಂ, ವಿನಯಾದ್ಯಾತಿ ಪಾತ್ರತಾಮ್"
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  Knowledge gives rise to humility, worthiness & happiness.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onNavigate('admissions')}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-extrabold text-sm sm:text-base md:text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Enroll For Admissions 2026-27</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenIntro}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-slate-900/90 border border-slate-700 hover:border-amber-400 text-slate-200 hover:text-amber-300 font-bold text-xs sm:text-base backdrop-blur-md hover:bg-slate-800/80 transition"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                <span>Watch Intro Reel</span>
              </button>
            </div>
          </div>

          {/* Right Floating Card / Quick Highlights */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 sm:p-6 rounded-3xl glass-card border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Why Eshwar Vidyalaya?</span>
              </h3>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100">Think Lab & STEM</h4>
                    <p className="text-[11px] text-slate-400">Hands-on robotics, mechanics & applied engineering.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100">Organic Farming</h4>
                    <p className="text-[11px] text-slate-400">Students plant, nurture & harvest organic crops on campus.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100">Skill Shed & Arts</h4>
                    <p className="text-[11px] text-slate-400">Plumbing, carpentry, cooking + Theatre & classical dance.</p>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-xs">
                <span className="text-slate-400 text-[11px]">
                  Slide {currentSlide + 1} of {HERO_SLIDES.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={prevSlide}
                    className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Key Metrics / Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md hover:border-amber-500/40 transition">
            <p className="text-2xl sm:text-4xl font-extrabold text-amber-400 mb-0.5">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">CBSE Pass Success</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500">Consistent board results</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md hover:border-amber-500/40 transition">
            <p className="text-2xl sm:text-4xl font-extrabold text-amber-400 mb-0.5">2004</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">Trust Foundation</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500">20+ Years Legacy</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md hover:border-amber-500/40 transition">
            <p className="text-2xl sm:text-4xl font-extrabold text-emerald-400 mb-0.5">9+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">Experiential Hubs</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500">Farming & ThinkLab</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md hover:border-amber-500/40 transition">
            <p className="text-2xl sm:text-4xl font-extrabold text-blue-400 mb-0.5">1000+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">Confident Alumni</p>
            <p className="text-[10px] sm:text-[11px] text-slate-500">Global future leaders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
