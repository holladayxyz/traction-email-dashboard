# Last Week's Data (Jan 29 – Feb 12)

This is the raw data from the previous reporting period, for reference.

---

## Campaigns

| Campaign | Send Date | Recipients | Delivered | Open Rate | Click Rate | CTO | Conversions | Revenue | Bounce Rate | Unsub Rate | RPR | AOV | Tag |
|----------|-----------|-----------|-----------|-----------|------------|-----|-------------|---------|-------------|------------|-----|-----|-----|
| Warming List 8 | Feb 1 | 93,853 | 92,785 | 30.5% | 0.66% | 2.18% | 160 | $12,996.48 | 1.14% | 0.15% | $0.14 | $81.23 | Top Performer |
| VDAY LIVE NOW | Feb 5 | 94,016 | 93,003 | 24.6% | 0.43% | 1.77% | 135 | $11,304.68 | 1.08% | 0.08% | $0.12 | $83.74 | Strong Launch |
| Don't Miss HOT HONEY | Feb 6 | 94,336 | 93,349 | 26.5% | 0.22% | 0.81% | 77 | $5,513.30 | 1.05% | 0.08% | $0.06 | $71.60 | Click Gap |
| JERKY > FLOWERS | Feb 8 | 95,393 | 94,413 | 23.9% | 0.16% | 0.66% | 52 | $4,161.94 | 1.03% | 0.09% | $0.04 | $80.04 | Fatigue Signal |
| Warming List 7 | Jan 29 | 74,412 | 73,827 | 30.7% | 0.23% | 0.73% | 65 | $4,468.05 | 0.79% | 0.20% | $0.06 | $68.74 | Baseline |

**Totals:** 452,010 recipients | $38,444.45 revenue | 489 conversions

---

## Campaign Insights

1. **Opens are consistently strong** — Averaging 27.2% across all sends. Well above DTC food industry benchmarks (~18-22%). Subject lines are doing their job. This is not the problem.

2. **Click-to-open is the bottleneck** — Averaging 1.1% CTO across all sends. Only Warming 8 broke 2%. People are opening and then not finding a reason to click. This points to email body content, CTA placement, or offer clarity. It's the single biggest lever we have right now.

3. **Three VDAY touches in 3 days showed diminishing returns** — Revenue dropped from $11.3K to $5.5K to $4.2K across the VDAY sequence. Opens, clicks, and conversions all trended down. For future promos, 2 sends max before switching the angle or waiting a few days.

4. **Warming 8 is the blueprint** — Same list, same audience, but 3x the click rate and 3x the revenue of Warming 7. Whatever was different about the content or layout in that email worked. Pull it apart and use it as the template.

---

## Flows

### Welcome Series (WUK7FY) — LIVE
- **Trigger:** Added to List
- **Launch Date:** Feb 10

| Email | Recipients | Delivered | Open Rate | Click Rate | Conv Rate | Conversions | Revenue | Bounce Rate | Unsub Rate |
|-------|-----------|-----------|-----------|------------|-----------|-------------|---------|-------------|------------|
| Email 1 | 126 | 123 | 22.8% | 3.25% | 0% | 0 | $0 | 2.38% | 0% |
| Email 2 | 56 | 56 | 25.0% | 0% | 0% | 0 | $0 | 0% | 1.79% |

### SPIN Welcome Series (RCEqqK) — LIVE
- **Trigger:** Metric (Purchase)
- **Launch Date:** Feb 10

| Email | Recipients | Delivered | Open Rate | Click Rate | Conv Rate | Conversions | Revenue | Bounce Rate | Unsub Rate |
|-------|-----------|-----------|-----------|------------|-----------|-------------|---------|-------------|------------|
| Email 1 | 274 | 270 | 25.2% | 1.11% | 0.37% | 1 | $100.57 | 1.46% | 0.37% |
| Email 2 | 138 | 137 | 12.4% | 0% | 0% | 0 | $0 | 0.73% | 0.73% |

### Abandoned Checkout (Tpym9d) — LIVE
- **Trigger:** Checkout Started
- **Launch Date:** Feb 10

| Email | Recipients | Delivered | Open Rate | Click Rate | Conv Rate | Conversions | Revenue | Bounce Rate | Unsub Rate |
|-------|-----------|-----------|-----------|------------|-----------|-------------|---------|-------------|------------|
| Email 1 | 32 | 32 | 34.4% | 0% | 0% | 0 | $0 | 0% | 0% |
| Email 2 | 6 | 6 | 16.7% | 0% | 0% | 0 | $0 | 0% | 0% |

---

## Checkout Diagnostic

- **Total Checkouts:** 195
- **Can Get Email:** ~35
- **Got the Email:** 32

| Breakdown | Count | Note |
|-----------|-------|------|
| Phone-only (Shop Pay) | 78 | No email on file. They checked out with Shop Pay using just a phone number. |
| Had email but weren't subscribed (FIXED) | 55 | We turned on transactional sending for Email 1. These people will get the flow now. |
| Subscribed but bounced | 12 | They opted in, but the email address is bad. Hard bounced, nothing we can do. |
| Got the flow | 32 | |
| Profile gone | 18 | These profiles don't exist in Klaviyo anymore. Probably merged or cleaned up. |

---

## Roadmap

### Now
- Email Design System Refresh — The team's been talking about freshening up the email look. We're rebuilding the template system and will A/B test the new design against current templates to measure the performance difference
- SMS for Abandoned Checkout — About 40% of checkout abandoners are phone-only through Shop Pay, so SMS is the only way to reach them
- Improve Click-Through — Welcome E2 and Checkout emails need stronger CTAs. Opens are solid, clicks need work
- SPIN E2 Drop-off — Open rate drops from 25.2% to 12.4% between Email 1 and 2. We need to figure out why

### Next
- Post-Purchase Flow — 70% of customers only buy once. This flow helps them find their next favorite flavor and come back
- Browse Abandonment — People who looked at products but didn't add to cart. Low-hanging fruit
- Customer Winback — 50K+ lapsed profiles sitting in Klaviyo. Targeted re-engagement to bring them back
- A/B Test Subject Lines — Welcome Series Email 1 is the highest-volume entry point. Let's test some subject line variants

### Later
- Site Abandonment — Visitors who bounce without even browsing products. Broader net, lower intent
- Replenishment Reminders — 30-day post-purchase trigger. Jerky runs out, we remind them to restock
- Subscription Soft-Launch — Once we have repeat buyer data, we target them with subscription offers through email
- 30-Day Performance Review — Full analysis once we've got a solid month of data across all live flows
