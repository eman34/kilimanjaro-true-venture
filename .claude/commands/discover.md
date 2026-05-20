---
description: Discover ONE improvement for a specific page on a specific dimension. Researches the page against the source-of-truth docs, drafts a single candidate, gates via feedback-critic, and writes approved candidates to FEEDBACK.md Pending.
allowed-tools: Read, Edit, Write, Bash, Agent, WebFetch, WebSearch
---

You are running a **single discovery pass** on Kilimanjaro True Venture. You produce **at most ONE candidate** per invocation. The discovery loop is intentionally narrow: one page, one dimension, one proposal. If you find five things, pick the strongest and discard the rest.

Output is gated by the `feedback-critic` agent before reaching `FEEDBACK.md`. Most of what you draft will be rejected. That is the design.

The dev server runs on http://localhost:3001. Don't restart it.

---

## Args

Expected: `<page-route> <dimension>` — e.g., `/tours/kilimanjaro operational-density`.

Optional third arg: a competitor URL — e.g., `/tours/safaris competitor https://www.thomsonsafaris.com/safaris/`.

If args are missing or malformed: print the **Available dimensions** block below and stop. Do not guess.

## Available dimensions

| Dimension | What you check | Primary source |
|---|---|---|
| `operational-density` | Does the page surface enough operational proof topics for its depth tier? | `BRAND.md` "Operational proof topics" + `CLAUDE.md` Per-Page Depth Strategy |
| `audience-objections` | Does the page address the seven `AUDIENCE.md` §4 objections (mortality/AMS, operator legitimacy, summit success, porter ethics, fitness, change policy, value)? | `AUDIENCE.md` §4 |
| `voice-audit` | Any `BRAND.md` cut-on-sight phrases, superlatives, rhetorical questions, em dashes, adventure-bro tells? | `BRAND.md` "Cut on sight" + "What we do NOT sound like" |
| `accessibility` | Semantic HTML, ARIA correctness, keyboard nav, focus visibility, alt-text quality, color contrast against tokens | The component files + WCAG defaults |
| `conversion-friction` | Friction in CTA placement, form completion, trust hierarchy, or mobile reach per `AUDIENCE.md` §7 and §8 | `AUDIENCE.md` §7 "View-to-Inquiry Conversion Principles" and §8 "Trust Signal Hierarchy" |
| `competitor` | Find ONE specific trust signal a credible competitor surfaces that this page doesn't | The URL the user provided + `AUDIENCE.md` §8 |

## Process

### Step 1 — Resolve target

Map the route to its file:
- `/` → `app/page.tsx`
- `/about` → `app/about/page.tsx`
- `/charity` → `app/charity/page.tsx`
- `/contact` → `app/contact/page.tsx`
- `/gallery` → `app/gallery/page.tsx`
- `/tours/<slug>` → `app/tours/<slug>/page.tsx`

If the route doesn't resolve, report it and stop.

### Step 2 — Read

Read the target file in full. Read any `lib/` constant it imports (e.g., `lib/constants.ts`, `lib/safari-packages.ts`).

Read the source-of-truth doc for the dimension. Read it **fresh** every run — don't trust memory.

Read `FEEDBACK.md` — specifically `## Pending`, `## In Progress`, the most recent ~10 items in `## Done`, and `## Rejected` if it exists. You need to know what's already tracked so you don't propose a duplicate. The critic does not dedup; that's your job.

For `competitor`, also `WebFetch` the URL once and extract the rendered text.

### Step 3 — Identify ONE gap

Scan for the strongest single gap on this dimension. Strongest means:
- Cited evidence exists (AUDIENCE.md objection, BRAND.md topic, competitor specific signal).
- A reader of the page would visibly notice the absence.
- The fix is one concrete change, not a multi-area rework.

**Dedup check — required.** Before settling on a candidate, compare against the FEEDBACK.md sections you read in Step 2:

- If the gap is already in `## Pending` or `## In Progress` (matching page + concern, not exact wording) → **skip** it and identify the next-strongest gap.
- If the gap is in the most recent ~10 items of `## Done` → **skip** it; the fix is likely live and re-proposing would be a regression candidate.
- If the gap appears in `## Rejected` for this dimension → **skip** it unless the user has since added the rule the critic's `SUGGESTED REVISION` pointed at, or the spec has changed.

Repeat the "find a gap → dedup → decide" cycle until you find an unproposed gap or exhaust the dimension.

**If you can't find a meaningful gap** (genuinely nothing, or every real gap is already tracked), output the literal token `NO_GAP_FOUND` followed by one sentence on why and stop. Do not invent. Discovery loops should output silence more often than they output candidates.

### Step 4 — Draft the candidate

Use **this exact schema** — the critic parses it:

```
Page: <route>
File: <file>:<line range or "see proposal">
Dimension: <dimension>
Evidence: <one sentence citing AUDIENCE.md §X, BRAND.md topic, or competitor URL with a brief quote>
Proposed change: <one sentence — what changes, in concrete terms>
Acceptance criterion: <one sentence — what a reader/user would observe that proves it landed>
```

Hard constraints on the candidate:
- ONE concern. No "and also."
- Specific `file:` reference, not "the hero section."
- Acceptance criterion must be falsifiable — a reader could check it in 5 seconds.
- Evidence must cite a source, not assert. "Feels weak" is not evidence. "AUDIENCE.md §4 objection 3 (summit success) is unaddressed on this page" is.

### Step 5 — Invoke the critic

Call:

```
Agent(subagent_type: "feedback-critic", prompt: "<the candidate, verbatim, exactly the schema block above>")
```

Wait for the parseable block back. Parse `VERDICT`, `CATEGORY`, `REASON`, `SUGGESTED REVISION`.

### Step 6 — Route the verdict

**On `VERDICT: approve`**:

Append to `FEEDBACK.md` `## Pending` as a one-line entry in this format (this works with the existing `/process-feedback` routing):

```
- [auto · YYYY-MM-DD · <dimension>] <proposed change> — target: `<file>`; evidence: <one-line cite>
```

Use today's date (`date +%Y-%m-%d`).

**On `VERDICT: reject`**:

Append to `FEEDBACK.md` `## Rejected` (create the section at the bottom of the file if it doesn't exist yet — below `## Done`). Format:

```
- YYYY-MM-DD — REJECTED (<category>): <reason from critic>
    ↳ candidate: <one-line summary of the rejected proposed change>
    ↳ revision pointer: <SUGGESTED REVISION from critic>
```

Do not auto-retry. The point of the gate is that bad candidates die.

### Step 7 — Report to user

2–3 sentences. State the verdict, the strongest reason, and (if approved) what's now queued for `/process-feedback`.

---

## Hard rules

1. **One candidate per invocation. Never two.** If you noticed a second gap, drop it. It will surface again next run.
2. **Do not write to `## Pending` without the critic's approval.** No exceptions.
3. **Do not modify component code in this pass.** Discovery proposes; the ralph loop implements.
4. **Do not invent evidence.** If you can't cite a source-of-truth doc, an analytics signal, or a competitor URL, output `NO_GAP_FOUND`.
5. **Do not skip the critic to "save time."** The critic is the load-bearing piece. If you bypass it, the whole loop drifts.
6. **Read AUDIENCE.md, BRAND.md, REJECTIONS.md fresh every run.** They are designed to change.
7. **Always dedup against FEEDBACK.md before proposing.** A candidate that duplicates an existing Pending / In Progress / recent Done item must be skipped, not re-submitted. The critic does not check for duplicates.

## Scheduling this autonomously

Use `/loop` or `/schedule` to repeat. Examples:

```
/loop /discover /tours/kilimanjaro audience-objections
/loop /discover /tours/safaris operational-density
/schedule weekly /discover /contact conversion-friction
```

Each invocation is self-contained. The loop survives bad candidates because the critic kills them; the Rejected log accumulates patterns the user can review to grow `REJECTIONS.md`.
