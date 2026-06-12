import Image from "next/image";

/* Design preview: three minimal hero directions for the home page.
   All slightly shorter than the current hero strip, minimal copy,
   gold "Tanzanian local operator" eyebrow.
   View at /design-preview/hero — not linked from the site. */

function PreviewLabel({ n, title, note }: { n: number; title: string; note: string }) {
  return (
    <div className="bg-olive-deep text-paper px-4 md:px-8 py-5">
      <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
        Option {n}
      </p>
      <h2 className="text-xl font-bold mt-1">{title}</h2>
      <p className="text-paper/75 text-sm mt-1 max-w-2xl">{note}</p>
    </div>
  );
}

const HERO_HEIGHT = "h-[240px] sm:h-[300px] md:h-[400px]";

/* ───────────── Option 1: Centered, dead simple ───────────── */
function HeroCentered() {
  return (
    <section className={`relative ${HERO_HEIGHT}`}>
      <Image
        src="/images/summit-panorama.jpg"
        alt="Mawenzi peak above a sea of clouds, seen from Kilimanjaro's summit"
        fill
        priority
        className="object-cover object-[center_75%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-olive-deep/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold text-[11px] md:text-sm uppercase tracking-[0.4em] font-semibold drop-shadow">
          Tanzanian Local Operator
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl font-bold text-paper tracking-tight drop-shadow-lg">
          True Venture
        </h1>
      </div>
    </section>
  );
}

/* ───────────── Option 2: Bottom-left, gold rule ───────────── */
function HeroBottomLeft() {
  return (
    <section className={`relative ${HERO_HEIGHT}`}>
      <Image
        src="/images/summit-glaciers.jpg"
        alt="Sunrise over the glacier fields on Kilimanjaro's summit"
        fill
        priority
        className="object-cover object-[center_60%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/75 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-7 md:pb-10">
          <div className="border-l-[3px] border-gold pl-5">
            <p className="text-gold text-[11px] md:text-sm uppercase tracking-[0.4em] font-semibold">
              Tanzanian Local Operator
            </p>
            <h1 className="mt-1 text-4xl sm:text-5xl md:text-6xl font-bold text-paper tracking-tight">
              True Venture
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Option 3: Luxury wordmark, letterspaced ───────────── */
function HeroWordmark() {
  return (
    <section className={`relative ${HERO_HEIGHT}`}>
      <Image
        src="/images/mawenzi-silhouette.jpg"
        alt="Mawenzi silhouetted above the clouds at dawn"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-olive-deep/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-paper uppercase tracking-[0.22em] md:tracking-[0.3em] drop-shadow-lg">
          True Venture
        </h1>
        <div className="mt-4 flex items-center gap-4">
          <span className="h-px w-10 md:w-16 bg-gold" />
          <p className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold whitespace-nowrap">
            Tanzanian Local Operator
          </p>
          <span className="h-px w-10 md:w-16 bg-gold" />
        </div>
      </div>
    </section>
  );
}

export default function HeroPreviewPage() {
  return (
    <main>
      <div className="bg-gold text-olive-deep text-center text-sm font-semibold py-2 px-4">
        Design preview — three minimal hero directions, all slightly shorter
        than the current hero.
      </div>

      <PreviewLabel
        n={1}
        title="Centered, dead simple"
        note="Summit panorama, eyebrow + wordmark centered, even darkening. Calm and confident."
      />
      <HeroCentered />

      <PreviewLabel
        n={2}
        title="Bottom-left with gold rule"
        note="Glacier sunrise, copy anchored bottom-left behind a gold rule, gradient only at the base so the photo stays bright."
      />
      <HeroBottomLeft />

      <PreviewLabel
        n={3}
        title="Letterspaced wordmark"
        note="Moody Mawenzi dawn, uppercase tracked-out TRUE VENTURE with gold rules flanking the eyebrow. The most 'luxury lodge' of the three."
      />
      <HeroWordmark />

      <div className="bg-olive-deep text-paper/75 text-center text-sm py-8 px-4">
        End of preview · tell Claude which option (or which mix) to ship
      </div>
    </main>
  );
}
