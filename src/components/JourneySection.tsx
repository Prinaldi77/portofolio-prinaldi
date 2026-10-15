import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Calendar, Building2, MapPin } from 'lucide-react';
import type { JourneyItem, Language } from '../types/portfolio';

interface JourneySectionProps {
  experiences?: JourneyItem[];
  journey?: JourneyItem[];
  header?: {
    eyebrow?: string;
    badge?: string;
    title: string;
    description?: string;
    subtitle?: string;
  };
  currentLang?: Language;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  experiences,
  journey,
  header,
  currentLang = 'en',
}) => {
  const items = journey || experiences || [];
  const isId = currentLang === 'id';

  const defaultBadge = isId ? '03 // TONGGAK' : '03 // MILESTONES';
  const defaultTitle = isId ? 'PERJALANAN SAYA' : 'MY JOURNEY';
  const defaultDescription = isId
    ? 'Tonggak pertumbuhan: Dari lab universitas hingga lingkungan produksi profesional.'
    : 'Milestones of growth: From university labs to professional production environments.';

  const currentBadge = header?.badge || header?.eyebrow || defaultBadge;
  const currentTitle = header?.title || defaultTitle;
  const currentDescription = header?.description || header?.subtitle || defaultDescription;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 bg-white dark:bg-neutral-950 text-black dark:text-white border-b-2 border-black dark:border-neutral-800 relative overflow-hidden scroll-mt-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Judul "MY JOURNEY" di Tengah Atas dengan Subheadline Minimalis */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 rounded-full border border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-neutral-200 shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white inline-block" />
            <span>{currentBadge}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-black dark:text-white tracking-tighter transition-colors">
            {currentTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mt-3 font-normal leading-relaxed transition-colors">
            {currentDescription}
          </p>
        </div>

        {/* 2. Timeline Wrapper Vertikal */}
        <div className="relative">
          {/* Garis vertikal tipis berjalan di tengah layout (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-black dark:bg-neutral-700 -translate-x-1/2 z-0 transition-colors" />

          {/* Garis vertikal tipis di sebelah kiri (Mobile) */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-black dark:bg-neutral-700 z-0 transition-colors" />

          {/* Daftar Titik Tahun Bergantian Responsif */}
          <div className="space-y-16 sm:space-y-24">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id || index} className="relative">
                  {/* Titik Center Node Bulat di Garis Vertikal (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-4 border-black dark:border-white z-10 shadow-hard-sm dark:shadow-hard-sm-white transition-colors" />

                  {/* Titik Node Bulat di Garis Vertikal (Mobile) */}
                  <div className="md:hidden absolute left-5 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-4 border-black dark:border-white z-10 shadow-hard-sm dark:shadow-hard-sm-white transition-colors" />

                  {/* Desktop Grid Layout 2 Kolom Bergantian */}
                  <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Sisi Kiri Desktop */}
                    <div className={isEven ? 'text-right' : 'text-left'}>
                      {isEven ? (
                        /* Sisi Kiri: Angka Tahun Besar + Icon Folder "PROJECT ARCHIVE" */
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col items-end pr-4"
                        >
                          {/* Angka Tahun Display Raksasa Outline Monospace */}
                          <div className="relative inline-block select-none">
                            <span className="text-7xl sm:text-8xl lg:text-9xl font-black font-mono tracking-tight text-transparent [-webkit-text-stroke:2px_#000000] dark:[-webkit-text-stroke:2px_#ffffff] transition-all">
                              {item.year}
                            </span>
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                              &lt;/&gt;
                            </span>
                          </div>

                          {/* Tombol Icon Folder "PROJECT ARCHIVE" */}
                          {item.hasArchive && (
                            <button
                              type="button"
                              onClick={scrollToProjects}
                              className="mt-3 group inline-flex flex-col items-end text-right cursor-pointer"
                              title={isId ? 'Lihat Proyek Terkait' : 'View Projects'}
                            >
                              <div className="w-16 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white shadow-hard-sm dark:shadow-hard-sm-white group-hover:-translate-y-0.5 transition-transform">
                                <Folder className="w-6 h-6 fill-current" />
                              </div>
                              <span className="text-xs font-mono font-black uppercase text-black dark:text-white mt-2 tracking-wider group-hover:underline">
                                {item.archiveLabel || (isId ? 'REPO PROYEK' : 'PROJECT REPO')}
                              </span>
                              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                                {isId ? '[Klik untuk melihat]' : '[Click to explore]'}
                              </span>
                            </button>
                          )}
                        </motion.div>
                      ) : (
                        /* Sisi Kiri: Kartu Pengalaman Kerja / Organisasi */
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.4 }}
                          className="border-2 border-black dark:border-neutral-700 rounded-3xl p-6 sm:p-8 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white transition-colors text-left"
                        >
                          <ExperienceCardContent item={item} isId={isId} />
                        </motion.div>
                      )}
                    </div>

                    {/* Sisi Kanan Desktop */}
                    <div className={isEven ? 'text-left' : 'text-right'}>
                      {isEven ? (
                        /* Sisi Kanan: Kartu Pengalaman Kerja / Organisasi */
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.4 }}
                          className="border-2 border-black dark:border-neutral-700 rounded-3xl p-6 sm:p-8 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white transition-colors text-left"
                        >
                          <ExperienceCardContent item={item} isId={isId} />
                        </motion.div>
                      ) : (
                        /* Sisi Kanan: Angka Tahun Besar + Icon Folder "PROJECT ARCHIVE" */
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col items-start pl-4"
                        >
                          {/* Angka Tahun Display Raksasa Outline Monospace */}
                          <div className="relative inline-block select-none">
                            <span className="text-7xl sm:text-8xl lg:text-9xl font-black font-mono tracking-tight text-transparent [-webkit-text-stroke:2px_#000000] dark:[-webkit-text-stroke:2px_#ffffff] transition-all">
                              {item.year}
                            </span>
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                              &lt;/&gt;
                            </span>
                          </div>

                          {/* Tombol Icon Folder "PROJECT ARCHIVE" */}
                          {item.hasArchive && (
                            <button
                              type="button"
                              onClick={scrollToProjects}
                              className="mt-3 group inline-flex flex-col items-start text-left cursor-pointer"
                              title={isId ? 'Lihat Proyek Terkait' : 'View Projects'}
                            >
                              <div className="w-16 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center border-2 border-black dark:border-white shadow-hard-sm dark:shadow-hard-sm-white group-hover:-translate-y-0.5 transition-transform">
                                <Folder className="w-6 h-6 fill-current" />
                              </div>
                              <span className="text-xs font-mono font-black uppercase text-black dark:text-white mt-2 tracking-wider group-hover:underline">
                                {item.archiveLabel || (isId ? 'REPO PROYEK' : 'PROJECT REPO')}
                              </span>
                              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                                {isId ? '[Klik untuk melihat]' : '[Click to explore]'}
                              </span>
                            </button>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* 4. Layar Mobile: 1 Kolom Vertikal Rapi */}
                  <div className="md:hidden pl-10 sm:pl-12">
                    {/* Header Bar Tahun & Folder Mobile */}
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-transparent [-webkit-text-stroke:1.5px_#000000] dark:[-webkit-text-stroke:1.5px_#ffffff]">
                          {item.year}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-[9px] font-mono font-bold">
                          &lt;/&gt;
                        </span>
                      </div>

                      {item.hasArchive && (
                        <button
                          type="button"
                          onClick={scrollToProjects}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white text-[10px] font-mono font-bold shadow-hard-sm dark:shadow-hard-sm-white"
                        >
                          <Folder className="w-3.5 h-3.5 fill-current" />
                          <span>REPO</span>
                        </button>
                      )}
                    </div>

                    {/* Kartu Pengalaman Mobile */}
                    <div className="border-2 border-black dark:border-neutral-700 rounded-3xl p-5 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white text-left transition-colors">
                      <ExperienceCardContent item={item} isId={isId} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Komponen Konten Kartu Pengalaman Kerja / Organisasi */
interface ExperienceCardContentProps {
  item: JourneyItem;
  isId: boolean;
}

const ExperienceCardContent: React.FC<ExperienceCardContentProps> = ({ item, isId }) => {
  return (
    <>
      {/* Role Badge & Periode */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white shadow-hard-sm dark:shadow-hard-sm-white">
          {item.roleBadge}
        </span>
        <div className="flex items-center gap-1 text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{item.period}</span>
        </div>
      </div>

      {/* Role Title */}
      <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white tracking-tight mb-1">
        {item.role}
      </h3>

      {/* Tempat Kerja / Organisasi & Lokasi */}
      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-4">
        <span className="flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100">
          <Building2 className="w-3.5 h-3.5" />
          <span>{item.company}</span>
        </span>
        {item.location && (
          <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-xs">
            <MapPin className="w-3 h-3" />
            <span>{item.location}</span>
          </span>
        )}
      </div>

      {/* Deskripsi Tugas Bullet Points */}
      <ul className="space-y-2 text-xs sm:text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
        {item.description.map((desc, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0 mt-2 inline-block"></span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      {/* Skill Badges */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-5 pt-4 border-t border-black dark:border-neutral-800">
          <p className="text-[10px] font-mono font-bold uppercase text-neutral-500 dark:text-neutral-400 tracking-wider mb-2">
            {isId ? 'KOMPETENSI & TEKNOLOGI:' : 'COMPETENCIES & STACK:'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-black dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default JourneySection;
