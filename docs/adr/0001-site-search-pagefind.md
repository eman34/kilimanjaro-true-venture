# 0001 — Site search via Pagefind

- **Status:** Accepted
- **Date:** 2026-05-20
- **Decided by:** Edson (with Claude — L19 architectural conversation)
- **Lesson:** L19 (Architectural Conversation, `#prompt-craft` architectural)
- **Plan:** [plans/L19-pagefind-search.md](../../plans/L19-pagefind-search.md)
- **Commit:** `5d9da29`

## Context

Kilimanjaro True Venture is a ~10-page marketing site (tours, gallery, about, contact, charity). Content is hand-authored in `lib/constants.ts` and tour-page bodies. There is no CMS, no database, and no user-generated content. The team is one developer (Abu) working with intermittent contributor help.

We needed site search — a search button in the navbar that opens a modal, accepts a query, and returns links to matching pages — to help visitors who don't know the site's information architecture find content (e.g., a returning visitor typing "porter wages" should land directly on the ethics section of the Kilimanjaro page).

Three properties of the situation shaped the decision:

1. **Scale is tiny today and not projected to grow rapidly.** ~10 static pages, ~1,700 indexable words. No realistic 12-month scenario has us exceeding 50 pages.
2. **All content is build-time-known.** No live user data, no rapidly-updating product catalog. The index can be a static asset.
3. **We have no signal that anyone is searching anything yet.** This is a speculative trust-feature, not a load-bearing requirement. We don't yet know if it will be used.

Given those, simplicity and reversibility matter more than feature ceiling.

## Decision

We use **[Pagefind](https://pagefind.app/)** as a client-bundled static search index.

- Pagefind runs after `next build` (via a `postbuild` npm script) and crawls the prerendered HTML in `.next/server/app/`.
- The index is written to `public/_pagefind/` and deployed as static assets alongside the rest of the site.
- A Client Component (`components/SearchModal.tsx`) lazy-loads `/_pagefind/pagefind.js` on first open and runs fuzzy-match search entirely in the browser.

## Alternatives considered

We surfaced three credible alternatives along the dimensions of index location, search runtime, and ownership of the search infrastructure.

### A — Pagefind (chosen)
- **Index lives:** static JSON files in `public/_pagefind/`, shipped to the browser
- **Search runs:** in the user's browser
- **Owned by:** us (open-source library, no vendor)

### B — Next.js API route with server-side filtering
- **Index lives:** in-memory in a Vercel serverless function (built from `lib/constants.ts` shapes)
- **Search runs:** on Vercel servers, per request
- **Owned by:** us (the search algorithm is our code)

### C — Hosted third-party (Algolia / Typesense / MeiliSearch Cloud)
- **Index lives:** in the vendor's database
- **Search runs:** on the vendor's specialized search servers
- **Owned by:** the vendor (we pay for SaaS + their React widgets)

### Decision matrix

| Axis | A (Pagefind) | B (API route) | C (Algolia) |
|---|---|---|---|
| Ongoing infrastructure cost | $0 | Vercel compute (tiny here) | Vendor subscription |
| Cold starts | None | ~200ms first request | None |
| Search-time roundtrip | None (local) | Network roundtrip | Network roundtrip |
| Search quality (typo tolerance, synonyms, ranking) | Library-limited | What we write | Best-in-class |
| Built-in analytics on queries | No | Free (Vercel function logs) | Free (vendor dashboard) |
| Vendor lock-in | None | None | High (proprietary UI components, query syntax) |
| Migration cost if we leave | Delete the library | Replace the function | Rewrite the search UI |
| Adapts to non-static content (CMS, UGC) later | No (build-time index) | Yes | Yes |
| Failure modes | Almost none | Function errors, cold starts | Vendor outage, key issues |

## Consequences

### Positive
- **Zero ongoing infrastructure cost.** No serverless invocations, no SaaS bill, no API keys to manage.
- **Zero cold-start latency.** Every search after the initial library download is instant for the user.
- **No vendor lock-in.** Migrating to B or C later is a `git rm public/_pagefind && uninstall pagefind` + new component, with no other code affected.
- **Failure surface is small.** If Pagefind's JS fails to load, the search button gracefully shows an error message and the rest of the site is unaffected.
- **Build-time indexing aligns with how the content is authored.** New tour pages get indexed automatically when the site rebuilds — no separate sync step.

### Negative
- **No built-in analytics on what visitors search for.** If we want to learn what queries are common (and thus improve content), we'd need to add client-side logging to a custom endpoint or migrate to B/C.
- **No best-in-class search quality.** Pagefind handles basic fuzzy matching and prefix indexing but doesn't do synonym expansion, language stemming, or fancy ranking models. Algolia would do meaningfully better here.
- **Build-time index is incompatible with non-static content.** If we add user-submitted reviews, a CMS-backed blog, or live availability data, those won't be searchable without rebuilding the site (or moving to B/C).
- **Bundle weight grows with content.** ~1,700 words today is trivial (~30-50KB index chunks lazy-loaded on demand). At 1000+ pages or rich content, the index would grow and we'd want to revisit.

### Neutral / known constraints
- **Dev mode caveat:** `next dev` doesn't run the `postbuild` script. Search works in dev only after at least one `npm run build` has populated `public/_pagefind/`. We accept this; the modal shows a friendly fallback if the index is missing.
- **Pagefind requires WebAssembly and ES2020 `import()`.** Both are supported on every browser in our matrix (modern Chrome/Firefox/Safari/Edge per `CLAUDE.md`).

## Migration path

If/when we revisit this decision, the trigger conditions and target alternatives:

**Migrate to B (Next.js API route)** if:
- We add non-static searchable content (saved trips per user, CMS-driven blog posts, live availability data)
- We want native search-query analytics without third-party integration
- The index grows past ~10MB and lazy-loading chunks becomes a UX issue

Migration cost: ~1 day. Replace `SearchModal`'s `pagefind.search()` call with `fetch('/api/search?q=')`. Move the index-building logic to a server function. Keep the same UI.

**Migrate to C (Algolia or similar)** if:
- Search becomes a primary discovery surface (the site grows into a tour catalog with hundreds of listings)
- Search quality complaints from users become a recurring signal
- We want faceted filtering, geo-search, or other advanced features
- We can afford ongoing vendor cost (~$50-500/month at our scale tier)

Migration cost: ~3-5 days. Push existing index to vendor, swap `SearchModal` for `react-instantsearch` components (or rebuild the UI to match Wine + Emerald), wire build-time index sync. Vendor lock-in begins here.

## Related

- Plan: [plans/L19-pagefind-search.md](../../plans/L19-pagefind-search.md) (implementation steps and L18 failure-mode rubric)
- Implementation: `components/SearchModal.tsx`, `components/Navbar.tsx`, `package.json` postbuild script
- Commit: `5d9da29 Add Pagefind site search (L19 #prompt-craft, architectural)`
