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

function FlowCard({ flow, isExpanded, onToggle, checkoutDiagnostic }) {
  const totalRecipients = flow.messages.reduce((s, m) => s + m.recipients, 0);
  const totalRevenue = flow.messages.reduce((s, m) => s + m.revenue, 0);
  const e1 = flow.messages[0];

  const openStatus = e1.openRate >= 0.28 ? "good" : e1.openRate >= 0.20 ? "warning" : "bad";
  const clickStatus = e1.clickRate >= 0.015 ? "good" : e1.clickRate > 0 ? "warning" : "bad";

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
            <div style={{ fontSize: 12, color: BRAND.gray }}><strong>Launched:</strong> {flow.launchDate}</div>
          </div>

          {flow.messages.map((msg, i) => (
            <div key={i} style={{ marginBottom: i < flow.messages.length - 1 ? 16 : 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: BRAND.dark, marginBottom: 8 }}>{msg.label}</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <MetricPill label="Recipients" value={msg.recipients} status="neutral" />
                <MetricPill label="Delivered" value={pct(msg.delivered / msg.recipients)} status={msg.delivered / msg.recipients > 0.97 ? "good" : "warning"} benchmark="97%" />
                <MetricPill label="Open Rate" value={pct(msg.openRate)} status={i === 0 ? openStatus : "neutral"} benchmark={i === 0 ? "28%" : undefined} />
                <MetricPill label="Click Rate" value={pct(msg.clickRate)} status={i === 0 ? clickStatus : "neutral"} benchmark={i === 0 ? "1.5%" : undefined} />
                <MetricPill label="Conversions" value={msg.conversions} status={msg.conversions > 0 ? "good" : "neutral"} />
                <MetricPill label="Revenue" value={currency(msg.revenue)} status={msg.revenue > 0 ? "good" : "neutral"} />
                {msg.bounceRate > 0.02 && <MetricPill label="Bounce" value={pct(msg.bounceRate)} status="bad" benchmark="<2%" />}
                {msg.unsubRate > 0.01 && <MetricPill label="Unsub" value={pct(msg.unsubRate)} status="warning" benchmark="<1%" />}
              </div>
            </div>
          ))}

          {flow.diagnostic && <CheckoutDiagnostic data={checkoutDiagnostic} />}
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
