# Project Architecture

This document explains how the True Venture website is organized and why.

## Directory Structure

### `/app` - Next.js Pages & Routes

```
app/
├── page.tsx              # Home page (/)
├── layout.tsx            # Root layout (wrapper for all pages)
├── globals.css           # Global CSS & Tailwind
│
├── about/page.tsx        # /about - Founder story, team, charity
├── gallery/page.tsx      # /gallery - Photo gallery
├── contact/page.tsx      # /contact - Contact form & info
│
├── tours/                # Tour pages (all start with /tours/)
│   ├── kilimanjaro/page.tsx    # /tours/kilimanjaro - All routes
│   ├── meru/page.tsx           # /tours/meru - Mount Meru trek
│   ├── safaris/page.tsx        # /tours/safaris - Safari packages
│   ├── zanzibar/page.tsx       # /tours/zanzibar - Beach holidays
│   └── cultural/page.tsx       # /tours/cultural - Cultural experiences
│
└── api/
    └── inquiry/route.ts  # POST /api/inquiry - Contact form endpoint
```

**Why this structure?**
- Each `/folder/page.tsx` creates a new URL route
- Grouping tours in `/tours/` keeps them organized
- One `/layout.tsx` wraps everything (Navbar, Footer)
- API routes separate from pages

### `/components` - Reusable UI Components

These are building blocks used across multiple pages:

```
components/
├── Hero.tsx              # Full-width banner with title, image, CTA
├── Navbar.tsx            # Top navigation (sticky, responsive)
├── Footer.tsx            # Site footer with links & contact info
├── TourCard.tsx          # Card for displaying tour info
├── CTABanner.tsx         # "Call to action" green banner section
├── InquiryForm.tsx       # Contact form (used on contact page)
├── TestimonialCarousel.tsx  # Carousel for customer testimonials
└── RouteItinerary.tsx    # Display day-by-day trek details
```

**Why components?**
- Reusable: TourCard displays 5 different tours
- Maintainable: Change Navbar once, updates everywhere
- Testable: Can test components in isolation
- Clear: Component names describe what they show

### `/lib` - Business Logic & Data

```
lib/
├── constants.ts          # ~900 lines: ALL site data
│   ├── COMPANY          # Contact info, social media
│   ├── NAV_LINKS        # Navigation menu structure
│   ├── FEATURED_TOURS   # Tours shown on homepage
│   ├── KILIMANJARO_ROUTES  # 6 routes with prices & itineraries
│   ├── SAFARI_PACKAGES  # Safari tour options
│   ├── TEAM_MEMBERS     # 8 staff profiles
│   ├── TESTIMONIALS     # Customer reviews
│   └── WHY_CHOOSE_US    # 6 company benefits
│
└── safari-packages.ts    # Detailed safari tour data
```

**Why separate data from components?**
- Easy to update: Change price once in constants.ts
- Reusable: Multiple components use same data
- Clean: Components focus on UI, not data
- Consistent: Single source of truth for content

### `/public/images` - Static Assets

17 high-quality nature photographs:
```
images/
├── summit-*.jpg         # Mountain peak photos (glaciers, sunrise, etc)
├── zebra-herd.jpg       # Wildlife
├── guide-*.jpg          # Team/guides in action
├── flamingos-*.jpg      # Wildlife & nature
├── crater-wall.jpg      # Crater landscape
├── ngorongoro-*.jpg     # Safari locations
├── waterhole-*.jpg      # Wildlife at water
├── camp-*.jpg           # Camp scenes
├── milky-way.jpg        # Night sky
└── mawenzi-*.jpg        # Mountain features
```

**Why here?**
- Next.js optimizes images automatically
- Static files don't change
- URL: `/images/filename.jpg`

### `/docs` - Documentation

```
docs/
├── FEEDBACK.md          # Abu's original requirements
├── ARCHITECTURE.md      # This file
└── assets/             # Supporting files
    ├── Kilimanjaro-True-Venture.pdf
    └── logo.pdf
```

## Data Flow

### How a Page Gets Built

```
1. User visits http://localhost:3000/about

2. Next.js finds app/about/page.tsx

3. Page component imports:
   - Components: Hero, CTABanner, Footer
   - Data: TEAM_MEMBERS from lib/constants.ts

4. Components receive data as PROPS:
   <Hero title="Our Story"
         subtitle="..."
         backgroundImage="/images/summit-panorama.jpg" />

5. React renders components to HTML

6. Browser receives HTML + CSS + JavaScript
```

### How Data Updates

When Abu gives feedback or you need to change something:

```
UPDATE: lib/constants.ts

EXAMPLE: Change Mount Meru price from $950 to $1,000

File: lib/constants.ts
Find: "Mount Meru – 4 Days: from $950 per person"
Change: "Mount Meru – 4 Days: from $1,000 per person"

RESULT: All pages showing Mount Meru automatically update
(Home page, tours/meru page, feature cards, etc)

WHY? All pages import from constants.ts
```

## Component Hierarchy

```
RootLayout (app/layout.tsx)
├── Navbar
├── main (children)
│   └── [Page Component]
│       ├── Hero
│       ├── [Content Sections]
│       ├── CTABanner
│       └── CTABanner
└── Footer

Example: Home Page (app/page.tsx)
RootLayout
├── Navbar
├── Hero (title: "Conquer the Roof of Africa")
├── Image Gallery (4 photos)
├── Welcome Section (text)
├── Featured Tours (3x TourCard components)
├── Why Choose Us (6 cards)
├── TestimonialCarousel
├── CTABanner
└── Footer
```

## Styling Approach

### Tailwind CSS (No CSS Files)

Instead of writing CSS:
```css
/* ❌ Old way - not used */
.tour-card {
  background: white;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 24px;
}
```

We use Tailwind utility classes:
```tsx
/* ✅ Our way */
<div className="bg-white border-2 border-gray-200 rounded-xl p-6">
```

**Benefits:**
- Faster: Utilities already defined
- Consistent: Same spacing, colors, sizes everywhere
- No CSS files: Less to maintain
- Responsive: Use `md:` and `lg:` prefixes

### Global Styles

`app/globals.css` imports Tailwind and defines:
- Color theme (primary, secondary, accent)
- Global HTML/body styles
- Reusable component classes (`.btn-primary`, `.section-padding`)

## Key Patterns

### Props Pattern

```tsx
// Components receive data via PROPS (like function parameters)
<TourCard
  title="Mount Kilimanjaro"
  description="Climb Africa's highest peak"
  image="/images/kilimanjaro-peak.jpg"
  href="/tours/kilimanjaro"
/>

// Component uses props to render
function TourCard({ title, description, image, href }) {
  return (
    <div>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

**Why?** Reusability - same component, different data

### Array Mapping

```tsx
// Instead of writing 5 separate cards...
<TourCard title="Kilimanjaro" ... />
<TourCard title="Meru" ... />
<TourCard title="Safaris" ... />

// We use .map() to render from array
{FEATURED_TOURS.map((tour) => (
  <TourCard key={tour.title} {...tour} />
))}
```

**Why?** Less code, easier to add/remove tours

### Conditional Rendering

```tsx
// Show different content based on conditions
{isLoading ? (
  <LoadingSpinner />
) : (
  <Content />
)}

// Or with short-circuit
{isLoggedIn && <UserDashboard />}
```

## Performance Optimization

### Image Optimization
```tsx
// ❌ Standard HTML - slow
<img src="/images/peak.jpg" />

// ✅ Next.js Image - auto-optimized
<Image
  src="/images/peak.jpg"
  alt="Peak"
  fill
  priority  // Preload above-the-fold images
  quality={85}  // Balance size vs quality
/>
```

**Why Next.js Image?**
- Automatic WebP/AVIF conversion
- Lazy loading (load only when visible)
- Responsive sizing (different sizes for mobile vs desktop)
- Automatic format optimization

### Responsive Images
```tsx
sizes="(max-width: 768px) 100vw, 50vw"
// Load full width on mobile, 50% on desktop
```

## State Management

### useState (Client-Side State)

```tsx
"use client";  // This component runs in browser

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);  // Track current index

  const next = () => setCurrent(c => (c + 1) % TESTIMONIALS.length);

  return (
    <div>
      <p>{TESTIMONIALS[current].text}</p>
      <button onClick={next}>Next</button>
    </div>
  );
}
```

**Why?** Carousel needs to remember which testimonial to show

## File Naming Conventions

| Type | Naming | Example |
|------|--------|---------|
| Page components | PascalCase | `about/page.tsx` |
| Regular components | PascalCase | `Hero.tsx` |
| Data files | lowercase | `lib/constants.ts` |
| Folders | kebab-case | `app/tours/kilimanjaro/` |
| Images | kebab-case | `summit-glaciers.jpg` |

## When to Create New Components

**Create a component if:**
- ✅ It's used on multiple pages
- ✅ It has internal state (like TestimonialCarousel)
- ✅ It's complex (30+ lines)

**Keep inline if:**
- ❌ Used only once
- ❌ Simple (5-10 lines)

## Common Tasks

### Add a New Tour
1. Add data to `lib/constants.ts` (FEATURED_TOURS)
2. Create new page: `app/tours/[name]/page.tsx`
3. Done! Components automatically use new data via mapping

### Change Contact Info
1. Update `lib/constants.ts` (COMPANY object)
2. All pages automatically show new number/email (Footer, Contact page, etc)

### Add New Team Member
1. Add object to `lib/constants.ts` (TEAM_MEMBERS array)
2. About page automatically displays (uses `.map()`)

### Update Pricing
1. Edit `KILIMANJARO_ROUTES` or `SAFARI_PACKAGES` in `lib/constants.ts`
2. All tour pages automatically show new prices

---

**This architecture makes it easy to:**
- Add/update tours and pricing
- Maintain consistent design
- Reuse components
- Scale to new features

For more questions, see [CLAUDE.md](../CLAUDE.md)
