"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Mail, ExternalLink, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" style={{ padding: "120px 32px" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <span className="section-divider" />
            <span className="section-tag">Contact</span>
            <span className="section-divider" style={{ marginRight: 0, marginLeft: 0 }} />
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Let's build something<br /><em style={{ color: "var(--accent)" }}>remarkable together</em>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto" }}>
            Open to senior product roles, advisory positions, and strategic conversations. I'd love to connect.
          </p>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
          {/* Left info */}
          <div>
            <div className="card" style={{ borderRadius: 16, padding: 32, marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 24 }}>Get in touch</h3>
              {[
                { icon: <Mail size={16} />, label: "Email", value: "ethemnostar@gmail.com", href: "mailto:ethemnostar@gmail.com" },
                { icon: <Phone size={16} />, label: "Phone", value: "+49 176 28950080", href: "tel:+4917628950080" },
                { icon: <MapPin size={16} />, label: "Location", value: "Ditzingen, Germany", href: null },
                { icon: <ExternalLink size={16} />, label: "LinkedIn", value: "linkedin.com/in/ethemnostar", href: "https://linkedin.com/in/ethemnostar" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: 14, color: "var(--text-primary)", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}>
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: 14, color: "var(--text-primary)" }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-border)", borderRadius: 16, padding: 24 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>Open to opportunities</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Actively exploring senior PM and Head of Product roles in B2B SaaS. Flexible on location (hybrid/remote).
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="card" style={{ borderRadius: 16, padding: 40 }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "var(--text-primary)", marginBottom: 10 }}>Message sent!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[
                    { id: "name", label: "Your Name", placeholder: "John Smith", type: "text" },
                    { id: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", letterSpacing: "0.04em", marginBottom: 8 }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="form-input"
                        value={form[f.id as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 14 }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", letterSpacing: "0.04em", marginBottom: 8 }}>Subject</label>
                  <input
                    type="text"
                    placeholder="Senior PM Role / Advisory / Speaking"
                    required
                    className="form-input"
                    value={form.subject}
                    onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 14 }}
                  />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", letterSpacing: "0.04em", marginBottom: 8 }}>Message</label>
                  <textarea
                    placeholder="Tell me about the role or opportunity..."
                    required
                    rows={5}
                    className="form-input"
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 10, fontSize: 14, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ width: "100%", background: "var(--accent)", color: "#fff", border: "none", padding: "15px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "opacity 0.2s", opacity: status === "sending" ? 0.7 : 1 }}
                >
                  {status === "sending" ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
