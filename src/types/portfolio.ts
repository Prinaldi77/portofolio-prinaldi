export type Language = 'en' | 'id';

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  email?: string;
}

export interface AcademicInfo {
  university: string;
  major: string;
  graduationBadge: string;
  coursesTitle: string;
  courses: string[];
  gpaScore: string;
  gpaMax: string;
  gpaLabel: string;
  gpaStatus: string;
}

export interface Profile {
  name: string;
  role: string;
  title: string;
  tagline: string;
  greeting: string;
  handle: string;
  onlineStatus: string;
  codeSnippet: string;
  floatingBadges: string[];
  aboutHeadline?: string;
  about: string[];
  location: string;
  locationCity: string;
  email: string;
  resumeUrl: string;
  photoUrl: string;
  statusText: string;
  currentDateText: string;
  academic: AcademicInfo;
  socials: SocialLinks;
}

export interface TechSkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface TechStack {
  category: string;
  skills: TechSkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
}

export interface JourneyItem {
  id: string;
  year: string;
  roleBadge: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
  hasArchive?: boolean;
  archiveLabel?: string;
}

export interface GuestbookReply {
  id: string;
  name: string;
  date: string;
  message: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  handle?: string;
  avatar: string;
  provider: 'github' | 'google';
  date: string;
  message: string;
  isOwner?: boolean;
  replies?: GuestbookReply[];
}

export interface GuestbookSection {
  title: string;
  subtitle: string;
  statusLive: string;
  signatureCountLabel: string;
  loginPrompt: string;
  githubButton: string;
  googleButton: string;
  emptyText: string;
  footerNotice: string;
  inputPlaceholder: string;
  sendButton: string;
  entries: GuestbookEntry[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionContent {
  eyebrow?: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  profile: Profile;
  personalInfo: Profile; // Aliased for backward compatibility
  techStack: TechStack[];
  skillCategories: TechStack[]; // Aliased for backward compatibility
  projects: Project[];
  journey: JourneyItem[];
  experiences: JourneyItem[]; // Aliased for backward compatibility
  guestbook: GuestbookSection;
  navItems: NavItem[];
  sectionHeaders: {
    about: SectionContent;
    skills: SectionContent;
    projects: SectionContent;
    experience: SectionContent;
    contact: SectionContent;
  };
  labels: {
    resumeButton: string;
    downloadCvButton: string;
    hireMeButton: string;
    exploreProjectsButton: string;
    contactMeButton: string;
    liveDemoButton: string;
    caseStudyButton: string;
    sourceCodeButton: string;
    featuredBadge: string;
    statusLabel: string;
    locationLabel: string;
    emailLabel: string;
    formNameLabel: string;
    formEmailLabel: string;
    formMessageLabel: string;
    formSubmitButton: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formResetButton: string;
    copyrightText: string;
    backToTopLabel: string;
    guestbookButton: string;
    scrollDownLabel: string;
    todayPrefix: string;
  };
}

export type LocalizedPortfolioData = Record<Language, PortfolioData>;

// Aliases for compatibility
export type PersonalInfo = Profile;
export type SkillCategory = TechStack;
export type ExperienceItem = JourneyItem;
