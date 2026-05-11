# Learning Progress

Curriculum: see `LEARNING.md`.

**Resume convention:** at session start, say "next lesson" — Claude reads this file, finds the next unchecked lesson, and begins.

---

## Current Status

**Next up:** L5 — Role Priming (`#role-priming`)

---

## Module 0 — Foundations
- [x] L1: First Loop — `#protocol` — one-line copy fix in `lib/constants.ts`
- [x] L2: Diff Review Drill — `#diff-review` `#scope` — read a 50-line change line by line

## Module 1 — Prompt Craft
- [x] L3: Specificity & Constraints — `#prompt-craft` `#constraint-driven`
- [x] L4: Spec-Driven Prompts — `#spec-driven`
- [ ] **L5: Role Priming** ← next — `#role-priming`
- [ ] L6: Meta-Prompting — `#meta-prompt`

## Module 2 — Verification, Trust, Red-Teaming
- [ ] L7: Trust Calibration — `#trust-calibration` `#verify`
- [ ] L8: Hallucination Drill — `#hallucination`
- [ ] L9: AI-as-Reviewer — `#red-team` `#second-ai`

## Module 3 — Safety Nets & Context Economy
- [ ] L10: Plan Mode & Artifacts — `#recovery` `#artifacts`
- [ ] L11: Git + Context Hygiene — `#recovery` `#context-economy`

## Module 4 — Configuring the Harness
- [ ] L12: CLAUDE.md as a Programming Surface — `#claude-md`
- [ ] L13: Custom Slash Commands — `#commands`
- [ ] L14: Hooks — `#hooks`
- [ ] L15: Permissions & Memory — `#permissions` `#memory`

## Module 5 — Multi-Agent Orchestration
- [ ] L16: Spawning Subagents — `#subagent`
- [ ] L17: Parallel Agents + Second-AI Review — `#parallel-agents` `#second-ai`

## Module 6 — Production & Architectural Thinking
- [ ] L18: "How does this break?" — `#failure-mode`
- [ ] L19: Architectural Conversation — `#prompt-craft`
- [ ] L20: ADRs & Spec → Plan → Code — `#artifacts`

## Module 7 — Graduation
- [ ] L21: Final Exam — Email Integration (`app/api/inquiry/route.ts:36`)
- [ ] L22+: Feature-Driven (ongoing)

---

## Session Log

(Claude appends one line per completed session: date, lesson, skill practiced, brief note.)

- 2026-05-05 — L1: First Loop — `#protocol` — Em dash → period in `lib/constants.ts:53` (Wildlife Safaris card). Side trip mid-lesson: built `BRAND.md` and referenced from `CLAUDE.md` (foreshadows L12 `#claude-md`); plus `#meta-prompt` exercise on agentic loop design.
- 2026-05-06 — L2: Diff Review Drill — `#diff-review` `#scope` — Added `components/TrustStrip.tsx` and wired into `app/page.tsx` between Hero and Featured Tours, reinforcing the BRAND.md takeaway thread. ~40 lines across 2 files. Read line-by-line, scope verified clean. Bonus concepts surfaced: utility-first CSS philosophy, Tailwind 4 `@theme` config in `app/globals.css`, flexbox main/cross axis, `group`/`group-hover:` parent-scoped hover, `node_modules` vs project code.
- 2026-05-08 — L3: Specificity & Constraints — `#prompt-craft` `#constraint-driven` — Compared three prompts (vague / specific / specific+constrained) for refactoring home Featured Tours. User caught the meta-flaw: even Prompt C was scoped to a Kili-specific section while the brand spans 5 product lines — Step 0 of #prompt-craft is "is this the right thing to build?" Refactored `FEATURED_TOURS` shape (added `category` + `duration` + `priceFrom`), redesigned `TourCard.tsx`, created `components/FeaturedTours.tsx` as a client component with filter chips (All / Kilimanjaro / Safari) and a horizontal snap-scroll carousel with chevron buttons (disabled-at-edges, hidden on mobile). Multiple plan-mode pivots driven by browser-test feedback: layout flipped from grid→single row→arrows-outside-cards; cards tightened (smaller image, less padding, lower min-h); UI cleanup (removed Starts from / Per person / View Trip pill; added USD prefix). Bonus concepts: `useState`+`useRef`+`useEffect` cleanup, client/server component split (`"use client"`), CSS `scroll-snap`, programmatic `scrollBy`, the `mt-auto` + `min-h` pattern for uniform card heights with bottom-aligned content (and the asymmetric-gap trade-off it forces).
- 2026-05-11 — L4: Spec-Driven Prompts — `#spec-driven` — Side trip first: drafted `AUDIENCE.md` (buyer psychology + 12 conversion principles + trust hierarchy) and committed it before lesson start. Step 0 of the lesson rejected the curriculum-suggested target (`GalleryGrid` empty state — not reachable today) and pivoted to "Why Choose Kilimanjaro True Venture" instead. Wrote 6 ACs *before* drafting copy (content / wedge / Abu Hope tone / 3-card structure / BRAND.md voice exclusions / truth-anchor). User course-corrected three factual overclaims mid-AC drafting — Abu is mid-20s (no veteran framing), shared ownership as values claim not legal claim (don't single Abu out), KTV is for-profit so the foundation is "supported when possible" not "funded by profits." The AC stage absorbed the taste/truth work upfront, so implementation was mechanical: replaced `WHY_CHOOSE_US` (6 cards) → `VALUES` (3 cards) in `lib/constants.ts`, swapped section h2 to *Tanzanian-owned. Tanzanian-guided. Tanzanian-built.*, dropped the subtitle paragraph, changed grid from `md:grid-cols-2 lg:grid-cols-3` → `md:grid-cols-3`, trimmed `ICONS` map (removed shield/package/trophy as dead). Bonus concepts: Intrepid as anti-template (scale-flexing inverted to locality-insistence); the wedge-by-omission move (contrast lands by absence of corporate vocabulary, not by trash-talking competitors); section-purpose reframe (features vs. values is a rhetorical-job distinction); renaming a constant when its name no longer matches its content (`#refactor-discipline` exception — same edit, not "while I'm here").
