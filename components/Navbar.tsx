"use client";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = ["About", "Experience", "Expertise", "Portfolio", "Blog", "Contact"];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-soft)" : "1px solid transparent",
      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      padding: "0 40px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>E</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Ethem Nostar
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "0.01em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
              {l}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={toggle} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", transition: "all 0.2s", boxShadow: "var(--shadow-sm)" }}>
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <a href="#contact" className="hide-mobile" style={{ background: "var(--accent)", color: "#fff", padding: "9px 22px", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", letterSpacing: "0.01em", boxShadow: "var(--shadow-sm)", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            Get in Touch
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile" style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", display: "none" }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "16px 40px 24px", boxShadow: "var(--shadow-md)" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "11px 0", color: "var(--text-secondary)", textDecoration: "none", fontSize: 15, borderBottom: "1px solid var(--border-soft)" }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
