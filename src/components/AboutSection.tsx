import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, GraduationCap, Code2, Layers } from 'lucide-react';
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
  const paragraphs = data?.about || [];
  const academic = data?.academic;
  const cvBtnText = downloadCvLabel || (isId ? 'UNDUH RESUME (CV)' : 'DOWNLOAD RESUME (CV)');

  // Active card index in the Diagonal Fanned Card Stack (Animation 2)
  const [activeDeckIndex, setActiveDeckIndex] = useState<number>(0);

  const deckCards = [
    {
      id: 'deck-portrait',
      indexLabel: 'FIG. 01',
      badge: isId ? 'POTRET RESMI' : 'OFFICIAL PORTRAIT',
      title: data?.name || 'MUHAMAD PRINALDI',
      subtitle: isId
        ? 'Junior Web & Software Engineer // Bandung, ID'
        : 'Junior Web & Software Engineer // Bandung, ID',
      imageUrl: photoUrl,
      footerLeft: '[ FIG. 01 ]',
      footerRight: isId ? 'DOKUMENTASI PROFIL' : 'PROFILE ARCHIVE',
    },
    {
      id: 'deck-academic',
      indexLabel: 'FIG. 02',
      badge: isId ? 'KREDENSIAL AKADEMIK' : 'ACADEMIC CREDENTIAL',
      title: academic?.university || 'UNIVERSITAS KUNINGAN',
      subtitle: `${academic?.major || 'Teknik Informatika'} // IPK ${academic?.gpaScore || '3.84'} / 4.00`,
      imageUrl: '/projects/mockup-katapang.jpg',
      footerLeft: '[ FIG. 02 ]',
      footerRight: academic?.gpaStatus || 'SANGAT MEMUASKAN',
    },
    {
      id: 'deck-systems',
      indexLabel: 'FIG. 03',
      badge: isId ? 'REKAYASA SISTEM' : 'SYSTEM ARCHITECTURE',
      title: isId ? 'Arsitektur Full-Stack & Mobile' : 'Full-Stack & Mobile Architecture',
      subtitle: 'Next.js · Node.js · Supabase · Flutter SQLite',
      imageUrl: '/projects/mockup-agp.jpg',
      footerLeft: '[ FIG. 03 ]',
      footerRight: 'HIMA TI // SOLO DEV',
    },
  ];

  const topPills = [
    { symbol: '+', label: 'NEXT.JS & NODE.JS', deckIdx: 2 },
    { symbol: '#', label: 'SUPABASE & SQLITE', deckIdx: 2 },
    { symbol: '*', label: isId ? 'AKADEMIK IPK 3.84' : 'GPA 3.84 UNIKU', deckIdx: 1 },
    { symbol: 'o', label: isId ? 'POTRET PROFIL' : 'PORTRAIT FIG.01', deckIdx: 0 },
  ];

  return (
    <section
      id="about"
      aria-label="Tentang Saya"
      className="py-16 sm:py-24 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="02"
          totalSections="08"
          title={isId ? 'TENTANG SAYA' : 'ABOUT ME'}
          className="mb-6 sm:mb-8"
        />

        {/* Top Ticker / Interactive Pill Bar (Matching 00:05 in Reference Video) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-10 border-b border-neutral-200 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {topPills.map((pill, idx) => {
              const isSelected = activeDeckIndex === pill.deckIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveDeckIndex(pill.deckIdx)}
                  className={`inline-flex items-center gap-2 px-3.5 min-h-[40px] rounded-full font-mono text-[11px] font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                      : 'bg-neutral-100 text-neutral-700 border-neutral-300 dark:bg-[#121215] dark:text-neutral-300 dark:border-white/15 hover:border-black dark:hover:border-white'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] leading-none">
                    {pill.symbol}
                  </span>
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>

          <a
            href="#skills"
            className="font-mono text-[11px] font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            {isId ? 'GULIR UNTUK DETAIL //' : 'SCROLL FOR MORE //'}
          </a>
        </div>

        {/* Main 2-Column Scene 2 Layout: 3-Line Editorial Statement (Left) + Diagonal Fanned Card Stack (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column (7 Cols): Giant 3-Line Statement + Narrative + Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Giant 3-Line Statement (Matching 00:06-00:08 "Revolutionizing / Product / Visualization") */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                  // {isId ? 'PENDEKATAN REKAYASA' : 'ENGINEERING PHILOSOPHY'}
                </span>
                <span className="w-6 h-6 rounded-full border border-neutral-300 dark:border-white/20 flex items-center justify-center text-xs font-mono">
                  <Code2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-[64px] tracking-[-0.04em] leading-[0.96] text-black dark:text-white">
                <span className="block">{isId ? 'Merekayasa' : 'Engineering'}</span>
                <span className="block text-neutral-500 dark:text-neutral-400">
                  {isId ? 'Sistem Digital' : 'Functional'}
                </span>
                <span className="block">{isId ? 'Fungsional.' : 'Web Systems.'}</span>
              </h2>
            </div>

            {/* 3 Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal mb-8">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bottom 2 Credential & Action Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-200 dark:border-white/10">
              {/* Box 1: Academic Credentials */}
              <div className="p-5 rounded-2xl border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-[#0F0F11] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-500 uppercase">
                    <GraduationCap className="w-4 h-4" />
                    <span>{academic?.graduationBadge || 'SEMESTER 5'}</span>
                  </div>
                  <div className="font-display font-bold text-base text-black dark:text-white">
                    {academic?.university || 'UNIVERSITAS KUNINGAN'}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {academic?.major || 'Teknik Informatika (Semester 5)'}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-600 dark:text-neutral-400">
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
                className="p-5 rounded-2xl border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between group hover:opacity-95 transition-opacity select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-700">
                      CURRICULUM VITAE
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg tracking-tight">
                    {cvBtnText}
                  </div>
                  <div className="text-xs text-neutral-300 dark:text-neutral-700 mt-1">
                    {isId
                      ? 'Dokumen PDF lengkap (proyek, keahlian & akademik)'
                      : 'Complete PDF format (projects, stack & academic record)'}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-700 dark:border-neutral-300 flex items-center gap-2 text-xs font-mono font-bold">
                  <Download className="w-3.5 h-3.5" />
                  <span>resume.pdf</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column (5 Cols): Diagonal Fanned Card Cascade (Matching 00:06-00:08 in Video) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            {/* Diagonal Fanned Stack Container */}
            <div className="relative w-full max-w-[380px] h-[440px] sm:h-[470px] flex items-center justify-center">
              {deckCards.map((card, index) => {
                const offset = (index - activeDeckIndex + deckCards.length) % deckCards.length;
                const isFront = offset === 0;
                const isSecond = offset === 1;

                // Diagonal cascade coordinates (bottom-left to top-right fan)
                const translateX = isFront ? 0 : isSecond ? 26 : 52;
                const translateY = isFront ? 20 : isSecond ? -12 : -44;
                const scale = isFront ? 1 : isSecond ? 0.92 : 0.84;
                const rotate = isFront ? 0 : isSecond ? 4 : 8;
                const zIndex = isFront ? 30 : isSecond ? 20 : 10;

                return (
                  <motion.div
                    key={card.id}
                    animate={{
                      x: translateX,
                      y: translateY,
                      scale,
                      rotate,
                      zIndex,
                    }}
                    transition={{ type: 'spring', stiffness: 240, damping: 25 }}
                    onClick={() => setActiveDeckIndex(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDeckIndex(index);
                      }
                    }}
                    aria-label={`${isId ? 'Tampilkan kartu' : 'Show card'} ${card.title}`}
                    className={`absolute w-[290px] sm:w-[320px] rounded-3xl overflow-hidden border cursor-pointer transition-colors ${
                      isFront
                        ? 'border-amber-500/70 bg-neutral-900 text-white shadow-2xl'
                        : 'border-neutral-300 dark:border-white/15 bg-neutral-800 text-white opacity-85 hover:opacity-100 shadow-xl'
                    }`}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className={`w-full h-full object-cover object-center transition-all duration-700 ${
                          index === 0 && isFront ? 'grayscale hover:grayscale-0' : ''
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                      {/* Top Card Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                          {card.badge}
                        </span>
                        <span className="font-mono text-xs font-bold text-white/80">
                          {card.indexLabel}
                        </span>
                      </div>

                      {/* Bottom Overlay Content */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display font-bold text-lg text-white leading-tight">
                          {card.title}
                        </h3>
                        <p className="font-mono text-[11px] text-neutral-300 mt-1">
                          {card.subtitle}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between font-mono text-[10px] text-neutral-300">
                          <span className="font-bold text-white">{card.footerLeft}</span>
                          <span>{card.footerRight}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Deck Control Bar Underneath */}
            <div className="w-full max-w-[380px] mt-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5">
                {deckCards.map((c, idx) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveDeckIndex(idx)}
                    aria-label={`Pilih ${c.indexLabel}`}
                    className={`px-3 min-h-[36px] rounded-full font-mono text-[11px] font-bold transition-colors cursor-pointer ${
                      activeDeckIndex === idx
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-neutral-100 text-neutral-700 dark:bg-[#121215] dark:text-neutral-400 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {c.indexLabel}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveDeckIndex((prev) => (prev + 1) % deckCards.length)}
                className="inline-flex items-center gap-1.5 px-3 min-h-[36px] rounded-full border border-neutral-300 dark:border-white/15 font-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isId ? 'Putar Kartu' : 'Next Card'}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
