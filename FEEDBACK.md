# Feedback

Natural-language feedback queue for Kilimanjaro True Venture. Add anything to **Pending** in your own words — terse or detailed. The `/process-feedback` command picks the top item, routes it to the right agent, implements it, and logs the result here.

## How to use

- Drop one item per line under **Pending**. Phrasing doesn't matter; the loop will clarify ambiguous items by asking you in chat.
- Run `/loop /process-feedback` to start a self-paced loop — one item per turn until **Pending** is empty (or you interrupt).
- Run `/process-feedback` (without `/loop`) for just the next single item.

## Routing rules (auto-applied)

- **Brand copy / taglines / page text** → propose 2–3 options inline, you pick. No agent.
- **Tour-page operational density** (any prose card or section ≥ ~25 words on a tour page, even when framed as "add specific facts X/Y/Z") → draft once in the BRAND.md-default voice, then surface **2 voice variations** (default vs. subject-shift if a named person/place/program anchors the card; otherwise two rhythm variations) before committing. Picking the mode follows `BRAND.md` → "Voice by purpose."
- **Color palette / brand-level visual shift** → build `/design-preview` mockups first, you pick. No edits to globals until approved.
- **Visual/CSS tweak** (size, spacing, class swap) → handle inline. File:line + mechanism + tradeoffs first ("show levers"), then apply.
- **Layout / hierarchy / typography / motion / responsive** → `ux-designer` agent for spec, then implement.
- **Conversion / CTA / funnel / lead-gen / messaging strategy** → `marketing-funnel-strategist` agent.
- **Multi-file refactor / new feature / perf** → `senior-engineer` agent for plan, then implement.
- **Codebase exploration** ("where is X used") → `Explore` subagent.
- **Ambiguous** → ask clarifying questions; don't extrapolate.

## Pending

<!-- Add items below this line. One per `- `. -->
- [auto · 2026-05-22 · operational-density] Add a "Tipping guidance" sub-block beside or below the "What's Included" section on /tours/kilimanjaro surfacing the KPAP-published per-role daily tip ranges (lead guide ~$20/day, assistant guide ~$15/day, cook ~$10/day, porter ~$7–10/day, per climber group) with a citation/link to KPAP's published gratuity guidance — numbers sourced from KPAP, not invented — target: `app/tours/kilimanjaro/page.tsx` (new sub-block near :213-276); evidence: BRAND.md Operational proof topics verbatim requires "Porter wages and tips guidance"; currently PACKAGE_EXCLUDES says only "Tips for guides, porters, and cook" with no per-role amounts.
- [auto · 2026-05-22 · operational-density] Add a "Packing essentials" sub-block on /tours/kilimanjaro between "Training and acclimatization" (ends :286) and "What's Included" (starts :288) listing the industry-standard required-gear categories with concrete specs (4-season sleeping bag rated to ~−15°C, insulated jacket, waterproof shell, broken-in mid-cut trekking boots, three layering layers, headlamp, gaiters) and a line noting a detailed list is sent on inquiry — target: `app/tours/kilimanjaro/page.tsx` (new sub-section between :286 and :288); evidence: BRAND.md Operational proof topics verbatim requires "Packing list (or link to one)"; the page currently surfaces zero packing/gear content.
- [auto · 2026-05-22 · operational-density] Add an "Insurance requirements" sub-block on /tours/kilimanjaro adjacent to or below "What's Included / Not Included" (lines 288-351) specifying that climbers' travel insurance must cover high-altitude trekking above 4,000m, emergency evacuation (including helicopter), and altitude-medical care, and naming Global Rescue (with optional reference to World Nomads / IMG Global) as a starting-point provider — target: `app/tours/kilimanjaro/page.tsx` (new sub-block near :288-351); evidence: BRAND.md Operational proof topics verbatim requires "Insurance partner (named; e.g., Global Rescue)"; the page currently lists only "Travel insurance (mandatory for trekkers)" with no coverage spec or named provider.

## In Progress

<!-- The loop moves an item here while working it. Usually empty at rest. -->

## Done

- 2026-05-22 — "When to climb" seasonality section added between Alternatives and Ecological zones — 4-card calendar (Jan–Mar dry, Apr–May long rains, Jun–Oct peak, Nov short rains) on `bg-parchment`; calls out northern-route rain-shadow advantage
    ↳ `app/tours/kilimanjaro/page.tsx`
- 2026-05-22 — Lead guides card names Ivan Ismail Kaaya (Senior, 15–20 yrs on Kili) + Amdani Mputa (Assistant) with a "Meet the full crew" link to /about; replaces adjectival "names available on request"
    ↳ `app/tours/kilimanjaro/page.tsx` Lead guides card; added `next/link` import
- 2026-05-22 — Park fees line in `PACKAGE_INCLUDES` now broken out as "(≈35% of total trip cost)" per BRAND.md operational proof topics — pricing-transparency lever for AUDIENCE.md objection #7
    ↳ `lib/constants.ts:837`
- 2026-05-22 — Trust strip now reads "Tanzanian-owned · Tanzanian-guided · Sekei, Arusha" — physical address surfaced for operator-legitimacy objection
    ↳ `app/tours/kilimanjaro/page.tsx:41`
- 2026-05-22 — Training & acclimatization section added between "How we run a climb" and "What's Included" — 2-col editorial layout, leads on "acclimatization not fitness," includes at-a-glance training checklist (8–12 wk plan, daypack weight, back-to-backs)
    ↳ `app/tours/kilimanjaro/page.tsx`
- 2026-05-22 — Porter standards card densified to cite KPAP-published specifics (20kg load cap, KPAP wage floor, three meals/day, weather gear, IMEC programme); operator-specific wage figure deferred until Abu sources it
    ↳ `app/tours/kilimanjaro/page.tsx` Porter standards card; user picked "KPAP standards" path over inventing operator numbers
- 2026-05-22 — Altitude safety card added to "How we run a climb" (objection #1: "will I die or get hurt"); grid expanded to 4-up, AMS card placed first with sourced mortality/evac figures and "climb high, sleep low" named
    ↳ `app/tours/kilimanjaro/page.tsx:123-167`
- 2026-05-18 — Hero shortened ~20%
    ↳ `components/Hero.tsx` aspect ratios (15/8 mobile · 2/1 tablet · 3/1 desktop), `min-h-[220px]` floor
- 2026-05-18 — Cinematic 21:9 hero rollout
    ↳ `Hero.tsx` rebuilt (bottom-left title, smaller type, no CTA, wine/30 overlay), 10 page call sites updated with taglines
- 2026-05-18 — Wine + Emerald on Paper palette
    ↳ 8 tokens in `globals.css`, 145+ class renames across `app/` + `components/`, `CLAUDE.md` updated

## Rejected

- 2026-05-20 — REJECTED (No evidence): Proposal acknowledged the success-rate numbers must come from "Abu / KPAP records" but cited no source for them; populating without verified data risks inventing numbers, violating BRAND.md's "earned, not asserted."
    ↳ candidate: Populate `successRate` field on each `KILIMANJARO_ROUTES` entry to make the FeaturedRouteCard "Summit success" stat block render.
    ↳ revision pointer: Reframe as a content-gathering task to Abu (collect per-route summit-success figures from KPAP / operator records first), then re-submit with the actual numbers cited.
- 2026-05-20 — REJECTED (No evidence): Proposal explicitly deferred actual content ("text sourced from Abu's stated policy at implementation time") with no deposit %, postponement window, or refund terms cited; would have queued an empty-structure ask.
    ↳ candidate: Add a "Booking and changes" section to /tours/kilimanjaro covering deposit, postponement window, and refund policy.
    ↳ revision pointer: Re-submit only after Abu's actual deposit %, postponement window, and refund tiers are captured (e.g., in lib/constants.ts), with those specific numbers quoted in the candidate.
