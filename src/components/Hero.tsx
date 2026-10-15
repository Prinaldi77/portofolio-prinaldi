import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Layers, Code, MapPin } from 'lucide-react';
import type { Profile } from '../types/portfolio';

interface HeroProps {
  personalInfo?: Profile;
  profile?: Profile;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, profile }) => {
  const data = profile || personalInfo;

  // Fallback data
  const name = data?.name || 'MUHAMAD PRINALDI';
  const role = data?.role || 'Full Stack Developer';
  const location = data?.locationCity || 'BANDUNG, ID';
  const email = data?.email || 'muhamadprinaldi123@gmail.com';
  const university = data?.academic?.university || 'UNIVERSITAS KUNINGAN';
  const major = data?.academic?.major || 'Informatics Engineering';

  const githubUrl = data?.socials?.github || 'https://github.com/Prinaldi77';

  return (
    <section
      id="home"
      className="bg-white dark:bg-neutral-950 py-16 sm:py-20 lg:py-24 border-b-2 border-black dark:border-neutral-800 transition-colors overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 1. Heading Utama: Display Raksasa Neo-Brutalist yang Lugas */}
        <div className="mb-6 sm:mb-8 pt-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-black dark:text-white tracking-tighter leading-[0.92] select-none break-words transition-colors"
          >
            {name}
          </motion.h1>
        </div>

        {/* 2. Sub-Heading: Penjelasan Peran Nyata & Institusi */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-300 leading-relaxed transition-colors">
            {data?.tagline || `${role} & ${major} at ${university}. Focused on engineering functional web systems with Next.js, Node.js, and Supabase.`}
          </p>
        </div>

        {/* 3. Technical Overview: Clean Open Layout (No Nested Cards) */}
        <div className="max-w-3xl mx-auto mb-10 text-left">
          <div className="rounded-2xl border-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 sm:p-7 shadow-hard dark:shadow-hard-white transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-200 dark:border-neutral-800 gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-black dark:text-white">
                  Available for new opportunities
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-black dark:text-white" />
                <span>{location}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 dark:divide-neutral-800">
              <div className="sm:pr-4">
                <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 mb-1">
                  <Code className="w-3.5 h-3.5 text-black dark:text-white" />
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Core Languages</span>
                </div>
                <div className="font-bold text-sm text-black dark:text-white">
                  TypeScript, JavaScript, SQL
                </div>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-4">
                <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 mb-1">
                  <Layers className="w-3.5 h-3.5 text-black dark:text-white" />
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Primary Frameworks</span>
                </div>
                <div className="font-bold text-sm text-black dark:text-white">
                  Next.js & Node.js
                </div>
              </div>

              <div className="pt-4 sm:pt-0 sm:pl-4">
                <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 mb-1">
                  <span className="w-2 h-2 rounded bg-black dark:bg-white inline-block" />
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Current Focus</span>
                </div>
                <div className="font-bold text-sm text-black dark:text-white">
                  Web Systems & Recapitulation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Direct Action CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-hard dark:shadow-hard-white active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white dark:bg-neutral-900 text-black dark:text-white border-2 border-black dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-hard dark:shadow-hard-white active:translate-x-0.5 active:translate-y-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Profile</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white border-2 border-black dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all shadow-hard dark:shadow-hard-white active:translate-x-0.5 active:translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
