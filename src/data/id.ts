import type { PortfolioData, Profile, TechStack, JourneyItem, Project } from '../types/portfolio';

export const idProfile: Profile = {
  name: 'MUHAMAD PRINALDI',
  role: 'Full Stack Developer',
  title: 'Junior Web & Software Engineer',
  tagline: 'Mahasiswa Teknik Informatika Semester 5 dan solo web developer yang membangun aplikasi web dengan Next.js, Node.js, dan Supabase.',
  greeting: 'HAI, SAYA MUHAMAD PRINALDI.',
  handle: '@prnldiiii',
  onlineStatus: 'TERSEDIA UNTUK BEKERJA',
  codeSnippet: `// Fokus: Aplikasi web fungsional dan modular
const developer = {
  nama: "Muhamad Prinaldi",
  kampus: "Universitas Kuningan",
  status: "Mahasiswa Semester 5",
  organisasi: "HIMA TI (sejak 2024)",
  stackUtama: ["Next.js", "Node.js", "Supabase", "TypeScript", "Tailwind CSS"]
};`,
  floatingBadges: [
    'REKAYASA WEB',
    'NEXT.JS',
    'NODE.JS',
    'SUPABASE',
    'TYPESCRIPT',
    'HIMA TI',
  ],
  about: [
    'Mahasiswa Teknik Informatika Semester 5 di Universitas Kuningan dan pengurus aktif Himpunan Mahasiswa Teknik Informatika (HIMA TI) sejak tahun 2024.',
    'Berfokus sebagai solo developer dalam membangun aplikasi web fungsional menggunakan Next.js, Node.js murni, Supabase, dan Web API modern untuk kebutuhan riil.'
  ],
  location: 'Indonesia',
  locationCity: 'BANDUNG, ID',
  email: 'muhamadprinaldi123@gmail.com',
  resumeUrl: '/resume.pdf',
  photoUrl: '/assets/photo-pribadi.jpeg',
  statusText: 'TERSEDIA UNTUK BEKERJA',
  currentDateText: '15 OKT 2026',
  academic: {
    university: 'UNIVERSITAS KUNINGAN',
    major: 'TEKNIK INFORMATIKA (SEMESTER 5)',
    graduationBadge: 'SEMESTER 5 MAHASISWA',
    coursesTitle: 'MATA KULIAH RELEVAN:',
    courses: ['Web Design', 'Pemrograman Web', 'Sistem Basis Data', 'Rekayasa Perangkat Lunak', 'Analisis & Perancangan Sistem'],
    gpaScore: '3.84',
    gpaMax: '4.00 IPK',
    gpaLabel: 'IPK',
    gpaStatus: 'SANGAT MEMUASKAN',
  },
  socials: {
    github: 'https://github.com/Prinaldi77',
    instagram: 'https://www.instagram.com/prnldiiii/',
  },
};

export const idTechStack: TechStack[] = [
  {
    category: 'BAHASA PEMROGRAMAN',
    skills: [
      { name: 'TypeScript', level: 'Menengah' },
      { name: 'JavaScript', level: 'Mahir' },
      { name: 'PHP', level: 'Menengah' },
      { name: 'HTML5', level: 'Mahir' },
      { name: 'CSS3', level: 'Mahir' },
      { name: 'SQL', level: 'Menengah' },
    ],
  },
  {
    category: 'FRAMEWORK & RUNTIME',
    skills: [
      { name: 'Next.js', level: 'Mahir' },
      { name: 'Node.js', level: 'Mahir' },
      { name: 'React.js', level: 'Mahir' },
      { name: 'Express.js', level: 'Mahir' },
      { name: 'Tailwind CSS', level: 'Mahir' },
      { name: 'Laravel', level: 'Menengah' },
    ],
  },
  {
    category: 'BASIS DATA & EKOSISTEM',
    skills: [
      { name: 'Git & GitHub', level: 'Mahir' },
      { name: 'Vite', level: 'Mahir' },
      { name: 'PostgreSQL', level: 'Menengah' },
      { name: 'MySQL', level: 'Mahir' },
      { name: 'Supabase', level: 'Menengah' },
      { name: 'Vercel', level: 'Mahir' },
      { name: 'Postman', level: 'Menengah' },
    ],
  },
];

export const idJourney: JourneyItem[] = [
  {
    id: 'journey-1',
    year: '2026',
    roleBadge: 'AKTIF',
    role: 'MAHASISWA SEMESTER 5 & SOLO DEVELOPER',
    company: 'Universitas Kuningan & Proyek Mandiri',
    location: 'Bandung, ID',
    period: '2025 - Sekarang',
    hasArchive: true,
    archiveLabel: 'FOKUS SAAT INI',
    description: [
      'Menempuh perkuliahan semester 5 Teknik Informatika di Universitas Kuningan dengan fokus mendalami full-stack web development secara mandiri (solo developer).',
      'Membangun aplikasi web modular siap pakai menggunakan Next.js, Node.js murni, dan Supabase untuk kebutuhan nyata maupun ajang kegiatan.',
      'Mengeksplorasi optimasi performa antarmuka, arsitektur database relasional, dan integrasi continuous deployment di Vercel.'
    ],
    technologies: ['NEXT.JS', 'NODE.JS', 'SUPABASE', 'TYPESCRIPT', 'TAILWIND CSS'],
  },
  {
    id: 'journey-2',
    year: '2025',
    roleBadge: 'ORGANISASI & PROYEK',
    role: 'PENGURUS HIMA TI & INISIATIF PROYEK',
    company: 'Himpunan Mahasiswa TI & Inisiatif Mandiri',
    location: 'Universitas Kuningan',
    period: '2024 - 2025',
    hasArchive: true,
    archiveLabel: 'REPO PROYEK',
    description: [
      'Melanjutkan kepengurusan aktif di Himpunan Mahasiswa Teknik Informatika (HIMA TI) dalam berbagai kegiatan teknologi dan kolaborasi kemahasiswaan.',
      'Membangun sistem informasi dan rekapitulasi nilai perlombaan Aktivitas Gerakan Pramuka (AGP) dengan fitur live scoreboard dan rekapitulasi penilaian juri.',
      'Menciptakan dan memonetisasi Photobooth Karta berbasis web di iPad dengan fitur bingkai estetis dan pengunduhan instan via scan QR Code untuk perayaan puncak HUT RI.'
    ],
    technologies: ['NEXT.JS', 'NODE.JS', 'SUPABASE', 'CANVAS API', 'QR CODE SCAN'],
  },
  {
    id: 'journey-3',
    year: '2024',
    roleBadge: 'PONDASI',
    role: 'MASUK HIMA TI & PROYEK WEB PERTAMA',
    company: 'Mata Kuliah Web Design & HIMA TI',
    location: 'Kuningan, ID',
    period: '2023 - 2024',
    hasArchive: true,
    archiveLabel: 'ARSIP LAB',
    description: [
      'Resmi bergabung menjadi anggota Himpunan Mahasiswa Teknik Informatika (HIMA TI) pada tahun 2024 dan mulai aktif di lingkungan teknologi kampus.',
      'Membangun proyek web pertama secara mandiri: Sistem Informasi Pramuka SMPN 2 Katapang untuk memenuhi tugas mata kuliah Web Design menggunakan Node.js murni.',
      'Menguasai fondasi utama pemrograman web: manipulasi DOM JavaScript, routing Express, CSS responsif, serta pengarsipan dokumentasi digital.'
    ],
    technologies: ['MURNI NODE.JS', 'EXPRESS', 'JAVASCRIPT', 'WEB DESIGN', 'MYSQL'],
  },
];

export const idProjects: Project[] = [
  {
    id: 'project-1',
    category: 'APLIKASI WEB FULL-STACK',
    title: 'SISTEM INFORMASI & REKAPITULASI NILAI AGP',
    description: 'Pusat sistem informasi dan rekapitulasi nilai terintegrasi untuk perlombaan Aktivitas Gerakan Pramuka (AGP). Dilengkapi landing page informasi jadwal dan lokasi lomba untuk peserta, papan skor real-time (live score), serta panel panitia di balik layar untuk merekapitulasi penilaian dari berbagai mata lomba secara terstruktur.',
    tags: ['Next.js', 'Node.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/projects/rekapitulasiagp.png',
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
    category: 'TUGAS MATA KULIAH WEB DESIGN',
    title: 'SISTEM INFORMASI PRAMUKA SMPN 2 KATAPANG',
    description: 'Proyek web pertama yang dibangun secara mandiri untuk pemenuhan tugas mata kuliah Web Design. Berfungsi sebagai sarana informasi profil pangkalan gugus depan SMPN 2 Katapang, publikasi jadwal kegiatan rutin, dan arsip galeri dokumentasi kepramukaan menggunakan murni Node.js.',
    tags: ['Murni Node.js', 'Express.js', 'JavaScript', 'Web Design', 'MySQL'],
    imageUrl: '/projects/sisteminformasipramuka2katapang.png',
    caseStudyUrl: 'https://github.com/Prinaldi77',
    githubUrl: 'https://github.com/Prinaldi77',
    featured: true,
    metrics: [
      { label: 'KONTEKS', value: 'TUGAS KULIAH' },
      { label: 'RUNTIME', value: 'MURNI NODE.JS' },
      { label: 'PERAN', value: 'SOLO DEVELOPER' },
    ],
  },
  {
    id: 'project-3',
    category: 'PROYEK WEB KOMERSIAL MANDIRI',
    title: 'APLIKASI WEB PHOTOBOOTH KARTA',
    description: 'Aplikasi web photobooth komersial hasil inisiatif mandiri untuk memonetisasi kebutuhan acara perayaan puncak HUT RI Agustus di daerah (Karang Taruna). Dijalankan langsung melalui web di perangkat iPad, menyediakan pemilihan bingkai/frame tematik estetis, dan pengunduhan hasil foto instan ke galeri HP pengunjung via scan QR Code.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'QR Code Scan'],
    imageUrl: '/projects/photoboothkarta.png',
    caseStudyUrl: 'https://github.com/Prinaldi77',
    githubUrl: 'https://github.com/Prinaldi77',
    featured: false,
    metrics: [
      { label: 'PERANGKAT', value: 'IPAD BROWSER' },
      { label: 'PENGIRIMAN', value: 'SCAN QR CODE' },
      { label: 'DEPLOYMENT', value: 'VERCEL' },
    ],
  },
];

export const idData: PortfolioData = {
  profile: idProfile,
  personalInfo: idProfile,
  techStack: idTechStack,
  skillCategories: idTechStack,
  journey: idJourney,
  experiences: idJourney,
  navItems: [
    { label: 'BERANDA', href: '#home' },
    { label: 'TENTANG', href: '#about' },
    { label: 'PROYEK', href: '#projects' },
    { label: 'PERJALANAN', href: '#journey' },
    { label: 'BUKU TAMU', href: '#guestbook' },
    { label: 'KONTAK', href: '#contact' },
  ],
  sectionHeaders: {
    about: {
      eyebrow: 'PROFIL',
      title: 'TENTANG SAYA',
      description: 'Latar belakang akademik, fokus rekayasa sistem, dan kompetensi teknis.',
    },
    skills: {
      eyebrow: 'KEMAMPUAN',
      title: 'TECH STACK',
      description: 'Teknologi dan perkakas yang digunakan dalam alur rekayasa frontend dan backend.',
    },
    projects: {
      eyebrow: 'PORTOFOLIO',
      title: 'KARYA TERPILIH',
      description: 'Sistem web fungsional yang berorientasi pada ketepatan data, arsitektur bersih, dan kemudahan pemeliharaan.',
    },
    experience: {
      eyebrow: 'TONGGAK PERTUMBUHAN',
      title: 'PERJALANAN SAYA',
      description: 'Langkah kunci: dari laboratorium perkuliahan hingga pengembangan perangkat lunak siap produksi.',
    },
    contact: {
      eyebrow: 'HUBUNGI SAYA',
      title: 'KONTAK SAYA',
      description: 'Punya ide proyek atau pertanyaan rekayasa perangkat lunak? Kirim pesan langsung kapan saja.',
    },
  },
  labels: {
    resumeButton: 'RESUME',
    downloadCvButton: 'UNDUH RESUME',
    hireMeButton: 'HUBUNGI SAYA',
    exploreProjectsButton: 'JELAJAHI PROYEK',
    contactMeButton: 'HUBUNGI SAYA',
    liveDemoButton: 'LIHAT DEMO',
    caseStudyButton: 'LIHAT DETAIL',
    sourceCodeButton: 'KODE SUMBER',
    featuredBadge: 'FEATURED',
    statusLabel: 'Status',
    locationLabel: 'Lokasi',
    emailLabel: 'Email',
    formNameLabel: 'Nama Lengkap',
    formEmailLabel: 'Alamat Email',
    formMessageLabel: 'Pesan Anda',
    formSubmitButton: 'Kirim Pesan',
    formSuccessTitle: 'Pesan Terkirim',
    formSuccessDesc: 'Terima kasih telah menghubungi. Saya akan membalas ke email Anda secepatnya.',
    formResetButton: 'Kirim Pesan Lain',
    copyrightText: 'Seluruh hak cipta dilindungi.',
    backToTopLabel: 'Kembali ke atas',
    guestbookButton: 'Buku Tamu',
    scrollDownLabel: 'GULIR KE BAWAH',
    todayPrefix: 'HARI INI:',
  },
  guestbook: {
    title: '~/guestbook.log',
    subtitle: 'Tanda tangan dan catatan dari pengunjung',
    statusLive: 'LIVE',
    signatureCountLabel: 'total catatan',
    loginPrompt: 'Masuk untuk Menulis Pesan',
    githubButton: 'GitHub',
    googleButton: 'Google',
    emptyText: 'Belum ada catatan pengunjung. Masuk menggunakan GitHub atau Google untuk meninggalkan pesan pertama.',
    footerNotice: 'Silakan masuk dengan GitHub atau Google untuk menulis pesan.',
    inputPlaceholder: 'Tuliskan pesan atau masukan konstruktif Anda...',
    sendButton: 'Kirim Pesan',
    entries: [],
  },
  projects: idProjects,
};

export default idData;
