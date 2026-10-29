import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowUp, MapPin, Calendar } from 'lucide-react';
import type { Language } from '../types/portfolio';

interface BottomBarProps {
  location?: string;
  signatureCount?: number;
  currentLang?: Language;
  onOpenGuestbook: () => void;
}

const SESSION_DATE = new Date();

export const BottomBar: React.FC<BottomBarProps> = ({
  location = 'BANDUNG, ID',
  signatureCount = 0,
  currentLang = 'en',
  onOpenGuestbook,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show persistent bottom bar after scrolling past the Hero section's own bottom bar
      setIsVisible(window.scrollY > 150);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locale = currentLang === 'id' ? 'id-ID' : 'en-US';
  const formattedDate = SESSION_DATE.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).toUpperCase();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const statusText = currentLang === 'id' ? 'Menerima tawaran kerja' : 'Open to work';
  const todayLabel = currentLang === 'id' ? 'HARI INI:' : 'TODAY:';
  const guestbookLabel = currentLang === 'id' ? 'Buku Tamu' : 'Guestbook';

  return (
    <aside
      aria-label="Persistent Bottom Bar"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-t border-neutral-200 dark:border-white/15 py-2 px-4 select-none transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 relative font-mono text-xs">
        {/* Left: Real Availability Status */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="font-bold text-black dark:text-white text-xs">
            {statusText}
          </span>
        </div>

        {/* Center: Location & Current Date */}
        <div className="hidden md:flex items-center gap-6 text-neutral-600 dark:text-neutral-400 text-[11px]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
            <span className="font-bold text-black dark:text-white">LOC:</span>
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" />
            <span className="font-bold text-black dark:text-white">{todayLabel}</span>
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Right: Guestbook Drawer Trigger & Scroll to Top */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={onOpenGuestbook}
            className="inline-flex items-center gap-2 px-3.5 min-h-[38px] rounded-full text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{guestbookLabel}</span>
            <span className="px-1.5 py-0.5 rounded-full bg-white/20 dark:bg-black/15 text-white dark:text-black text-[10px] font-mono">
              {signatureCount}
            </span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="min-w-[38px] min-h-[38px] rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#121215] text-black dark:text-white hover:border-black dark:hover:border-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BottomBar;
