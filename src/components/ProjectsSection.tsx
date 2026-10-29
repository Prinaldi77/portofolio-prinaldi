import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Search,
  X,
  LayoutGrid,
  Globe,
  Smartphone,
  Sparkles,
  FolderSearch,
} from 'lucide-react';
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

type CategoryFilter = 'ALL' | 'WEB' | 'MOBILE' | 'COMMERCIAL';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = [],
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
    {
      id: 'ALL',
      label: isId ? 'SEMUA KARYA' : 'ALL WORKS',
      icon: <LayoutGrid className="w-3.5 h-3.5" />,
    },
    {
      id: 'WEB',
      label: isId ? 'SISTEM WEB' : 'WEB SYSTEMS',
      icon: <Globe className="w-3.5 h-3.5" />,
    },
    {
      id: 'MOBILE',
      label: isId ? 'MOBILE ANDROID' : 'MOBILE APPS',
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
    {
      id: 'COMMERCIAL',
      label: isId ? 'KOMERSIAL' : 'COMMERCIAL',
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
  ];

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const catUpper = project.category.toUpperCase();
      const titleUpper = project.title.toUpperCase();

      const matchesCategory =
        activeFilter === 'ALL' ||
        (activeFilter === 'MOBILE' &&
          (catUpper.includes('MOBILE') || project.tags.some((t) => t.toLowerCase().includes('flutter')))) ||
        (activeFilter === 'COMMERCIAL' &&
          (catUpper.includes('KOMERSIAL') ||
            catUpper.includes('COMMERCIAL') ||
            titleUpper.includes('PHOTOBOOTH'))) ||
        (activeFilter === 'WEB' &&
          !catUpper.includes('MOBILE') &&
          !catUpper.includes('KOMERSIAL') &&
          !catUpper.includes('COMMERCIAL'));

      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  // Build 6 perimeter showcase slots from real project images (Scene 3 in Reference Video)
  const perimeterSlots = useMemo(() => {
    const base = projects.length > 0 ? projects : [];
    if (base.length === 0) return [];
    return [
      base[0 % base.length],
      base[1 % base.length],
      base[2 % base.length],
      base[3 % base.length],
      base[0 % base.length],
      base[2 % base.length],
    ];
  }, [projects]);

  const handleResetFilter = () => {
    setActiveFilter('ALL');
    setSearchQuery('');
  };

  return (
    <section
      id="projects"
      aria-label="Karya Pilihan"
      className="py-16 sm:py-24 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="04"
          totalSections="08"
          title={isId ? 'KARYA TERPILIH & ARSIP' : 'SELECTED WORKS & ARCHIVE'}
          className="mb-10 sm:mb-12"
        />

        {/* SCENE 3 ADAPTATION (00:09 - 00:17 in Reference Video):
            U-Shaped Perimeter Visual Gallery Frame + Left Vertical Dock + Central Interactive Filter Hub */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] border border-neutral-200 dark:border-white/15 bg-neutral-950 text-white p-5 sm:p-8 lg:p-10 mb-16 sm:mb-24 overflow-hidden shadow-2xl"
        >
          {/* Top Row of U-Shaped Perimeter Visual Gallery */}
          {perimeterSlots.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 opacity-85">
              {perimeterSlots.slice(0, 4).map((slot, idx) => (
                <a
                  key={`perim-top-${idx}`}
                  href={`#project-card-${slot.id}`}
                  className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 block"
                >
                  <img
                    src={slot.imageUrl}
                    alt={slot.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 right-3 font-mono text-[10px] font-bold text-neutral-200 truncate">
                    // {slot.title}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Middle Area: Left Side Wing + Center Focal Hub + Right Side Wing */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-4 sm:py-6">
            {/* Left Wing: Vertical Floating Icon Dock + Side Visual Card */}
            <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-4">
              {/* Floating Vertical Pill Icon Dock (Matching 00:10-00:17 left side in Video) */}
              <div
                role="group"
                aria-label={isId ? 'Filter Kategori Cepat' : 'Quick Category Dock'}
                className="inline-flex lg:flex-col items-center gap-2 p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
              >
                {filterOptions.map((opt) => {
                  const isActive = activeFilter === opt.id;
                  return (
                    <button
                      key={`dock-${opt.id}`}
                      type="button"
                      onClick={() => setActiveFilter(opt.id)}
                      title={opt.label}
                      aria-label={opt.label}
                      aria-pressed={isActive}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-white text-black shadow-md'
                          : 'text-neutral-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {opt.icon}
                    </button>
                  );
                })}
              </div>

              {/* Left Perimeter Visual Card (Desktop) */}
              {perimeterSlots[4] && (
                <a
                  href={`#project-card-${perimeterSlots[4].id}`}
                  className="hidden lg:block relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 opacity-65 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={perimeterSlots[4].imageUrl}
                    alt={perimeterSlots[4].title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </a>
              )}
            </div>

            {/* Center Focal Point: Title + Interactive Search Pill Bar + Sliding Filter Pills */}
            <div className="lg:col-span-6 text-center flex flex-col items-center justify-center z-10 px-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-2">
                // {projects.length} {isId ? 'SISTEM TERDOKUMENTASI' : 'DOCUMENTED SYSTEMS'}
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.08]">
                {isId ? 'Eksplorasi Karya &' : 'Your Next System'}
                <span className="block text-neutral-300">
                  {isId ? 'Rekayasa Sistem.' : 'Starts Here.'}
                </span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
                {isId
                  ? 'Saring arsip proyek berdasarkan arsitektur teknologi atau ketik kata kunci (Next.js, Flutter, Supabase, SQLite).'
                  : 'Filter the project archive by architecture or search by stack (Next.js, Flutter, Supabase, SQLite).'}
              </p>

              {/* Interactive Search Pill Bar (Matching 00:10-00:17 center prompt bar in Video) */}
              <div className="w-full max-w-xl mt-6 p-1.5 rounded-full border border-white/20 bg-[#141418]/95 shadow-xl flex items-center gap-2">
                <div className="pl-3.5 text-neutral-400 shrink-0">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label={isId ? 'Cari proyek atau teknologi' : 'Search projects or stack'}
                  placeholder={
                    isId
                      ? 'Cari proyek atau stack (mis. Next.js, Flutter, AGP)...'
                      : 'Search project or stack (e.g. Next.js, Flutter, AGP)...'
                  }
                  className="w-full bg-transparent text-xs sm:text-sm font-mono text-white placeholder:text-neutral-400 focus:outline-none py-2"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label={isId ? 'Hapus pencarian' : 'Clear search'}
                    className="p-1.5 text-neutral-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <a
                  href="#project-list-anchor"
                  className="px-4 sm:px-5 min-h-[38px] rounded-full bg-white text-black font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center shrink-0 hover:bg-neutral-200 transition-colors"
                >
                  {isId ? 'LIHAT' : 'VIEW'} ({filteredProjects.length})
                </a>
              </div>

              {/* Sliding Category Filter Pills (Animation 4: layoutId) */}
              <div
                role="tablist"
                aria-label={isId ? 'Filter Kategori Proyek' : 'Project Category Filter'}
                className="mt-4 inline-flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full border border-white/15 bg-white/5"
              >
                {filterOptions.map((opt) => {
                  const isActive = activeFilter === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFilter(opt.id)}
                      className={`relative px-3.5 min-h-[36px] rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        isActive ? 'text-black' : 'text-neutral-300 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeProjectFilterPill"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          className="absolute inset-0 rounded-full bg-white -z-0"
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {opt.icon}
                        <span>{opt.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Wing: Side Perimeter Visual Cards */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-4">
              {perimeterSlots[5] && (
                <a
                  href={`#project-card-${perimeterSlots[5].id}`}
                  className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 opacity-65 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={perimeterSlots[5].imageUrl}
                    alt={perimeterSlots[5].title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </a>
              )}
              {perimeterSlots[1] && (
                <a
                  href={`#project-card-${perimeterSlots[1].id}`}
                  className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={perimeterSlots[1].imageUrl}
                    alt={perimeterSlots[1].title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Detailed Project List Anchor */}
        <div id="project-list-anchor" className="scroll-mt-28">
          {/* Empty State when filter/search returns no matches (R-27) */}
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11] text-center max-w-xl mx-auto"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mx-auto mb-4">
                <FolderSearch className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-black dark:text-white">
                {isId ? 'Tidak Ada Proyek yang Cocok' : 'No Matching Projects Found'}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {isId
                  ? `Pencarian "${searchQuery}" pada kategori ${activeFilter} belum memiliki hasil. Reset filter untuk menampilkan seluruh sistem.`
                  : `No projects matched "${searchQuery}" under ${activeFilter}. Reset the filter to view all documented systems.`}
              </p>
              <button
                type="button"
                onClick={handleResetFilter}
                className="mt-6 inline-flex items-center gap-2 px-5 min-h-[44px] rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>{isId ? 'RESET PENCARIAN & FILTER' : 'RESET SEARCH & FILTER'}</span>
              </button>
            </motion.div>
          ) : (
            <div className="space-y-16 sm:space-y-24">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const isEven = index % 2 === 1;
                  const formattedIndex = String(index + 1).padStart(2, '0');
                  const techString = project.tags.join(' · ');

                  return (
                    <motion.article
                      id={`project-card-${project.id}`}
                      key={project.id || index}
                      layout="position"
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-28"
                    >
                      {/* Mockup Container */}
                      <div
                        className={`lg:col-span-7 ${
                          isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <div className="relative group rounded-3xl border border-neutral-200 dark:border-white/15 bg-neutral-100 dark:bg-[#0F0F11] p-4 sm:p-6 overflow-hidden transition-colors duration-300 hover:border-black dark:hover:border-white/40">
                          {/* Top bar metadata */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 dark:border-white/10 select-none">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                            </div>
                            <span className="font-mono text-[10px] font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                              {project.category}
                            </span>
                          </div>

                          {/* Mockup Preview Image */}
                          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white dark:bg-[#050505] border border-neutral-200 dark:border-white/10">
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

                      {/* Text Details */}
                      <div
                        className={`lg:col-span-5 flex flex-col justify-between ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div>
                          {/* Monospace Tag (Zero em-dash per R-02) */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] font-mono text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                              [ {formattedIndex} ] // {project.category}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white leading-tight">
                            {project.title}
                          </h3>

                          {/* Description Paragraph */}
                          <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                            {project.description}
                          </p>

                          {/* Real Project Metrics */}
                          {project.metrics && project.metrics.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mt-5 py-3 px-3.5 rounded-2xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11] font-mono text-[11px]">
                              {project.metrics.map((metric, mIdx) => (
                                <div key={mIdx}>
                                  <span className="block text-[10px] text-neutral-600 dark:text-neutral-400 uppercase">
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
                          <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-white/10">
                            <span className="block text-[10px] font-mono font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest mb-1.5">
                              // {isId ? 'ARSITEKTUR TEKNOLOGI' : 'TECH STACK'}
                            </span>
                            <p className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
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
                              className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-full border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-mono text-xs font-bold uppercase hover:opacity-90 transition-opacity"
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
                              className="inline-flex items-center gap-1.5 px-5 min-h-[44px] rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#121215] text-black dark:text-white font-mono text-xs font-semibold uppercase hover:border-black dark:hover:border-white transition-colors"
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
                              className="inline-flex items-center gap-1.5 px-5 min-h-[44px] rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#121215] text-black dark:text-white font-mono text-xs font-semibold uppercase hover:border-black dark:hover:border-white transition-colors"
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
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
