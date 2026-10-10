import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, GraduationCap, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "My journey from Eshwar Vidyalaya to where I am today is truly special. I completed my B.Sc in Radiology and am working as an MOD at Sainik Hospital, and started my own venture 'My Sanchari Travel & Ambulance Service'. Whatever I achieved is because of the strong foundation given by EV family!",
    author: "Yogananda",
    role: "MOD at Sainik Hospital & Entrepreneur",
    batch: "Alumni, 2015-2016 Batch",
    type: "Alumni",
    stars: 5
  },
  {
    id: 2,
    quote: "The school created the perfect atmosphere for learning. I spent almost 10 wonderful years there. It wasn't just a place to study — it truly felt like home. I cherish those memories and feel blessed to have had such passionate, inspiring teachers.",
    author: "Harshitha N",
    role: "Alumni Leader",
    batch: "Alumni, 2017-2018 Batch",
    type: "Alumni",
    stars: 5
  },
  {
    id: 3,
    quote: "Activities like life-skills programs, planting at Doddainduvadi, gardening, public speaking, and library sessions helped me explore beyond the classroom. These skills continue to help me in my MBA journey coordinating HR conclaves!",
    author: "Amulya",
    role: "MBA Candidate & Event Coordinator",
    batch: "Alumni, 2017-2018 Batch",
    type: "Alumni",
    stars: 5
  },
  {
    id: 4,
    quote: "We are very happy and proud to be part of this school. EV provides a safe, caring, and positive learning environment, balancing academic education with cultural exhibitions, sports, and creative programs.",
    author: "Mrs. Savitha S",
    role: "Parent of Grade IX Student",
    batch: "Parent Voice",
    type: "Parent",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5" />
            Alumni & Parent Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Voices of <span className="gold-gradient-text">Pride & Gratitude</span>
          </h2>
          <p className="text-base text-slate-300">
            Hear from our successful alumni and parents about their transformative experience at Eshwar Vidyalaya.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl relative shadow-2xl"
            >
              <Quote className="w-16 h-16 text-amber-500/10 absolute top-8 right-8 pointer-events-none" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg md:text-2xl text-slate-100 font-medium leading-relaxed italic mb-8">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-xl flex-shrink-0">
                    {current.author[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{current.author}</h3>
                    <p className="text-xs text-amber-400 font-semibold">{current.role}</p>
                    <p className="text-xs text-slate-400">{current.batch}</p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  {current.type}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentIdx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-400 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
