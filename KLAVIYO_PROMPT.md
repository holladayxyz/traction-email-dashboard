# Beefcake Jerky — Weekly Dashboard Data Prompt

Paste this prompt into Claude along with your raw Klaviyo data for the week. Claude will return the exact JSON block you need to add to the dashboard.

---

## PROMPT (copy everything below this line)

---

You are generating a weekly data block for the Beefcake Jerky email performance dashboard. I'm going to give you raw campaign and flow data from Klaviyo. You need to:

1. Structure all campaign and flow data in the exact JSON format below
2. Calculate derived metrics: CTO (click-to-open = clickRate / openRate), RPR (revenue per recipient = revenue / recipients), AOV (average order value = revenue / conversions)
3. Assign a tag to each campaign based on performance. Use one of these:
   - `{ label: "Top Performer", color: "GREEN" }` — best overall metrics that week
   - `{ label: "Strong Launch", color: "BLUE" }` — strong revenue or engagement on a promo/launch
   - `{ label: "Click Gap", color: "AMBER" }` — good opens but poor clicks
   - `{ label: "Fatigue Signal", color: "RED" }` — declining metrics suggesting over-sending
   - `{ label: "Baseline", color: "GRAY" }` — standard warming/regular send, useful as benchmark
   - Or create a new descriptive tag if none of these fit
4. Write a 1-2 sentence `insight` for each campaign explaining what happened and why it matters. Be specific with numbers. Be strategic, not just descriptive.
5. Write 3-5 summary insight cards that analyze trends across ALL campaigns that week. Each insight should have:
   - `icon` — an emoji that fits (use ✅ for positive, ⚠️ for warning, 📉 for decline, 💡 for recommendation, 📊 for data observation)
   - `title` — short punchy headline
   - `body` — 2-3 sentences with specific numbers explaining the trend and what to do about it
   - `borderColor` — "GREEN" for positive, "AMBER" for warning, "RED" for negative, "BLUE" for recommendation
6. Structure the flow data exactly as shown below

### Color mapping (replace these strings in your output):
- "GREEN" → use in tag/borderColor for positive
- "BLUE" → use in tag/borderColor for recommendations
- "AMBER" → use in tag/borderColor for warnings
- "RED" → use in tag/borderColor for negative
- "GRAY" → use in tag/borderColor for neutral

### Output format

Return ONLY the JavaScript object below, filled in with real data. I will paste this directly into my code.

```javascript
"week-NUMBER": {
  label: "Week NUMBER",
  dateRange: "MMM DD – MMM DD",
  updatedDate: "MMM DD, YYYY",
  campaigns: [
    {
      name: "CAMPAIGN NAME",
      sendDate: "MMM DD",
      recipients: NUMBER,
      delivered: NUMBER,
      openRate: DECIMAL,    // e.g. 0.305 for 30.5%
      clickRate: DECIMAL,
      cto: DECIMAL,         // CALCULATED: clickRate / openRate
      conversions: NUMBER,
      revenue: NUMBER,      // e.g. 12996.48
      bounceRate: DECIMAL,
      unsubRate: DECIMAL,
      rpr: DECIMAL,         // CALCULATED: revenue / recipients, rounded to 2 decimal
      aov: DECIMAL,         // CALCULATED: revenue / conversions, rounded to 2 decimal
      tag: { label: "TAG NAME", color: "COLOR" },
      insight: "YOUR ANALYSIS HERE",
    },
    // ... more campaigns
  ],
  insights: [
    { icon: "EMOJI", title: "HEADLINE", body: "ANALYSIS WITH SPECIFIC NUMBERS", borderColor: "COLOR" },
    // ... 3-5 insight cards
  ],
  flows: [
    {
      name: "FLOW NAME",
      id: "KLAVIYO_FLOW_ID",
      status: "LIVE",
      statusColor: "COLOR",  // GREEN for healthy, AMBER for needs attention, RED for problem
      trigger: "TRIGGER TYPE",
      launchDate: "MMM DD",
      diagnostic: false,     // set true only for Abandoned Checkout if diagnostic data is provided
      messages: [
        { label: "Email 1", recipients: NUMBER, delivered: NUMBER, openRate: DECIMAL, clickRate: DECIMAL, convRate: DECIMAL, conversions: NUMBER, revenue: NUMBER, bounceRate: DECIMAL, unsubRate: DECIMAL },
        // ... more messages
      ],
    },
    // ... more flows
  ],
  checkoutDiagnostic: null,  // set to null if no diagnostic data this week, or use the object below:
  // checkoutDiagnostic: {
  //   totalCheckouts: NUMBER,
  //   canGetEmail: NUMBER,
  //   gotEmail: NUMBER,
  //   breakdown: [
  //     { label: "EMOJI DESCRIPTION", value: NUMBER, color: "COLOR_HEX", note: "EXPLANATION" },
  //   ],
  // },
  roadmap: {
    now: [
      { label: "ITEM", desc: "DESCRIPTION", icon: "EMOJI" },
    ],
    next: [
      { label: "ITEM", desc: "DESCRIPTION", icon: "EMOJI" },
    ],
    later: [
      { label: "ITEM", desc: "DESCRIPTION", icon: "EMOJI" },
    ],
  },
},
```

### Important notes:
- All rates should be decimals (0.305 not 30.5%)
- Revenue should be exact dollars with cents (12996.48)
- The color strings in tags and borderColor will be replaced with actual color constants when pasted into the code — just use the string names (GREEN, BLUE, AMBER, RED, GRAY)
- For the roadmap section: I will provide what to put here. If I don't provide updates, copy the roadmap from the previous week.

---

## RAW KLAVIYO DATA FOR THIS WEEK

(Paste your campaign and flow data below)

### Campaigns:

### Flows:

### Roadmap updates (if any):

