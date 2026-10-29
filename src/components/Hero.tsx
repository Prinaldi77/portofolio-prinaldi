import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Layers, ArrowDown } from 'lucide-react';
import type { Profile, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface HeroProps {
  personalInfo?: Profile;
  profile?: Profile;
  currentLang?: Language;
}

interface HeroCardItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, profile, currentLang = 'id' }) => {
  const data = profile || personalInfo;
  const isId = currentLang === 'id';

  const name = data?.name || 'MUHAMAD PRINALDI';
  const role = data?.role || 'Full Stack Developer';
  const location = data?.locationCity || 'BANDUNG, ID';

  const [activeCard, setActiveCard] = useState<number>(0);

  // Pointer coordinates for multi-plane depth parallax (Animation 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 24 });

  const plane1X = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const plane1Y = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const plane2X = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const plane2Y = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const plane3X = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const plane3Y = useTransform(springY, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const heroCards: HeroCardItem[] = [
    {
      id: 'hero-card-agp',
      tag: '01 // FULL-STACK WEB',
      title: isId ? 'Rekapitulasi & Live Score AGP' : 'AGP Live Score Platform',
      subtitle: 'Next.js · Node.js · Supabase',
      imageUrl: '/projects/mockup-agp.jpg',
      href: '#projects',
    },
    {
      id: 'hero-card-portrait',
      tag: 'FIG. 01 // ENGINEER',
      title: name,
      subtitle: isId ? 'Teknik Informatika UNIKU (IPK 3.84)' : 'Informatics Eng. UNIKU (GPA 3.84)',
      imageUrl: data?.photoUrl || '/assets/photo-pribadi.jpeg',
      href: '#about',
    },
    {
      id: 'hero-card-dompetku',
      tag: '02 // MOBILE ANDROID',
      title: isId ? 'DompetKu: Ledger Offline' : 'DompetKu: Offline Ledger',
      subtitle: 'Flutter · Drift SQLite · PIN Auth',
      imageUrl: '/projects/dompetku-portfolio-hero-mobile.png',
      href: '#projects',
    },
  ];

  const cycleActiveCard = () => {
    setActiveCard((prev) => (prev + 1) % heroCards.length);
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="lg:sticky lg:top-20 min-h-[calc(100dvh-5rem)] z-0 overflow-hidden bg-white dark:bg-[#050505] text-black dark:text-white flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors"
    >
      {/* 1. Standard Section Header */}
      <div className="pt-3 sm:pt-4">
        <SectionHeader
          sectionNumber="01"
          totalSections="08"
          title={isId ? 'BERANDA & SOROTAN' : 'HOME & SHOWCASE'}
          className="mb-4 sm:mb-6"
        />

        {/* Upper 3-Column Editorial Strip (Matching 00:01-00:04 in Reference Video) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 pt-1 pb-4 text-xs">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start sm:items-end justify-between gap-3"
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
              className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors select-none"
            >
              <span>{isId ? 'JELAJAHI KARYA' : 'EXPLORE WORKS'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 2. Centerpiece: Giant PRINALDI Wordmark + Layered Visual Cards */}
      <div className="relative flex-1 flex flex-col justify-center my-4 sm:my-2 w-full">
        {/* Background Giant Cropped / Geometric Wordmark with Masked Reveal */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6 select-none pointer-events-none">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[17.5vw] sm:text-[15.2vw] lg:text-[13.5rem] leading-[0.82] tracking-[-0.06em] text-black dark:text-white uppercase text-left"
          >
            PRINALDI
          </motion.h1>
        </div>

        {/* Layered Interactive Showcase Cards + Right Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end lg:-mt-28 xl:-mt-36 relative z-10">
          {/* Left / Center: 3 Overlapping Rounded-3xl Visual Cards */}
          <div className="lg:col-span-7 relative h-[270px] sm:h-[310px] flex items-center justify-center sm:justify-start">
            {heroCards.map((card, index) => {
              const offset = (index - activeCard + heroCards.length) % heroCards.length;
              const isFront = offset === 0;
              const isMid = offset === 1;

              const planeX = index === 0 ? plane1X : index === 1 ? plane2X : plane3X;
              const planeY = index === 0 ? plane1Y : index === 1 ? plane2Y : plane3Y;

              const posClasses = isFront
                ? 'z-30 left-2 sm:left-16 top-2 scale-100 opacity-100 border-amber-500/70 dark:border-amber-500/60 shadow-2xl'
                : isMid
                ? 'z-20 left-24 sm:left-52 top-8 scale-95 opacity-90 border-neutral-300 dark:border-white/20 shadow-xl'
                : 'z-10 left-40 sm:left-80 top-14 scale-90 opacity-75 border-neutral-200 dark:border-white/10 shadow-lg';

              return (
                <motion.div
                  key={card.id}
                  style={{ x: planeX, y: planeY }}
                  layout
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  onClick={() => setActiveCard(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCard(index);
                    }
                  }}
                  aria-label={`${isId ? 'Fokuskan kartu' : 'Focus card'}: ${card.title}`}
                  className={`absolute w-[230px] sm:w-[270px] rounded-3xl border bg-neutral-900 text-white overflow-hidden cursor-pointer transition-all duration-300 group ${posClasses}`}
                >
                  <div className="relative aspect-[5/4] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Top Card Pill */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        {card.tag}
                      </span>
                      {isFront && (
                        <a
                          href={card.href}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Buka ${card.title}`}
                          className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Bottom Card Info */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <p className="font-display font-bold text-sm sm:text-base text-white leading-tight truncate">
                        {card.title}
                      </p>
                      <p className="font-mono text-[10px] text-neutral-300 mt-0.5 truncate">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Editorial Statement & Scroll Cue (Matching 00:02-00:04 bottom-right in Video) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-end lg:items-end justify-between gap-4 pb-2">
            <div className="max-w-md lg:text-right">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-1.5">
                // {role.toUpperCase()}
              </p>
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-[26px] text-black dark:text-white leading-[1.2] tracking-tight">
                {isId
                  ? 'Merancang Sistem Web, Mobile & IoT dengan Presisi Arsitektur.'
                  : 'Architecting Web, Mobile & IoT Systems with High Data Integrity.'}
              </h2>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors min-h-[44px] px-2"
            >
              <span>({isId ? 'Gulir ke bawah' : 'Scroll'})</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Bottom Metadata & Domain Pills Bar (Matching 00:01-00:04 bottom strip in Video) */}
      <div className="pb-5 sm:pb-6 pt-3 border-t border-neutral-200 dark:border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs font-mono">
        {/* Left: Interactive Layer Switcher + Domain Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={cycleActiveCard}
            className="inline-flex items-center gap-2 px-3.5 min-h-[40px] rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isId ? 'GANTI LAYER KARTU' : 'CYCLE CARD LAYER'}</span>
          </button>

          <a
            href="#projects"
            className="inline-flex items-center px-3.5 min-h-[40px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            FULL-STACK WEB
          </a>
          <a
            href="#projects"
            className="inline-flex items-center px-3.5 min-h-[40px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            ANDROID & FLUTTER
          </a>
          <a
            href="#skills"
            className="inline-flex items-center px-3.5 min-h-[40px] rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            IOT & EMBEDDED
          </a>
        </div>

        {/* Right: Index // 01 & Location Metadata (Zero em-dash per R-02) */}
        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
          <span className="font-bold text-amber-600 dark:text-amber-500">// 01</span>
          <span className="font-bold text-black dark:text-white">[{name}]</span>
          <span className="text-neutral-400 dark:text-neutral-600">|</span>
          <span>{location}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
