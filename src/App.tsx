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
    <div className="bg-white dark:bg-[#050505] text-black dark:text-white font-sans antialiased selection:bg-amber-500 selection:text-black transition-colors duration-200">
      {/* 1. Floating Pill Sticky Navbar */}
      <Navbar
        currentLang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
        resumeUrl={profile.resumeUrl}
      />

      {/* 2. Main Content with Sticky Curtain Transition (Animation 5) */}
      <main className="relative">
        {/* BAGIAN [01] — Layered Wordmark & Floating Cards Hero */}
        <Hero personalInfo={profile} currentLang={lang} />

        {/* Rising Curtain Card Container (BAGIAN [02] s/d [08]) */}
        <div className="relative z-10 bg-white dark:bg-[#050505] rounded-t-[36px] shadow-[0_-20px_50px_rgba(0,0,0,0.45)] border-t border-neutral-200 dark:border-white/15 min-h-screen">
          {/* BAGIAN [02] — 3-Line Statement & Diagonal Fanned Card Stack */}
          <AboutSection
            personalInfo={profile}
            downloadCvLabel={labels.downloadCvButton}
            hireMeLabel={labels.hireMeButton}
            currentLang={lang}
          />

          {/* BAGIAN [03] — Asymmetric Technical Matrix */}
          <SkillsSection
            techStack={techStack}
            currentLang={lang}
          />

          {/* BAGIAN [04] — Perimeter Showcase Frame & Interactive Project Explorer */}
          <ProjectsSection
            projects={projects}
            currentLang={lang}
          />

          {/* BAGIAN [05] — Prestasi & Penghargaan */}
          <AwardsSection
            awards={awards}
            currentLang={lang}
          />

          {/* BAGIAN [06] — Sertifikasi & Lisensi */}
          <CertificationsSection
            certifications={certifications}
            currentLang={lang}
          />

          {/* BAGIAN [07] — Pengalaman Organisasi */}
          <OrganizationsSection
            organizations={organizations}
            currentLang={lang}
          />

          {/* BAGIAN [08] — Kontak & Footer */}
          <Contact
            personalInfo={profile}
            currentLang={lang}
          />
        </div>
      </main>

      {/* Persistent Bottom Status Bar */}
      <BottomBar
        location={profile.locationCity}
        signatureCount={guestbook.entries.length}
        currentLang={lang}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
      />

      {/* Guestbook Slide-Over Drawer */}
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
