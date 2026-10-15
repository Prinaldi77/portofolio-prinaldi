import React from 'react';
import {
  Download,
  GraduationCap,
  Terminal,
  Database,
  Cpu,
  Layers,
  ArrowUpRight,
  Code2,
  User,
  Layout,
} from 'lucide-react';
import type { Profile, TechStack, Language } from '../types/portfolio';

interface AboutSectionProps {
  personalInfo?: Profile;
  profile?: Profile;
  categories?: TechStack[];
  techStack?: TechStack[];
  header?: {
    badge?: string;
    title: string;
    subtitle?: string;
  };
  downloadCvLabel?: string;
  hireMeLabel?: string;
  currentLang?: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  personalInfo,
  profile,
  categories,
  techStack,
  header,
  downloadCvLabel,
  hireMeLabel,
  currentLang = 'en',
}) => {
  const data = profile || personalInfo;
  const stacks = techStack || categories;

  const isId = currentLang === 'id';

  // Fallback copy
  const name = data?.name || 'MUHAMAD PRINALDI';
  const greeting = data?.greeting || (isId ? 'HAI, SAYA MUHAMAD PRINALDI.' : "HI, I'M MUHAMAD PRINALDI.");
  const handle = data?.handle || '@prnldiiii';
  const onlineStatus = data?.onlineStatus || (isId ? 'TERSEDIA UNTUK BEKERJA' : 'AVAILABLE FOR WORK');
  const resumeUrl = data?.resumeUrl || '/resume.pdf';
  const photoUrl = data?.photoUrl || '/assets/avatar.svg';
  const academic = data?.academic;

  const cvButtonText = downloadCvLabel || (isId ? 'Unduh Resume' : 'Download Resume');
  const hireButtonText = hireMeLabel || (isId ? 'Hubungi Saya' : 'Get In Touch');

  const sectionTitle = header?.title || (isId ? 'TENTANG SAYA' : 'ABOUT ME');
  const sectionBadge = header?.badge || (isId ? '01 // PROFIL' : '01 // PROFILE');

  // Bio text
  const bioParagraphs = data?.about || (isId
    ? [
        'Saya adalah seorang Junior Web Developer dan mahasiswa Teknik Informatika di Universitas Kuningan.',
        'Fokus pada rekayasa perangkat lunak full-stack, perancangan basis data relasional, dan pembuatan antarmuka web modern dengan arsitektur bersih serta performa terukur.',
      ]
    : [
        'A Junior Web Developer and Informatics Engineering student at Universitas Kuningan with a focus on building clean, reliable, and maintainable web applications.',
        'Experienced in full-stack workflows from requirement analysis to production deployment using modern frameworks like Next.js, Node.js, TypeScript, and Tailwind CSS.',
      ]);

  // Tech stack default grouping if not supplied
  const defaultLanguages = ['TypeScript', 'JavaScript', 'PHP', 'HTML5', 'CSS3', 'SQL'];
  const defaultFrameworks = ['Next.js', 'Node.js', 'React', 'Tailwind CSS', 'Express.js', 'REST APIs'];
  const defaultTools = ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'VS Code', 'Postman', 'Figma'];

  // Categorized items from props if available
  const languagesList =
    stacks?.find((s) => s.category.toLowerCase().includes('lang') || s.category.toLowerCase().includes('bahasa'))?.skills.map((s) => s.name) ||
    defaultLanguages;
  const frameworksList =
    stacks?.find((s) => s.category.toLowerCase().includes('frame'))?.skills.map((s) => s.name) ||
    defaultFrameworks;
  const toolsList =
    stacks?.find((s) => s.category.toLowerCase().includes('tool') || s.category.toLowerCase().includes('perkakas'))?.skills.map((s) => s.name) ||
    defaultTools;

  return (
    <section id="about" className="py-20 sm:py-24 bg-white dark:bg-neutral-950 border-b-2 border-black dark:border-neutral-800 scroll-mt-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-neutral-200 shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
            <span className="w-2 h-2 rounded-full bg-black dark:bg-white inline-block" />
            <span>{sectionBadge}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-black dark:text-white tracking-tighter transition-colors">
            {sectionTitle}
          </h2>
        </div>

        {/* Bento Grid Modular 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ========================================================
              1. Card Profil (span 2 kolom): Sapaan, Bio, & Resume
             ======================================================== */}
          <div className="col-span-1 md:col-span-2 border-2 border-black dark:border-neutral-700 rounded-3xl p-6 sm:p-8 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white flex flex-col justify-between transition-colors">
            <div>
              {/* Top Greeting Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm shadow-hard-sm dark:shadow-hard-sm-white transition-colors">
                  <User className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {isId ? 'Profil Rekayasa Sistem' : 'Software Engineering Profile'}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white transition-colors">
                    {greeting}
                  </h3>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-neutral-800 dark:text-neutral-300 text-sm sm:text-base leading-relaxed transition-colors">
                {bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="mt-8 pt-6 border-t-2 border-black dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs sm:text-sm font-bold shadow-hard dark:shadow-hard-white active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{cvButtonText}</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{isId ? 'Terbuka untuk kesempatan kerja & proyek' : 'Open for web engineering roles'}</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              2. Card Foto Avatar (span 1 kolom): Frame Neo-Brutalist
             ======================================================== */}
          <div className="col-span-1 md:col-span-1 border-2 border-black dark:border-neutral-700 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white flex flex-col justify-between relative overflow-hidden transition-colors">
            {/* Clean Frame Avatar */}
            <div className="relative w-full aspect-square rounded-2xl border-2 border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-950 overflow-hidden flex items-center justify-center mb-5">
              <img
                src={photoUrl}
                alt={name}
                className="w-full h-full object-cover object-[50%_60%] relative z-10"
              />
            </div>

            {/* Social Badge & Action */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-3.5 py-2 rounded-xl border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-bold text-black dark:text-white">{handle}</span>
                </div>
                <span className="text-[10px] text-neutral-600 dark:text-neutral-400 uppercase font-bold">{onlineStatus}</span>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white text-xs font-mono font-black uppercase tracking-wider shadow-hard-sm dark:shadow-hard-sm-white transition-all text-center active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>{hireButtonText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ========================================================
              3. Card Akademik / Fokus Studi (span 1 kolom)
             ======================================================== */}
          <div className="col-span-1 md:col-span-1 border-2 border-black dark:border-neutral-700 rounded-3xl p-6 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white flex flex-col justify-between transition-colors">
            <div>
              {/* Header Icon & Status Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black dark:border-neutral-800">
                <div className="w-10 h-10 rounded-full border-2 border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center text-black dark:text-white">
                  <GraduationCap className="w-5 h-5 text-black dark:text-white" />
                </div>
                <span className="px-3 py-1 text-[11px] font-mono font-black rounded-full border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                  {academic?.graduationBadge || 'GRADUATING 2026'}
                </span>
              </div>

              {/* Institution & Major */}
              <p className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
                {academic?.university || 'UNIVERSITAS KUNINGAN'}
              </p>
              <h4 className="text-lg font-black uppercase tracking-tight text-black dark:text-white mb-4">
                {academic?.major || 'INFORMATICS ENGINEERING'}
              </h4>

              {/* Key Coursework Pills */}
              <p className="text-[11px] font-mono font-bold text-neutral-600 dark:text-neutral-400 uppercase mb-2">
                {isId ? 'MATA KULIAH RELEVAN:' : 'RELEVANT COURSEWORK:'}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {(academic?.courses || [
                  'Web Programming',
                  'Database Systems',
                  'Software Engineering',
                  'System Analysis',
                ]).map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-black dark:text-neutral-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* GPA Score Highlight Box */}
            <div className="pt-4 border-t-2 border-black dark:border-neutral-800 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase">
                  {isId ? 'INDEKS PRESTASI KUMULATIF' : 'CUMULATIVE GPA'}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
                    {academic?.gpaScore || '3.84'}
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">/ 4.00</span>
                </div>
              </div>

              <span className="px-3 py-1 text-[11px] font-mono font-black rounded-full border border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white">
                {academic?.gpaStatus || (isId ? 'SANGAT MEMUASKAN' : 'ACADEMIC EXCELLENCE')}
              </span>
            </div>
          </div>

          {/* ========================================================
              4. Card Tech Stack (span 2 kolom): Kelompok Terstruktur
             ======================================================== */}
          <div className="col-span-1 md:col-span-2 border-2 border-black dark:border-neutral-700 rounded-3xl p-6 sm:p-7 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white flex flex-col justify-between transition-colors">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-black dark:border-neutral-800">
                <Terminal className="w-5 h-5 text-black dark:text-white" />
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-black dark:text-white">
                  {isId ? 'TEKNOLOGI & SKILL SET' : 'CORE TECH STACK & TOOLS'}
                </h3>
              </div>

              {/* Grouped Stack Categories */}
              <div className="space-y-4">
                {/* Languages Group */}
                <div>
                  <p className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{isId ? 'BAHASA PEMROGRAMAN' : 'LANGUAGES'}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languagesList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-mono font-bold text-black dark:text-neutral-200 bg-white dark:bg-neutral-950 border border-black dark:border-neutral-700 rounded-lg shadow-hard-sm dark:shadow-hard-sm-white cursor-default hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks Group */}
                <div>
                  <p className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isId ? 'FRAMEWORK & RUNTIME' : 'FRAMEWORKS & RUNTIMES'}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {frameworksList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-mono font-bold text-black dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-950 border border-black dark:border-neutral-700 rounded-lg shadow-hard-sm dark:shadow-hard-sm-white cursor-default hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Databases Group */}
                <div>
                  <p className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>{isId ? 'BASIS DATA & PERKAKAS' : 'DATABASES & ECOSYSTEM'}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {toolsList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-mono font-bold text-black dark:text-neutral-200 bg-white dark:bg-neutral-950 border border-black dark:border-neutral-700 rounded-lg shadow-hard-sm dark:shadow-hard-sm-white cursor-default hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stack Summary */}
            <div className="mt-5 pt-4 border-t border-black dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="font-bold text-black dark:text-white">
                {isId ? 'FOKUS STACK AKTIF' : 'ACTIVE STACK'}
              </span>
              <span className="text-[11px] text-neutral-700 dark:text-neutral-300 font-bold">LARAVEL • REACT • TYPESCRIPT</span>
            </div>
          </div>

          {/* ========================================================
              5. Card "My Focus": Ringkasan Arsitektur & Database
             ======================================================== */}
          <div className="col-span-1 md:col-span-3 border-2 border-black dark:border-neutral-700 rounded-3xl p-6 sm:p-7 bg-white dark:bg-neutral-900 shadow-hard dark:shadow-hard-white transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-black dark:border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {isId ? 'SPESIALISASI REKAYASA' : 'ENGINEERING SPECIALIZATION'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white">
                    {isId ? 'FOKUS ARSITEKTUR & BASIS DATA' : 'CORE ARCHITECTURAL FOCUS'}
                  </h3>
                </div>
              </div>

              <span className="self-start md:self-auto px-3.5 py-1 rounded-full border border-black dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-bold text-black dark:text-white shadow-hard-sm dark:shadow-hard-sm-white">
                SYSTEM INTEGRITY
              </span>
            </div>

            {/* 3 Modular Focus Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pillar 1 */}
              <div className="p-5 rounded-2xl border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black text-black dark:text-white uppercase">
                  <Layers className="w-4 h-4" />
                  <span>{isId ? 'Arsitektur Bersih' : 'Clean System Architecture'}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {isId
                    ? 'Menerapkan modularitas kode, pemisahan layer controller-service, serta REST API standar industri.'
                    : 'Designing modular MVC/service architectures with clear separation of concerns, SOLID principles, and structured REST APIs.'}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black text-black dark:text-white uppercase">
                  <Database className="w-4 h-4" />
                  <span>{isId ? 'Optimasi Basis Data' : 'Relational Database Design'}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {isId
                    ? 'Perancangan skema ternormalisasi, indexing efisien pada MySQL/PostgreSQL, integritas referensial, dan query terstruktur.'
                    : 'Normalized relational schemas, efficient MySQL/PostgreSQL indexing, foreign key constraints, and structured aggregation queries.'}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 rounded-2xl border border-black dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black text-black dark:text-white uppercase">
                  <Layout className="w-4 h-4" />
                  <span>{isId ? 'Antarmuka Responsif' : 'Accessible Component Systems'}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {isId
                    ? 'Integrasi antarmuka responsif dengan React & Tailwind CSS, interaksi neo-brutalisme tegas, dan navigasi ramah pengguna.'
                    : 'Responsive, accessible component architectures with React & Tailwind CSS, fast load times, and tactile neo-brutalist aesthetics.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
