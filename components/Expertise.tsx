"use client";
import { useReveal } from "@/hooks/useReveal";

const skillGroups = [
  {
    category: "Product Management",
    icon: "🎯",
    items: [
      "Product Strategy & Vision",
      "Roadmap Planning & Prioritization",
      "User Story Writing & Backlog Management",
      "Go-to-Market Strategy",
      "Customer Discovery & Validation",
      "Release Planning & Adoption",
    ],
  },
  {
    category: "Commercial & Business",
    icon: "💰",
    items: [
      "Pricing & Packaging Strategy",
      "Cost Structure & Sensitivity Analysis",
      "Partner Ecosystem Management",
      "Commercial Negotiations",
      "Revenue Modeling & Business Cases",
      "Software Licensing Architecture",
    ],
  },
  {
    category: "Technical",
    icon: "⚙️",
    items: [
      "SQL & Data Analysis",
      "API & Web Services",
      "RPA (UiPath Advanced Developer)",
      "ERP / Microsoft Dynamics Integration",
      "Endpoint Security & IT Asset Management",
      "SoapUI / Systems Integration Testing",
    ],
  },
  {
    category: "Leadership & Delivery",
    icon: "🤝",
    items: [
      "Stakeholder & Executive Communication",
      "Cross-functional Team Leadership",
      "Agile / Scrum (PSM I Certified)",
      "Product Enablement Programs",
      "Steering Committee Reporting",
      "Vendor & External Partner Management",
    ],
  },
];

const certs = [
  { name: "Certified Product Manager", org: "Product Focus", year: "2022" },
  { name: "Google Project Management", org: "Google", year: "2022" },
  { name: "PSM I – Professional Scrum Master", org: "Scrum.org", year: "2017" },
  { name: "UiPath RPA Advanced Developer", org: "UiPath", year: "2019" },
  { name: "ITIL Foundation", org: "AXELOS", year: "2015" },
];

const tools = [
  "Jira", "Confluence", "Figma", "Balsamiq", "Tableau",
  "MS Project", "Visio", "Excel", "SoapUI", "UiPath", "SQL", "MS Dynamics",
];

export default function Expertise() {
  const ref = useReveal();

  return (
    <section id="expertise" style={{ padding: "120px 32px", background: "var(--bg-secondary)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span className="section-divider" />
            <span className="section-tag">Expertise</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Skills that drive<br /><em style={{ color: "var(--accent)" }}>real outcomes</em>
          </h2>
        </div>

        {/* Skill lists — 2x2 grid */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 56 }}>
          {skillGroups.map((group) => (
            <div key={group.category} className="card" style={{ borderRadius: 16, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22, paddingBottom: 18, borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontSize: 22 }}>{group.icon}</span>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.01em" }}>{group.category}</h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {group.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.4 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: Certs + Tools + Languages */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 18 }}>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {certs.map((c) => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{c.org}</div>
                  </div>
                  <span className="badge">{c.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Tools */}
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>Tools & Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {tools.map((t) => (
                  <span
                    key={t}
                    style={{ padding: "8px 15px", borderRadius: 8, border: "1px solid var(--border)", fontSize: 13, color: "var(--text-secondary)", background: "var(--surface)", cursor: "default", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>Languages</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { lang: "Turkish", level: "Native" },
                  { lang: "English", level: "Fluent" },
                  { lang: "German", level: "Intermediate (B1.2)" },
                ].map((l) => (
                  <div key={l.lang} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{l.lang}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
