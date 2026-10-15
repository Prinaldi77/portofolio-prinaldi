import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, GraduationCap } from 'lucide-react';
import type { Profile, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface AboutSectionProps {
  personalInfo?: Profile;
  profile?: Profile;
  currentLang?: Language;
  downloadCvLabel?: string;
  hireMeLabel?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  personalInfo,
  profile,
  currentLang = 'id',
  downloadCvLabel,
}) => {
  const data = profile || personalInfo;
  const isId = currentLang === 'id';

  const photoUrl = data?.photoUrl || '/assets/photo-pribadi.jpeg';
  const resumeUrl = data?.resumeUrl || '/resume.pdf';
  const headline = data?.aboutHeadline || (isId
    ? 'Junior Web & Software Engineer yang berfokus pada rekayasa sistem web fungsional, arsitektur modular, dan integritas data.'
    : 'Junior Web & Software Engineer focused on functional web systems, modular architecture, and data integrity.');

  const paragraphs = data?.about || [];
  const academic = data?.academic;

  const cvBtnText = downloadCvLabel || (isId ? 'UNDUH RESUME (CV)' : 'DOWNLOAD RESUME (CV)');

  return (
    <section
      id="about"
      aria-label="Tentang Saya"
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="02"
          totalSections="08"
          title={isId ? 'TENTANG SAYA' : 'ABOUT ME'}
          className="mb-10 sm:mb-14"
        />

        {/* 2-Column Grid (40% Left : 60% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (40%): Portrait Photo with Monospace Caption */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Photo Card Container with Frame */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group">
              <img
                src={photoUrl}
                alt="Muhamad Prinaldi - Potret Pribadi"
                className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Monospace Caption Underneath: [ FIG. 01 ] | POTRET */}
            <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400 px-1 select-none">
              <span className="font-semibold text-black dark:text-white">
                [ FIG. 01 ]
              </span>
              <span className="uppercase">
                {isId ? 'POTRET RESMI / DOKUMENTASI' : 'PORTRAIT / DOCUMENTATION'}
              </span>
            </div>
          </motion.div>

          {/* Right Column (60%): Headline, 3 Paragraphs, Academic Box & Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Bold Statement Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black dark:text-white leading-[1.2] mb-6 sm:mb-8 font-sans">
              {headline}
            </h2>

            {/* 3 Narrative Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal mb-8 sm:mb-10">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {para}
                </p>
              ))}
            </div>

            {/* Bottom 2 Boxes: Academic Info & Download CV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-neutral-900">
              {/* Box 1: Academic Credentials */}
              <div className="p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase">
                    <GraduationCap className="w-4 h-4 text-black dark:text-white" />
                    <span>{academic?.graduationBadge || 'UNIVERSITAS KUNINGAN'}</span>
                  </div>
                  <div className="font-bold text-sm text-black dark:text-white">
                    {academic?.university || 'UNIVERSITAS KUNINGAN'}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {academic?.major || 'Teknik Informatika (Semester 5)'}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {academic?.gpaLabel || 'IPK'}: {academic?.gpaScore || '3.84'} / 4.00
                  </span>
                  <span className="font-bold text-black dark:text-white">
                    {academic?.gpaStatus || 'SANGAT MEMUASKAN'}
                  </span>
                </div>
              </div>

              {/* Box 2: Download CV Action Box */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between group hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-600">
                      CURRICULUM VITAE
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="font-bold text-base sm:text-lg tracking-tight">
                    {cvBtnText}
                  </div>
                  <div className="text-xs text-neutral-300 dark:text-neutral-600 mt-1">
                    {isId
                      ? 'Format PDF lengkap (profil, proyek, dan kontak)'
                      : 'Comprehensive PDF format (projects, stack & background)'}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-700 dark:border-neutral-300 flex items-center gap-1.5 text-xs font-mono font-semibold">
                  <Download className="w-3.5 h-3.5" />
                  <span>resume.pdf</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
