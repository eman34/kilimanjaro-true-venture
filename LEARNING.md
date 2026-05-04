# Learning Curriculum: Advanced Vibe Coding via Kilimanjaro True Venture

## How to Use This File

This is a **structured curriculum** for becoming an advanced operator of an AI coding assistant (Claude Code), using this travel website as the learning vehicle.

- **Curriculum (this file):** the plan. ~22 lessons across 8 modules.
- **`PROGRESS.md`:** the tracker. One checkbox per lesson. Updated after each session.

**To start a session:** say "next lesson" — Claude will read `PROGRESS.md`, find the next unchecked lesson, and begin.

**To check status:** say "where am I?" — Claude summarizes progress without starting.

**To skip ahead:** say "skip to module N" or "skip to lesson N."

---

## Context

Low stakes. The Kilimanjaro project is a vehicle for learning, not a deadline-driven product.

- **Primary objective:** become an advanced operator of an AI coding system.
- **Secondary objective:** pick up React/Next.js/TypeScript concepts as side effects.
- **Format:** structured, school-esque. Named modules, ordered lessons, deliberate progression.
- **Calibration:** beginner programmer with course exposure. Patterns get named without re-explaining what React is.

The shift from beginner-vibe-coder to advanced-vibe-coder: the beginner gets good output by directing well. The advanced operator *configures the system* so good output is the default, then directs on top of that.

---

## What "Advanced Vibe Coding" Includes

Beyond the basics (context curation, scope, diff review):

- **Prompt as code** — prompts are programs. Specificity, constraints, role priming, few-shot examples, meta-prompting.
- **Configuring the harness** — CLAUDE.md, hooks, custom slash commands, permissions, the memory system. Half of operating Claude Code well is configuration.
- **Multi-agent orchestration** — subagents (Explore, Plan, general-purpose), parallel work, the "second AI" review pattern.
- **Failure-mode thinking** — being the pessimist. AI defaults to optimism.
- **AI-as-reviewer** — using AI to red-team its own output.
- **Durable artifacts** — plans, specs, ADRs, commits as cross-session continuity.
- **Context economy** — recognizing context pollution; knowing when to /clear, summarize, or restart.

---

## The Session Protocol (The Spine)

Non-negotiable, every session, every module:

1. **Goal in one sentence.**
2. **Smallest version that works.**
3. **Plan-first or just-do?**
4. **Commit before.**
5. **I write, you read every line of the diff.**
6. **Browser test.**
7. **Name the skill you practiced + the concept you saw.**
8. **Commit after.**

---

## Skills Matrix

Tags Claude will use in conversation. Track them — they're your vocabulary.

| Tag | Skill |
|---|---|
| `#protocol` | Running the session loop cleanly |
| `#scope` | Keeping requests small |
| `#decomposition` | Breaking big asks into slices |
| `#diff-review` | Reading every line before approving |
| `#verify` | Running the code, not trusting the type checker |
| `#trust-calibration` | When to skim vs scrutinize |
| `#hallucination` | Catching invented APIs/files/behaviors |
| `#recovery` | Git, plan mode, /clear as safety nets |
| `#prompt-craft` | Writing requests that produce good output |
| `#spec-driven` | Acceptance criteria up front |
| `#constraint-driven` | "Build X with no new deps in <100 lines" |
| `#role-priming` | "Review as a senior engineer who hates over-engineering" |
| `#meta-prompt` | Asking AI to improve your prompt before using it |
| `#claude-md` | Treating CLAUDE.md as a programming surface |
| `#hooks` | Automating enforcement via pre/post-tool hooks |
| `#commands` | Custom slash commands for repeated workflows |
| `#permissions` | settings.json — what auto-allows, what requires approval |
| `#memory` | Curating the persistent memory store |
| `#subagent` | Spawning a subagent (Explore, Plan, general-purpose) |
| `#parallel-agents` | Running independent agents concurrently |
| `#second-ai` | Fresh-context review of prior work |
| `#failure-mode` | "How does this break in production?" |
| `#red-team` | AI critiques its own output |
| `#context-economy` | Recognizing context pollution; /clear; summarize |
| `#artifacts` | Plans, specs, ADRs as durable cross-session memory |
| `#refactor-discipline` | Resisting "while I'm here" cleanup |

---

## Curriculum: 8 Modules, ~22 Lessons

Each lesson has one **primary skill** (the lesson) and one **secondary concept** (the side effect). Some modules' "code work" is on the Kilimanjaro app; some is on configuring the Claude Code setup itself.

### Module 0 — Foundations (2 sessions, compressed)

> **Objective:** Internalize the Session Protocol fast. Required for everything that follows.

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 1 | **First Loop** | `#protocol` | One-line copy fix in `lib/constants.ts`. Feel all 8 steps. |
| 2 | **Diff Review Drill** | `#diff-review` `#scope` | Claude makes a ~50-line change; you read line by line and explain it back. |

### Module 1 — Prompt Craft (4 sessions)

> **Objective:** Treat prompts as code. Move from "vague request → iterate 4×" to "precise request → good first try."

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 3 | **Specificity & Constraints** | `#prompt-craft` `#constraint-driven` | Same task ("add a section to homepage"), three prompts of varying quality. Compare outputs. |
| 4 | **Spec-Driven Prompts** | `#spec-driven` | Write acceptance criteria *before* asking. Apply to a real change (e.g., empty state for `GalleryGrid`). |
| 5 | **Role Priming** | `#role-priming` | Ask Claude to review code "as a senior engineer who hates over-engineering" vs "as a designer." See how output shifts. |
| 6 | **Meta-Prompting** | `#meta-prompt` | "Help me write a better prompt for X" — the move that compounds. |

### Module 2 — Verification, Trust, Red-Teaming (3 sessions)

> **Objective:** Calibrate trust per task; use AI to attack its own output.

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 7 | **Trust Calibration** | `#trust-calibration` `#verify` | Pair a high-trust task (boilerplate TourCard) with a low-trust task (form validation logic). Practice both review modes. |
| 8 | **Hallucination Drill** | `#hallucination` | With permission, Claude plants something subtly wrong in a change. See if you catch it. |
| 9 | **AI-as-Reviewer** | `#red-team` `#second-ai` | After Claude implements something, spawn a fresh subagent to red-team it. Compare what it finds. |

### Module 3 — Safety Nets & Context Economy (2 sessions)

> **Objective:** Recover from any session gracefully. Stop fearing the AI's edits.

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 10 | **Plan Mode & Artifacts** | `#recovery` `#artifacts` | Use plan mode for a real feature. Save the plan as a durable file. Reference it later. |
| 11 | **Git + Context Hygiene** | `#recovery` `#context-economy` | Branches, worktrees, `git reset`, /clear, knowing when to start a fresh session. |

### Module 4 — Configuring the Harness (4 sessions, advanced)

> **Objective:** Engineer your AI setup so good output is the default. **Code work here is on Claude Code itself, not the Kilimanjaro app.**

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 12 | **CLAUDE.md as a Programming Surface** | `#claude-md` | Audit the existing CLAUDE.md. Add anti-patterns, repo-specific conventions, file index, "ask before X" rules. |
| 13 | **Custom Slash Commands** | `#commands` | Write a `/review-component` command that runs a fixed prompt. Lives in `.claude/commands/`. |
| 14 | **Hooks** | `#hooks` | Add a post-edit hook that runs typecheck or similar. Automate what you'd otherwise enforce manually. |
| 15 | **Permissions & Memory** | `#permissions` `#memory` | Tune `.claude/settings.json` — what auto-allows. Curate the memory store: what should Claude remember about you across sessions? |

### Module 5 — Multi-Agent Orchestration (2 sessions)

> **Objective:** Use subagents deliberately to keep your main context clean and parallelize work.

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 16 | **Spawning Subagents** | `#subagent` | Use Explore for codebase research, Plan for architecture, general-purpose for multi-step tasks. Recognize when each fits. |
| 17 | **Parallel Agents + Second-AI Review** | `#parallel-agents` `#second-ai` | Spawn 2 agents concurrently for independent work. Have one review the other's output in fresh context. |

### Module 6 — Production & Architectural Thinking (3 sessions)

> **Objective:** Build the pessimist muscle. AI defaults to optimism — your job is the failure-mode lens.

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 18 | **"How does this break?"** | `#failure-mode` | Take a recent change. Walk through: bad input, network failure, 10k users, mobile, accessibility. AI rarely volunteers these. |
| 19 | **Architectural Conversation** | `#prompt-craft` (architectural) | Before building a feature, ask Claude for 3 alternative approaches with tradeoffs. Pick consciously. |
| 20 | **ADRs & Spec → Plan → Code** | `#artifacts` | Write a small ADR (Architecture Decision Record) for a real choice. Use the plan-mode workflow as the pipeline. |

### Module 7 — Graduation (ongoing)

> **Objective:** Apply the full toolkit on real shipping work.

| # | Lesson | Primary skill | Code work |
|---|---|---|---|
| 21 | **Final Exam: Email Integration** | All of the above | The TODO at `app/api/inquiry/route.ts:36`. Spec → plan → implement → red-team → ship. Use ≥5 named skills explicitly. |
| 22+ | **Feature-Driven** | Whatever the work needs | You bring features. Claude surfaces the relevant skill tag each session. |

---

## Coding Concepts (Sidebar)

You'll pick these up as side effects, in roughly this order:

- **Module 0–1** → file structure, JSX, props
- **Module 2** → `useState`, controlled inputs, conditional rendering
- **Module 3** → git internals (working tree / staging / history)
- **Module 4** → JSON config, shell commands, the Claude Code mental model
- **Module 5** → concurrency, separation of concerns
- **Module 6** → architectural patterns, error handling, edge cases
- **Module 7** → API routes, env vars, async/await, server vs client

Patterns get named when they appear. The curriculum doesn't reorder around concepts.

---

## Anti-Patterns

**In Claude — call it out:**
- Scope drift (changes you didn't ask for)
- Long explanations after simple changes
- Inventing APIs, libraries, file paths (`#hallucination`)
- "While I'm here" refactoring (`#refactor-discipline`)
- Skipping the browser (`#verify`)
- Adding "just in case" error handling, fallbacks, comments
- Default-optimist framing — not surfacing failure modes

**In yourself:**
- Approving without reading the diff (`#diff-review`)
- Asking for everything at once (`#decomposition`)
- Defaulting to "you do it" without writing a precise prompt
- Skipping `git commit` between sessions
- Letting context pollute across unrelated tasks (`#context-economy`)
- Not asking for alternatives — taking the first answer as the answer

---

## How You Know It's Working

End of each module, self-check:

- [ ] Could I describe what changed in the last few commits?
- [ ] Did I catch at least one Claude mistake before approving?
- [ ] Could I have written my prompt better?
- [ ] Did I use the named skill explicitly this session?

End of Module 7 (graduation):

- [ ] Could I direct a different AI assistant on a different project using these skills?
- [ ] Could I configure a fresh Claude Code project (CLAUDE.md, commands, hooks) without help?
- [ ] Could I explain `#meta-prompt`, `#second-ai`, `#failure-mode` to someone else?
- [ ] Have I used at least 15 of the skill tags in real work?

---

## Critical Files

- `CLAUDE.md` — most important programming surface (Module 4 audits it)
- `.claude/settings.json` (or `~/.claude/settings.json`) — permissions, hooks (Module 4)
- `.claude/commands/` — custom slash commands (Module 4)
- `lib/constants.ts` — single source of truth for content
- `app/api/inquiry/route.ts:36` — Module 7 final exam
- `components/InquiryForm.tsx` — densest example component (Module 2)
- `components/GalleryGrid.tsx` — useState + filtering (Module 1)
