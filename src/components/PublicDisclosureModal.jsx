import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, ShieldCheck, X, Download } from 'lucide-react';

const DISCLOSURES = [
  { name: 'Affiliation Certificate', url: 'https://www.eshwarvidyalaya.edu.in/affiliation-certificate' },
  { name: 'Trust Registration Certificate', url: 'https://www.eshwarvidyalaya.edu.in/TrustCertificate' },
  { name: 'NOC (No Objection Certificate)', url: 'https://www.eshwarvidyalaya.edu.in/NOC' },
  { name: 'Recognition Certificate', url: 'https://www.eshwarvidyalaya.edu.in/RecognitionCertificate' },
  { name: 'Fire Safety Certificate', url: 'https://www.eshwarvidyalaya.edu.in/FireCertificate' },
  { name: 'Building Safety Certificate', url: 'https://www.eshwarvidyalaya.edu.in/BuildingCertificate' },
  { name: 'Water & Health Hygiene Certificate', url: 'https://www.eshwarvidyalaya.edu.in/WaterHealthCertificate' },
  { name: 'Fee Structure Details', url: 'https://www.eshwarvidyalaya.edu.in/FeesStructure' },
  { name: 'School Management Committee (SMC)', url: 'https://www.eshwarvidyalaya.edu.in/SMC' },
  { name: 'Parent Teacher Association (PTA)', url: 'https://www.eshwarvidyalaya.edu.in/PTA' },
  { name: 'Self Certification', url: 'https://www.eshwarvidyalaya.edu.in/SelfCertification' },
  { name: '3-Year Board Results', url: 'https://www.eshwarvidyalaya.edu.in/3-year-result' },
  { name: 'Mandatory Disclosure Document', url: 'https://www.eshwarvidyalaya.edu.in/MandatoryDisclosure' }
];

export default function PublicDisclosureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">CBSE Mandatory Public Disclosure</h3>
              <p className="text-xs text-amber-400 font-semibold">Affiliation No. 830544 • Eshwar Vidyalaya Mysuru</p>
            </div>
          </div>

          <p className="text-xs text-slate-300 mb-6 border-b border-slate-800 pb-4">
            In compliance with Central Board of Secondary Education (CBSE) norms, official regulatory documents, certificates, and compliance reports are available below.
          </p>

          <div className="overflow-y-auto space-y-2 pr-2 flex-1">
            {DISCLOSURES.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between hover:border-amber-500/40 transition"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">{item.name}</span>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs transition"
                >
                  <span>View Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs hover:bg-slate-700 transition"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
