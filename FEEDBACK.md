# Feedback

Natural-language feedback queue for Kilimanjaro True Venture. Add anything to **Pending** in your own words — terse or detailed. The `/process-feedback` command picks the top item, routes it to the right agent, implements it, and logs the result here.

## How to use

- Drop one item per line under **Pending**. Phrasing doesn't matter; the loop will clarify ambiguous items by asking you in chat.
- Run `/loop /process-feedback` to start a self-paced loop — one item per turn until **Pending** is empty (or you interrupt).
- Run `/process-feedback` (without `/loop`) for just the next single item.

## Routing rules (auto-applied)

- **Brand copy / taglines / page text** → propose 2–3 options inline, you pick. No agent.
- **Color palette / brand-level visual shift** → build `/design-preview` mockups first, you pick. No edits to globals until approved.
- **Visual/CSS tweak** (size, spacing, class swap) → handle inline. File:line + mechanism + tradeoffs first ("show levers"), then apply.
- **Layout / hierarchy / typography / motion / responsive** → `ux-designer` agent for spec, then implement.
- **Conversion / CTA / funnel / lead-gen / messaging strategy** → `marketing-funnel-strategist` agent.
- **Multi-file refactor / new feature / perf** → `senior-engineer` agent for plan, then implement.
- **Codebase exploration** ("where is X used") → `Explore` subagent.
- **Ambiguous** → ask clarifying questions; don't extrapolate.

## Pending

<!-- Add items below this line. One per `- `. -->
- [auto · 2026-05-20 · audience-objections] Add an "Altitude safety" item to the "How we run a climb" grid on the Kilimanjaro page surfacing pulse-oximeter cadence, oxygen carried, evacuation procedure, and AMS climb-high-sleep-low principle — target: `app/tours/kilimanjaro/page.tsx:118-152`; evidence: AUDIENCE.md §4 ranks "Will I die or get hurt?" as the #1 buyer objection and it is currently unaddressed on this page.
- [auto · 2026-05-20 · audience-objections] Update the Porter standards card to surface the specific porter daily wage figure and per-porter load-limit kg (numbers from Abu or `lib/constants.ts`), keeping KPAP-aligned framing — target: `app/tours/kilimanjaro/page.tsx:124-131`; evidence: AUDIENCE.md §4 objection 4 requires specific wage policy and load limits, currently shown only as adjectival "fair wages, weight limits."
- [auto · 2026-05-20 · audience-objections] Add a "Training and acclimatization" section to the Kilimanjaro page explaining that summit success is acclimatization-driven (not athleticism) with concrete training pointers (e.g., 8-week weekly long walks + loaded day hikes) — target: `app/tours/kilimanjaro/page.tsx` (between line 152 and line 154); evidence: AUDIENCE.md §4 objection 5 ("Am I fit enough?") requires training guidance, acclimatization explanation, and empathy — none present.
- [auto · 2026-05-20 · audience-objections] Append the operator's physical location to the trust strip — change "Tanzanian-owned · Tanzanian-guided" to "Tanzanian-owned · Tanzanian-guided · Sekei, Arusha" — target: `app/tours/kilimanjaro/page.tsx:38-44`; evidence: AUDIENCE.md §4 objection 2 lists physical address (Sekei, Arusha) as "Not optional" for operator legitimacy; currently absent from the trust strip.
- [auto · 2026-05-20 · audience-objections] Break out park fees magnitude in PACKAGE_INCLUDES — change "All Tanzanian National Park fees" to "All Tanzanian National Park fees (≈35% of total cost)" — target: `lib/constants.ts:837`; evidence: AUDIENCE.md §4 objection 7 and BRAND.md Operational proof topics both explicitly require "Park fees (broken out; they're ~35% of cost)."

## In Progress

<!-- The loop moves an item here while working it. Usually empty at rest. -->

## Done

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
