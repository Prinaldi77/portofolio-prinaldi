# Portfolio Design System & Guidelines

## Core Principles & Vibe
- **Vibe**: High-contrast, Neo-Brutalist, structured tech aesthetic with clean borders and tactile elevation.
- **Rhythm**: 4px grid, line-height 1.63 on body text, hard drop shadows, pill badges.
- **Stack**: React 19, TypeScript, Tailwind CSS, Vite, Lucide Icons, Framer Motion.

---

## Design Tokens

### Colors
- **Surface / Background (Light)**: `#FFFFFF`
- **Surface / Background (Dark)**: `#0A0A0A`
- **Text (Light)**: `#000000`
- **Text (Dark)**: `#FFFFFF`
- **Border (Light)**: `#000000`
- **Border (Dark)**: `#262626` / `#404040`
- **Hard Shadow (Light)**: `4px 4px 0px 0px #000000`
- **Hard Shadow (Dark)**: `4px 4px 0px 0px #FFFFFF`

### Radii & Shadows
- **Buttons / Pills**: `rounded-full` or `rounded-xl`
- **Cards**: `rounded-3xl`
- **Inputs**: `rounded-xl`
- **Elevation**: `shadow-hard` and `shadow-hard-sm`

---

## Layout & Components Pattern

1. **Floating Badges / Pills**:
   - Structured skill badges with monochrome borders, clear contrast, and tactile shadows.
2. **Fixed Bottom Status Bar**:
   - Bottom status bar containing "Open for Work" pulse indicator, location, current date, and quick drawer actions.
3. **Timeline / Journey**:
   - Responsive vertical timeline with archived milestone indicators and technical badges.
4. **Interactive Guestbook Drawer**:
   - Slide-out drawer with OAuth trigger actions (GitHub/Google) and visitor log integration.
5. **Dark / Light Mode**:
   - Full WCAG AA contrast compliance across both color modes with persistent user preference.
