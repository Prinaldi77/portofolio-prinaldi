import React from 'react';
import { motion } from 'framer-motion';
import type { TechStack, Language } from '../types/portfolio';
import SectionHeader from './SectionHeader';

interface SkillsSectionProps {
  categories?: TechStack[];
  techStack?: TechStack[];
  currentLang?: Language;
}

// Crisp, accurate Tech Icons matching the screenshot
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconClass = "w-4 h-4 shrink-0";

  switch (name) {
    case 'React':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );
    case 'TypeScript':
      return (
        <div className="w-4 h-4 rounded-[3px] bg-[#3178C6] flex items-center justify-center text-[9px] font-bold text-white select-none shrink-0 leading-none">
          TS
        </div>
      );
    case 'Tailwind CSS':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
      );
    case 'Bootstrap':
      return (
        <div className="w-4 h-4 rounded-[3px] bg-[#7952B3] flex items-center justify-center text-[10px] font-black text-white select-none shrink-0 leading-none">
          B
        </div>
      );
    case 'Kotlin':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M24 24H0V0h24L12 12Z" fill="url(#kotlin-grad)" />
          <defs>
            <linearGradient id="kotlin-grad" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E4485D" />
              <stop offset="0.5" stopColor="#C711E1" />
              <stop offset="1" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Dart':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M4.1 3.2 2 8.5l7.9 12.3 8.3-8.3L4.1 3.2Z" fill="#0175C2" />
          <path d="M18.2 12.5 14 3.2H4.1l14.1 9.3Z" fill="#02569B" />
          <path d="m9.9 20.8 12.1-4.2-3.8-4.1-8.3 8.3Z" fill="#29B6F6" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.7-6.7 3.9-6.7-3.9V8.4l6.7-3.9 6.7 3.9v7.3z" />
        </svg>
      );
    case 'Next.js':
      return (
        <div className="w-4 h-4 rounded-full bg-black dark:bg-white flex items-center justify-center text-[9px] font-black text-white dark:text-black select-none shrink-0 leading-none">
          N
        </div>
      );
    case 'PHP':
      return (
        <div className="px-1 py-0.5 rounded-[3px] bg-[#777BB4] text-[8px] font-black text-white select-none shrink-0 leading-none tracking-tighter">
          PHP
        </div>
      );
    case 'MySQL':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#00758F">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V14h-1v-2h1v-1.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V12h1v2h-1v2.5z" />
        </svg>
      );
    case 'Supabase':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#3ECF8E">
          <path d="M13.4 2 3 14.3h7.6L9.4 22 21 9.7h-7.6z" />
        </svg>
      );
    case 'ESP32':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="#E7352C" strokeWidth="2" strokeLinecap="round">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6v6H9zM2 9h3M2 15h3M19 9h3M19 15h3M9 2v3M15 2v3M9 19v3M15 19v3" />
        </svg>
      );
    case 'PlatformIO':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#FA8128">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12h6M12 9v6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'C++':
      return (
        <div className="w-4 h-4 rounded-[3px] bg-[#00599C] flex items-center justify-center text-[7.5px] font-black text-white select-none shrink-0 leading-none">
          C++
        </div>
      );
    case 'Git':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.7 10.9 13.1 2.3c-.6-.6-1.5-.6-2.1 0L8.7 4.6l2.9 2.9c.6-.2 1.4-.1 1.9.4.5.5.7 1.3.5 1.9l2.8 2.8c.6-.2 1.4-.1 1.9.4.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.7-1.4-.4-2.1L12.7 10v4.7c.3.2.6.5.7.9.6.8.4 2.1-.4 2.7-.8.6-2.1.4-2.7-.4-.6-.8-.4-2.1.4-2.7.3-.2.7-.3 1-.3V9.7c-.4 0-.8-.2-1.1-.5-.6-.6-.7-1.4-.4-2.1L7.3 4.2 2.3 9.2c-.6.6-.6 1.5 0 2.1l8.6 8.6c.6.6 1.5.6 2.1 0l8.7-8.7c.6-.5.6-1.5 0-2.1z" />
        </svg>
      );
    case 'Postman':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#FF6C37">
          <circle cx="12" cy="12" r="10" />
          <path d="m7 12 10-4-4 10-2-4z" fill="#FFFFFF" />
        </svg>
      );
    case 'Android Studio':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#3DDC84">
          <path d="M7 10h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7zm1.5-2.5L7 5.5M15.5 7.5 17 5.5M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case '9Router':
      return (
        <div className="w-4 h-4 rounded-[3px] bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black flex items-center justify-center text-[8px] font-black font-mono select-none shrink-0 leading-none">
          &lt;/&gt;
        </div>
      );
    case 'Antigravity':
      return (
        <div className="w-4 h-4 rounded-[3px] bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black flex items-center justify-center text-[9px] font-black select-none shrink-0 leading-none">
          &lt;|&gt;
        </div>
      );
    case 'VS Code':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#007ACC">
          <path d="M17.4 2.1 6.8 10.3 2.7 7.2.7 8.2v7.6l2 1 4.1-3.1 10.6 8.2 4.9-2.3V4.4l-4.9-2.3zM18 16.9l-6.8-5.2L18 6.5v10.4z" />
        </svg>
      );
    default:
      return (
        <div className="w-2 h-2 rounded-full bg-neutral-400 shrink-0" />
      );
  }
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  techStack,
  currentLang = 'id',
}) => {
  const isId = currentLang === 'id';
  const data = techStack || categories || [];

  // Group into standard 5 cards:
  // Card 01: Frontend
  // Card 02: Mobile
  // Card 03: Backend & Database
  // Card 04: IoT & Embedded
  // Card 05: Tools & Dev
  const frontendCard = data.find((c) => c.category.toLowerCase().includes('front')) || data[0];
  const mobileCard = data.find((c) => c.category.toLowerCase().includes('mobile')) || data[1];
  const backendCard = data.find((c) => c.category.toLowerCase().includes('back')) || data[2];
  const iotCard = data.find((c) => c.category.toLowerCase().includes('iot')) || data[3];
  const toolsCard = data.find((c) => c.category.toLowerCase().includes('tool')) || data[4];

  // For Tools & Dev, split skills into 2 columns (3 left, 3 right)
  const toolsLeft = toolsCard?.skills?.slice(0, 3) || [];
  const toolsRight = toolsCard?.skills?.slice(3) || [];

  return (
    <section
      id="skills"
      aria-label="Keahlian Teknis"
      className="py-16 sm:py-24 bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standard Section Header */}
        <SectionHeader
          sectionNumber="03"
          totalSections="08"
          title={isId ? 'KEAHLIAN TEKNIS' : 'TECHNICAL SKILLS'}
          className="mb-10 sm:mb-14"
        />

        {/* Section Intro Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white font-sans">
              {isId ? 'KOMPETENSI & TEKNOLOGI' : 'COMPETENCIES & STACK'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-xl">
              {isId
                ? 'Arsitektur teknologi dan perkakas rekayasa perangkat lunak, mobile, serta IoT yang dikuasai.'
                : 'Technology stack and developer toolkits across web, mobile development, and embedded IoT systems.'}
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            // 05 {isId ? 'BIDANG SPESIALISASI' : 'SPECIALIZATION DOMAINS'}
          </span>
        </div>

        {/* Layout Grid matching user screenshot:
            Row 1: 3 equal cards (Frontend, Mobile, Backend & Database)
            Row 2: 2 cards (IoT & Embedded col-span-1, Tools & Dev col-span-2 with 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Card 01: Frontend */}
          {frontendCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-black dark:hover:border-neutral-500 transition-colors shadow-none"
            >
              {/* Card Header: Title Left, Number Right */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white font-sans">
                  {frontendCard.category}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-neutral-400">
                  01
                </span>
              </div>

              {/* Skills List */}
              <div className="divide-y divide-gray-100/70 dark:divide-neutral-800/40">
                {frontendCard.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center justify-between py-3 select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 px-1 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <TechIcon name={skill.name} />
                      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/item:text-black dark:group-hover/item:white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {/* Small square indicator dot */}
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card 02: Mobile */}
          {mobileCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-black dark:hover:border-neutral-500 transition-colors shadow-none"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white font-sans">
                  {mobileCard.category}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-neutral-400">
                  02
                </span>
              </div>

              {/* Skills List */}
              <div className="divide-y divide-gray-100/70 dark:divide-neutral-800/40">
                {mobileCard.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center justify-between py-3 select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 px-1 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <TechIcon name={skill.name} />
                      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/item:text-black dark:group-hover/item:white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card 03: Backend & Database */}
          {backendCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-black dark:hover:border-neutral-500 transition-colors shadow-none"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white font-sans">
                  {backendCard.category}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-neutral-400">
                  03
                </span>
              </div>

              {/* Skills List */}
              <div className="divide-y divide-gray-100/70 dark:divide-neutral-800/40">
                {backendCard.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center justify-between py-3 select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 px-1 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <TechIcon name={skill.name} />
                      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/item:text-black dark:group-hover/item:white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card 04: IoT & Embedded (col-span-1) */}
          {iotCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-1 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-black dark:hover:border-neutral-500 transition-colors shadow-none"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white font-sans">
                  {iotCard.category}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-neutral-400">
                  04
                </span>
              </div>

              {/* Skills List */}
              <div className="divide-y divide-gray-100/70 dark:divide-neutral-800/40">
                {iotCard.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center justify-between py-3 select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 px-1 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <TechIcon name={skill.name} />
                      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/item:text-black dark:group-hover/item:white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card 05: Tools & Dev (col-span-2 with 2-column internal list) */}
          {toolsCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-black dark:hover:border-neutral-500 transition-colors shadow-none"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white font-sans">
                  {toolsCard.category}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-neutral-400">
                  05
                </span>
              </div>

              {/* 2-Column List Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {/* Left Column: Git, Postman, Android Studio */}
                <div className="divide-y divide-gray-100/70 dark:divide-neutral-800/40">
                  {toolsLeft.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between py-3 select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 px-1 rounded transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <TechIcon name={skill.name} />
                        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/item:text-black dark:group-hover/item:white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all" />
                    </div>
                  ))}
                </div>

                {/* Right Column: 9Router, Antigravity, VS Code */}
                <div className="divide-y divide-gray-100/70 dark:divide-neutral-800/40">
                  {toolsRight.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between py-3 select-none hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40 px-1 rounded transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <TechIcon name={skill.name} />
                        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/item:text-black dark:group-hover/item:white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-neutral-200 dark:bg-neutral-700 group-hover/item:bg-black dark:group-hover/item:white group-hover/item:scale-125 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
