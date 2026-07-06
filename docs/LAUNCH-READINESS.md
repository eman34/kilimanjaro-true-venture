# Launch readiness

Everything still standing between this codebase and a full public launch, from a
combined engineering, product, design, trust and operations audit (2026-07-06,
three independent codebase sweeps + production build check).

**How to read:** 🔴 blocker — don't take real customer traffic without it ·
🟡 launch week — do in the first week either side of going live ·
🟢 post-launch — real value, no urgency. **Owner** says who can actually do it.
Companion doc: [VERIFY-WITH-ABU.md](VERIFY-WITH-ABU.md) — content claims that
need Abu's confirmation; several items below depend on its answers.

**Already done (for context):** production build passes clean (29 pages,
search index builds) · SEO foundation complete (sitemap, robots, JSON-LD,
OG share image, FAQ page, local-operator metadata) · contact form → WhatsApp /
mailto with tour-page prefill · gallery with blur placeholders + featured
ordering · brand/audience docs + banned-language rules · image pipeline for
low-bandwidth visitors.

---

## A. Accounts and infrastructure

| # | Item | Why | Owner | Priority |
|---|------|-----|-------|----------|
| A1 | Create GitHub **organization**, transfer repo, add a second owner | Removes Edson as single point of failure on the code; free | Edson | 🔴 |
| A2 | **Deploy to Vercel** (import repo, deploy, check pages) | Nothing else can be verified until the site runs on real infrastructure | Edson | 🔴 |
| A3 | **Buy kilimanjarotrueventure.com** on Vercel, assign to project, auto-renew ON | The address everything (site, email, SEO) hangs off; confirmed available | Edson | 🔴 |
| A4 | **Google Workspace call with Abu** — signup as Abu, Tanzania billing, 2FA on his phone, backup codes on paper, then DNS records (TXT, MX, SPF, DKIM) | Email at info@ doesn't exist until this; billing country is permanent; one-pager for Abu already written | Edson + Abu | 🔴 |
| A5 | Re-home the Vercel account email to info@ once the inbox exists | Control of hosting+domain then follows the business inbox, not a person | Edson | 🟡 |
| A6 | Decide the **Vercel plan** (free Hobby is licensed non-commercial; Pro $20/mo, or Netlify free allows commercial) | Compliance + cost decision for a real business site | Edson | 🟡 |
| A7 | Write **HANDOVER.md runbook** — accounts, costs, renewal dates, backup-code locations, "if X breaks" steps | The document that makes the handover real | Edson (+ Claude) | 🟡 |
| A8 | Renewal reminders (domain, Workspace) in Abu's calendar | A silently failed card killing the domain is the one unrecoverable failure | Abu | 🟡 |

## B. Trust, legal and policy (product audit)

| # | Item | Why | Owner | Priority |
|---|------|-----|-------|----------|
| B1 | **Booking terms page**: deposit, balance due, postponement, cancellation/refund tiers | Buyer objection #6 ("what if my plans change?") for a $2k+ purchase; currently answered nowhere. Needs Abu's real terms — never invent | Abu (terms) + code | 🔴 |
| B2 | **Privacy policy page** | The form collects name/email/phone; EU-heavy audience expects one. Short and honest is fine (nothing is stored server-side) | Code (+ Abu confirm) | 🔴 |
| B3 | **Testimonials**: confirm the 6 named reviews are real, or replace with real ones | Fake reviews are the single biggest reputation risk on the site | Abu | 🔴 |
| B4 | **Gorilla-trekking page**: confirm genuinely offered (it's Uganda/Rwanda, not Tanzania) — flesh out or delete | A placeholder promising an unconfirmed cross-border product is a trust and liability hole | Abu decision, then code | 🔴 |
| B5 | **Charity-climb page**: confirm mechanics or reduce to a mention on /charity | Same placeholder problem ("details being finalized") | Abu decision, then code | 🟡 |
| B6 | **KPAP status**: if formally partnered (IMEC list), add badge + link near CTAs | The #1 cited trust signal for the ethical segment; currently hedged wording only | Abu confirm, then code | 🟡 |
| B7 | **TripAdvisor / Google reviews**: confirm profiles exist, surface rating + 1–2 verbatim quotes | 96% of travelers read reviews; 52% won't book without them | Abu, then code | 🟡 |
| B8 | **Reply-time promise** ("we reply within X hours") near contact CTAs | Proven converter — but only if Abu commits to a real number | Abu, then code | 🟡 |
| B9 | Route-by-route **summit success rates** (route pages already support the field) | Top-6 buyer decision driver; competitors publish theirs | Abu (real data), then code | 🟡 |
| B10 | **Cultural tours pricing** — pages show no dollar figures | Only tour without visible pricing; hidden pricing reads untrustworthy | Abu, then code | 🟡 |
| B11 | Pricing note: route prices in the data were recently revised (e.g. Machame $2,350–2,430, Lemosho $2,640) — confirm final numbers with Abu and update [VERIFY-WITH-ABU.md](VERIFY-WITH-ABU.md), which still lists the old ones | One price on the site and another in a quote is a trust killer | Edson + Abu | 🟡 |

## C. Engineering (code — all doable now)

| # | Item | Why | Priority |
|---|------|-----|----------|
| C1 | **Favicon + app icons** (`app/icon.png`, `favicon.ico`, apple-touch-icon) | Browser tab currently shows a generic icon — small but visible unprofessionalism | 🔴 |
| C2 | **Custom `app/not-found.tsx` and `app/error.tsx`** | Bad URLs currently show Next.js's default page — off-brand dead end | 🟡 |
| C3 | **Delete dead `app/api/inquiry/` route** (unreferenced since the form went WhatsApp/mailto; contains console.logs + stale TODO) | Dead surface area and misleading code | 🟡 |
| C4 | **Re-compress the heaviest images** — public/images is 38MB; worst offenders 2.8MB/1.6MB singles, team PNGs ~1MB each (should be JPG) | Low-bandwidth audience; giant sources slow LCP even with Next optimization | 🟡 |
| C5 | Set `NEXT_PUBLIC_SITE_URL` in Vercel env if the domain ever differs from the fallback | Fallback already matches kilimanjarotrueventure.com, so only needed on change | 🟢 |

## D. Design / UX polish (code — all doable now)

| # | Item | Why | Priority |
|---|------|-----|----------|
| D1 | **Sticky WhatsApp button** (mobile above-the-fold reachability) | #1 conversion principle for >85%-WhatsApp source markets; today it's footer-only | 🟡 |
| D2 | **Safaris "when to go" table forces horizontal scroll** on phones (min-w-640px) | Main mobile usability defect found; reflow to stacked layout | 🟡 |
| D3 | **Keyboard focus states** on navbar + footer links (focus-visible ring) | Keyboard users currently tab invisibly; gallery already does this right | 🟡 |
| D4 | **Section dividers before parchment CTA sections** (zanzibar, safari detail, meru, cultural) | Abrupt paper→parchment seams; the wavy divider is the site's own convention | 🟢 |
| D5 | **Blur placeholders on non-gallery images** (heroes, cards) | Perceived speed on slow connections; gallery already has them | 🟢 |
| D6 | Small fixes: contact h2 size outlier · lightbox loading state · 48px touch targets on mobile nav · contrast check on /50–/65 opacity text | Consistency and accessibility edge cases | 🟢 |

## E. Post-launch (the real growth work)

| # | Item | Why | Owner | Priority |
|---|------|-----|-------|----------|
| E1 | **Google Search Console**: verify domain (as info@), submit sitemap | Starts the SEO clock; the ongoing maintenance dashboard | Edson | 🟡 (day of launch) |
| E2 | **Google Business Profile** (Arusha address, verification lands in Tanzania) | Local-pack search presence + the review engine | Abu | 🟡 |
| E3 | Start collecting **real reviews** (TripAdvisor/Google) from past + new clients via WhatsApp | Feeds B3/B7; compounding trust asset | Abu | 🟢 |
| E4 | **Analytics decision** — currently none. Privacy-light option (Vercel Analytics / Plausible) or none at all | Without it there's no data on what visitors do; also feeds AUDIENCE.md's open questions | Edson | 🟢 |
| E5 | **Long-form guides**: route comparison, training plan, packing list, altitude guide, "why book a local operator" | The biggest SEO lever vs competitor content factories; needs facts from Abu | Edson + Abu | 🟢 |
| E6 | **Combo packaging** for couples (climb+Zanzibar, safari+Zanzibar as one journey with example pricing) | Persona C converts on pre-assembled trips; today they must self-assemble | Edson + Abu | 🟢 |
| E7 | Basic **uptime monitoring** (free pinger) + a quarterly "is everything renewing" check | Nobody watches a handed-over site otherwise | Edson | 🟢 |

---

## The short version

**Can't launch without (🔴):** GitHub org → deploy → domain → Workspace call
(A1–A4) · booking terms + privacy pages (B1–B2) · testimonials verified or
replaced (B3) · gorilla page resolved (B4) · favicon (C1).

**First week around launch (🟡):** Vercel re-home + plan decision + runbook +
reminders (A5–A8) · KPAP/TripAdvisor/SLA/success-rates/cultural-pricing as Abu
confirms them (B5–B11) · 404 page, dead-route cleanup, image re-compression
(C2–C4) · sticky WhatsApp, safari table, focus states (D1–D3) · Search Console
+ Business Profile (E1–E2).

**Post-launch growth (🟢):** reviews engine, analytics decision, long-form
guides, combo packaging, monitoring, remaining polish.

Roughly: **9 blockers** (5 accounts/legal, 3 content-verification, 1 code),
of which everything code-side can be done immediately — the critical path runs
through **Abu's confirmations and the Workspace call**, not the codebase.
