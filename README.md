
A React-based digital wedding invitation with intro poster, video transition, and full scrollable website.

## Project Structure

```
wedding-invitation/
├── public/
│   ├── index.html          — HTML shell with Google Fonts
│   ├── intro-poster.jpg    — ← Place your intro poster image here
│   ├── intro-video.mov     — ← Place your intro video here
│   └── hero-video.mp4      — ← Place your hero/background video here
│
└── src/
    ├── index.js            — React entry point
    ├── index.css           — Global CSS variables & keyframes
    ├── App.js              — Root component (manages poster/video/site phases)
    ├── App.css             — Site-level transitions
    │
    └── components/
        ├── IntroPoster.js/.css     — Phase 1: Poster tap → Phase 2: Video play → fade to site
        ├── HeroSection.js/.css     — Video background (freezes on last frame, never loops)
        ├── CountdownSection.js/.css — Live countdown to 20 June 2026 (sage green bg)
        ├── WelcomeSection.js/.css  — Welcome text + Arabic dua
        ├── MomentsSection.js/.css  — Auto-advancing image slider with swipe support
        ├── DetailsSection.js/.css  — Ceremony & reception cards (dark bg)
        ├── RSVPSection.js/.css     — RSVP form with thank-you state
        └── Footer.js/.css          — Footer with Quranic verse
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Place your assets in /public:
#    - intro-poster.jpg
#    - intro-video.mov
#    - hero-video.mp4

# 3. Start development server
npm start

# 4. Build for production
npm run build
```

## Flow

1. **Intro Poster** — Full-screen sage green envelope poster. User taps → plays intro video.
2. **Intro Video** — Plays intro-video.mov. When it ends (or user clicks Skip) → fades out overlay.
3. **Wedding Site** — Fades in. hero-video.mp4 plays once and freezes on the last frame as a static background.

## Customization

- **Names / Date**: Edit `HeroSection.js`, `CountdownSection.js`, `DetailsSection.js`, `Footer.js`
- **Colors**: Change CSS variables in `index.css`
- **Photos**: Replace placeholder slides in `MomentsSection.js` with real `<img>` tags
- **Venue Details**: Update `DetailsSection.js`

## Design

- **Fonts**: Great Vibes (script), Cormorant Garamond (serif), Cinzel (caps), Amiri (Arabic)
- **Colors**: Sage green (#5a6b52), Cream (#f5f0e8), Gold (#c9a84c), Charcoal (#2c3328)
- **Animations**: CSS-native fadeUp, shimmer, bounceDown, pulse
