# Kilimanjaro True Venture - Project Guidelines

## Project Overview

**Kilimanjaro True Venture** is a modern, vibrant travel website showcasing mountain trekking, wildlife safaris, beach holidays, and cultural experiences in Tanzania.

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

### Contact Information (MUST USE)
**Never hardcode different contact info. Always use:**
- **Phone/WhatsApp**: `+255 791 137 698`
- **Email**: `info@kilimanjarotrueventure.com`
- **Address**: `Sekei, Arusha, Tanzania`
- **Company Name**: `Kilimanjaro True Venture`
- **Slogan**: `Experience True Adventure in Africa`

Location: `lib/constants.ts` → `COMPANY` object

### Pricing Structure
All starting prices are in the `KILIMANJARO_ROUTES` and `SAFARI_PACKAGES` in constants:
- Machame Route: $2,050–$2,130
- Lemosho Route: $2,350
- Mount Meru: $950 (4 days)
- Safari packages: $430–$2,230 depending on duration

## Images & Assets

### Available Images
17 high-quality photos in `/public/images/`:
- Summit photos (glaciers, panorama, sunrise, celebration)
- Wildlife (zebra, flamingos, waterhole, animals)
- People/guides (guide-client, guide-mountain)
- Landscape (crater-wall, camp-setup, hero-sunset, etc)
- Nature (milky-way, mawenzi-silhouette, summit-peak)

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
  - Page looks modern and vibrant (not dark)
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

## 📚 Learning & Education

### How I Teach You While Building

As a beginner developer, you want to **learn web development** while building this site. When I make changes, I will:

1. **Explain the "why"** - Not just what the code does, but why it's done that way
2. **Name the concept** - "This is called X" so you can research it later
3. **Show the pattern** - How this applies beyond just this one change
4. **Point out learning moments** - When something reinforces a concept

### Example of My Explanations

**Bad (Just fixing code):**
```
Changed className from "text-light" to "text-gray-600"
```

**Good (Teaching you):**
```
Changed className from "text-light" to "text-gray-600"

💡 WHY: This is a **color contrast fix**. White backgrounds need dark text for readability (WCAG accessibility standards). "text-light" was dark blue, but now we're using proper semantic gray-600 for body text on white backgrounds.

CONCEPT: Contrast Ratio - The darker your text on a light background, the easier to read. This follows the principle of "semantic colors" in design systems.

PATTERN: In Tailwind, use:
- text-light (dark) for headings on white
- text-gray-600 for body text on white
- text-white for text on dark/colored backgrounds
```

### Concepts You'll Learn Building This Site

These are the **core web development concepts** you'll encounter:

| Concept | What It Is | Where You'll See It |
|---------|-----------|---|
| **React Components** | Reusable blocks of UI code | Every `<Hero />`, `<TourCard />` |
| **Props** | How components get data | `<TourCard title="..." image="..." />` |
| **JSX** | HTML-like syntax in JavaScript | `<div className="...">Text</div>` |
| **State (useState)** | Data that changes & re-renders | Testimonial carousel switching slides |
| **Responsive Design** | Sites that work on mobile/tablet/desktop | `md:` `lg:` prefixes in Tailwind |
| **Conditional Rendering** | Show/hide elements based on logic | `{loading ? <Loading /> : <Content />}` |
| **Routing** | How URLs navigate between pages | `/about`, `/tours/kilimanjaro` |
| **Next.js Image Optimization** | Making images load faster | `<Image />` component vs `<img />` |
| **Tailwind CSS** | CSS utility classes (no writing CSS) | `bg-white text-gray-600 rounded-xl` |
| **Type Safety** | Catching errors before runtime | TypeScript interfaces and types |
| **Component Composition** | Building complex UIs from simple pieces | Page layouts built from multiple components |
| **Git & Commits** | Tracking changes, explaining your work | `git commit -m "message"` |

### Questions I'll Answer While Coding

If you see a change and wonder "why that?", I'm explaining:
- ✅ "This uses a map() because we're iterating over an array"
- ✅ "This needs a key prop for React to track list items efficiently"
- ✅ "We're using next/Image instead of <img> for automatic optimization"
- ✅ "This component is 'controlled' because state drives the input value"

### Your Learning Responsibility

As I teach you, you should:
1. **Ask follow-up questions** - "Why use Array.map instead of a for loop?"
2. **Request explanations** - "Can you explain what 'props drilling' means?"
3. **Ask me to explain patterns** - "When should I create a new component?"
4. **Point out what confuses you** - "I don't understand why we need hooks"

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

## Next Steps / Future Features

Potential enhancements (discuss before building):
- Customer testimonials/reviews page
- Blog/news section
- Online booking system
- Live availability calendar
- WhatsApp integration for inquiries
- Multi-language support
- Team member photos (when available)
- Video tours/YouTube integration

---

**Last Updated**: March 2026
**Current Theme**: Modern, Vibrant, Nature-Focused
**Status**: Active Development
