# Muhamad Prinaldi — Personal Portfolio

A modern, high-contrast Neo-Brutalist personal developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**. Engineered with a focus on structured systems, visual clarity, WCAG-compliant contrast, and clean code architecture.

---

## ✨ Features

- **Neo-Brutalist Design System**: Bold geometric borders, modular bento grids, tactile hard shadows, and intentional typography.
- **Dark & Light Mode Switcher**: Global theme toggle with persistent `localStorage` state and system preference (`prefers-color-scheme`) support.
- **Bilingual Content (EN / ID)**: Instant language switching between English and Indonesian with localized labels, biographies, and project metrics.
- **Authentic Project Showcase**:
  - **AGP Value Recapitulation & Reporting System**: Full-stack application built with Next.js and TypeScript for student grade management, automated aggregation queries, role-based access control (RBAC), and academic reporting.
  - **Katapang 2 Scout Information System**: Organization management platform engineered using pure Node.js and Express without heavy frontend frameworks, featuring RESTful routing and normalized MySQL schemas.
  - **Photobooth Karta Digital Web App**: Interactive browser photobooth built with Next.js and deployed on Vercel, featuring real-time camera capture, thematic frame overlays, and instant client-side photo export.
- **My Journey (Milestones Timeline)**: Alternating vertical timeline documenting milestones across university studies, independent systems, and production engineering.
- **Modular Guestbook Drawer**: Slide-out guestbook interface with Supabase client integration ready for real-time visitor comments and social authentication.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile with a persistent status bar and mobile-first navigation.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend / Database**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prinaldi77/portofolio-prinaldi.git
   cd portofolio-prinaldi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables (Optional for Guestbook):
   Create a `.env` or `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
my-portofolio/
├── public/
│   ├── assets/           # Personal portrait photo and static icons
│   ├── projects/         # Authentic project screenshots
│   └── resume.pdf        # Downloadable resume document
├── src/
│   ├── components/       # Modular UI components
│   │   ├── AboutSection.tsx
│   │   ├── BottomBar.tsx
│   │   ├── Footer/
│   │   ├── GuestbookDrawer.tsx
│   │   ├── Hero.tsx
│   │   ├── JourneySection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── StatusBar/
│   ├── data/
│   │   └── portfolioData.ts  # Localized content data (EN & ID)
│   ├── lib/
│   │   └── supabase.ts       # Supabase client configuration
│   ├── types/
│   │   └── portfolio.ts      # TypeScript interfaces and data models
│   ├── App.tsx               # Root application layout and theme provider
│   ├── index.css             # Base styles, CSS variables, and design tokens
│   └── main.tsx              # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 👤 Author

**Muhamad Prinaldi**
- GitHub: [@Prinaldi77](https://github.com/Prinaldi77)
- Instagram: [@prnldiiii](https://www.instagram.com/prnldiiii/)
- Email: [muhamadprinaldi123@gmail.com](mailto:muhamadprinaldi123@gmail.com)
