import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AcademicsSection from './components/AcademicsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import AdmissionsSection from './components/AdmissionsSection';
import ContactSection from './components/ContactSection';
import PublicDisclosureModal from './components/PublicDisclosureModal';
import IntroModal from './components/IntroModal';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [introOpen, setIntroOpen] = useState(true); // Open intro reel on first load
  const [disclosureOpen, setDisclosureOpen] = useState(false);

  const navigateToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Intro Reel Modal */}
      <IntroModal 
        isOpen={introOpen} 
        onClose={() => setIntroOpen(false)} 
      />

      {/* CBSE Mandatory Disclosure Modal */}
      <PublicDisclosureModal 
        isOpen={disclosureOpen} 
        onClose={() => setDisclosureOpen(false)} 
      />

      {/* Sticky Main Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onOpenIntro={() => setIntroOpen(true)}
        onOpenDisclosure={() => setDisclosureOpen(true)}
      />

      {/* Page Sections */}
      <main>
        <HeroSection 
          onOpenIntro={() => setIntroOpen(true)} 
          onNavigate={navigateToSection}
        />

        <AboutSection />

        <AcademicsSection />

        <GallerySection />

        <TestimonialsSection />

        <AdmissionsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDisclosure={() => setDisclosureOpen(true)}
        onOpenIntro={() => setIntroOpen(true)}
        onNavigate={navigateToSection}
      />

      {/* Mobile/Tablet Quick Bar */}
      <MobileBottomBar onNavigate={navigateToSection} />
    </div>
  );
}
