---
description: Process the top pending item in FEEDBACK.md — auto-routes to the right agent, implements, and updates the log.
allowed-tools: Read, Edit, Write, Bash, Agent, AskUserQuestion
---

You are processing **FEEDBACK.md**, the project's natural-language feedback queue. Each invocation handles ONE item from the top of **Pending**. Typically invoked under `/loop /process-feedback` for hands-off iteration.

The dev server runs on http://localhost:3000. Don't restart it.

---

## Step 1 — Read FEEDBACK.md

Read `FEEDBACK.md` at the project root.

- If the file is missing: create it with the standard structure (Pending / In Progress / Done) and stop. Tell the user to drop items into Pending.
- If **Pending** is empty (or only contains comments / placeholder text): report **"Feedback queue empty — nothing to process."** and stop. Do NOT schedule another loop iteration.

## Step 2 — Pick the top pending item

Take the topmost actionable item under `## Pending`. Move it to `## In Progress` (edit the file before doing any work — so an interruption leaves a clear trail).

If the item is a one-liner that mixes multiple concerns ("shorten the hero AND change the gallery to grid"), pick the FIRST concern, log a follow-up item for the rest at the bottom of Pending, and proceed with the first.

## Step 3 — Classify and route

Apply these rules in order. **First match wins.**

1. **Ambiguous** — vague intent, missing key detail, multiple plausible interpretations → use `AskUserQuestion` to clarify (max 4 questions). Don't extrapolate. After answers come back, continue.
2. **Brand copy** — taglines, headlines, body text, page descriptions → propose 2–3 options inline in chat; ask the user to pick. **Do not extrapolate brand copy on your own.** No agent needed.
3. **Color palette / brand-level visual shift** → before editing `globals.css` or component visuals, build the proposed direction(s) in `/design-preview` (or update the existing route) and ask the user to pick. Do not touch global tokens until approved.
4. **Visual/CSS tweak** — specific class, size, spacing, opacity change → handle inline. Surface file:line + the mechanism + the tradeoff briefly, then apply. (Project memory: "show levers before turning them.")
5. **Layout / hierarchy / typography / motion / responsive / photo composition** → `Agent(subagent_type: "ux-designer")` for a spec, then implement based on its findings. Don't blindly implement — synthesize first.
6. **Conversion / CTA / funnel / lead-gen / form UX / messaging strategy** → `Agent(subagent_type: "marketing-funnel-strategist")`.
7. **Multi-file refactor / new feature / data shape / perf-sensitive / type design** → `Agent(subagent_type: "senior-engineer")` for plan, then implement.
8. **Codebase exploration** — "where is X used", "audit all heroes", "find every place that..." → `Agent(subagent_type: "Explore")`.
9. **Otherwise** → handle directly.

When an agent returns findings, **you** synthesize and execute. Don't trust the agent summary blindly — verify by reading the actual files.

## Step 4 — Implement

Apply the change. Then verify:
- Run `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/<relevant-route>` for affected pages — expect 200.
- For visual changes, spot-check the rendered HTML/classes for the affected component if a quick way exists.

If the change spans many files, work surgically. Don't refactor surrounding code unless the feedback asked for it.

## Step 5 — Update FEEDBACK.md

Move the item from `## In Progress` to the **top** of `## Done` (newest first) in this format:

```
- YYYY-MM-DD — <one-line summary of what shipped>
    ↳ <files touched / agent(s) consulted>
```

Use today's date (run `date +%Y-%m-%d` if you need it). Keep the log line tight — a phrase, not a narrative. Use backticks around file paths.

## Step 6 — Report to the user

2–3 sentences. What changed, what to look at. Don't re-list the full diff or summarize the routing decision.

## Stop conditions

Stop the loop (do NOT schedule another iteration) when:
- Pending is empty.
- An item required clarification and you asked the user — stop here; the user's answer will re-trigger.
- An item failed (build error, runtime error, partial state). Revert the partial change, move the item back to Pending prefixed with `(BLOCKED) `, append a one-line reason, and stop.
- You've processed 5 items in this loop chain. Bail and tell the user to review before continuing — keeps things from cascading off the rails.

When all of those conditions are absent, the parent `/loop` will continue to the next item.
