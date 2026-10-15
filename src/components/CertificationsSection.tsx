import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Award } from 'lucide-react';
import type { CertificationItem, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface CertificationsSectionProps {
  certifications?: CertificationItem[];
  currentLang?: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications = [],
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';
  const [showAll, setShowAll] = useState(false);

  const initialCount = 4;
  const displayedItems = showAll ? certifications : certifications.slice(0, initialCount);
  const remainingCount = certifications.length - initialCount;

  return (
    <section
      id="certifications"
      aria-label="Sertifikasi & Lisensi"
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="06"
          totalSections="08"
          title={isId ? 'SERTIFIKASI & KOMPETENSI' : 'CERTIFICATIONS & CREDENTIALS'}
          className="mb-10 sm:mb-14"
        />

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white font-sans">
              {isId ? 'SERTIFIKASI & LISENSI' : 'LICENSES & CERTIFICATIONS'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
              {isId
                ? 'Daftar lisensi dan sertifikat kompetensi rekayasa perangkat lunak yang telah diselesaikan dan terverifikasi secara resmi.'
                : 'Formally completed and verified competency credentials in software engineering and web technologies.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            // {certifications.length} {isId ? 'TOTAL SERTIFIKASI' : 'TOTAL CREDENTIALS'}
          </span>
        </div>

        {/* Table-like Minimalist List */}
        <div className="border-t border-b border-gray-200 dark:border-neutral-800 divide-y divide-gray-200 dark:divide-neutral-800">
          {/* Header Row */}
          <div className="hidden sm:grid grid-cols-12 gap-4 py-3.5 px-4 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider select-none">
            <span className="col-span-1">NO.</span>
            <span className="col-span-7">{isId ? 'JUDUL & PENERBIT' : 'TITLE & ISSUER'}</span>
            <span className="col-span-3 text-right">{isId ? 'PERIODE' : 'PERIOD'}</span>
            <span className="col-span-1 text-right">{isId ? 'TAUTAN' : 'LINK'}</span>
          </div>

          {/* Certification Rows */}
          <AnimatePresence>
            {displayedItems.map((cert, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={cert.id || index}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 py-5 px-3 sm:px-4 items-center hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-colors"
                >
                  {/* Left: Index */}
                  <div className="sm:col-span-1 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {formattedIndex}
                    </span>
                    <span className="sm:hidden font-mono text-[10px] text-neutral-400 uppercase">
                      / {cert.date}
                    </span>
                  </div>

                  {/* Middle: Title & Issuer */}
                  <div className="sm:col-span-7">
                    <h3 className="font-bold text-base sm:text-lg text-black dark:text-white leading-snug group-hover:underline underline-offset-4 decoration-1">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      <Award className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Right: Date */}
                  <div className="hidden sm:block sm:col-span-3 text-right">
                    <span className="font-mono text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {cert.date}
                    </span>
                  </div>

                  {/* Far Right: Square Preview Icon Button */}
                  <div className="sm:col-span-1 flex sm:justify-end">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Lihat kredensial ${cert.title}`}
                        className="w-8 h-8 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 flex items-center justify-center hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="w-8 h-8 rounded-lg border border-gray-100 dark:border-neutral-900 flex items-center justify-center text-neutral-300 dark:text-neutral-700">
                        —
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Toggle Button: LIHAT LEBIH BANYAK (X SERTIFIKAT) ↓ / TAMPILKAN LEBIH SEDIKIT ↑ */}
        {certifications.length > initialCount && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-black dark:hover:border-white transition-all shadow-sm"
            >
              <span>
                {showAll
                  ? isId
                    ? 'TAMPILKAN LEBIH SEDIKIT'
                    : 'SHOW LESS'
                  : isId
                  ? `LIHAT LEBIH BANYAK (${remainingCount} SERTIFIKAT) ↓`
                  : `VIEW MORE (${remainingCount} CERTIFICATES) ↓`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
