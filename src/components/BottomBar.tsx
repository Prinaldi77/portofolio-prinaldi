import React, { useEffect, useState } from 'react';
import { BookOpen, ArrowUp, MapPin, Calendar } from 'lucide-react';
import type { Language } from '../types/portfolio';

interface BottomBarProps {
  location?: string;
  signatureCount?: number;
  currentLang?: Language;
  onOpenGuestbook: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  location = 'BANDUNG, ID',
  signatureCount = 0,
  currentLang = 'en',
  onOpenGuestbook,
}) => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  // Update tanggal otomatis menggunakan JavaScript Date
  useEffect(() => {
    const today = new Date();
    const locale = currentLang === 'id' ? 'id-ID' : 'en-US';
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const formatted = today.toLocaleDateString(locale, options).toUpperCase();
    setFormattedDate(formatted);
  }, [currentLang]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const statusText = currentLang === 'id' ? 'MENERIMA TAWARAN KERJA' : 'OPEN TO WORK';
  const todayLabel = currentLang === 'id' ? 'HARI INI:' : 'TODAY:';
  const guestbookLabel = currentLang === 'id' ? 'Buku Tamu' : 'Guestbook';

  return (
    <aside
      aria-label="Persistent Bottom Bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t-2 border-black dark:border-neutral-800 py-2.5 px-4 select-none transition-colors"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 relative font-mono text-xs">
        {/* Maskot Siluet Mengintip di Sisi Kiri */}
        <div className="hidden sm:flex items-end gap-1 absolute -top-8 left-2 pointer-events-none">
          <div className="w-6 h-6 rounded-t-xl bg-black dark:bg-white flex items-center justify-center gap-1 shadow-md transition-colors">
            <span className="w-1 h-1 rounded-full bg-white dark:bg-black animate-ping"></span>
            <span className="w-1 h-1 rounded-full bg-white dark:bg-black"></span>
          </div>
          <div className="w-7 h-8 rounded-t-xl bg-black dark:bg-white flex items-center justify-center gap-1 shadow-md -mb-1 transition-colors">
            <span className="w-1 h-1 rounded-full bg-white dark:bg-black"></span>
            <span className="w-1 h-1 rounded-full bg-white dark:bg-black"></span>
          </div>
        </div>

        {/* Elemen Kiri: Status "OPEN TO WORK" dengan dot hijau berkedip */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-black text-black dark:text-white tracking-wider uppercase text-[11px] sm:text-xs transition-colors">
            {statusText}
          </span>
        </div>

        {/* Elemen Tengah: Lokasi saat ini dan tanggal hari ini */}
        <div className="hidden md:flex items-center gap-6 text-neutral-600 dark:text-neutral-400 text-[11px] transition-colors">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-black dark:text-white" />
            <span className="font-bold text-black dark:text-white">LOC:</span>
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-black dark:text-white" />
            <span className="font-bold text-black dark:text-white">{todayLabel}</span>
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Elemen Kanan: Trigger Guestbook dan Tombol Scroll To Top */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* Tombol Trigger Guestbook */}
          <button
            type="button"
            onClick={onOpenGuestbook}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black bg-white dark:bg-neutral-900 text-black dark:text-white border-2 border-black dark:border-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-hard-sm dark:shadow-hard-sm-white hover:-translate-y-0.5 active:translate-y-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{guestbookLabel}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white text-[10px] font-mono border border-neutral-300 dark:border-neutral-700">
              {signatureCount}
            </span>
          </button>

          {/* Tombol Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 sm:p-2 rounded-xl border border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-hard-sm dark:shadow-hard-sm-white hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default BottomBar;
