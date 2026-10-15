import React from 'react';
import type { PersonalInfo } from '../../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  personalInfo: PersonalInfo;
  copyrightText: string;
  backToTopLabel: string;
}

export const Footer: React.FC<FooterProps> = ({
  personalInfo,
  copyrightText,
  backToTopLabel,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t-2 border-black dark:border-neutral-800 pt-12 pb-24 sm:pb-28 transition-colors">
      <div className="portfolio-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-black text-black dark:text-white uppercase tracking-tight">
            {personalInfo.name}
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 font-mono">
            © {currentYear} {personalInfo.name}. {copyrightText}
          </p>
        </div>

        <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl border border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white shadow-hard-sm dark:shadow-hard-sm-white transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          )}
          {personalInfo.socials.instagram && (
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-xl border border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white shadow-hard-sm dark:shadow-hard-sm-white transition-all"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          )}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={backToTopLabel}
            className="p-2 rounded-xl border border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white shadow-hard-sm dark:shadow-hard-sm-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
