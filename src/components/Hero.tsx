import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Disc } from 'lucide-react';
import type { Profile, Language } from '../types/portfolio';

interface HeroProps {
  personalInfo?: Profile;
  profile?: Profile;
  currentLang?: Language;
}

interface HeroCardItem {
  id: string;
  tag: string;
  shortCode: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imagePosition: string;
  href: string;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, profile, currentLang = 'id' }) => {
  const data = profile || personalInfo;
  const isId = currentLang === 'id';

  const name = data?.name || 'MUHAMAD PRINALDI';
  const role = data?.role || 'Full Stack Developer';

  const [activeCard, setActiveCard] = useState<number>(0);

  // Pointer coordinates for multi-plane depth parallax (Animation 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 24 });

  const plane0X = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const plane0Y = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const plane1X = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const plane1Y = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const plane2X = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const plane2Y = useTransform(springY, [-0.5, 0.5], [7, -7]);

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

  // 3 distinct visual cards with tailored focal crop positions so every square thumbnail looks rich
  const heroCards: HeroCardItem[] = [
    {
      id: 'hero-card-portrait',
      tag: 'FIG. 01 // ENGINEER',
      shortCode: 'FIG.01',
      title: name,
      subtitle: isId ? 'Teknik Informatika UNIKU (IPK 3.84)' : 'Informatics Eng. UNIKU (GPA 3.84)',
      imageUrl: data?.photoUrl || '/assets/photo-pribadi.jpeg',
      imagePosition: 'object-[48%_68%] scale-[1.35]',
      href: '#about',
    },
    {
      id: 'hero-card-karta',
      tag: '01 // GESTURE WEB APP',
      shortCode: 'WEB.01',
      title: isId ? 'Photobooth Karta 02' : 'Karta 02 Gesture Photobooth',
      subtitle: 'React · TypeScript · MediaPipe Vision',
      imageUrl: '/projects/photoboothkarta.png',
      imagePosition: 'object-[72%_center] scale-[1.15]',
      href: '#projects',
    },
    {
      id: 'hero-card-dompetku',
      tag: '02 // MOBILE ANDROID',
      shortCode: 'APP.02',
      title: isId ? 'DompetKu: Ledger Offline' : 'DompetKu: Offline Ledger',
      subtitle: 'Flutter · Drift SQLite · PIN Auth',
      imageUrl: '/projects/dompetku-portfolio-hero-mobile.png',
      imagePosition: 'object-[28%_center] scale-[1.12]',
      href: '#projects',
    },
  ];

  const cycleActiveCard = () => {
    setActiveCard((prev) => (prev + 1) % heroCards.length);
  };

  // 3 spatially separated slot geometries matching 00:01-00:04 in the Reference Video:
  // Slot 0: Large Square at Upper-Left (overlapping P R I)
  // Slot 1: Medium Square at Lower-Center (overlapping N A)
  // Slot 2: Small Square at Center-Right (overlapping A L)
  const slotStyles = [
    {
      // Slot 0 (Primary Front Square - Upper Left over P R I)
      className:
        'z-30 left-[3%] sm:left-[8%] -top-6 sm:-top-10 w-[148px] h-[148px] sm:w-[172px] sm:h-[172px] rounded-[26px] border-2 border-amber-500/80 shadow-[0_24px_50px_rgba(0,0,0,0.85)]',
      planeX: plane0X,
      planeY: plane0Y,
    },
    {
      // Slot 1 (Secondary Medium Square - Lower Center over N A)
      className:
        'z-20 left-[38%] sm:left-[37%] top-[48px] sm:top-[52px] w-[112px] h-[112px] sm:w-[130px] sm:h-[130px] rounded-[22px] border border-neutral-300 dark:border-white/25 shadow-[0_20px_40px_rgba(0,0,0,0.8)]',
      planeX: plane1X,
      planeY: plane1Y,
    },
    {
      // Slot 2 (Tertiary Small Square - Center Right over A L)
      className:
        'z-10 left-[58%] sm:left-[54%] top-[14px] sm:top-[16px] w-[100px] h-[100px] sm:w-[116px] sm:h-[116px] rounded-[22px] border border-neutral-300 dark:border-white/15 shadow-[0_16px_32px_rgba(0,0,0,0.75)] opacity-90',
      planeX: plane2X,
      planeY: plane2Y,
    },
  ];

  const currentFrontCard = heroCards[activeCard];

  return (
    <section
      id="home"
      aria-label="Hero Section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)] min-h-[540px] max-h-[920px] z-0 overflow-hidden bg-white dark:bg-[#050505] text-black dark:text-white flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 max-w-7xl mx-auto transition-colors"
    >
      {/* 1. Upper 3-Column Editorial Strip (Directly under Navbar, matching 00:01 in Reference Video) */}
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
            className="inline-flex items-center gap-2 px-4 min-h-[36px] rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors select-none shrink-0"
          >
            <span>{isId ? 'JELAJAHI KARYA' : 'EXPLORE WORKS'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* 2. Centerpiece: Full-Width Giant PRINALDI Wordmark + 3 Spatially Separated Visual Squares + Right Statement */}
      <div className="relative flex-1 flex flex-col justify-center my-1 w-full">
        {/* Background Giant Geometric Wordmark with Masked Reveal */}
        <div className="relative w-full overflow-hidden py-1 select-none pointer-events-none">
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[17vw] sm:text-[15.2vw] lg:text-[clamp(7.5rem,14.2vw,13.4rem)] leading-[0.8] tracking-[-0.055em] text-black dark:text-white uppercase text-left"
          >
            PRINALDI
          </motion.h1>
        </div>

        {/* Overlay Row: 3 Spatially Separated Rounded-Square Cards (Left) + Editorial Headline & (Scroll) (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end lg:-mt-24 xl:-mt-28 relative z-10">
          {/* Left 7 Cols: 3 Spatially Separated Square Cards (Zero overlapping text collision) */}
          <div className="lg:col-span-7 relative h-[175px] sm:h-[190px] w-full">
            {heroCards.map((card, index) => {
              const slotIndex = (index - activeCard + heroCards.length) % heroCards.length;
              const isFront = slotIndex === 0;
              const slot = slotStyles[slotIndex];

              return (
                <motion.div
                  key={card.id}
                  style={{ x: slot.planeX, y: slot.planeY }}
                  layout
                  transition={{ type: 'spring', stiffness: 250, damping: 26 }}
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
                  className={`absolute overflow-hidden bg-neutral-900 cursor-pointer group ${slot.className}`}
                >
                  <div className="relative w-full h-full overflow-hidden bg-neutral-950">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.38] ${card.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

                    {/* Clean minimal badge on Front Card only so back cards stay pure visual squares */}
                    {isFront ? (
                      <>
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                            {card.shortCode}
                          </span>
                          <a
                            href={card.href}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Buka ${card.title}`}
                            className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                        <div className="absolute bottom-2.5 left-3 right-3">
                          <p className="font-display font-bold text-xs text-white leading-tight truncate">
                            {card.title}
                          </p>
                          <p className="font-mono text-[9px] text-neutral-300 truncate">
                            {card.subtitle}
                          </p>
                        </div>
                      </>
                    ) : (
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/15 font-mono text-[9px] font-bold text-white/85">
                        {card.shortCode}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right 5 Cols: Editorial Statement on Left + (Scroll) on Right (Matching 00:02-00:04 in Reference Video) */}
          <div className="lg:col-span-5 flex flex-row items-end justify-between gap-4 pb-1">
            <div className="max-w-[290px] sm:max-w-[330px]">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500 mb-1">
                // {role.toUpperCase()}
              </p>
              <h2 className="font-display font-bold text-base sm:text-lg lg:text-[21px] text-black dark:text-white leading-[1.2] tracking-tight">
                {isId
                  ? 'Merancang Sistem Web, Mobile & IoT dengan Presisi Arsitektur.'
                  : 'Unveiling Production Web, Mobile & IoT Systems.'}
              </h2>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors min-h-[36px] shrink-0"
            >
              <span>({isId ? 'Gulir' : 'Scroll'})</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Bottom Strip: [o] PROMPTS-style Switcher + Outlined Domain Pills + // 01 Index (Matching 00:01-00:04 in Video) */}
      <div className="pt-2.5 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
        {/* Left: Solid White Pill Button + Outlined Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={cycleActiveCard}
            className="inline-flex items-center gap-2 pl-1.5 pr-3.5 min-h-[36px] rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-white/15 dark:bg-black/15 flex items-center justify-center">
              <Disc className="w-3.5 h-3.5" />
            </span>
            <span>{isId ? 'SOROTAN' : 'SHOWCASE'}</span>
          </button>

          {heroCards.map((card, idx) => {
            const isSelected = activeCard === idx;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setActiveCard(idx)}
                className={`inline-flex items-center px-3.5 min-h-[36px] rounded-full border text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-black dark:border-white bg-neutral-200 dark:bg-white/15 text-black dark:text-white'
                    : 'border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white'
                }`}
              >
                {idx === 0
                  ? isId
                    ? 'PROFIL INSINYUR'
                    : 'ENGINEER PROFILE'
                  : idx === 1
                  ? 'FULL-STACK WEB'
                  : 'ANDROID & FLUTTER'}
              </button>
            );
          })}
        </div>

        {/* Right: Active Card Label + // 01 Index */}
        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 ml-auto">
          <span className="hidden sm:inline text-[11px] text-neutral-500 dark:text-neutral-400">
            [{currentFrontCard.title.toUpperCase()}]
          </span>
          <span className="font-bold text-sm text-black dark:text-white">// 01</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
