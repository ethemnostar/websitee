"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const jobs = [
  {
    company: "TeamViewer",
    role: "Senior Product Manager – Remote Management",
    period: "Jan 2023 – Present",
    location: "Göppingen, Germany",
    icon: "📡",
    color: "#0057FF",
    highlights: [
      "Own end-to-end product strategy for Device Monitoring, Asset Management & Discovery, and Endpoint Protection",
      "Act as both Product Manager and Product Owner — managing backlog, user stories, and engineering delivery",
      "Own Pricing & Packaging strategy for TeamViewer ONE, including commercial model design and price sensitivity analysis",
      "Lead strategic partnerships with Lansweeper and Malwarebytes — technical integrations and commercial negotiations",
      "Specialized in software licensing architecture with ERP and Microsoft Dynamics integrations",
    ],
    tags: ["Product Strategy", "Pricing & Packaging", "RMM", "Endpoint Security", "B2B SaaS"],
  },
  {
    company: "TeamViewer",
    role: "Senior Project Manager – Remote Management",
    period: "Apr 2020 – Dec 2022",
    location: "Göppingen, Germany",
    icon: "📡",
    color: "#0057FF",
    highlights: [
      "Delivered TeamViewer Web Monitoring, Malwarebytes integration, and Mobile Device Management",
      "Led cross-functional project management including Steering Committee reporting and executive-level summaries",
      "Initiated the Remote Management Ambassador Program to drive product awareness across sales teams",
      "Collaborated with Legal, Training, Marketing, R&D, Sales, and Support stakeholders",
    ],
    tags: ["Project Management", "Cross-functional", "MDM", "Stakeholder Management"],
  },
  {
    company: "Dogus Technology",
    role: "Head of RPA / Project Manager",
    period: "Dec 2017 – Sep 2019",
    location: "Istanbul, Turkey",
    icon: "🤖",
    color: "#FF6B35",
    highlights: [
      "Led RPA and ITSM projects and established RPA Center of Excellence across Dogus Group",
      "Managed a team of 7, delivered end-to-end enterprise automation solutions",
      "Involved in presales activities and vendor coordination",
    ],
    tags: ["RPA", "ITSM", "Automation", "Team Leadership"],
  },
  {
    company: "Turkish Airlines",
    role: "Project Manager, PMO",
    period: "Sep 2016 – Dec 2017",
    location: "Istanbul, Turkey",
    icon: "✈️",
    color: "#C8102E",
    highlights: [
      "Managed IT digital transformation initiatives for one of Europe's largest airlines",
      "Reported project status directly to C-level executives",
    ],
    tags: ["PMO", "Digital Transformation", "Aviation"],
  },
  {
    company: "Garanti BBVA Technology",
    role: "Senior Business Analyst – Payment Systems",
    period: "Apr 2015 – Aug 2016",
    location: "Istanbul, Turkey",
    icon: "🏦",
    color: "#009B77",
    highlights: [
      "Led integration of HGS-OGS toll/highway payment systems",
      "Coordinated with Mastercard and Visa compliance requirements",
    ],
    tags: ["Payment Systems", "Business Analysis", "Banking"],
  },
  {
    company: "Turkcell",
    role: "Business Analyst & Team Lead",
    period: "Apr 2011 – Apr 2015",
    location: "Istanbul, Turkey",
    icon: "📱",
    color: "#FFB800",
    highlights: [
      "Managed prepaid/postpaid system projects for Turkey's largest mobile operator",
      "Led a 7-member team and doubled operational efficiency",
    ],
    tags: ["Telecom", "Team Lead", "Business Analysis"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useReveal();

  return (
    <section id="experience" style={{ padding: "120px 32px" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span className="section-divider" />
            <span className="section-tag">Experience</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            15+ years of product<br /><em style={{ color: "var(--accent)" }}>& delivery leadership</em>
          </h2>
        </div>

        <div className="reveal exp-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 32 }}>
          {/* Sidebar */}
          <div className="exp-sidebar" style={{ borderRight: "1px solid var(--border)", paddingRight: 32 }}>
            {jobs.map((j, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{ width: "100%", textAlign: "left", border: "none", cursor: "pointer", padding: "14px 16px", borderRadius: 10, marginBottom: 4, transition: "all 0.2s", borderLeft: active === i ? `3px solid var(--accent)` : "3px solid transparent", background: active === i ? "var(--accent-dim)" : "transparent" } as React.CSSProperties}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: active === i ? "var(--text-primary)" : "var(--text-secondary)" }}>{j.company}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{j.period}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 32, lineHeight: 1 }}>{jobs[active].icon}</div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4, lineHeight: 1.3 }}>{jobs[active].role}</h3>
                  <div style={{ display: "flex", gap: 16, fontSize: 13, color: "var(--text-muted)" }}>
                    <span>{jobs[active].company}</span>
                    <span>·</span>
                    <span>{jobs[active].period}</span>
                    <span>·</span>
                    <span>{jobs[active].location}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
                {jobs[active].tags.map(t => <span key={t} className="badge">{t}</span>)}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {jobs[active].highlights.map((h, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", marginTop: 8, flexShrink: 0 }} />
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)" }}>{h}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
