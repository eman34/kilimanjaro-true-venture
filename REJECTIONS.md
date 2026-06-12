# Rejections — the anti-spec

This file is the **anti-spec** for autonomous proposals on Kilimanjaro True Venture. Any proposal that violates a rule below should never reach `FEEDBACK.md` **Pending**. The `feedback-critic` agent uses this file as its rejection criterion.

Intentionally redundant with `BRAND.md`, `CLAUDE.md`, and `AUDIENCE.md` for the things autonomous agents repeatedly get wrong. The other docs say what to *do*; this one says what to **never propose**.

**How to grow this file.** Every time you reject a proposal from a discovery loop or in chat, write the rule that would have rejected it. One line. Within a few weeks, this becomes the orchestrator.

---

## Aesthetic & design system

- **Do not propose color-palette changes** — new tokens, gradient stacks, accent swaps. The Olive + Gold system (June 2026, derived from the company merch design) is settled. If a real palette concern surfaces, `CLAUDE.md` requires building it in `/design-preview` first; do not edit `globals.css` until approved.
- **Do not propose a second saturated accent.** Gold is the only one. Don't sneak emerald, teal, terracotta in via "complementary" language.
- **Do not propose gold text or gold icon strokes on cream surfaces.** `gold` fails contrast there (2.0:1). On cream, gold presence means `text-gold-deep` or a gold fill behind dark text.
- **Do not propose additional textured dividers.** `SectionDivider` appears only at the top of the two dark olive bands (CTABanner, Footer).
- **Do not propose dark page backgrounds.** Page bg is `paper` (cream). Dark olive blocks are reserved for CTABanner, Hero overlay, and the Footer band specifically.
- **Do not propose hex literals in JSX.** Tailwind tokens only.
- **Do not propose "make it pop / modernize / bring it to life"** or any unfalsifiable aesthetic claim. If there is no one-line acceptance test, drop the proposal.
- **Do not propose typeface changes** outside the established stack.
- **Do not propose decorative motion, parallax, or kinetic typography.** The design language is editorial-luxe restraint, not interactive showpiece.

## Brand voice & copy

- **Do not propose copy that frames Abu as a veteran**, lifelong-mountaineer, decades-experienced, or otherwise age-elevated. He is mid-20s. Proof comes from operational density, not seniority.
- **Do not propose "profits fund the foundation"** or any transactional charity framing. Abu Hope is "when-able" support, not a percentage.
- **Do not propose adventure-bro copy.** See `BRAND.md` "What we do NOT sound like" table.
- **Do not propose marketing superlatives** — "world-class", "unforgettable", "ultimate", "transformative", "embark", "magic". `BRAND.md` "Cut on sight."
- **Do not propose copy rewrites unless a specific `AUDIENCE.md` objection is currently unaddressed.** Voice changes for their own sake are out of scope.
- **Do not propose rhetorical questions** ("Are you ready to…?"). Cut on sight.

## Information architecture & scope

- **Do not propose new top-level pages.** The route set is settled.
- **Do not propose new navbar items** or reordering Kilimanjaro/Safari out of intent-priority slots. The navbar funnel is fixed (project memory: navbar intent-funnel principle).
- **Do not propose increasing copy density on the home page.** Home is `Light` per the Per-Page Depth Strategy. Density is for tour pages.
- **Do not propose decreasing density on tour pages.** Depth is the trust work — don't "tighten" Kilimanjaro to read more like the home.
- **Do not propose lead magnets, newsletter signups, loyalty programs, gamification, chatbots, or pop-ups.** This is an inquiry-form site.
- **Do not propose framework or dependency changes** (Next.js upgrades, animation libraries, design-system libraries, headless CMS) as part of a UX/marketing pass. That is a separate `senior-engineer` engagement.

## Founder, ownership, foundation

- **Do not propose copy that claims sole legal ownership** of mountain operations or partner camps. Ownership is a plural values claim ("Tanzanian-owned", "locally owned"), not a legal claim about a single person.
- **Do not propose charity-first framing at the top of any funnel.** Abu Hope has its own page; it does not lead the home, the safari page, or the Kili page.

## Proposal hygiene (the meta-rules)

These reject *how* a proposal is structured, regardless of subject.

- **Reject if no specific `file:line` or component name is cited.** Vague proposals ("the hero feels stale") are not actionable.
- **Reject if no falsifiable acceptance criterion is given.** "Make it cleaner" fails. "Replace the second paragraph on `/tours/kilimanjaro` with a 3-line operational fact block naming the AMS protocol" passes.
- **Reject if the proposal asserts a problem without evidence.** Cite which `AUDIENCE.md` objection, which `BRAND.md` rule, which analytics signal, or which competitor URL.
- **Reject if more than one change is bundled.** One discovery run produces at most one entry.
- **Reject if the proposal is purely adjectival** — no specific number, name, mechanism, or quoted source.
- **Reject if the proposal is a refactor disguised as UX feedback** ("restructure the component tree to enable…"). Refactor proposals go via a `senior-engineer` engagement, not the FEEDBACK queue.
