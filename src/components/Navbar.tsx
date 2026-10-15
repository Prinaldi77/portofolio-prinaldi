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

  const navLinks = [
    { label: isId ? 'TENTANG' : 'ABOUT', href: '#about' },
    { label: isId ? 'KEAHLIAN' : 'SKILLS', href: '#skills' },
    { label: isId ? 'KARYA' : 'WORKS', href: '#projects' },
    { label: isId ? 'PERJALANAN' : 'JOURNEY', href: '#journey' },
    { label: isId ? 'BUKU TAMU' : 'GUESTBOOK', href: '#guestbook', isGuestbook: true },
    { label: isId ? 'KONTAK' : 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Brand PORTOFOLIO */}
          <a
            href="#home"
            className="flex items-center gap-3 group select-none"
            aria-label="Muhamad Prinaldi Portfolio Home"
          >
            <div className="w-8 h-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
              MP
            </div>
            <div className="leading-tight">
              <span className="font-bold text-sm sm:text-base tracking-widest text-black dark:text-white uppercase">
                PORTOFOLIO
              </span>
              <span className="block font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                PRINALDI / 2026
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
                className="font-mono text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white uppercase transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (Guestbook, Language Toggle, Theme, Resume) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Guestbook Button trigger */}
            {onOpenGuestbook && (
              <button
                type="button"
                onClick={onOpenGuestbook}
                aria-label="Open Guestbook Drawer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 font-mono text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isId ? 'Buku Tamu' : 'Guestbook'}</span>
              </button>
            )}

            {/* Language Switcher ID | ENG */}
            {onToggleLang && (
              <div
                className="inline-flex items-center p-0.5 rounded-md border border-gray-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[11px] font-mono font-bold"
                role="group"
                aria-label="Language Selector"
              >
                <button
                  type="button"
                  onClick={() => onToggleLang('id')}
                  className={`px-2 py-1 rounded transition-colors ${
                    currentLang === 'id'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'text-neutral-500 hover:text-black dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === 'id'}
                >
                  ID
                </button>
                <span className="text-neutral-300 dark:text-neutral-700 px-0.5">|</span>
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2 py-1 rounded transition-colors ${
                    currentLang === 'en'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
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
              className="w-8 h-8 rounded-md border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:border-black dark:hover:border-white transition-colors"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold uppercase text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md border border-gray-200 dark:border-neutral-800 text-black dark:text-white bg-white dark:bg-neutral-900 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
          <div className="px-5 py-4 space-y-2">
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
                className="block px-3 py-2 rounded-md font-mono text-xs font-bold uppercase text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase"
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
                  className="font-mono text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  {isId ? 'Buku Tamu →' : 'Guestbook →'}
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
