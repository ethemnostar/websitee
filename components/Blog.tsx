"use client";
import { useReveal } from "@/hooks/useReveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Why Pricing Strategy Is the Underrated Core PM Skill",
    excerpt: "Most product managers obsess over features. The best ones obsess over value exchange. Here's how pricing literacy transformed my product thinking.",
    date: "March 2025",
    readTime: "7 min",
    category: "Product Strategy",
    tags: ["Pricing", "Product Management"],
    gradient: "linear-gradient(135deg, #0057FF20, #E8A83E20)",
  },
  {
    title: "From Project Manager to Product Manager: Lessons from the Trenches",
    excerpt: "After years in project delivery, I made the jump to product ownership. The transition taught me more about value, customers, and strategy than any certification.",
    date: "January 2025",
    readTime: "6 min",
    category: "Career",
    tags: ["Career", "Product", "Leadership"],
    gradient: "linear-gradient(135deg, #8B5CF620, #22C55E20)",
  },
  {
    title: "Building Strategic Partnerships That Actually Deliver Value",
    excerpt: "Leading integrations with Lansweeper and Malwarebytes gave me a front-row seat to how great partnerships are forged — and how most fail before they start.",
    date: "November 2024",
    readTime: "8 min",
    category: "Partnerships",
    tags: ["Partnerships", "B2B", "Integration"],
    gradient: "linear-gradient(135deg, #EF444420, #F59E0B20)",
  },
  {
    title: "RMM Products in 2025: What Every PM Should Know",
    excerpt: "Remote Monitoring & Management is a growing but misunderstood space. Here's my breakdown of the landscape, the key players, and where the opportunity lies.",
    date: "September 2024",
    readTime: "10 min",
    category: "Industry",
    tags: ["RMM", "Industry", "Market"],
    gradient: "linear-gradient(135deg, #22C55E20, #0057FF20)",
  },
];

export default function Blog() {
  const ref = useReveal();

  return (
    <section id="blog" style={{ padding: "120px 32px", background: "var(--bg-secondary)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span className="section-divider" />
              <span className="section-tag">Blog</span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 54px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Thoughts on product,<br /><em style={{ color: "var(--accent)" }}>strategy & growth</em>
            </h2>
          </div>
          <a href="#" style={{ fontSize: 13, color: "var(--accent)", textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
            All articles <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Featured post */}
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="card" style={{ borderRadius: 16, padding: 40, background: posts[0].gradient, borderColor: "var(--border)", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <span className="badge">{posts[0].category}</span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{posts[0].date} · {posts[0].readTime} read</span>
              </div>
              <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "var(--text-primary)", marginBottom: 14, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{posts[0].title}</h3>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>{posts[0].excerpt}</p>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--accent)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                Read article <ArrowUpRight size={14} />
              </a>
            </div>
            <div style={{ fontSize: 64, opacity: 0.4 }}>✍️</div>
          </div>
        </div>

        {/* Other posts grid */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {posts.slice(1).map((p, i) => (
            <div key={i} className="card" style={{ borderRadius: 16, padding: 28, cursor: "pointer" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
                <span className="badge" style={{ fontSize: 10, padding: "3px 8px" }}>{p.category}</span>
                <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{p.readTime} read</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", marginBottom: 12, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 20 }}>{p.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.date}</span>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--accent)", fontSize: 13, textDecoration: "none" }}>
                  Read <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
