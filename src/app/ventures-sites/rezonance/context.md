# Rezonance — Venture Landing Page

brand-connected: partial

## What It Is

Rezonance is an offline prepper device — a Samsung Galaxy XCover6 Pro pre-loaded with 180GB+ of offline knowledge. Wikipedia, medical guides (WikiMed), survival manuals, wikiHow, OpenStreetMap, 60,000+ Project Gutenberg books, Stack Exchange archives, and animated knot references. Ships with a Faraday EMP bag, 20,000mAh power bank, and quick-start guide.

Hardware: Samsung Galaxy XCover6 Pro (MIL-STD-810H, IP68, Snapdragon 778G, removable battery, MicroSD slot, Samsung Knox, eSIM support). Android with bloatware removed.

## Price & Sales Model

- Kit price: $497 (hero CTA) / $647 (pricing section — kit with accessories)
- Note: there's a price inconsistency between Hero ($497) and Pricing component ($647 title / $657 button). Needs resolution.
- Direct-response sales model via Stripe checkout (`NEXT_PUBLIC_STRIPE_REZONANCE_LINK`)
- Ships within 5-7 business days
- Coming soon: Travel Edition (eSIM, offline maps, privacy tools for international travelers)

## Target Audience

Preparedness-minded consumers. People who take grid-down scenarios seriously — not doomsday fantasists, but practical planners. Also targets travelers, remote workers, and anyone concerned about infrastructure fragility.

## Sales Narrative (Direct Response)

Problem → Agitation → Solution structure:
1. **Problem**: Power outages increasing (45% of U.S. customers hit in 2025, avg 12.8 hours). Grids aging, demand outpacing supply.
2. **Agitation**: Your $1,000 phone becomes a brick without signal/WiFi. Spain's grid collapsed in 5 seconds. 300M Americans at risk through 2028.
3. **Solution**: A rugged phone pre-loaded with everything you need. Removable battery, MicroSD knowledge library, mesh communication (Bitchat), offline maps, survival tools.

Sources cited: J.D. Power 2025, NERC, DOE July 2025, IEA Electricity 2026.

## Software Pre-loaded

**Field Tools**: Bitchat (mesh messaging), Organic Maps (offline nav), Compass, Flashlight, File Manager
**Knowledge Apps**: Kiwix (core engine for ZIM archives), Survival Manual, U.S. Gov Survival PDFs (FEMA, FM 21-76), First Aid IFRC, Animated Knots

## This Folder

This is the landing page, living inside the BBH Next.js monorepo at `bybetterhuman/src/app/ventures-sites/rezonance/`. It is NOT a standalone app.

### Structure
- `page.tsx` — main page, composes all section components
- `layout.tsx` — Rezonance-specific layout with custom fonts
- `rezonance.css` — all custom styles, animations, CSS variables
- `components/` — 13 section components (Hero, VideoSection, ProblemStats, Agitation, Solution, KnowledgeLibrary, SoftwareSuite, WhyThisPhone, TrustBar, Pricing, TravelTeaser, BrandBlock, Footer, Navbar)
- `data/` — structured content (stats.ts, knowledgeCards.ts, softwareApps.ts, phoneSpecs.ts)
- `hooks/` — useScrollReveal, useCountUp
- `assets/` — product/brand images (Higgsfield-generated)

### Design System
- **Theme**: Dark, tactical, utilitarian. Noise grain overlay. Signal interference animation.
- **Fonts**: Barlow Condensed (headings, uppercase), Source Sans 3 (body), JetBrains Mono (data/stats), Playfair Display italic (editorial accents)
- **Colors**:
  - Background: `#0C0C0C` (primary), `#111111` (secondary), `#1A1A1A` (cards)
  - Text: `#E8E4DC` (primary), `#8A8680` (secondary)
  - Accents: `#C8A962` (brass), `#4A9E6D` (green/checks), `#D4553A` (CTA red), `#5B9BD5` (data blue)
  - Borders: `#2A2A2A`
- **Animations**: Scroll-reveal (translateY 30px, 0.8s ease), chevron pulse, interference lines, marquee, CTA hover lift with red glow
- **Patterns**: Brass gradient dividers, card hover glow, sticky nav with blur backdrop

### Page Flow (top to bottom)
Navbar → Hero → VideoSection → ProblemStats → Agitation → Solution → KnowledgeLibrary → SoftwareSuite → WhyThisPhone → TrustBar → Pricing → TravelTeaser → BrandBlock → Footer

## Skills

When building or modifying this page, load `ops/skills/master-web-design.md` for frontend design guidelines, accessibility standards, React/Next.js best practices, and composition patterns.

## What to Skip

Everything outside this folder. Do not load BBH brand context, products context, or other venture-sites unless explicitly requested.