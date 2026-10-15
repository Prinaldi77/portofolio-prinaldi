import type {
  PortfolioData,
  Profile,
  TechStack,
  JourneyItem,
  Project,
  AwardItem,
  CertificationItem,
  OrganizationItem,
} from '../types/portfolio';

export const enProfile: Profile = {
  name: 'MUHAMAD PRINALDI',
  role: 'Full Stack Developer',
  title: 'Junior Web & Software Engineer',
  tagline: '5th-semester Informatics Engineering student and solo web developer building applications with Next.js, Node.js, and Supabase.',
  greeting: "HI, I'M MUHAMAD PRINALDI.",
  handle: '@prnldiiii',
  onlineStatus: 'AVAILABLE FOR WORK',
  codeSnippet: `// Focus: Functional, modular web applications
const developer = {
  name: "Muhamad Prinaldi",
  institution: "Universitas Kuningan",
  status: "5th-Semester Student",
  organization: "HIMA TI (since 2024)",
  coreStack: ["Next.js", "Node.js", "Supabase", "TypeScript", "Tailwind CSS"]
};`,
  floatingBadges: [
    'WEB ENGINEERING',
    'NEXT.JS',
    'NODE.JS',
    'SUPABASE',
    'TYPESCRIPT',
    'HIMA TI',
  ],
  aboutHeadline: 'Junior Web & Software Engineer focused on functional web systems, modular architecture, and data integrity.',
  about: [
    'I am Muhamad Prinaldi, a 5th-semester Informatics Engineering student at Universitas Kuningan dedicated to mastering full-stack web engineering as an independent solo developer. I specialize in designing clean web interfaces while engineering structured backend systems using Next.js, pure Node.js, TypeScript, and Supabase to deliver robust, production-ready applications.',
    'Beyond coursework, I actively turn real-world requirements into functional digital products—ranging from an integrated competition scoring and live recapitulation system (AGP), an iPad-operated commercial web photobooth, to institutional web portals. On campus, I have been an active member of HIMA TI (Informatics Student Association) since 2024, leading departmental work programs and mentoring new student cohorts.',
    'To me, software engineering centers on logical clarity and system reliability. Every database schema, component modularity, and user workflow is purposefully crafted to translate complex processes into calm, efficient, and genuinely valuable digital solutions.'
  ],
  location: 'Indonesia',
  locationCity: 'BANDUNG, ID',
  email: 'muhamadprinaldi123@gmail.com',
  resumeUrl: '/resume.pdf',
  photoUrl: '/assets/photo-pribadi.jpeg',
  statusText: 'AVAILABLE FOR WORK',
  currentDateText: '15 OCT 2026',
  academic: {
    university: 'UNIVERSITAS KUNINGAN',
    major: 'Informatics Engineering (Semester 5)',
    graduationBadge: 'SEMESTER 5 MAHASISWA',
    coursesTitle: 'RELEVANT COURSEWORK:',
    courses: ['Web Design', 'Web Programming', 'Database Systems', 'Software Engineering', 'System Analysis & Design'],
    gpaScore: '3.84',
    gpaMax: '4.00 GPA',
    gpaLabel: 'GPA',
    gpaStatus: 'ACADEMIC EXCELLENCE',
  },
  socials: {
    github: 'https://github.com/Prinaldi77',
    instagram: 'https://www.instagram.com/prnldiiii/',
  },
};

export const enTechStack: TechStack[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Bootstrap', level: 'Advanced' },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'Kotlin', level: 'Intermediate' },
      { name: 'Dart', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Supabase', level: 'Intermediate' },
    ],
  },
  {
    category: 'IoT & Embedded',
    skills: [
      { name: 'ESP32', level: 'Intermediate' },
      { name: 'PlatformIO', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Dev',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Android Studio', level: 'Intermediate' },
      { name: '9Router', level: 'Advanced' },
      { name: 'Antigravity', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
];

export const enJourney: JourneyItem[] = [
  {
    id: 'journey-1',
    year: '2026',
    roleBadge: 'ACTIVE',
    role: '5TH-SEMESTER STUDENT & SOLO DEVELOPER',
    company: 'Universitas Kuningan & Independent Works',
    location: 'Bandung, ID',
    period: '2025 - Present',
    hasArchive: true,
    archiveLabel: 'CURRENT FOCUS',
    description: [
      'Currently in 5th semester of Informatics Engineering at Universitas Kuningan, dedicated to mastering full-stack web engineering as a solo developer.',
      'Building production-ready web applications using Next.js, pure Node.js, and Supabase for real-world and competition use cases.',
      'Refining database architectures, component modularity, and continuous deployment workflows on Vercel.'
    ],
    technologies: ['NEXT.JS', 'NODE.JS', 'SUPABASE', 'TYPESCRIPT', 'TAILWIND CSS'],
  },
  {
    id: 'journey-2',
    year: '2025',
    roleBadge: 'PROJECTS & ORG',
    role: 'HIMA TI MEMBER & INDEPENDENT CREATOR',
    company: 'Himpunan Mahasiswa TI & Independent Initiatives',
    location: 'Universitas Kuningan',
    period: '2024 - 2025',
    hasArchive: true,
    archiveLabel: 'PROJECT REPO',
    description: [
      'Active member of Himpunan Mahasiswa Teknik Informatika (HIMA TI), collaborating on student initiatives and departmental technology events.',
      'Engineered the AGP (Aktivitas Gerakan Pramuka) integrated web system featuring a public information landing page, live scoreboard, and jury scoring panel.',
      'Conceptualized and monetized Photobooth Karta, an interactive iPad-operated web photobooth with custom frames and instant QR code delivery for August Independence Day festivities.'
    ],
    technologies: ['NEXT.JS', 'NODE.JS', 'SUPABASE', 'CANVAS API', 'QR CODE SCAN'],
  },
  {
    id: 'journey-3',
    year: '2024',
    roleBadge: 'FOUNDATION',
    role: 'JOINED HIMA TI & FIRST WEB PROJECT',
    company: 'Web Design Coursework & HIMA TI',
    location: 'Kuningan, ID',
    period: '2023 - 2024',
    hasArchive: true,
    archiveLabel: 'LAB ARCHIVE',
    description: [
      'Joined Himpunan Mahasiswa Teknik Informatika (HIMA TI) in 2024, beginning active involvement in the campus tech community.',
      'Built first solo web project: Sistem Informasi Pramuka SMPN 2 Katapang as a coursework project for the Web Design class using pure Node.js.',
      'Mastered core web fundamentals: JavaScript DOM manipulation, Express routing architectures, and semantic responsive styling.'
    ],
    technologies: ['PURE NODE.JS', 'EXPRESS', 'JAVASCRIPT', 'WEB DESIGN', 'MYSQL'],
  },
];

export const enProjects: Project[] = [
  {
    id: 'project-1',
    category: 'FULL-STACK WEB APP',
    title: 'AGP INFORMATION & LIVE SCORE RECAPITULATION SYSTEM',
    description: 'Integrated web platform built for the Aktivitas Gerakan Pramuka (AGP) competition. Features a public information landing page with venue schedules, real-time live scoreboard for participants, and a back-office jury management panel to calculate scores across all competition categories.',
    tags: ['Next.js', 'Node.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/projects/mockup-agp.jpg',
    caseStudyUrl: 'https://github.com/Prinaldi77/Rekapitulasi_Agp',
    githubUrl: 'https://github.com/Prinaldi77/Rekapitulasi_Agp',
    featured: true,
    metrics: [
      { label: 'FRONTEND', value: 'NEXT.JS APPS' },
      { label: 'BACKEND', value: 'NODE.JS API' },
      { label: 'DATABASE', value: 'SUPABASE' },
    ],
  },
  {
    id: 'project-2',
    category: 'WEB DESIGN COURSEWORK',
    title: 'KATAPANG 2 SCOUT INFORMATION SYSTEM',
    description: 'First solo web project engineered for the Web Design university coursework. Serves as an informative portal and official station profile for SMPN 2 Katapang, publishing regular activity schedules and photographic documentation archives using pure Node.js.',
    tags: ['Pure Node.js', 'Express.js', 'JavaScript', 'Web Design', 'MySQL'],
    imageUrl: '/projects/mockup-katapang.jpg',
    caseStudyUrl: 'https://github.com/Prinaldi77',
    githubUrl: 'https://github.com/Prinaldi77',
    featured: true,
    metrics: [
      { label: 'CONTEXT', value: 'COURSEWORK' },
      { label: 'RUNTIME', value: 'PURE NODE.JS' },
      { label: 'ROLE', value: 'SOLO DEVELOPER' },
    ],
  },
  {
    id: 'project-3',
    category: 'COMMERCIAL WEB APP',
    title: 'PHOTOBOOTH KARTA DIGITAL WEB APP',
    description: 'Commercial digital photobooth web application created as an independent initiative to monetize and service local August Independence Day celebrations. Operated directly on an iPad via browser, offering aesthetic thematic frames and instant photo delivery to visitors\' phone galleries via QR code scan.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'QR Code Scan'],
    imageUrl: '/projects/mockup-photobooth.jpg',
    caseStudyUrl: 'https://github.com/Prinaldi77',
    githubUrl: 'https://github.com/Prinaldi77',
    featured: false,
    metrics: [
      { label: 'HARDWARE', value: 'IPAD BROWSER' },
      { label: 'DELIVERY', value: 'QR CODE SCAN' },
      { label: 'DEPLOYMENT', value: 'VERCEL' },
    ],
  },
];

export const enAwards: AwardItem[] = [
  {
    id: 'award-1',
    title: 'AGP RECAPITULATION & REAL-TIME LIVE SCORE SYSTEM',
    category: 'COMPETITION SYSTEM DIGITALIZATION',
    organization: 'Universitas Kuningan & AGP Committee',
    year: '2025',
    description: 'First successful engineering and deployment of an integrated digital judging and live score platform for a regional scout tournament, eliminating hours of manual score calculation.',
    imageUrl: '/projects/mockup-agp.jpg',
  },
  {
    id: 'award-2',
    title: 'INFORMATICS ENGINEERING ACADEMIC EXCELLENCE (GPA 3.84)',
    category: 'ACADEMIC RECOGNITION',
    organization: 'Faculty of Computer Science, Universitas Kuningan',
    year: '2024 - 2026',
    description: 'Consistent academic performance with high honors (3.84 / 4.00 GPA), excelling in Software Engineering, Advanced Web Programming, and Database Systems.',
    imageUrl: '/projects/mockup-katapang.jpg',
  },
];

export const enCertifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Foundational Web Programming Fundamentals',
    issuer: 'Dicoding Academy Indonesia',
    date: 'May 2024',
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
  {
    id: 'cert-2',
    title: 'Building Modern Web Applications with React',
    issuer: 'Dicoding Academy Indonesia',
    date: 'Aug 2024',
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
  {
    id: 'cert-3',
    title: 'Software Engineering Principles & Database Systems',
    issuer: 'Faculty of Computer Science Universitas Kuningan',
    date: 'Jan 2024',
    credentialUrl: 'https://uniku.ac.id',
  },
  {
    id: 'cert-4',
    title: 'Modern JavaScript & Frontend Development',
    issuer: 'Dicoding / FreeCodeCamp Community',
    date: 'Nov 2024',
    credentialUrl: 'https://www.freecodecamp.org',
  },
  {
    id: 'cert-5',
    title: 'Full-Stack Web Architecture (Next.js & Supabase)',
    issuer: 'Independent Portfolio Lab Verification',
    date: 'Feb 2025',
    credentialUrl: 'https://github.com/Prinaldi77',
  },
  {
    id: 'cert-6',
    title: 'Repository & Version Control Management (Git & GitHub)',
    issuer: 'Dicoding Academy Indonesia',
    date: 'Dec 2024',
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
];

export const enOrganizations: OrganizationItem[] = [
  {
    id: 'org-1',
    name: 'INFORMATICS ENGINEERING STUDENT ASSOCIATION (HIMA TI)',
    institution: 'Universitas Kuningan',
    period: '2024 — Present',
    logoText: 'HIMA TI',
    roles: [
      {
        role: 'Active Board Member',
        period: '2024 — Present',
      },
      {
        role: 'Technology Development & Student Mentorship Division',
        period: '2024 — 2025',
      },
    ],
    programs: [
      {
        number: '01',
        title: 'AGP Information & Score Recapitulation System',
        role: 'Lead Web Engineer & Recapitulation Architecture',
        location: 'Kuningan, ID',
        date: '2025',
      },
      {
        number: '02',
        title: 'Freshman Informatics Student Cadre Mentorship',
        role: 'Event Division & Student Cadre Mentor',
        location: 'Kuningan, ID',
        date: '2024 — 2025',
      },
      {
        number: '03',
        title: 'Student Web Technology Workshop & Seminar',
        role: 'Technical Documentation & Public Outreach',
        location: 'Kuningan, ID',
        date: '2024',
      },
    ],
  },
];

export const enData: PortfolioData = {
  profile: enProfile,
  personalInfo: enProfile,
  techStack: enTechStack,
  skillCategories: enTechStack,
  journey: enJourney,
  experiences: enJourney,
  awards: enAwards,
  certifications: enCertifications,
  organizations: enOrganizations,
  navItems: [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'GUESTBOOK', href: '#guestbook' },
    { label: 'CONTACT', href: '#contact' },
  ],
  sectionHeaders: {
    about: {
      eyebrow: 'PROFILE',
      title: 'ABOUT ME',
      description: 'Academic background, architectural focus, and technical competencies.',
    },
    skills: {
      eyebrow: 'CAPABILITIES',
      title: 'TECH STACK',
      description: 'Technologies and tools applied across frontend, backend, and development workflows.',
    },
    projects: {
      eyebrow: 'PORTFOLIO',
      title: 'SELECTED WORKS',
      description: 'Functional web systems focused on clear requirements, data integrity, and maintainable architecture.',
    },
    experience: {
      eyebrow: 'MILESTONES',
      title: 'MY JOURNEY',
      description: 'Key steps: from university coursework to production-ready software development.',
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      title: 'CONTACT ME',
      description: 'Have a project discussion or software engineering inquiry? Feel free to reach out anytime.',
    },
  },
  labels: {
    resumeButton: 'RESUME',
    downloadCvButton: 'DOWNLOAD RESUME',
    hireMeButton: 'GET IN TOUCH',
    exploreProjectsButton: 'EXPLORE PROJECTS',
    contactMeButton: 'CONTACT ME',
    liveDemoButton: 'VIEW DEMO',
    caseStudyButton: 'VIEW DETAILS',
    sourceCodeButton: 'SOURCE CODE',
    featuredBadge: 'FEATURED',
    statusLabel: 'Status',
    locationLabel: 'Location',
    emailLabel: 'Email',
    formNameLabel: 'Full Name',
    formEmailLabel: 'Email Address',
    formMessageLabel: 'Your Message',
    formSubmitButton: 'Send Message',
    formSuccessTitle: 'Message Delivered',
    formSuccessDesc: 'Thank you for reaching out. I will respond to your email promptly.',
    formResetButton: 'Send Another Message',
    copyrightText: 'All rights reserved.',
    backToTopLabel: 'Back to top',
    guestbookButton: 'Guestbook',
    scrollDownLabel: 'SCROLL DOWN',
    todayPrefix: 'TODAY:',
  },
  guestbook: {
    title: '~/guestbook.log',
    subtitle: 'Signatures and notes from visitors',
    statusLive: 'LIVE',
    signatureCountLabel: 'total notes',
    loginPrompt: 'Sign in to leave a note',
    githubButton: 'GitHub',
    googleButton: 'Google',
    emptyText: 'No visitor notes recorded yet. Sign in with GitHub or Google to leave the very first message.',
    footerNotice: 'Sign in with GitHub or Google to write a note.',
    inputPlaceholder: 'Write your message or constructive feedback...',
    sendButton: 'Post Note',
    entries: [],
  },
  projects: enProjects,
};

export default enData;
