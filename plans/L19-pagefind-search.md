# L19 — Pagefind Site Search

**Lesson:** L19 Architectural Conversation — `#prompt-craft` (architectural)
**Skill practiced:** asking for 3 alternatives with concrete tradeoffs, picking consciously and naming the trade.

## Architectural pick (L19 lesson output)

Picked **Alternative A (Pagefind, client-bundled index)** over B (Next.js API route) and C (Algolia).

**Trading away:** built-in analytics, best-in-class search quality (typo tolerance, synonyms, ranking models).
**Buying:** zero infrastructure, zero ongoing cost, zero cold starts, trivial migration path (can swap to B or C later without touching any other code), no vendor lock-in.

**Why this trade for KTV specifically:** ~10 pages, no UGC, no CMS, no signal anyone is searching anything yet. The smallest tool that solves the actual problem is the right tool.

## Goal in one sentence

Site search for KTV: navbar search icon → modal with input → live results → click to navigate. Index built at `next build` time via Pagefind; client-side fuzzy match; no server, no vendor.

## Scope — IN

- `pagefind` added as devDependency
- `postbuild` script wires Pagefind to crawl `.next/server/app` after `next build` and emit index to `public/_pagefind/`
- `public/_pagefind/` added to `.gitignore` (generated, not source)
- New `components/SearchModal.tsx` Client Component — input + result list + Esc/click-outside close, styled to Wine + Emerald
- `components/Navbar.tsx` gains a search-icon button right of nav links that opens the modal
- Pagefind JS loaded lazily (only when modal first opens — not on initial page load)

## Scope — OUT (explicitly deferred)

- `cmd+k` / `ctrl+k` keyboard shortcut to open
- URL `?q=` querystring for shareable searches
- Custom analytics ping (this is the trade we accepted in L19)
- Highlighted match snippets in result preview
- Faceted filtering (by category / tour type)
- Mobile-specific overlay treatment (MVP uses same modal across breakpoints)

## File changes

### 1. `package.json`
- Add devDependency: `pagefind` (latest)
- Add script: `"postbuild": "pagefind --site .next/server/app --output-path public/_pagefind"`

### 2. `.gitignore`
- Add `public/_pagefind/`

### 3. `components/SearchModal.tsx` (new)
- `"use client"` Client Component
- `useEffect` lazy-loads `/_pagefind/pagefind.js` on first open
- `useState` for query string + results array + loading flag
- Debounce input (~150ms) before calling `pagefind.search(query)`
- Render results as `<Link>` list with title + URL excerpt
- Esc key handler + click-outside backdrop close
- Focus management: input auto-focuses on open; Esc returns focus to trigger button
- Styled to design system: `bg-paper`, `border-taupe`, `text-wine`, focus rings `ring-emerald`

### 4. `components/Navbar.tsx` (modify)
- Add `searchOpen` state + setter
- Add `<button>` with magnifying-glass SVG icon, `aria-label="Search"`, placed right of nav links (before mobile menu button on small screens)
- Render `<SearchModal open={searchOpen} onClose={...} />` conditionally

### 5. (Possibly) `next.config.ts`
- No changes expected. Pagefind reads from `.next/server/app` (auto-pre-rendered HTML) and writes to `public/_pagefind` — both standard locations Next.js already serves without config.

## Order of edits

1. `npm install -D pagefind` → verify install
2. Add postbuild script + `.gitignore` entry
3. Run `npm run build` → confirm `public/_pagefind/` is generated → eyeball the index files
4. Write `components/SearchModal.tsx` (closed-state shell first, then interaction)
5. Wire `SearchModal` into `components/Navbar.tsx`
6. Browser test: `npm run dev`, navigate to site, click search icon, type "machame" → see results → click → navigate
7. Test edge cases: empty query, no-results query, Esc-close, click-outside close, focus restoration
8. `#failure-mode` walk (carry L18 muscle forward — quick rubric pass on the new component)

## Test plan

- [ ] `npm run build` succeeds and emits `public/_pagefind/pagefind.js` + index chunks
- [ ] `npm run dev` runs without errors (note: in dev, the index won't exist — search will gracefully no-op or show a "build the index" placeholder)
- [ ] Search icon visible in navbar on desktop and mobile
- [ ] Click icon → modal opens with input focused
- [ ] Type "machame" → results appear within 200ms
- [ ] Click a result → navigates to correct page
- [ ] Press Esc → modal closes, focus returns to trigger button
- [ ] Click backdrop → modal closes
- [ ] Empty query state → modal shows hint text, not empty result list
- [ ] No-results query (e.g., "xyzzy") → shows "No results" message
- [ ] Mobile (375px): modal usable, input not covered by keyboard, results scrollable
- [ ] No console errors / hydration warnings
- [ ] Typecheck passes (hook from L14 will enforce this automatically)

## Risks / known gotchas

- **Dev mode:** Pagefind index only exists after `next build`. In `next dev`, `public/_pagefind/` is empty. Modal needs a graceful fallback or we accept that search is "production-only" during this iteration.
- **`.next/server/app` path:** confirmed standard for Next.js 16 App Router with default settings. If a page uses `force-dynamic` it won't be pre-rendered to HTML and won't be indexed — acceptable for KTV (all marketing pages are static-eligible).
- **Pagefind UI:** Pagefind also ships a default UI bundle (`pagefind-ui`). We're rolling our own UI in `SearchModal.tsx` to match the Wine + Emerald system. This is more code than `pagefind-ui` would be, but avoids fighting their CSS.
- **First-paint cost:** Pagefind's JS + initial index chunk download is ~30-50KB. Lazy-loaded on first open, so zero cost on initial page load.

## Approval checkpoint

User approves this plan before any code lands. Step 5 of the Session Protocol ("I write, you read every line of the diff") still applies — every commit is reviewed before it's made.
