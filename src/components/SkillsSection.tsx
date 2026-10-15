import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Layout,
  Database,
  Wrench,
  Sparkles,
} from 'lucide-react';
import type { TechStack, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface SkillsSectionProps {
  categories?: TechStack[];
  techStack?: TechStack[];
  currentLang?: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  techStack,
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';
  const data = techStack || categories || [];

  // Icon mapping per index 0..5
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-black dark:text-white" />;
      case 1:
        return <Layers className="w-4 h-4 text-black dark:text-white" />;
      case 2:
        return <Layout className="w-4 h-4 text-black dark:text-white" />;
      case 3:
        return <Database className="w-4 h-4 text-black dark:text-white" />;
      case 4:
        return <Wrench className="w-4 h-4 text-black dark:text-white" />;
      case 5:
      default:
        return <Sparkles className="w-4 h-4 text-black dark:text-white" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Keahlian Teknis"
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="03"
          totalSections="08"
          title={isId ? 'KEAHLIAN TEKNIS' : 'TECHNICAL SKILLS'}
          className="mb-10 sm:mb-14"
        />

        {/* Section Intro Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white">
              {isId ? 'KOMPETENSI & TEKNOLOGI' : 'COMPETENCIES & STACK'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
              {isId
                ? 'Arsitektur teknologi dan perkakas rekayasa web yang digunakan dalam membangun solusi digital siap pakai.'
                : 'Technology architecture and web engineering toolkits leveraged to build production-ready digital solutions.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            // 06 {isId ? 'KATEGORI SPESIALISASI' : 'SPECIALIZED CATEGORIES'}
          </span>
        </div>

        {/* 3x2 Grid of Unified Bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {data.map((cat, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={cat.category || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-black dark:hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Category Name (Left) & Index 01..06 (Right) */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-neutral-800 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800">
                        {getCategoryIcon(idx)}
                      </div>
                      <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black dark:text-white">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {formattedIndex}
                    </span>
                  </div>

                  {/* Skills List with Hover Indicator Dot */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center justify-between py-1 px-1.5 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors select-none"
                      >
                        <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>

                        <div className="flex items-center gap-2">
                          {skill.level && (
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">
                              {skill.level}
                            </span>
                          )}
                          {/* Micro-dot that expands and turns black on hover */}
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all duration-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line status */}
                <div className="mt-6 pt-3 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>{cat.skills.length} {isId ? 'KOMPETENSI' : 'SKILLS'}</span>
                  <span className="text-neutral-300 dark:text-neutral-700">● VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
