import React, { useState } from 'react';
import type { Language } from './types/portfolio';
import { localizedPortfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GuestbookDrawer from './components/GuestbookDrawer';

export const App: React.FC = () => {
  // Default language is English ('en')
  const [lang, setLang] = useState<Language>('en');
  const [isGuestbookOpen, setIsGuestbookOpen] = useState(false);

  const currentData = localizedPortfolioData[lang];
  const {
    profile,
    techStack,
    projects,
    journey,
    sectionHeaders,
    labels,
    guestbook,
  } = currentData;

  return (
    <div className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black pb-16 transition-colors duration-200">
      {/* 1. Header Navbar dengan border bawah tipis hitam */}
      <Navbar
        currentLang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
        resumeUrl={profile.resumeUrl}
      />

      {/* 2. Main Content Sections Berurutan */}
      <main>
        {/* Hero Section */}
        <Hero personalInfo={profile} />

        {/* Bento Grid About Me Section */}
        <AboutSection
          personalInfo={profile}
          categories={techStack}
          header={sectionHeaders.about}
          downloadCvLabel={labels.downloadCvButton}
          hireMeLabel={labels.hireMeButton}
          currentLang={lang}
        />

        {/* Selected Works (Dark Section Kontras Tinggi) */}
        <ProjectsSection
          projects={projects}
          header={sectionHeaders.projects}
          liveDemoLabel={labels.liveDemoButton}
          caseStudyLabel={labels.caseStudyButton}
          currentLang={lang}
        />

        {/* Journey Timeline */}
        <JourneySection
          journey={journey}
          header={sectionHeaders.experience}
          currentLang={lang}
        />

        {/* Contact Form Section */}
        <Contact
          personalInfo={profile}
          header={sectionHeaders.contact}
          labels={{
            locationLabel: labels.locationLabel,
            emailLabel: labels.emailLabel,
            formNameLabel: labels.formNameLabel,
            formEmailLabel: labels.formEmailLabel,
            formMessageLabel: labels.formMessageLabel,
            formSubmitButton: labels.formSubmitButton,
            formSuccessTitle: labels.formSuccessTitle,
            formSuccessDesc: labels.formSuccessDesc,
            formResetButton: labels.formResetButton,
          }}
        />
      </main>

      {/* 3. Footer */}
      <Footer
        personalInfo={profile}
        copyrightText={labels.copyrightText}
        backToTopLabel={labels.backToTopLabel}
      />

      {/* 4. Persistent Bottom Bar yang menempel di bawah layar */}
      <BottomBar
        location={profile.locationCity}
        signatureCount={guestbook.entries.length}
        currentLang={lang}
        onOpenGuestbook={() => setIsGuestbookOpen(true)}
      />

      {/* 5. Guestbook Drawer Slide-over */}
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
