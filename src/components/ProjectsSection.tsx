import React from 'react';
import { ArrowUpRight, Code, ExternalLink } from 'lucide-react';
import type { Project, Language } from '../types/portfolio';

interface ProjectsSectionProps {
  projects?: Project[];
  header?: {
    eyebrow?: string;
    badge?: string;
    title: string;
    description?: string;
    subtitle?: string;
  };
  liveDemoLabel?: string;
  caseStudyLabel?: string;
  currentLang?: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = [],
  header,
  liveDemoLabel,
  caseStudyLabel,
  currentLang = 'en',
}) => {
  const isId = currentLang === 'id';

  const defaultHeader = {
    badge: isId ? '02 // PROYEK' : '02 // WORKS',
    title: isId ? 'KARYA TERPILIH' : 'SELECTED WORKS',
    description: isId
      ? 'Kumpulan sistem web fungsional yang berorientasi pada ketepatan data, arsitektur bersih, dan kemudahan pemeliharaan.'
      : 'Functional web systems focused on clear requirements, data integrity, and maintainable architecture.',
  };

  const currentBadge = header?.badge || header?.eyebrow || defaultHeader.badge;
  const currentTitle = header?.title || defaultHeader.title;
  const currentDescription = header?.description || header?.subtitle || defaultHeader.description;

  const defaultLiveDemo = liveDemoLabel || (isId ? 'Lihat Demo' : 'Live Demo');
  const defaultCaseStudy = caseStudyLabel || (isId ? 'Detail Arsitektur' : 'Architecture & Code');

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0a0a0a] text-white border-b-2 border-neutral-800 relative overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section: Display Besar dengan Deskripsi Singkat */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-neutral-700 bg-neutral-900 text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 shadow-hard-sm">
              <span className="w-2 h-2 rounded-full bg-neutral-400 inline-block" />
              <span>{currentBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tighter">
              {currentTitle}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              {currentDescription}
            </p>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id || index}
              className="border-2 border-neutral-800 rounded-3xl bg-neutral-950 p-6 sm:p-8 transition-colors hover:border-neutral-600 shadow-2xl"
            >
              {/* Layout 2 Kolom di Dalam Card (Kiri: Info & Spesifikasi Arsitektur, Kanan: Preview UI) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Kolom Kiri: Metadata, Deskripsi, Arsitektur, Tech Stack, & CTA */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Pill & Featured Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-neutral-900 border border-neutral-800 text-neutral-300">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-white text-black">
                          FEATURED PROJECT
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bar Spesifikasi Arsitektur Nyata (Menggantikan Metrik Fiktif) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="my-6 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                      <div className="grid grid-cols-3 gap-3 divide-x divide-neutral-800">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className={mIdx > 0 ? 'pl-3 sm:pl-4' : ''}>
                            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
                              {metric.label}
                            </div>
                            <div className="text-xs sm:text-sm font-black font-mono text-white tracking-tight">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Badges Tech Stack Berlatar Gelap dengan Border Abu-abu */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tombol CTA Aksi Nyata (Tanpa Dead Links) */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {/* Source Code GitHub Link (Primary Action) */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-all active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>{defaultCaseStudy}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* Interactive Live Demo Link if genuinely available */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-all"
                      >
                        <span>{defaultLiveDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Kolom Kanan: Preview UI Frame */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border-2 border-neutral-800 bg-neutral-900 p-2 sm:p-3 shadow-2xl overflow-hidden group">
                    {/* Window Header Frame */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800 bg-neutral-950 rounded-t-xl mb-2">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-neutral-400">
                        <Code className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="truncate max-w-[200px]">
                          {project.title.toLowerCase().replace(/\s+/g, '-')}.sys
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase text-neutral-500">PRODUCTION</span>
                    </div>

                    {/* Preview Image */}
                    <div className="relative aspect-[16/10] w-full rounded-b-xl overflow-hidden bg-neutral-950 flex items-center justify-center border border-neutral-800">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
