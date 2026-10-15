import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import type { Language } from '../types/portfolio';

interface NavbarProps {
  currentLang?: Language;
  onToggleLang?: (lang: Language) => void;
  onOpenGuestbook?: () => void;
  resumeUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang = 'en',
  onToggleLang,
  onOpenGuestbook,
  resumeUrl = '/resume.pdf',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark class on document root & localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const navLinks = [
    { label: currentLang === 'id' ? 'Tentang' : 'About', href: '#about' },
    { label: currentLang === 'id' ? 'Proyek' : 'Projects', href: '#projects' },
    { label: currentLang === 'id' ? 'Perjalanan' : 'Journey', href: '#journey' },
    { label: currentLang === 'id' ? 'Buku Tamu' : 'Guestbook', href: '#guestbook', isGuestbook: true },
    { label: currentLang === 'id' ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b-2 border-black dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Inisial / Brand di Kiri */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Muhamad Prinaldi Home"
          >
            <div className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white flex items-center justify-center font-black text-sm tracking-tighter shadow-hard-sm dark:shadow-hard-sm-white group-hover:-translate-y-0.5 transition-all">
              <span>MP</span>
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="block font-black text-sm text-black dark:text-white tracking-tight group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                PRINALDI
              </span>
              <span className="block font-mono text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                DEVELOPER
              </span>
            </div>
          </a>

          {/* Navigasi Tengah: About, Projects, Journey, Guestbook, Contact */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.isGuestbook && onOpenGuestbook) {
                    e.preventDefault();
                    onOpenGuestbook();
                  }
                }}
                className="text-xs sm:text-sm font-bold tracking-wider text-black dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-white uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black dark:after:bg-white hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tombol Kanan: Language Switch, Theme Toggle Icon, Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            {onToggleLang && (
              <div
                className="inline-flex items-center p-0.5 rounded-full border border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-bold shadow-hard-sm dark:shadow-hard-sm-white transition-colors"
                role="group"
                aria-label="Language Selector"
              >
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2.5 py-1 rounded-full transition-all text-[11px] font-black ${
                    currentLang === 'en'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === 'en'}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('id')}
                  className={`px-2.5 py-1 rounded-full transition-all text-[11px] font-black ${
                    currentLang === 'id'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === 'id'}
                >
                  ID
                </button>
              </div>
            )}

            {/* Dark / Light Mode Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-xl border-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 text-black dark:text-white flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-hard-sm dark:shadow-hard-sm-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase text-white dark:text-black bg-black dark:bg-white border-2 border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-hard-sm dark:shadow-hard-sm-white transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl border-2 border-black dark:border-neutral-700 text-black dark:text-white bg-white dark:bg-neutral-900 shadow-hard-sm dark:shadow-hard-sm-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
          <div className="px-5 py-4 space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.isGuestbook && onOpenGuestbook) {
                    e.preventDefault();
                    onOpenGuestbook();
                  }
                }}
                className="block px-3 py-2 rounded-lg text-sm font-black uppercase text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
