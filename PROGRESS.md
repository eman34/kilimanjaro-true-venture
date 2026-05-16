# Learning Progress

Curriculum: see `LEARNING.md`.

**Resume convention:** at session start, say "next lesson" — Claude reads this file, finds the next unchecked lesson, and begins.

---

## Current Status

**Next up:** L8 — Hallucination Drill (`#hallucination`)

---

## Module 0 — Foundations
- [x] L1: First Loop — `#protocol` — one-line copy fix in `lib/constants.ts`
- [x] L2: Diff Review Drill — `#diff-review` `#scope` — read a 50-line change line by line

## Module 1 — Prompt Craft
- [x] L3: Specificity & Constraints — `#prompt-craft` `#constraint-driven`
- [x] L4: Spec-Driven Prompts — `#spec-driven`
- [x] L5: Role Priming — `#role-priming`
- [x] L6: Meta-Prompting — `#meta-prompt`

## Module 2 — Verification, Trust, Red-Teaming
- [x] L7: Trust Calibration — `#trust-calibration` `#verify`
- [ ] **L8: Hallucination Drill** ← next — `#hallucination`
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
- 2026-05-11 — L5: Role Priming — `#role-priming` — Compared two reviews of `components/FeaturedTours.tsx` from parallel subagents (preview of `#subagent`/`#parallel-agents` from Module 5): one primed as a senior engineer who hates over-engineering, one as a senior product designer. Near-zero overlap of findings even when both pointed at the same line: at line 20, engineer flagged the `arrowDisabled` constant as over-extracted; designer flagged `cursor-not-allowed` as a lie that reads "broken" rather than "at the end." Engineer voted ship-as-is; designer voted ship with two fixes. Steering-wheel claim confirmed: same file, different prompt, disjoint reports. Attempted Bug 1 fix (silent filter scroll-teleport) with Approach B: a `scrollTo({left:0})` effect on `[filter]` plus an `sr-only` `aria-live="polite"` region with a derived "Showing N tours in X" string. Browser test caught a gap: the reset wasn't visible on All→Safari because Safari's 3 cards (~918px) fit the desktop scroller — browser auto-clamps `scrollLeft` to 0 already, our effect is a no-op, and the visible cards happened to be the same ones (tours 7-9 of the unfiltered list became tours 1-3 of safari). Diagnosis was correct (not a code bug), but the real spec turned out more nuanced than the one-shot patch: transition should fire iff source filter had `scrollLeft > 0`, and for no-overflow destinations the fix needs scroll-then-swap sequencing or a fade — not a single effect. Reverted via `git restore components/FeaturedTours.tsx` to revisit later with a clearer spec. Bonus concepts: prompt negative space ("do NOT comment on X" sharpened both reviews more than the role label); `aria-live="polite"` + `sr-only` pattern for screen-reader-only announcements; browser auto-clamps `scrollLeft` when content shrinks below clientWidth; `git restore` (discards uncommitted changes) vs `git revert` (creates a new inverse commit, preserves history) — the colloquial use of "revert" is technically the former.
- 2026-05-16 — L6: Meta-Prompting — `#meta-prompt` — Pivoted from L5's unfinished filter-transition bug to a greenfield `/gallery` redesign (wider ambiguity surface = stronger L6 target). User's meta-prompt surfaced ~10 ambiguities they hadn't pre-decided across placement / conversion / content / form-factor. Fired `marketing-funnel-strategist` in background (preview of `#second-ai`/`#subagent` from Module 5) — grounded in BRAND.md + AUDIENCE.md, it recommended uniform grid + lightbox + category-tagged tour-page exit link, with a `#failure-mode` flag: gallery-as-destination not doorway. User overruled the agent on form factor (chose masonry) but accepted the exit-link sub-decision. "95% shared vision" interview pass revealed most of it already existed (`components/GalleryGrid.tsx` had hand-rolled lightbox with keyboard nav, click-out, image counter, filter chips) — implementation became a tweak not a build. Surfaced photo-coverage gap (0 photos for Zanzibar/Cultural → shipped 3 chips not 5) and inspected real pixel dimensions via `sips` so masonry could use intrinsic aspect ratios. Implementation prompt as durable artifact: 11 explicit ACs, full data table for 17 photos, code-block change spec — fresh-Claude executability test. 4 edits applied cleanly. Bonus concepts: CSS `columns-N` masonry (flows top-to-bottom within columns, not L→R — irrelevant for non-narrative galleries); `break-inside-avoid` to prevent tile splitting across columns; Next.js Image intrinsic `width`/`height` vs `fill` (masonry needs intrinsic heights, so `fill` is wrong here); `Record<string, ...>` lookup map with safe undefined fallback via `&&` short-circuit; `e.stopPropagation()` on the lightbox bottom div so clicking the Link doesn't trigger backdrop close; `#refactor-discipline` exception for removing `getGridClasses`/`getAspectRatio` (dead after layout swap, not "while I'm here"). The `#meta-prompt` + `#second-ai` stack is roughly the highest-leverage two-skill combo in the curriculum, and you used both without prompting.
- 2026-05-16 — L7: Trust Calibration — `#trust-calibration` `#verify` — Paired tasks for mode-switch practice. Task 1 (high-trust): added 2 testimonials to `TESTIMONIALS` (Mt Meru / Netherlands, Zanzibar / India). Pure data, pattern-replicating, user skimmed and passed in ~10s. Task 2 (low-trust): added real JS validation to `components/InquiryForm.tsx`. User read every line in claimed scrutinize mode and found zero gaps. The scrutiny-found-zero-gaps moment was the lesson — 7 real bugs were present across 3 tiers: error-state lifecycle (errors don't clear on field edit), HTML5-required short-circuits JS for empty fields (two different error styles), email regex too lenient (`a@b.c` passes), `Number()` accepts scientific notation (`1e2` → 100 passes `Number.isInteger`), double-submit race (disabled attr not applied before first re-render), no message length cap, `as Record<string, string>` cast lying about FormData typing. Plus a TS diagnostic on `FormEvent` deprecation as a free finding. Takeaway: trust calibration is two-part — switching modes deliberately (the easy half) AND having a bug-pattern library so scrutiny is productive (takes years; got 7 specimens today). User asked to fix all 3 tiers, then also resolve the FormEvent deprecation. Presented 4 alternatives with tradeoffs (inline anonymous handler / `ComponentProps` lookup / ref-based / suppress); user chose ref-based. Refactored: `useRef<HTMLFormElement>` for direct DOM access; `handleSubmit()` takes no params and reads `formRef.current` instead of `e.currentTarget`; `clearFieldError(name: string)` replaces `handleFieldChange(e: ChangeEvent)`. Events become JSX wiring (3-line inline arrow on `onSubmit`), not data carriers. Bonus concepts: `noValidate` to disable HTML5 bubble-popups so JS validation can own the UI; `/^\d+$/` precheck before `Number()` to reject scientific notation; functional `setState((prev) => ...)` to avoid stale closures when mutating the errors record; refs as React's escape hatch (sticky-note model: empty until mount, then holds the DOM element); the React 19 / @types/react synthetic-event deprecation as an unsettled ecosystem transition (no single idiomatic replacement yet); testability gain from ref-based pattern (named handler is honest about its dependency — the form ref — and can be unit-called without faking events).
