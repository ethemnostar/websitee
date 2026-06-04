"use client";
import { ExternalLink, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 32px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <div>
          <div className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
            EN<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Senior Product Manager — Ditzingen, Germany</div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { icon: <ExternalLink size={16} />, href: "https://linkedin.com/in/ethemnostar" },
            { icon: <Mail size={16} />, href: "mailto:ethemnostar@gmail.com" },
            { icon: <Phone size={16} />, href: "tel:+4917628950080" },
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ width: 38, height: 38, borderRadius: 9, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
              {s.icon}
            </a>
          ))}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Ethem Nostar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
