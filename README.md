# Kilimanjaro True Venture

🏔️ **Modern, vibrant travel website** for Mount Kilimanjaro trekking, wildlife safaris, beach holidays, and cultural experiences in Tanzania.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📚 Project Overview

**Owner**: Abdallah Athumani (Abu)
**Tech Stack**: Next.js 16, React 19, Tailwind CSS 4, TypeScript
**Status**: Active Development

### What This Site Does
- Showcases Kilimanjaro trekking routes with detailed itineraries
- Displays wildlife safari packages (Serengeti, Ngorongoro, Tarangire)
- Highlights Zanzibar beach holidays and cultural experiences
- Features team bios and the founder's story
- Shares Abu Hope Foundation (community charity work)
- Accepts tour inquiries via contact form

## 📁 Project Structure

```
kilimanjaro-true-venture/
├── README.md                    # This file
├── CLAUDE.md                    # Project guidelines & learning guide
├── package.json                 # Dependencies
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript settings
│
├── app/                        # Next.js app directory
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── about/page.tsx         # About page (team, founder story)
│   ├── gallery/page.tsx       # Photo gallery
│   ├── contact/page.tsx       # Contact form
│   ├── tours/
│   │   ├── kilimanjaro/      # Kilimanjaro routes
│   │   ├── meru/             # Mount Meru trek
│   │   ├── safaris/          # Safari packages
│   │   ├── zanzibar/         # Beach holidays
│   │   └── cultural/         # Cultural experiences
│   └── api/inquiry/           # Contact form API
│
├── components/               # Reusable React components
│   ├── Hero.tsx             # Hero banner with background image
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── TourCard.tsx         # Tour listing card
│   ├── CTABanner.tsx        # Call-to-action section
│   └── ...
│
├── lib/                     # Business logic & data
│   ├── constants.ts        # All site data (tours, team, testimonials)
│   └── safari-packages.ts  # Safari tour details
│
├── public/
│   └── images/            # 17 high-quality nature photos
│
└── docs/                   # Documentation
    ├── FEEDBACK.md        # Abu's original requirements & feedback
    ├── ARCHITECTURE.md    # (See below)
    └── assets/            # PDFs, logos, etc
        ├── Kilimanjaro-True-Venture.pdf
        └── logo.pdf
```

## 🎨 Design System

- **Primary Color**: Forest Green (`#1F8E4D`)
- **Secondary Color**: Vibrant Orange (`#FF6B35`)
- **Accent Color**: Gold (`#FFD700`)
- **Background**: White (`#FFFFFF`)
- **Text**: Dark (`#1A1A1A`) on light backgrounds

**Philosophy**: Modern, vibrant, nature-focused design with clean white backgrounds and high-quality photography.

## 📖 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Project guidelines, code standards, and learning guide
- **[docs/FEEDBACK.md](./docs/FEEDBACK.md)** - Abu's original requirements and feature feedback
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Deep dive into project organization

## ✨ Key Features

✅ **Home Page**
- Featured tours carousel
- Testimonials carousel
- "Why Choose Us" section with 6 benefits

✅ **Tours & Packages**
- Kilimanjaro: 6 routes with day-by-day itineraries
- Mount Meru: 4-day trek details
- Safaris: Multiple packages with park descriptions
- Zanzibar: Beach holiday information
- Cultural: Authentic experiences

✅ **About Section**
- Founder story (Abdallah's journey)
- 8 team member profiles with roles
- Abu Hope Foundation (charity work)
- Safety & ethics standards

✅ **Gallery**
- Showcase of safari and trekking photography
- Responsive image gallery

✅ **Contact**
- Inquiry form
- Contact information
- Social media links

## 🚀 Development

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Lint Code
```bash
npm run lint
```

## 📝 Key Files to Understand

- **`lib/constants.ts`** - All tour data, pricing, team info, testimonials (900+ lines)
- **`app/page.tsx`** - Home page structure
- **`app/about/page.tsx`** - About page with team profiles
- **`app/tours/safaris/page.tsx`** - Safari packages with itineraries
- **`components/Hero.tsx`** - Reusable hero banner component

## 🎓 Learning While Building

This is a **learning project**. Read [CLAUDE.md](./CLAUDE.md) for how concepts are explained as code changes are made.

**Key Concepts You'll Learn**:
- React components & props
- Next.js routing & image optimization
- Tailwind CSS utility classes
- Responsive design
- TypeScript basics
- Component composition

## 👥 Team

- **Founder & Lead Guide**: Abdallah Athumani (Abu)
- **Senior Mountain Guide**: Ivan Ismail Kaaya
- **Assistant Guide**: Amdani Mputa
- **Professional Cook**: Athumani R. Mkuna
- **Safari Driver Guide**: Ombeni Kanuya
- Plus porters and support staff

## 📞 Contact Information

- **Phone/WhatsApp**: +255 791 137 698
- **Email**: info@kilimanjarotrueventure.com
- **Location**: Sekei, Arusha, Tanzania
- **Instagram**: @kilimanjarotrueventure
- **Facebook**: Kilimanjaro True Venture

## 🔗 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Created**: March 2026
**Last Updated**: March 22, 2026
**Status**: 🟢 Active Development
