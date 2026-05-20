# L21 — Email Integration (planning, awaiting stakeholder answers)

**Lesson:** L21 Final Exam — Email Integration
**Target file:** `app/api/inquiry/route.ts:36`
**Status:** ⏳ **PROPOSED** — implementation blocked on Abu's answers to the questions in §3.

---

## 1. Goal

When a visitor submits the contact form at `/contact`, Abu (and possibly others) receive an inquiry email at a real inbox within seconds, and the visitor sees a clear success confirmation on the page. Replaces the current `console.log`-only behavior at `app/api/inquiry/route.ts:25-34` that silently drops leads in production.

## 2. What we know

Constraints already established (no need to revisit with Abu):

- **Free tier required.** No ongoing monthly cost. Excludes Postmark (paid after 30-day trial), AWS SES at scale (production-access process), and any vendor without a real perpetual free tier.
- **Low expected volume.** Most leads come via WhatsApp; email is secondary. Free-tier daily/monthly caps should be comfortable.
- **Abu is in Tanzania.** Relevant for:
  - Response-time SLA — he's not at a desk during expeditions; could be guiding on the mountain for 7+ days
  - Some marginal deliverability considerations to/from East Africa (generally fine on major providers, but worth verifying)
- **No new dependencies beyond what's necessary.** A single provider SDK or `fetch`-based call is acceptable; avoid heavy frameworks for a single endpoint.

Existing surface area:

- `app/api/inquiry/route.ts` already validates input (name, email, tour required; email regex), logs to console, returns success. Email-send is the missing piece — the route is the right place to add it.
- `components/InquiryForm.tsx` is the consumer; assumes a JSON `{success, message}` or `{error}` response. No client changes needed if we keep the contract.
- `lib/constants.ts` `COMPANY` object holds the source-of-truth domain / email / phone — exact values to verify with Abu (the route.ts comment hardcodes guesses).

## 3. Stakeholder questions for Abu

⚠️ **These block implementation.** Do not start the architectural conversation (§5) until at least A.1–A.3, B.4, and D.8–D.9 are answered.

### A. Domain & DNS access *(blocks everything)*

1. **Does KTV own a domain name like `kilimanjarotrueventure.com`?** Or is the site hosted under a different domain — `.co.tz`, `.tz`, a subdomain of a partner?
2. **Who set up the domain, and do you have login access to where it's registered?** (Common registrars: Namecheap, GoDaddy, Cloudflare, or a Tanzanian local provider. Abu may know it as "the IT guy who built the site" or "the website company.")
3. **Are you currently using any email service on that domain?** Is `something@kilimanjarotrueventure.com` already receiving mail in a Google Workspace / Microsoft 365 / Zoho inbox?

> *Why these matter:* Most email providers refuse to send from a domain unless we can add DNS records (DKIM, SPF, sometimes DMARC) to prove control. Without DNS access, our options shrink to "send from the provider's sandbox domain" — works for testing, looks unprofessional in production. If Google Workspace is already in use, we may route through it instead.

### B. Inbox routing

4. **What email address should inquiry messages arrive at?**
   - A new dedicated address like `inquiries@kilimanjarotrueventure.com` (clean separation; requires receiving setup if not already there)
   - Abu's existing personal/business email (works immediately, no setup, less professional)
   - A shared inbox if office staff also handle inquiries
5. **Is there anyone besides Abu who should also see new inquiries?** (Office manager in Sekei? Backup person when Abu is up the mountain for 7+ days?)

> *Why:* Determines whether the email's "to" field is one address or a list. Also surfaces a failure mode: if Abu is the only recipient and is offline for 8 days, no leads get answered.

### C. Response expectations

6. **What turnaround are you targeting for inquiry replies?** Same-day / 24 hours / 48 hours?
7. **What's your default reply approach?** A quick acknowledgment followed by a detailed reply later? Straight to detailed reply? Voice-note follow-up via WhatsApp?

> *Why:* Lets us write the success message and the contact-page copy accurately ("we reply within X"). Also informs whether we add an *autoresponder* email to the visitor (another email per inquiry — affects free-tier headroom).

### D. Existing tools & comfort

8. **Have you ever used any email-sending service before?** Resend, SendGrid, Mailchimp, anything? Are there existing accounts or free-tier credits we should use?
9. **Are you comfortable adding a credit card on file** with an email provider, even if we stay on the free tier? Some providers (AWS SES, SendGrid) require one; others (Resend, Brevo) don't.

> *Why:* Narrows provider choice based on existing accounts and billing comfort. Avoids backtracking after we pick.

### E. WhatsApp interplay *(future-looking; not blocking this lesson)*

10. **Should new email inquiries also trigger a WhatsApp notification to you?**

> *Why:* You said most traffic is WhatsApp. If inquiries should ping Abu's WhatsApp too, future architecture needs a webhook surface. Not blocking, but worth knowing upfront to inform provider choice (some have better webhook support).

## 4. What we're deferring to ourselves (don't burden Abu)

These decisions are ours to make once Abu's answers arrive. Don't ask him about:

- Which specific email provider (we'll recommend after his answers)
- Email subject line and body template (we draft; show him before shipping)
- Whether the visitor gets an autoresponder back
- DNS record values (we'll give him exact values to paste — he doesn't design them)
- Error handling, retry logic, logging on our server
- Spam/abuse prevention on the inquiry endpoint

Abu gets **one round** of focused questions, ideally **one batch** of answers. Don't make him a project manager.

## 5. Once answers arrive — what this plan becomes

This file then matures as follows. **Don't write any of the below until §3 is resolved.**

- **Spec:** lock down the acceptance criteria (which inbox, autoresponder yes/no, expected SLA copy, etc.)
- **Architectural conversation (`#prompt-craft` architectural):** present three credible provider alternatives with tradeoff axes (free-tier ceiling, domain verification flow, deliverability to East African ISPs, regional restrictions, future webhook support, vendor lock-in, SDK quality). Provisionally, the leading candidates are:
  - **Resend** — 100/day, 3000/month free; modern API; Next.js community default in 2026; requires domain verification (or sandbox)
  - **Brevo (formerly Sendinblue)** — 300/day free; reasonably strong presence outside US/EU markets; broader product (also SMS, WhatsApp), which interacts with question E.10
  - **Google Workspace SMTP** — if Abu already uses Workspace per A.3, can relay through Gmail; tighter quotas but zero new vendor; no separate signup
- **ADR (`docs/adr/0002-email-provider.md`, `#artifacts`):** record the choice with context, alternatives, consequences, and migration path
- **Implementation plan** (replaces §3-§5 of this file):
  - Add provider SDK or `fetch`-based email call to `app/api/inquiry/route.ts`
  - Store API key in `.env.local` + Vercel env vars (`#permissions`)
  - HTML + text email template with all form fields
  - Error handling: log on our side, fail gracefully on the client (visitor still sees success unless the route itself errors — design choice to revisit)
  - Optional autoresponder to the visitor (depends on §3.6)
- **Failure-mode rubric pass (`#failure-mode`):** what happens when the provider is down, rate limit hit, malformed inputs, dnsbl-flagged sender, Abu's inbox bounces, attacker spams the endpoint
- **Red-team subagent pass (`#subagent` + `#red-team` + `#second-ai`):** fresh-context review of the implemented route
- **Browser test (`#verify`):** submit a real inquiry, confirm Abu's inbox receives it within seconds, confirm visitor sees success
- **Ship (`#protocol` + `#trust-calibration`):** commit, deploy to Vercel, monitor first real submissions

Skills this lesson will use explicitly (graduation criterion ≥5): `#spec-driven`, `#prompt-craft` (architectural), `#artifacts`, `#permissions`, `#failure-mode`, `#subagent`, `#red-team`, `#second-ai`, `#verify`, `#protocol`, `#trust-calibration`. Easily clears the threshold.

## 6. Drafted message for Abu (optional — Edson to send)

> Hey Abu — to get the website's contact form actually sending you inquiries (instead of being silently dropped like it is now), I need to clear up a few things first. None of these need long answers — short replies are perfect.
>
> **About the domain:**
> 1. Does KTV own a website domain like `kilimanjarotrueventure.com`? If a different one, what is it?
> 2. Where is it registered (which company set it up — e.g., Namecheap, GoDaddy, or someone local in Tanzania)? Do you have a login?
> 3. Are you already using any email service on that domain (like Google Workspace or Microsoft email)?
>
> **About inquiries:**
> 4. What email address should I send inquiries to? Want a new one like `inquiries@kilimanjarotrueventure.com`, or your existing email?
> 5. Anyone else who should also receive inquiry emails (e.g., a backup person when you're up the mountain)?
> 6. How fast do you usually reply to inquiries? Same-day, 24 hours, 48 hours? Helps me set expectations on the website.
>
> **About email tools:**
> 7. Have you used any email service like Resend, SendGrid, or Mailchimp before? Any existing accounts?
> 8. Comfortable adding a credit card on file with an email service (even though we'll stay on a free tier)?
>
> **Future:**
> 9. Should I also try to ping you on WhatsApp when an inquiry comes in via email? (Not building this now — just want to know if it's wanted later.)
>
> No rush — just need these before I can finish the setup. Thanks!

## 7. Open items for Edson

- Verify the actual domain on the site by checking `lib/constants.ts` `COMPANY` object before sending Abu the message (don't guess in front of him)
- Once Abu answers A.1–A.3, take a screenshot of his DNS / registrar dashboard so we know what UI we're walking him through later for DKIM / SPF
- After answers arrive, schedule the architectural-conversation session (estimated 30-45 min of focused work)
