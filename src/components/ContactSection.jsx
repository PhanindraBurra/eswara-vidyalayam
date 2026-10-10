import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact & Campus Location
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch With <span className="gold-gradient-text">Eshwar Vidyalaya</span>
          </h2>
          <p className="text-base text-slate-300">
            Visit our campus at Choranahalli or connect with our administration team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white mb-2">School Contact Details</h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Campus Address</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Eshwar Vidyalaya,<br />
                    Sy no. 32/2, Choranahalli, Varuna Hobli,<br />
                    Mysuru, Karnataka 570010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Admissions Helpline</h4>
                  <a href="tel:8762788533" className="text-sm font-extrabold text-amber-400 hover:underline block mt-1">
                    +91 8762788533
                  </a>
                  <p className="text-[11px] text-slate-400">Available Mon - Sat, 8:30 AM - 4:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Official Email</h4>
                  <a href="mailto:principaleshwar@gmail.com" className="text-sm font-extrabold text-amber-400 hover:underline block mt-1">
                    principaleshwar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">School Office Hours</h4>
                  <p className="text-xs text-slate-300 mt-1">Monday – Saturday: 8:30 AM – 4:30 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://maps.google.com/?q=Eshwar+Vidyalaya+Choranahalli+Mysuru"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://wa.me/918762788533"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-slate-950 transition"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Map & Quick Message */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-72 bg-slate-900 shadow-2xl relative">
              <iframe
                title="Eshwar Vidyalaya Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.397193240364!2d76.70258!3d12.2882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf69786a3449db%3A0xb35a0928a6fdf942!2sChoranahalli%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale opacity-85 hover:grayscale-0 transition duration-500"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Quick Contact Form */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              {formSent ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-400">Our administrative team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h4 className="text-base font-bold text-white">Quick Message to Office</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <textarea
                    required
                    rows="3"
                    placeholder="Your Message..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-amber-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-md hover:bg-amber-400 transition"
                  >
                    Send Direct Message
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
