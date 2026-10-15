import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import type { Profile, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';
import HeroCharacter from './HeroCharacter';

interface HeroProps {
  personalInfo?: Profile;
  profile?: Profile;
  currentLang?: Language;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, profile, currentLang = 'id' }) => {
  const data = profile || personalInfo;
  const isId = currentLang === 'id';

  const name = data?.name || 'MUHAMAD PRINALDI';
  const role = data?.role || 'Junior Web & Software Engineer';
  const location = data?.locationCity || 'BANDUNG, ID';

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] z-0 overflow-hidden bg-white dark:bg-neutral-950 text-black dark:text-white flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors"
    >
      {/* 1. Standard Section Header */}
      <div className="pt-2 sm:pt-4">
        <SectionHeader
          sectionNumber="01"
          totalSections="08"
          title={isId ? 'BERANDA' : 'HOME'}
          className="mb-2 sm:mb-4"
        />
      </div>

      {/* 2. Giant Typographic Display (Split PO RT / FO LIO) with Central Line Art Character */}
      <div className="relative flex-1 flex flex-col justify-center items-center my-auto w-full select-none">
        {/* Top Letters: PO (left) and RT (right) */}
        <div className="w-full flex items-center justify-between px-2 sm:px-8 leading-none">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[15vw] sm:text-[14vw] tracking-tighter text-black dark:text-white leading-none font-display"
          >
            PO
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[15vw] sm:text-[14vw] tracking-tighter text-black dark:text-white leading-none font-display"
          >
            RT
          </motion.span>
        </div>

        {/* Central Character Illustration (Absolute centered overlay) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCharacter currentLang={currentLang} />
          </motion.div>
        </div>

        {/* Bottom Letters: FO (left) and LIO (right) */}
        <div className="w-full flex items-center justify-between px-2 sm:px-8 leading-none">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[15vw] sm:text-[14vw] tracking-tighter text-black dark:text-white leading-none font-display"
          >
            FO
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[15vw] sm:text-[14vw] tracking-tighter text-black dark:text-white leading-none font-display"
          >
            LIO
          </motion.span>
        </div>
      </div>

      {/* 3. Bottom Metadata & Scroll Indicator */}
      <div className="pb-4 sm:pb-6 pt-2 border-t border-gray-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        {/* Left: Persona label */}
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
          <span className="font-bold text-black dark:text-white">[{name}]</span>
          <span>—</span>
          <span className="uppercase">{role}</span>
          <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">|</span>
          <span className="hidden md:inline">{location}</span>
        </div>

        {/* Right: Scroll to explore */}
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
          <span className="tracking-wider uppercase">
            {isId ? 'GULIR UNTUK EKSPLORASI' : 'SCROLL TO EXPLORE'}
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-black dark:text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
