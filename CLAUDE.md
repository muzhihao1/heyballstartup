# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 billiards event brand website for 耶氏台球赛事运营中心 (Yesh Billiards Event Center), targeting sponsors, billiard hall owners, and event participants. The site showcases tournament highlights, historical results, and partnership opportunities.

**Primary Goal**: Drive consultation inquiries for sponsorships and venue partnerships via hotline `4000089147` and WeChat `Yes17787147147`.

## Technology Stack

- **Framework**: Next.js 15.5.4 with App Router + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/postcss`)
- **Build Tool**: Turbopack (Next.js built-in)
- **Deployment Target**: Vercel or static hosting
- **Language**: Chinese (Simplified) - all content is in zh-Hans

## Common Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack at http://localhost:3000

# Production
npm run build            # Build for production with Turbopack
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint (next/core-web-vitals + next/typescript)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with Noto Sans SC font
│   ├── page.tsx         # Single-page homepage with all sections
│   └── globals.css      # Global Tailwind styles
├── components/
│   ├── site-header.tsx  # Sticky header with navigation
│   ├── contact-bar.tsx  # Floating contact CTA bar
│   └── copy-button.tsx  # WeChat ID copy button
└── data/                # Content configuration files
    ├── events.ts        # Tournament history & results
    ├── highlights.ts    # Key metrics (venues, participants, views)
    ├── services.ts      # Service offerings
    ├── brand.ts         # Company info & strengths
    ├── process.ts       # Cooperation workflows
    ├── prizes.ts        # Prize structure
    ├── faq.ts           # FAQ content
    └── contact.ts       # Contact information constants

public/
├── videos/              # Hero & highlight videos (.mp4)
└── [static assets]      # Images, SVGs
```

## Architecture & Design Patterns

### Single-Page Application (SPA)
- All content is rendered on a single page (`src/app/page.tsx`) with anchor-based navigation (`#hero`, `#events`, `#brand`, etc.)
- Header navigation uses hash links for smooth scrolling between sections
- No separate routes - this is intentional for simple content structure

### Content Management Strategy
- **All content is configuration-based** in `src/data/*.ts` files
- Each data file exports typed arrays/objects for type safety
- To update content (e.g., tournament results, company info), edit the relevant data file - **never hardcode content in components**

### Data Structure Examples
```typescript
// src/data/events.ts
export type EventItem = {
  id: string;
  name: string;
  location: string;
  dateRange: string;
  status: "completed" | "upcoming";
  highlight: string;
  players: EventPlayer[];
  media?: { video?: string; poster?: string };
};
```

### Component Patterns
- **Client Components**: Require `"use client"` directive (e.g., `site-header.tsx`, `copy-button.tsx`) for interactivity
- **Server Components**: Default for static content (e.g., `page.tsx` sections)
- Use Tailwind's mobile-first approach - base styles target mobile, use `lg:` prefix for desktop breakpoints

## Design System

### Color Palette (Tailwind Custom)
```css
/* globals.css defines custom colors */
--brand-navy: #0E1A36    /* Primary background */
--brand-gold: #E9C46A    /* Accent/CTA color */
```

### Typography
- **Font**: Noto Sans SC (Google Fonts) with weights 400/500/600/700
- **Hierarchy**: Mobile-first sizing with `lg:` breakpoints for larger screens
- All text content is in Chinese - maintain consistent language

### Key UI Patterns
- **CTA Buttons**: Gold background (`bg-brand-gold`) with navy text, rounded-full
- **Cards**: Border with `border-white/10`, subtle backgrounds `bg-white/5`
- **Overlay Effects**: Use border-overlay class (defined in globals.css)
- **Mobile Navigation**: Hamburger menu with slide-down panel (< lg breakpoint)

## Content Guidelines

### Brand Voice
- **Tagline**: "耶氏台球，独享台球的快乐" (Yesh Billiards, Exclusive Billiards Joy)
- Maintain professional yet passionate tone focused on business value for sponsors/venues
- Use data-driven language (metrics, results, proven track record)

### Contact Information (Critical - Never Change Without Approval)
- Hotline: `4000089147` (defined in `src/data/contact.ts`)
- WeChat: `Yes17787147147`
- These appear in multiple locations - use constants from `contact.ts`

### Video Assets
Three primary videos in `public/videos/`:
- `hero.mp4` - Main promotional video
- `highlight-1.mp4` - Sports City venue
- `highlight-2.mp4` - Jiamei University venue

Videos use `<video>` tag with `controls`, `muted`, `playsInline`, and `preload="metadata"`

## Development Workflow

### Adding New Tournament Results
1. Edit `src/data/events.ts`
2. Add new `EventItem` object with all required fields
3. Set `status: "completed"` for finished events, `"upcoming"` for future events
4. Update `players` array with top 4 finishers
5. Optionally add `media.video` path if available

### Updating Company Information
- Edit `src/data/brand.ts` for company intro, strengths, timeline
- Keep data structure consistent with TypeScript types

### Modifying Navigation
- Navigation items defined in `src/components/site-header.tsx` (`navItems` array)
- Ensure anchor links match section IDs in `page.tsx`

## Important Notes

- **Mobile-First**: Design breakpoint is 375-414px mobile, expand with `lg:` for desktop
- **Turbopack**: Build and dev use Turbopack - do not add webpack configurations
- **TypeScript Strict Mode**: Enabled - ensure type safety for all new code
- **No Router Changes**: This is intentionally a single-page site - avoid adding Next.js routing unless explicitly required
- **Path Alias**: Use `@/*` for imports (maps to `./src/*`)

## Future Enhancements (Planned)
- Leaderboard/points system integration (API endpoint placeholder)
- CMS integration (Contentful/Strapi) for non-technical content updates
- Analytics tracking for video playback and CTA conversions
- SEO schema markup for sports events and video objects
