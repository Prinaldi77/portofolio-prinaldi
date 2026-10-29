import React from 'react';
import { motion } from 'framer-motion';
import type { OrganizationItem, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface OrganizationsSectionProps {
  organizations?: OrganizationItem[];
  currentLang?: Language;
}

export const OrganizationsSection: React.FC<OrganizationsSectionProps> = ({
  organizations = [],
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';

  return (
    <section
      id="organizations"
      aria-label="Pengalaman Organisasi"
      className="py-16 sm:py-24 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="07"
          totalSections="08"
          title={isId ? 'PENGALAMAN ORGANISASI' : 'ORGANIZATIONAL EXPERIENCE'}
          className="mb-10 sm:mb-12"
        />

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-2">
              // {organizations.length} {isId ? 'AFILIASI INSTITUSI' : 'INSTITUTIONAL AFFILIATION'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black dark:text-white">
              {isId ? 'KEPEMIMPINAN & ORGANISASI' : 'LEADERSHIP & INVOLVEMENT'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-normal max-w-xl">
              {isId
                ? 'Aktivitas kelembagaan mahasiswa, kontribusi tim teknis, serta rekam jejak kepanitiaan resmi.'
                : 'Student institutional activities, technical engineering contributions, and event coordination.'}
            </p>
          </div>
        </div>

        {/* Framed Organization Cards */}
        <div className="space-y-8 sm:space-y-10">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-9 rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11] hover:border-black dark:hover:border-white/40 transition-colors"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-black text-xs tracking-wider shrink-0 select-none">
                    {org.logoText || 'HIMA'}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-black dark:text-white leading-snug">
                      {org.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                      {org.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#141418] font-mono text-xs font-bold text-black dark:text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{org.period}</span>
                </div>
              </div>

              {/* Card Body Grid: Roles (Left) and Programs (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                {/* Left Column: Roles / Divisi */}
                <div className="lg:col-span-5">
                  <span className="block font-mono text-[11px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-4">
                    // {isId ? 'JABATAN & STRUKTUR' : 'ROLES & DIVISIONS'}
                  </span>
                  <div className="space-y-3">
                    {org.roles.map((item, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#141418]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                          <span className="font-bold text-xs sm:text-sm text-black dark:text-white">
                            {item.role}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 shrink-0 ml-2">
                          {item.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Numbered Programs & Committee */}
                <div className="lg:col-span-7">
                  <span className="block font-mono text-[11px] font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-4">
                    // {isId ? 'PROGRAM KERJA & KEPANITIAAN RESMI' : 'KEY WORK PROGRAMS & COMMITTEES'}
                  </span>
                  <div className="space-y-3">
                    {org.programs.map((prog, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#141418] hover:border-black dark:hover:border-white/30 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-xs text-amber-600 dark:text-amber-500">
                              [ {prog.number} ]
                            </span>
                            <span className="font-display font-bold text-sm sm:text-base text-black dark:text-white">
                              {prog.title}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
                            {prog.date}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 pl-7">
                          <span>{prog.role}</span>
                          <span className="font-mono text-[11px]">
                            {prog.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
