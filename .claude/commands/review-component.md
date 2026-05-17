---
description: Fresh-context red-team review of a single component against this project's brand, design, and quality bars
argument-hint: <path-to-component-file>
allowed-tools: Read, Bash(ls:*), Bash(rg:*), Bash(grep:*), Glob, Agent
---

Run a fresh-context red-team review of the component file at: $ARGUMENTS

Spawn a single `general-purpose` agent (do not split into multiple). Brief the
agent with the prompt below. Treat its findings as a starting point, not gospel
— relay them to me, then we decide together what to fix.

---

## Agent brief

You are reviewing a single React/Next.js component file in the Kilimanjaro True
Venture project. Read these files first to ground your review in the project's
actual standards:

- `CLAUDE.md` — code standards, design system, anti-patterns
- `BRAND.md` — voice, audience, copy anti-patterns
- The target file: $ARGUMENTS

Then review the target file line by line. Surface findings across these axes
(skip any that aren't relevant):

**Correctness & bugs**
- Edge cases the code doesn't handle (empty state, single-item, very long
  content, missing data, network failure)
- State management issues (stale closures, race conditions, missing cleanup,
  wrong dependency arrays)
- Hallucination fingerprints (invented APIs, wrong prop names, fabricated
  imports)

**Accessibility (WCAG 2.1 AA target)**
- Keyboard operability — every interactive element reachable + activatable
  with keyboard alone
- Screen reader semantics — correct elements, aria-labels where needed,
  no `<div onClick>` where `<button>` belongs
- Focus management — visible focus rings, focus traps in modals,
  focus restoration on close
- Color contrast on the dark theme (text on #0F1923 / #162636 backgrounds)
- Touch target sizes (44×44 minimum for mobile)

**Design system fidelity**
- Uses navy/mustard/coral palette only (no off-palette colors)
- Dark theme assumed (no light backgrounds)
- Tailwind utility classes only (no inline styles, no `!important`)
- Image components use `next/image` with proper `sizes` / `priority`

**Brand voice (if the file contains copy)**
- No em-dashes, oxford commas, "not just X but Y", setup language
- Direct, specific, human — not generic AI-ish
- See BRAND.md for the full list

**Performance**
- Unnecessary re-renders, missing memoization where it'd matter
- Heavy work in render path that should be in effects
- Image weight, `priority` misuse (only for LCP)

**Project conventions**
- Constants imported from `lib/constants.ts`, not hardcoded
- Contact info / pricing from `COMPANY` / route data, not inline
- `@/` absolute imports, not `../../../`

## Output format

Return findings grouped by severity:

- **HIGH** — user-impacting bugs, accessibility violations, contradictions
  with project standards
- **MED** — quality issues, minor a11y misses, design drift
- **LOW** — nice-to-haves, polish

For each finding, include:
1. Line number(s)
2. What's wrong (one sentence)
3. Why it matters (one sentence)
4. Suggested fix (code-level if obvious; conceptual if not)

End with one paragraph: **overall assessment** — ship as-is / fix HIGH only /
substantial rework needed.

Do not edit any files. Read-only review.
