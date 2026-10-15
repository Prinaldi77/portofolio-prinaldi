import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, MessageSquare } from 'lucide-react';
import type { Language } from '../types/portfolio';

interface NavbarProps {
  currentLang?: Language;
  onToggleLang?: (lang: Language) => void;
  onOpenGuestbook?: () => void;
  resumeUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang = 'id',
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

  const isId = currentLang === 'id';

  // Desktop links: curated primary navigation without clutter
  const desktopNavLinks = [
    { label: isId ? 'TENTANG' : 'ABOUT', href: '#about' },
    { label: isId ? 'KEAHLIAN' : 'SKILLS', href: '#skills' },
    { label: isId ? 'KARYA' : 'WORKS', href: '#projects' },
    { label: isId ? 'PRESTASI' : 'AWARDS', href: '#awards' },
    { label: isId ? 'ORGANISASI' : 'ORG', href: '#organizations' },
    { label: isId ? 'KONTAK' : 'CONTACT', href: '#contact' },
  ];

  // Mobile drawer links: complete directory
  const mobileNavLinks = [
    { label: isId ? 'TENTANG' : 'ABOUT', href: '#about' },
    { label: isId ? 'KEAHLIAN' : 'SKILLS', href: '#skills' },
    { label: isId ? 'KARYA' : 'WORKS', href: '#projects' },
    { label: isId ? 'PRESTASI' : 'AWARDS', href: '#awards' },
    { label: isId ? 'SERTIFIKASI' : 'CERTIFICATIONS', href: '#certifications' },
    { label: isId ? 'ORGANISASI' : 'ORGANIZATION', href: '#organizations' },
    { label: isId ? 'BUKU TAMU' : 'GUESTBOOK', href: '#guestbook', isGuestbook: true },
    { label: isId ? 'KONTAK' : 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Left: User's Custom Designed Logo Badge & Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group select-none shrink-0"
            aria-label="Muhamad Prinaldi Portfolio Home"
          >
            {/* Custom SVG Logo Badge created by user */}
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:-translate-y-0.5 transition-all flex items-center justify-center">
              <img
                src="/assets/logo-badge-black.svg"
                alt="Prinaldi Logo"
                className="w-full h-full object-contain block dark:hidden"
              />
              <img
                src="/assets/logo-badge-white.svg"
                alt="Prinaldi Logo"
                className="w-full h-full object-contain hidden dark:block"
              />
            </div>

            {/* Typography */}
            <div className="leading-tight">
              <span className="block font-black text-sm tracking-tight text-black dark:text-white uppercase">
                PRINALDI
              </span>
              <span className="block font-mono text-[9.5px] text-neutral-400 uppercase tracking-widest mt-0.5">
                DEVELOPER
              </span>
            </div>
          </a>

          {/* Center: Spacious Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white uppercase transition-colors py-1.5 px-0.5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black dark:after:bg-white hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (Guestbook, Language Switcher, Theme Toggle, Resume) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Guestbook Drawer Button */}
            {onOpenGuestbook && (
              <button
                type="button"
                onClick={onOpenGuestbook}
                aria-label="Open Guestbook Drawer"
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 font-mono text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-all shadow-sm hover:-translate-y-0.5 select-none"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isId ? 'Buku Tamu' : 'Guestbook'}</span>
              </button>
            )}

            {/* Language Switcher ID | ENG */}
            {onToggleLang && (
              <div
                className="inline-flex items-center p-1 rounded-xl border border-gray-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono font-bold"
                role="group"
                aria-label="Language Selector"
              >
                <button
                  type="button"
                  onClick={() => onToggleLang('id')}
                  className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
                    currentLang === 'id'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-black'
                      : 'text-neutral-500 hover:text-black dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === 'id'}
                >
                  ID
                </button>
                <span className="text-neutral-300 dark:text-neutral-700 px-1 text-[10px]">|</span>
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
                    currentLang === 'en'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-black'
                      : 'text-neutral-500 hover:text-black dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === 'en'}
                >
                  ENG
                </button>
              </div>
            )}

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:border-black dark:hover:border-white transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm hover:-translate-y-0.5 select-none"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl border border-gray-200 dark:border-neutral-800 text-black dark:text-white bg-white dark:bg-neutral-900 focus:outline-none"
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
        <div className="lg:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
          <div className="px-6 py-5 space-y-2.5">
            {mobileNavLinks.map((link) => (
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
                className="block px-3.5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Unduh CV (PDF)</span>
              </a>
              {onOpenGuestbook && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenGuestbook();
                  }}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{isId ? 'Buku Tamu →' : 'Guestbook →'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
