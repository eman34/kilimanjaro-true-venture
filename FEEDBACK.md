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

## In Progress

<!-- The loop moves an item here while working it. Usually empty at rest. -->

## Done

- 2026-05-18 — Hero shortened ~20%
    ↳ `components/Hero.tsx` aspect ratios (15/8 mobile · 2/1 tablet · 3/1 desktop), `min-h-[220px]` floor
- 2026-05-18 — Cinematic 21:9 hero rollout
    ↳ `Hero.tsx` rebuilt (bottom-left title, smaller type, no CTA, wine/30 overlay), 10 page call sites updated with taglines
- 2026-05-18 — Wine + Emerald on Paper palette
    ↳ 8 tokens in `globals.css`, 145+ class renames across `app/` + `components/`, `CLAUDE.md` updated
