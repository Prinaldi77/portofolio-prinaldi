import React, { useState } from 'react';
import type { Language } from './types/portfolio';
import { localizedPortfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AwardsSection from './components/AwardsSection';
import CertificationsSection from './components/CertificationsSection';
import OrganizationsSection from './components/OrganizationsSection';
import Contact from './components/Contact';
import GuestbookDrawer from './components/GuestbookDrawer';

export const App: React.FC = () => {
  // Default language is Indonesian ('id')
  const [lang, setLang] = useState<Language>('id');
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false);

  const currentData = localizedPortfolioData[lang];
  const {
    profile,
    techStack,
    projects,
    awards,
    certifications,
    organizations,
    labels,
    guestbook,
  } = currentData;

  return (
    <div className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
      {/* 1. Header Sticky Navbar */}
      <Navbar
        currentLang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
        resumeUrl={profile.resumeUrl}
      />

      {/* 2. Main Content */}
      <main className="relative">
        {/* BAGIAN [01] — Hero Section (01 / 08, Sticky at top) */}
        <Hero personalInfo={profile} currentLang={lang} />

        {/* Rising Card Container (BAGIAN [02] s/d [08]) that slides smoothly over Hero on scroll */}
        <div className="relative z-10 bg-white dark:bg-neutral-950 rounded-t-[32px] shadow-[0_-15px_40px_rgba(0,0,0,0.06)] border-t border-gray-100 dark:border-neutral-900 min-h-screen">
          {/* BAGIAN [02] — Tentang / Profil (02 / 08) */}
          <AboutSection
            personalInfo={profile}
            downloadCvLabel={labels.downloadCvButton}
            hireMeLabel={labels.hireMeButton}
            currentLang={lang}
          />

          {/* BAGIAN [03] — Keahlian Teknis (03 / 08) */}
          <SkillsSection
            techStack={techStack}
            currentLang={lang}
          />

          {/* BAGIAN [04] — Karya Pilihan (04 / 08) */}
          <ProjectsSection
            projects={projects}
            currentLang={lang}
          />

          {/* BAGIAN [05] — Prestasi & Penghargaan (05 / 08) */}
          <AwardsSection
            awards={awards}
            currentLang={lang}
          />

          {/* BAGIAN [06] — Sertifikasi & Lisensi (06 / 08) */}
          <CertificationsSection
            certifications={certifications}
            currentLang={lang}
          />

          {/* BAGIAN [07] — Pengalaman Organisasi (07 / 08) */}
          <OrganizationsSection
            organizations={organizations}
            currentLang={lang}
          />

          {/* BAGIAN [08] — Kontak & Footer (08 / 08) */}
          <Contact
            personalInfo={profile}
            currentLang={lang}
          />
        </div>
      </main>

      {/* Persistent Bottom Bar */}
      <BottomBar
        location={profile.locationCity}
        signatureCount={guestbook.entries.length}
        currentLang={lang}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
      />

      {/* Guestbook Drawer Slide-over */}
      <GuestbookDrawer
        isOpen={isGuestbookOpen}
        onClose={() => setIsGuestbookOpen(false)}
        guestbookData={guestbook}
        currentLang={lang}
      />
    </div>
  );
};

export default App;
