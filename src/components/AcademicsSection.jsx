import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sprout, Hammer, Palette, Trophy, Sparkles, BookOpen, Brain, Mic, X, ArrowRight, CheckCircle } from 'lucide-react';

const PROGRAMS = [
  {
    id: 'think-lab',
    icon: Cpu,
    title: 'Think Lab',
    subtitle: 'Robotics • STEM • Engineering Models',
    badge: 'Hands-On Tech',
    color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
    image: '/assets/school_img_4.png',
    desc: 'At our Think Lab, students transform everyday raw materials into working models, discovering robotics, engineering, mathematics, technology, and mechanical systems. From assembling components from scratch to bringing ideas to life, children experiment fearlessly.',
    highlights: ['Robotics & Mechanics', 'Circuit Building', 'Hands-On STEM Projects', 'Critical Problem Solving']
  },
  {
    id: 'skill-shed',
    icon: Hammer,
    title: 'Skill Shed',
    subtitle: 'Plumbing • Masonry • Carpentry • Cooking',
    badge: 'Life Skills',
    color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
    image: '/assets/school_img_14.png',
    desc: 'The Skill Shed gives students a practical introduction to the everyday skills that shape our world. Hands-on activities cover plumbing, carpentry, cooking, masonry, stitching, and tool handling.',
    highlights: ['Carpentry & Woodwork', 'Basic Plumbing & Repairs', 'Culinary & Stitching Skills', 'Practical Tool Mastery']
  },
  {
    id: 'organic-farming',
    icon: Sprout,
    title: 'Organic Farming',
    subtitle: 'Seed to Plant • Grow & Nurture • Harvest Fresh',
    badge: 'Agriculture & Nature',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    image: '/assets/school_img_1.jpg',
    desc: 'Students experience agriculture firsthand—preparing soil, sowing seeds, nurturing crops, and harvesting chillies, methi, coriander, bhindi, and seasonal vegetables.',
    highlights: ['Soil Preparation & Compost', 'Cultivating Vegetables & Herbs', 'Sustainable Farming Habits', 'Nature Appreciation']
  },
  {
    id: 'aarohana',
    icon: Sparkles,
    title: 'Aarohana',
    subtitle: 'Performance • Presentation • Showcase',
    badge: 'Talent Platform',
    color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
    image: '/assets/school_img_6.png',
    desc: 'Designed as a platform where students showcase their learning through live stage performances, speeches, and presentations.',
    highlights: ['Public Speaking Confidence', 'Live Stage Performances', 'Team Presentation', 'Creative Expression']
  },
  {
    id: 'arts-culture',
    icon: Palette,
    title: 'Arts & Cultural Hub',
    subtitle: 'Theatre • Dance • Music • Geetha Chanting',
    badge: 'Heritage & Creative Arts',
    color: 'from-rose-500/20 to-orange-500/10 border-rose-500/30 text-rose-400',
    image: '/assets/school_img_7.png',
    desc: 'Theatre & Drama guided by faculty from the Indian Institute of Educational Theatre, bringing stage experiences, classical dance, music, drawing, and Geetha Chanting into student life.',
    highlights: ['Indian Institute of Educational Theatre', 'Classical & Contemporary Dance', 'Vocal & Instrumental Music', 'Geetha Chanting & Values']
  },
  {
    id: 'sports-wellness',
    icon: Trophy,
    title: 'Sports & Physical Wellness',
    subtitle: 'Karate • Yoga • Kabaddi • Kho-Kho • Volleyball',
    badge: 'Fitness & Resilience',
    color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400',
    image: '/assets/school_img_10.png',
    desc: 'From physical strength and teamwork to martial arts discipline and yoga mindfulness, every sport builds resilience, endurance, and camaraderie.',
    highlights: ['Karate & Self Defense', 'Yoga & Meditation', 'Traditional Games (Kabaddi/Kho-Kho)', 'Scouts & Guides Discipline']
  },
  {
    id: 'cognitive-dev',
    icon: Brain,
    title: 'Cognitive Development',
    subtitle: 'Abacus • Vedic Mathematics • Chess',
    badge: 'Mental Agility',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    image: '/assets/school_img_12.png',
    desc: 'Abacus, Vedic Mathematics, and Chess give students engaging opportunities to strengthen concentration, memory, calculation speed, and strategic thinking.',
    highlights: ['Abacus Calculation Speed', 'Vedic Math Shortcuts', 'Strategic Chess Tactics', 'Focus & Memory Training']
  },
  {
    id: 'bhasha-lab',
    icon: Mic,
    title: 'Bhasha & Language Lab',
    subtitle: 'English Language Lab • Book Club',
    badge: 'Communication Excellence',
    color: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400',
    image: '/assets/school_img_15.png',
    desc: 'Through our Bhasha Lab, English Language Lab, and Book Club, students hone phonetics, vocabulary, public speaking, listening, and literature appreciation.',
    highlights: ['Audio Phonetics Training', 'Book Club Discussions', 'Storytelling & Oratory', 'Reading Comprehension']
  }
];

export default function AcademicsSection() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="academics" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            Academic & Experiential Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Learning Through <span className="gold-gradient-text">Experience & Innovation</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300">
            From Think Labs and Organic Farming to Skill Sheds and Theatre — education designed to spark curiosity and build real-world capability.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedProgram(program)}
                className={`p-6 rounded-3xl bg-slate-900/80 border ${program.color.split(' ')[2]} backdrop-blur-md cursor-pointer flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                      {program.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-amber-300 transition">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-3">
                    {program.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {program.desc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Program Details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase">
                  {selectedProgram.badge}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                {selectedProgram.title}
              </h3>
              <p className="text-sm font-semibold text-amber-400 mb-4">
                {selectedProgram.subtitle}
              </p>

              <div className="rounded-2xl overflow-hidden mb-6 h-48 bg-slate-950">
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/school_img_1.jpg';
                  }}
                />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProgram.desc}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgram.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedProgram(null)}
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition"
              >
                Close View
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
