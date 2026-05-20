import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Preview — Palette Mockups",
  robots: { index: false, follow: false },
};

type NavStyle = "filled" | "subtle";

type Palette = {
  id: string;
  name: string;
  tagline: string;
  vibe: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
  anchor: string;
  anchorText: string;
  accent: string;
  accentHover: string;
  accentText: string;
  border: string;
  overlay: string;
  navStyle: NavStyle;
};

const PALETTES: Palette[] = [
  {
    id: "wine-teal",
    name: "Q · Wine + Deep Teal",
    tagline: "Classic burgundy complement",
    vibe: "Wine text · deep teal accent. Burgundy and teal are a long-standing complementary pairing (think old-school library, leather-bound books, Pantone color theory). Rich, confident, slightly unexpected.",
    bg: "#FBF9F4",
    surface: "#F4F1E8",
    text: "#3F1A26",
    muted: "#8A6570",
    anchor: "#FBF9F4",
    anchorText: "#3F1A26",
    accent: "#1A6B6B",
    accentHover: "#134F4F",
    accentText: "#FBF9F4",
    border: "#E5DFD2",
    overlay: "rgba(63, 26, 38, 0.45)",
    navStyle: "subtle",
  },
  {
    id: "wine-emerald",
    name: "R · Wine + Forest Emerald",
    tagline: "Vintage two-tone",
    vibe: "Wine text · forest emerald accent. Holiday-classic, library, grown-up. Two saturated jewel tones on paper — feels intentional and curated.",
    bg: "#FBF9F4",
    surface: "#F4F1E8",
    text: "#3F1A26",
    muted: "#8A6570",
    anchor: "#FBF9F4",
    anchorText: "#3F1A26",
    accent: "#1F5F3A",
    accentHover: "#154528",
    accentText: "#FBF9F4",
    border: "#E5DFD2",
    overlay: "rgba(63, 26, 38, 0.45)",
    navStyle: "subtle",
  },
  {
    id: "wine-black",
    name: "S · Wine + Pure Black",
    tagline: "Restraint · let the wine lead",
    vibe: "Wine text · near-black CTAs. No second color. Pure restraint — the deep wine carries the brand and the black CTAs just say 'click here' with zero ornament. Most minimal.",
    bg: "#FBF9F4",
    surface: "#F4F1E8",
    text: "#3F1A26",
    muted: "#8A6570",
    anchor: "#FBF9F4",
    anchorText: "#3F1A26",
    accent: "#0A0A0A",
    accentHover: "#2A2A2A",
    accentText: "#FBF9F4",
    border: "#E5DFD2",
    overlay: "rgba(63, 26, 38, 0.45)",
    navStyle: "subtle",
  },
  {
    id: "wine-cobalt",
    name: "T · Wine + Cobalt Blue",
    tagline: "Modern editorial pop",
    vibe: "Wine text · cobalt blue accent. The most modern of the set — cobalt is confident, sharp, and reads as 'curated editorial.' Burgundy + cobalt = high-end magazine spread.",
    bg: "#FBF9F4",
    surface: "#F4F1E8",
    text: "#3F1A26",
    muted: "#8A6570",
    anchor: "#FBF9F4",
    anchorText: "#3F1A26",
    accent: "#2C5BB8",
    accentHover: "#1F4690",
    accentText: "#FBF9F4",
    border: "#E5DFD2",
    overlay: "rgba(63, 26, 38, 0.45)",
    navStyle: "subtle",
  },
];

const NAV_LINKS = ["Kilimanjaro", "Safaris", "Zanzibar", "About", "Gallery"];

const CARDS = [
  {
    image: "/images/kilimanjaro-peak.jpg",
    category: "MOUNTAIN TREK",
    title: "Machame Route · 7 Days",
    price: "From $2,400",
  },
  {
    image: "/images/ngorongoro-wildlife.jpg",
    category: "SAFARI",
    title: "Ngorongoro Crater",
    price: "From $1,800",
  },
  {
    image: "/images/flamingos-flight.jpg",
    category: "CULTURAL",
    title: "Lake Manyara Day Trip",
    price: "From $450",
  },
];

function Swatch({ color, label, hex }: { color: string; label: string; hex: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block w-6 h-6 rounded border"
        style={{ backgroundColor: color, borderColor: "rgba(0,0,0,0.15)" }}
        aria-hidden
      />
      <span className="text-xs font-mono leading-tight">
        <span className="font-semibold">{label}</span>
        <span className="opacity-60 ml-1">{hex}</span>
      </span>
    </div>
  );
}

function PaletteShowcase({ palette: p }: { palette: Palette }) {
  const isSubtleNav = p.navStyle === "subtle";

  return (
    <section style={{ backgroundColor: p.bg, color: p.text }}>
      {/* Header bar — palette name + swatches */}
      <header
        style={{ borderBottom: `1px solid ${p.border}` }}
        className="px-6 md:px-12 py-6"
      >
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{p.name}</h2>
            <p className="text-sm opacity-70 font-medium" style={{ color: p.muted }}>
              {p.tagline}
            </p>
            <p className="text-sm mt-2 max-w-2xl leading-relaxed" style={{ color: p.muted }}>
              {p.vibe}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Swatch color={p.bg} label="bg" hex={p.bg} />
            <Swatch color={p.surface} label="surface" hex={p.surface} />
            <Swatch color={p.text} label="text" hex={p.text} />
            <Swatch color={p.muted} label="muted" hex={p.muted} />
            <Swatch color={p.anchor} label="anchor" hex={p.anchor} />
            <Swatch color={p.accent} label="accent" hex={p.accent} />
            <Swatch color={p.border} label="border" hex={p.border} />
          </div>
        </div>
      </header>

      {/* Faux navbar — sticky to demo real product behavior */}
      <div
        style={{
          backgroundColor: p.anchor,
          color: p.anchorText,
          borderBottom: isSubtleNav ? `1px solid ${p.border}` : "none",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ color: p.accent }} className="font-bold text-xl">KTV</span>
            <span className="hidden sm:inline text-sm font-semibold opacity-90">
              Kilimanjaro True Venture
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((label) => (
              <span key={label} className="text-sm font-medium opacity-90">
                {label}
              </span>
            ))}
            <span
              style={{ backgroundColor: p.accent, color: p.accentText }}
              className="px-4 py-2 rounded-lg text-sm font-bold"
            >
              Get in Touch
            </span>
          </nav>
        </div>
      </div>

      {/* Hero with real photo */}
      <div className="relative h-[420px] md:h-[480px]">
        <Image
          src="/images/hero-sunset.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: p.overlay }} />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-12">
            <h1 style={{ color: "#FFFFFF" }} className="text-3xl md:text-5xl font-bold mb-3 max-w-2xl leading-tight drop-shadow-lg">
              The Roof of Africa, on Your Terms
            </h1>
            <p style={{ color: "#FFFFFF" }} className="text-base md:text-lg mb-6 max-w-xl opacity-90 drop-shadow-md">
              Tanzanian-owned, Tanzanian-guided expeditions to Kilimanjaro, the Serengeti, and Zanzibar.
            </p>
            <span
              style={{ backgroundColor: p.accent, color: p.accentText }}
              className="inline-block px-7 py-3 rounded-lg font-bold text-base"
            >
              Plan Your Adventure
            </span>
          </div>
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Featured Tours</h3>
          <p className="text-sm mt-1" style={{ color: p.muted }}>
            A taste of what's possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              style={{ backgroundColor: p.surface, borderColor: p.border }}
              className="rounded-2xl overflow-hidden border flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <span
                  style={{ color: p.accent }}
                  className="text-xs font-bold tracking-wider"
                >
                  {card.category}
                </span>
                <h4 className="text-lg font-bold leading-snug">{card.title}</h4>
                <p
                  style={{ color: p.muted }}
                  className="text-sm font-semibold mt-auto"
                >
                  {card.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body type sample + blockquote */}
      <div style={{ backgroundColor: p.surface }} className="py-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">A Different Kind of Adventure</h3>
          <p className="leading-relaxed mb-4" style={{ color: p.text }}>
            Sample body paragraph. The mountain has always been here. So have the guides who know it — the same families, climb after climb, summit after summit. When you book with KTV, you're climbing with the people who grew up at its base.
          </p>
          <p className="leading-relaxed mb-6" style={{ color: p.muted }}>
            Muted secondary paragraph. Use this for supporting context, less emphasized prose, captions, or metadata.
          </p>
          <blockquote
            style={{ borderLeft: `4px solid ${p.accent}` }}
            className="pl-4 italic text-lg leading-relaxed"
          >
            "I started as a porter because I had no choice. I became a guide because I wanted to."
            <footer
              style={{ color: p.muted }}
              className="not-italic text-sm mt-2 font-semibold"
            >
              — Abdallah Athumani (Abu)
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Form preview */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12">
        <h3 className="text-2xl font-bold mb-1">Get in Touch</h3>
        <p className="text-sm mb-6" style={{ color: p.muted }}>
          Form mockup — name, email, message, submit.
        </p>
        <div
          style={{ backgroundColor: p.surface, borderColor: p.border }}
          className="rounded-2xl p-6 md:p-8 border space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <div
              style={{
                backgroundColor: p.bg,
                borderColor: p.border,
                color: p.muted,
              }}
              className="w-full border rounded-lg px-4 py-3 text-sm"
            >
              Your full name
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <div
              style={{
                backgroundColor: p.bg,
                borderColor: p.accent,
                color: p.text,
                boxShadow: `0 0 0 3px ${p.accent}25`,
              }}
              className="w-full border-2 rounded-lg px-4 py-3 text-sm"
            >
              you@example.com <span className="opacity-50">(focused state)</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <span
              style={{ backgroundColor: p.accent, color: p.accentText }}
              className="px-6 py-3 rounded-lg font-bold text-sm"
            >
              Send Inquiry
            </span>
            <span
              style={{
                backgroundColor: "transparent",
                color: p.text,
                borderColor: p.border,
              }}
              className="px-6 py-3 rounded-lg font-bold text-sm border"
            >
              Cancel
            </span>
            <span
              style={{ backgroundColor: p.accentHover, color: p.accentText }}
              className="px-6 py-3 rounded-lg font-bold text-sm"
            >
              Hover state
            </span>
          </div>
        </div>
      </div>

      {/* Footer strip — uses anchor style, or subtle if navStyle is subtle */}
      <div
        style={{
          backgroundColor: isSubtleNav ? p.surface : p.anchor,
          color: isSubtleNav ? p.text : p.anchorText,
          borderTop: isSubtleNav ? `1px solid ${p.border}` : "none",
        }}
        className="px-6 md:px-12 py-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-base">Kilimanjaro True Venture</p>
            <p className="text-sm opacity-70 mt-1">
              Tanzanian-owned. Tanzanian-guided.
            </p>
          </div>
          <div className="flex gap-3">
            {["IG", "FB", "TA"].map((n) => (
              <span
                key={n}
                style={{
                  backgroundColor: isSubtleNav ? `${p.text}10` : `${p.anchorText}15`,
                  color: isSubtleNav ? p.text : p.anchorText,
                }}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DesignPreviewPage() {
  return (
    <div className="bg-[#0F1923] text-[#F0F0F0]">
      {/* Page intro */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
          Internal · not linked from the site · round 5 (N base, accent variations)
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Design Preview — Wine Accents</h1>
        <p className="opacity-80 leading-relaxed">
          Constant across all four: paper bg <code>#FBF9F4</code>, paper surface <code>#F4F1E8</code>, deep wine text <code>#3F1A26</code>, paper navbar (subtle, sticky).
        </p>
        <p className="opacity-80 leading-relaxed mt-3">
          Varying only the accent (CTAs, focus rings, blockquote rule, button hover). Each accent shifts the brand register: classic, vintage, minimal, or modern-editorial.
        </p>
      </div>

      {/* Showcases */}
      {PALETTES.map((p) => (
        <PaletteShowcase key={p.id} palette={p} />
      ))}

      {/* Outro */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="opacity-70 text-sm">
          End of round 5. Tell me which accent (Q / R / S / T) — or if none feel right, I can keep going (rose, brass, ink-blue, etc.).
        </p>
      </div>
    </div>
  );
}
