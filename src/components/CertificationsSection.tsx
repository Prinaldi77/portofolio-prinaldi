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
      className="py-16 sm:py-24 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="06"
          totalSections="08"
          title={isId ? 'SERTIFIKASI & KOMPETENSI' : 'CERTIFICATIONS & CREDENTIALS'}
          className="mb-10 sm:mb-12"
        />

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-2">
              // {certifications.length} {isId ? 'TOTAL KREDENSIAL' : 'TOTAL CREDENTIALS'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white">
              {isId ? 'SERTIFIKASI & LISENSI' : 'LICENSES & CERTIFICATIONS'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-normal max-w-xl">
              {isId
                ? 'Daftar lisensi dan sertifikat kompetensi rekayasa perangkat lunak yang telah diselesaikan.'
                : 'Completed competency credentials in software engineering and web technologies.'}
            </p>
          </div>
        </div>

        {/* Minimalist Ledger List */}
        <div className="rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-50/60 dark:bg-[#0F0F11] overflow-hidden divide-y divide-neutral-200 dark:divide-white/10">
          {/* Header Row */}
          <div className="hidden sm:grid grid-cols-12 gap-4 py-4 px-6 text-[11px] font-mono font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider select-none bg-neutral-100/70 dark:bg-[#141418]">
            <span className="col-span-1">NO.</span>
            <span className="col-span-7">{isId ? 'JUDUL & PENERBIT' : 'TITLE & ISSUER'}</span>
            <span className="col-span-3 text-right">{isId ? 'PERIODE' : 'PERIOD'}</span>
            <span className="col-span-1 text-right">{isId ? 'BUKTI' : 'LINK'}</span>
          </div>

          {/* Certification Rows */}
          <AnimatePresence>
            {displayedItems.map((cert, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={cert.id || index}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 py-5 px-5 sm:px-6 items-center hover:bg-neutral-100/80 dark:hover:bg-white/5 transition-colors"
                >
                  {/* Left: Index */}
                  <div className="sm:col-span-1 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500">
                      [{formattedIndex}]
                    </span>
                    <span className="sm:hidden font-mono text-[11px] text-neutral-600 dark:text-neutral-400 uppercase">
                      // {cert.date}
                    </span>
                  </div>

                  {/* Middle: Title & Issuer */}
                  <div className="sm:col-span-7">
                    <h3 className="font-display font-bold text-base sm:text-lg text-black dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      <Award className="w-3.5 h-3.5 shrink-0 text-amber-600 dark:text-amber-500" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Right: Date */}
                  <div className="hidden sm:block sm:col-span-3 text-right">
                    <span className="font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                      {cert.date}
                    </span>
                  </div>

                  {/* Far Right: Action Link Button */}
                  <div className="sm:col-span-1 flex sm:justify-end">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Lihat kredensial ${cert.title}`}
                        className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#121215] text-black dark:text-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center font-mono text-xs text-neutral-500">
                        N/A
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Toggle Button */}
        {certifications.length > initialCount && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 min-h-[44px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:border-black dark:hover:border-white transition-colors cursor-pointer"
            >
              <span>
                {showAll
                  ? isId
                    ? 'TAMPILKAN LEBIH SEDIKIT'
                    : 'SHOW LESS'
                  : isId
                  ? `LIHAT LEBIH BANYAK (${remainingCount} SERTIFIKAT)`
                  : `VIEW MORE (${remainingCount} CERTIFICATES)`}
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
