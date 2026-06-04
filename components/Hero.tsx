"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, ExternalLink, Mail, MapPin } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => {
      el.querySelectorAll(".hero-reveal").forEach((node, i) => {
        setTimeout(() => {
          (node as HTMLElement).style.opacity = "1";
          (node as HTMLElement).style.transform = "translateY(0)";
        }, i * 120);
      });
    }, 100);
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 72 }} ref={ref}>
      {/* Background geometric grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Accent orb */}
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          {/* Left content */}
          <div>
            {/* Tag */}
            <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div className="badge">Senior Product Manager</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--text-muted)", fontSize: 13 }}>
                <MapPin size={12} />
                <span>Ditzingen, Germany</span>
              </div>
            </div>

            {/* Name */}
            <div className="hero-reveal font-display" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", marginBottom: 8 }}>
              <div style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
                Ethem
              </div>
              <div style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
                <span className="gradient-text">Nostar</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", marginTop: 28, marginBottom: 40, maxWidth: 560 }}>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-secondary)", fontWeight: 300 }}>
                Driving product strategy and commercial model design for enterprise SaaS — turning complex B2B challenges into scalable, user-centric solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "flex", gap: 40, marginBottom: 48 }}>
              {[
                { num: "15+", label: "Years Experience" },
                { num: "4", label: "Industries" },
                { num: "3+", label: "Countries" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display" style={{ fontSize: 36, fontWeight: 600, color: "var(--accent)", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" style={{ background: "var(--accent)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 600, textDecoration: "none", fontSize: 14, letterSpacing: "0.02em", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                Get In Touch
              </a>
              <a href="#experience" style={{ background: "transparent", color: "var(--text-primary)", padding: "14px 32px", borderRadius: 10, fontWeight: 500, textDecoration: "none", fontSize: 14, border: "1px solid var(--border)", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
                View Experience
              </a>
              <div style={{ display: "flex", gap: 12, marginLeft: 8 }}>
                <a href="https://linkedin.com/in/ethemnostar" target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                  <ExternalLink size={16} />
                </a>
                <a href="mailto:ethemnostar@gmail.com"
                  style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — decorative card */}
          <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
            <div style={{ width: 260, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, position: "relative" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Current Role</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 18 }}>📡</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>TeamViewer</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Göppingen, DE</div>
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>Sr. Product Manager</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 16 }}>Remote Management Suite</div>
              <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["B2B SaaS", "Pricing", "RMM"].map(t => (
                  <span key={t} className="badge" style={{ fontSize: 10, padding: "3px 8px" }}>{t}</span>
                ))}
              </div>
              {/* Live dot */}
              <div style={{ position: "absolute", top: 20, right: 20, display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 2px rgba(34,197,94,0.2)", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 10, color: "var(--text-muted)" }}>Open to opportunities</span>
              </div>
            </div>
            <style>{`@keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.5 } }`}</style>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 80, display: "flex", justifyContent: "center" }}>
          <a href="#about" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textDecoration: "none", color: "var(--text-muted)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", animation: "bounce 2s infinite" }}>
            <span>Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
        <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
      </div>
    </section>
  );
}
