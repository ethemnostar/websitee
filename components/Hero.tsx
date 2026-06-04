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
        }, i * 130);
      });
    }, 80);
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 68 }} ref={ref}>
      
      {/* Background — warm subtle gradient + dot grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Soft warm gradient top-right */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(180,83,9,0.06) 0%, transparent 65%)" }} />
        {/* Warm glow bottom-left */}
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 65%)" }} />
        {/* Dot grid */}
        <svg width="100%" height="100%" style={{ opacity: 0.35 }}>
          <defs>
            <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--border)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", width: "100%", position: "relative", zIndex: 1 }}>
        
        {/* Eyebrow */}
        <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", display: "flex", alignItems: "center", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge">Senior Product Manager</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
            <MapPin size={12} /> Stuttgart, Germany
          </span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>· 15+ years experience</span>
        </div>

        {/* Headline */}
        <div className="hero-reveal font-display" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", marginBottom: 28 }}>
          <h1 style={{ fontSize: "clamp(48px, 7.5vw, 88px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
            Ethem Nostar
          </h1>
          <h2 style={{ fontSize: "clamp(22px, 3.2vw, 38px)", fontWeight: 400, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--text-secondary)", marginTop: 10 }}>
            Senior Product Manager
          </h2>
        </div>

        {/* Description */}
        <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", marginBottom: 44, maxWidth: 580 }}>
          <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--text-secondary)", fontWeight: 300 }}>
            Driving B2B SaaS product strategy, pricing & packaging design, and enterprise platform transformation at TeamViewer — with a track record across software, telecom, banking, and aviation.
          </p>
        </div>

        {/* Stats row */}
        <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", display: "flex", gap: 0, marginBottom: 48, borderLeft: "2px solid var(--accent)", paddingLeft: 24 }}>
          {[
            { num: "15+", label: "Years Experience" },
            { num: "4", label: "Industries" },
            { num: "6+", label: "Companies" },
          ].map((s, i) => (
            <div key={s.label} style={{ paddingRight: 40, borderRight: i < 2 ? "1px solid var(--border)" : "none", marginRight: i < 2 ? 40 : 0 }}>
              <div className="font-display" style={{ fontSize: 38, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: 5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{ background: "var(--accent)", color: "#fff", padding: "13px 30px", borderRadius: 9, fontWeight: 600, textDecoration: "none", fontSize: 14, boxShadow: "var(--shadow-sm)", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            Get In Touch
          </a>
          <a href="#experience" style={{ background: "var(--surface)", color: "var(--text-primary)", padding: "13px 30px", borderRadius: 9, fontWeight: 500, textDecoration: "none", fontSize: 14, border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)", transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
            View Experience
          </a>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { icon: <ExternalLink size={15} />, href: "https://linkedin.com/in/ethemnostar" },
              { icon: <Mail size={15} />, href: "mailto:ethemnostar@gmail.com" },
            ].map((btn, i) => (
              <a key={i} href={btn.href} target={btn.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ width: 42, height: 42, borderRadius: 9, border: "1px solid var(--border)", background: "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none", boxShadow: "var(--shadow-sm)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                {btn.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Current role card — bottom right corner */}
        <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", position: "absolute", right: 40, bottom: 40 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 24px", boxShadow: "var(--shadow-md)", minWidth: 230 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Current Role</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📡</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>TeamViewer</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>since Jan 2023</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.4 }}>Sr. PM — Remote Management</div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 72, display: "flex", justifyContent: "center" }}>
          <a href="#about" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, textDecoration: "none", color: "var(--text-muted)", fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", animation: "scrollBounce 2.5s ease-in-out infinite" }}>
            <span>Scroll</span>
            <ArrowDown size={14} />
          </a>
        </div>
        <style>{`@keyframes scrollBounce { 0%,100%{transform:translateY(0);opacity:0.6} 50%{transform:translateY(5px);opacity:1} }`}</style>
      </div>
    </section>
  );
}
