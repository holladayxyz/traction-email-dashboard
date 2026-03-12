"use client";

import { useState } from "react";

const BRAND = {
  red: "#C13A28",
  dark: "#1A1A1A",
  gray: "#4A4A4A",
  lightGray: "#F5F5F5",
  green: "#2D7D46",
  blue: "#1B5E8C",
  amber: "#D4850A",
  white: "#FFFFFF",
};

/* ── WEEKLY DATA ── */
const WEEKS = {
  "week-1": {
    label: "Week 1",
    dateRange: "Jan 29 – Feb 12",
    updatedDate: "Feb 12, 2026",
    campaigns: [
      {
        name: "Warming List 8",
        sendDate: "Feb 1",
        recipients: 93853,
        delivered: 92785,
        openRate: 0.30496,
        clickRate: 0.00664,
        cto: 0.02177,
        conversions: 160,
        revenue: 12996.48,
        bounceRate: 0.01138,
        unsubRate: 0.00147,
        rpr: 0.14,
        aov: 81.23,
        tag: { label: "Top Performer", color: BRAND.green },
        insight: "Highest click-to-open rate this period at 2.2%. Whatever was in this email got people to act. Worth studying the layout and CTA placement as a template for future sends.",
      },
      {
        name: "VDAY LIVE NOW",
        sendDate: "Feb 5",
        recipients: 94016,
        delivered: 93003,
        openRate: 0.24611,
        clickRate: 0.00434,
        cto: 0.01765,
        conversions: 135,
        revenue: 11304.68,
        bounceRate: 0.01077,
        unsubRate: 0.00077,
        rpr: 0.12,
        aov: 83.74,
        tag: { label: "Strong Launch", color: BRAND.blue },
        insight: "Second highest revenue this period. Opens dipped to 24.6% (launch emails run lower than warming sends, that's normal), but the people who opened were motivated. Highest AOV at $83.74 tells us the VDAY bundle pricing worked.",
      },
      {
        name: "Don't Miss HOT HONEY",
        sendDate: "Feb 6",
        recipients: 94336,
        delivered: 93349,
        openRate: 0.26524,
        clickRate: 0.00215,
        cto: 0.00812,
        conversions: 77,
        revenue: 5513.30,
        bounceRate: 0.01046,
        unsubRate: 0.00084,
        rpr: 0.06,
        aov: 71.60,
        tag: { label: "Click Gap", color: BRAND.amber },
        insight: "Opens bounced back to 26.5% but click-to-open dropped to 0.8%. People opened it, saw the content, and didn't click. This is a content/CTA problem, not a subject line problem. The email body needs a stronger reason to click through.",
      },
      {
        name: "JERKY > FLOWERS",
        sendDate: "Feb 8",
        recipients: 95393,
        delivered: 94413,
        openRate: 0.23939,
        clickRate: 0.00157,
        cto: 0.00655,
        conversions: 52,
        revenue: 4161.94,
        bounceRate: 0.01027,
        unsubRate: 0.00094,
        rpr: 0.04,
        aov: 80.04,
        tag: { label: "Fatigue Signal", color: BRAND.red },
        insight: "Third VDAY-themed send in 3 days. Lowest opens (23.9%), lowest clicks (0.16%), lowest revenue. This is classic send fatigue. The audience already decided whether they were buying the VDAY bundle. Future promos should cap at 2 touches max before switching the angle.",
      },
      {
        name: "Warming List 7",
        sendDate: "Jan 29",
        recipients: 74412,
        delivered: 73827,
        openRate: 0.30651,
        clickRate: 0.00225,
        cto: 0.00734,
        conversions: 65,
        revenue: 4468.05,
        bounceRate: 0.00786,
        unsubRate: 0.00203,
        rpr: 0.06,
        aov: 68.74,
        tag: { label: "Baseline", color: BRAND.gray },
        insight: "Good benchmark for warming send performance. 30.7% opens is solid, but the 0.7% click-to-open shows the same pattern we see everywhere: people open, they just don't click. Also had the highest unsub rate (0.2%), which is expected when re-engaging a cold list.",
      },
    ],
    insights: [
      { icon: "✅", title: "Opens are consistently strong", body: "Averaging 27.2% across all sends. Well above DTC food industry benchmarks (~18-22%). Subject lines are doing their job. This is not the problem.", borderColor: BRAND.green },
      { icon: "⚠️", title: "Click-to-open is the bottleneck", body: "Averaging 1.1% CTO across all sends. Only Warming 8 broke 2%. People are opening and then not finding a reason to click. This points to email body content, CTA placement, or offer clarity. It's the single biggest lever we have right now.", borderColor: BRAND.amber },
      { icon: "📉", title: "Three VDAY touches in 3 days showed diminishing returns", body: "Revenue dropped from $11.3K to $5.5K to $4.2K across the VDAY sequence. Opens, clicks, and conversions all trended down. For future promos, 2 sends max before switching the angle or waiting a few days.", borderColor: BRAND.red },
      { icon: "💡", title: "Warming 8 is the blueprint", body: "Same list, same audience, but 3x the click rate and 3x the revenue of Warming 7. Whatever was different about the content or layout in that email worked. Pull it apart and use it as the template.", borderColor: BRAND.blue },
    ],
    flows: [
      {
        name: "Welcome Series",
        id: "WUK7FY",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Added to List",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 126, delivered: 123, openRate: 0.2276, clickRate: 0.0325, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.0238, unsubRate: 0 },
          { label: "Email 2", recipients: 56, delivered: 56, openRate: 0.25, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0.0179 },
        ],
      },
      {
        name: "SPIN Welcome Series",
        id: "RCEqqK",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Purchase)",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 274, delivered: 270, openRate: 0.2519, clickRate: 0.0111, convRate: 0.0037, conversions: 1, revenue: 100.57, bounceRate: 0.0146, unsubRate: 0.0037 },
          { label: "Email 2", recipients: 138, delivered: 137, openRate: 0.1241, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.0073, unsubRate: 0.0073 },
        ],
      },
      {
        name: "Abandoned Checkout",
        id: "Tpym9d",
        status: "LIVE",
        statusColor: BRAND.amber,
        trigger: "Checkout Started",
        launchDate: "Feb 10",
        diagnostic: true,
        messages: [
          { label: "Email 1", recipients: 32, delivered: 32, openRate: 0.3438, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0 },
          { label: "Email 2", recipients: 6, delivered: 6, openRate: 0.1667, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0 },
        ],
      },
    ],
    checkoutDiagnostic: {
      totalCheckouts: 195,
      canGetEmail: 35,
      gotEmail: 32,
      breakdown: [
        { label: "📱 Phone-only (Shop Pay)", value: 78, color: "#9E9E9E", note: "No email on file. They checked out with Shop Pay using just a phone number." },
        { label: "✅ Had email but weren't subscribed (FIXED)", value: 55, color: BRAND.green, note: "We turned on transactional sending for Email 1. These people will get the flow now." },
        { label: "🔴 Subscribed but bounced", value: 12, color: BRAND.red, note: "They opted in, but the email address is bad. Hard bounced, nothing we can do." },
        { label: "✅ Got the flow", value: 32, color: BRAND.green, note: "" },
        { label: "❓ Profile gone", value: 18, color: "#BDBDBD", note: "These profiles don't exist in Klaviyo anymore. Probably merged or cleaned up." },
      ],
    },
    roadmap: {
      now: [
        { label: "Email Design System Refresh", desc: "The team's been talking about freshening up the email look. We're rebuilding the template system and will A/B test the new design against current templates to measure the performance difference", icon: "🎨" },
        { label: "SMS for Abandoned Checkout", desc: "About 40% of checkout abandoners are phone-only through Shop Pay, so SMS is the only way to reach them", icon: "📱" },
        { label: "Improve Click-Through", desc: "Welcome E2 and Checkout emails need stronger CTAs. Opens are solid, clicks need work", icon: "🎯" },
        { label: "SPIN E2 Drop-off", desc: "Open rate drops from 25.2% to 12.4% between Email 1 and 2. We need to figure out why", icon: "🔍" },
      ],
      next: [
        { label: "Post-Purchase Flow", desc: "70% of customers only buy once. This flow helps them find their next favorite flavor and come back", icon: "📦" },
        { label: "Browse Abandonment", desc: "People who looked at products but didn't add to cart. Low-hanging fruit", icon: "👀" },
        { label: "Customer Winback", desc: "50K+ lapsed profiles sitting in Klaviyo. Targeted re-engagement to bring them back", icon: "🔄" },
        { label: "A/B Test Subject Lines", desc: "Welcome Series Email 1 is the highest-volume entry point. Let's test some subject line variants", icon: "🧪" },
      ],
      later: [
        { label: "Site Abandonment", desc: "Visitors who bounce without even browsing products. Broader net, lower intent", icon: "🌐" },
        { label: "Replenishment Reminders", desc: "30-day post-purchase trigger. Jerky runs out, we remind them to restock", icon: "⏰" },
        { label: "Subscription Soft-Launch", desc: "Once we have repeat buyer data, we target them with subscription offers through email", icon: "🔁" },
        { label: "30-Day Performance Review", desc: "Full analysis once we've got a solid month of data across all live flows", icon: "📊" },
      ],
    },
  },
  "week-2": {
    label: "Week 2",
    dateRange: "Feb 5 – Feb 12",
    updatedDate: "Feb 12, 2026",
    campaigns: [
      {
        name: "Don't Miss HOT HONEY",
        sendDate: "Feb 6",
        recipients: 94337,
        delivered: 93348,
        openRate: 0.27338,
        clickRate: 0.00215,
        cto: 0.00786,
        conversions: 77,
        revenue: 5513.30,
        bounceRate: 0.01047,
        unsubRate: 0.00119,
        rpr: 0.06,
        aov: 71.60,
        tag: { label: "Click Gap", color: BRAND.amber },
        insight: "Opens came in at 27.3% — strong for a follow-up email — but CTO dropped to 0.79%. Nearly 26K people opened this email and didn't click. The subject line is working, but the email body isn't converting that attention into action. HOT HONEY is a compelling offer; the layout and CTA need to make it easier to say yes.",
      },
      {
        name: "JERKY > FLOWERS",
        sendDate: "Feb 8",
        recipients: 95395,
        delivered: 94413,
        openRate: 0.24836,
        clickRate: 0.00161,
        cto: 0.00648,
        conversions: 60,
        revenue: 4615.57,
        bounceRate: 0.01029,
        unsubRate: 0.00122,
        rpr: 0.05,
        aov: 76.93,
        tag: { label: "Fatigue Signal", color: BRAND.red },
        insight: "Third Valentine's Day-angle send in three days. Opens fell to 24.8%, clicks to 0.16%, and revenue dropped $900 from the previous day. Classic send fatigue on a promo sequence. The audience had already decided on VDAY purchases. Future promotional windows should cap at 2 email touches before changing the angle or pulling back.",
      },
      {
        name: "Don't Miss HOT HONEY (SMS)",
        sendDate: "Feb 7",
        recipients: 30852,
        delivered: 30852,
        openRate: null,
        clickRate: 0.0105,
        cto: null,
        conversions: 43,
        revenue: 3534.31,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.11,
        aov: 82.19,
        tag: { label: "Strong Launch", color: BRAND.blue },
        insight: "SMS pulled $3,534 on 30K sends — $0.11 RPR vs. $0.06 for the same-day email to a list 3x larger. That's nearly double the revenue per contact on a fraction of the audience. SMS continues to dramatically outperform email on a per-contact basis for promotional sends.",
      },
      {
        name: "JERKY > FLOWERS (SMS)",
        sendDate: "Feb 10",
        recipients: 30833,
        delivered: 30833,
        openRate: null,
        clickRate: 0.01272,
        cto: null,
        conversions: 19,
        revenue: 1244.02,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.04,
        aov: 65.47,
        tag: { label: "Fatigue Signal", color: BRAND.red },
        insight: "Second Valentine's SMS touch showed the same fatigue pattern as email — revenue dropped from $3,534 to $1,244 and conversions fell from 43 to 19. AOV also slipped to $65.47 (vs. $82.19 on Day 1). The decision-makers already converted; those remaining needed a different offer or a different day.",
      },
    ],
    insights: [
      { icon: "📱", title: "SMS outperforms email 2:1 on revenue per contact", body: "The HOT HONEY SMS generated $0.11 RPR vs. $0.06 for the same-day email on a list 3x larger. SMS is consistently driving more revenue per send than email across both VDAY and HOT HONEY campaigns. The single highest-leverage growth move in the program right now is building the SMS list.", borderColor: BRAND.green },
      { icon: "⚠️", title: "VDAY promo fatigue hit both channels", body: "Revenue dropped from $5,513 (email Day 1) to $4,616 (email Day 3) and from $3,534 (SMS Day 1) to $1,244 (SMS Day 4). Both channels showed the same pattern: diminishing returns with each additional touch on the same offer. Two promotional touches max before rotating the angle.", borderColor: BRAND.amber },
      { icon: "📊", title: "Click gap persists across full-list sends", body: "Both email campaigns this week had strong open rates (24–27%) but sub-1% CTO. HOT HONEY opened at 27.3% but only 0.79% of openers clicked — that's 26K people reading the email and leaving. The offer is compelling; the email body isn't closing the loop. CTA placement and layout are the priority fix.", borderColor: BRAND.amber },
      { icon: "💡", title: "AOV holding above $65 — the audience spends when they buy", body: "Email AOV of $76.93 and SMS AOV of $82.19 on the first VDAY touch confirm this is a high-value buyer pool. The problem isn't ticket size — it's conversion rate. Even small improvements in CTO will move significant revenue given these order values.", borderColor: BRAND.blue },
    ],
    flows: [
      {
        name: "Welcome Series",
        id: "WUK7FY",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Added to List",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 1038, delivered: 1013, openRate: 0.38697, clickRate: 0.03751, convRate: 0.00964, conversions: 10, revenue: 480.54, bounceRate: 0.02415, unsubRate: 0 },
          { label: "Email 2 — Coupon", recipients: 366, delivered: 361, openRate: 0.35165, clickRate: 0, convRate: 0.0082, conversions: 3, revenue: 119.64, bounceRate: 0.01366, unsubRate: 0 },
          { label: "Email 3 — What Makes Us Different", recipients: 362, delivered: 358, openRate: 0.24931, clickRate: 0, convRate: 0.00277, conversions: 1, revenue: 56.64, bounceRate: 0.01105, unsubRate: 0 },
          { label: "Email 4 — Product Discovery", recipients: 282, delivered: 279, openRate: 0.29181, clickRate: 0, convRate: 0.00355, conversions: 1, revenue: 36.40, bounceRate: 0.01064, unsubRate: 0 },
          { label: "Email 5 — Beefcake Products", recipients: 290, delivered: 287, openRate: 0.35417, clickRate: 0, convRate: 0.01034, conversions: 3, revenue: 114.37, bounceRate: 0.01034, unsubRate: 0 },
          { label: "Email 6 — Social Proof", recipients: 255, delivered: 253, openRate: 0.29921, clickRate: 0, convRate: 0.00392, conversions: 1, revenue: 23.05, bounceRate: 0.00784, unsubRate: 0 },
          { label: "Email 7", recipients: 217, delivered: 215, openRate: 0.2212, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00922, unsubRate: 0 },
        ],
      },
      {
        name: "SPIN Welcome Series",
        id: "RCEqqK",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (SPIN Opt-In)",
        launchDate: "Feb 04",
        messages: [
          { label: "Email 1", recipients: 3585, delivered: 3499, openRate: 0.334, clickRate: 0.01543, convRate: 0.01423, conversions: 51, revenue: 3046.70, bounceRate: 0.02398, unsubRate: 0.00781 },
          { label: "Email 2", recipients: 3393, delivered: 3370, openRate: 0.20155, clickRate: 0.00532, convRate: 0.00088, conversions: 3, revenue: 209.65, bounceRate: 0.00678, unsubRate: 0.00325 },
          { label: "Email 3", recipients: 3177, delivered: 3151, openRate: 0.19498, clickRate: 0.00569, convRate: 0.00063, conversions: 2, revenue: 88.26, bounceRate: 0.00818, unsubRate: 0.00283 },
          { label: "Email 4", recipients: 2787, delivered: 2765, openRate: 0.20731, clickRate: 0.00831, convRate: 0.00108, conversions: 3, revenue: 207.20, bounceRate: 0.0079, unsubRate: 0.00072 },
          { label: "SMS Text 1", recipients: 25, delivered: 25, openRate: null, clickRate: 0, convRate: 0.04, conversions: 1, revenue: 61.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 10, delivered: 10, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
        smsLive: true,
      },
      {
        name: "Abandoned Checkout",
        id: "Tpym9d",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Checkout Started",
        launchDate: "Feb 10",
        diagnostic: true,
        smsLive: true,
        messages: [
          { label: "Email 1 — Cart Reminder", recipients: 131, delivered: 130, openRate: 0.24138, clickRate: 0.03817, convRate: 0.01527, conversions: 2, revenue: 220.52, bounceRate: 0.00763, unsubRate: 0 },
          { label: "Email 2 — Last Chance", recipients: 261, delivered: 259, openRate: 0.25385, clickRate: 0.01149, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00766, unsubRate: 0 },
          { label: "SMS Text 1", recipients: 78, delivered: 78, openRate: null, clickRate: 0.12821, convRate: 0.10256, conversions: 8, revenue: 587.73, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 40, delivered: 40, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Post-Purchase",
        id: "Vf5YHp",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Placed Order)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 1565, delivered: 1561, openRate: 0.23941, clickRate: 0.00832, convRate: 0.00064, conversions: 1, revenue: 26.04, bounceRate: 0.00256, unsubRate: 0.00128 },
          { label: "SMS Text 1", recipients: 17, delivered: 17, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Browse Abandonment",
        id: "XPiFwU",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Viewed Product)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "SMS Text 1", recipients: 162, delivered: 162, openRate: null, clickRate: 0.04938, convRate: 0.00617, conversions: 1, revenue: 29.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
    ],
    checkoutDiagnostic: null,
    roadmap: { now: [], next: [], later: [] },
  },
  "week-3": {
    label: "Week 3",
    dateRange: "Feb 12 – Feb 19",
    updatedDate: "Feb 19, 2026",
    campaigns: [
      {
        name: "Why You Keep Getting Caught Hungry",
        sendDate: "Feb 18",
        recipients: 97569,
        delivered: 96617,
        openRate: 0.24771,
        clickRate: 0.00247,
        cto: 0.00997,
        conversions: 51,
        revenue: 2922.14,
        bounceRate: 0.00976,
        unsubRate: 0.00139,
        rpr: 0.03,
        aov: 57.30,
        tag: { label: "Content Email", color: BRAND.blue },
        insight: "Education-first send to 97K — opens held at 24.8% which is solid for a non-promo email. CTO barely broke 1% (0.997%), which is the consistent pattern on content sends: the hook gets people in, but there's no clear path to buy. Next iteration needs a single direct CTA placed after the education setup, not buried or absent.",
      },
      {
        name: "Feb 19 SMS",
        sendDate: "Feb 19",
        recipients: 30606,
        delivered: 30606,
        openRate: null,
        clickRate: 0.01401,
        cto: null,
        conversions: 37,
        revenue: 2862.22,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.09,
        aov: 77.36,
        tag: { label: "Strong Launch", color: BRAND.blue },
        insight: "SMS pulled $2,862 on the same content angle — $0.09 RPR vs. $0.03 for the accompanying email. SMS outperformed email by 3x on revenue per contact this week. High AOV of $77.36 confirms the audience spends when they do convert.",
      },
    ],
    insights: [
      { icon: "📱", title: "SMS is 3x more efficient than email this week", body: "Feb 19 SMS generated $0.09 RPR vs. $0.03 for the full-list email on the same content angle — three times the revenue per contact on a list one-third the size. The gap between SMS and email efficiency continues to widen. Prioritizing SMS list growth remains the highest-leverage move in the account.", borderColor: BRAND.green },
      { icon: "⚠️", title: "Content email click gap continues", body: "'Why You Keep Getting Caught Hungry' opened at 24.8% but CTO was just 0.997% — nearly the same pattern seen in Week 2. 24K+ people read this email without clicking. Content emails without a direct CTA are building brand awareness but not converting it. A/B test a version with a single offer-forward button placed mid-email after the hook.", borderColor: BRAND.amber },
      { icon: "📊", title: "Lean campaign week — flows are carrying revenue", body: "With only one broadcast email, flow revenue from the SPIN Welcome Series, Abandoned Checkout SMS, and Welcome Series emails is doing heavy lifting. The SPIN Welcome Series alone has generated over $3,000 in flow revenue since launch. Flows are scaling and compounding; this week underscores their importance.", borderColor: BRAND.blue },
      { icon: "💡", title: "AOV strong on converts — the problem is getting them to click", body: "Email AOV was $57.30 and SMS AOV was $77.36. Buyers who do convert spend well. The revenue ceiling isn't the offer — it's getting more openers to take action. Improving CTO from 1% to 2% on a 97K list at $57 AOV would represent ~$55K in additional revenue per send.", borderColor: BRAND.blue },
    ],
    flows: [
      {
        name: "Welcome Series",
        id: "WUK7FY",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Added to List",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 1038, delivered: 1013, openRate: 0.38697, clickRate: 0.03751, convRate: 0.00964, conversions: 10, revenue: 480.54, bounceRate: 0.02415, unsubRate: 0 },
          { label: "Email 2 — Coupon", recipients: 366, delivered: 361, openRate: 0.35165, clickRate: 0, convRate: 0.0082, conversions: 3, revenue: 119.64, bounceRate: 0.01366, unsubRate: 0 },
          { label: "Email 3 — What Makes Us Different", recipients: 362, delivered: 358, openRate: 0.24931, clickRate: 0, convRate: 0.00277, conversions: 1, revenue: 56.64, bounceRate: 0.01105, unsubRate: 0 },
          { label: "Email 4 — Product Discovery", recipients: 282, delivered: 279, openRate: 0.29181, clickRate: 0, convRate: 0.00355, conversions: 1, revenue: 36.40, bounceRate: 0.01064, unsubRate: 0 },
          { label: "Email 5 — Beefcake Products", recipients: 290, delivered: 287, openRate: 0.35417, clickRate: 0, convRate: 0.01034, conversions: 3, revenue: 114.37, bounceRate: 0.01034, unsubRate: 0 },
          { label: "Email 6 — Social Proof", recipients: 255, delivered: 253, openRate: 0.29921, clickRate: 0, convRate: 0.00392, conversions: 1, revenue: 23.05, bounceRate: 0.00784, unsubRate: 0 },
          { label: "Email 7", recipients: 217, delivered: 215, openRate: 0.2212, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00922, unsubRate: 0 },
        ],
      },
      {
        name: "SPIN Welcome Series",
        id: "RCEqqK",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (SPIN Opt-In)",
        launchDate: "Feb 04",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 3585, delivered: 3499, openRate: 0.334, clickRate: 0.01543, convRate: 0.01423, conversions: 51, revenue: 3046.70, bounceRate: 0.02398, unsubRate: 0.00781 },
          { label: "Email 2", recipients: 3393, delivered: 3370, openRate: 0.20155, clickRate: 0.00532, convRate: 0.00088, conversions: 3, revenue: 209.65, bounceRate: 0.00678, unsubRate: 0.00325 },
          { label: "Email 3", recipients: 3177, delivered: 3151, openRate: 0.19498, clickRate: 0.00569, convRate: 0.00063, conversions: 2, revenue: 88.26, bounceRate: 0.00818, unsubRate: 0.00283 },
          { label: "Email 4", recipients: 2787, delivered: 2765, openRate: 0.20731, clickRate: 0.00831, convRate: 0.00108, conversions: 3, revenue: 207.20, bounceRate: 0.0079, unsubRate: 0.00072 },
          { label: "SMS Text 1", recipients: 25, delivered: 25, openRate: null, clickRate: 0, convRate: 0.04, conversions: 1, revenue: 61.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 10, delivered: 10, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Abandoned Checkout",
        id: "Tpym9d",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Checkout Started",
        launchDate: "Feb 10",
        diagnostic: true,
        smsLive: true,
        messages: [
          { label: "Email 1 — Cart Reminder", recipients: 131, delivered: 130, openRate: 0.24138, clickRate: 0.03817, convRate: 0.01527, conversions: 2, revenue: 220.52, bounceRate: 0.00763, unsubRate: 0 },
          { label: "Email 2 — Last Chance", recipients: 261, delivered: 259, openRate: 0.25385, clickRate: 0.01149, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00766, unsubRate: 0 },
          { label: "SMS Text 1", recipients: 78, delivered: 78, openRate: null, clickRate: 0.12821, convRate: 0.10256, conversions: 8, revenue: 587.73, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 40, delivered: 40, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Post-Purchase",
        id: "Vf5YHp",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Placed Order)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 1565, delivered: 1561, openRate: 0.23941, clickRate: 0.00832, convRate: 0.00064, conversions: 1, revenue: 26.04, bounceRate: 0.00256, unsubRate: 0.00128 },
          { label: "SMS Text 1", recipients: 17, delivered: 17, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Browse Abandonment",
        id: "XPiFwU",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Viewed Product)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "SMS Text 1", recipients: 162, delivered: 162, openRate: null, clickRate: 0.04938, convRate: 0.00617, conversions: 1, revenue: 29.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
    ],
    checkoutDiagnostic: null,
    roadmap: { now: [], next: [], later: [] },
  },
  "week-4": {
    label: "Week 4",
    dateRange: "Feb 19 – Feb 26",
    updatedDate: "Feb 26, 2026",
    campaigns: [
      {
        name: "Review Capture — Purchased Customers",
        sendDate: "Feb 22",
        recipients: 25080,
        delivered: 25006,
        openRate: 0.21435,
        clickRate: 0.00544,
        cto: 0.02538,
        conversions: 24,
        revenue: 1319.42,
        bounceRate: 0.00295,
        unsubRate: 0.00088,
        rpr: 0.05,
        aov: 54.98,
        tag: { label: "Segmented Send", color: BRAND.gray },
        insight: "Small segmented list (25K first-time buyers) but the strongest email CTO of the period at 2.5%. 'You took a shot on us. How'd it land?' is a subject line that works because it's honest and non-salesy. 24 conversions is a bonus — people re-engaged while thinking about leaving a review. Worth automating this as a triggered 14-day post-purchase flow.",
      },
      {
        name: "Review Capture — Repeat Buyers",
        sendDate: "Feb 24",
        recipients: 29519,
        delivered: 29430,
        openRate: 0.21318,
        clickRate: 0.0002,
        cto: 0.00094,
        conversions: 32,
        revenue: 1954.88,
        bounceRate: 0.00302,
        unsubRate: 0.00136,
        rpr: 0.07,
        aov: 61.09,
        tag: { label: "Click Gap", color: BRAND.amber },
        insight: "Nearly identical list size and open rate to Purchased Customers (21.3%), but CTO collapsed to 0.09% vs. 2.5%. Same template, different audience. Repeat buyers didn't click the review link — suggesting a broken CTA link or the copy didn't resonate with loyal customers. The 32 conversions likely came from opens plus direct site visits, not clicks.",
      },
    ],
    insights: [
      { icon: "⚠️", title: "Repeat Buyers CTO 26x lower than First-Time Buyers", body: "Same template, same list size (~25–30K), same week — but Review Capture Repeat Buyers had a 0.09% CTO vs. 2.5% for Purchased Customers. That's a 26x gap. Likely a broken CTA link in the Repeat Buyers version. Fix the link, resend, and compare. If the link is fine, the copy needs to be rewritten — repeat buyers are fans, not just customers, and the ask needs to reflect that.", borderColor: BRAND.red },
      { icon: "✅", title: "Review capture strategy is working on first-time buyers", body: "25K first-time buyers, 2.5% CTO, 24 orders placed. The subject line landed. The honest, direct approach ('You took a shot on us. How'd it land?') converts review emails into a revenue channel. Automate this as a triggered flow at 14 days post-purchase so it runs continuously without manual sends.", borderColor: BRAND.green },
      { icon: "📊", title: "Low campaign volume — flows carrying the week", body: "Only two segmented campaigns this week (combined 54K recipients vs. 94–97K full-list weeks). Flow revenue from SPIN Welcome, Abandoned Checkout SMS, and the Welcome Series filled the gap. Flows are compounding and becoming a more reliable revenue base as campaign volume fluctuates.", borderColor: BRAND.blue },
      { icon: "💡", title: "Repeat buyers convert without clicking — they need a different strategy", body: "32 conversions on 0.02% click rate means these buyers are going directly to the site after seeing the email. Loyal customers don't need a review email to be convinced to buy again. For this segment, the next right move is a VIP or loyalty angle, not a review ask.", borderColor: BRAND.blue },
    ],
    flows: [
      {
        name: "Welcome Series",
        id: "WUK7FY",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Added to List",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 1038, delivered: 1013, openRate: 0.38697, clickRate: 0.03751, convRate: 0.00964, conversions: 10, revenue: 480.54, bounceRate: 0.02415, unsubRate: 0 },
          { label: "Email 2 — Coupon", recipients: 366, delivered: 361, openRate: 0.35165, clickRate: 0, convRate: 0.0082, conversions: 3, revenue: 119.64, bounceRate: 0.01366, unsubRate: 0 },
          { label: "Email 3 — What Makes Us Different", recipients: 362, delivered: 358, openRate: 0.24931, clickRate: 0, convRate: 0.00277, conversions: 1, revenue: 56.64, bounceRate: 0.01105, unsubRate: 0 },
          { label: "Email 4 — Product Discovery", recipients: 282, delivered: 279, openRate: 0.29181, clickRate: 0, convRate: 0.00355, conversions: 1, revenue: 36.40, bounceRate: 0.01064, unsubRate: 0 },
          { label: "Email 5 — Beefcake Products", recipients: 290, delivered: 287, openRate: 0.35417, clickRate: 0, convRate: 0.01034, conversions: 3, revenue: 114.37, bounceRate: 0.01034, unsubRate: 0 },
          { label: "Email 6 — Social Proof", recipients: 255, delivered: 253, openRate: 0.29921, clickRate: 0, convRate: 0.00392, conversions: 1, revenue: 23.05, bounceRate: 0.00784, unsubRate: 0 },
          { label: "Email 7", recipients: 217, delivered: 215, openRate: 0.2212, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00922, unsubRate: 0 },
        ],
      },
      {
        name: "SPIN Welcome Series",
        id: "RCEqqK",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (SPIN Opt-In)",
        launchDate: "Feb 04",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 3585, delivered: 3499, openRate: 0.334, clickRate: 0.01543, convRate: 0.01423, conversions: 51, revenue: 3046.70, bounceRate: 0.02398, unsubRate: 0.00781 },
          { label: "Email 2", recipients: 3393, delivered: 3370, openRate: 0.20155, clickRate: 0.00532, convRate: 0.00088, conversions: 3, revenue: 209.65, bounceRate: 0.00678, unsubRate: 0.00325 },
          { label: "Email 3", recipients: 3177, delivered: 3151, openRate: 0.19498, clickRate: 0.00569, convRate: 0.00063, conversions: 2, revenue: 88.26, bounceRate: 0.00818, unsubRate: 0.00283 },
          { label: "Email 4", recipients: 2787, delivered: 2765, openRate: 0.20731, clickRate: 0.00831, convRate: 0.00108, conversions: 3, revenue: 207.20, bounceRate: 0.0079, unsubRate: 0.00072 },
          { label: "SMS Text 1", recipients: 25, delivered: 25, openRate: null, clickRate: 0, convRate: 0.04, conversions: 1, revenue: 61.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 10, delivered: 10, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Abandoned Checkout",
        id: "Tpym9d",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Checkout Started",
        launchDate: "Feb 10",
        diagnostic: true,
        smsLive: true,
        messages: [
          { label: "Email 1 — Cart Reminder", recipients: 131, delivered: 130, openRate: 0.24138, clickRate: 0.03817, convRate: 0.01527, conversions: 2, revenue: 220.52, bounceRate: 0.00763, unsubRate: 0 },
          { label: "Email 2 — Last Chance", recipients: 261, delivered: 259, openRate: 0.25385, clickRate: 0.01149, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00766, unsubRate: 0 },
          { label: "SMS Text 1", recipients: 78, delivered: 78, openRate: null, clickRate: 0.12821, convRate: 0.10256, conversions: 8, revenue: 587.73, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 40, delivered: 40, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Post-Purchase",
        id: "Vf5YHp",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Placed Order)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 1565, delivered: 1561, openRate: 0.23941, clickRate: 0.00832, convRate: 0.00064, conversions: 1, revenue: 26.04, bounceRate: 0.00256, unsubRate: 0.00128 },
          { label: "SMS Text 1", recipients: 17, delivered: 17, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Browse Abandonment",
        id: "XPiFwU",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Viewed Product)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "SMS Text 1", recipients: 162, delivered: 162, openRate: null, clickRate: 0.04938, convRate: 0.00617, conversions: 1, revenue: 29.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
    ],
    checkoutDiagnostic: null,
    roadmap: { now: [], next: [], later: [] },
  },
  "week-5": {
    label: "Week 5",
    dateRange: "Feb 26 – Mar 5",
    updatedDate: "Mar 5, 2026",
    campaigns: [
      {
        name: "The 4 Biggest Changes We're Making",
        sendDate: "Feb 26",
        recipients: 98129,
        delivered: 97251,
        openRate: 0.23787,
        clickRate: 0.00468,
        cto: 0.01967,
        conversions: 59,
        revenue: 3926.81,
        bounceRate: 0.00895,
        unsubRate: 0.00083,
        rpr: 0.04,
        aov: 66.56,
        tag: { label: "Top Performer", color: BRAND.green },
        insight: "Best email CTO of any full-list send this period at 1.97%. Transparency content works — telling the audience what's changing about the brand creates genuine curiosity and earns clicks. 59 conversions at $66.56 AOV on a 98K list. This email type (brand narrative + what's new) should be in the regular rotation.",
      },
      {
        name: "St Paddy Sneak Peek",
        sendDate: "Mar 4",
        recipients: 98757,
        delivered: 97885,
        openRate: 0.22878,
        clickRate: 0.00303,
        cto: 0.01324,
        conversions: 68,
        revenue: 5066.46,
        bounceRate: 0.00884,
        unsubRate: 0.0008,
        rpr: 0.05,
        aov: 74.51,
        tag: { label: "Strong Launch", color: BRAND.blue },
        insight: "Best campaign revenue this week at $5,066 and highest conversion count at 68. Sneak peek positioning — teasing the upcoming St. Paddy's drop without the hard sell — generated genuine purchase intent. AOV of $74.51 suggests buyers are loading up, not just grabbing a single item. Strong setup for the live sale.",
      },
      {
        name: "2/26 SMS",
        sendDate: "Feb 27",
        recipients: 30470,
        delivered: 30470,
        openRate: null,
        clickRate: 0.0146,
        cto: null,
        conversions: 34,
        revenue: 2122.22,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.07,
        aov: 62.42,
        tag: { label: "Baseline", color: BRAND.gray },
        insight: "Steady SMS performance — $0.07 RPR is slightly below the SMS channel average of $0.09–$0.11, suggesting this send was a supporting touch rather than a high-intent promo moment. Still adds $2,122 to the week's revenue with minimal effort on a 30K list.",
      },
    ],
    insights: [
      { icon: "✅", title: "Transparency content drives the best email clicks", body: "'The 4 Biggest Changes' hit 1.97% CTO — the highest for any full-list email send in the last 5 weeks. Sharing what's changing about the brand creates a reason to click beyond just 'here's a product'. Brand narrative emails belong in the regular rotation alongside promotional sends.", borderColor: BRAND.green },
      { icon: "🔥", title: "St. Paddy's sneak peek is a proven pre-launch format", body: "68 conversions and $5,066 from a teaser send — without the sale even being live yet. Pre-launch emails that create FOMO without a hard CTA consistently drive higher-intent buyers. The St. Paddy's live send should capitalize on this setup with a tight 24-48 hour window.", borderColor: BRAND.green },
      { icon: "📱", title: "SMS anchors the week with $2,122 on a lean send", body: "The 2/26 SMS added $2,122 at $0.07 RPR — a lighter performance week for SMS but still meaningful supplemental revenue. As the SMS list approaches 35K+, even baseline sends will generate $3–4K consistently. List growth is directly tied to revenue floor for the channel.", borderColor: BRAND.blue },
      { icon: "📊", title: "Open rates are settling into the 22–24% range", body: "Full-list email opens have ranged 22.9–23.8% over the last two weeks. That's a healthy sustained baseline — above DTC food benchmarks — indicating solid deliverability and subject line consistency. The primary lever to move revenue is improving what happens after the open.", borderColor: BRAND.blue },
    ],
    flows: [
      {
        name: "Welcome Series",
        id: "WUK7FY",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Added to List",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 1038, delivered: 1013, openRate: 0.38697, clickRate: 0.03751, convRate: 0.00964, conversions: 10, revenue: 480.54, bounceRate: 0.02415, unsubRate: 0 },
          { label: "Email 2 — Coupon", recipients: 366, delivered: 361, openRate: 0.35165, clickRate: 0, convRate: 0.0082, conversions: 3, revenue: 119.64, bounceRate: 0.01366, unsubRate: 0 },
          { label: "Email 3 — What Makes Us Different", recipients: 362, delivered: 358, openRate: 0.24931, clickRate: 0, convRate: 0.00277, conversions: 1, revenue: 56.64, bounceRate: 0.01105, unsubRate: 0 },
          { label: "Email 4 — Product Discovery", recipients: 282, delivered: 279, openRate: 0.29181, clickRate: 0, convRate: 0.00355, conversions: 1, revenue: 36.40, bounceRate: 0.01064, unsubRate: 0 },
          { label: "Email 5 — Beefcake Products", recipients: 290, delivered: 287, openRate: 0.35417, clickRate: 0, convRate: 0.01034, conversions: 3, revenue: 114.37, bounceRate: 0.01034, unsubRate: 0 },
          { label: "Email 6 — Social Proof", recipients: 255, delivered: 253, openRate: 0.29921, clickRate: 0, convRate: 0.00392, conversions: 1, revenue: 23.05, bounceRate: 0.00784, unsubRate: 0 },
          { label: "Email 7", recipients: 217, delivered: 215, openRate: 0.2212, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00922, unsubRate: 0 },
        ],
      },
      {
        name: "SPIN Welcome Series",
        id: "RCEqqK",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (SPIN Opt-In)",
        launchDate: "Feb 04",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 3585, delivered: 3499, openRate: 0.334, clickRate: 0.01543, convRate: 0.01423, conversions: 51, revenue: 3046.70, bounceRate: 0.02398, unsubRate: 0.00781 },
          { label: "Email 2", recipients: 3393, delivered: 3370, openRate: 0.20155, clickRate: 0.00532, convRate: 0.00088, conversions: 3, revenue: 209.65, bounceRate: 0.00678, unsubRate: 0.00325 },
          { label: "Email 3", recipients: 3177, delivered: 3151, openRate: 0.19498, clickRate: 0.00569, convRate: 0.00063, conversions: 2, revenue: 88.26, bounceRate: 0.00818, unsubRate: 0.00283 },
          { label: "Email 4", recipients: 2787, delivered: 2765, openRate: 0.20731, clickRate: 0.00831, convRate: 0.00108, conversions: 3, revenue: 207.20, bounceRate: 0.0079, unsubRate: 0.00072 },
          { label: "SMS Text 1", recipients: 25, delivered: 25, openRate: null, clickRate: 0, convRate: 0.04, conversions: 1, revenue: 61.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 10, delivered: 10, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Abandoned Checkout",
        id: "Tpym9d",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Checkout Started",
        launchDate: "Feb 10",
        diagnostic: true,
        smsLive: true,
        messages: [
          { label: "Email 1 — Cart Reminder", recipients: 131, delivered: 130, openRate: 0.24138, clickRate: 0.03817, convRate: 0.01527, conversions: 2, revenue: 220.52, bounceRate: 0.00763, unsubRate: 0 },
          { label: "Email 2 — Last Chance", recipients: 261, delivered: 259, openRate: 0.25385, clickRate: 0.01149, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00766, unsubRate: 0 },
          { label: "SMS Text 1", recipients: 78, delivered: 78, openRate: null, clickRate: 0.12821, convRate: 0.10256, conversions: 8, revenue: 587.73, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 40, delivered: 40, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Post-Purchase",
        id: "Vf5YHp",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Placed Order)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 1565, delivered: 1561, openRate: 0.23941, clickRate: 0.00832, convRate: 0.00064, conversions: 1, revenue: 26.04, bounceRate: 0.00256, unsubRate: 0.00128 },
          { label: "SMS Text 1", recipients: 17, delivered: 17, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Browse Abandonment",
        id: "XPiFwU",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Viewed Product)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "SMS Text 1", recipients: 162, delivered: 162, openRate: null, clickRate: 0.04938, convRate: 0.00617, conversions: 1, revenue: 29.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
    ],
    checkoutDiagnostic: null,
    roadmap: { now: [], next: [], later: [] },
  },
  "week-6": {
    label: "Week 6",
    dateRange: "Mar 5 – Mar 12",
    updatedDate: "Mar 12, 2026",
    campaigns: [
      {
        name: "St. Paddy LIVE NOW",
        sendDate: "Mar 6",
        recipients: 98613,
        delivered: 97899,
        openRate: 0.23025,
        clickRate: 0.00229,
        cto: 0.00994,
        conversions: 66,
        revenue: 5196.43,
        bounceRate: 0.00724,
        unsubRate: 0.00052,
        rpr: 0.05,
        aov: 78.73,
        tag: { label: "Strong Launch", color: BRAND.blue },
        insight: "St. Paddy's live announcement generated $5,196 from 66 conversions at $78.73 AOV — the highest AOV of any email campaign this period. Opens at 23% and CTO at 0.99% follow the typical launch pattern: broad awareness, high-value buyers converting. The sneak peek email one day prior primed this audience well.",
      },
      {
        name: "These sticks almost didn't happen",
        sendDate: "Mar 7",
        recipients: 98602,
        delivered: 98016,
        openRate: 0.22589,
        clickRate: 0.00193,
        cto: 0.00854,
        conversions: 49,
        revenue: 3666.63,
        bounceRate: 0.00594,
        unsubRate: 0.00061,
        rpr: 0.04,
        aov: 74.83,
        tag: { label: "Click Gap", color: BRAND.amber },
        insight: "Story-driven follow-up to the launch sent same day. Opens held at 22.6% — the promo window is still alive — but CTO dipped to 0.85% and revenue dropped $1,500 from the launch email. The 'almost didn't happen' narrative angle generated opens but the connection to a purchase action wasn't tight enough. Strong story hook, needs a clearer 'here's how to get it' bridge.",
      },
      {
        name: "These sticks almost didn't happen (resend)",
        sendDate: "Mar 9",
        recipients: 98870,
        delivered: 98354,
        openRate: 0.2158,
        clickRate: 0.00104,
        cto: 0.00482,
        conversions: 34,
        revenue: 2453.74,
        bounceRate: 0.00522,
        unsubRate: 0.00072,
        rpr: 0.02,
        aov: 72.17,
        tag: { label: "Fatigue Signal", color: BRAND.red },
        insight: "Third St. Paddy's email in four days. Opens fell to 21.6% (lowest of the week), CTO halved to 0.48%, and revenue dropped another $1,200. The list is fatigued on this campaign. The buyers who were going to purchase did so by Mar 7 — this resend is eroding list health for diminishing returns. Consider a 48-hour cooldown after day-2 in future promo windows.",
      },
      {
        name: "St. Paddy LIVE NOW (SMS)",
        sendDate: "Mar 6",
        recipients: 30286,
        delivered: 30286,
        openRate: null,
        clickRate: 0.01969,
        cto: null,
        conversions: 56,
        revenue: 4586.48,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.15,
        aov: 81.90,
        tag: { label: "Top Performer", color: BRAND.green },
        insight: "Best SMS performance of the entire program: $0.15 RPR, 56 conversions, $81.90 AOV on 30K sends. The live sale SMS drove nearly as much revenue as the launch email ($4,586 vs. $5,196) on a list 3x smaller. SMS is the ideal channel for real-time sale announcements where urgency is the hook.",
      },
      {
        name: "St. Paddys Running Low (SMS)",
        sendDate: "Mar 7",
        recipients: 30118,
        delivered: 30118,
        openRate: null,
        clickRate: 0.01137,
        cto: null,
        conversions: 17,
        revenue: 1318.26,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.04,
        aov: 77.54,
        tag: { label: "Fatigue Signal", color: BRAND.red },
        insight: "Second St. Paddy's SMS showed classic fatigue: conversions dropped from 56 to 17 and revenue fell from $4,586 to $1,318. 'Running Low' scarcity messaging is effective in principle, but the audience had already converted the day prior. For future campaigns, space urgency texts at least 48 hours after the launch send.",
      },
      {
        name: "Mar 10 SMS",
        sendDate: "Mar 10",
        recipients: 30040,
        delivered: 30040,
        openRate: null,
        clickRate: 0.00539,
        cto: null,
        conversions: 18,
        revenue: 1216.57,
        bounceRate: 0,
        unsubRate: 0,
        rpr: 0.04,
        aov: 67.59,
        tag: { label: "Baseline", color: BRAND.gray },
        insight: "End-of-week follow-up SMS after the St. Paddy's promo window closed. $1,216 on 30K sends is below the SMS channel baseline, suggesting the audience had fully cycled through the campaign. Lowest click rate (0.54%) of any SMS this period. Good reminder that post-promo sends need a new angle — same-campaign follow-ups don't recover fatigue.",
      },
    ],
    insights: [
      { icon: "📱", title: "SMS launch day was the strongest single send in the program", body: "St. Paddy LIVE NOW SMS: $4,586, 56 conversions, $81.90 AOV, $0.15 RPR — the best revenue-per-contact performance across all channels since the program launched. SMS on launch day drove nearly as much revenue as the email to a list 3x larger. SMS list growth is the highest ROI activity in the account.", borderColor: BRAND.green },
      { icon: "📉", title: "St. Paddy's promo fatigued on day 3 across both channels", body: "Email revenue fell from $5,196 (Mar 6) → $3,667 (Mar 7) → $2,454 (Mar 9). SMS fell from $4,586 (Mar 6) → $1,318 (Mar 7) → $1,217 (Mar 10). Both channels showed the same pattern: nearly all high-intent buyers converted in the first 24 hours. After that, additional sends are reaching an audience that already decided. Cap future promo windows at 2 email + 1 SMS touches.", borderColor: BRAND.red },
      { icon: "✅", title: "Sneak peek + launch sequence is a proven format", body: "The Mar 4 sneak peek (68 conversions, $5,066) set up the Mar 6 launch (66 conversions, $5,196) for back-to-back strong revenue days. Pre-launch teasers prime purchase intent without burning the audience. This two-email structure — teaser 48 hours before, launch day announcement — should be the template for every future product drop.", borderColor: BRAND.green },
      { icon: "⚠️", title: "Email CTO still under 1% on full-list sends", body: "All three broadcast emails this week had CTO under 1%: 0.99%, 0.85%, and 0.48%. Opens at 21–23% are healthy, but the click gap remains the primary bottleneck. The story-driven email (Mar 7) had the creative hook but no clear CTA bridge. Email body optimization — single CTA, direct offer language — remains the highest-leverage email improvement.", borderColor: BRAND.amber },
      { icon: "💡", title: "Bounce rates improving — deliverability trending better", body: "Week 6 bounce rates are the lowest since the program launched: 0.52–0.72% on full-list sends vs. 0.88–1.05% in Week 2. List hygiene from the early warming campaign sends is paying off. Lower bounces mean better inbox placement, which compounds over time into higher open rates.", borderColor: BRAND.blue },
      { icon: "🏗️", title: "UTM source tracking system built and deployed", body: "Full attribution infrastructure is now live in Klaviyo: 6 source segments created (Meta Paid, Google Paid, TikTok Paid, Organic, Klaviyo Email/SMS, Unknown), UTM tracking applied to all 23 email flow-actions across 5 flows, and campaign tracking configured. Hidden form fields spec'd for the Spin to Win popup — once Jake enables them, every new subscriber will carry first-touch source data. QA sign-off completed March 9.", borderColor: BRAND.blue },
      { icon: "📦", title: "QR-to-SMS acquisition program designed for retail launch", body: "New channel: QR codes on retail packaging → SMS keyword subscribe → mystery discount flow (random 10/15/20% off). Full spec delivered including Shopify bulk discount code generation, Klaviyo coupon lists, landing page, 3-path welcome flow with Day 21 and Day 29 reminder sequence. Bitly dynamic QR and keyword 'JERKY' ready — awaiting Jake's inputs on go-live details.", borderColor: BRAND.green },
    ],
    flows: [
      {
        name: "Welcome Series",
        id: "WUK7FY",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Added to List",
        launchDate: "Feb 10",
        messages: [
          { label: "Email 1", recipients: 1038, delivered: 1013, openRate: 0.38697, clickRate: 0.03751, convRate: 0.00964, conversions: 10, revenue: 480.54, bounceRate: 0.02415, unsubRate: 0 },
          { label: "Email 2 — Coupon", recipients: 366, delivered: 361, openRate: 0.35165, clickRate: 0, convRate: 0.0082, conversions: 3, revenue: 119.64, bounceRate: 0.01366, unsubRate: 0 },
          { label: "Email 3 — What Makes Us Different", recipients: 362, delivered: 358, openRate: 0.24931, clickRate: 0, convRate: 0.00277, conversions: 1, revenue: 56.64, bounceRate: 0.01105, unsubRate: 0 },
          { label: "Email 4 — Product Discovery", recipients: 282, delivered: 279, openRate: 0.29181, clickRate: 0, convRate: 0.00355, conversions: 1, revenue: 36.40, bounceRate: 0.01064, unsubRate: 0 },
          { label: "Email 5 — Beefcake Products", recipients: 290, delivered: 287, openRate: 0.35417, clickRate: 0, convRate: 0.01034, conversions: 3, revenue: 114.37, bounceRate: 0.01034, unsubRate: 0 },
          { label: "Email 6 — Social Proof", recipients: 255, delivered: 253, openRate: 0.29921, clickRate: 0, convRate: 0.00392, conversions: 1, revenue: 23.05, bounceRate: 0.00784, unsubRate: 0 },
          { label: "Email 7", recipients: 217, delivered: 215, openRate: 0.2212, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00922, unsubRate: 0 },
        ],
      },
      {
        name: "SPIN Welcome Series",
        id: "RCEqqK",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (SPIN Opt-In)",
        launchDate: "Feb 04",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 3585, delivered: 3499, openRate: 0.334, clickRate: 0.01543, convRate: 0.01423, conversions: 51, revenue: 3046.70, bounceRate: 0.02398, unsubRate: 0.00781 },
          { label: "Email 2", recipients: 3393, delivered: 3370, openRate: 0.20155, clickRate: 0.00532, convRate: 0.00088, conversions: 3, revenue: 209.65, bounceRate: 0.00678, unsubRate: 0.00325 },
          { label: "Email 3", recipients: 3177, delivered: 3151, openRate: 0.19498, clickRate: 0.00569, convRate: 0.00063, conversions: 2, revenue: 88.26, bounceRate: 0.00818, unsubRate: 0.00283 },
          { label: "Email 4", recipients: 2787, delivered: 2765, openRate: 0.20731, clickRate: 0.00831, convRate: 0.00108, conversions: 3, revenue: 207.20, bounceRate: 0.0079, unsubRate: 0.00072 },
          { label: "SMS Text 1", recipients: 25, delivered: 25, openRate: null, clickRate: 0, convRate: 0.04, conversions: 1, revenue: 61.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 10, delivered: 10, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Abandoned Checkout",
        id: "Tpym9d",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Checkout Started",
        launchDate: "Feb 10",
        diagnostic: true,
        smsLive: true,
        messages: [
          { label: "Email 1 — Cart Reminder", recipients: 131, delivered: 130, openRate: 0.24138, clickRate: 0.03817, convRate: 0.01527, conversions: 2, revenue: 220.52, bounceRate: 0.00763, unsubRate: 0 },
          { label: "Email 2 — Last Chance", recipients: 261, delivered: 259, openRate: 0.25385, clickRate: 0.01149, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0.00766, unsubRate: 0 },
          { label: "SMS Text 1", recipients: 78, delivered: 78, openRate: null, clickRate: 0.12821, convRate: 0.10256, conversions: 8, revenue: 587.73, bounceRate: 0, unsubRate: 0, channel: "sms" },
          { label: "SMS Text 2", recipients: 40, delivered: 40, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Post-Purchase",
        id: "Vf5YHp",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Placed Order)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "Email 1", recipients: 1565, delivered: 1561, openRate: 0.23941, clickRate: 0.00832, convRate: 0.00064, conversions: 1, revenue: 26.04, bounceRate: 0.00256, unsubRate: 0.00128 },
          { label: "SMS Text 1", recipients: 17, delivered: 17, openRate: null, clickRate: 0, convRate: 0, conversions: 0, revenue: 0, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "Browse Abandonment",
        id: "XPiFwU",
        status: "LIVE",
        statusColor: BRAND.green,
        trigger: "Metric (Viewed Product)",
        launchDate: "Feb 10",
        smsLive: true,
        messages: [
          { label: "SMS Text 1", recipients: 162, delivered: 162, openRate: null, clickRate: 0.04938, convRate: 0.00617, conversions: 1, revenue: 29.98, bounceRate: 0, unsubRate: 0, channel: "sms" },
        ],
      },
      {
        name: "QR Mystery Discount",
        id: "TBD",
        status: "IN BUILD",
        statusColor: BRAND.amber,
        trigger: "Added to List (QR Keyword Subscribe)",
        launchDate: "—",
        smsLive: true,
        messages: [],
        note: "Spec complete. 3-path random split (10/15/20% off) with Day 0 welcome SMS, Day 21 reminder, Day 29 final nudge. Awaiting Jake sign-off on keyword, discount expiry, and packaging timeline.",
      },
    ],
    checkoutDiagnostic: null,
    roadmap: {
      now: [
        { icon: "🔧", label: "Enable hidden UTM fields on Spin to Win form", desc: "~15 min in Klaviyo form builder — Jake action item" },
        { icon: "🔧", label: "Apply UTM tracking to 5 email flows", desc: "~15 min clicking through flow settings — Jake action item" },
      ],
      next: [
        { icon: "📦", label: "Build QR Mystery Discount flow in Klaviyo", desc: "Awaiting Jake's sign-off on keyword and discount tiers" },
        { icon: "📊", label: "Upload UTM registry spreadsheet", desc: "Central reference for all UTM naming conventions across paid channels" },
      ],
      later: [
        { icon: "📈", label: "Monitor source segment growth", desc: "Track how the 6 segments populate after form hidden fields go live" },
        { icon: "🔄", label: "Replenish Shopify discount codes", desc: "Generate new batches as QR program scales" },
      ],
    },
  },
};

const weekKeys = Object.keys(WEEKS);

/* ── UTILS ── */
const pct = (v) => `${(v * 100).toFixed(1)}%`;
const currency = (v) => `$${v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const shortCurrency = (v) => v >= 1000 ? `$${(v / 1000).toFixed(1)}K` : currency(v);

/* ── SHARED COMPONENTS ── */
function MetricPill({ label, value, benchmark, status }) {
  const colors = {
    good: { bg: "#E8F5E9", text: BRAND.green, icon: "▲" },
    warning: { bg: "#FFF3E0", text: BRAND.amber, icon: "●" },
    bad: { bg: "#FFEBEE", text: BRAND.red, icon: "▼" },
    neutral: { bg: BRAND.lightGray, text: BRAND.gray, icon: "" },
  };
  const c = colors[status] || colors.neutral;
  return (
    <div style={{ background: c.bg, borderRadius: 8, padding: "10px 14px", minWidth: 100, textAlign: "center" }}>
      <div style={{ fontSize: 11, color: BRAND.gray, fontWeight: 500, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: c.text }}>{value}</div>
      {benchmark && <div style={{ fontSize: 10, color: BRAND.gray, marginTop: 2 }}>{c.icon} Target: {benchmark}</div>}
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{title}</div>
      {subtitle && <div style={{ fontSize: 12, color: "#999" }}>{subtitle}</div>}
    </div>
  );
}

function InsightCard({ icon, title, body, borderColor }) {
  return (
    <div style={{
      display: "flex", gap: 12, padding: "14px 16px",
      background: BRAND.white, borderRadius: 10,
      borderLeft: `3px solid ${borderColor || BRAND.blue}`,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    }}>
      <div style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.dark, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 12, color: BRAND.gray, lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  );
}

/* ── CAMPAIGN SECTION ── */
function CampaignRow({ campaign, isExpanded, onToggle }) {
  const openStatus = campaign.openRate >= 0.25 ? "good" : campaign.openRate >= 0.20 ? "warning" : "bad";
  const clickStatus = campaign.clickRate >= 0.01 ? "good" : campaign.clickRate >= 0.003 ? "warning" : "bad";
  const ctoStatus = campaign.cto >= 0.02 ? "good" : campaign.cto >= 0.01 ? "warning" : "bad";

  return (
    <div style={{ background: BRAND.white, borderRadius: 10, border: "1px solid #E0E0E0", marginBottom: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div
        onClick={onToggle}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", cursor: "pointer", background: isExpanded ? BRAND.dark : BRAND.white, transition: "background 0.2s" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
          <div style={{
            background: campaign.tag.color, color: BRAND.white,
            fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 12,
            textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0,
          }}>
            {campaign.tag.label}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: isExpanded ? BRAND.white : BRAND.dark, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{campaign.name}</div>
          <div style={{ fontSize: 11, color: isExpanded ? "#888" : BRAND.gray, flexShrink: 0 }}>{campaign.sendDate}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: isExpanded ? "#888" : BRAND.gray }}>Opens</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: isExpanded ? BRAND.white : BRAND.dark }}>{pct(campaign.openRate)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: isExpanded ? "#888" : BRAND.gray }}>Click-to-Open</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: campaign.cto >= 0.02 ? BRAND.green : (campaign.cto >= 0.01 ? BRAND.amber : (isExpanded ? "#E57373" : BRAND.red)) }}>{pct(campaign.cto)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: isExpanded ? "#888" : BRAND.gray }}>Revenue</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: campaign.revenue > 5000 ? BRAND.green : (isExpanded ? "#888" : BRAND.gray) }}>{shortCurrency(campaign.revenue)}</div>
          </div>
          <div style={{ fontSize: 16, color: isExpanded ? "#999" : "#CCC", transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</div>
        </div>
      </div>

      {isExpanded && (
        <div style={{ padding: "12px 18px 18px" }}>
          {/* Per-campaign insight */}
          <div style={{
            background: "#F8FAFE", borderRadius: 8, padding: "12px 16px", marginBottom: 16,
            borderLeft: `3px solid ${campaign.tag.color}`,
          }}>
            <div style={{ fontSize: 12, color: BRAND.dark, lineHeight: 1.5 }}>{campaign.insight}</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <MetricPill label="Recipients" value={campaign.recipients.toLocaleString()} status="neutral" />
            <MetricPill label="Delivered" value={pct(campaign.delivered / campaign.recipients)} status={campaign.delivered / campaign.recipients > 0.97 ? "good" : "warning"} benchmark="97%" />
            <MetricPill label="Open Rate" value={pct(campaign.openRate)} status={openStatus} benchmark="25%" />
            <MetricPill label="Click Rate" value={pct(campaign.clickRate)} status={clickStatus} benchmark="1%" />
            <MetricPill label="Click-to-Open" value={pct(campaign.cto)} status={ctoStatus} benchmark="2%" />
            <MetricPill label="Conversions" value={campaign.conversions} status={campaign.conversions > 50 ? "good" : "neutral"} />
            <MetricPill label="Revenue" value={currency(campaign.revenue)} status={campaign.revenue > 5000 ? "good" : "neutral"} />
            <MetricPill label="AOV" value={currency(campaign.aov)} status="neutral" />
            <MetricPill label="Rev/Recipient" value={currency(campaign.rpr)} status={campaign.rpr >= 0.10 ? "good" : "neutral"} benchmark="$0.10" />
            {campaign.bounceRate > 0.01 && <MetricPill label="Bounce" value={pct(campaign.bounceRate)} status="bad" benchmark="<1%" />}
            {campaign.unsubRate > 0.002 && <MetricPill label="Unsub" value={pct(campaign.unsubRate)} status="warning" benchmark="<0.2%" />}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── FLOW SECTION ── */
function DiagnosticBar({ label, value, total, color, note }) {
  const pctVal = Math.round((value / total) * 100);
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: BRAND.dark }}>{label}</span>
        <span style={{ fontSize: 12, color: BRAND.gray }}>{value} profiles ({pctVal}%)</span>
      </div>
      <div style={{ background: "#E8E8E8", borderRadius: 4, height: 14, overflow: "hidden", position: "relative" }}>
        <div style={{ background: color, height: "100%", width: `${pctVal}%`, borderRadius: 4, transition: "width 0.3s" }} />
      </div>
      {note && <div style={{ fontSize: 11, color: BRAND.gray, marginTop: 2, fontStyle: "italic" }}>{note}</div>}
    </div>
  );
}

function CheckoutDiagnostic({ data }) {
  if (!data) return null;
  const { totalCheckouts, canGetEmail, gotEmail, breakdown } = data;
  const otherCount = totalCheckouts - gotEmail;
  return (
    <div style={{ background: "#FFF8F0", border: "1px solid #F0D4A8", borderRadius: 10, padding: "18px 22px", margin: "16px 0 4px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span style={{ fontSize: 16 }}>🔍</span>
        <span style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark }}>Why Checkout Numbers Look Low (and Why That's Actually OK)</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, padding: "10px 14px", background: BRAND.white, borderRadius: 8 }}>
        <div style={{ textAlign: "center", padding: "0 16px", borderRight: "1px solid #EEE" }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: BRAND.dark }}>{totalCheckouts}</div>
          <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase" }}>Total Checkouts</div>
        </div>
        <div style={{ fontSize: 20, color: "#CCC" }}>→</div>
        <div style={{ textAlign: "center", padding: "0 16px", borderRight: "1px solid #EEE" }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: BRAND.amber }}>~{canGetEmail}</div>
          <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase" }}>Can Get Email</div>
        </div>
        <div style={{ fontSize: 20, color: "#CCC" }}>→</div>
        <div style={{ textAlign: "center", padding: "0 16px" }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: BRAND.green }}>{gotEmail}</div>
          <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase" }}>Got the Email</div>
        </div>
        <div style={{ marginLeft: "auto", background: "#E8F5E9", borderRadius: 6, padding: "6px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: BRAND.green }}>Flow is working correctly</div>
        </div>
      </div>

      <div style={{ fontSize: 12, fontWeight: 700, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>
        So where did the other {otherCount}+ go?
      </div>

      {breakdown.map((item, i) => (
        <DiagnosticBar key={i} label={item.label} value={item.value} total={totalCheckouts} color={item.color} note={item.note} />
      ))}

      <div style={{ marginTop: 16 }}>
        <div style={{ background: BRAND.white, borderRadius: 8, padding: "12px 16px", border: "1px solid #E0E0E0" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: BRAND.blue, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Next Move: Add SMS</div>
          <div style={{ fontSize: 12, color: BRAND.dark, fontWeight: 600 }}>SMS is the biggest unlock left for this flow</div>
          <div style={{ fontSize: 11, color: BRAND.gray, marginTop: 2 }}>~40% of checkout profiles are phone-only through Shop Pay. Email can't reach them. SMS can.</div>
        </div>
      </div>
    </div>
  );
}

function SMSInsight({ flow }) {
  const emailConversions = flow.messages.filter(m => m.channel !== "sms").reduce((s, m) => s + m.conversions, 0);
  const emailRevenue = flow.messages.filter(m => m.channel !== "sms").reduce((s, m) => s + m.revenue, 0);
  const sms = flow.messages.find(m => m.channel === "sms");
  return (
    <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: "18px 22px", margin: "16px 0 4px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span style={{ fontSize: 16 }}>📱</span>
        <span style={{ fontWeight: 700, fontSize: 14, color: BRAND.dark }}>SMS Is Live — And It's Converting</span>
        <div style={{ marginLeft: "auto", background: BRAND.green, borderRadius: 6, padding: "4px 12px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: BRAND.white }}>NEW</div>
        </div>
      </div>
      <div style={{ fontSize: 12, color: BRAND.gray, marginBottom: 16, lineHeight: 1.5 }}>
        The checkout flow now reaches abandoners through both email and SMS. SMS targets the phone-only segment that email can't reach. Early results show SMS converting at more than 2x the rate of email.
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 160, background: BRAND.white, borderRadius: 8, padding: "14px 16px", border: "1px solid #E0E0E0" }}>
          <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Email (E1 + E2)</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.dark }}>{emailConversions} conv.</div>
          <div style={{ fontSize: 12, color: BRAND.green, fontWeight: 600, marginTop: 2 }}>{currency(emailRevenue)}</div>
          <div style={{ fontSize: 11, color: BRAND.gray, marginTop: 4 }}>4.7% conv. rate on E1</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 20, color: "#CCC" }}>+</div>
        <div style={{ flex: 1, minWidth: 160, background: "#F0FDF4", borderRadius: 8, padding: "14px 16px", border: `1px solid ${BRAND.green}` }}>
          <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>SMS (Text 1)</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: BRAND.green }}>{sms ? sms.conversions : 0} conv.</div>
          <div style={{ fontSize: 12, color: BRAND.green, fontWeight: 600, marginTop: 2 }}>{sms ? currency(sms.revenue) : "$0"}</div>
          <div style={{ fontSize: 11, color: BRAND.gray, marginTop: 4 }}>10.7% conv. rate on 28 sends</div>
        </div>
      </div>
      <div style={{ background: BRAND.white, borderRadius: 8, padding: "10px 14px", border: "1px solid #E0E0E0" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: BRAND.blue, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Next Move</div>
        <div style={{ fontSize: 12, color: BRAND.dark }}>Grow the SMS subscriber base to increase reach. More SMS subscribers = more phone-only abandoners we can recover.</div>
      </div>
    </div>
  );
}

function FlowCard({ flow, isExpanded, onToggle, checkoutDiagnostic }) {
  const totalRecipients = flow.messages.reduce((s, m) => s + m.recipients, 0);
  const totalRevenue = flow.messages.reduce((s, m) => s + m.revenue, 0);
  const e1 = flow.messages[0] || null;

  const openStatus = e1 ? (e1.openRate >= 0.28 ? "good" : e1.openRate >= 0.20 ? "warning" : "bad") : "neutral";
  const clickStatus = e1 ? (e1.clickRate >= 0.015 ? "good" : e1.clickRate > 0 ? "warning" : "bad") : "neutral";

  return (
    <div style={{ background: BRAND.white, borderRadius: 12, border: `1px solid ${flow.diagnostic ? BRAND.amber : "#E0E0E0"}`, marginBottom: 16, overflow: "hidden", boxShadow: flow.diagnostic ? `0 0 0 1px ${BRAND.amber}22` : "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div
        onClick={onToggle}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", cursor: "pointer", background: isExpanded ? BRAND.dark : BRAND.white, transition: "background 0.2s" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: flow.statusColor, color: BRAND.white, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.8 }}>
            {flow.status}
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: isExpanded ? BRAND.white : BRAND.dark }}>{flow.name}</div>
          {flow.diagnostic && <div style={{ fontSize: 10, fontWeight: 600, color: BRAND.amber, background: "#FFF3E0", padding: "2px 8px", borderRadius: 4 }}>DIAGNOSED</div>}
          {flow.smsLive && <div style={{ fontSize: 10, fontWeight: 600, color: BRAND.green, background: "#F0FDF4", padding: "2px 8px", borderRadius: 4, border: "1px solid #BBF7D0" }}>+ SMS</div>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: isExpanded ? "#999" : BRAND.gray }}>Total Recipients</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: isExpanded ? BRAND.white : BRAND.dark }}>{totalRecipients}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: isExpanded ? "#999" : BRAND.gray }}>Revenue</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: totalRevenue > 0 ? BRAND.green : (isExpanded ? "#666" : "#999") }}>{currency(totalRevenue)}</div>
          </div>
          <div style={{ fontSize: 18, color: isExpanded ? "#999" : "#CCC", transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</div>
        </div>
      </div>

      {isExpanded && (
        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "flex", gap: 12, padding: "16px 0 12px", borderBottom: "1px solid #EEE", marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: BRAND.gray }}><strong>Trigger:</strong> {flow.trigger}</div>
          </div>

          {flow.messages.map((msg, i) => {
            const isSMS = msg.channel === "sms";
            return (
              <div key={i} style={{ marginBottom: i < flow.messages.length - 1 ? 20 : 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.dark }}>{msg.label}</div>
                  {isSMS && <div style={{ fontSize: 10, fontWeight: 600, color: BRAND.blue, background: "#EFF6FF", padding: "2px 8px", borderRadius: 4 }}>SMS</div>}
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <MetricPill label="Recipients" value={msg.recipients} status="neutral" />
                  <MetricPill label="Delivered" value={pct(msg.delivered / msg.recipients)} status={msg.delivered / msg.recipients > 0.97 ? "good" : "warning"} benchmark="97%" />
                  {!isSMS && <MetricPill label="Open Rate" value={pct(msg.openRate)} status={i === 0 ? openStatus : "neutral"} benchmark={i === 0 ? "28%" : undefined} />}
                  <MetricPill
                    label={isSMS ? "Response Rate" : "Click Rate"}
                    value={pct(msg.clickRate)}
                    status={isSMS ? (msg.clickRate >= 0.05 ? "good" : "warning") : (i === 0 ? clickStatus : "neutral")}
                    benchmark={isSMS ? "5%" : (i === 0 ? "1.5%" : undefined)}
                  />
                  <MetricPill label="Conversions" value={msg.conversions} status={msg.conversions > 0 ? "good" : "neutral"} />
                  <MetricPill label="Revenue" value={currency(msg.revenue)} status={msg.revenue > 0 ? "good" : "neutral"} />
                  {msg.bounceRate > 0.02 && <MetricPill label="Bounce" value={pct(msg.bounceRate)} status="bad" benchmark="<2%" />}
                  {msg.unsubRate > 0.01 && <MetricPill label="Unsub" value={pct(msg.unsubRate)} status="warning" benchmark="<1%" />}
                </div>
              </div>
            );
          })}

          {flow.note && (
            <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 8, padding: "12px 16px", marginTop: flow.messages.length > 0 ? 16 : 0, fontSize: 13, color: BRAND.gray, lineHeight: 1.5 }}>
              <strong style={{ color: BRAND.amber }}>Status Note:</strong> {flow.note}
            </div>
          )}
          {flow.diagnostic && <CheckoutDiagnostic data={checkoutDiagnostic} />}
          {flow.smsLive && !flow.note && <SMSInsight flow={flow} />}
        </div>
      )}
    </div>
  );
}

/* ── ROADMAP SECTION ── */
function RoadmapItem({ item }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0" }}>
      <div style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.dark }}>{item.label}</div>
        <div style={{ fontSize: 12, color: BRAND.gray, marginTop: 2 }}>{item.desc}</div>
      </div>
    </div>
  );
}

function RoadmapSection({ title, subtitle, items, borderColor }) {
  return (
    <div style={{
      background: BRAND.white, borderRadius: 12,
      border: "1px solid #E0E0E0", borderTop: `3px solid ${borderColor}`,
      padding: "20px 24px", flex: 1, minWidth: 320,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: borderColor }} />
        <div style={{ fontSize: 14, fontWeight: 700, color: BRAND.dark }}>{title}</div>
      </div>
      <div style={{ fontSize: 11, color: BRAND.gray, marginBottom: 14, paddingLeft: 16 }}>{subtitle}</div>
      <div style={{ borderTop: "1px solid #F0F0F0" }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: i < items.length - 1 ? "1px solid #F5F5F5" : "none" }}>
            <RoadmapItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── MAIN DASHBOARD ── */
function Dashboard() {
  const [selectedWeek, setSelectedWeek] = useState(weekKeys[weekKeys.length - 1]);
  const [campaignExpanded, setCampaignExpanded] = useState({});
  const [flowExpanded, setFlowExpanded] = useState({});

  const week = WEEKS[selectedWeek];
  const { campaigns, insights, flows, checkoutDiagnostic, roadmap } = week;

  const toggleCampaign = (i) => setCampaignExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  const toggleFlow = (i) => setFlowExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const totalCampaignRevenue = campaigns.reduce((s, c) => s + c.revenue, 0);
  const totalCampaignRecipients = campaigns.reduce((s, c) => s + c.recipients, 0);
  const totalFlowRevenue = flows.reduce((s, f) => s + f.messages.reduce((s2, m) => s2 + m.revenue, 0), 0);
  const avgOpenRate = campaigns.reduce((s, c) => s + c.openRate, 0) / campaigns.length;
  const avgCTO = campaigns.reduce((s, c) => s + c.cto, 0) / campaigns.length;

  // Reset expanded states when switching weeks
  const handleWeekChange = (key) => {
    setSelectedWeek(key);
    setCampaignExpanded({});
    setFlowExpanded({});
  };

  return (
    <div style={{ background: "#F8F8F8", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ background: BRAND.dark, padding: "24px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: BRAND.red, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>Beefcake Jerky Co.</div>
            <div style={{ color: BRAND.white, fontSize: 22, fontWeight: 700 }}>Email Performance Dashboard</div>
            <div style={{ color: "#888", fontSize: 12, marginTop: 2 }}>Live from Klaviyo · Updated {week.updatedDate}</div>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Campaigns Sent</div>
              <div style={{ color: BRAND.white, fontSize: 28, fontWeight: 700 }}>{campaigns.length}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Campaign Revenue</div>
              <div style={{ color: BRAND.green, fontSize: 28, fontWeight: 700 }}>{shortCurrency(totalCampaignRevenue)}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Live Flows</div>
              <div style={{ color: BRAND.white, fontSize: 28, fontWeight: 700 }}>{flows.length}</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Flow Revenue</div>
              <div style={{ color: totalFlowRevenue > 0 ? BRAND.green : "#666", fontSize: 28, fontWeight: 700 }}>{currency(totalFlowRevenue)}</div>
            </div>
          </div>
        </div>

        {/* Week Selector */}
        {weekKeys.length > 1 && (
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            {weekKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleWeekChange(key)}
                style={{
                  padding: "6px 16px", fontSize: 12, fontWeight: 600,
                  borderRadius: 20, border: "none", cursor: "pointer",
                  background: selectedWeek === key ? BRAND.red : "#333",
                  color: BRAND.white,
                  transition: "background 0.2s",
                }}
              >
                {WEEKS[key].label} <span style={{ fontWeight: 400, opacity: 0.7 }}>({WEEKS[key].dateRange})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px" }}>

        {/* ── SECTION 1: CAMPAIGNS ── */}
        <SectionHeader title="Email Campaigns" subtitle={`Individual sends · ${week.dateRange}`} />

        {/* Summary stats */}
        <div style={{ background: BRAND.white, borderRadius: 10, border: "1px solid #E0E0E0", padding: "14px 18px", marginBottom: 12, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5 }}>Total Sent</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: BRAND.dark }}>{(totalCampaignRecipients / 1000).toFixed(0)}K+</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5 }}>Total Revenue</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: BRAND.green }}>{shortCurrency(totalCampaignRevenue)}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5 }}>Conversions</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: BRAND.dark }}>{campaigns.reduce((s, c) => s + c.conversions, 0)}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5 }}>Avg Open Rate</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: BRAND.dark }}>{pct(avgOpenRate)}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5 }}>Avg Click-to-Open</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: avgCTO >= 0.02 ? BRAND.green : BRAND.amber }}>{pct(avgCTO)}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: BRAND.gray, textTransform: "uppercase", letterSpacing: 0.5 }}>Avg AOV</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: BRAND.dark }}>{currency(campaigns.reduce((s, c) => s + c.aov, 0) / campaigns.length)}</div>
          </div>
        </div>

        {/* Takeaways */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {insights.map((ins, i) => (
            <InsightCard key={i} icon={ins.icon} title={ins.title} body={ins.body} borderColor={ins.borderColor} />
          ))}
        </div>

        {/* Campaign rows */}
        {campaigns.map((c, i) => (
          <CampaignRow key={i} campaign={c} isExpanded={campaignExpanded[i]} onToggle={() => toggleCampaign(i)} />
        ))}

        {/* ── SECTION 2: LIVE FLOWS ── */}
        <div style={{ marginTop: 40 }}>
          <SectionHeader title="Live Flows" subtitle={`Automated sequences · ${week.dateRange}`} />
        </div>

        {flows.map((flow, i) => (
          <FlowCard key={i} flow={flow} isExpanded={flowExpanded[i]} onToggle={() => toggleFlow(i)} checkoutDiagnostic={checkoutDiagnostic} />
        ))}

        {/* ── SECTION 3: ROADMAP ── */}
        <div style={{ marginTop: 40 }}>
          <SectionHeader title="Roadmap" subtitle="What we're working on and what's coming next, in priority order" />
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <RoadmapSection title="Working On Now" subtitle="Active this sprint" items={roadmap.now} borderColor={BRAND.red} />
          <RoadmapSection title="Up Next" subtitle="Queued and ready to go" items={roadmap.next} borderColor={BRAND.amber} />
          <RoadmapSection title="On the Horizon" subtitle="Coming once the foundation is solid" items={roadmap.later} borderColor={BRAND.blue} />
        </div>
      </div>
    </div>
  );
}

/* ── PASSWORD GATE ── */
export default function PasswordGate() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "beefcake") {
      setUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  if (unlocked) return <Dashboard />;

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: BRAND.dark, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <form onSubmit={handleSubmit} style={{ textAlign: "center", width: 320 }}>
        <div style={{ color: "#888", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>
          XYZ Strategy
        </div>
        <div style={{ color: BRAND.white, fontSize: 20, fontWeight: 700, marginBottom: 24 }}>
          Email Traction Dashboard
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
            style={{
              width: "100%", padding: "12px 42px 12px 16px", fontSize: 16,
              border: error ? `2px solid ${BRAND.red}` : "2px solid #333",
              borderRadius: 8, background: "#2A2A2A", color: BRAND.white,
              outline: "none", boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", padding: 0,
              color: "#888", fontSize: 18, lineHeight: 1,
            }}
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
        <button
          type="submit"
          style={{
            width: "100%", padding: "12px 16px", fontSize: 14, fontWeight: 700,
            background: BRAND.red, color: BRAND.white, border: "none",
            borderRadius: 8, cursor: "pointer", marginTop: 12,
            textTransform: "uppercase", letterSpacing: 1,
          }}
        >
          View Dashboard
        </button>
        {error && (
          <div style={{ color: BRAND.red, fontSize: 12, marginTop: 10 }}>
            Wrong password. Try again.
          </div>
        )}
      </form>
    </div>
  );
}
