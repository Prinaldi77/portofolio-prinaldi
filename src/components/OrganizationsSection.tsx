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
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="07"
          totalSections="08"
          title={isId ? 'PENGALAMAN ORGANISASI' : 'ORGANIZATIONAL EXPERIENCE'}
          className="mb-10 sm:mb-14"
        />

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white font-sans">
              {isId ? 'KEPEMIMPINAN & ORGANISASI' : 'LEADERSHIP & INVOLVEMENT'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
              {isId
                ? 'Aktivitas kelembagaan mahasiswa, kontribusi tim teknologi, serta rekam jejak kepanitiaan resmi.'
                : 'Student institutional activities, technical leadership contributions, and official event coordination.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            // {organizations.length} {isId ? 'ORGANISASI UTAMA' : 'PRIMARY AFFILIATIONS'}
          </span>
        </div>

        {/* Framed Organization Cards */}
        <div className="space-y-8 sm:space-y-10">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-9 rounded-3xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-black dark:hover:border-neutral-500 transition-colors shadow-sm"
            >
              {/* Card Header: Logo/Badge, Organization Name, and Period Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-neutral-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-black text-xs tracking-wider shrink-0 select-none">
                    {org.logoText || 'HIMA'}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-black dark:text-white font-sans leading-snug">
                      {org.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {org.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full border border-gray-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 font-mono text-xs font-bold text-black dark:text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{org.period}</span>
                </div>
              </div>

              {/* Card Body Grid: Roles (Left) and Programs (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                {/* Left Column: Roles / Divisi */}
                <div className="lg:col-span-5">
                  <span className="block font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">
                    // {isId ? 'JABATAN & STRUKTUR' : 'ROLES & DIVISIONS'}
                  </span>
                  <div className="space-y-3.5">
                    {org.roles.map((item, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-neutral-800/80 bg-neutral-50/70 dark:bg-neutral-900/60"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-black dark:bg-white shrink-0" />
                          <span className="font-bold text-xs sm:text-sm text-black dark:text-white">
                            {item.role}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-neutral-400 shrink-0 ml-2">
                          {item.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Numbered Programs & Committee */}
                <div className="lg:col-span-7">
                  <span className="block font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4">
                    // {isId ? 'PROGRAM KERJA & KEPANITIAAN RESMI' : 'KEY WORK PROGRAMS & COMMITTEES'}
                  </span>
                  <div className="space-y-3">
                    {org.programs.map((prog, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-xl border border-gray-100 dark:border-neutral-800/80 bg-neutral-50/70 dark:bg-neutral-900/60 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-xs text-neutral-400">
                              [ {prog.number} ]
                            </span>
                            <span className="font-bold text-sm text-black dark:text-white">
                              {prog.title}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-neutral-400">
                            {prog.date}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 pl-6">
                          <span>{prog.role}</span>
                          <span className="font-mono text-[10px] text-neutral-400">
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
