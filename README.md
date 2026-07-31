# Naan & Gyro — Royal Indian-Turkish Fusion Kitchen Portal

> *"Where the Bosphorus Meets the Spice Route."*

A high-converting, dark editorial digital ordering portal and table reservation system built for **Naan & Gyro**—a premium Indian-Turkish fusion kitchen. Designed with high-contrast food photography aesthetics, dark obsidian backgrounds (`#0B0B0D`), charcoal surface cards (`#18181B`), warm zinc borders (`#27272A`), and saffron/amber highlights (`#F59E0B` / `#D97706`).

---

## 1. Business Concept & Value Proposition

Naan & Gyro bridges two rich imperial culinary traditions: Istanbul's wood-fired stone hearths and Punjab/Hyderabad's royal tandoors and spice routes. 

### Key Features:
- **Interactive Culinary Tasting Tabs**: Seamless category tab switches powered by Framer Motion allowing guests to preview wood-fired Pides, charred grills, Dum Biryanis, and sweets.
- **High-Converting Menu Grid**: Responsive 3-column dish showcases featuring food photography assets, dietary indicators (`Halal`, `Chef Special`, `Vegetarian`), spiciness indicators, and instant cart additions.
- **Table Reservation Wizard**: Slide-over modal allowing guests to select party sizes, dates, time slot chips, seating zones (Main Dining, Ottoman Terrace, Chef's Hearth Counter), and receive instant booking reference codes.
- **Express Order Drawer**: Slide-over cart drawer with real-time subtotal, express delivery fee calculation, tax breakdown, and instant order placement feedback.

---

## 2. Tech Stack & Key Dependencies

- **Framework**: Next.js 14+ (App Router, React Server & Client Components)
- **Language**: TypeScript 5+ (Strict mode enabled)
- **Styling**: Tailwind CSS v3 with dark luxury culinary design tokens & custom PostCSS
- **Animations & Icons**: Framer Motion (`framer-motion`) + Lucide React (`lucide-react`)
- **Fonts**: Google `Playfair Display` (editorial serif) and `Outfit` (modern sans) via `next/font`
- **SEO & Structured Data**: Dynamic OpenGraph, Twitter Cards, and Schema.org `Restaurant` JSON-LD

---

## 3. Quick Start & Execution Commands

### Prerequisites
Ensure Node.js v18+ and npm v9+ are installed.

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle & test strict TypeScript types
npm run build

# 4. Start production server
npm run start
```

---

## 4. Environment Variables Setup

Create a `.env.local` file in the root directory if integrating external backend services (e.g. Stripe, Twilio for SMS reservation confirmation):

```env
# Optional environment variables
NEXT_PUBLIC_SITE_URL=https://naanandgyro.com
NEXT_PUBLIC_RESERVATION_API_KEY=your_key_here
```

---

## 5. Directory Tree Structure

```
Naan & Gyro/
├── public/
│   └── images/                     # 43+ High-resolution editorial food photography assets
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind base, dark theme tokens, glassmorphism
│   │   ├── layout.tsx              # Root layout, Google Fonts, JSON-LD Schema
│   │   └── page.tsx                # Main portal page & interactive state manager
│   └── components/
│       ├── Header.tsx              # Glassmorphic nav bar, cart counter & CTA
│       ├── HeroSection.tsx          # Headline, subhead, dual CTAs, Framer Motion tabs
│       ├── MenuGrid.tsx            # 3-Column fusion dish grid & quick add actions
│       ├── StorySection.tsx        # Brand narrative, wood-fired hearth showcase
│       ├── ReservationModal.tsx    # Table booking wizard & instant confirmation
│       ├── OrderDrawer.tsx         # Slide-over cart, quantity modifiers & checkout
│       └── Footer.tsx              # Location details, operating hours & Culinary Club
├── .gitignore                      # Hygiene rules for node_modules, build outputs
├── package.json                    # Project metadata & dependencies
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Custom culinary color tokens & utilities
└── tsconfig.json                   # Strict TypeScript compiler options
```
