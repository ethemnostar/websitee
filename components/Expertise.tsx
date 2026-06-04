"use client";
import { useReveal } from "@/hooks/useReveal";

const skills = [
  {
    category: "Product Management",
    icon: "🎯",
    items: [
      { name: "Product Strategy & Vision", level: 95 },
      { name: "Roadmap Planning", level: 92 },
      { name: "User Story Writing", level: 90 },
      { name: "Backlog Management", level: 93 },
      { name: "Go-to-Market Strategy", level: 88 },
    ],
  },
  {
    category: "Commercial & Business",
    icon: "💰",
    items: [
      { name: "Pricing & Packaging", level: 90 },
      { name: "Cost Structure Analysis", level: 85 },
      { name: "Partner Ecosystem Mgmt", level: 88 },
      { name: "Commercial Negotiations", level: 82 },
      { name: "Revenue Modeling", level: 80 },
    ],
  },
  {
    category: "Technical Skills",
    icon: "⚙️",
    items: [
      { name: "SQL & Data Analysis", level: 78 },
      { name: "API & Web Services", level: 82 },
      { name: "RPA (UiPath)", level: 80 },
      { name: "Licensing Architecture", level: 85 },
      { name: "ERP / MS Dynamics", level: 75 },
    ],
  },
  {
    category: "Leadership & Delivery",
    icon: "🤝",
    items: [
      { name: "Stakeholder Management", level: 95 },
      { name: "Cross-functional Leadership", level: 92 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Customer Discovery", level: 88 },
      { name: "Executive Communication", level: 90 },
    ],
  },
];

const certs = [
  { name: "Certified Product Manager", org: "Product Focus", year: "2022" },
  { name: "Google Project Mgmt", org: "Google", year: "2022" },
  { name: "PSM I", org: "Scrum.org", year: "2017" },
  { name: "UiPath RPA Advanced Dev", org: "UiPath", year: "2019" },
  { name: "ITIL Foundation", org: "AXELOS", year: "2015" },
];

const tools = [
  "Jira", "Confluence", "Figma", "Balsamiq", "Tableau",
  "MS Project", "Visio", "Excel", "SoapUI", "UiPath", "SQL", "MS Dynamics"
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

        {/* Skill bars */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginBottom: 64 }}>
          {skills.map((group) => (
            <div key={group.category} className="card" style={{ borderRadius: 16, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: 24 }}>{group.icon}</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{group.category}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {group.items.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{skill.name}</span>
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 4, background: "var(--border)", borderRadius: 2 }}>
                      <div style={{ height: "100%", width: `${skill.level}%`, background: "linear-gradient(90deg, var(--accent), var(--accent-light))", borderRadius: 2, transition: "width 1s ease" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications + Tools */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certs.map(c => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{c.org}</div>
                  </div>
                  <span className="badge">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Tools & Stack</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {tools.map(t => (
                <span key={t} style={{ padding: "9px 16px", borderRadius: 8, border: "1px solid var(--border)", fontSize: 13, color: "var(--text-secondary)", background: "var(--surface)", cursor: "default", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, color: "var(--text-primary)" }}>Languages</h4>
              {[{ lang: "English", level: "Fluent", pct: 95 }, { lang: "German", level: "B1.2", pct: 45 }, { lang: "Turkish", level: "Native", pct: 100 }].map(l => (
                <div key={l.lang} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{l.lang}</span>
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{l.level}</span>
                  </div>
                  <div style={{ height: 3, background: "var(--border)", borderRadius: 2 }}>
                    <div style={{ height: "100%", width: `${l.pct}%`, background: "var(--accent)", borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
