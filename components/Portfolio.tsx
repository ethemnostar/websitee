"use client";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    title: "TeamViewer ONE Platform Transformation",
    category: "Product Strategy",
    description: "Led end-to-end product strategy for a multi-product SaaS platform transformation, integrating Remote Management, Asset Discovery, and Endpoint Protection into a unified TeamViewer ONE offering.",
    outcomes: ["Unified product vision across 3 product lines", "New commercial model launched", "Drove adoption across enterprise customers"],
    tags: ["B2B SaaS", "Platform Strategy", "Enterprise"],
    icon: "🚀",
    accent: "#0057FF",
  },
  {
    title: "Pricing & Packaging Strategy – TeamViewer ONE",
    category: "Commercial Strategy",
    description: "Designed and executed end-to-end pricing & packaging strategy including cost structure evaluation, price sensitivity analysis, and go-to-market packaging decisions for the full product portfolio.",
    outcomes: ["Price sensitivity analysis across market segments", "New tier structure launched", "ERP integration with MS Dynamics"],
    tags: ["Pricing", "GTM", "Commercial Model"],
    icon: "💰",
    accent: "#E8A83E",
  },
  {
    title: "Malwarebytes Endpoint Protection Integration",
    category: "Strategic Partnership",
    description: "Led the strategic partnership with Malwarebytes — from commercial negotiations to technical integration — enabling native endpoint protection within TeamViewer's Remote Management suite.",
    outcomes: ["Full API integration delivered", "Go-to-market enablement for sales", "Partner licensing model defined"],
    tags: ["Partnership", "Endpoint Security", "Integration"],
    icon: "🛡️",
    accent: "#EF4444",
  },
  {
    title: "Lansweeper Asset Discovery Integration",
    category: "Strategic Partnership",
    description: "Drove the Lansweeper integration partnership, adding powerful IT Asset Discovery capabilities to the Remote Management portfolio. Managed technical scope, pricing model, and commercial negotiations.",
    outcomes: ["IT Asset Discovery feature added to platform", "Bundled pricing model created", "Beta launched to enterprise segment"],
    tags: ["Asset Management", "Partnership", "Enterprise"],
    icon: "🔍",
    accent: "#22C55E",
  },
  {
    title: "RPA Center of Excellence – Dogus Group",
    category: "Automation",
    description: "Established and scaled an RPA Center of Excellence across the Dogus Group's technology division. Led a team of 7 developers, delivered multiple enterprise automation programs end-to-end.",
    outcomes: ["CoE established from scratch", "7-person team built and led", "Multiple automation workflows in production"],
    tags: ["RPA", "UiPath", "Automation", "CoE"],
    icon: "🤖",
    accent: "#8B5CF6",
  },
  {
    title: "Remote Management Ambassador Program",
    category: "Enablement",
    description: "Initiated and led an internal enablement program to align Sales, Support, and R&D around the Remote Management portfolio, driving awareness and internal advocacy among sales teams.",
    outcomes: ["Sales enablement sessions delivered", "Onboarding materials created", "Cross-team adoption improved"],
    tags: ["Enablement", "Sales", "Internal Program"],
    icon: "📣",
    accent: "#F59E0B",
  },
];

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section id="portfolio" style={{ padding: "120px 32px" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span className="section-divider" />
              <span className="section-tag">Portfolio</span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Key initiatives &<br /><em style={{ color: "var(--accent)" }}>impact stories</em>
            </h2>
          </div>
        </div>

        <div className="reveal portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className="card"
              style={{ borderRadius: 16, padding: 28, cursor: "pointer", position: "relative", overflow: "hidden" }}
            >
              {/* Accent gradient top */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
              
              <div style={{ fontSize: 32, marginBottom: 16 }}>{p.icon}</div>
              <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>{p.category}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>
              
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>Outcomes</div>
                {p.outcomes.map((o, j) => (
                  <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.accent, marginTop: 7, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>{o}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => <span key={t} className="badge" style={{ fontSize: 10, padding: "3px 8px" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
