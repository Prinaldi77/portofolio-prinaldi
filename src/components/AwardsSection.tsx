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
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="05"
          totalSections="08"
          title={isId ? 'PRESTASI & PENGHARGAAN' : 'HONORS & AWARDS'}
          className="mb-10 sm:mb-14"
        />

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white font-sans">
              {isId ? 'PENGAKUAN & PRESTASI' : 'HONORS & RECOGNITION'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
              {isId
                ? 'Dokumentasi implementasi sistem teknologi berdaya guna serta konsistensi pencapaian prestasi akademik.'
                : 'Documented milestones in technology systems implementation and academic excellence.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            // {awards.length} {isId ? 'PENGHARGAAN TERVERIFIKASI' : 'VERIFIED RECOGNITIONS'}
          </span>
        </div>

        {/* 2-Column Equal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {awards.map((award, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={award.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-black dark:hover:border-neutral-500 transition-all duration-300"
              >
                <div>
                  {/* Documentation Photo in Landscape Ratio */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-gray-200/80 dark:border-neutral-800 mb-6">
                    {award.imageUrl ? (
                      <img
                        src={award.imageUrl}
                        alt={award.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-400">
                        <Trophy className="w-10 h-10 stroke-1" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      [ {formattedIndex} ]
                    </div>
                  </div>

                  {/* Category Monospace Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {award.category}
                    </span>
                  </div>

                  {/* Title (Bold, Center/Middle) */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white leading-tight font-sans">
                    {award.title}
                  </h3>

                  {/* Description (Bottom) */}
                  <p className="mt-3.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="font-medium text-black dark:text-white truncate">
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
