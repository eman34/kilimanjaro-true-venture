# Kilimanjaro True Venture - Project Guidelines

## Project Overview

**Kilimanjaro True Venture** is a premium editorial-luxe travel website showcasing mountain trekking, wildlife safaris, beach holidays, and cultural experiences in Tanzania.

- **Owner**: Abdallah Athumani (Abu)
- **Tech Stack**: Next.js 16, React 19, Tailwind CSS 4, TypeScript
- **Status**: Active development with modern design overhaul
- **Key Focus**: Nature photography, modern UI, seamless user experience

## Design System

### Color Palette — Olive + Gold on Cream
Token names are color-descriptive. If the palette ever changes hue family again, rename tokens in the same pass — a token name must never lie about its value.

- **`paper`** `#F7F2E3` — page background AND navbar background (warm cream)
- **`parchment`** `#EFE7D0` — card surface, form-wrapper bg, light bands (deeper cream)
- **`olive`** `#3A4226` — body text, nav text, dark bands (Footer, CTABanner), hero overlays (dark olive ink)
- **`olive-deep`** `#262B16` — gradient depth, text on gold buttons, `.btn-accent` hover
- **`khaki`** `#5E5F45` — muted/secondary text
- **`gold`** `#D9A441` — THE accent: CTA button fills, accents/headings on dark olive surfaces. NEVER as text or icon strokes on cream (fails contrast at 2.0:1)
- **`gold-deep`** `#855D0D` — the only gold permitted as small text or icons on cream (bronze): links, active nav, focus rings, CTA hover bg
- **`taupe`** `#DFD5B8` — borders, dividers (warm sand)

Tokens live in `app/globals.css` `@theme` block. Use Tailwind utility classes (`bg-paper`, `text-olive`, `border-taupe`, etc.) — do not reach for hex literals in JSX.

### Design Principles
- **Editorial luxe**: Library / national park lodge / boutique-hotel restraint. Photos do the work; the palette is the frame.
- **Light page, subtle navbar**: Page bg is paper. Navbar uses the same paper with a thin `border-b border-taupe` — sticky and opaque, but has no color block at the top.
- **One confident accent**: Gold is the only saturated color on the page. Use it for CTAs, focus rings, hover highlights, and the occasional brand mark — sparingly. On cream surfaces gold text/icons must be `gold-deep`.
- **Selectively dark**: Hero photo overlays use olive (`bg-olive/30`–`/45`) for legibility on bright photos. The CTABanner block and the Footer band use `bg-olive` as dark anchors. Gallery lightbox keeps `bg-black/90` for photo-viewing context. The page bg itself stays cream — the site must never read dark-themed.
- **Responsive**: Mobile-first, works on all screen sizes.

### Component Styling Rules
- **Navbar**: `bg-paper border-b border-taupe sticky top-0 z-50`. Logo is the brand image `/images/brand/logo-nav.png` (tagline-free crop) rendered with `mix-blend-multiply` so its white background melts into the cream navbar. Full logo with tagline lives at `/images/brand/logo.png`; vector source is `docs/assets/logo.pdf`. The multiply trick only works on light surfaces — never place these assets on dark olive (the Footer keeps its text lockup). Nav links `text-olive hover:text-gold-deep`. Active link `text-gold-deep font-semibold`.
- **Cards**: `bg-parchment border border-taupe` with `hover:border-gold/30` for interactive cards.
- **Buttons**: `.btn-primary` (gold fill, `text-olive-deep`, hover flips to `bg-gold-deep text-paper`) and `.btn-accent` (olive, secondary heavy action) — defined in `globals.css`.
- **Form inputs**: `bg-paper border-taupe` inside a `bg-parchment` form card (inputs are lighter than the wrapper — "carved-out" feel). Focus state uses `border-gold-deep`.
- **Images**: Rounded corners (`rounded-xl` or `rounded-2xl`), `border-taupe` outline on cards, photos from `/public/images/`.
- **Text**: `text-olive` for body and nav; `text-khaki` (or `text-olive/60`–`/70`) for muted; `text-paper` only when on a dark surface (Hero overlay, CTABanner, Footer band, lightbox controls). Gold-reading text on cream is always `text-gold-deep`.
- **Sections**: Default page bg is `bg-paper`. Use `bg-parchment` for distinct sections that need a slightly deeper tone. Use `bg-olive` for dramatic anchor blocks (CTABanner, Footer).
- **SectionDivider**: the torn-edge SVG band lives ONLY at the top of the two dark olive bands (CTABanner, Footer), cream fill. Do not add it elsewhere.
- **Icon badges**: feature icons on light bands sit in a 56px circle — `w-14 h-14 rounded-full border-2 border-olive/70 text-olive`, icon `w-7 h-7`.

## Code Standards

### TypeScript & Quality
- **Strict TypeScript**: No `any` types, all types explicitly defined
- **`npm run typecheck` is the quality gate** — run it before considering work done (no separate linter)
- **No console.log** in production code (use proper logging)
- **Component naming**: PascalCase for files and components
- **File naming**: kebab-case for folders, PascalCase for component files

### File Organization
```
app/
├── page.tsx (Home)
├── layout.tsx (Root layout + site metadata)
├── globals.css (Global styles + design tokens)
├── sitemap.ts / robots.ts (SEO)
├── tours/
│   ├── kilimanjaro/page.tsx + [route]/page.tsx (6 route detail pages)
│   ├── safaris/page.tsx + [safari]/page.tsx (7 package detail pages)
│   ├── meru/ · zanzibar/ · cultural/ · gorilla-trekking/
│   ├── charity-climb/ · other-adventures/
├── about/ · gallery/ · contact/ · faq/ · charity/
└── api/inquiry/route.ts (contact form handler)

components/ (Navbar, Footer, Hero, InquiryForm, GalleryGrid,
             TestimonialCarousel, RouteSpread, SafariSpread, RouteItinerary,
             AscentProfile, SearchModal, CTABanner, JsonLd, ...)

lib/
├── constants.ts (ALL content: routes, SAFARIS, team, testimonials, COMPANY)
├── content.ts (safari accessors — getSafaris/getSafari)
└── site.ts (canonical site URL)

public/images/ (photo library — list the folder before assuming contents)
```

### Import Aliases
- Use `@/` for absolute imports (e.g., `@/components/Hero`, `@/lib/constants`)
- Never use relative imports like `../../../`

## Writing & Copy Standards

**For all copy work, `BRAND.md` is the source of truth.** Read it before writing any copy. It owns voice, audience, anti-patterns, and worked examples. Don't restate its rules here — keep this section as a pointer so the two files can't diverge.

## Per-Page Depth Strategy

Different pages do different jobs. The site is not uniformly restrained — restraint is for the home page. **Density is the trust-building work on tour pages.** Calibrate depth to the page's job, not to a global aesthetic.

| Page | Job | Depth | Density signals |
|---|---|---|---|
| **Home** | Earn the first WhatsApp message | **Light** | ≤3 sentences per section, photo-led, ≤8 trust signals from `AUDIENCE.md` §8, founder line, no SME-level operational detail |
| **About / Founder** | Make the brand a person | **Medium** | Long-form Abu story, named team with years/summits, real office photo (Sekei), year-stamped milestones |
| **Kilimanjaro routes** | The SME proof page; survives a 41-day nurture | **Heavy** | Daily itinerary with altitude + km, route success rate by day count, AMS protocol, evacuation procedure, oxygen carried per expedition, gear standards, named guides, what's-included line-item, porter-wage stance |
| **Safari** | SME proof at slightly lower density | **Medium-heavy** | Daily itinerary with named camps, vehicle ratio, guide credentials, seasonality (migration calendar), park-fee transparency |
| **Mount Meru** | Acclimatization-pairing + standalone trek | **Medium-heavy** | Same shape as Kili pages, shorter (fewer route variants) |
| **Zanzibar** | Couples-trip logic; mainland combo | **Medium** | Real lodge photography, named partners, transfer logistics, what's-included vs not |
| **Cultural** | Show care without claiming primary expertise | **Medium** | Named partner communities (Maasai, Hadzabe), what the experience is, ethical framing |
| **Gallery / Contact** | Function, not depth | **Light** | One job per page |
| **Charity (Abu Hope)** | Adjacent funnel; mention, don't lead | **Medium** | Specific projects with numbers, year stamps, no "profits fund" framing |

**The principle.** A traveler weighing a $2,500 trek who reads three pretty sentences on a tour page leaves. A traveler who reads dense, specific, numbered detail on AMS protocol, porter wages, oxygen, and evacuation sends the message. **Restraint on the home is editorial. Density on a tour page is trust.**

For the funnel and persona logic that drives this — buyer objections, conversion principles, trust-signal hierarchy — see `AUDIENCE.md`. For the operational topics that *are* the trust substance — see `BRAND.md` "Operational proof topics." For voice rules governing *how* the density reads — see `BRAND.md`. Depth lives in what's said; voice governs how it's said.

## Content & Features

### Complete Features
✅ Home page with featured tours & testimonials
✅ About page with founder story & named team profiles
✅ Kilimanjaro routes with day-by-day itineraries (Machame detailed, others summarized)
✅ Mount Meru trek details
✅ Safari packages (Serengeti, Ngorongoro, Tarangire, Manyara, Mkomazi, Arusha NP)
✅ Zanzibar holidays
✅ Cultural experiences
✅ Gallery (showcasing nature photos)
✅ FAQ page (with FAQPage JSON-LD)
✅ Site search — Pagefind, indexed at build time (`postbuild` script)
✅ Contact form
✅ Charity section (Abu Hope Foundation)

### Pending / known gaps
- **Inquiry email delivery.** `app/api/inquiry/route.ts` currently logs
  submissions to the server console only — wire an email service (e.g. Resend)
  once the domain + Google Workspace setup is done. Until then, inquiries
  submitted through the form are NOT delivered to anyone.
- **Unverified claims.** `docs/VERIFY-WITH-ABU.md` is the gate — content on
  that list stays hedged or off the site until Abu confirms it. Never invent
  numbers, credentials, policies, or reviews.

### Contact Info & Pricing — source of truth

Never hardcode contact info or pricing. Always read from `lib/constants.ts`:
- `COMPANY` → phone, email, address, company name, slogan
- `KILIMANJARO_ROUTES` and `SAFARIS` → starting prices

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
- ❌ Dark page backgrounds (the theme is light/paper — page bg is `bg-paper`, not dark)
- ❌ Placeholder/generic images (use real nature photos from `/public/images/`)
- ❌ Low-contrast pairings (e.g. `text-gold` on `bg-paper` — fails at 2.0:1; use `text-gold-deep`, or keep the text olive)
- ❌ Reaching for hex literals in JSX (use the Olive + Gold tokens: paper, parchment, olive, olive-deep, khaki, gold, gold-deep, taupe)
- ❌ Overusing gold — it's a single confident accent on CTAs and hover states, not flood fill
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
  - Page matches Olive + Gold (cream bg, cream navbar with bottom border, olive body text, gold CTAs with dark text, olive footer band)
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

- [ ] **Expertise Depth** (tour pages only — Kilimanjaro, Safari, Meru)
  - Page answers `AUDIENCE.md` §4's seven objections in order (mortality/AMS, operator legitimacy, summit success, porter ethics, fitness, change policy, value)
  - Specific numbers present (altitude, km, days, success %, porter wage figure, oxygen bottles)
  - Named entities present (route names, partner orgs, guide names with summits-led, year stamps)
  - No paragraph is purely adjectival — each has a fact
  - Line-item "what's included" visible (not bundled into a single sentence)
  - ≥60% of relevant topics from `BRAND.md` "Operational proof topics" are surfaced

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

**Last Updated**: July 2026
**Current Theme**: Olive + Gold on Cream — editorial luxe, photo-led
**Status**: Active Development
