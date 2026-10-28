import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import type { Project, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface ProjectsSectionProps {
  projects?: Project[];
  currentLang?: Language;
  header?: {
    eyebrow?: string;
    badge?: string;
    title: string;
    description?: string;
  };
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = [],
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';
  const [showAll, setShowAll] = useState(false);

  // If projects list has more than 2, allow expand/collapse
  const initialCount = 2;
  const displayedProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <section
      id="projects"
      aria-label="Karya Pilihan"
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="04"
          totalSections="08"
          title={isId ? 'KARYA TERPILIH' : 'SELECTED WORKS'}
          className="mb-10 sm:mb-14"
        />

        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white font-sans">
              {isId ? 'KARYA & REKAYASA SISTEM' : 'FEATURED WORKS & SYSTEMS'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
              {isId
                ? 'Koleksi sistem web fungsional yang dibangun dengan penekanan pada ketepatan data, arsitektur modular, dan kebutuhan pengguna nyata.'
                : 'A curated collection of web systems engineered with an emphasis on data integrity, modular architecture, and real-world utility.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            // {projects.length} {isId ? 'PROYEK TERDOKUMENTASI' : 'DOCUMENTED PROJECTS'}
          </span>
        </div>

        {/* Alternating Zig-Zag Project List */}
        <div className="space-y-16 sm:space-y-24">
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
              const isEven = index % 2 === 1; // 0 is odd, 1 is even, 2 is odd
              const formattedIndex = String(index + 1).padStart(2, '0');
              const techString = project.tags.join(' · ');

              return (
                <motion.article
                  key={project.id || index}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Mockup Container (Left for odd index, Right for even index) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative group rounded-3xl border border-gray-200 dark:border-neutral-800 bg-zinc-100 dark:bg-neutral-900 p-4 sm:p-7 overflow-hidden transition-all duration-300 hover:border-black dark:hover:border-neutral-500">
                      {/* Top bar mockup dots */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200/70 dark:border-neutral-800 select-none">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                        </div>
                        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>

                      {/* Mockup Preview Image with smooth scale-up on hover */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 shadow-sm">
                        <img
                          src={project.imageUrl}
                          alt={project.imageAlt ?? project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Details (Right for odd index, Left for even index) */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      {/* Monospace Tag: [ 0X ] — KATEGORI */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                          [ {formattedIndex} ] — {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white leading-tight font-sans">
                        {project.title}
                      </h3>

                      {/* Description Paragraph */}
                      <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Metrics / Context Specification */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mt-5 py-3 px-3.5 rounded-xl border border-gray-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 font-mono text-[11px]">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx}>
                              <span className="block text-[10px] text-neutral-400 uppercase">
                                {metric.label}
                              </span>
                              <span className="font-bold text-black dark:text-white truncate block">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack joined with dots */}
                      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-neutral-900">
                        <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">
                          {isId ? 'ARSITEKTUR TEKNOLOGI' : 'TECH STACK'}
                        </span>
                        <p className="font-mono text-xs font-medium text-neutral-700 dark:text-neutral-300">
                          {techString}
                        </p>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          <span>{isId ? 'Repositori GitHub' : 'GitHub Repo'}</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white font-mono text-xs font-semibold uppercase hover:border-black dark:hover:border-white transition-colors"
                        >
                          <span>{isId ? 'Lihat Demo' : 'Live Demo'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.caseStudyUrl && !project.demoUrl && (
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white font-mono text-xs font-semibold uppercase hover:border-black dark:hover:border-white transition-colors"
                        >
                          <span>{isId ? 'Dokumentasi Proyek' : 'Project Docs'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Toggle Button: LIHAT LEBIH BANYAK ↓ / TAMPILKAN LEBIH SEDIKIT ↑ */}
        {projects.length > initialCount && (
          <div className="mt-14 sm:mt-20 flex justify-center">
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
                  ? `LIHAT LEBIH BANYAK (${projects.length - initialCount} PROYEK LAGI)`
                  : `VIEW MORE (${projects.length - initialCount} MORE PROJECTS)`}
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

export default ProjectsSection;
