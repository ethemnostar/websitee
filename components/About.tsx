"use client";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" style={{ padding: "120px 32px", background: "var(--bg-secondary)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left */}
          <div className="reveal">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span className="section-divider" />
              <span className="section-tag">About Me</span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: 28 }}>
              Building products that<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>matter at scale</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 20 }}>
              I'm a Senior Product Manager with over 15 years of experience spanning software, telecom, banking, and aviation. Currently at TeamViewer, I own the end-to-end strategy for the Remote Management suite — from Device Monitoring and Asset Management to Endpoint Protection.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 36 }}>
              My approach blends deep technical fluency with sharp commercial instincts. I've led pricing & packaging strategy, architected software licensing models, and forged strategic partnerships with companies like Lansweeper and Malwarebytes.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="mailto:ethemnostar@gmail.com" style={{ background: "var(--accent)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                Contact Me
              </a>
              <a href="#experience" style={{ color: "var(--accent)", padding: "12px 24px", border: "1px solid var(--accent-border)", borderRadius: 8, fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
                My Journey →
              </a>
            </div>
          </div>

          {/* Right — fact cards */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { icon: "🎯", title: "Product Strategy", desc: "Vision-to-execution across complex B2B SaaS platforms" },
              { icon: "💰", title: "Pricing & Packaging", desc: "Commercial model design with price sensitivity analysis" },
              { icon: "🤝", title: "Partnerships", desc: "Lansweeper & Malwarebytes technical integrations" },
              { icon: "⚙️", title: "Agile Delivery", desc: "PM + PO hybrid — backlog ownership & engineering alignment" },
            ].map((item, i) => (
              <div key={i} className="card" style={{ borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry strip */}
        <div className="reveal" style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span className="section-tag">Industries</span>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["B2B SaaS / Software", "Telecom (Turkcell)", "Banking (Garanti BBVA)", "Aviation (Turkish Airlines)", "Healthcare (MSD)", "Automation (Dogus)"].map(ind => (
              <span key={ind} style={{ padding: "8px 18px", borderRadius: 40, border: "1px solid var(--border)", fontSize: 13, color: "var(--text-secondary)", background: "var(--surface)" }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
