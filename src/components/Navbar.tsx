import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [activeSection, setActiveSection] = useState<string>('#home');

  // Default to Obsidian Dark mode to match the reference showcase aesthetic
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    }
    return true;
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

  // Track active section while scrolling for the sliding pill indicator
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'awards', 'certifications', 'organizations', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 260) {
        setActiveSection('#home');
        return;
      }
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(id === 'certifications' ? '#awards' : `#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const isId = currentLang === 'id';

  const desktopNavLinks = [
    { label: isId ? 'BERANDA' : 'HOME', href: '#home' },
    { label: isId ? 'TENTANG' : 'ABOUT', href: '#about' },
    { label: isId ? 'KEAHLIAN' : 'SKILLS', href: '#skills' },
    { label: isId ? 'KARYA' : 'ARCHIVE', href: '#projects' },
    { label: isId ? 'PRESTASI' : 'AWARDS', href: '#awards' },
    { label: isId ? 'ORGANISASI' : 'ORG', href: '#organizations' },
    { label: isId ? 'KONTAK' : 'CONTACT', href: '#contact' },
  ];

  const mobileNavLinks = [
    { label: isId ? 'BERANDA' : 'HOME', href: '#home' },
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
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-b border-neutral-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Left: Circular Logo Badge & Identity */}
          <a
            href="#home"
            onClick={() => setActiveSection('#home')}
            className="flex items-center gap-3 group select-none shrink-0 min-h-[44px]"
            aria-label="Muhamad Prinaldi Portfolio Home"
          >
            <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] overflow-hidden flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
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

            <div className="leading-tight">
              <span className="block font-display font-black text-sm tracking-tight text-black dark:text-white uppercase">
                PRINALDI
              </span>
              <span className="block font-mono text-[10px] text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                SOFTWARE ENG.
              </span>
            </div>
          </a>

          {/* Center: Floating Pill Switcher with Fluid Sliding Indicator */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center p-1 rounded-full border border-neutral-200 dark:border-white/15 bg-neutral-100/90 dark:bg-[#121215]/90"
          >
            {desktopNavLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase transition-colors select-none ${
                    isActive
                      ? 'text-white dark:text-black'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-black dark:bg-white -z-0"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Actions & Uppercase Label */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {onOpenGuestbook && (
              <button
                type="button"
                onClick={onOpenGuestbook}
                aria-label="Open Guestbook Drawer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 min-h-[40px] rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#121215] font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white transition-colors select-none"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isId ? 'Buku Tamu' : 'Guestbook'}</span>
              </button>
            )}

            {/* Language Switcher ID | ENG */}
            {onToggleLang && (
              <div
                className="inline-flex items-center p-1 rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-[#121215] text-xs font-mono font-bold"
                role="group"
                aria-label="Language Selector"
              >
                <button
                  type="button"
                  onClick={() => onToggleLang('id')}
                  className={`px-2.5 py-1 rounded-full transition-colors text-[11px] min-h-[32px] ${
                    currentLang === 'id'
                      ? 'bg-black text-white dark:bg-white dark:text-black font-black'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                  aria-pressed={currentLang === 'id'}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-2.5 py-1 rounded-full transition-colors text-[11px] min-h-[32px] ${
                    currentLang === 'en'
                      ? 'bg-black text-white dark:bg-white dark:text-black font-black'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
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
              className="min-w-[44px] min-h-[44px] rounded-full border border-neutral-300 dark:border-white/15 bg-white dark:bg-[#121215] text-neutral-800 dark:text-neutral-200 flex items-center justify-center hover:border-black dark:hover:border-white transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Pill Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 min-h-[40px] rounded-full text-xs font-mono font-bold uppercase text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors select-none"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Menu Button with visible label (R-03) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3.5 min-h-[44px] rounded-full border border-neutral-300 dark:border-white/15 text-black dark:text-white bg-white dark:bg-[#121215] font-mono text-xs font-bold uppercase"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span>{isOpen ? (isId ? 'TUTUP' : 'CLOSE') : 'MENU'}</span>
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-[#050505] transition-colors">
          <div className="px-5 py-5 space-y-2">
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.isGuestbook && onOpenGuestbook) {
                    e.preventDefault();
                    onOpenGuestbook();
                  } else {
                    setActiveSection(link.href);
                  }
                }}
                className="flex items-center justify-between px-4 min-h-[44px] rounded-xl font-mono text-xs font-bold uppercase text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-[#121215] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-neutral-500 dark:text-neutral-400 text-[10px]">//</span>
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-full bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isId ? 'Unduh CV (PDF)' : 'Download CV (PDF)'}</span>
              </a>
              {onOpenGuestbook && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenGuestbook();
                  }}
                  className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-full border border-neutral-300 dark:border-white/15 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{isId ? 'Buku Tamu' : 'Guestbook'}</span>
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
