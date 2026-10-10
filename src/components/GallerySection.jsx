import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const GALLERY_IMAGES = [
  { id: 1, src: '/assets/school_img_1.jpg', title: 'Main Campus Grounds', category: 'Campus' },
  { id: 4, src: '/assets/school_img_4.png', title: 'Think Lab STEM Activity', category: 'Labs' },
  { id: 6, src: '/assets/school_img_6.png', title: 'Student Showcase & Aarohana', category: 'Culture' },
  { id: 7, src: '/assets/school_img_7.png', title: 'Theatre & Cultural Performances', category: 'Culture' },
  { id: 8, src: '/assets/school_img_8.png', title: 'Skill Shed Workshop', category: 'Labs' },
  { id: 9, src: '/assets/school_img_9.png', title: 'Organic Farming Harvest', category: 'Labs' },
  { id: 10, src: '/assets/school_img_10.png', title: 'Sports & Martial Arts', category: 'Sports' },
  { id: 11, src: '/assets/school_img_11.jpg', title: 'Choranahalli Building Architecture', category: 'Campus' },
  { id: 12, src: '/assets/school_img_12.png', title: 'Cognitive Development Lab', category: 'Labs' },
  { id: 14, src: '/assets/school_img_14.png', title: 'Hands-On Gardening & Soil Care', category: 'Labs' },
  { id: 15, src: '/assets/school_img_15.png', title: 'Bhasha Lab & Reading Sessions', category: 'Labs' },
  { id: 3, src: '/assets/school_img_3.jpg', title: 'Green Surroundings', category: 'Campus' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            Campus Life & Moments
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Glimpses of <span className="gold-gradient-text">Life at Eshwar Vidyalaya</span>
          </h2>
          <p className="text-base text-slate-300">
            Real moments from our classrooms, organic farms, robotics lab, and cultural stages.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {['All', 'Campus', 'Labs', 'Culture', 'Sports'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-64 cursor-pointer shadow-lg"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/school_img_1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-amber-400 uppercase">{img.category}</span>
                <p className="text-white font-bold text-sm">{img.title}</p>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-slate-300">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img 
                src={filteredImages[lightboxIndex].src} 
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-slate-800 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-extrabold text-lg">{filteredImages[lightboxIndex].title}</p>
                <p className="text-xs text-amber-400">{filteredImages[lightboxIndex].category} • Eshwar Vidyalaya Mysuru</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
