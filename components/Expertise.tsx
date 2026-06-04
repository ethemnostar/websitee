"use client";
import { useReveal } from "@/hooks/useReveal";

const coreSkills = [
  "End-to-end product ownership (vision → roadmap → delivery)",
  "Product discovery: customer interviews, jobs-to-be-done, problem framing",
  "Backlog management, user story writing, sprint planning",
  "OKR definition and product metrics design",
  "Feature prioritization frameworks (RICE, MoSCoW, opportunity scoring)",
  "Go-to-market planning and product launch execution",
  "Cross-functional stakeholder alignment (Engineering, Sales, Marketing, Legal)",
  "Product-led and sales-assisted growth models",
  "B2B SaaS product strategy and platform thinking",
];

const specialisms = [
  {
    title: "Pricing & Packaging",
    icon: "💰",
    desc: "End-to-end ownership of commercial model design, price sensitivity analysis, tier architecture, and ERP/billing integration.",
  },
  {
    title: "Remote Management (RMM)",
    icon: "📡",
    desc: "Deep domain expertise in Device Monitoring, IT Asset Discovery, Patch Management, and Endpoint Protection products.",
  },
  {
    title: "Strategic Partnerships",
    icon: "🤝",
    desc: "Technical integration and commercial negotiation with ISV partners (Lansweeper, Malwarebytes). Partner ecosystem enablement.",
  },
  {
    title: "Software Licensing",
    icon: "📋",
    desc: "Licensing architecture, technical license model design, and ERP/Microsoft Dynamics alignment across product portfolios.",
  },
  {
    title: "Enterprise Automation (RPA)",
    icon: "🤖",
    desc: "UiPath Advanced Developer certified. Established RPA Center of Excellence at Dogus Group, leading a team of 7.",
  },
  {
    title: "Agile / Scrum",
    icon: "⚡",
    desc: "PSM I certified. Acts as both Product Manager and Product Owner — managing backlog, engineering delivery, and release planning.",
  },
];

const certs = [
  { name: "Certified Product Manager", org: "Product Focus", year: "2022" },
  { name: "Google Project Management", org: "Google", year: "2022" },
  { name: "PSM I – Professional Scrum Master", org: "Scrum.org", year: "2017" },
  { name: "UiPath RPA Advanced Developer", org: "UiPath", year: "2019" },
  { name: "ITIL Foundation", org: "AXELOS", year: "2015" },
];

const tools = ["Jira", "Confluence", "Figma", "Balsamiq", "Tableau", "MS Project", "Visio", "Excel", "SoapUI", "UiPath", "SQL", "MS Dynamics"];

export default function Expertise() {
  const ref = useReveal();

  return (
    <section id="expertise" style={{ padding: "120px 32px", background: "var(--bg-secondary)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span className="section-divider" />
            <span className="section-tag">Expertise</span>
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Core skills &<br /><em style={{ color: "var(--accent)" }}>deep specialisms</em>
          </h2>
        </div>

        {/* Product Management — hero block */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div className="card" style={{ borderRadius: 16, padding: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, paddingBottom: 22, borderBottom: "1px solid var(--border)" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🎯</div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>Product Management</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>Core competency — 15+ years building and delivering B2B products</p>
              </div>
            </div>
            <div className="pm-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px 32px" }}>
              {coreSkills.map((skill) => (
                <div key={skill} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", marginTop: 8, flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.5 }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialisms grid */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>Domain Specialisms</h3>
          <div className="specialism-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {specialisms.map((s) => (
              <div key={s.title} className="card" style={{ borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>{s.title}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Certs + Tools + Languages */}
        <div className="reveal bottom-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>Tools & Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tools.map((t) => (
                  <span key={t} style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid var(--border)", fontSize: 13, color: "var(--text-secondary)", background: "var(--surface)", cursor: "default", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>Languages</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
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
