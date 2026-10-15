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
  aboutHeadline: 'Junior Web & Software Engineer yang berfokus pada rekayasa sistem web fungsional, arsitektur modular, dan integritas data.',
  about: [
    'Saya Muhamad Prinaldi, mahasiswa semester 5 Teknik Informatika di Universitas Kuningan yang mendalami rekayasa web secara mandiri (solo developer). Saya terbiasa merancang antarmuka web yang bersih sekaligus membangun arsitektur sistem yang terstruktur menggunakan ekosistem Next.js, Node.js murni, TypeScript, dan Supabase untuk menghasilkan aplikasi web yang fungsional, presisi, dan siap produksi.',
    'Selain perkuliahan, saya aktif mentransformasikan kebutuhan riil menjadi solusi digital—mulai dari membangun sistem informasi dan rekapitulasi penilaian lomba berskala besar (AGP) dengan live scoreboard, aplikasi web photobooth komersial interaktif via iPad, hingga portal informasi instansi. Di lingkungan kampus, saya aktif di Himpunan Mahasiswa Teknik Informatika (HIMA TI) sejak 2024, memimpin pelaksanaan program kerja serta membimbing kaderisasi mahasiswa baru.',
    'Bagi saya, rekayasa perangkat lunak adalah tentang kejelasan logika dan keandalan sistem. Setiap perancangan struktur basis data, modularitas komponen kode, dan alur pengalaman pengguna dirancang secara terencana untuk menyederhanakan proses yang rumit menjadi solusi digital yang tenang, efisien, dan bernilai guna nyata.'
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
    category: 'CORE LANGUAGES',
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
    category: 'PRIMARY FRAMEWORKS',
    skills: [
      { name: 'Next.js', level: 'Mahir' },
      { name: 'Node.js', level: 'Mahir' },
      { name: 'React.js', level: 'Mahir' },
      { name: 'Express.js', level: 'Mahir' },
    ],
  },
  {
    category: 'STYLING & UI ARCHITECTURE',
    skills: [
      { name: 'Tailwind CSS', level: 'Mahir' },
      { name: 'Responsive Grid', level: 'Mahir' },
      { name: 'Semantic HTML', level: 'Mahir' },
      { name: 'Component Modularity', level: 'Mahir' },
    ],
  },
  {
    category: 'DATABASES & ORM',
    skills: [
      { name: 'Supabase', level: 'Menengah' },
      { name: 'MySQL', level: 'Mahir' },
      { name: 'PostgreSQL', level: 'Menengah' },
      { name: 'Relational Schemas', level: 'Menengah' },
    ],
  },
  {
    category: 'TOOLS & DEPLOYMENT',
    skills: [
      { name: 'Git & GitHub', level: 'Mahir' },
      { name: 'Vite', level: 'Mahir' },
      { name: 'Vercel Platform', level: 'Mahir' },
      { name: 'Postman API Testing', level: 'Menengah' },
    ],
  },
  {
    category: 'SPECIALIZED FOCUS',
    skills: [
      { name: 'Web Recapitulation Systems', level: 'Mahir' },
      { name: 'Interactive QR Code Workflows', level: 'Mahir' },
      { name: 'Real-time Live Scoreboards', level: 'Mahir' },
      { name: 'RESTful API Integration', level: 'Mahir' },
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

export const idAwards: AwardItem[] = [
  {
    id: 'award-1',
    title: 'SISTEM REKAPITULASI & LIVE SCORE AGP',
    category: 'DIGITALISASI SISTEM LOMBA',
    organization: 'Universitas Kuningan & Panitia AGP',
    year: '2025',
    description: 'Pengembangan dan implementasi perdana sistem rekapitulasi penilaian lomba kepramukaan terintegrasi dengan live scoreboard real-time yang memangkas waktu kalkulasi hasil perlombaan dari hitungan jam menjadi instan.',
    imageUrl: '/projects/rekapitulasiagp.png',
  },
  {
    id: 'award-2',
    title: 'PRESTASI AKADEMIK TEKNIK INFORMATIKA (IPK 3.84)',
    category: 'PENGHARGAAN AKADEMIK',
    organization: 'Fakultas Ilmu Komputer, Universitas Kuningan',
    year: '2024 - 2026',
    description: 'Pencapaian konsistensi akademik berpredikat Sangat Memuaskan dengan fokus keahlian pada mata kuliah Rekayasa Perangkat Lunak, Pemrograman Web Lanjut, dan Sistem Basis Data.',
    imageUrl: '/projects/sisteminformasipramuka2katapang.png',
  },
];

export const idCertifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Academy Indonesia',
    date: 'Mei 2024',
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
  {
    id: 'cert-2',
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Academy Indonesia',
    date: 'Agu 2024',
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
  {
    id: 'cert-3',
    title: 'Dasar Rekayasa Perangkat Lunak & Sistem Basis Data',
    issuer: 'Fakultas Ilmu Komputer Universitas Kuningan',
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
    issuer: 'Verifikasi Portfolio Mandiri',
    date: 'Feb 2025',
    credentialUrl: 'https://github.com/Prinaldi77',
  },
  {
    id: 'cert-6',
    title: 'Pengelolaan Repositori & Version Control (Git & GitHub)',
    issuer: 'Dicoding Academy Indonesia',
    date: 'Des 2024',
    credentialUrl: 'https://www.dicoding.com/certificates',
  },
];

export const idOrganizations: OrganizationItem[] = [
  {
    id: 'org-1',
    name: 'HIMPUNAN MAHASISWA TEKNIK INFORMATIKA (HIMA TI)',
    institution: 'Universitas Kuningan',
    period: '2024 — Sekarang',
    logoText: 'HIMA TI',
    roles: [
      {
        role: 'Pengurus Aktif HIMA TI',
        period: '2024 — Sekarang',
      },
      {
        role: 'Divisi Pengembangan Teknologi & Kaderisasi',
        period: '2024 — 2025',
      },
    ],
    programs: [
      {
        number: '01',
        title: 'Sistem Informasi & Rekapitulasi Lomba AGP',
        role: 'Ketua Tim Teknis Web & Rekapitulasi Nilai',
        location: 'Kuningan, ID',
        date: '2025',
      },
      {
        number: '02',
        title: 'Kaderisasi Mahasiswa Baru Teknik Informatika',
        role: 'Divisi Acara & Pendampingan Kader',
        location: 'Kuningan, ID',
        date: '2024 — 2025',
      },
      {
        number: '03',
        title: 'Seminar & Workshop Teknologi Mahasiswa',
        role: 'Panitia Publikasi & Dokumentasi Teknis',
        location: 'Kuningan, ID',
        date: '2024',
      },
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
  awards: idAwards,
  certifications: idCertifications,
  organizations: idOrganizations,
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
