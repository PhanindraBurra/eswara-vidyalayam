import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Heart, UserCheck, ShieldCheck, BookOpen, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');
  const [kannadaTranslation, setKannadaTranslation] = useState(false);

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <History className="w-3.5 h-3.5" />
            About Eshwar Vidyalaya
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Rooted in Values, <span className="gold-gradient-text">Engineered for Tomorrow</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300">
            Founded under Eshwar Educational Trust with a commitment to access, equity, and holistic experiential education in Mysuru.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === 'story'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Our Journey & History
          </button>

          <button
            onClick={() => setActiveTab('values')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === 'values'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Core Pillars & Shlokas
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === 'leadership'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Leadership Messages
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Over Two Decades of Educational Leadership
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Founded in <strong className="text-amber-400">2004</strong> by Eshwar Educational Trust, our journey began with <em className="text-white">Small Wonders</em>, a pre-primary initiative launched at Alanahalli (2005–06) and later expanded to SVP Nagar.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  In <strong className="text-amber-400">2008–09</strong>, the Trust established <strong>Eshwar Vidyalaya</strong> at Choranahalli, Mysuru, guided by values of access, equity, and excellence. The school received its prestigious <strong className="text-emerald-400">CBSE Affiliation in 2014 (Affiliation No. 830544)</strong> and currently offers holistic education from <strong>Pre-Nursery to Grade 10</strong>.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <p className="text-amber-400 font-bold text-lg">2004</p>
                    <p className="text-xs text-slate-300 font-medium">Trust Establishment</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <p className="text-emerald-400 font-bold text-lg">2014</p>
                    <p className="text-xs text-slate-300 font-medium">CBSE Affiliated</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                  <img 
                    src="/assets/school_img_11.jpg" 
                    alt="Eshwar Vidyalaya Campus" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/school_img_1.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
                      Choranahalli Campus, Mysuru
                    </span>
                    <p className="text-white font-bold text-lg mt-2">
                      Green, Safe & Vibrant Environment for Holistic Growth
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Shloka Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-slate-900/80 border border-amber-500/30 relative">
                  <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Ancient Wisdom</p>
                  <p className="text-xl md:text-2xl font-extrabold text-amber-300 font-kannada leading-relaxed mb-3">
                    ವಿದ್ಯಾ ದದಾತಿ ವಿನಯಂ, ವಿನಯಾದ್ಯಾತಿ ಪಾತ್ರತಾಮ್ ।<br/>
                    ಪಾತ್ರತ್ವಾದ್ ಧನಮಾಪ್ನೋತಿ, ಧನಾತ್ ಧರ್ಮಂ ತತಃ ಸುಖಮ್ ॥
                  </p>
                  <p className="text-sm text-slate-300">
                    Knowledge gives rise to humility, humility brings worthiness, worthiness leads to prosperity, prosperity nurtures righteousness, and righteousness leads to true happiness.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 relative">
                  <Quote className="w-10 h-10 text-emerald-500/20 absolute top-6 right-6" />
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Experiential Learning Vision</p>
                  <p className="text-xl md:text-2xl font-extrabold text-emerald-300 font-kannada leading-relaxed mb-3">
                    ಅನುಭವಪ್ರಧಾನಾ ಶಿಕ್ಷಣಾ, ಜೀವನೋಪಯೋಗಿ ದೃಷ್ಟಿಕೋನ:।<br/>
                    ಬಾಲಾನಾಂ ಸಾಮರ್ಥ್ಯವರ್ಧನಂ, ಸೌಖ್ಯಸಂಪನ್ನಂ ಶಿಕ್ಷಣಮ್॥
                  </p>
                  <p className="text-sm text-slate-300">
                    Education rooted in experience, with a life-oriented approach. Empowering children with strength and clarity through joyful and meaningful learning.
                  </p>
                </div>
              </div>

              {/* 5 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { title: 'Respect', desc: 'Warm environment focusing on literacy, empathy and wonder.' },
                  { title: 'Responsibility', desc: 'Project-based discovery & collaborative problem solving.' },
                  { title: 'Integrity', desc: 'Honesty, moral courage, and strong personal ethics.' },
                  { title: 'Compassion', desc: 'Empathy for community, nature, and fellow human beings.' },
                  { title: 'Courage', desc: 'Fostering independence and confidence to embrace challenges.' }
                ].map((pillar, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center hover:border-amber-500/40 transition">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center font-extrabold">
                      {i + 1}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{pillar.title}</h4>
                    <p className="text-xs text-slate-400">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'leadership' && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Principal Card */}
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-2xl flex-shrink-0">
                    AD
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Smt. Asha D</h3>
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Principal, Eshwar Vidyalaya</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  {kannadaTranslation ? (
                    <p className="italic text-slate-200">
                      "Education today is not just about marks; it is about building character, nurturing values, and developing essential life skills. At Eshwar Vidyalaya, we have constructed a student-centric, experiential learning environment where every child's potential is realized."
                    </p>
                  ) : (
                    <p className="font-kannada text-slate-200 text-base leading-relaxed">
                      "ಇಂದಿನ ಶಿಕ್ಷಣದ ಉದ್ದೇಶ ಕೇವಲ ಅಂಕಗಳನ್ನು ಗಳಿಸುವುದಲ್ಲ; ಉತ್ತಮ ವ್ಯಕ್ತಿತ್ವವನ್ನು ರೂಪಿಸುವುದು, ಮೌಲ್ಯಗಳನ್ನು ಬೆಳೆಸುವುದು ಹಾಗೂ ಜೀವನ ಕೌಶಲ್ಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದಾಗಿದೆ. ಈ ಧ್ಯೇಯವನ್ನು ಸಾಕಾರಗೊಳಿಸುವ ನಿಟ್ಟಿನಲ್ಲಿ ಈಶ್ವರ್ ವಿದ್ಯಾಲಯದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿ-ಕೇಂದ್ರಿತ, ಅನುಭವಾತ್ಮಕ ಹಾಗೂ ಕೌಶಲ್ಯಾಧಾರಿತ ಕಲಿಕಾ ವಾತಾವರಣವನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ."
                    </p>
                  )}
                  <button
                    onClick={() => setKannadaTranslation(!kannadaTranslation)}
                    className="text-xs font-bold text-amber-400 underline hover:text-amber-300 transition"
                  >
                    {kannadaTranslation ? 'View Original Kannada' : 'Translate to English'}
                  </button>
                </div>
              </div>

              {/* President Card */}
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    KB
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Sri Kishore Bidappa</h3>
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">President, Eshwar Educational Trust</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p className="italic text-slate-200">
                    "A rolling stone gathers no moss." This timeless proverb reflects our belief at Eshwar Vidyalaya that continuous movement, curiosity, and learning keep young minds vibrant and open to new ideas.
                  </p>
                  <p>
                    Our student-centric approach balances academic excellence with rich co-curricular activities. Beyond textbooks, we aim to build critical thinking, creativity, confidence, and strong values to build a better tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
