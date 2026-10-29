import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar } from 'lucide-react';
import type { AwardItem, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface AwardsSectionProps {
  awards?: AwardItem[];
  currentLang?: Language;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({
  awards = [],
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';

  return (
    <section
      id="awards"
      aria-label="Prestasi & Penghargaan"
      className="py-16 sm:py-24 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="05"
          totalSections="08"
          title={isId ? 'PRESTASI & PENGHARGAAN' : 'HONORS & AWARDS'}
          className="mb-10 sm:mb-12"
        />

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-2">
              // {awards.length} {isId ? 'PENCAPAIAN TERDOKUMENTASI' : 'DOCUMENTED MILESTONES'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white">
              {isId ? 'PENGAKUAN & PRESTASI' : 'HONORS & RECOGNITION'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-normal max-w-xl">
              {isId
                ? 'Dokumentasi implementasi sistem teknologi pada ajang perlombaan serta konsistensi pencapaian akademik.'
                : 'Documented milestones in competition technology deployment and academic performance.'}
            </p>
          </div>
        </div>

        {/* 2-Column Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {awards.map((award, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={award.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11] hover:border-black dark:hover:border-white/40 transition-colors duration-300"
              >
                <div>
                  {/* Documentation Photo in Landscape Ratio */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-[#050505] border border-neutral-200 dark:border-white/10 mb-6">
                    {award.imageUrl ? (
                      <img
                        src={award.imageUrl}
                        alt={award.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-500">
                        <Trophy className="w-10 h-10 stroke-1" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                      [ {formattedIndex} ]
                    </div>
                  </div>

                  {/* Category Monospace Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider">
                      // {award.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white leading-tight">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400">
                  <span className="font-bold text-black dark:text-white truncate">
                    {award.organization}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{award.year}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
