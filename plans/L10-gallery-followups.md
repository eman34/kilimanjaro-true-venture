# Plan: Gallery follow-ups (L9 M-tier + L-tier)

**Status:** drafted, awaiting approval
**Author:** L10 lesson session (2026-05-17)
**Target file:** `components/GalleryGrid.tsx` (all edits in one file)

## Goal

Address the 6 medium and low severity findings from the L9 red-team review of `components/GalleryGrid.tsx`. These are real-user-impacting UX, performance, and correctness issues that fell outside the HIGH-priority a11y fixes shipped in commit `113bdb6`.

## Scope

**In scope (6 items):**
- M1 — Touch swipe in lightbox + 44×44 tap targets on arrow buttons
- M3 — `prefers-reduced-motion` guard on tile hover scale and transitions
- M4 — `priority={true}` on first 2 masonry tiles (LCP fix)
- M5 — `e.preventDefault()` on lightbox arrow keys (stops page-scroll underneath)
- M6 — Defensive `?? null` clamp on `currentImage` derivation
- L2 — Derive `CATEGORIES` from `GALLERY_IMAGES` data instead of hardcoding

**Out of scope (deferred):**
- M2 — Lightbox `priority` misuse. Already resolved as a side effect of the L9 H5 fix; no action needed.
- L1 — Tile aria-label. Already covered by the H2 fix in L9 (tile is now `<button aria-label="Open photo: {alt}">`).
- H3 sub-fix — inert/aria-hidden on siblings. Requires a React Portal restructure; separate session.
- Image-quality upscaling beyond source resolution. User picked Option B (cap at source) in L9; depends on photo upgrades, not code.

## Approach per item

### M1 — Swipe + touch targets in lightbox

**File:line:** `components/GalleryGrid.tsx` lightbox arrow buttons (around the lines that render prev/next arrows) and lightbox backdrop div.

**Touch targets:** WCAG 2.5.5 requires interactive elements be at least 44×44px. Current arrow buttons render a 32×32 SVG (`w-8 h-8`) with no surrounding padding — the entire hit area is ~32×32. Fix: add `p-3` (12px padding all sides) so the button's bounding box is at least 56×56.

**Swipe:** add `onTouchStart` and `onTouchEnd` handlers on the lightbox backdrop. Track start X and Y; on touch end, compute deltas:
- If `|deltaX| > 50` AND `|deltaY| < 50` (horizontal swipe, not vertical scroll attempt) → navigate prev/next
- Otherwise → no-op (let backdrop click handler decide)

Implementation sketch:
```tsx
const touchStartRef = useRef<{ x: number; y: number } | null>(null);

const handleTouchStart = (e: React.TouchEvent) => {
  const t = e.touches[0];
  touchStartRef.current = { x: t.clientX, y: t.clientY };
};

const handleTouchEnd = (e: React.TouchEvent) => {
  if (!touchStartRef.current || lightboxIndex === null) return;
  const t = e.changedTouches[0];
  const dx = t.clientX - touchStartRef.current.x;
  const dy = t.clientY - touchStartRef.current.y;
  touchStartRef.current = null;
  if (Math.abs(dx) > 50 && Math.abs(dy) < 50) {
    if (dx > 0 && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
    else if (dx < 0 && lightboxIndex < filteredImages.length - 1) setLightboxIndex(lightboxIndex + 1);
  }
};
```

**Risk:** swipe-from-edge may conflict with iOS Safari's back-navigation gesture. Mitigation: 50px threshold + vertical-delta check filters out most accidental triggers. If users report issues, narrow the active swipe zone (exclude leftmost/rightmost 20px).

### M3 — `prefers-reduced-motion` on tile hover

**File:line:** the masonry tile button className.

Current: `transition-transform duration-300 hover:scale-[1.02]` — fires animation for users who explicitly opted out.

Fix: prefix with `motion-safe:` — `motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.02]`. Tailwind compiles this to `@media (prefers-reduced-motion: no-preference)`, so users with the OS setting on get no animation at all.

**CLS-on-filter sub-issue:** the agent also flagged column-reflow CLS during filter changes. Specific mitigation is fuzzy (CSS columns + variable-height tiles is inherently reflow-y). Document but don't fix in this plan. Future option: switch to JS-driven masonry library (react-masonry-css) for ordered animation — out of scope.

### M4 — `priority` on above-the-fold masonry tiles

**File:line:** the masonry tile Image element.

Current: `<Image ... />` — no priority, Next.js defaults to lazy. The first tile is therefore lazy-loaded, hurting LCP on `/gallery`.

Fix: `priority={index < 2}` on the Image. First 2 tiles eager-load; rest stay lazy. Number `2` chosen because column-count is 1-3 across breakpoints, so 2 priority tiles covers the first row on most viewports.

**Tradeoff:** priority tiles bypass intersection-observer lazy loading. Costs ~200-400KB of eager bandwidth even if the user never scrolls. Worth it for LCP — the gallery's hero is the masonry.

### M5 — `preventDefault` on lightbox arrow keys

**File:line:** the keydown handler inside the useEffect that handles lightbox keys.

Current branches for ArrowLeft / ArrowRight call setLightboxIndex but don't preventDefault. Browser default behavior on arrow keys can include horizontal page scroll (rare but real on wide layouts) or browser back navigation (older Firefox configs). Even where the visible side effect is nil, preventDefault is the right contract — we're handling the key, browser shouldn't.

Fix: add `e.preventDefault()` at the top of the ArrowLeft and ArrowRight branches.

### M6 — Defensive `?? null` clamp

**File:line:** `const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;`

Current code assumes `filteredImages[lightboxIndex]` is defined when `lightboxIndex !== null`. True in normal use, but if any future code path leaves `lightboxIndex` pointing past the array (e.g., a deep-link parameter, a programmatic filter set), `currentImage` becomes `undefined`, and downstream `currentImage.category` access in the render branch crashes.

Fix: `const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] ?? null : null;`

The `?? null` collapses undefined to null. The `{currentImage && lightboxIndex !== null && ...}` guard already handles null correctly. Net: lightbox closes silently instead of crashing on bad index.

### L2 — Derive CATEGORIES from data

**File:line:** `const CATEGORIES = ["All", "Kilimanjaro", "Safari"];` at the top of the file.

Current: hardcoded array. If a future photo gets `category: "Zanzibar"` in `GALLERY_IMAGES`, it would silently never be filterable because the chip doesn't exist.

Fix:
```tsx
const CATEGORIES = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];
```

Order = "All" + unique categories in the order they first appear in `GALLERY_IMAGES`. Current data: All / Kilimanjaro / Safari — identical to today. New data auto-adds chips.

**Gotcha:** the order depends on the data's array order, not alphabetical. If the user wants a specific chip order (e.g., Kilimanjaro before Safari regardless of data order), they'd need an explicit array. Today's order accidentally matches preference because Kilimanjaro photos come first in the data.

Documented assumption: future photo additions should be ordered in the data array by intended chip display order. Mention in `lib/constants.ts` comment? Out of scope; can do separately if desired.

## Order of edits

All edits live in `components/GalleryGrid.tsx`. Recommended order:

1. **L2** (CATEGORIES derivation) — top of file, no other change depends on it
2. **M3** (motion-safe prefix) — single className change on tile button
3. **M4** (priority on first 2) — adds `priority={index < 2}` to masonry Image
4. **M5** (preventDefault on arrows) — two-line addition in keydown handler
5. **M6** (`?? null` clamp) — one-character change
6. **M1** (swipe + tap targets) — biggest change; new ref + 2 handlers + className updates on arrows

Steps 1-5 are mechanical and small. Step 6 is the only substantial logic addition. If pressed for time, ship 1-5 as one commit, M1 as a follow-up.

## Test plan

After implementation, browser-test at http://localhost:3000/gallery:

1. **L2**: filter chips display All / Kilimanjaro / Safari, same as before. (Sanity check — no regression.)
2. **M3**: in browser DevTools, simulate `prefers-reduced-motion: reduce`. Hover a tile. No scale animation should fire.
3. **M4**: open DevTools Network tab, hard refresh. The first 1-2 image requests should fire immediately (priority); rest should fire as user scrolls.
4. **M5**: open lightbox, press ArrowRight repeatedly. Should navigate images. Page should NOT scroll underneath.
5. **M6**: hard to manually trigger without modifying state externally. Skip unless we add a deep-link feature later. Trust the type system.
6. **M1**: in DevTools mobile emulation (iPhone Pro size), open lightbox. Swipe left → next image. Swipe right → previous. Vertical-only drags should not navigate. Tap an arrow button → should hit consistently (44×44 target).

## Risks

- **Swipe gesture conflict** with iOS Safari edge-swipe-to-go-back. Mitigation: vertical-delta check + 50px threshold filters most accidents. If users complain, add an "exclude leftmost/rightmost 20px" carve-out.
- **Priority on first 2 tiles** wastes bandwidth for users who bounce. Acceptable tradeoff for LCP improvement.
- **`Array.from(new Set(...))` for CATEGORIES** runs at module load; static array, no perf concern. Order depends on data order — document if a strict order is required later.

## Out of scope

- M2 (already fixed as L9 H5 side effect)
- L1 (already covered by L9 H2)
- H3 sibling inert (needs Portal restructure; separate plan)
- CLS during filter reflow (needs JS masonry library or view-transitions; separate plan)
- Photo source upgrades (depends on Abu having higher-res originals)

## Approval checkpoint

Before any code edits, this plan needs explicit approval:

- [ ] Scope (6 items) is correct
- [ ] Approach per item is sensible
- [ ] Order of edits makes sense
- [ ] Test plan covers what matters
- [ ] Out-of-scope deferrals are acceptable

Once approved, the plan stays at `plans/L10-gallery-followups.md` as a durable artifact — committed alongside the implementation, or before it. If the implementation session dies, the next session resumes from this file.
