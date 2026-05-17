# Kilimanjaro True Venture - Project Guidelines

## Active Learning Curriculum

This project is a **low-stakes vehicle for learning advanced vibe coding** for the user (a beginner programmer with course exposure). Building Abu's site is the side effect; the user's skill development is the primary goal.

- **Curriculum:** `LEARNING.md` — 8 modules, ~22 lessons, structured/school-esque
- **Progress tracker:** `PROGRESS.md` — checkboxes per lesson; current state of the journey

**At session start:** read `PROGRESS.md` to find the next unchecked lesson. The user may say "next lesson" (start it), "where am I?" (summarize without starting), or "skip to module N."

**Every session follows the Session Protocol** in `LEARNING.md`. Name the primary skill at the start of the lesson. After the session, append a one-line entry to the Session Log in `PROGRESS.md` and tick the lesson's checkbox.

**Calibration:** explanations should name patterns ("this is `useState`") without re-explaining fundamentals (what React is). The Skills Matrix in `LEARNING.md` is the user's vocabulary — use those tags in conversation.

## Project Overview

**Kilimanjaro True Venture** is a premium dark-themed travel website showcasing mountain trekking, wildlife safaris, beach holidays, and cultural experiences in Tanzania.

- **Owner**: Abdallah Athumani (Abu)
- **Tech Stack**: Next.js 16, React 19, Tailwind CSS 4, TypeScript
- **Status**: Active development with modern design overhaul
- **Key Focus**: Nature photography, modern UI, seamless user experience

## Design System

### Color Palette
- **Primary**: Deep Navy (`#1A3A5C`) - trust, sophistication, depth
- **Secondary**: Mustard Gold (`#D4A843`) - warmth, action, CTAs
- **Accent**: Coral Pink (`#E94560`) - energy, highlights, attention
- **Background**: Very Dark (`#0F1923`) - premium, luxe feel, dark theme
- **Text**: Off-White (`#F0F0F0`) - on dark backgrounds, excellent contrast
- **Neutrals**: Dark grays for supporting text and secondary elements

### Design Principles
- **Dark & Luxe**: Premium dark theme with sophisticated navy + gold accents
- **Nature-First**: Large, high-quality nature photography as hero elements (stands out on dark)
- **Clean Layout**: Dark cards with subtle borders, ample spacing
- **Interactive**: Hover effects, smooth transitions (300ms) with gold highlights
- **Responsive**: Mobile-first, works on all screen sizes

### Component Styling Rules
- Cards: Dark background (#162636), subtle borders, minimal shadows
- Buttons: Primary (navy) + Secondary (mustard gold) with hover states (gold accent)
- Images: Rounded corners (`rounded-xl` or `rounded-2xl`), bordered, quality photos (pop on dark)
- Text: Off-white (#F0F0F0) body text, bright for headings and emphasis
- Sections: Dark backgrounds with subtle color variations

## Code Standards

### TypeScript & Quality
- **Strict TypeScript**: No `any` types, all types explicitly defined
- **ESLint rules**: Follow Next.js defaults
- **No console.log** in production code (use proper logging)
- **Component naming**: PascalCase for files and components
- **File naming**: kebab-case for folders, PascalCase for component files

### File Organization
```
app/
├── page.tsx (Home)
├── layout.tsx (Root layout)
├── globals.css (Global styles)
├── tours/
│   ├── kilimanjaro/page.tsx
│   ├── meru/page.tsx
│   ├── safaris/page.tsx
│   ├── zanzibar/page.tsx
│   └── cultural/page.tsx
├── about/page.tsx
├── gallery/page.tsx
├── contact/page.tsx
└── api/inquiry/route.ts

components/
├── Hero.tsx
├── Navbar.tsx
├── Footer.tsx
├── TourCard.tsx
├── CTABanner.tsx
└── ...

lib/
├── constants.ts (All data: tours, team, testimonials)
├── safari-packages.ts (Safari tour details)
└── [other utilities]

public/images/ (All nature photos, 17 high-quality images available)
```

### Import Aliases
- Use `@/` for absolute imports (e.g., `@/components/Hero`, `@/lib/constants`)
- Never use relative imports like `../../../`

## Writing & Copy Standards

**For all copy work, `BRAND.md` is the source of truth.** Read it before writing any copy. It owns voice, audience, anti-patterns, and worked examples. Don't restate its rules here — keep this section as a pointer so the two files can't diverge.

## Content & Features

### Complete Features
✅ Home page with featured tours & testimonials
✅ About page with founder story & team profiles
✅ Kilimanjaro routes with day-by-day itineraries (Machame detailed, others summarized)
✅ Mount Meru trek details
✅ Safari packages (Serengeti, Ngorongoro, Tarangire, Mkomazi)
✅ Zanzibar holidays
✅ Cultural experiences
✅ Gallery (showcasing nature photos)
✅ Contact form
✅ Charity section (Abu Hope Foundation)
✅ Team profiles (8 team members)

### Contact Info & Pricing — source of truth

Never hardcode contact info or pricing. Always read from `lib/constants.ts`:
- `COMPANY` → phone, email, address, company name, slogan
- `KILIMANJARO_ROUTES` and `SAFARI_PACKAGES` → starting prices

If a value isn't in `lib/constants.ts`, ask before inventing one.

## Images & Assets

Available photos live in `/public/images/`. List the folder before assuming what's there — the inventory changes as photos are added.

### Image Best Practices
- Always use Next.js `Image` component (lazy loading, optimization)
- Set `fill` property for background images
- Use `priority` for above-the-fold images
- Use `sizes` for responsive images
- All images must have descriptive `alt` text

## Things to AVOID ❌

### Design
- ❌ Light backgrounds (we use DARK navy/black theme, not white)
- ❌ Placeholder/generic images (use real nature photos from `/public/images/`)
- ❌ Low contrast text on dark (use #F0F0F0 off-white for excellent readability)
- ❌ Overwhelming color - stick to navy/mustard/coral palette, use gold sparingly
- ❌ Breaking the responsive layout on mobile

### Code
- ❌ Inline styles (use Tailwind classes)
- ❌ `!important` in CSS
- ❌ Hardcoding text that should be in constants
- ❌ Deep prop drilling (3+ levels - use Context instead)
- ❌ Forgetting to import types from Next.js

### Content
- ❌ Wrong contact info (always use values from COMPANY object)
- ❌ Placeholder itineraries (use detailed, real content)
- ❌ Inconsistent team member info (check constants first)
- ❌ Pricing that doesn't match constants
- ❌ Outdated social media handles

### Performance
- ❌ Images without `next/image` (use Next.js Image always)
- ❌ Unoptimized large files
- ❌ Missing `alt` attributes on images
- ❌ Slow page transitions

## Testing Checklist

Before considering any page "done", test:

- [ ] **Visual Design**
  - Page matches the dark/luxe design system (navy background, mustard CTAs, off-white text)
  - Colors match design system
  - All images load correctly and look crisp
  - Typography is readable (headings, body text, links)
  - No placeholder text or images visible

- [ ] **Responsive Design**
  - Mobile (375px): Readable, no overflow, touch-friendly buttons
  - Tablet (768px): Proper spacing, 2-column layouts working
  - Desktop (1200px): Full experience, proper centering

- [ ] **Images**
  - All images load (no 404 errors in console)
  - Images are from `/public/images/` (real nature photos)
  - Image quality is good (no blurry or stretched)
  - Alt text is descriptive

- [ ] **Navigation**
  - Navbar works on all pages
  - Links go to correct pages
  - Mobile menu opens/closes properly
  - No broken links

- [ ] **Content**
  - Contact info is correct (from COMPANY object)
  - Pricing matches constants
  - Team info is accurate
  - No typos or placeholder text
  - All sections have meaningful content

- [ ] **Performance**
  - Page loads quickly (under 3 seconds)
  - No console errors or warnings
  - Lighthouse score acceptable (70+)
  - Images are optimized

- [ ] **Functionality**
  - Forms work (contact form submits)
  - CTAs are clickable and go to right place
  - Buttons have hover states
  - Links are understandable

## Learning & Education

Teaching mode is governed by `LEARNING.md` (curriculum) and `PROGRESS.md` (tracker). The Active Learning Curriculum section at the top of this file points there. Don't restate teaching style here — the calibration ("name patterns without re-explaining fundamentals") is in the Active Learning Curriculum section above.

---

## How to Work With Me

### Ask Before Making Changes
- Large design overhauls (changing colors, fonts, layout structure)
- Adding major new sections or pages
- Removing or significantly refactoring existing features
- Anything affecting user experience significantly

### Small Changes I Can Make Independently
- Updating text content
- Adding new tour/package details
- Fixing broken links or typos
- Improving performance
- Updating contact information
- Adding new images/galleries

### When You Feedback
- If I propose something, give clear yes/no
- If you want changes, be specific (e.g., "make the buttons bigger" vs "the buttons look fine")
- Share wireframes/screenshots if you want specific layouts
- Mention if something doesn't match your vision early

### Commits & Versions
- I commit frequently with clear messages
- Never force-push unless you specifically ask
- Each feature/fix gets its own commit
- Keep changesets focused and reviewable

## Known Issues & Quirks

### Turbopack (Next.js 16)
- Occasionally shows intermittent compilation warnings
- Clear `.next/` cache if you see strange errors
- Hard refresh browser (Cmd+Shift+R) if changes don't appear

### Image Quality Config
- Image quality set to 75 and 85 in next.config.ts
- Don't change without updating the config
- Use `quality={85}` for above-the-fold hero images

## Browser Support
- Modern browsers only (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- No IE11 support needed

---

**Last Updated**: May 2026
**Current Theme**: Dark & Luxe, Nature-Focused
**Status**: Active Development
