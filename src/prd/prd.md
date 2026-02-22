# Product Requirements Document (PRD)
**Project Title**: Masonic Lodge Website
**Document Status**: Draft
**Target Vibe**: Professional, Solemn, Standardized, Authoritative

---

## 1. Executive Summary
The goal is to produce a static, highly professional frontend website for a Masonic Lodge. The website will serve as a digital front door, providing information about the lodge, its members, and a way for interested parties to make contact. There are no backend database features required.

## 2. Brand Identity & Theme
- **Voice**: Respectful, traditional, sharp, and authoritative.
- **Color Palette**: 
  - `Lodge Navy` (#0A192F)
  - `Masonic Gold` (#D4AF37)
  - `Pure White` (#FFFFFF)
  - `Charcoal` (#1A1A1A) for text
- **Typography**:
  - Headings: Serif (`Playfair Display` or similar traditional font)
  - Body: Sans-Serif (`Inter` or similar clean font)
- **UI Guidelines**: 
  - **Sharp Edges**: No overly rounded corners (`rounded-none` or `rounded-sm`).
  - **Whitespace**: Generous spacing to convey gravity.
  - **Animations**: Strictly limited to slow fades (800ms+). No bouncy, playful, or wild animations.
  - **Borders**: Thin, high-contrast borders (gold or slate).

## 3. Core Pages & Sections

### 3.1 Landing Section (Hero)
- **Visual**: Full-width, high-resolution placeholder banner showcasing the dignity of the lodge (architectural elements, pillars).
- **Text**: 
  - Lodge Name & Number: "CRESCENT MASONIC LODGE NO. 419"
  - District: "MASONIC DISTRICT R7 - Cebu, Bohol, and Siquijor"
  - Jurisdiction: "UNDER THE JURISDICTION OF THE MOST WORSHIPFUL GRAND LODGE OF FREE AND ACCEPTED MASONS OF THE PHILIPPINES"
  - Official Quote: "A Brotherhood of Men under the Fatherhood of God"
- **Action**: Single "Discover Our Lodge" or scroll-down indicator.

### 3.2 About Us (Description of the Lodge)
- **Content**: History, mission, and values of the lodge.
- **Layout**: Two columns (Text + Classic Image). Clean typography with gold accents.

### 3.3 Members (Officers & Brethren)
- **Content**: Grid display of the lodge's leadership/officers. Specifically tracking Term 2026 with the following elected officers: Worshipful Master (Bro. Elizir Lao), Senior Warden (Bro. Paul Pioquinto), Junior Warden (Bro. Noah Caoile), Treasurer (Bro. Ricky Bendanillo), Secretary (VW Roldan Pepito), Auditor (VW Lock Sestoso), Harmony Officer (VW Rhomel Caudor).
- **Layout**: Strict grid layout (Bento or classical grid) featuring portrait photos (3:4 ratio), Name, and Masonic Title. Historical terms maintain same titles but use placeholders for names.
- **Card Style**: Sharp edges, subtle drop shadow, zero bounce on hover.

### 3.4 Inquiry and Contact Us
- **Content**: Contact form (Name, Email, Subject, Message) and physical address/meeting times.
  - **Official Address**: Datu Lapu-Lapu Temple, Babag II Rd, Cordova, Cebu, 6017
- **Layout**: High-contrast, sharply-defined input fields. Minimalist submit button. Strict validation states.

## 4. Technical Requirements
- **Framework**: Next.js (App Router), static site generation.
- **Styling**: Tailwind CSS.
- **Components**: shadcn/ui configured for sharp edges.
- **Animations**: Framer Motion (only linear/ease-out fades permitted) or strict subset of Magic UI components. Banned Magic UI components include: Confetti, Meteors, ScratchToReveal, and anything playful.
- **Responsiveness**: Mobile-first design but equally authoritative on desktop displays.

## 5. Success Criteria
- [ ] Website passes automated WCAG AAA contrast checks.
- [ ] Zero occurrence of playful or bouncy animations on the live site.
- [ ] Load time < 2 seconds.
- [ ] Visual identity strictly adheres to Navy/Gold/Charcoal palette.
