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
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            EN<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="hidden-mobile">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover-line"
              style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={toggle}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", transition: "all 0.2s" }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="hidden-mobile"
            style={{ background: "var(--accent)", color: "#fff", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none", letterSpacing: "0.02em", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", display: "none" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "16px 32px 24px" }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", color: "var(--text-secondary)", textDecoration: "none", fontSize: 15, borderBottom: "1px solid var(--border)" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
