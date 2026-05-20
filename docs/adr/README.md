# Architecture Decision Records (ADRs)

Short, durable records of architectural decisions: what we chose, what alternatives we considered, and why this trade made sense **at the time**.

## Purpose

ADRs preserve the *why we didn't* — the most expensive thing to reconstruct from scratch. Future contributors (or future-you in 18 months) can see the codebase's current shape but not the decisions that produced it. This directory is where that reasoning lives.

An ADR is *not* a plan (those live in `plans/`) and *not* a spec. It's a one-page snapshot of a decision moment, frozen so it survives the conversation it came from.

## Conventions

- **Filename:** `NNNN-kebab-title.md`, zero-padded to four digits (`0001-`, `0002-`, …). Numbers are monotonic and never reused, even if an ADR is superseded.
- **Status:** one of `Proposed`, `Accepted`, `Deprecated`, `Superseded by NNNN`. Most ADRs land as `Accepted`.
- **Length:** aim for one page. If it grows past two, the decision is probably actually two decisions.
- **Sections:** Status, Date, Context, Decision, Alternatives Considered, Consequences (positive / negative / neutral), Migration path. Adjust as needed; the headings are guides, not rules.
- **Cross-link** to the plan file (`plans/`) and commit hash that implemented the decision.

## When to write one

- After a real architectural choice where the *alternatives mattered* (not "should this variable be named X or Y"). The L19 lesson's "3 alternatives + named trade" pattern is the typical trigger.
- When you'd want a future-you reading the codebase to *understand the constraint that drove the shape* — e.g., "why are we using Pagefind and not Algolia?"
- After incidents that change architectural assumptions.

## When *not* to write one

- For stylistic preferences (those go in `CLAUDE.md` or `BRAND.md`).
- For implementation plans (those go in `plans/`).
- For decisions that are reversible in a single afternoon with no downstream impact.

## Index

| # | Title | Status | Date |
|---|---|---|---|
| [0001](./0001-site-search-pagefind.md) | Site search via Pagefind | Accepted | 2026-05-20 |

## Further reading

The format here is loosely based on Michael Nygard's 2011 post ["Documenting Architecture Decisions"](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), with sections borrowed from [MADR (Markdown Any Decision Records)](https://adr.github.io/madr/). Either reference is a good starting point if you're new to the format.
