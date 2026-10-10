import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { GraduationCap, CheckCircle2, Download, Calendar, User, Phone, Mail, BookOpen, Send, Sparkles, HelpCircle } from 'lucide-react';

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Grade 1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="admissions" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            Admissions Open 2026 - 2027
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Shape Your Child's Future <span className="gold-gradient-text">With Us</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300">
            From inquiry to enrollment, we are here to guide you every step of the way. Pre-Nursery to Grade 10.
          </p>
        </div>

        {/* 4 Steps Journey */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { step: '01', title: 'Connect With Us', desc: 'Call 8762788533 or submit the online inquiry form below.' },
            { step: '02', title: 'Campus Visit', desc: 'Tour our classrooms, ThinkLab, Skill Shed & green campus.' },
            { step: '03', title: 'Principal Meeting', desc: 'Interact with Smt. Asha D & management to discuss student goals.' },
            { step: '04', title: 'Get Admitted', desc: 'Submit required documents & complete enrollment formalities.' }
          ].map((s, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 relative hover:border-amber-500/40 transition">
              <span className="text-4xl font-extrabold text-amber-500/20 absolute top-4 right-4 font-mono">{s.step}</span>
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 font-extrabold flex items-center justify-center mb-4">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brochure & School Highlights Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl relative">
              <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-2xl font-extrabold text-white mb-2">School Official Brochure</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Explore everything about Eshwar Vidyalaya — from CBSE academic curriculum, ThinkLab, Skill Shed to organic farming in our detailed prospectus.
              </p>

              <a
                href="https://www.eshwarvidyalaya.edu.in/_files/ugd/d4255c_70453a257ec14f62b27c232da8ca54a0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Prospectus PDF</span>
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Admission Eligibility Criteria</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Pre-Nursery / Nursery: 3+ Years of age</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Grade 1 to Grade 10: Age appropriate with previous school records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Documents: Birth certificate, Aadhaar copy, Passport photos & Transfer Certificate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Application Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-amber-400">{formData.parentName}</strong>. Our admissions coordinator will reach out to you at <strong className="text-white">{formData.phone}</strong> shortly to schedule your campus tour.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Admission Inquiry Form</h3>
                    <p className="text-xs text-slate-400">Fill in your details for 2026-27 academic session inquiry.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Parent / Guardian Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Aarav Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Applying For Grade *</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                      >
                        {['Pre-Nursery', 'Nursery', 'LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Email Address (Optional)</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">Message / Questions</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific questions regarding transport, hostel, or campus visits..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition"
                  >
                    Submit Admission Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
