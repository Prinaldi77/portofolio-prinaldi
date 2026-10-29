import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Disc } from 'lucide-react';
import type { Profile, Language } from '../types/portfolio';

interface HeroProps {
  personalInfo?: Profile;
  profile?: Profile;
  currentLang?: Language;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, profile, currentLang = 'id' }) => {
  const data = profile || personalInfo;
  const isId = currentLang === 'id';

  const name = data?.name || 'MUHAMAD PRINALDI';
  const role = data?.role || 'Full Stack Developer';
  const location = data?.locationCity || 'BANDUNG, ID';

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)] min-h-[540px] max-h-[920px] z-0 overflow-hidden bg-white dark:bg-[#050505] text-black dark:text-white flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto transition-colors"
    >
      {/* 1. Upper 3-Column Editorial Strip (Matching 00:01 in Reference Video) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-xs shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-0.5 text-neutral-700 dark:text-neutral-300 font-medium leading-snug"
        >
          <p className="font-bold text-black dark:text-white">
            {isId ? 'Rekayasa Sistem Web' : 'Engineering Web Systems'}
          </p>
          <p>{isId ? '& Aplikasi Mobile Android' : '& Native Mobile Apps'}</p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {isId ? 'Siap Produksi Nyata' : 'Built for Real Production'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-0.5 text-neutral-700 dark:text-neutral-300 font-medium leading-snug"
        >
          <p className="font-bold text-black dark:text-white">
            {isId ? 'Arsitektur Kode Modular' : 'Modular Code Architecture'}
          </p>
          <p>{isId ? 'Dengan Integritas Basis Data' : 'With Strict Database Integrity'}</p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Next.js · Node.js · Supabase · Flutter
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex sm:flex-col items-center sm:items-end justify-between gap-2"
        >
          <div className="sm:text-right leading-snug">
            <p className="font-bold text-black dark:text-white">
              {isId ? 'Teknik Informatika UNIKU' : 'Informatics Engineering UNIKU'}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">
              {isId ? 'Semester 5 // IPK 3.84 / 4.00' : '5th Semester // GPA 3.84 / 4.00'}
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 min-h-[38px] rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors select-none shrink-0"
          >
            <span>{isId ? 'JELAJAHI KARYA' : 'EXPLORE WORKS'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* 2. Centerpiece: Clean, Unobstructed Full-Width Giant PRINALDI Wordmark + Lower Editorial Row */}
      <div className="relative flex-1 flex flex-col justify-center my-2 w-full">
        {/* Giant Geometric Wordmark with Masked Reveal (No overlapping photos covering the name) */}
        <div className="relative w-full overflow-hidden py-2 sm:py-4 select-none">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[17.2vw] sm:text-[15.4vw] lg:text-[clamp(7.8rem,14.5vw,13.8rem)] leading-[0.82] tracking-[-0.055em] text-black dark:text-white uppercase text-left"
          >
            PRINALDI
          </motion.h1>
        </div>

        {/* Lower Editorial Row Under Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4 sm:pt-6"
        >
          {/* Left 7 Cols: Identity & Key Engineering Credentials */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] font-mono text-[11px] font-bold text-black dark:text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{name}</span>
            </span>

            <span className="px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
              {isId ? '4 SISTEM TERDOKUMENTASI' : '4 DOCUMENTED SYSTEMS'}
            </span>

            <span className="px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
              HIMA TI UNIKU
            </span>
          </div>

          {/* Right 5 Cols: Editorial Statement on Left + (Scroll) on Right */}
          <div className="lg:col-span-5 flex flex-row items-end justify-between gap-4">
            <div className="max-w-[310px] sm:max-w-[350px]">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-1">
                // {role.toUpperCase()}
              </p>
              <h2 className="font-display font-bold text-base sm:text-lg lg:text-[22px] text-black dark:text-white leading-[1.2] tracking-tight">
                {isId
                  ? 'Merancang Sistem Web, Mobile & IoT dengan Presisi Arsitektur.'
                  : 'Unveiling Production Web, Mobile & IoT Systems.'}
              </h2>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors min-h-[38px] shrink-0"
            >
              <span>({isId ? 'Gulir' : 'Scroll'})</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Strip: Domain Pills + // 01 Index (Matching 00:01-00:04 in Video) */}
      <div className="pt-3 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
        {/* Left: Solid Pill Button + Outlined Domain Links */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 pl-1.5 pr-4 min-h-[38px] rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <span className="w-6 h-6 rounded-full bg-white/15 dark:bg-black/15 flex items-center justify-center">
              <Disc className="w-3.5 h-3.5" />
            </span>
            <span>{isId ? 'ARSIP KARYA' : 'WORK ARCHIVE'}</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center px-3.5 min-h-[38px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            FULL-STACK WEB
          </a>

          <a
            href="#projects"
            className="inline-flex items-center px-3.5 min-h-[38px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            ANDROID & FLUTTER
          </a>

          <a
            href="#skills"
            className="inline-flex items-center px-3.5 min-h-[38px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            IOT & EMBEDDED
          </a>
        </div>

        {/* Right: Location + // 01 Index */}
        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 ml-auto">
          <span className="hidden sm:inline text-[11px] text-neutral-500 dark:text-neutral-400">
            [{location}]
          </span>
          <span className="font-bold text-sm text-black dark:text-white">// 01</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
